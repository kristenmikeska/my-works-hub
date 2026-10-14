/* World-specific extras on story pages. Hoax: a photo booth with Solar's two love interests. */
window.WorldExtras = (() => {
  const loadRoll = () => window.HOAX_ROLL ? Promise.resolve(window.HOAX_ROLL) : new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'assets/hoax/roll.js?v=1';
    s.onload = () => resolve(window.HOAX_ROLL || []);
    s.onerror = reject;
    document.head.appendChild(s);
  });

  function photoBooth(world) {
    const body = document.querySelector('.world-body');
    if (!body) return;
    const section = document.createElement('div');
    section.className = 'booth';
    section.innerHTML = `<h4 class="world-section-title">Photo booth</h4><p class="booth-note">Two strips, two boys. Take another for four new frames.</p><div class="booth-strips"></div>`;
    const anchor = [...body.querySelectorAll('.world-section-title')].find(h => /related worlds/i.test(h.textContent));
    anchor ? body.insertBefore(section, anchor) : body.appendChild(section);
    loadRoll().then(albums => {
      const STRIPS = [['jungwon-us', 'Solar & Jungwon', '#5ee8de'], ['jihoon', 'Solar & Jihoon', '#c9a7ff']];
      const wrap = section.querySelector('.booth-strips');
      STRIPS.forEach(([id, label, accent], n) => {
        const album = albums.find(a => a.id === id);
        if (!album || album.photos.length < 4) return;
        const strip = document.createElement('figure');
        strip.className = 'booth-strip';
        strip.style.setProperty('--a', accent);
        strip.style.setProperty('--tilt', n % 2 ? '2.5deg' : '-2.5deg');
        strip.innerHTML = `<div class="booth-frames">${'<span class="booth-frame"><img alt=""></span>'.repeat(4)}</div><figcaption><b>${label}</b><small>hoax · photo booth</small></figcaption><button class="booth-again" type="button">↻ Take another</button><span class="booth-flash" aria-hidden="true"></span>`;
        let last = [];
        const develop = animate => {
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
            window.EntranceSounds?.home('booth');
          }
        };
        develop(false);
        strip.querySelector('.booth-again').addEventListener('click', () => develop(true));
        wrap.appendChild(strip);
      });
    }).catch(() => section.remove());
  }

  function mount(world) {
    document.querySelectorAll('.booth').forEach(el => el.remove());
    if (world.id === 'hoax') photoBooth(world);
  }
  return { mount };
})();
