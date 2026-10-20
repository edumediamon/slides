# Shared core features

The selected theme reference already includes its working controls. Preserve those controls. Use these source snippets only when a requested feature is missing; inline CSS and JavaScript into the final standalone HTML.

The navigation snippet exposes `slideGo`, `slideGetCurrent`, `slideGetTotal`, and `slideGetSlides`. Load navigation before speaker notes. Wire the matching DOM IDs (`progress`, `counter`, `notes-panel`, `notes-text`, `notes-next`, `notes-slide-num`) and a `.fullscreen-btn` button when using these snippets.

## base.css

```css
/*
 * make-slide — base.css
 * CSS Reset + Shared Utilities
 * 16:9 slide ratio, typography scale, animation system
 */

/* === Reset === */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; height: 100%; overflow: hidden; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

/* === Font Stack === */
/* Pretendard (body) + JetBrains Mono (code) via CDN */
/* Include in HTML <head>:
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap">
*/

/* === Slide Deck Layout (16:9) === */
.deck { position: relative; width: 100vw; height: 100vh; overflow: hidden; }

.slide {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 100px;
  opacity: 0;
  pointer-events: none;
  transition: none;
}
.slide.active { opacity: 1; pointer-events: auto; z-index: 2; }

/* === Typography Scale === */
.overline {
  font-size: 14px;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.xl { font-size: 72px; font-weight: 800; line-height: 1.15; }
.lg { font-size: 52px; font-weight: 800; line-height: 1.2; }
.md { font-size: 40px; font-weight: 700; line-height: 1.3; }
.sm { font-size: 28px; font-weight: 600; line-height: 1.4; }
.sub { font-size: 20px; margin-top: 20px; }
.body { font-size: 22px; line-height: 1.9; max-width: 720px; margin-top: 24px; }
.tag {
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.num {
  font-size: 160px;
  font-weight: 900;
  position: absolute;
  top: 30px;
  right: 70px;
  line-height: 1;
  pointer-events: none;
  opacity: 0.08;
}
code, pre, .mono { font-family: 'JetBrains Mono', monospace; }

/* === Stagger Animation === */
.slide.active .a { opacity: 0; animation: childIn 0.3s ease forwards; }
.a:nth-child(1) { animation-delay: 0.02s; }
.a:nth-child(2) { animation-delay: 0.08s; }
.a:nth-child(3) { animation-delay: 0.14s; }
.a:nth-child(4) { animation-delay: 0.20s; }
.a:nth-child(5) { animation-delay: 0.26s; }
.a:nth-child(6) { animation-delay: 0.32s; }
.a:nth-child(7) { animation-delay: 0.38s; }
.a:nth-child(8) { animation-delay: 0.44s; }

@keyframes childIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* === Quote === */
.quote-mark { font-size: 100px; line-height: 1; margin-bottom: -10px; }
.quote-text { font-size: 36px; font-weight: 300; line-height: 1.7; max-width: 650px; }

/* === Flow / Steps === */
.flow { display: flex; align-items: center; gap: 20px; margin-top: 32px; flex-wrap: wrap; justify-content: center; }
.step { padding: 22px 30px; border-radius: 14px; text-align: center; min-width: 150px; }
.step-icon { font-size: 28px; margin-bottom: 8px; }
.step-label { font-size: 17px; font-weight: 500; }
.step-sub { font-size: 12px; margin-top: 4px; }
.arrow { font-size: 24px; }

/* === Cards === */
.cards { display: flex; gap: 20px; margin-top: 32px; flex-wrap: wrap; justify-content: center; }
.card { flex: 1; padding: 28px; border-radius: 16px; min-width: 200px; max-width: 300px; }
.card-icon { font-size: 28px; margin-bottom: 10px; }
.card h3 { font-size: 18px; font-weight: 600; margin-bottom: 6px; }
.card p { font-size: 14px; line-height: 1.6; }

/* === Comparison === */
.compare { display: flex; gap: 24px; margin-top: 32px; max-width: 780px; flex-wrap: wrap; justify-content: center; }
.compare-col { flex: 1; padding: 28px; border-radius: 14px; min-width: 280px; }
.compare-label { font-size: 13px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; font-weight: 700; }
.compare-col p { font-size: 17px; line-height: 1.8; text-align: left; }

/* === Data / Chart Placeholder === */
.chart-container { margin-top: 32px; width: 100%; max-width: 700px; }
.bar-chart { display: flex; align-items: flex-end; gap: 16px; height: 200px; padding: 0 20px; }
.bar-item { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; }
.bar { width: 100%; border-radius: 6px 6px 0 0; transition: height 0.6s ease; }
.bar-label { font-size: 13px; font-weight: 500; }
.bar-value { font-size: 12px; font-family: 'JetBrains Mono', monospace; }

/* === Code Block === */
.code-block {
  margin-top: 32px;
  text-align: left;
  border-radius: 12px;
  padding: 28px 32px;
  max-width: 700px;
  width: 100%;
  overflow-x: auto;
  font-size: 15px;
  line-height: 1.7;
  font-family: 'JetBrains Mono', monospace;
}
.code-block code { font-family: inherit; font-size: inherit; }
.code-header {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 600;
}

/* === Image Placeholder === */
.img-placeholder {
  margin-top: 32px;
  width: 100%;
  max-width: 600px;
  aspect-ratio: 16/9;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 14px;
}
.img-placeholder .placeholder-icon { font-size: 48px; }

/* === UI Controls === */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  z-index: 100;
  transition: width 0.4s ease;
}
.slide-counter {
  position: fixed;
  bottom: 20px;
  right: 30px;
  font-size: 12px;
  font-family: 'JetBrains Mono', monospace;
  z-index: 100;
}
.hint {
  position: fixed;
  bottom: 20px;
  left: 30px;
  font-size: 11px;
  z-index: 100;
  display: flex;
  gap: 12px;
}
.hint span { display: flex; align-items: center; gap: 4px; }
.kbd {
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
}
.fullscreen-btn {
  position: fixed;
  bottom: 20px;
  right: 80px;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid;
  font-size: 11px;
  cursor: pointer;
  z-index: 100;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
  background: transparent;
}

/* === Speaker Notes Panel === */
.notes-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 240px;
  z-index: 200;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  display: flex;
  font-family: 'Pretendard Variable', Pretendard, sans-serif;
}
.notes-panel.open { transform: translateY(0); }
.notes-panel .notes-current {
  flex: 2;
  padding: 24px 32px;
  overflow-y: auto;
}
.notes-panel .notes-preview {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.notes-panel .notes-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
  font-weight: 600;
}
.notes-panel .notes-text {
  font-size: 16px;
  line-height: 1.8;
}
.notes-panel .notes-next-title {
  font-size: 13px;
  font-weight: 600;
  margin-top: 8px;
}

/* === Responsive === */
@media (max-width: 1024px) {
  .slide { padding: 40px 60px; }
  .xl { font-size: 52px; }
  .lg { font-size: 40px; }
  .md { font-size: 32px; }
  .body { font-size: 18px; }
  .num { font-size: 120px; }
}
@media (max-width: 768px) {
  .slide { padding: 30px 40px; }
  .xl { font-size: 40px; }
  .lg { font-size: 32px; }
  .md { font-size: 26px; }
  .body { font-size: 16px; }
  .cards, .compare, .flow { flex-direction: column; align-items: center; }
  .card { max-width: 100%; }
}
```

