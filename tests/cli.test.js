const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const cli = path.join(root, 'bin', 'cli.js');
const skillDir = '.claude/skills/make-slide';
const referenceNames = ['themes', 'layouts', 'slide-types', 'html-spec', 'core-features', 'pptx-spec'];
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const run = (args, cwd = root, entry = cli) => spawnSync(process.execPath, [entry, ...args], {
  cwd, encoding: 'utf8', timeout: 30000,
});

function tempProject(t) {
  const parent = path.resolve(os.tmpdir());
  const dir = fs.mkdtempSync(path.join(parent, 'make-slide-test-'));
  t.after(() => {
    assert.equal(path.dirname(path.resolve(dir)), parent);
    assert.ok(path.basename(dir).startsWith('make-slide-test-'));
    fs.rmSync(dir, { recursive: true, force: true });
  });
  return dir;
}

test('CLI lists 11 themes with education last and uses the mirror catalog', () => {
  const result = run(['themes']);
  assert.equal(result.status, 0, result.stderr);
  const rows = result.stdout.split(/\r?\n/).filter((line) => /^\s+\d+\s+/.test(line));
  assert.equal(rows.length, 11);
  assert.match(rows.at(-1), /^\s+11\s+education\s/);
  assert.match(result.stdout, /https:\/\/github.com\/edumediamon\/slides\/tree\/main\/gallery/);
  const help = run(['help']);
  assert.equal(help.status, 0);
  assert.match(help.stdout, /node bin\/cli.js/);
  assert.doesNotMatch(help.stdout, /vercel\.app|npx make-slide/);
  assert.equal(run(['unknown-command']).status, 1);
});

test('init copies the complete skill and preserves existing AI config content on repeat', (t) => {
  const dir = tempProject(t);
  const configs = ['CLAUDE.md', 'AGENTS.md', 'GEMINI.md', '.cursorrules'];
  for (const file of configs) fs.writeFileSync(path.join(dir, file), '# 기존 설정\nKeep this instruction.\n');
  for (let attempt = 0; attempt < 2; attempt++) {
    const result = run(['init'], dir);
    assert.equal(result.status, 0, result.stderr);
  }
  for (const file of ['SKILL.md', ...referenceNames.map((name) => `references/${name}.md`)]) {
    assert.equal(fs.readFileSync(path.join(dir, skillDir, file), 'utf8'), read(`${skillDir}/${file}`));
  }
  for (const file of configs) {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    assert.ok(content.startsWith('# 기존 설정\nKeep this instruction.\n'));
    assert.equal(content.match(/^## \/make-slide$/gm).length, 1);
    assert.match(content, /edumediamon\/slides/);
  }
});

test('init without AI configs succeeds and explains manual setup', (t) => {
  const dir = tempProject(t);
  const result = run(['init'], dir);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /No AI config file found/);
  assert.ok(fs.existsSync(path.join(dir, skillDir, 'SKILL.md')));
  assert.equal(fs.existsSync(path.join(dir, 'CLAUDE.md')), false);
});

test('every catalog and skill mirror link resolves to a checked-in reference path', () => {
  const catalog = read('gallery/README.md');
  const themeRefs = read(`${skillDir}/references/themes.md`);
  const themes = fs.readdirSync(path.join(root, 'themes')).sort();
  assert.equal(themes.length, 11);
  for (const id of themes) {
    assert.match(catalog, new RegExp(`\\| \\d+ \\| \\x60${id}\\x60 \\|`));
    assert.ok(catalog.includes(`https://edumediamon.github.io/slides/themes/${id}/reference.html`));
    assert.ok(themeRefs.includes(`/main/themes/${id}/reference.html`));
  }
  for (const file of ['SKILL.md', 'gallery/README.md', `${skillDir}/references/themes.md`, `${skillDir}/references/layouts.md`]) {
    for (const match of read(file).matchAll(/https:\/\/(?:raw\.githubusercontent\.com\/edumediamon\/slides\/main|github\.com\/edumediamon\/slides\/blob\/main|edumediamon\.github\.io\/slides)\/((?:themes|layouts|examples)\/[^\s)]+)/g)) {
      assert.ok(fs.existsSync(path.join(root, match[1])), `${file}: missing ${match[1]}`);
    }
  }
  for (const name of referenceNames) {
    assert.ok(read(`${skillDir}/SKILL.md`).includes(`references/${name}.md`));
  }
  assert.equal(fs.existsSync(path.join(root, 'gallery/index.html')), false);
  assert.equal(fs.existsSync(path.join(root, 'vercel.json')), false);
  assert.match(read('index.md'), /include_relative gallery\/README\.md/);
  for (const file of ['README.md', 'SKILL.md', 'bin/cli.js', `${skillDir}/SKILL.md`]) {
    assert.doesNotMatch(read(file), /make-slide\.vercel\.app|raw\.githubusercontent\.com\/kuneosu\/make-slide|10 themes|10 Themes|10개 테마/);
  }
});

test('bundled core snippets match their source and theme 11 is in both README tables', () => {
  const snippets = read(`${skillDir}/references/core-features.md`);
  for (const file of ['navigation.js', 'fullscreen.js', 'speaker-notes.js', 'base.css', 'pdf-export.css']) {
    assert.ok(snippets.includes(read(`core/${file}`).trim()), `${file} snippet differs from source`);
  }
  assert.equal(read('README.md').match(/\| 11 \| `education` \|/g).length, 2);
});

test('npm package includes an installable skill and works without the checkout files', (t) => {
  const dir = tempProject(t);
  assert.ok(process.env.npm_execpath, 'Run through npm test to locate the npm CLI');
  const packed = spawnSync(process.execPath, [process.env.npm_execpath, 'pack', '--dry-run', '--json', '--ignore-scripts', '--cache', path.join(dir, 'cache')], {
    cwd: root, encoding: 'utf8', timeout: 60000,
  });
  assert.equal(packed.status, 0, packed.stderr);
  const files = JSON.parse(packed.stdout)[0].files.map((file) => file.path);
  for (const file of ['bin/cli.js', 'SKILL.md', `${skillDir}/SKILL.md`, ...referenceNames.map((name) => `${skillDir}/references/${name}.md`)]) {
    assert.ok(files.includes(file), `${file} missing from npm package`);
  }
  const bundled = path.join(dir, 'package');
  for (const file of files) {
    const target = path.join(bundled, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(root, file), target);
  }
  const project = path.join(dir, 'project');
  fs.mkdirSync(project);
  assert.equal(run(['init'], project, path.join(bundled, 'bin/cli.js')).status, 0);
  assert.ok(fs.existsSync(path.join(project, skillDir, 'references/themes.md')));
  assert.equal(run(['init'], bundled, path.join(bundled, 'bin/cli.js')).status, 0, 'init in its own checkout must also work');
});
