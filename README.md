# make-slide 🎯

> **GitHub mirror:** [edumediamon/slides](https://github.com/edumediamon/slides) extends [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) with theme 11, `education`. The original `make-slide` npm package is separate; use the GitHub commands below for this mirror. Upstream copyright and MIT license are preserved.

<a id="github-mirror"></a>

## GitHub 미러 사용 및 배포

- 테마 카탈로그: [gallery/README.md](gallery/README.md) — GitHub에서 바로 확인
- Pages 미리보기 주소: https://edumediamon.github.io/slides/ — 아래 배포 설정을 완료한 후 사용
- `gallery/index.html`과 Vercel 설정을 제거하고, Markdown 카탈로그를 GitHub Pages에서도 재사용합니다. 테마 HTML은 `themes/<id>/reference.html`에서 제공합니다.

```bash
git clone https://github.com/edumediamon/slides.git
cd slides
node bin/cli.js themes
node bin/cli.js init
npm test
```

다른 프로젝트에 설치할 때는 아래의 GitHub 패키지 명령을 사용하세요. 체크아웃에서 설치하려면 대상 프로젝트 폴더에서 `node /path/to/slides/bin/cli.js init`을 실행합니다. Node.js 22 이상이 필요하며, 이 저장소의 테스트에는 추가 패키지 설치가 필요 없습니다. `init`은 기존 스킬 파일을 현재 미러 버전으로 갱신하고, 기존 AI 설정에 `/make-slide` 참조가 없을 때 추가합니다.

### GitHub Pages 활성화

1. 변경 파일을 이 미러 저장소의 `main`에 커밋하고 푸시합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
3. **Actions → Test and deploy GitHub Pages → Run workflow**를 실행하거나 `main`에 새 커밋을 푸시합니다.
4. `build`와 `deploy`가 성공한 뒤 위 Pages 주소 및 [education 미리보기](https://edumediamon.github.io/slides/themes/education/reference.html)를 확인합니다. PR에서는 테스트와 빌드만 실행합니다.

다른 이름의 저장소로 복제할 때는 `_config.yml`의 `url`/`baseurl`과 CLI·문서의 미러 URL을 함께 변경하세요. 배포 절차는 [GitHub 공식 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)를 따릅니다.


**AI-powered presentation skill that generates stunning single-file HTML slide decks.**
**AI 코딩 에이전트가 단일 HTML 파일로 고품질 프레젠테이션을 생성하는 범용 스킬.**

[![Theme Catalog](https://img.shields.io/badge/Theme_Catalog-GitHub-blue?style=for-the-badge)](https://github.com/edumediamon/slides/tree/main/gallery)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## What is make-slide?

**make-slide** is a skill (instruction set) for AI coding agents — like Claude Code, Gemini CLI, Codex, Cursor, and others — that enables them to generate professional presentation slides as a **single HTML file**.

Instead of crafting designs from scratch every time (wasting tokens and producing inconsistent results), the AI references pre-built theme templates from this repository. The result is:

- **Token-efficient** — AI fetches a reference file instead of inventing layouts
- **Consistent quality** — every presentation follows a polished, tested design system
- **Zero dependencies** — output is one `.html` file you can open anywhere

> Think of it as a **design system for AI-generated presentations**.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **11 Themes** | From dark minimal to playful pastels — [browse the gallery](https://github.com/edumediamon/slides/tree/main/gallery) |
| 📄 **Single HTML Output** | One file, no build step, no framework — just open in a browser |
| 🎤 **Speaker Notes** | Built-in presenter mode with per-slide notes (press `S`) |
| 🖨️ **PDF Export** | Print-ready via `Ctrl+P` with clean `@media print` styles |
| 🖥️ **Fullscreen** | One-key fullscreen toggle (press `F`) |
| ⌨️ **Keyboard Navigation** | Arrow keys, spacebar, touch/swipe support |
| 📥 **3 Input Modes** | Topic only / Content provided / Script provided |
| 📐 **4 Layout Styles** | Centered, Wide, Split, Editorial — [browse layouts](https://github.com/edumediamon/slides/tree/main/gallery) |
| 📊 **PPTX Export** | Generate PowerPoint files alongside HTML |
| 🖼️ **Auto Image Search** | Automatically find and place relevant images from Unsplash |
| 🤖 **Works with Any AI Tool** | Claude Code, Gemini CLI, Codex, Cursor, and more |
| 🌍 **Language-Agnostic** | Generates content in whatever language you speak |
| 📊 **CSS-Only Charts** | Bar charts, progress rings, KPI cards — no chart library needed |

---

## 🚀 Quick Start

### Install from the GitHub mirror

```bash
npm exec --package=github:edumediamon/slides -- make-slide init
```

This will:
1. Copy the skill files into your project's `.claude/skills/make-slide/`
2. Auto-detect your AI config (`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursorrules`) and inject the `/make-slide` command
3. You're ready! Type `/make-slide` in Claude Code to create presentations

### Other Commands

```bash
npm exec --package=github:edumediamon/slides -- make-slide themes    # View all 11 themes
npm exec --package=github:edumediamon/slides -- make-slide gallery   # Open theme gallery in browser
npm exec --package=github:edumediamon/slides -- make-slide help      # Show help
```

### Manual Setup (Any AI Tool)

Give your AI coding tool the following instruction:

```
Read SKILL.md from https://github.com/edumediamon/slides and create a presentation about [your topic] using the minimal-dark theme.
```

Or fetch it directly:
```
Fetch https://raw.githubusercontent.com/edumediamon/slides/main/.claude/skills/make-slide/SKILL.md and follow its instructions to create a presentation about [your topic].
```

> **Tip:** Browse themes first at [GitHub theme catalog](https://github.com/edumediamon/slides/tree/main/gallery) and tell your AI which one you like!

---

## ⚙️ How It Works

### The `.claude/skills/` Convention

make-slide uses Claude Code's native skill system. After running `npm exec --package=github:edumediamon/slides -- make-slide init`, your project gets:

```
your-project/
├── .claude/
│   └── skills/
│       └── make-slide/
│           ├── SKILL.md          ← Main instruction file
│           └── references/
│               ├── themes.md        ← 11 themes + GitHub raw URLs
│               ├── layouts.md       ← 4 layout styles
│               ├── slide-types.md   ← 12 slide type patterns
│               ├── html-spec.md     ← HTML requirements
│               ├── core-features.md ← Copy-paste JS/CSS for features
│               └── pptx-spec.md     ← PPTX conversion rules
├── CLAUDE.md                        ← Auto-updated with /make-slide command
└── ... your project files
```

When you type `/make-slide` in Claude Code, it reads the skill and follows a 10-step workflow:

1. **Analyze input** — mode (topic / content / script), slide count, output format (HTML / PPTX)
2. **Choose a theme** — pick from the [gallery](https://github.com/edumediamon/slides/tree/main/gallery) or AI recommends
3. **Choose a layout** — Centered, Wide, Split, or Editorial
4. **Image options** — no images / provide URLs / auto-search from Unsplash
5. **Generate outline** — slide-by-slide plan, following your approval requirements
6. **Fetch theme + layout reference** — downloads templates from GitHub
7. **Generate HTML** — builds presentation matching theme + layout exactly
8. **Add speaker notes** — notes with timing cues and an optional full speaking script
9. **Generate PPTX** — PowerPoint output when requested and supported by available tools
10. **Verify and deliver** — check the deck, then save `index.html` (and `presentation.pptx` if requested)

Theme files are fetched from GitHub on demand — nothing heavy is stored locally.

---

## 🎨 Themes

Browse all 11 themes in **[GitHub theme catalog](https://github.com/edumediamon/slides/tree/main/gallery)**

| # | Theme | Style | Best For |
|:-:|-------|-------|----------|
| 1 | `minimal-dark` | Clean dark, white typography | Tech talks, conferences |
| 2 | `minimal-light` | Bright white, precise type | General, academic |
| 3 | `corporate` | Navy & gold, structured | Business, reports |
| 4 | `gradient-pop` | Vibrant gradients, glassmorphism | Startups, pitches |
| 5 | `neon-terminal` | Terminal green, scanlines | Dev talks, hackathons |
| 6 | `paper` | Kraft paper, serif type | Education, workshops |
| 7 | `keynote-apple` | Dramatic dark, Apple-inspired | Product launches, keynotes |
| 8 | `magazine` | Editorial, asymmetric layout | Design, creative |
| 9 | `data-focus` | Dashboard aesthetic, clean | Data analysis, KPIs |
| 10 | `playful` | Rounded, pastel, bouncy | Workshops, casual talks |
| 11 | `education` | White canvas, green highlights, split cards | Education, exams, lectures |

---

## 📁 Project Structure

```
make-slide/
├── package.json            # npm package config
├── bin/cli.js              # CLI (init, themes, gallery)
├── .claude/skills/make-slide/  # Skill template (copied by init)
│   ├── SKILL.md
│   └── references/
│       ├── themes.md
│       ├── layouts.md
│       ├── slide-types.md
│       ├── html-spec.md
│       ├── core-features.md
│       └── pptx-spec.md
├── layouts/                # Layout references (4 styles)
│   ├── centered/
│   ├── wide/
│   ├── split/
│   └── editorial/
├── SKILL.md                # Legacy standalone skill file
├── README.md               # This file
├── LICENSE                  # MIT License
│
├── themes/                 # Theme references (11 themes)
│   ├── minimal-dark/
│   │   ├── README.md           # Design guidelines
│   │   └── reference.html      # Full example presentation
│   ├── minimal-light/
│   ├── corporate/
│   ├── gradient-pop/
│   ├── neon-terminal/
│   ├── paper/
│   ├── keynote-apple/
│   ├── magazine/
│   ├── data-focus/
│   ├── playful/
│   └── education/           # Theme 11: lectures and exam preparation
│
├── gallery/                # GitHub Markdown theme catalog
│   └── README.md
├── index.md                # GitHub Pages entry (includes the same catalog)
├── _config.yml             # GitHub Pages / Jekyll settings
├── .github/workflows/pages.yml # Tests + Pages deployment
├── tests/                  # CLI, install, and mirror-link checks
│
├── core/                   # Shared JS/CSS source
│   ├── navigation.js
│   ├── fullscreen.js
│   ├── speaker-notes.js
│   ├── pdf-export.css
│   └── base.css
│
└── examples/               # Example presentations
    └── pineone-talk-reference.html
```

---

## 🤝 Contributing

### Adding a New Theme

1. Create a folder in `themes/` with your theme ID (kebab-case):
   ```
   themes/your-theme-name/
   ```

2. Add these files:
   - `reference.html` — Complete 10-slide example with all slide types, navigation, fullscreen, speaker notes, and PDF export
   - `README.md` — Design guidelines: color palette, typography, spacing, philosophy

3. Follow the conventions in `core/` for navigation, fullscreen, speaker notes, and PDF export

4. Add the theme to `bin/cli.js`, `gallery/README.md`, both theme tables here, and the skill theme references; run `npm test`, then submit a PR.

### Guidelines
- Output must be a single `.html` file — all CSS/JS inlined
- Only external dependencies: font CDNs (Pretendard required) + Prism.js (for code blocks)
- All themes must support the full slide type set
- Test keyboard navigation, fullscreen, speaker notes, and print export

---

## 📜 License

[MIT](LICENSE) — use freely for personal and commercial projects.

---
---

<br>

# make-slide 🎯 (한국어)

**AI 코딩 에이전트가 단일 HTML 파일로 고품질 프레젠테이션을 생성하는 범용 스킬.**

[![테마 카탈로그](https://img.shields.io/badge/Theme_Catalog-GitHub-blue?style=for-the-badge)](https://github.com/edumediamon/slides/tree/main/gallery)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## make-slide란?

**make-slide**는 Claude Code, Gemini CLI, Codex, Cursor 등 AI 코딩 에이전트를 위한 스킬(지침서)입니다. AI가 이 스킬을 읽고 따라하면 전문적인 프레젠테이션 슬라이드를 **단일 HTML 파일**로 생성합니다.

매번 처음부터 디자인을 만드는 대신(토큰 낭비 + 일관성 없는 결과), AI가 이 레포의 사전 제작된 테마 템플릿을 참조합니다:

- **토큰 절약** — AI가 레이아웃을 발명하는 대신 레퍼런스 파일을 가져옴
- **일관된 품질** — 모든 프레젠테이션이 검증된 디자인 시스템을 따름
- **제로 의존성** — 결과물은 어디서나 열 수 있는 `.html` 파일 하나

> **AI 생성 프레젠테이션을 위한 디자인 시스템**이라고 생각하세요.

---

## 🚀 빠른 시작

### GitHub 미러에서 설치

```bash
npm exec --package=github:edumediamon/slides -- make-slide init
```

이 명령어는:
1. `.claude/skills/make-slide/`에 스킬 파일 복사
2. AI 설정 파일(`CLAUDE.md`, `AGENTS.md`, `GEMINI.md`, `.cursorrules`) 자동 감지 후 `/make-slide` 명령어 주입
3. 준비 완료! Claude Code에서 `/make-slide` 입력하면 프레젠테이션 생성

### 기타 명령어

```bash
npm exec --package=github:edumediamon/slides -- make-slide themes    # 11개 테마 보기
npm exec --package=github:edumediamon/slides -- make-slide gallery   # 테마 갤러리 열기
npm exec --package=github:edumediamon/slides -- make-slide help      # 도움말
```

### 수동 설정 (다른 AI 도구)

AI 코딩 도구에 다음과 같이 지시하세요:

```
https://github.com/edumediamon/slides 의 SKILL.md를 읽고 [주제]에 대한 프레젠테이션을 minimal-dark 테마로 만들어줘.
```

> **팁:** [GitHub theme catalog](https://github.com/edumediamon/slides/tree/main/gallery)에서 테마를 먼저 둘러보고 마음에 드는 것을 AI에게 알려주세요!

---

## ⚙️ 작동 방식

### `.claude/skills/` 컨벤션

`npm exec --package=github:edumediamon/slides -- make-slide init` 실행 후 프로젝트 구조:

```
your-project/
├── .claude/
│   └── skills/
│       └── make-slide/
│           ├── SKILL.md          ← 메인 지침서
│           └── references/
│               ├── themes.md        ← 11개 테마 + GitHub raw URL
│               ├── layouts.md       ← 4가지 레이아웃 스타일
│               ├── slide-types.md   ← 12가지 슬라이드 타입
│               ├── html-spec.md     ← HTML 요구사항
│               ├── core-features.md ← 기본 기능 JS/CSS 코드
│               └── pptx-spec.md     ← PPTX 변환 규칙
├── CLAUDE.md                     ← /make-slide 명령어 자동 추가
└── ... 프로젝트 파일들
```

Claude Code에서 `/make-slide` 입력하면 10단계 워크플로우를 따릅니다:

1. **입력 분석** — 모드(주제/내용/대본), 슬라이드 수, 출력 형식(HTML/PPTX) 결정
2. **테마 선택** — [갤러리](https://github.com/edumediamon/slides/tree/main/gallery)에서 선택하거나 AI가 추천
3. **레이아웃 선택** — Centered, Wide, Split, Editorial 중 선택
4. **이미지 옵션** — 없음 / URL 제공 / Unsplash 자동 검색
5. **아웃라인 생성** — 슬라이드별 구성 작성, 사용자가 지정한 승인 절차 반영
6. **테마 + 레이아웃 레퍼런스** — GitHub에서 템플릿 다운로드
7. **HTML 생성** — 테마 + 레이아웃에 맞는 프레젠테이션 빌드
8. **발표자 노트** — 타이밍 큐와 발표 대본 작성 (전체 대본은 선택)
9. **PPTX 생성** — 요청 시 사용 가능한 도구로 PowerPoint 출력
10. **검증 및 전달** — 동작 확인 후 `index.html` (+ 요청 시 `presentation.pptx`) 저장

테마 파일은 GitHub에서 온디맨드로 가져옵니다 — 로컬에 무거운 파일이 저장되지 않습니다.

---

## 🎨 테마

11개 테마 모두 **[GitHub theme catalog](https://github.com/edumediamon/slides/tree/main/gallery)** 에서 확인할 수 있습니다.

| # | 테마 | 스타일 | 추천 용도 |
|:-:|------|--------|-----------|
| 1 | `minimal-dark` | 다크 배경, 화이트 타이포 | 테크 발표, 컨퍼런스 |
| 2 | `minimal-light` | 화이트 배경, 클린 타이포 | 일반 발표, 세미나 |
| 3 | `corporate` | 네이비 & 골드, 구조적 | 비즈니스, 보고 |
| 4 | `gradient-pop` | 비비드 그라디언트, 글라스모피즘 | 스타트업, 피칭 |
| 5 | `neon-terminal` | 터미널 그린, 스캔라인 | 개발자 발표, 해커톤 |
| 6 | `paper` | 크래프트지, 세리프 타이포 | 교육, 워크숍 |
| 7 | `keynote-apple` | 드라마틱 다크, Apple 스타일 | 제품 발표, 키노트 |
| 8 | `magazine` | 에디토리얼, 비대칭 레이아웃 | 디자인, 크리에이티브 |
| 9 | `data-focus` | 대시보드 스타일, 깔끔 | 데이터 분석, KPI |
| 10 | `playful` | 둥근 모서리, 파스텔, 바운스 | 워크숍, 캐주얼 발표 |
| 11 | `education` | 화이트 캔버스, 초록 강조, 비교·퀴즈 카드 | 교육, 자격증, 강의 |

---

## 🤝 기여하기

### 새 테마 추가하기

1. `themes/` 안에 테마 ID로 폴더 생성 (케밥 케이스)
2. `reference.html` + `README.md` 추가
3. `core/`의 컨벤션을 따르기
4. `bin/cli.js`, `gallery/README.md`, 이 문서의 테마 표와 스킬 참조 목록을 갱신하고 `npm test` 후 PR 제출

---

## 📜 라이선스

[MIT](LICENSE) — 개인 및 상업 프로젝트에 자유롭게 사용하세요.
