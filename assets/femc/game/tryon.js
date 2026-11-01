/* Persona 3: Solstice · "Try it on" (FEMC-SKINS-BATTLE-DESIGN S3, Nov 1 2026): a short showcase of a Wardrobe outfit in
   action, played over the Wardrobe (cosmetics.js: the "Try it on" button on a ready outfit, owned or not, and the ▶ on a
   featured outfit in the Boutique). It draws the same assets a fight does: the look's pose frames (idle, attack, skill,
   victory), its entrance card and One More strip (Kat's art when ready.js lists it, else the built-in versions, as in
   battle.js entranceCard / oneMoreStrip), the hand charge (only for a look marked clean, like battle.js castCharge) and the
   theme motifs (battle/looks-art.js, shared with battle.js).
   Beats (~4.3 s): entrance card → ready (idle) → attack → skill (its first spell's name, the hand charge, the theme burst)
   → "1 MORE!" strip → victory with the theme sparkle, held, then Replay / Done. Click, Enter or Space skips to the victory
   pose; Esc (or a pad's B) closes; focus comes back to the button that opened it.
   Settings: Outfit effects Off drops the charge, the burst, the sparkle and the entrance motifs; Performance mode fewer
   motifs and no moving speed lines; Reduce flashes no white cores or slash; reduced motion still frames with crossfades.
   Test hooks: FemcTryOn.state() { id, beat, seen, done, fx: [what played] }, skip(), replay(), close(), freeze(). */
