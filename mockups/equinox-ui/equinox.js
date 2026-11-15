/* Persona 3: Equinox UI demos: shared behaviour (DESIGN MOCKUP ONLY).
   - Fills lists: <ol data-fill="title|field|battle|choice"> and <ol data-fill="party">. A page may set
     window.EQ_OPTS = { sub: { field: [...] }, faces: true } before this script to add small sub-labels.
   - Navigation: every [data-nav] list is a listbox. ↑↓ (Home / End) move the selection in the screen at the
     middle of the viewport (or the focused list), Enter / Space "pick" it, the pointer selects only when it
     really moves (never on a list marked data-nohover, whose rows move themselves), a click selects and picks. Events: 'eq:select' and 'eq:pick' on the list (detail { i, li }).
   - Dialogue: .line[data-type] types itself out when its frame comes into view; click the box to replay.
   Reduced motion: no typing, everything shown at once. */
(function () {
  'use strict';
  var O = window.EQ_OPTS || {};
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var P = '../../assets/femc/portraits/';
  var DATA = {
    title: ['New Game', 'Import from Solstice', 'Continue', 'Settings'],
    field: ['Party', 'Personas', 'Skills', 'Equipment', 'Items', 'Wardrobe', 'Links', 'Status', 'Records'],
    battle: ['Attack', 'Skill', 'Guard', 'Item', 'Tactics', 'Rush'],
    choice: ['Option one: a placeholder answer.', '(Option two: something she does.)']
  };
  var PARTY = [
    { n: 'Solar', f: 'solar', hp: [412, 460], sp: [188, 240] },
    { n: 'Yukari', f: 'yukari', hp: [301, 388], sp: [211, 262] },
    { n: 'Junpei', f: 'junpei', hp: [455, 470], sp: [96, 150] },
    { n: 'Akihiko', f: 'akihiko', hp: [389, 402], sp: [120, 176] }
  ];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ── fill ──
  [].forEach.call(document.querySelectorAll('[data-fill]'), function (ol) {
    var kind = ol.getAttribute('data-fill');
    if (kind === 'party') {
      ol.innerHTML = PARTY.map(function (m, i) {
        var hp = Math.round(m.hp[0] / m.hp[1] * 100), sp = Math.round(m.sp[0] / m.sp[1] * 100);
        return '<li class="pm' + (i ? '' : ' lead') + '" style="--i:' + i + '">' +
          '<span class="face"><img src="' + P + m.f + '/neutral.webp" alt="" loading="lazy"></span>' +
          '<span class="nm">' + m.n + '</span>' +
          '<span class="g hp"><em>HP</em><i style="--v:' + hp + '%"></i><b>' + m.hp[0] + '</b></span>' +
          '<span class="g sp"><em>SP</em><i style="--v:' + sp + '%"></i><b>' + m.sp[0] + '</b></span></li>';
      }).join('');
      return;
    }
    var items = DATA[kind] || [];
    var from = +(ol.getAttribute('data-from') || 0), to = +(ol.getAttribute('data-to') || items.length);
    var subs = (O.sub && O.sub[kind]) || [];
    ol.innerHTML = items.slice(from, to).map(function (t, k) {
      var i = k + from;
      return '<li style="--i:' + i + '" data-i="' + i + '"><button class="it" type="button" tabindex="-1">' +
        '<i class="fx" aria-hidden="true"></i><span class="tx" data-t="' + esc(t) + '">' + esc(t) + '</span>' +
        (subs[i] ? '<small class="sub">' + esc(subs[i]) + '</small>' : '') + '</button></li>';
    }).join('');
  });

  // ── navigation ──
  var lists = [].slice.call(document.querySelectorAll('[data-nav]'));
  var lastIn = new WeakMap(); // frame → list last used there
  function itemsOf(list) { return [].slice.call(list.querySelectorAll(':scope > li')); }
  function select(list, i, quiet) {
    var its = itemsOf(list); if (!its.length) return;
    i = (i + its.length) % its.length;
    its.forEach(function (li, k) { var on = k === i; li.classList.toggle('sel', on); li.setAttribute('aria-selected', on ? 'true' : 'false'); });
    list.setAttribute('aria-activedescendant', its[i].id);
    list._i = i;
    var fr = list.closest('.frame'); if (fr) lastIn.set(fr, list);
    if (!quiet) list.dispatchEvent(new CustomEvent('eq:select', { bubbles: true, detail: { i: i, li: its[i] } }));
  }
  function pick(list) {
    var li = itemsOf(list)[list._i || 0]; if (!li) return;
    li.classList.remove('pick'); void li.offsetWidth; li.classList.add('pick');
    setTimeout(function () { li.classList.remove('pick'); }, 420);
    list.dispatchEvent(new CustomEvent('eq:pick', { bubbles: true, detail: { i: list._i || 0, li: li } }));
  }
  lists.forEach(function (list, n) {
    list.setAttribute('role', 'listbox');
    if (!list.hasAttribute('tabindex')) list.tabIndex = 0;
    itemsOf(list).forEach(function (li, k) {
      li.setAttribute('role', 'option'); li.id = li.id || ('eq-' + n + '-' + k);
      var px = null, py = null;
      li.addEventListener('pointermove', function (e) {
        if (e.pointerType === 'touch' || list.hasAttribute('data-nohover')) return;
        if (px !== null && Math.abs(e.clientX - px) + Math.abs(e.clientY - py) < 2) return;
        px = e.clientX; py = e.clientY;
        if (list._i !== k) select(list, k);
      });
      li.addEventListener('pointerleave', function () { px = py = null; });
      li.addEventListener('click', function () { select(list, k); pick(list); list.focus({ preventScroll: true }); });
    });
    list.addEventListener('focus', function () { var fr = list.closest('.frame'); if (fr) lastIn.set(fr, list); });
    select(list, +(list.getAttribute('data-start') || 0), true);
  });
  function frameAtMiddle() {
    var y = innerHeight / 2, best = null;
    [].forEach.call(document.querySelectorAll('.frame'), function (f) {
      var r = f.getBoundingClientRect(); if (r.top <= y && r.bottom >= y) best = f;
    });
    return best;
  }
  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
    var list = t && t.closest && t.closest('[data-nav]');
    if (!list) { var fr = frameAtMiddle(); if (fr) list = lastIn.get(fr) || fr.querySelector('[data-nav]'); }
    if (!list) return;
    var k = e.key, i = list._i || 0, n = itemsOf(list).length;
    var horiz = list.hasAttribute('data-horiz');
    if (k === 'ArrowDown' || (horiz && k === 'ArrowRight')) select(list, i + 1);
    else if (k === 'ArrowUp' || (horiz && k === 'ArrowLeft')) select(list, i - 1);
    else if (k === 'Home') select(list, 0);
    else if (k === 'End') select(list, n - 1);
    else if (k === 'Enter' || (k === ' ' && t === list)) pick(list);
    else return;
    e.preventDefault();
  });

  // ── dialogue typing ──
  [].forEach.call(document.querySelectorAll('.line[data-type]'), function (p) {
    var full = p.textContent.trim(), timer = null;
    function run() {
      clearInterval(timer);
      if (REDUCED) { p.textContent = full; return; }
      var n = 0; p.textContent = '';
      timer = setInterval(function () { n += 1; p.textContent = full.slice(0, n); if (n >= full.length) clearInterval(timer); }, 26);
    }
    p.textContent = full;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) run(); }); }, { threshold: .5 }).observe(p.closest('.frame') || p);
    }
    var box = p.closest('[data-replay]'); if (box) box.addEventListener('click', run);
  });

  // ?thumb (the hub's previews): open on the title screen without a hash, so the hub page itself never scrolls
  if (/[?&]thumb/.test(location.search)) {
    var A = document.getElementById('a');
    var go = function () { if (A) window.scrollTo(0, A.getBoundingClientRect().top + window.scrollY - 8); };
    go(); addEventListener('load', go);
  }

  window.EQ = { select: select, pick: pick, reduced: REDUCED };
})();
