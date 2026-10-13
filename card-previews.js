/* Homepage card previews: a small taste of each world's entrance on hover or keyboard focus.
   Motion is CSS (styles.css, .cfx-*); sound comes from EntranceSounds.preview once the visitor has interacted. */
window.CardPreviews = (() => {
  const n = (count, fn) => Array.from({ length: count }, (_, i) => fn(i)).join('');
  const FX = {
    runners: () => n(7, i => `<i class="cfx-leaf" style="--x:${[8, 24, 40, 56, 72, 88, 32][i]}%;--d:${(i * -0.55).toFixed(2)}s;--c:${['#c27836', '#a64228', '#d0a253'][i % 3]}"></i>`),
    strangers: () => `<i class="cfx-fog"></i><i class="cfx-fog cfx-fog-b"></i><i class="cfx-tide"></i>`,
    delicate: () => n(4, i => `<i class="cfx-flash" style="--x:${[22, 74, 40, 84][i]}%;--y:${[24, 38, 60, 70][i]}%;--d:${(i * 0.45).toFixed(2)}s"></i>`),
    'petal-thorn': () => n(6, i => `<i class="cfx-petal" style="--x:${[6, 18, 30, 12, 38, 24][i]}%;--d:${(i * -0.6).toFixed(1)}s"></i>`) + n(4, i => `<i class="cfx-pixel" style="--x:${[62, 74, 86, 70][i]}%;--y:${[22, 40, 30, 58][i]}%;--d:${(i * 0.3).toFixed(1)}s"></i>`),
    peace: () => `<i class="cfx-cone"></i>` + n(6, i => `<i class="cfx-dust" style="--x:${[42, 50, 56, 46, 60, 52][i]}%;--y:${[40, 52, 36, 62, 48, 70][i]}%;--d:${(i * -0.7).toFixed(1)}s"></i>`),
    recherche: () => `<i class="cfx-frame"></i>` + n(7, i => `<i class="cfx-mote" style="--x:${[10, 24, 38, 52, 66, 80, 92][i]}%;--d:${(i * -0.5).toFixed(1)}s"></i>`),
    secret: () => n(6, i => `<i class="cfx-heart" style="--x:${[14, 30, 48, 64, 80, 40][i]}%;--d:${(i * -0.45).toFixed(2)}s">♥</i>`),
    hoax: () => n(3, i => `<i class="cfx-bubble" style="--y:${[22, 34, 46][i]}%;--d:${(i * 0.35).toFixed(2)}s;--side:${i % 2 ? 'auto' : '10%'};--side2:${i % 2 ? '10%' : 'auto'}">${['i hate my life', 'LMAOOOO', 'ice cream??'][i]}</i>`),
    casual: () => `<i class="cfx-beam"></i><i class="cfx-beam cfx-beam-b"></i>` + n(6, i => `<i class="cfx-dust cfx-dust-warm" style="--x:${[30, 40, 50, 36, 58, 46][i]}%;--y:${[44, 58, 36, 66, 50, 30][i]}%;--d:${(i * -0.8).toFixed(1)}s"></i>`),
    havenbrook: () => `<i class="cfx-fence"></i><i class="cfx-neon">OPEN LATE</i>`,
    'soul-of-minji': () => n(6, i => `<i class="cfx-wisp" style="--x:${[14, 30, 46, 62, 78, 90][i]}%;--d:${(i * -0.6).toFixed(1)}s"></i>`) + `<i class="cfx-quest">Quest accepted</i>`,
    'saint-of-dead-air': () => `<i class="cfx-onair">On air</i><i class="cfx-meter">${n(10, i => `<b style="--d:${(i * -0.11).toFixed(2)}s;--h:${[40, 70, 55, 90, 60, 80, 45, 75, 65, 50][i]}%"></b>`)}</i>`,
    go: () => `<i class="cfx-rain"></i><i class="cfx-rain cfx-rain-b"></i><i class="cfx-lightning"></i>`
  };

  const canHover = window.matchMedia('(hover: hover)');
  let lastWorld = null, lastAt = 0;

  function decorate(card, world) {
    const make = FX[world.id];
    if (!make) return;
    const fx = document.createElement('span');
    fx.className = `cfx cfx-${world.id}`;
    fx.setAttribute('aria-hidden', 'true');
    fx.innerHTML = make();
    card.insertBefore(fx, card.querySelector('.world-card-content'));
    let hoverTimer;
    const start = () => {
      if (!canHover.matches) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        const now = performance.now();
        if (lastWorld === world.id && now - lastAt < 2500) return;
        lastWorld = world.id; lastAt = now;
        window.EntranceSounds?.preview(world.id);
      }, 160);
    };
    const stop = () => clearTimeout(hoverTimer);
    card.addEventListener('pointerenter', start);
    card.addEventListener('pointerleave', stop);
    card.addEventListener('focus', () => { if (card.matches(':focus-visible')) window.EntranceSounds?.preview(world.id); });
  }

  ['pointerdown', 'keydown'].forEach(type => window.addEventListener(type, () => window.EntranceSounds?.warm(), { once: true, capture: true }));

  return { decorate };
})();
