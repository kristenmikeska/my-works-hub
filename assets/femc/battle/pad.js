/* FEMC battle prototype: controller support (Gamepad API).
   The pad is turned into the same keys the keyboard uses (battle.js handles them), so every screen works with it:
   D-pad / left stick → arrows, A/✕ → Enter, B/○ → Esc, X/□ → L (battle log), Y/△ → Y (Analyze, Fuuka's scan),
   LB/RB (L1/R1) → [ ] (switch branch, tab, member, the skill list's target), RT/R2 → R (Rush), Start/Options → P (settings),
   Select/Share → H (help), LT/L2 → Tab (next button; the life sim's way out of a widget that keeps the arrows, like a
   booth stamp or the Skills sun). The right stick scrolls the panel under the focus (or the top screen's longest list).
   Directions repeat while held. On the life-sim page (no FemcBattle) the same keys drive ui.js navKeys / scene.js, and the
   prompt bar reads the screen from the DOM (lifePrompts; Nov 15 2026, Kat: play the whole game on a DualSense).
   While a controller is the last thing used, <html> gets .bt-pad (and .bt-pad-ps for PlayStation glyphs) and a prompt bar
   shows the buttons for the current screen. Any real key press, click or touch switches back.
   Settings → Controller buttons: auto (from the pad's name) / xbox / ps. Polls only while a pad is connected. */