window.FemcTryOn = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const C = () => window.FemcCosmetics, LA = () => window.FemcLooksArt;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ST = () => (G.settings ? G.settings() : {});
  const BEATS = [
    { k: 'entrance', ms: 1050, f: 0, label: 'Entrance' },
    { k: 'idle', ms: 620, f: 0, label: 'Ready' },
    { k: 'attack', ms: 620, f: 2, label: 'Attack' },
    { k: 'skill', ms: 1100, f: 3, label: 'Skill' },
    { k: 'onemore', ms: 900, f: 3, label: '1 More!' },
    { k: 'win', ms: 0, f: 5, label: 'Victory' }
  ];
  let cur = null;

  // Where the casting hand sits on the shown frame (object-fit: contain, bottom aligned), in stage pixels (like battle.js handAt).
  function handAt(img, stage, hand) {
    const r = img.getBoundingClientRect(), R = stage.getBoundingClientRect(), nw = img.naturalWidth, nh = img.naturalHeight;
    if (!r.width || !r.height || !nw || !nh) return null;
    const k = Math.min(r.width / nw, r.height / nh), dw = nw * k, dh = nh * k;
    return { x: r.left + (r.width - dw) / 2 + hand[0] * dw - R.left, y: r.bottom - dh + hand[1] * dh - R.top, r: Math.max(14, dh * 0.07) };
  }
  // The built-in eye crop (portrait + data.js faceFocus), the same box rules as battle.css .fcb / .fc.
  function faceImg(sp) {
    const D = window.FEMC_BATTLE_DATA, F = (D && D.faceFocus && D.faceFocus[sp.who]) || { x: 50, y: 40, s: 25, ar: 1.1 }, a = F.alt && F.alt[sp.faceKey], f = a ? Object.assign({}, F, a) : F;
    return `<img class="fc" src="${esc(sp.face)}" alt="" draggable="false" style="--fx:${f.x};--fy:${f.y};--fs:${(f.s / 100).toFixed(3)};--ar:${f.ar}">`;
  }
  function html(sp, o) {
    const A = LA(), th = o.fx && sp.theme && A && A.THEME_ART[sp.theme] ? sp.theme : null, m = (t, i, s) => A.motif(t, i, s);
    const enMotifs = th ? `<span class="en-motifs">${[0, 1, 2, 3, 4].map(i => m(th, i, `left:${[8, 22, 70, 86, 48][i]}%;top:${[14, 70, 10, 66, 84][i]}%`)).join('')}</span>` : '';
    const entrance = sp.entrance ? `<div class="en-card art"><img class="en-art" src="${esc(sp.entrance)}" alt="" draggable="false"></div>`
      : `<i class="en-sh s1"></i><i class="en-sh s2"></i><i class="en-sh s3"></i><div class="en-card"><i class="en-stripes"></i><img class="en-pose" src="${esc(sp.frames[0])}" alt="" draggable="false"></div>
        <b class="en-name"><small>${esc(sp.name)}</small>${esc(sp.whoName.toUpperCase())}</b>${enMotifs}`;
    const om = sp.onemore ? `<img class="om-art" src="${esc(sp.onemore)}" alt="" draggable="false">`
      : `<i class="om-stripes"></i><div class="om-eyes fcb">${faceImg(sp)}</div><i class="om-lines"></i>`;
    const n = o.perf ? 5 : 9, burst = th ? Array.from({ length: n }, (_, i) => { const ang = (i / n) * Math.PI * 2 - Math.PI / 2; return m(th, i, `--dx:${Math.round(Math.cos(ang) * 120)}px;--dy:${Math.round(Math.sin(ang) * 100)}px;animation-delay:${(i % 3) * 0.05}s`); }).join('') : '';
    const sparkle = th ? Array.from({ length: o.perf ? 4 : 8 }, (_, i) => m(th, i, `left:${[12, 80, 22, 70, 6, 88, 34, 60][i]}%;top:${[18, 14, 62, 70, 40, 44, 8, 34][i]}%;animation-delay:${(i * 0.23).toFixed(2)}s`)).join('') : '';
    const motes = Array.from({ length: o.perf ? 6 : 12 }, (_, i) => { const ang = (i / (o.perf ? 6 : 12)) * Math.PI * 2; return `<i style="--dx:${Math.round(Math.cos(ang) * 46)}px;--dy:${Math.round(Math.sin(ang) * 46)}px;animation-delay:${(i % 4) * 0.04}s"></i>`; }).join('');
    return `<div class="g-to${o.reduced ? ' reduced' : ''}${o.perf ? ' perf' : ''}${o.calm ? ' calm' : ''}" data-beat="" data-to="${esc(sp.id)}" style="--mc:${esc(sp.color || '#ff4f9e')};--ec:${esc(sp.skill.color)}">
      <div class="g-to-stage" data-to-stage>
        <i class="g-to-bg"></i><b class="g-to-ghost" aria-hidden="true">${esc(sp.whoName)}</b><i class="g-to-rays"></i><i class="g-to-floor"></i>
        <div class="g-to-figw"><img class="g-to-fig a on" src="${esc(sp.frames[0])}" alt="" draggable="false"><img class="g-to-fig b" alt="" draggable="false"></div>
        <i class="g-to-slash"></i>
        ${sp.clean && o.fx ? `<div class="g-to-charge" aria-hidden="true">${o.reduced ? '' : motes}<b></b></div>` : ''}
        ${th && sp.themeSheet ? `<div class="g-to-burst art" aria-hidden="true" style="background-image:url('${esc(sp.themeSheet)}')"></div>` : burst ? `<div class="g-to-burst" aria-hidden="true">${burst}</div>` : ''}
        <div class="g-to-skill"><small>${esc(sp.skill.elName)}</small><b>${esc(sp.skill.name)}</b></div>
        ${sparkle ? `<div class="g-to-sparkle" aria-hidden="true">${sparkle}</div>` : ''}
        <div class="g-to-om" aria-hidden="true"><div class="om-band">${om}</div><b class="om-word">1 MORE!</b></div>
        <div class="g-to-en ${sp.entrance ? 'art' : 'code'}" aria-hidden="true"><i class="en-dim"></i>${entrance}</div>
        <div class="g-to-tag"><small>Try it on · ${esc(sp.whoName)}</small><b>${esc(sp.name)}</b><em class="g-to-step" aria-live="polite"></em></div>
        <ol class="g-to-prog" aria-hidden="true">${BEATS.map(b => `<li data-k="${b.k}"></li>`).join('')}</ol>
      </div>
      <div class="g-to-bar"><span class="g-to-hint">Click or Enter: skip · Esc: close</span>
        <span class="g-row g-to-btns"><button type="button" class="g-btn small" data-to-act="skip"><span>Skip</span></button><button type="button" class="g-btn pink small" data-to-act="done"><span>Done</span></button></span></div>
    </div>`;
  }

  function play(id, from) {
    close(true);
    const sp = C() && C().tryOnSpec ? C().tryOnSpec(id) : null;
    if (!sp) return null;
    const st = ST(), o = { reduced: reduced(), perf: !!st.perf, calm: !!st.calm, fx: st.skinFx !== false };
    const el = document.createElement('div');
    el.className = 'g-overlay g-to-ov';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', `Try it on: ${sp.name}`);
    el.innerHTML = html(sp, o);
    document.body.appendChild(el);
    const root = el.querySelector('.g-to'), stage = el.querySelector('[data-to-stage]'), figs = [...el.querySelectorAll('.g-to-fig')];
    const me = cur = { id, sp, el, root, from, timers: [], beat: -1, done: false, fx: [], seen: [], o };
    // Every frame loaded before the first beat (a missing one never blocks: 1.2 s at most).
    const pre = [...new Set([sp.frames[0], sp.frames[2], sp.frames[3], sp.frames[5], sp.entrance, sp.onemore, sp.onemore ? null : sp.face].filter(Boolean))].map(src => new Promise(r => { const i = new Image(); i.onload = i.onerror = r; i.src = src; }));
    const later = (ms, fn) => { me.timers.push(setTimeout(() => { if (cur === me && el.isConnected) fn(); }, ms)); };
    let front = 0;
    const frame = f => {
      const src = sp.frames[f], a = figs[front];
      if (a.getAttribute('src') === src) return;
      const b = figs[1 - front]; b.src = src; b.classList.add('on'); a.classList.remove('on'); front = 1 - front;
    };
    const charge = () => {
      const c = el.querySelector('.g-to-charge'); if (!c) return;
      const at = handAt(figs[front], stage, sp.hand); if (!at) return;
      c.style.left = `${at.x}px`; c.style.top = `${at.y}px`; c.style.setProperty('--cr', `${Math.round(at.r)}px`);
      c.classList.remove('go'); void c.offsetWidth; c.classList.add('go'); me.fx.push('charge');
    };
    function go(i) {
      if (cur !== me) return;
      const b = BEATS[i]; me.beat = i; me.seen.push(b.k);
      root.dataset.beat = b.k;
      el.querySelector('.g-to-step').textContent = b.k === 'skill' ? `Skill · ${sp.skill.name}` : b.label;
      el.querySelectorAll('.g-to-prog li').forEach((li, j) => { li.classList.toggle('on', j === i); li.classList.toggle('past', j < i); });
      frame(b.f);
      if (b.k === 'entrance') me.fx.push('entrance-' + (sp.entrance ? 'art' : 'code'));
      if (b.k === 'skill') {
        if (sp.clean && o.fx) later(o.reduced ? 60 : 120, charge);
        if (el.querySelector('.g-to-burst')) later(o.reduced ? 200 : 480, () => { const bu = el.querySelector('.g-to-burst'); bu.classList.add('go'); me.fx.push(bu.classList.contains('art') ? 'burst-art' : 'burst'); });
      }
      if (b.k === 'onemore') me.fx.push('onemore-' + (sp.onemore ? 'art' : 'code'));
      if (b.k === 'win') return finish();
      later(b.ms, () => go(i + 1));
    }
    function finish() {
      me.done = true; root.classList.add('done');
      if (el.querySelector('.g-to-sparkle')) me.fx.push('sparkle');
      const sk = el.querySelector('[data-to-act="skip"]'); sk.dataset.toAct = 'replay'; sk.querySelector('span').textContent = 'Replay';
      el.querySelector('.g-to-hint').textContent = 'Enter: replay · Esc: close';
      if (el.contains(document.activeElement) || document.activeElement === document.body) el.querySelector('[data-to-act="done"]').focus({ preventScroll: true });
    }
    function skip() {
      if (cur !== me || me.done) return;
      me.timers.forEach(clearTimeout); me.timers = []; root.classList.add('skipped');
      el.querySelectorAll('.g-to-burst, .g-to-charge').forEach(x => x.classList.remove('go'));
      go(BEATS.length - 1);
    }
    function replay() {
      if (cur !== me) return;
      me.timers.forEach(clearTimeout); me.timers = []; me.done = false; me.fx = []; me.seen = [];
      root.classList.remove('done', 'skipped'); root.dataset.beat = '';
      el.querySelectorAll('.g-to-burst, .g-to-charge').forEach(x => x.classList.remove('go'));
      const b = el.querySelector('[data-to-act="replay"]'); if (b) { b.dataset.toAct = 'skip'; b.querySelector('span').textContent = 'Skip'; b.focus({ preventScroll: true }); }
      el.querySelector('.g-to-hint').textContent = 'Click or Enter: skip · Esc: close';
      void root.offsetWidth; go(0); G.sfx('femc-click');
    }
    me.skip = skip; me.replay = replay;
    const act = a => (a === 'skip' ? skip() : a === 'replay' ? replay() : a === 'done' ? close() : null);
    me.key = e => {
      if (cur !== me || el !== [...document.querySelectorAll('.g-overlay')].pop()) return;
      const k = e.key;
      if (k === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
      if (k === 'Enter' || k === ' ') {
        e.preventDefault(); e.stopPropagation();
        const b = document.activeElement && el.contains(document.activeElement) && document.activeElement.closest('[data-to-act]');
        if (!me.done) skip(); else act(b ? b.dataset.toAct : 'replay');
        return;
      }
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'].includes(k)) {
        e.preventDefault(); e.stopPropagation();
        const bs = [...el.querySelectorAll('[data-to-act]')], i = bs.indexOf(document.activeElement), d = k === 'ArrowLeft' || k === 'ArrowUp' || (k === 'Tab' && e.shiftKey) ? -1 : 1;
        bs[(i < 0 ? (d > 0 ? -1 : 0) : i) + d < 0 ? bs.length - 1 : ((i < 0 ? (d > 0 ? -1 : 0) : i) + d) % bs.length].focus({ preventScroll: true });
      }
    };
    window.addEventListener('keydown', me.key, true);
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-to-act]');
      if (b) { act(b.dataset.toAct); return; }
      if (!me.done) skip(); else if (!e.target.closest('.g-to')) close();
    });
    G.sfx('femc-click');
    setTimeout(() => { if (cur === me) el.querySelector('[data-to-act]').focus({ preventScroll: true }); }, 30);
    Promise.race([Promise.all(pre), new Promise(r => setTimeout(r, 1200))]).then(() => { if (cur === me && el.isConnected && me.beat < 0) go(0); });
    return me;
  }
  // Close the showcase (quick: no fade, when another one replaces it). Focus goes back to the button that opened it.
  function close(quick) {
    const me = cur; if (!me) return false;
    cur = null; me.timers.forEach(clearTimeout); window.removeEventListener('keydown', me.key, true);
    const el = me.el;
    if (quick || !el.isConnected) el.remove(); else { el.classList.add('out'); setTimeout(() => el.remove(), 220); }
    const back = me.from && me.from.isConnected ? me.from : document.querySelector(`[data-wd-try="${me.id}"]`);
    if (back) back.focus({ preventScroll: true });
    if (!quick) G.sfx('femc-back');
    return true;
  }
  const state = () => (cur ? { id: cur.id, beat: cur.beat >= 0 ? BEATS[cur.beat].k : null, i: cur.beat, beats: BEATS.map(b => b.k), done: cur.done, seen: cur.seen.slice(), fx: cur.fx.slice(), o: cur.o, clean: cur.sp.clean, theme: cur.sp.theme } : null);
  // freeze(): stop the sequence where it is (tests: a still of the middle of a beat).
  const freeze = () => { if (cur) { cur.timers.forEach(clearTimeout); cur.timers = []; } return !!cur; };
  return { play, close, skip: () => cur && cur.skip(), replay: () => cur && cur.replay(), freeze, state, BEATS };
})();
