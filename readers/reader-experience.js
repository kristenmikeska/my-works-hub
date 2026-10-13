/* Shared chapter reading, appearance preferences, and backwards-compatible bookmarks. */
window.initReaderExperience = function ({ world, chapters, topbar, chLabel, chList, backHref, worldLabel, closeDrawer }) {
  const PREFS_KEY = 'kg-reader-preferences';
  const PROGRESS_KEY = 'kg-reading-' + (world || 'unknown');
  const readStored = key => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
  const writeStored = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
  const savedPrefs = readStored(PREFS_KEY) || {};
  const preferences = {
    theme: ['dark', 'sepia', 'light'].includes(savedPrefs.theme) ? savedPrefs.theme : 'dark',
    size: [16,18,20,22,24,26].includes(savedPrefs.size) ? savedPrefs.size : 18,
    spacing: [1.5,1.7,1.9,2.1].includes(savedPrefs.spacing) ? savedPrefs.spacing : 1.9,
    mode: savedPrefs.mode === 'full' ? 'full' : 'chapters'
  };
  const saved = readStored(PROGRESS_KEY);
  const matchingChapter = saved ? chapters.findIndex(ch => ch.id === saved.anchor || ch.textContent.trim() === saved.title) : -1;
  const savedIndex = matchingChapter >= 0 ? matchingChapter : saved?.idx;
  const bookmark = saved && Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < chapters.length ? {...saved,idx:savedIndex} : null;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  // All supported manuscripts use sibling chapter headings. Keep every content node,
  // including illustrations and part dividers, in its original order.
  const parent = chapters[0]?.parentNode;
  const canPage = chapters.length > 0 && chapters.every(ch => ch.parentNode === parent);
  const sections = [];
  const intro = new Set(document.querySelectorAll('.reader-frontmatter'));
  if (canPage) {
    for (let node = parent.firstElementChild; node && node !== chapters[0]; node = node.nextElementSibling) {
      if (!node.matches('script, style, link, nav, .chapter-drawer, .drawer-overlay, .reader-home')) intro.add(node);
    }
    chapters.forEach((heading, index) => {
      const section = document.createElement('section');
      section.className = 'reader-chapter';
      section.setAttribute('aria-labelledby', heading.id);
      parent.insertBefore(section, heading);
      let node = heading;
      while (node && node !== chapters[index + 1]) {
        if (node.nodeType === 1 && node.matches('script, style, link, nav, .chapter-drawer, .drawer-overlay')) break;
        const next = node.nextSibling;
        section.appendChild(node);
        node = next;
      }
      sections.push(section);
      heading.tabIndex = -1;
    });
  }
  let current = 0;
  let engaged = false;
  let suppressUntil = performance.now() + 600;
  let saveTimer;
  const listItems = [...chList.querySelectorAll('.chapter-list-item')];
  const progress = document.createElement('div');
  progress.className = 'reader-progress';
  progress.innerHTML = '<span class="reader-progress-fill"></span>';
  document.body.appendChild(progress);
  const fill = progress.firstElementChild;
  const pager = document.createElement('nav');
  pager.className = 'reader-pager';
  pager.setAttribute('aria-label', 'Chapter navigation');
  pager.innerHTML = '<button type="button" data-direction="previous">← Previous chapter</button><span class="reader-page-count" aria-live="polite"></span><button type="button" data-direction="next">Next chapter →</button>';
  const previous = pager.querySelector('[data-direction="previous"]');
  const next = pager.querySelector('[data-direction="next"]');
  const counter = pager.querySelector('.reader-page-count');
  const finish = document.createElement('a');
  finish.href = backHref; finish.textContent = 'Back to ' + worldLabel; finish.hidden = true;
  pager.appendChild(finish);
  if (sections.length) sections.at(-1).after(pager);

  const settingsButton = document.createElement('button');
  settingsButton.className = 'reader-menu-btn reader-settings-button';
  settingsButton.type = 'button'; settingsButton.textContent = 'Aa';
  settingsButton.setAttribute('aria-label', 'Reading appearance');
  const dialog = document.createElement('dialog');
  dialog.className = 'reader-settings'; dialog.setAttribute('aria-labelledby', 'reader-settings-title');
  dialog.innerHTML = `
    <form method="dialog"><div class="reader-settings-heading"><h2 id="reader-settings-title">Make yourself comfortable.</h2><button aria-label="Close reading settings">×</button></div></form>
    <label>Theme<select name="theme" aria-label="Theme"><option value="dark">Dark</option><option value="sepia">Sepia</option><option value="light">Light</option></select></label>
    <label>Text size<select name="size" aria-label="Text size">${[16,18,20,22,24,26].map(size => `<option value="${size}">${size} px</option>`).join('')}</select></label>
    <label>Line spacing<select name="spacing" aria-label="Line spacing"><option value="1.5">Compact</option><option value="1.7">Comfortable</option><option value="1.9">Relaxed</option><option value="2.1">Spacious</option></select></label>
    <label>Reading mode<select name="mode" aria-label="Reading mode"><option value="chapters">One chapter at a time</option><option value="full">Full story</option></select></label>
    <p>These preferences stay with you on this browser.</p>`;
  topbar.insertBefore(settingsButton, topbar.lastElementChild);
  document.body.appendChild(dialog);
  settingsButton.addEventListener('click', () => dialog.showModal());
  dialog.addEventListener('close', () => settingsButton.focus({preventScroll:true}));
  dialog.querySelector('[name="mode"]').disabled = !canPage;
  Object.entries(preferences).forEach(([key,value]) => { dialog.querySelector(`[name="${key}"]`).value = value; });

  function singleChapter() { return canPage && preferences.mode === 'chapters'; }
  function applyAppearance() {
    document.body.dataset.readerTheme = preferences.theme;
    document.body.dataset.readerMode = singleChapter() ? 'chapters' : 'full';
    document.body.style.setProperty('--reading-size', preferences.size + 'px');
    document.body.style.setProperty('--reading-spacing', preferences.spacing);
  }
  function setActive(index) {
    current = Math.max(0, Math.min(chapters.length - 1, index));
    if (!chapters.length) return;
    chLabel.textContent = chapters[current].textContent.trim();
    listItems.forEach((link,i) => { link.classList.toggle('active', i === current); if (i === current) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
    counter.textContent = `Chapter ${current + 1} of ${chapters.length}`;
    previous.disabled = current === 0;
    next.hidden = current === chapters.length - 1;
    finish.hidden = !next.hidden;
  }
  function applyMode() {
    sections.forEach((section,index) => { section.hidden = singleChapter() && index !== current; });
    intro.forEach(node => { node.hidden = singleChapter() && current > 0; });
    pager.hidden = !singleChapter();
  }
  function rangeFor(index) {
    const top = chapters[index].getBoundingClientRect().top + window.scrollY - 72;
    const nextTop = chapters[index + 1]?.getBoundingClientRect().top + window.scrollY - 72;
    const maximum = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    const end = singleChapter() || index === chapters.length - 1 ? maximum : Math.min(maximum, nextTop);
    return { start: Math.max(0,top), end: Math.max(top,end) };
  }
  function position() {
    if (!chapters.length) return 0;
    const {start,end} = rangeFor(current);
    return Math.max(0, Math.min(1, (window.scrollY - start) / Math.max(1,end - start)));
  }
  function updateProgress() {
    if (!singleChapter() && chapters.length) {
      let index = 0;
      for (let i = 0; i < chapters.length; i++) {
        if (chapters[i].getBoundingClientRect().top <= 100) index = i; else break;
      }
      setActive(index);
    }
    const fraction = chapters.length ? (current + position()) / chapters.length : window.scrollY / Math.max(1,document.documentElement.scrollHeight - innerHeight);
    fill.style.width = Math.max(0,Math.min(100,fraction * 100)) + '%';
    return fraction;
  }
  function saveProgress() {
    if (!engaged || !chapters.length) return;
    const fraction = updateProgress();
    const atEnd = current === chapters.length - 1 && position() >= .995;
    const percent = atEnd ? 100 : Math.min(99,Math.floor(fraction * 100));
    writeStored(PROGRESS_KEY, {version:2, idx:current, anchor:chapters[current].id, title:chapters[current].textContent.trim(), total:chapters.length, offset:position(), percent, updated:Date.now()});
    recordStamps(percent, atEnd);
  }

  // Passport stamps (shown on the homepage). The last-page stamp keeps the closing lines the reader finished on.
  const STAMPS_KEY = 'kg-stamps';
  const STAMP_NAMES = { started: 'Started', halfway: 'Halfway', finished: 'The last page' };
  function closingLines() {
    const last = sections.at(-1) || document.body;
    const paras = [...last.querySelectorAll('p')]
      .filter(p => !p.closest('[class*="social"], .reader-pager, .chapter-heading') && p.textContent.trim().length > 1)
      .map(p => p.textContent.replace(/\s+/g, ' ').trim());
    const lines = [];
    let length = 0;
    for (let i = paras.length - 1; i >= 0 && lines.length < 4; i--) {
      if (length + paras[i].length > 700 && lines.length) break;
      lines.unshift(paras[i]); length += paras[i].length;
    }
    return { chapter: chapters.at(-1)?.textContent.trim() || '', lines };
  }
  function recordStamps(percent, atEnd) {
    const all = readStored(STAMPS_KEY) || {};
    const mine = all[world] || {};
    const now = Date.now(), earned = [];
    if (!mine.started) { mine.started = now; earned.push('started'); }
    if (!mine.halfway && percent >= 50) { mine.halfway = now; earned.push('halfway'); }
    if (!mine.finished && atEnd) { mine.finished = now; earned.push('finished'); }
    if (atEnd) mine.keepsake = { ...closingLines(), at: now };
    if (!earned.length && !atEnd) return;
    all[world] = mine; writeStored(STAMPS_KEY, all);
    earned.forEach((name, i) => setTimeout(() => stampToast(name), i * 1600));
  }
  function stampToast(name) {
    const toast = document.createElement('a');
    toast.className = 'reader-stamp-toast';
    toast.href = new URL('../index.html#passport', location.href).href;
    toast.setAttribute('role', 'status');
    const mark = document.createElement('span'); mark.className = 'reader-stamp-mark'; mark.textContent = '✦';
    const text = document.createElement('span'); text.textContent = `Stamp collected · ${STAMP_NAMES[name]} · ${worldLabel}`;
    const go = document.createElement('span'); go.className = 'reader-stamp-go'; go.textContent = 'Passport →';
    toast.append(mark, text, go); document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => { toast.classList.remove('visible'); setTimeout(() => toast.remove(), 500); }, 5200);
  }
  function showChapter(index, {offset=0, focus=false, remember=false} = {}) {
    if (!chapters.length) return;
    suppressUntil = performance.now() + 400;
    setActive(index); applyMode();
    requestAnimationFrame(() => {
      const {start,end} = rangeFor(current);
      window.scrollTo({top: start + (end-start) * offset, behavior:'instant'});
      if (focus) chapters[current].focus({preventScroll:true});
      updateProgress();
      if (remember) { engaged = true; saveProgress(); }
    });
  }
  function navigate(index) {
    const bounded = Math.max(0,Math.min(chapters.length-1,index));
    history.pushState(null,'',`#${chapters[bounded].id}`);
    showChapter(bounded, {focus:true,remember:true});
    closeDrawer();
  }
  previous.addEventListener('click', () => navigate(current-1));
  next.addEventListener('click', () => navigate(current+1));
  listItems.forEach((link,index) => link.addEventListener('click', event => { event.preventDefault(); navigate(index); }));
  const hashIndex = () => {
    const index = chapters.findIndex(ch => '#' + ch.id === location.hash);
    return index >= 0 ? index : null;
  };
  window.addEventListener('hashchange', () => { const index=hashIndex(); if (index !== null) showChapter(index,{focus:true,remember:true}); });
  window.addEventListener('popstate', () => { showChapter(hashIndex() ?? 0, {focus:true}); });
  dialog.addEventListener('change', event => {
    const key = event.target.name;
    const offset = position();
    preferences[key] = ['size','spacing'].includes(key) ? Number(event.target.value) : event.target.value;
    writeStored(PREFS_KEY,preferences); applyAppearance();
    if (chapters.length) showChapter(current,{offset});
  });
  for (const type of ['wheel','touchmove']) window.addEventListener(type, () => { engaged = true; }, {passive:true});
  window.addEventListener('keydown', event => { if (!dialog.open && ['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key)) engaged = true; });
  window.addEventListener('pointerdown', event => { if (event.clientX >= document.documentElement.clientWidth) engaged = true; });
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(() => { updateProgress(); ticking = false; }); }
    if (performance.now() < suppressUntil) return;
    clearTimeout(saveTimer); saveTimer = setTimeout(saveProgress,300);
  }, {passive:true});
  window.addEventListener('pagehide',saveProgress);
  document.addEventListener('visibilitychange', () => { if (document.hidden) saveProgress(); });
  window.addEventListener('resize',updateProgress);
  applyAppearance(); setActive(hashIndex() ?? 0); applyMode();
  if (chapters.length && hashIndex() !== null) {
    const resume = new URLSearchParams(location.search).get('resume') === '1';
    showChapter(current,{offset:resume && bookmark?.idx === current && Number.isFinite(bookmark.offset) ? Math.max(0,Math.min(1,bookmark.offset)) : 0});
  } else {
    window.scrollTo({top:0,behavior:'instant'});
    updateProgress();
    if (bookmark && bookmark.percent > 0 && bookmark.percent < 100) {
      const toast = document.createElement('div'); toast.className = 'reader-resume visible';
      const text = document.createElement('span'); text.className = 'reader-resume-text'; text.textContent = 'Resume ' + (bookmark.title || `Chapter ${bookmark.idx+1}`);
      const resume = document.createElement('button'); resume.className = 'reader-resume-go'; resume.textContent = 'Continue →';
      const dismiss = document.createElement('button'); dismiss.className = 'reader-resume-dismiss'; dismiss.textContent = '×'; dismiss.setAttribute('aria-label','Dismiss resume');
      toast.append(text,resume,dismiss); document.body.appendChild(toast);
      resume.addEventListener('click', () => {
        history.replaceState(null,'',`#${chapters[bookmark.idx].id}`);
        showChapter(bookmark.idx,{offset:Number.isFinite(bookmark.offset)?Math.max(0,Math.min(1,bookmark.offset)):0,focus:true,remember:true}); toast.remove();
      });
      dismiss.addEventListener('click', () => toast.remove());
    }
  }
};
