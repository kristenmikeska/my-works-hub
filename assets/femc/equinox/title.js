/* Persona 3: Equinox · the title page (femc-equinox.html; build batch 1, Nov 15 2026).
   The Equilux title from the approved mockup (mockups/equinox-ui/equilux.html, screen A): a 12-hour clock whose hand ticks
   once a second and splits the bone day from the red-black night; any pointer movement, touch or key brings the night over
   the whole screen (dusk) until six seconds of rest.
   Menu: New Game · Import from Solstice · Continue · Back to Solstice.
     New Game   → a fresh start (nothing carried over).
     Import     → FemcEquinoxImport.slots() (Solstice's autosave and slots, read only); a finished year can be picked; its
                  preview is FemcEquinoxImport.read(key) (looks, leftover Velvet Plumes, album, finished epilogues).
     Continue   → the save's starting point, once one is set.
   Both write the starting point to localStorage 'kg-femc-equinox-start' = { v: 1, at, fresh: true } or
   { v: 1, at, from: { slot, savedAt }, import: <read() result> }. The engine batch reads it at New Game and calls
   FemcEquinoxImport.apply(state, start.import) (EQUINOX-TECH.md "Import from Solstice"). Solstice's keys are never written.
   Keys: ↑↓ move, Enter / ✕ press, Esc / ○ back (pad.js turns the controller into these keys and clicks the focused button
   on ✕). Reduced motion: no ticking, no sweep. */
