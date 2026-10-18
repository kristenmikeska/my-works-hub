/* FEMC battle prototype: controller support (Gamepad API).
   The pad is turned into the same keys the keyboard uses (battle.js handles them), so every screen works with it:
   D-pad / left stick → arrows, A/✕ → Enter, B/○ → Esc, X/□ → L (battle log), Y/△ → Y (Analyze, Fuuka's scan),
   LB/RB (L1/R1) → [ ] (switch branch, tab, member, the skill list's target), RT/R2 → R (Rush), Start/Options → P (settings),
   Select/Share → H (help). Directions repeat while held.
   While a controller is the last thing used, <html> gets .bt-pad (and .bt-pad-ps for PlayStation glyphs) and a prompt bar
   shows the buttons for the current screen. Any real key press, click or touch switches back.
   Settings → Controller buttons: auto (from the pad's name) / xbox / ps. Polls only while a pad is connected. */
(() => {
  const root = document.documentElement;
  const MAP = { 0: 'Enter', 1: 'Escape', 2: 'l', 3: 'y', 4: '[', 5: ']', 7: 'r', 8: 'h', 9: 'p', 12: 'ArrowUp', 13: 'ArrowDown', 14: 'ArrowLeft', 15: 'ArrowRight' };
  const DIRS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
  const GLYPH = {
    xbox: { a: 'A', b: 'B', x: 'X', y: 'Y', lb: 'LB', rb: 'RB', rt: 'RT', start: '☰', select: '⧉', dpad: '✥' },
    ps: { a: '✕', b: '○', x: '□', y: '△', lb: 'L1', rb: 'R1', rt: 'R2', start: 'OPTIONS', select: 'SHARE', dpad: '✥' }
  };
  let padId = '', active = false, bar = null, sig = '', timer = 0, watch = 0;
  const held = {}; // key → { t0, next }

  const getPads = () => { try { return [...(navigator.getGamepads ? navigator.getGamepads() : [])].filter(Boolean); } catch (e) { return []; } };
  const layout = () => {
    const F = window.FemcBattle, pref = F && F.settings && F.settings.pad;
    if (pref === 'xbox' || pref === 'ps') return pref;
    if (/xbox|045e|xinput/i.test(padId)) return 'xbox';
    return /054c|playstation|dualsense|dualshock|sony|^wireless controller/i.test(padId) ? 'ps' : 'xbox';
  };
  function send(key) {
    const ev = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true });
    ev.fromPad = true;
    (document.activeElement && document.activeElement !== document.body ? document.activeElement : document).dispatchEvent(ev);
  }
  function usePad(on) {
    if (active === on) return;
    active = on;
    root.classList.toggle('bt-pad', on);
    if (!on && bar) bar.hidden = true;
    sig = '';
  }
  /* What the prompt bar says for the current screen. */
  function prompts() {
    const F = window.FemcBattle;
    if (!F) return [];
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
