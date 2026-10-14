/* Homepage effects: the "loud" sound switch, a living hero collage, counting stats,
   secret words, and light that follows the visitor's time of day. */
(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const PREF_KEY = 'kg-intro-sound';
  const read = key => { try { return localStorage.getItem(key); } catch (e) { return null; } };
  const write = (key, value) => { try { localStorage.setItem(key, value); } catch (e) {} };
  const sound = name => window.EntranceSounds?.home(name);
  const worldById = id => worlds.find(w => w.id === id);

  /* ── 1. "loud" switches sound on and off for the whole site ── */
  const loud = document.querySelector('#loudToggle');
  const hint = document.querySelector('#loudHint');
  function syncLoud() {
    const on = read(PREF_KEY) === 'on';
    loud.setAttribute('aria-pressed', String(on));
    loud.setAttribute('aria-label', on ? 'Site sound is on. Turn it off' : 'Site sound is off. Turn it on');
    loud.title = on ? 'Sound on · click for quiet' : 'Click for sound';
  }
  if (loud) {
    syncLoud();
    loud.addEventListener('click', () => {
      const turningOn = read(PREF_KEY) !== 'on';
      if (turningOn) { write(PREF_KEY, 'on'); sound('loud-on'); window.Achievements?.unlock('too-loud'); }
      else { window.EntranceSounds?.home('loud-off', { force: true }); write(PREF_KEY, 'off'); }
      write('kg-loud-hint', 'seen');
      if (hint) hint.hidden = true;
      loud.classList.remove('loud-bump'); void loud.offsetWidth; loud.classList.add('loud-bump');
      syncLoud();
    });
    window.addEventListener('storage', e => { if (e.key === PREF_KEY) syncLoud(); });
    if (hint && read(PREF_KEY) === null && read('kg-loud-hint') !== 'seen') {
      setTimeout(() => { hint.hidden = false; write('kg-loud-hint', 'seen'); setTimeout(() => { hint.hidden = true; }, 7000); }, 2600);
    }
  }

  /* ── 2. The hero collage leans toward the cursor and previews its world ── */
  document.querySelectorAll('.collage-card').forEach(card => {
    const id = (card.getAttribute('href') || '').split('#')[1];
    const world = id && worldById(id);
    if (world) window.CardPreviews?.decorate(card, world);
    if (!window.matchMedia('(hover: hover)').matches) return;
    card.addEventListener('pointermove', e => {
      if (reduced.matches) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--tilt-x', `${(-y * 7).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 9).toFixed(2)}deg`);
      card.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty('--glare-y', `${((y + 0.5) * 100).toFixed(1)}%`);
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--tilt-x', '0deg'); card.style.setProperty('--tilt-y', '0deg'); });
  });

  /* ── 3. Stats count up the first time they scroll into view ── */
  const stats = document.querySelector('.stats-strip');
  if (stats && 'IntersectionObserver' in window) {
    const nums = [...stats.querySelectorAll('.stat-num')];
    const finals = nums.map(el => el.textContent.trim());
    const counter = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return;
      counter.disconnect();
      if (reduced.matches) return;
      const parsed = finals.map(text => { const m = text.match(/^([\d.,]+)(.*)$/); if (!m) return null; const raw = m[1].replace(/,/g, ''); return { value: parseFloat(raw), decimals: (raw.split('.')[1] || '').length, suffix: m[2] }; });
      const start = performance.now(), DURATION = 1700;
      let lastTick = 0;
      const step = now => {
        const k = Math.min(1, (now - start) / DURATION), ease = 1 - Math.pow(1 - k, 3);
        nums.forEach((el, i) => { const p = parsed[i]; if (p) el.textContent = (p.value * ease).toFixed(p.decimals) + p.suffix; });
        if (k < 1 && now - lastTick > 75 - ease * 30) { lastTick = now; sound('tick'); }
        if (k < 1) setTimeout(() => step(performance.now()), 33); else nums.forEach((el, i) => { el.textContent = finals[i]; });
      };
      step(performance.now());
    }, { threshold: 0.5 });
    counter.observe(stats);
  }


  /* ── 5. Secret words: type a world's name anywhere on the page ── */
  const WORDS = [
    ['strangers', 'strangers'], ['delicate', 'delicate'], ['soomi', 'delicate'], ['runners', 'runners'],
    ['petal', 'petal-thorn'], ['thorn', 'petal-thorn'], ['peace', 'peace'], ['recherche', 'recherche'], ['castle', 'recherche'],
    ['secret', 'secret'], ['hoax', 'hoax'], ['bestay', 'hoax'], ['casual', 'casual'], ['mercer', 'casual'],
    ['havenbrook', 'havenbrook'], ['dream', 'havenbrook'], ['minji', 'soul-of-minji'], ['deadair', 'saint-of-dead-air'],
    ['dead air', 'saint-of-dead-air'], ['dmhs', 'go'], ['rain', 'go'], ['solchan', 'solchan'], ['nana', 'nana'], ['solar', 'solar']
  ];
  let typed = '', busy = false;
  function announce(text, accent) {
    const tag = document.createElement('div');
    tag.className = 'egg-tag'; tag.style.setProperty('--a', accent); tag.textContent = text;
    document.body.appendChild(tag);
    setTimeout(() => tag.remove(), 3200);
  }
  function solarBurst() {
    const layer = document.createElement('div'); layer.className = 'egg-solar'; layer.setAttribute('aria-hidden', 'true');
    const chars = ['✦', '★', '✿', '♡', '☆', '✶', '⭑'], colors = worlds.map(w => w.accent);
    layer.innerHTML = Array.from({ length: 46 }, (_, i) => { const a = (i / 46) * Math.PI * 2, d = 26 + Math.random() * 30; return `<span style="--dx:${(Math.cos(a) * d).toFixed(1)}vw;--dy:${(Math.sin(a) * d).toFixed(1)}vh;--c:${colors[i % colors.length]};--s:${(0.8 + Math.random() * 1.2).toFixed(2)}rem;--d:${(Math.random() * 0.25).toFixed(2)}s">${chars[i % chars.length]}</span>`; }).join('');
    document.body.appendChild(layer);
    sound('solar');
    announce('✦ every world has a Solar', '#f2b84b');
    setTimeout(() => layer.remove(), 2600);
  }
  function nanaRun() {
    window.Achievements?.unlock('good-boy');
    sound('nana');
    const shot = `assets/hoax/thumbs/nana-${String(1 + Math.floor(Math.random() * 10)).padStart(2, '0')}.jpg`;
    const run = document.createElement('div');
    run.className = 'egg-nana';
    run.setAttribute('aria-hidden', 'true');
    run.innerHTML = `<span class="egg-nana-dog"><img src="${shot}" alt=""><b>Good boy!</b></span>` + Array.from({ length: 9 }, (_, i) => `<i style="--px:${8 + i * 10.5}%;--pd:${(0.25 + i * 0.32).toFixed(2)}s">🐾</i>`).join('');
    document.body.appendChild(run);
    announce('✦ Nana', '#ffc2e2');
    setTimeout(() => run.remove(), reduced.matches ? 2500 : 4400);
  }

  function deadAir() {
    document.documentElement.classList.add('egg-deadair');
    const count = document.createElement('div'); count.className = 'egg-deadair-count'; count.setAttribute('aria-hidden', 'true');
    document.documentElement.appendChild(count);
    sound('deadair');
    let n = 3;
    const tickDown = () => { count.textContent = `Dead air · ${n}`; if (n-- > 0) setTimeout(tickDown, 1000); else { count.remove(); document.documentElement.classList.remove('egg-deadair'); } };
    tickDown();
  }
  function worldEgg(world) {
    const layer = document.createElement('div');
    layer.className = `egg cfx cfx-${world.id}`;
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = window.CardPreviews?.markup(world.id) || '';
    document.body.appendChild(layer);
    void layer.offsetWidth;
    layer.classList.add('egg-on');
    window.EntranceSounds?.preview(world.id);
    announce(`✦ ${world.title}`, world.accent);
    setTimeout(() => { layer.classList.remove('egg-on'); setTimeout(() => layer.remove(), 700); }, 4200);
  }
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    typed = (typed + e.key.toLowerCase()).slice(-14);
    if (busy) return;
    const hit = WORDS.find(([word]) => typed.endsWith(word));
    if (!hit) return;
    typed = ''; busy = true; setTimeout(() => { busy = false; }, 1600);
    if (reduced.matches && hit[1] !== 'saint-of-dead-air') { const w = worldById(hit[1]); announce(`✦ ${w ? w.title : 'Solar'}`, w ? w.accent : '#f2b84b'); return; }
    if (hit[1] === 'solchan') { window.location.href = 'solchan.html'; return; }
    if (hit[1] === 'nana') { nanaRun(); return; }
    window.Achievements?.unlock(hit[1] === 'solar' ? 'every-solar' : 'magic-word');
    if (hit[1] === 'solar') solarBurst();
    else if (hit[1] === 'saint-of-dead-air') deadAir();
    else { const w = worldById(hit[1]); if (w) worldEgg(w); }
  });

  /* ── 6. Light that follows the visitor's time of day ── */
  const stars = document.querySelector('.daylight .stars');
  if (stars) stars.innerHTML = Array.from({ length: 70 }, () => `<i style="left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;--d:${(Math.random() * -4).toFixed(1)}s;--z:${(1 + Math.random() * 1.6).toFixed(1)}px"></i>`).join('');
  function daypart() {
    const h = new Date().getHours();
    const part = h >= 5 && h < 8 ? 'dawn' : h >= 8 && h < 16 ? 'day' : h >= 16 && h < 19 ? 'golden' : h >= 19 && h < 22 ? 'dusk' : 'night';
    document.documentElement.dataset.daypart = part;
    if (part === 'night') window.Achievements?.unlock('night-owl');
    if (part === 'golden') window.Achievements?.unlock('golden-hour');
  }
  daypart();
  document.addEventListener('visibilitychange', () => { if (!document.hidden) daypart(); });
})();