## navigation.js

```javascript
/*
 * make-slide — navigation.js
 * Keyboard (←→, Space), click/touch navigation, slide counter, progress bar
 */

(function () {
  const slides = [...document.querySelectorAll('.slide')];
  let cur = 0;
  let busy = false;

  const progressEl = document.getElementById('progress');
  const counterEl = document.getElementById('counter');

  function update() {
    if (progressEl) {
      progressEl.style.width = (cur / (slides.length - 1) * 100) + '%';
    }
    if (counterEl) {
      counterEl.textContent = (cur + 1) + ' / ' + slides.length;
    }
    // Dispatch custom event for other modules (speaker notes, etc.)
    window.dispatchEvent(new CustomEvent('slidechange', { detail: { current: cur, total: slides.length } }));
  }

  function go(to) {
    if (busy || to === cur || to < 0 || to >= slides.length) return;
    busy = true;

    const old = slides[cur];
    const nxt = slides[to];

    // Fade out current slide
    old.style.transition = 'opacity 0.15s ease';
    old.style.opacity = '0';

    setTimeout(function () {
      old.classList.remove('active');
      old.style.transition = '';

      nxt.style.opacity = '0';
      nxt.classList.add('active');

      // Force reflow then fade in
      nxt.offsetHeight;
      nxt.style.transition = 'opacity 0.2s ease';
      nxt.style.opacity = '1';

      cur = to;
      update();

      setTimeout(function () {
        nxt.style.transition = '';
        busy = false;
      }, 200);
    }, 150);
  }

  // Expose globally for other modules
  window.slideGo = go;
  window.slideGetCurrent = function () { return cur; };
  window.slideGetTotal = function () { return slides.length; };
  window.slideGetSlides = function () { return slides; };

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    // Skip if typing in an input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case ' ':
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        go(cur + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        go(cur - 1);
        break;
    }
  });

  // Click navigation (left third = back, right two-thirds = forward)
  document.addEventListener('click', function (e) {
    // Don't navigate if clicking a button, link, or interactive element
    if (e.target.closest('button, a, .notes-panel, .fullscreen-btn')) return;
    if (e.clientX < window.innerWidth / 3) {
      go(cur - 1);
    } else {
      go(cur + 1);
    }
  });

  // Touch/swipe navigation
  let touchStartX = 0;
  document.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  document.addEventListener('touchend', function (e) {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? go(cur + 1) : go(cur - 1);
    }
  }, { passive: true });

  // Initialize
  update();
})();
```

