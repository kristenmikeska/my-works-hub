/* World-specific extras on story pages. Hoax: a photo booth with Solar's two love interests,
   hidden until you click the one star in the hero sky that's really a camera flash. */
window.WorldExtras = (() => {
  const loadRoll = () => window.HOAX_ROLL ? Promise.resolve(window.HOAX_ROLL) : new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'assets/hoax/roll.js?v=1';
    s.onload = () => resolve(window.HOAX_ROLL || []);
    s.onerror = reject;
    document.head.appendChild(s);
  });
  const calm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function photoBooth(onReady) {
    const body = document.querySelector('.world-body');
    if (!body) return null;
    const section = document.createElement('div');
    section.className = 'booth waiting';
    section.innerHTML = `<h4 class="world-section-title">Photo booth</h4><p class="booth-note">You found the booth. Two strips, two boys. Take another for four new frames.</p><div class="booth-strips"></div>`;
    const anchor = [...body.querySelectorAll('.world-section-title')].find(h => /related worlds/i.test(h.textContent));
    anchor ? body.insertBefore(section, anchor) : body.appendChild(section);
    loadRoll().then(albums => {
      const STRIPS = [['jungwon-us', 'Solar & Jungwon', '#5ee8de'], ['jihoon', 'Solar & Jihoon', '#c9a7ff']];
      const wrap = section.querySelector('.booth-strips');
      const developers = [];
      STRIPS.forEach(([id, label, accent], n) => {
        const album = albums.find(a => a.id === id);
        if (!album || album.photos.length < 4) return;
        const strip = document.createElement('figure');
        strip.className = 'booth-strip';
        strip.style.setProperty('--a', accent);
        strip.style.setProperty('--tilt', n % 2 ? '2.5deg' : '-2.5deg');
        strip.style.setProperty('--from', n % 2 ? 1 : -1);
        strip.style.setProperty('--delay', `${n * 0.16}s`);
        strip.innerHTML = `<div class="booth-frames">${'<span class="booth-frame"><img alt=""></span>'.repeat(4)}</div><figcaption><b>${label}</b><small>hoax · photo booth</small></figcaption><button class="booth-again" type="button">↻ Take another</button><span class="booth-flash" aria-hidden="true"></span>`;
        let last = [];
        const develop = (animate, quiet) => {
          const pool = album.photos.map((_, i) => i).filter(i => !last.includes(i));
          const pick = [];
          while (pick.length < 4 && pool.length) pick.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
          last = pick;
          strip.querySelectorAll('.booth-frame').forEach((frame, i) => {
            const img = frame.querySelector('img');
            const set = () => { img.src = `assets/hoax/thumbs/${album.photos[pick[i]].f}`; frame.classList.remove('developing'); void frame.offsetWidth; frame.classList.add('developing'); };
            animate ? setTimeout(set, i * 380) : set();
          });
          if (animate) {
            strip.classList.remove('flashing'); void strip.offsetWidth; strip.classList.add('flashing');
            if (!quiet) window.EntranceSounds?.home('booth');
          }
        };
        develop(false);
        developers.push(develop);
        strip.querySelector('.booth-again').addEventListener('click', () => develop(true));
        wrap.appendChild(strip);
      });
      onReady(section, developers);
    }).catch(() => section.remove());
    return section;
  }

  /* The flash: a star in the hero sky, a little too bright. Clicking it reveals the booth. */
  function boothStar() {
    const hero = document.querySelector('.world-hero');
    if (!hero) return;
    const star = document.createElement('button');
    star.type = 'button';
    star.className = 'booth-star';
    star.setAttribute('aria-label', 'A star');
    hero.appendChild(star);
    let section = null;
    star.addEventListener('click', () => {
      if (section) { section.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'center' }); return; }
      window.EntranceSounds?.home('flash');
      star.classList.add('spent');
      const flash = document.createElement('div');
      flash.className = 'booth-screen-flash';
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 1400);
      section = photoBooth((el, developers) => {
        window.Achievements?.unlock('say-cheese');
        setTimeout(() => {
          el.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'center' });
          // Slide the strips in once the booth is actually on screen (checked while the page scrolls there).
          const strips = el.querySelector('.booth-strips');
          const check = () => {
            const r = strips.getBoundingClientRect();
            if (r.top > innerHeight * 0.7 || r.bottom < innerHeight * 0.3) { setTimeout(check, 150); return; }
            el.classList.remove('waiting');
            el.classList.add('arrived');
            if (calm()) return;
            window.EntranceSounds?.home('booth-slide');
            setTimeout(() => developers.forEach((d, i) => d(true, i > 0)), 1000);
          };
          check();
        }, 650);
      });
    });
  }

  function mount(world) {
    document.querySelectorAll('.booth, .booth-star').forEach(el => el.remove());
    if (world.id === 'hoax') boothStar();
  }
  return { mount };
})();