(function () {
  'use strict';
  var START_KEY = 'kg-femc-equinox-start';
  var IM = window.FemcEquinoxImport;
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = document.querySelector('.f-title'), menu = T.querySelector('[data-menu]'), plate = T.querySelector('.t-plate');
  var panel = T.querySelector('[data-panel]'), card = panel.querySelector('.eq-card'), hint = T.querySelector('[data-hint]');
  var SIN = function (d) { return Math.sin(d * Math.PI / 180); }, COS = function (d) { return Math.cos(d * Math.PI / 180); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function retrigger(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function start() { try { return JSON.parse(lsGet(START_KEY) || 'null'); } catch (e) { return null; } }

  /* ── The clock face, logos and drifting specks (drawn in code: no art files) ── */
  [].forEach.call(T.querySelectorAll('[data-logo]'), function (l) {
    l.innerHTML = '<span class="kick">Persona 3</span><span class="eq">' + 'EQUINOX'.split('').map(function (c, k) { return '<span style="--k:' + k + '">' + c + '</span>'; }).join('') + '</span><span class="tag">Day equals night</span>';
  });
  var f12 = '<svg viewBox="0 0 200 200" aria-hidden="true"><circle class="r1" cx="100" cy="100" r="98"/><circle class="r2" cx="100" cy="100" r="88"/><circle class="dash" cx="100" cy="100" r="70"/>';
  for (var m = 0; m < 60; m++) { var r1 = m % 5 ? 93 : 89; f12 += '<line class="m' + (m % 15 ? '' : ' M') + '" x1="' + (100 + r1 * SIN(m * 6)).toFixed(1) + '" y1="' + (100 - r1 * COS(m * 6)).toFixed(1) + '" x2="' + (100 + 97 * SIN(m * 6)).toFixed(1) + '" y2="' + (100 - 97 * COS(m * 6)).toFixed(1) + '"/>'; }
  f12 += '<text x="100" y="80">XII</text><text x="120" y="100">III</text><text x="100" y="120">VI</text><text x="80" y="100">IX</text></svg>';
  [].forEach.call(T.querySelectorAll('.face12'), function (f) { f.innerHTML = f12; });
  var sp = ''; for (var i = 0; i < 14; i++) sp += '<i style="left:' + (4 + i * 7) + 'cqw;animation-delay:' + (-i * .67).toFixed(2) + 's;animation-duration:' + (7 + i % 4 * 1.5) + 's"></i>';
  T.querySelector('.specks').innerHTML = sp;

  /* ── The ticking hand and dusk ── */
  var hand = 30, idle = null;
  function setHand(v, how) { T.style.transition = how || ''; T.style.setProperty('--hand', v + 'deg'); }
  if (!REDUCED) { setHand(hand - 330, 'none'); void T.offsetWidth; setHand(hand, '--hand 1.8s cubic-bezier(.16, .84, .24, 1)'); setTimeout(function () { T.style.transition = ''; }, 1850); }
  setInterval(function () {
    if (T.classList.contains('dusk') || document.hidden || REDUCED) return;
    hand += 6; setHand(hand);
    T.classList.add('tock'); setTimeout(function () { T.classList.remove('tock'); }, 120);
  }, 1000);
  function dusk(on) {
    if (on && !T.classList.contains('dusk')) { T.classList.add('dusk'); [].forEach.call(T.querySelectorAll('.dring'), function (r) { retrigger(r, 'go'); }); }
    if (!on) T.classList.remove('dusk');
    clearTimeout(idle);
    if (on) idle = setTimeout(function () { if (panel.hidden) dusk(false); else dusk(true); }, 6000);
  }
  ['pointermove', 'pointerdown', 'touchstart'].forEach(function (ev) { T.addEventListener(ev, function () { dusk(true); }, { passive: true }); });

  /* ── The menu ── */
  var ITEMS = [
    { id: 'new', label: 'New Game' },
    { id: 'import', label: 'Import from Solstice' },
    { id: 'continue', label: 'Continue', off: function () { return !start(); } },
    { id: 'back', label: 'Back to Solstice' }
  ];
  function paintMenu(focusId) {
    menu.innerHTML = ITEMS.map(function (it, k) {
      var off = it.off && it.off();
      return '<li style="--i:' + k + '" data-i="' + k + '"><button class="it" type="button" data-go="' + it.id + '"' + (off ? ' disabled' : '') + '>' +
        '<i class="sl" aria-hidden="true"></i><i class="ol" aria-hidden="true"></i><i class="fx" aria-hidden="true"></i><span class="tx" data-t="' + esc(it.label) + '">' + esc(it.label) + '</span></button></li>';
    }).join('');
    var b = focusId && menu.querySelector('[data-go="' + focusId + '"]:not(:disabled)') || menu.querySelector('.it:not(:disabled)');
    select(b);
    if (b) b.focus({ preventScroll: true });
  }
  function select(btn) {
    [].forEach.call(menu.children, function (li) { li.classList.toggle('sel', !!btn && li.contains(btn)); });
    var li = btn && btn.closest('li'); if (li) plate.style.setProperty('--s', li.dataset.i);
  }
  menu.addEventListener('focusin', function (e) { var b = e.target.closest('.it'); if (b) { select(b); dusk(true); } });
  menu.addEventListener('pointermove', function (e) { var b = e.target.closest('.it'); if (b && !b.disabled && document.activeElement !== b) b.focus({ preventScroll: true }); });
  menu.addEventListener('click', function (e) {
    var b = e.target.closest('[data-go]'); if (!b || b.disabled) return;
    var li = b.closest('li'); retrigger(li, 'pick'); dusk(true);
    var go = b.dataset.go;
    if (go === 'new') openNew();
    else if (go === 'import') openImport();
    else if (go === 'continue') openSummary(start());
    else if (go === 'back') location.href = 'femc-game.html';
  });

  /* ── Panels ── */
  var returnTo = null;
  function openPanel(html, focusSel) {
    returnTo = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.go : null;
    card.innerHTML = html; panel.hidden = false; dusk(true);
    var f = card.querySelector(focusSel || 'button:not(:disabled)'); if (f) f.focus({ preventScroll: true });
  }
  function closePanel() { panel.hidden = true; paintMenu(returnTo); }
  panel.addEventListener('click', function (e) {
    if (e.target === panel) return closePanel();
    var b = e.target.closest('button'); if (!b || b.disabled) return;
    var a = b.dataset.act;
    if (a === 'close') closePanel();
    else if (a === 'fresh') { lsSet(START_KEY, JSON.stringify({ v: 1, at: Date.now(), fresh: true })); openSummary(start()); }
    else if (a === 'slot') previewSlot(b.dataset.key);
    else if (a === 'import-list') openImport();
    else if (a === 'import-go') doImport(b.dataset.key);
  });

  var WORLD = { runners: 'Runners', strangers: 'strangers', hoax: 'HOAX', stay: 'Stay', true: 'True' };
  function worlds(list) { return (list || []).map(function (e) { return WORLD[e.world] || e.world; }); }
  function when(t) { if (!t) return ''; var d = new Date(t); return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ', ' + d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }); }
  function stats(im) {
    var c = im.cosmetics || {}, a = im.album || {};
    var album = (a.cg || []).length + (a.posts || []).length + (a.booth || []).length + (a.polaroids || []).length;
    return '<ul class="eq-stats">' +
      '<li><span>Looks</span><b>' + (c.own || []).length + '</b></li>' +
      '<li><span>Velvet Plumes</span><b>' + (im.plumes || 0) + '</b></li>' +
      '<li><span>Album</span><b>' + album + '</b></li>' +
      '<li><span>Epilogues</span><b>' + (im.epilogues || []).length + '</b></li></ul>' +
      ((im.epilogues || []).length ? '<p><small>Finished: ' + esc(worlds(im.epilogues).join(', ')) + '</small></p>' : '');
  }

  function openNew() {
    var s = start();
    openPanel('<span class="kick">New Game</span><h2>Start fresh</h2>' +
      '<p>A new year with nothing carried over from Solstice: no looks, no plumes.</p>' +
      (s ? '<p><small>This replaces the starting point you already set' + (s.import ? ' (your Solstice import)' : '') + '.</small></p>' : '') +
      '<div class="eq-acts"><button type="button" class="eq-btn main" data-act="fresh">Start fresh</button><button type="button" class="eq-btn" data-act="close">Back</button></div>');
  }

  function openImport() {
    var list = IM ? IM.slots() : [];
    var rows = list.map(function (s) {
      var name = s.n === 0 ? 'Autosave' : 'Slot ' + s.n;
      var sub = [s.date ? 'In-game ' + s.date : '', s.playthrough && s.playthrough.ngp ? 'New Game+ ' + s.playthrough.ngp : '', s.epilogues && s.epilogues.length ? 'Epilogues: ' + worlds(s.epilogues).join(', ') : ''].filter(Boolean).join(' · ');
      return '<button type="button" class="eq-row" data-act="slot" data-key="' + esc(s.slot) + '"' + (s.finished ? '' : ' disabled') + '>' +
        '<b>' + esc(name) + (s.label ? ' · ' + esc(s.label) : '') + '</b><em>' + (s.finished ? 'Year finished' : 'Not finished') + '</em>' +
        '<span>' + esc(sub || 'Saved ' + when(s.savedAt)) + (sub ? ' · saved ' + esc(when(s.savedAt)) : '') + '</span></button>';
    }).join('');
    openPanel('<span class="kick">Import from Solstice</span><h2>Pick a save</h2>' +
      '<p>Your looks, leftover Velvet Plumes and album come over, and Equinox remembers which epilogues you finished. Levels, links and items stay in Solstice. Your Solstice save isn\'t changed.</p>' +
      '<div class="eq-list">' + (rows || '<div class="eq-empty">No Solstice saves found in this browser.</div>') + '</div>' +
      (rows && !list.some(function (s) { return s.finished; }) ? '<p><small>Only a save from after the year is finished can be imported.</small></p>' : '') +
      '<div class="eq-acts"><button type="button" class="eq-btn" data-act="close">Back</button></div>', '.eq-row:not(:disabled), .eq-btn');
  }

  function previewSlot(key) {
    var im = IM && IM.read(key);
    if (!im) { openPanel('<span class="kick">Import</span><h2>Can\'t import this one</h2><p>That save\'s year isn\'t finished.</p><div class="eq-acts"><button type="button" class="eq-btn" data-act="import-list">Back</button></div>'); return; }
    var s = start();
    openPanel('<span class="kick">Import from Solstice</span><h2>This comes over</h2>' + stats(im) +
      (s ? '<p><small>This replaces the starting point you already set.</small></p>' : '') +
      '<div class="eq-acts"><button type="button" class="eq-btn main" data-act="import-go" data-key="' + esc(key) + '">Import</button><button type="button" class="eq-btn" data-act="import-list">Pick another</button></div>');
  }
  function doImport(key) {
    var im = IM && IM.read(key); if (!im) return previewSlot(key);
    lsSet(START_KEY, JSON.stringify({ v: 1, at: Date.now(), from: im.from || { slot: key }, import: im }));
    openSummary(start());
  }

  function openSummary(s) {
    if (!s) return closePanel();
    var body = s.import ? stats(s.import) + '<p><small>Imported ' + esc(when(s.at)) + '.</small></p>' : '<p>A fresh start: nothing carried over.</p>';
    openPanel('<span class="kick">Your Equinox save</span><h2>Ready</h2>' + body +
      '<p>The year begins on Tuesday, April 6, 2010. Equinox itself is still being built; your starting point is saved here and will be waiting when it opens.</p>' +
      '<div class="eq-acts"><button type="button" class="eq-btn main" data-act="close">Done</button>' + (s.import ? '' : '<button type="button" class="eq-btn" data-act="import-list">Import instead</button>') + '</div>');
  }

  /* ── Keys (and the controller, through pad.js): ↑↓ move, Esc / ○ back ── */
  function focusables() {
    var scope = panel.hidden ? menu : card;
    return [].slice.call(scope.querySelectorAll('button:not(:disabled)'));
  }
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    dusk(true);
    var k = e.key;
    if (k === 'Escape') { if (!panel.hidden) { e.preventDefault(); closePanel(); } return; }
    if (k !== 'ArrowDown' && k !== 'ArrowUp' && k !== 'ArrowLeft' && k !== 'ArrowRight') return;
    var list = focusables(); if (!list.length) return;
    var i = list.indexOf(document.activeElement), d = k === 'ArrowDown' || k === 'ArrowRight' ? 1 : -1;
    var n = list[(i < 0 ? 0 : i + d + list.length) % list.length];
    e.preventDefault(); n.focus({ preventScroll: true });
  });

  hint.textContent = start() ? 'Your Equinox save is set: Continue shows it' : '';
  paintMenu();
})();