## fullscreen.js

```javascript
/*
 * make-slide — fullscreen.js
 * F key + button toggle, ESC to exit
 */

(function () {
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(function () {});
    } else {
      document.exitFullscreen();
    }
  }

  // F key toggle
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key.toLowerCase() === 'f' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // Button toggle (if a fullscreen button exists)
  var btn = document.querySelector('.fullscreen-btn');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleFullscreen();
    });
  }

  // Expose globally
  window.toggleFullscreen = toggleFullscreen;
})();
```

## speaker-notes.js

```javascript
/*
 * make-slide — speaker-notes.js
 * S key to toggle notes panel
 * Shows current slide notes + next slide preview
 */

(function () {
  var notesPanel = document.getElementById('notes-panel');
  var notesText = document.getElementById('notes-text');
  var notesNextTitle = document.getElementById('notes-next');
  var notesSlideNum = document.getElementById('notes-slide-num');
  var isOpen = false;

  function updateNotes() {
    if (!notesPanel) return;

    var slides = window.slideGetSlides ? window.slideGetSlides() : [...document.querySelectorAll('.slide')];
    var cur = window.slideGetCurrent ? window.slideGetCurrent() : 0;
    var total = window.slideGetTotal ? window.slideGetTotal() : slides.length;

    // Current slide notes
    var currentSlide = slides[cur];
    var notes = currentSlide ? (currentSlide.dataset.notes || '') : '';
    if (notesText) {
      notesText.textContent = notes || '(No notes)';
    }

    // Slide number
    if (notesSlideNum) {
      notesSlideNum.textContent = 'Slide ' + (cur + 1) + ' / ' + total;
    }

    // Next slide preview
    if (notesNextTitle) {
      if (cur + 1 < slides.length) {
        var nextSlide = slides[cur + 1];
        var nextTitle = nextSlide.querySelector('.xl, .lg, .md, h1, h2, h3');
        notesNextTitle.textContent = nextTitle ? nextTitle.textContent : '(Next slide)';
      } else {
        notesNextTitle.textContent = '(End)';
      }
    }
  }

  function toggleNotes() {
    if (!notesPanel) return;
    isOpen = !isOpen;
    notesPanel.classList.toggle('open', isOpen);
    if (isOpen) updateNotes();
  }

  // S key toggle
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key.toLowerCase() === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      toggleNotes();
    }
  });

  // Listen for slide changes
  window.addEventListener('slidechange', updateNotes);

  // Expose globally
  window.toggleNotes = toggleNotes;
})();
```

## pdf-export.css

```css
/*
 * make-slide — pdf-export.css
 * @media print rules
 * Hide UI controls, each slide = 1 page
 */

@media print {
  /* Hide all UI controls */
  .progress-bar,
  .slide-counter,
  .hint,
  .fullscreen-btn,
  .notes-panel,
  #progress,
  #counter {
    display: none !important;
  }

  /* Reset page */
  html, body {
    width: 100%;
    height: auto;
    overflow: visible;
    background: white;
  }

  /* Each slide = 1 page */
  .deck {
    position: static;
    width: 100%;
    height: auto;
    overflow: visible;
  }

  .slide {
    position: relative;
    opacity: 1 !important;
    pointer-events: auto;
    page-break-after: always;
    page-break-inside: avoid;
    break-after: page;
    break-inside: avoid;
    width: 100%;
    height: 100vh;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .slide:last-child {
    page-break-after: auto;
  }

  /* Disable animations for print */
  .slide.active .a,
  .a {
    opacity: 1 !important;
    animation: none !important;
    transform: none !important;
  }

  /* Page setup */
  @page {
    size: landscape;
    margin: 0;
  }
}
```