(() => {
  const root = document.documentElement;
  const MAP = { 0: 'Enter', 1: 'Escape', 2: 'l', 3: 'y', 4: '[', 5: ']', 6: 'Tab', 7: 'r', 8: 'h', 9: 'p', 12: 'ArrowUp', 13: 'ArrowDown', 14: 'ArrowLeft', 15: 'ArrowRight' };
  const DIRS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
  const GLYPH = {
    xbox: { a: 'A', b: 'B', x: 'X', y: 'Y', lb: 'LB', rb: 'RB', lt: 'LT', rt: 'RT', start: '☰', select: '⧉', dpad: '✥' },
    ps: { a: '✕', b: '○', x: '□', y: '△', lb: 'L1', rb: 'R1', lt: 'L2', rt: 'R2', start: 'OPTIONS', select: 'SHARE', dpad: '✥' }
  };
  let padId = '', active = false, bar = null, sig = '', timer = 0, watch = 0;
  const held = {}; // key → { t0, next }

  const getPads = () => { try { return [...(navigator.getGamepads ? navigator.getGamepads() : [])].filter(Boolean); } catch (e) { return []; } };
  const layout = () => {
    const F = window.FemcBattle, G = window.FemcGame;
    let pref = F && F.settings && F.settings.pad;
    if (!pref && G && G.settings) try { pref = G.settings().pad; } catch (e) {}
    if (pref === 'xbox' || pref === 'ps') return pref;
    if (/xbox|045e|xinput/i.test(padId)) return 'xbox';
    return /054c|playstation|dualsense|dualshock|sony|^wireless controller/i.test(padId) ? 'ps' : 'xbox';
  };
  function send(key) {
    const ev = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    ev.fromPad = true;
    const t = document.activeElement && document.activeElement !== document.body ? document.activeElement : document;
    t.dispatchEvent(ev);
    // The life sim (no battle page): a ✕ nobody took presses the focused button, as a real Enter would (Nov 15 2026).
    if (key === 'Enter' && !ev.defaultPrevented && !window.FemcBattle && t !== document && t.matches('button:not(:disabled), a[href], summary')) t.click();
  }
  function usePad(on) {
    if (active === on) return;
    active = on;
    root.classList.toggle('bt-pad', on);
    if (!on && bar) bar.hidden = true;
    sig = '';
  }
  /* What the prompt bar says for the current screen. */
  /* The life sim's screens (femc-game.html): read from what's on screen, topmost first. */
  const vis = el => !!el && el.offsetParent !== null;
  function lifePrompts() {
    const list = lifeScreen(), tip = document.querySelector('.g-tip:not(.out)');
    return tip && list.length ? [...list, ['select', 'Got it']] : list;
  }
  function lifeScreen() {
    const q = s => document.querySelector(s), ae = document.activeElement;
    if (q('.g-dh')) return []; // a fight's frame has its own bar
    if (q('[data-padnav], .ftut')) return []; // a minigame (or its tutorial) is up: its own keys, no life-sim prompts
    if (q('.g-datecard, .g-actcard, .g-statup, .gs-rank')) return [['a', 'Continue']];
    const scrap = q('.g-scrap');
    if (scrap) return scrap.querySelector('.gsb-chapters:not([hidden])') ? [['dpad', 'Chapter'], ['a', 'Open'], ['b', 'Close']] : [['a', 'Next'], ['dpad', '← Back'], ['y', 'Chapters'], ['b', 'Skip']];
    const ovs = [...document.querySelectorAll('.g-overlay:not(.out)')], top = ovs[ovs.length - 1];
    if (top) {
      if (top.classList.contains('g-booth-ov') && ae && ae.closest && ae.closest('.bs-st')) return [['dpad', 'Move stamp'], ['x', 'Remove'], ['lt', 'Next button'], ['b', 'Back']];
      const out = [['a', 'Select'], ['b', vis(top.querySelector('.g-ph-back:not([hidden])')) ? 'Back' : 'Close']];
      if (top.classList.contains('g-fm-ov') && !top.classList.contains('is-home')) out.push(['lb', '', 'rb', 'Tab']);
      if (top.querySelector('select') && ae && ae.tagName === 'SELECT') out.push(['dpad', '←→ Change']);
      return out;
    }
    const sc = q('.gs:not(.out)');
    if (sc) {
      if (vis(sc.querySelector('.gs-log:not([hidden])'))) return [['dpad', 'Scroll'], ['b', 'Close log']];
      if (sc.querySelector('.gs-choices button')) return [['dpad', 'Choose'], ['a', 'Pick'], ['x', 'Log']];
      return [['a', 'Next'], ['x', 'Log'], ['y', 'Auto'], ['rt', 'Skip'], ['start', 'Settings']];
    }
    const title = q('.g-main.is-title');
    if (title) return [['a', 'Choose']];
    const out = [['a', 'Choose']];
    if (vis(q('.g-main [data-back]'))) out.push(['b', 'Back']);
    if (vis(q('[data-ui="menu"]'))) out.push(['y', 'Menu']);
    if (vis(q('[data-ui="phone"]'))) out.push(['x', 'Phone']);
    out.push(['start', 'Settings']);
    return out;
  }
  function prompts() {
    const F = window.FemcBattle;
    if (!F) return lifePrompts();
    const c = F.ctl, k = c && c.kind, sc = F.screen();
    if (k === 'settings') return [['dpad', 'Choose'], ['dpad', '←→ Change'], ['b', 'Close']];
    if (k === 'log') return [['dpad', 'Scroll'], ['b', 'Close']];
    if (k === 'help') return [['dpad', 'Topic'], ['b', 'Close']];
    if (k === 'cinematic') return [['a', 'Skip']];
    if (sc === 'battle') {
      const out = [];
      if (k === 'menu') { out.push(['a', 'Confirm']); if (c.back) out.push(['b', 'Back']); if (c.items && c.items.some(i => i.v === 'analyze')) out.push(['y', 'Analyze']); if (c.key) out.push(['lb', '', 'rb', 'Target']); }
      else if (k === 'allout') out.push(['a', 'Choose'], ['b', 'Not yet']);
      else if (k === 'panel') out.push(['a', 'Close']);
      out.push(['rt', F.rushOn ? 'Stop Rush' : 'Rush'], ['x', 'Log'], ['start', 'Settings']);
      return out;
    }
    if (sc === 'map') return [['a', 'Move'], ['b', 'Items'], ['y', 'Scan'], ['start', 'Settings'], ['select', 'Help']];
    if (sc === 'hub') return [['a', 'Choose'], ['b', 'Settings'], ['select', 'Help']];
    if (sc === 'tree' || sc === 'shop' || sc === 'equip' || sc === 'personas') return [['a', 'Choose'], ['b', 'Back'], ['lb', '', 'rb', sc === 'tree' ? 'Branch' : sc === 'shop' ? 'Tab' : sc === 'equip' ? 'Member' : 'Page'], ['start', 'Settings']];
    if (sc === 'party') return [['a', 'Add / bench'], ['lb', '', 'rb', 'Move'], ['b', 'Done'], ['start', 'Settings']];
    return [['a', 'Choose'], ['b', 'Back'], ['start', 'Settings']];
  }
  function paintBar() {
    if (!active) return;
    const lay = layout(), G = GLYPH[lay], list = prompts();
    const s = lay + JSON.stringify(list);
    if (s === sig) return;
    sig = s;
    if (!bar) { bar = document.createElement('div'); bar.className = 'bt-padbar'; bar.setAttribute('aria-hidden', 'true'); document.body.appendChild(bar); }
    root.classList.toggle('bt-pad-ps', lay === 'ps');
    bar.hidden = !list.length;
    bar.innerHTML = list.map(p => {
      const g = [];
      for (let i = 0; i < p.length - 1; i += 2) if (p[i]) g.push(`<i class="g g-${p[i]}">${G[p[i]]}</i>`);
      return `<span>${g.join('')}${p[p.length - 1]}</span>`;
    }).join('');
  }
  /* The right stick scrolls: the nearest scrolling box around the focus, else the top screen's tallest one. */
  const scrolls = el => { if (!el || el === document.body || el === document.documentElement) return false; const o = getComputedStyle(el).overflowY; return (o === 'auto' || o === 'scroll') && el.scrollHeight > el.clientHeight + 2; };
  let sbox = null, sboxT = 0;
  function scrollBox() {
    const now = performance.now();
    if (sbox && sbox.isConnected && now - sboxT < 400) return sbox;
    sboxT = now;
    return (sbox = findBox());
  }
  function findBox() {
    for (let el = document.activeElement; el && el !== document.body; el = el.parentElement) if (scrolls(el)) return el;
    const ovs = [...document.querySelectorAll('.g-overlay:not(.out), .gs-log:not([hidden])')], host = ovs[ovs.length - 1] || document.querySelector('.g-main') || document.body;
    let best = null;
    host.querySelectorAll('*').forEach(el => { if (el.clientHeight > 40 && scrolls(el) && (!best || el.clientHeight > best.clientHeight)) best = el; });
    return best || document.scrollingElement;
  }
  function poll() {
    const pads = getPads();
    if (!pads.length) { stopPolling(); return; }
    const p = pads[0];
    padId = p.id || '';
    const now = performance.now(), down = new Set();
    (p.buttons || []).forEach((b, i) => { if (MAP[i] && (b === 1 || b.pressed || b.value > 0.5)) down.add(MAP[i]); });
    const ax = p.axes || [];
    if (ax[0] < -0.55) down.add('ArrowLeft'); if (ax[0] > 0.55) down.add('ArrowRight');
    if (ax[1] < -0.55) down.add('ArrowUp'); if (ax[1] > 0.55) down.add('ArrowDown');
    const ry = ax.length > 3 ? ax[3] : 0;
    if (Math.abs(ry) > 0.3) { const b = scrollBox(); if (b) { b.scrollTop += Math.sign(ry) * (Math.abs(ry) - 0.25) * 34; usePad(true); } }
    down.forEach(key => {
      const h = held[key];
      if (!h) { held[key] = { next: now + 380 }; usePad(true); send(key); }
      else if (DIRS.has(key) && now >= h.next) { h.next = now + 110; send(key); }
    });
    Object.keys(held).forEach(key => { if (!down.has(key)) delete held[key]; });
    paintBar();
  }
  function startPolling() { if (!timer) timer = setInterval(poll, 33); }
  function stopPolling() { clearInterval(timer); timer = 0; Object.keys(held).forEach(k => delete held[k]); usePad(false); }
  addEventListener('gamepadconnected', startPolling);
  addEventListener('gamepaddisconnected', () => { if (!getPads().length) stopPolling(); });
  // Some browsers only report a pad after a button press; check now and then without a connect event.
  const check = () => { if (!timer && getPads().length) startPolling(); };
  watch = setInterval(check, 1000);
  check();
  // Real keyboard, mouse or touch input hands the prompts back to the keyboard hints.
  addEventListener('keydown', e => { if (!e.fromPad) usePad(false); }, true);
  addEventListener('pointerdown', () => usePad(false), true);
  window.FemcPad = { get active() { return active; }, layout, poll, prompts };
})();
