/* Persona 3: Solstice · tips for new players (Kat, Nov 3 2026: "tutorials for new players, that give you tips and tell you
   how different things work over time. They need to be able to be turned off").
   A short tip the first time a screen or system shows up: a small card (bottom left, bottom on phones) with Got it and
   Turn tips off. Each tip shows once. Never mid-dialogue or over a fight: while a scene, a rank-up, the date card or the
   battle frame is up (the same gate ui.js pumpStat uses) the tip waits, and shows when its screen is still there after.
   Triggers are CSS selectors watched by a MutationObserver (no hooks in ui.js): TIPS[i] = [id, title, text, selector].
   One tip per matched element, so a results screen hands out the fight tips one fight at a time.
   Save: S.tips = { on, seen: [ids] }. A save without it gets on = a new game in the prologue (not New Game+), so saves
   already past the prologue start with tips off. Settings → Story → Tips (ui.js settingRows) flips it; Menu → Records →
   Tips (menu.js 'tips' tab: pageHtml / wirePage) rereads every tip seen, plus the Navigator's battle tips the fights have
   shown (battle save tipsSeen, battle data tips). Styles: solstice-menu.css (.g-tip, .g-tips-page). Tests: tests/femc_tips.py. */
window.FemcTips = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TIPS = [
    ['menu', 'The menu', 'Everything about Solar and her friends lives here. Pick an entry with the mouse or the arrow keys; Esc steps back.', '.g-fm-ov.is-home:not(.out)'],
    ['goout', 'Going out', 'Pick a place on the map to spend this part of the day. People keep their own schedules, so who you find depends on the day.', '.g-map.g-city'],
    ['area', 'Places', 'Each place has things to do and people who drop by. What you choose uses up the time.', '.g-areaview'],
    ['evening', 'Evenings', 'The evening is yours: whatever you pick here is how the night goes. Some nights the dorm has plans of its own.', '.g-dorm:not(.g-holiday):not(.g-trip):not(.g-xmas)'],
    ['phone', 'Your phone', 'Texts land here. The apps along the top switch between your messages and the rest.', '.g-phone-ov:not(.out)'],
    ['free', 'Who’s free', 'Who you could spend time with today, and where to find them.', '.g-phone-ov [data-tab=free].on'],
    ['jobs', 'Part-time jobs', 'A shift pays yen and uses up the time. Each job runs on its own days.', '.g-phone-ov [data-tab=jobs].on'],
    ['shop', 'Shops and gifts', 'What you buy goes in your bag. Gifts wait there too: give one at the start of a hangout.', '.g-shop-ov:not(.out)'],
    ['links', 'Social Links', 'Time spent with someone deepens your bond. Higher ranks bring perks for fights and for daily life.', '.g-fm-ov.is-links:not(.out)'],
    ['bonds', 'Bond perks', 'Every perk your bonds have earned, and the ones still waiting on a higher rank.', '.g-fm-ov [data-tab=bonds].on'],
    ['wardrobe', 'The Wardrobe', 'Outfits, weapon skins and titles you own. Equip one and it shows up in fights, and in scenes if you like.', '.g-fm-ov.is-page [data-wd-view=wardrobe].on'],
    ['boutique', 'The Boutique', 'Spend Velvet Plumes on new looks. The featured looks change with the months, and a repeat gives plumes back.', '.g-fm-ov [data-wd-view=banner].on'],
    ['skills', 'Haenim’s sun', 'Levels and memories give skill points to spend on the sun. Each ray is a different way to fight.', '.g-fm-ov [data-tab=skills].on'],
    ['personas', 'Personas', 'Each fighter’s Persona, its skills and what it resists. Haenim’s forms and Solar’s Echo are here too.', '.g-fm-ov [data-tab=personas].on'],
    ['echoes', 'Echoes', 'An Echo lends Haenim its skills and fills gaps in her resistances. It grows as you fight with it.', '.g-fm-ov .g-ec-slot'],
    ['cards', 'Revelation cards', 'Every fighter has six card slots. Cards come from Tartarus and Shuffle Time; Tarot Dust levels them up.', '.g-fm-ov [data-tab=cards].on'],
    ['tartarus', 'Tartarus', 'Choose who climbs with you. Access points save your progress, and you can head home to rest whenever you need.', '.g-tt-ov:not(.out)'],
    ['battle', 'Fighting', 'Hit a weakness or land a critical to knock a Shadow down and act again. Knock them all down for an All-Out Attack.', '.g-results-ov:not(.out)'],
    ['shuffle', 'Shuffle Time', 'After some fights the cards come out. Pick one: it might be a skill card, a Revelation card or an Echo.', '.g-results-ov:not(.out)'],
    ['theurgy', 'Theurgy', 'Fighting fills each member’s Theurgy gauge. When it’s full, their big move sits at the top of their menu and costs no SP.', '.g-results-ov:not(.out)']
  ];
  const BY = Object.fromEntries(TIPS.map(t => [t[0], t]));
  const S = () => G.S;
  // The save's record. A new game writes it while still in the prologue (on, unless New Game+); a save without one reads as
  // off and only gets one when a tip shows or the setting changes, so older saves (and test snapshots) stay as they were.
  const dflt = s => s.phase === 'prologue' && !s.ngp;
  function st() {
    const s = S(); if (!s) return { on: false, seen: [] };
    if (!s.tips || typeof s.tips !== 'object') return { on: dflt(s), seen: [], none: true };
    if (!Array.isArray(s.tips.seen)) s.tips.seen = [];
    return s.tips;
  }
  function own() { const s = S(), t = st(); if (t.none) s.tips = { on: t.on, seen: [] }; return s.tips; }
  G.onChange(() => { const s = S(); if (s && s.started && s.phase === 'prologue' && !s.tips) s.tips = { on: dflt(s), seen: [] }; });
  const on = () => !!st().on;
  function set(v) { own().on = !!v; G.saveQuiet(); if (!v) hide(); else check(); }
  const seen = id => st().seen.includes(id);
  // Never over dialogue, a rank-up, the date card, an act card or a fight; nor on the title screen.
  const busy = () => !S()?.started || S().phase === 'title' || !!document.querySelector('.gs:not(.out), .gs-rank, .g-datecard, .g-actcard, .g-dh, .g-title, .g-av-ov:not(.out)');
  let card = null, used = new WeakSet(), timer = 0;
  function hide() { if (!card) return; const c = card; card = null; c.classList.add('out'); setTimeout(() => c.remove(), 200); setTimeout(check, 400); }
  function show(t, el) {
    used.add(el);
    own().seen.push(t[0]); G.saveQuiet();
    card = document.createElement('aside');
    card.className = 'g-tip'; card.dataset.tip = t[0]; card.setAttribute('role', 'status');
    card.innerHTML = `<p class="g-tip-k">Tip</p><b class="g-tip-h">${esc(t[1])}</b><p class="g-tip-t">${esc(t[2])}</p>
      <div class="g-tip-row"><button type="button" class="g-tip-ok" data-tip-ok>Got it</button><button type="button" class="g-tip-off" data-tip-off>Turn tips off</button></div>`;
    // The card never takes focus or keys: it waits for a click, so a menu or scene under it keeps working as before.
    card.addEventListener('pointerdown', e => e.stopPropagation());
    card.querySelector('[data-tip-ok]').addEventListener('click', e => { e.stopPropagation(); G.sfx('femc-hover'); hide(); });
    card.querySelector('[data-tip-off]').addEventListener('click', e => { e.stopPropagation(); G.sfx('femc-back'); set(false); G.toast('note', 'Tips are off. Settings → Tips turns them back on.'); });
    document.body.appendChild(card);
  }
  function check() {
    timer = 0;
    if (card) { // its screen went away (or a scene came up over it): it goes too
      if (busy() || !document.querySelector(BY[card.dataset.tip][3])) hide();
      return;
    }
    if (!on() || busy()) return;
    for (const t of TIPS) {
      if (seen(t[0])) continue;
      const el = document.querySelector(t[3]);
      if (el && !used.has(el)) { show(t, el); return; }
    }
  }
  const soon = () => { if (!timer) timer = setTimeout(check, 450); };
  new MutationObserver(soon).observe(document.body || document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

  /* ── The Tips page (Menu → Records → Tips) ── */
  function battleTips() {
    const D = window.FEMC_BATTLE_DATA, b = S()?.battleSave, gl = (D && D.glossary) || [];
    if (!D || !D.tips || !b || !Array.isArray(b.tipsSeen)) return [];
    return b.tipsSeen.filter(k => D.tips[k]).map(k => { const [topic, text] = D.tips[k], g = gl.find(x => x.id === topic); return [k, g ? g.name : topic, text]; });
  }
  function pageHtml() {
    const mine = TIPS.filter(t => seen(t[0])), bt = battleTips();
    const row = t => `<li><b>${esc(t[1])}</b><p>${esc(t[2])}</p></li>`;
    return `<div class="g-tips-page"><div class="g-tips-top"><p class="g-note">${on() ? 'Tips are on: a new one shows the first time something comes up.' : 'Tips are off.'} ${mine.length} of ${TIPS.length} seen.</p>
      <button type="button" class="g-btn small" data-tips-toggle aria-pressed="${on()}">${on() ? 'Turn tips off' : 'Turn tips on'}</button>${mine.length ? '<button type="button" class="g-btn small" data-tips-reset>Show them again</button>' : ''}</div>
      ${mine.length ? `<h3>Around town</h3><ul class="g-tips-list">${mine.map(row).join('')}</ul>` : '<p class="g-note">No tips seen yet. They show the first time each part of the game comes up.</p>'}
      ${bt.length ? `<h3>In battle <small>the Navigator’s</small></h3><ul class="g-tips-list">${bt.map(row).join('')}</ul>` : ''}</div>`;
  }
  function wirePage(el, rerender) {
    el.querySelector('[data-tips-toggle]')?.addEventListener('click', () => { set(!on()); G.sfx('femc-click'); rerender('[data-tips-toggle]'); });
    el.querySelector('[data-tips-reset]')?.addEventListener('click', () => { own().seen = []; own().on = true; used = new WeakSet(); G.saveQuiet(); G.sfx('femc-click'); rerender('[data-tips-toggle]'); });
  }
  return { TIPS, on, set, seen, check, hide, pageHtml, wirePage, isShowing: () => !!card };
})();
