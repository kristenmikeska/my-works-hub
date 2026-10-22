/* FEMC revamp: the field menu (P3's dorm / field menu), opened from the HUD's Menu button or M.
   One menu for the whole game. Tabs: Party (who goes into Tartarus, levels, HP/SP, Personas), Personas (the current Persona,
   its skills and affinities; Haenim's forms), Skills (the skill system: see SKILLS below), Equipment (weapon, armor, accessory
   per member, from the gear bought in shops or found in Tartarus), Items (consumables, gear, books, jobs), Status (Solar's
   social stats, condition, exams), Links (the social links), Journal (memory fragments), Calendar (this month), and the
   Compendium page.
   The battle side's numbers come from the playthrough's battle save (core.js S.battleSave, shape in assets/femc/battle/save.js)
   through the battle engine (engine.js: levels, stats, skills, equipment math) and its data (data.js). Changes made here
   (party, tactics, equipment, Haenim's form) are written straight into S.battleSave, so the next fight uses them.

   The same menu opens over a fight (Tartarus's hub and access points, a fight's results, Get Ready before a boss): the battle
   frame persists its save, calls window.FemcBridge.openMenu(tab, opts) (ui.js), and reloads S.battleSave when the menu
   closes. opts (FemcMenu.open's second argument): inBattle, kind (the handoff's: tartarus / operation / scripted), onClose, required (ids who must fight: no benching), solo
   (Solar alone: no party changes, only her equipment), extra (ids to list though the calendar hasn't made them available
   yet: a searcher awakening in this very fight), items / yen (what Solar is carrying tonight: the battle's own counts),
   hp ({ id: { hp, maxHp, sp, maxSp } } mid-climb), lockParty (on a floor: the team changes only at the entrance or an access point), useItem(id,
   target) (on a floor: use a field item; returns { items, hp } or { leave: true } for an escape item; the frame applies it).

   ── SKILLS: the skill system (built 2026-10-20 from Kat's picks; FEMC-REVAMP-ROADMAP.md sections 6 and 7) ──
     - Haenim's tree (data.js tree / treeCenter): a Sun trunk, four branches (Bell, Jade, Star, Veil), choice nodes, hidden memory
       nodes, keystones that awaken her forms, Unveiled at the center. Owned ids: S.battleSave.nodes; points: S.battleSave.pts.
     - Party trees (data.js ptrees): three tiers each, opened at link ranks 0 / 4 / 7, points from levels; MAX (rank 10) evolves
       a signature skill (rank 10 for every link, the ones that go to 15 too; their label says Rank 10). Owned ids: S.battleSave.ptree[mid]; ranks are copied into S.battleSave.ranks (syncLife).
     - Eight skill slots and "forget which?" (engine.js kitFor / forgetSkill), upgrades in place (data.js chains).
     - Respec at the Velvet Room for yen (progression.respecFee), from the field only (not in the Dark Hour).
     Rules are engine.js's (treeState / treeBuy / ptreeState / ptreeBuy / kitFor); this file only draws them and writes
     S.battleSave through G.ensureBattleSave() then G.saveQuiet(). Practice mode keeps the battle page's own tree screen.

   ── CARDS, BONDS and weapon refines (the building systems, build.js) ──
     - Cards: each fighter's six Revelation card slots (I Crown … VI Fate), the card box (filter by slot), a card's detail with
       Equip / Remove, Level up (Tarot Dust + yen), Refine (Velvet Thread + yen; R3 an Arcana Fragment), Lock and Dismantle
       (two presses), and the skill cards Shuffle Time gives (teach one to a member). Faces are Kat's set art in a frame drawn in code (cardFace → icons.js revCard).
     - Bonds: every met link's perks (Battle / Assist / Tartarus / Daily / MAX), earned or not, paused (reversed) or waiting on a
       system that isn't built yet. The Links tab shows a link's perks when you pick it.
     - Equipment: weapon art (Solar's naginatas) and Refine (+1 to +5) on the weapon slot.
     Money: in the field the life sim's yen (G.addYen); in the Dark Hour the battle save's (the fight reports the change back).

   ── COLLECTION (gacha.js draws and wires it): the capsule machine's keychains by set, phone cases (pick one for the phone),
     and both machines' counters (turns, tickets, Capsule Stars, Velvet draws and plumes). */
window.FemcMenu = (() => {
  const G = window.FemcGame, UI = () => window.FemcGameUI, SC = window.FemcScene;
  const D = () => window.FEMC_BATTLE_DATA, E = () => window.FemcBattleEngine, BS = () => window.FemcBattleSave;
  const S = () => G.S;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const yen = n => `¥${Math.round(n || 0).toLocaleString('en-US')}`;
  const AFF = { normal: '–', weak: 'Wk', resist: 'Rs', null: 'Nu', drain: 'Dr', repel: 'Rp' };
  const TABS = [['party', 'Party'], ['personas', 'Personas'], ['skills', 'Skills'], ['cards', 'Cards'], ['equip', 'Equipment'], ['items', 'Items'], ['collection', 'Collection'], ['status', 'Status'], ['links', 'Links'], ['bonds', 'Bonds'], ['journal', 'Journal'], ['calendar', 'Calendar'], ['compendium', 'Compendium']];
  const BLD = () => window.FemcBuild || null;
  let o = null, tab = 'party', sel = {}, opts = {};

  /* ── Battle-side helpers (no fight running: the engine is asked for numbers only) ── */
  // The battle save, normalized once and then reused while it's still the playthrough's (ensureBattleSave makes a fresh copy
  // each call, so two calls in one action would otherwise edit different objects).
  let bsCache = null;
  const bsave = () => (bsCache && bsCache === S().battleSave ? bsCache : (bsCache = G.ensureBattleSave()));
  const member = id => D().party.find(m => m.id === id);
  // Members the calendar allows today (plus opts.extra), in the battle game's order, Solar first. Unknown ids are skipped.
  const roster = () => { const ids = new Set(G.available().concat(opts.extra || [])); return D().party.filter(m => ids.has(m.id)); };
  const required = id => (opts.required || []).includes(id);
  const inParty = id => id === 'solar' || (bsave().party || []).includes(id);
  const lvOf = id => E().lvlOf(bsave(), id);
  const unit = id => { try { return E().buildUnit(id, bsave(), {}); } catch (e) { return null; } };
  const personaOf = id => D().personas[E().personaId(id, bsave())];
  const elIcon = el => (window.FemcBattleArt ? window.FemcBattleArt.icon(el) : '');
  const skillChips = ids => `<ul class="g-chips">${ids.map(id => { const s = D().skills[id]; return s ? `<li title="${esc(s.desc || '')}">${s.icon && window.FemcIcons ? window.FemcIcons.svg(s.icon, null, 'bt-ico sk') : elIcon(s.el)}<span>${esc(s.name)}</span></li>` : ''; }).join('')}</ul>`;
  // The story hides Solar's face until she has her armband; the menu shows the battle game's portraits (data.js portraits).
  const face = (id, f = 'neutral') => {
    const src = G.portrait(id, f) || (member(id) && D().portraits ? `${D().portraits}${id}/${f}.webp` : null);
    return src ? `<img src="${src}" alt="">` : `<span>${esc(G.name(id)[0] || '?')}</span>`;
  };
  // A member's HP/SP: tonight's numbers mid-climb (opts.hp), otherwise full.
  const bars = (id, u) => { const h = (opts.hp || {})[id] || {}, mh = h.maxHp || u.maxHp, ms = h.maxSp || u.maxSp, hp = h.hp ?? mh, sp = h.sp ?? ms;
    return `<span class="g-pm-bars"><span class="g-bar hp"><small>HP</small><i style="--w:${Math.round(hp / mh * 100)}%"></i><b>${hp}</b></span><span class="g-bar sp"><small>SP</small><i style="--w:${Math.round(sp / ms * 100)}%"></i><b>${sp}</b></span></span>`; };
  const tacticOf = id => (id === 'solar' ? 'direct' : ((bsave().tactics || {})[id] || 'direct'));
  const affChips = aff => `<div class="g-affs">${D().affinityOrder.map(x => { const a = aff[x] || 'normal'; return `<span class="g-aff ${a}" title="${esc(D().elements[x].name)}: ${a}">${elIcon(x)}<em>${AFF[a]}</em></span>`; }).join('')}</div>`;

  /* ── Tabs ── */
  function partyTab() {
    const b = bsave(), list = roster();
    const list2 = opts.solo ? list.filter(m => m.id === 'solar') : list;
    const card = m => {
      const u = unit(m.id), p = personaOf(m.id), on = inParty(m.id), slot = m.id === 'solar' ? 1 : (b.party.indexOf(m.id) + 2), tac = D().tactics[tacticOf(m.id)];
      const tag = m.id === 'solar' ? 'Leader' : required(m.id) ? 'Required' : on ? `In · ${slot}` : 'Bench';
      return `<div class="g-pm-wrap"><button type="button" class="g-pm${on ? ' in' : ''}${m.id === 'solar' ? ' lead' : ''}${required(m.id) ? ' req' : ''}" data-pm="${m.id}" aria-pressed="${on}" style="--c:${m.color || '#ff4f9e'}">
        <i class="g-pm-pic">${face(m.id, m.faces?.idle || 'serious')}</i>
        <span class="g-pm-info"><b>${esc(m.name)}<small>Lv ${lvOf(m.id)}</small></b><span class="g-pm-per">${esc(p?.name || '')}${p?.arcana ? ` · ${esc(p.arcana)}` : ''}</span>
          ${u ? bars(m.id, u) : ''}
          <span class="g-pm-role">${esc(m.role || '')}</span></span>
        <em class="g-pm-slot">${tag}</em></button>
        ${m.id === 'solar' ? '<span class="g-pm-tac lead">Always Direct</span>' : `<button type="button" class="g-pm-tac" data-tac="${m.id}" title="${esc(tac?.desc || '')}">Tactic · <b>${esc(tac?.name || 'Direct Command')}</b></button>`}</div>`;
    };
    const head = opts.solo ? 'Solar fights this one alone.' : opts.lockParty ? 'The team is set for this climb. Change it at the entrance or an access point.'
      : `Pick up to three to fight beside Solar. The bench still earns ${Math.round(D().progression.benchShare * 100)}% of the EXP.${(opts.required || []).length ? ` ${opts.required.map(id => esc(member(id)?.name || id)).join(' and ')} must take part.` : ''}${G.navigator() ? ` ${esc(G.name(G.navigator()))} navigates.` : ''}`;
    return `<p class="g-note">${head} Tactics: Direct lets you choose; the others act on their own.</p>
      <div class="g-pm-grid">${list2.map(card).join('')}</div>`;
  }
  function wireParty(el) {
    el.querySelectorAll('[data-pm]').forEach(bt => bt.addEventListener('click', () => {
      const id = bt.dataset.pm; if (id === 'solar' || opts.solo) return;
      if (opts.lockParty) { G.toast('note', 'Change the party at the entrance or an access point.'); G.sfx('femc-hover'); return; }
      const b = bsave(), at = b.party.indexOf(id);
      if (at >= 0 && required(id)) { G.toast('note', `${member(id).name} must take part in this fight.`); G.sfx('femc-hover'); return; }
      if (at >= 0) b.party.splice(at, 1);
      else if (b.party.length >= 3) { G.toast('note', 'The party is full. Bench someone first.'); return; }
      else b.party.push(id);
      // Tonight's team is remembered for the next Tartarus night (not a story fight's lineup).
      if (!opts.inBattle || opts.kind === 'tartarus') S().tartarus.lastParty = ['solar', ...b.party];
      G.saveQuiet(); G.sfx('femc-click'); render(id);
    }));
    el.querySelectorAll('[data-tac]').forEach(bt => bt.addEventListener('click', () => {
      const id = bt.dataset.tac, b = bsave(), order = Object.keys(D().tactics);
      b.tactics = b.tactics || {};
      b.tactics[id] = order[(order.indexOf(tacticOf(id)) + 1) % order.length];
      if (b.tactics[id] === 'direct') delete b.tactics[id];
      G.saveQuiet(); G.sfx('femc-hover'); render(`[data-tac="${id}"]`);
    }));
  }
  function personasTab() {
    const b = bsave(), list = roster();
    const id = sel.persona && list.some(m => m.id === sel.persona) ? sel.persona : 'solar';
    const m = member(id), p = personaOf(id), u = unit(id), kit = E().kitFor(id, b), skills = kit.slots.concat(kit.sig ? [kit.sig] : []);
    const forms = ['haenim'].concat(E().formsList());
    const formsHtml = id === 'solar' ? `<h3>Forms</h3><div class="g-forms">${forms.map(f => { const fp = D().personas[f], ok = E().formUnlocked(b, f), on = (b.form || 'haenim') === f; return `<button type="button" class="g-form${ok ? '' : ' lock'}${on ? ' on' : ''}" data-form="${f}"${ok ? '' : ' disabled'} style="--c:${fp.color || '#ff4f9e'}"><img src="${fp.art}" alt=""><b>${esc(fp.name)}</b><small>${ok ? esc(fp.theme || 'Base form') : 'Not yet'}</small>${on ? '<i>In use</i>' : ''}</button>`; }).join('')}</div>` : '';
    return `<div class="g-pv">
      <div class="g-pv-who">${list.map(x => `<button type="button" class="g-who-mini${x.id === id ? ' on' : ''}" data-pv="${x.id}" title="${esc(x.name)}"><i>${face(x.id, x.faces?.idle || 'serious')}</i><b>${esc(x.name)}</b></button>`).join('')}</div>
      <div class="g-pv-main"><div class="g-pv-art"><img src="${p.art}" alt="${esc(p.name)}"></div>
        <div class="g-pv-card"><p class="g-kicker">${esc(p.arcana || '')} · ${esc(m.name)}${inParty(id) ? ' · in the party' : ''}</p><h2>${esc(p.name)}${p.ko ? ` <span class="ko">${esc(p.ko)}</span>` : ''}</h2>
          ${u ? `<p class="g-pv-stats">${[['HP', u.maxHp], ['SP', u.maxSp], ['St', u.st], ['Ma', u.ma], ['En', u.en], ['Ag', u.ag], ['Lu', u.lu]].map(([k, v]) => `<span><small>${k}</small><b>${v}</b></span>`).join('')}</p>` : ''}
          ${affChips(u ? u.aff : p.aff || {})}
          <h3>Skills <small>${kit.slots.length} / ${D().skillSlots}</small></h3>${skillChips(skills)}${kit.pending.length ? `<p class="g-note">A new skill is waiting: choose one to forget on the Skills tab.</p>` : ''}
          ${p.blurb ? `<p class="g-note">${esc(p.blurb)}</p>` : ''}${formsHtml}</div></div></div>`;
  }
  function wirePersonas(el) {
    el.querySelectorAll('[data-pv]').forEach(bt => bt.addEventListener('click', () => { sel.persona = bt.dataset.pv; G.sfx('femc-hover'); render(); }));
    el.querySelectorAll('[data-form]').forEach(bt => bt.addEventListener('click', () => { const b = bsave(); if (!E().formUnlocked(b, bt.dataset.form)) return; b.form = bt.dataset.form; G.saveQuiet(); G.sfx('femc-rankup'); render(); }));
  }
  /* ── SKILLS: the skill system (Kat's picks; rules in engine.js, nodes in data.js tree / treeCenter / ptrees) ──
     The who-bar picks Solar (Haenim's tree) or a party member (their three-tier tree). A node is selected with a click, a tap
     or the arrow keys (pad: the D-pad); clicking / Enter on the selected node buys it (so does the Unlock button). Learning a
     ninth skill opens "forget which?" right here; anyone still waiting for that choice has a banner. Respec is the Velvet
     Room's (a yen fee, outside the Dark Hour). Forms awaken from the keystones and are switched on the Personas tab. */
  const COLS = ['bell', 'jade', 'sun', 'star', 'veil'];
  const skMembers = () => roster().filter(m => m.id === 'solar' || D().ptrees[m.id]);
  const frags = () => E().fragSet(bsave(), S().fragments || []);
  const rankOf = id => +(((S().links || {})[id] || {}).rank) || 0;
  const skIcon = id => { const sk = D().skills[id] || {}; return sk.icon && window.FemcIcons ? window.FemcIcons.svg(sk.icon, null, 'bt-ico sk') : elIcon(sk.el); };
  const kitOf = id => E().kitFor(id, bsave());
  const fee = (who, spent) => { const f = D().progression.respecFee; return Math.max(f.min, Math.round(spent * (who === 'solar' ? f.solar : f.party))); };
  // Haenim's grid: column → rows; a choice pair shares a row. Memory nodes sit below the keystone.
  function haenimGrid() {
    const out = [];
    COLS.forEach((cid, ci) => {
      const b = D().tree.find(x => x.id === cid);
      let row = 0, last = null;
      const main = b.nodes.filter(n => !n.memory), mem = b.nodes.filter(n => n.memory);
      main.forEach(n => {
        if (n.choice && last && last.choice === n.choice) out.push({ n, b, ci, x: ci * 2 + 1, y: row - 1, pair: true });
        else { out.push({ n, b, ci, x: ci * 2, y: row, pair: !!n.choice }); row++; }
        last = n;
      });
      if (cid === 'sun') { out.push({ n: D().treeCenter, b: { id: 'center', name: 'Unveiled', world: 'The center', color: '#fff2b0' }, ci, x: ci * 2, y: row + 0.5, center: true }); row += 2; }
      mem.forEach(n => { out.push({ n, b, ci, x: ci * 2, y: row + 0.5, mem: true }); row++; });
    });
    return out;
  }
  function partyGrid(mid) { return E().ptreeNodes(mid).map(n => ({ n, x: D().ptrees[mid].tiers[n.tier].findIndex(z => z.id === n.id), y: n.tier })); }
  // Arrow keys: the nearest node in that direction (the other axis counts double).
  function gridMove(grid, id, key) {
    const cur = grid.find(g => g.n.id === id) || grid[0];
    const d = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[key];
    let best = null;
    grid.forEach(g => {
      if (g === cur) return;
      const dx = g.x - cur.x, dy = g.y - cur.y, along = dx * d[0] + dy * d[1];
      if (along <= 0) return;
      const score = along + 2.2 * Math.abs(d[0] ? dy : dx);
      if (!best || score < best.s) best = { g, s: score };
    });
    return best ? best.g.n.id : cur.n.id;
  }
  const hState = id => E().treeState(bsave(), id, frags());
  function nodeBtn(g, st, on) {
    const n = g.n, hid = st === 'hidden';
    return `<button type="button" class="g-hn ${st}${n.keystone ? ' key' : ''}${g.mem ? ' mem' : ''}${n.choice ? ' choice' : ''}${g.center ? ' center' : ''}${on ? ' sel' : ''}" data-hn="${n.id}" style="--c:${g.b ? g.b.color : 'var(--pink)'}" aria-pressed="${st === 'own'}" aria-label="${esc(hid ? 'Hidden memory node' : n.name)}: ${st}">
      <i class="gem" aria-hidden="true"></i><b>${esc(hid ? '? ? ?' : n.name)}</b><small>${st === 'own' ? '✓' : `${n.cost}`}</small></button>`;
  }
  function kitHtml(id) {
    const k = kitOf(id), N = D().skillSlots;
    const rows = Array.from({ length: N }, (_, i) => { const s = k.slots[i], sk = s && D().skills[s]; return `<li${sk ? ` title="${esc(sk.desc || '')}"` : ' class="empty"'}><em>${i + 1}</em>${sk ? `${skIcon(s)}<span>${esc(sk.name)}</span>` : '<span>—</span>'}</li>`; }).join('');
    return `<h3>Skills <small>${k.slots.length} / ${N}</small></h3><ol class="g-sk-kit">${rows}${k.sig ? `<li class="sig" title="${esc(D().skills[k.sig].desc || '')}"><em>★</em>${skIcon(k.sig)}<span>${esc(D().skills[k.sig].name)}</span></li>` : ''}</ol>`;
  }
  function pendingBanner() {
    const waiting = skMembers().filter(m => kitOf(m.id).pending.length);
    return waiting.length && !sel.forget ? `<div class="g-sk-banner">${waiting.map(m => `<button type="button" class="g-btn small pink" data-sk-forget="${m.id}">${esc(m.name)}: a new skill is waiting · forget which?</button>`).join('')}</div>` : '';
  }
  function forgetHtml(mid) {
    const k = kitOf(mid), fresh = k.pending[0];
    if (!fresh) return '';
    const m = member(mid), list = k.slots.concat([fresh]);
    return `<div class="g-sk-forget" role="group" aria-label="Forget a skill"><p class="g-kicker">${esc(m.name)} · ${D().skillSlots} skill slots</p><h2>Forget a skill?</h2>
      <p>${esc(m.name)} wants to learn <b>${esc(D().skills[fresh].name)}</b>, but ${esc(personaOf(mid).name)} already holds ${D().skillSlots}. Choose one to forget; it won’t come back by itself. Choose the new one to skip it.</p>
      <ul class="g-sk-flist">${list.map(id => `<li><button type="button" class="g-sk-fb${id === fresh ? ' new' : ''}${sel.armed === id ? ' armed' : ''}" data-forget="${id}">${skIcon(id)}<b>${esc(D().skills[id].name)}${id === fresh ? ' <em>NEW</em>' : ''}</b><small>${sel.armed === id ? (id === fresh ? 'Press again: don’t learn it' : 'Press again to forget it') : esc(D().skills[id].desc || '')}</small></button></li>`).join('')}</ul></div>`;
  }
  function velvetHtml(who) {
    const b = bsave(), solar = who === 'solar', spent = solar ? E().treeSpent(b) : E().ptreeSpent(b, who), cost = fee(who, spent), name = solar ? 'Haenim' : member(who).name;
    return `<div class="g-sk-velvet" role="group" aria-label="The Velvet Room"><p class="g-kicker">The Velvet Room</p><h2>Rewrite the tree?</h2>
      <p>“The threads can be unpicked and woven again,” Elizabeth says, turning a page. ${esc(name)}’s ${spent} spent point${spent === 1 ? '' : 's'} come back to be spent anew${solar ? '; forms that have awakened stay awake' : ''}. The fee is <b>${yen(cost)}</b>.</p>
      <div class="g-row"><button type="button" class="g-btn pink" data-velvet-ok${S().yen < cost || !spent ? ' disabled' : ''}>${!spent ? 'Nothing to rewrite' : S().yen < cost ? `Not enough yen (${yen(S().yen)})` : `Pay ${yen(cost)} · respec`}</button><button type="button" class="g-btn" data-velvet-no>Not now</button></div></div>`;
  }
  function haenimView() {
    const b = bsave(), grid = haenimGrid(), fr = frags();
    if (!grid.some(g => g.n.id === sel.hn)) sel.hn = (grid.find(g => hState(g.n.id) === 'avail') || grid[0]).n.id;
    const cur = grid.find(g => g.n.id === sel.hn), n = cur.n, st = hState(n.id), why = E().treeWhy(b, n.id, fr), afford = b.pts >= n.cost;
    sel.col = cur.ci;
    const col = (cid, ci) => {
      const br = D().tree.find(x => x.id === cid), items = grid.filter(g => g.ci === ci);
      const rows = []; items.forEach(g => { const last = rows[rows.length - 1]; if (g.x % 2 === 1 && last) last.push(g); else rows.push([g]); });
      return `<section class="g-ht-col${ci === sel.col ? ' on' : ''}${cid === 'sun' ? ' trunk' : ''}" style="--c:${br.color}" aria-label="${esc(br.name)}">
        <header>${['bell', 'jade', 'star'].includes(cid) && window.FemcBattleArt ? window.FemcBattleArt.charm(cid) : `<span class="g-ht-glyph">${cid === 'sun' ? '✺' : '◐'}</span>`}<div><b>${esc(br.name)}</b><small>${esc(br.world)} · ${esc(br.theme.split(' · ').slice(0, 2).join(' · '))}</small></div></header>
        ${rows.map(r => `<div class="g-hn-row${r.length > 1 ? ' pair' : ''}${r[0].mem ? ' memrow' : ''}${r[0].center ? ' centerrow' : ''}">${r.map(g => nodeBtn(g, hState(g.n.id), g.n.id === sel.hn)).join('')}</div>`).join('')}
      </section>`;
    };
    const btn = st === 'own' ? 'Unlocked' : st !== 'avail' ? (st === 'taken' ? 'Not chosen' : st === 'hidden' ? 'A memory first' : 'Locked') : afford ? `Unlock · ${n.cost} SP` : `Need ${n.cost} SP`;
    const branch = cur.b;
    return `<div class="g-sk-top"><p><b>Haenim</b> · Lv ${b.lvl} · <span class="g-sk-pts">${b.pts} skill point${b.pts === 1 ? '' : 's'}</span><small>from levels, full moons and memory fragments</small></p>
        <button type="button" class="g-btn small" data-velvet="solar"${opts.inBattle ? ' disabled title="The Velvet Room’s door is in town, not in the Dark Hour."' : ''}>Velvet Room · Respec</button></div>
      <div class="g-ht-switch" role="tablist">${COLS.map((cid, ci) => { const br = D().tree.find(x => x.id === cid); return `<button type="button" class="g-chip${ci === sel.col ? ' on' : ''}" data-col="${ci}" style="--c:${br.color}">${esc(br.name)}</button>`; }).join('')}</div>
      <div class="g-sk-main"><div class="g-ht">${COLS.map(col).join('')}</div>
        <aside class="g-sk-detail" style="--c:${branch.color}"><p class="g-kicker">${esc(branch.name)} · ${esc(branch.world)}${n.choice ? ' · choose one' : ''}${n.memory ? ' · memory' : ''}${n.keystone ? ' · keystone' : ''}</p>
          <h3 class="g-sk-name">${esc(st === 'hidden' ? '? ? ?' : n.name)}</h3><p>${st === 'hidden' ? 'Something from another life is still hiding here.' : esc(n.desc)}</p>
          ${why ? `<p class="g-sk-why">${esc(why)}</p>` : ''}
          <button type="button" class="g-btn pink" data-sk-buy${st !== 'avail' || !afford ? ' disabled' : ''}>${btn}</button>
          ${kitHtml('solar')}</aside></div>`;
  }
  function partyView(mid) {
    const b = bsave(), m = member(mid), t = D().ptrees[mid], rank = rankOf(mid), grid = partyGrid(mid), pts = E().ptreePts(b, mid);
    if (!grid.some(g => g.n.id === sel.pn)) sel.pn = (grid.find(g => E().ptreeState(b, mid, g.n.id, rank) === 'avail') || grid[0]).n.id;
    const n = grid.find(g => g.n.id === sel.pn).n, st = E().ptreeState(b, mid, n.id, rank);
    const R = D().ptreeRanks, link = G.LINKS[mid];
    const why = st === 'rank' ? `Opens at link rank ${R[n.tier]} (now ${rank}).` : st === 'lock' ? 'Buy something in the tier above first.' : st === 'taken' ? 'The other choice is taken.' : st === 'avail' && pts < n.cost ? `Needs ${n.cost} point${n.cost === 1 ? '' : 's'}; more come with levels.` : '';
    const tier = k => `<div class="g-pt-tier${rank >= R[k] ? '' : ' shut'}"><p class="g-pt-h">Tier ${k + 1}<small>${R[k] ? `link rank ${R[k]}` : 'open'}${k === 2 ? ' · choose one' : ''}</small></p>
      <div class="g-hn-row${k === 2 ? ' pair' : ''}">${t.tiers[k].map(x => nodeBtn({ n: x, b: { color: m.color } }, E().ptreeState(b, mid, x.id, rank), x.id === sel.pn)).join('')}</div></div>`;
    const maxed = rank >= 10, from = D().skills[t.max.from], to = D().skills[t.max.to];
    const btn = st === 'own' ? 'Unlocked' : st !== 'avail' ? (st === 'rank' ? `Link rank ${R[n.tier]}` : st === 'taken' ? 'Not chosen' : 'Locked') : pts >= n.cost ? `Unlock · ${n.cost} pt${n.cost === 1 ? '' : 's'}` : `Need ${n.cost}`;
    return `<div class="g-sk-top"><p><b>${esc(m.name)}</b> · Lv ${lvOf(mid)} · ${link ? `${esc(link.arcana || '')} · rank ${rank}` : 'no link yet'} · <span class="g-sk-pts">${pts} point${pts === 1 ? '' : 's'}</span><small>from levels</small></p>
        <button type="button" class="g-btn small" data-velvet="${mid}"${opts.inBattle ? ' disabled title="The Velvet Room’s door is in town, not in the Dark Hour."' : ''}>Velvet Room · Respec</button></div>
      <div class="g-sk-main"><div class="g-pt" style="--c:${m.color}">${[0, 1, 2].map(tier).join('')}
          <div class="g-pt-tier g-pt-max${maxed ? ' done' : ' shut'}"><p class="g-pt-h">${link && G.maxOf(link) > 10 ? 'Rank 10' : 'MAX'}<small>link rank 10</small></p><p class="g-pt-maxline">${maxed ? '✓ ' : ''}<b>${esc(from ? from.name : t.max.from)}</b> evolves into <b>${esc(to.name)}</b>. ${esc(to.desc)}</p></div></div>
        <aside class="g-sk-detail" style="--c:${m.color}"><p class="g-kicker">${esc(m.name)} · tier ${n.tier + 1}${n.choice ? ' · choose one' : ''}</p>
          <h3 class="g-sk-name">${esc(n.name)}</h3><p>${esc(n.desc)}</p>${why ? `<p class="g-sk-why">${esc(why)}</p>` : ''}
          <button type="button" class="g-btn pink" data-pt-buy${st !== 'avail' || pts < n.cost ? ' disabled' : ''}>${btn}</button>
          ${kitHtml(mid)}</aside></div>`;
  }
  function skillsTab() {
    const list = skMembers();
    if (!list.some(m => m.id === sel.sk)) sel.sk = 'solar';
    const who = `<div class="g-pv-who g-sk-who">${list.map(x => { const p = x.id === 'solar' ? bsave().pts : E().ptreePts(bsave(), x.id), wait = kitOf(x.id).pending.length; return `<button type="button" class="g-who-mini${x.id === sel.sk ? ' on' : ''}" data-sk="${x.id}" title="${esc(x.name)}"><i>${face(x.id, x.faces?.idle || 'serious')}</i><b>${esc(x.name)}<small>${wait ? 'New skill!' : `${p} pt${p === 1 ? '' : 's'}`}</small></b></button>`; }).join('')}</div>`;
    const over = sel.forget ? forgetHtml(sel.forget) : sel.velvet ? velvetHtml(sel.velvet) : '';
    return `<div class="g-sk${over ? ' has-over' : ''}">${who}${pendingBanner()}${over || (sel.sk === 'solar' ? haenimView() : partyView(sel.sk))}</div>`;
  }
  function wireSkills(el) {
    const again = f => render(f);
    el.querySelectorAll('[data-sk]').forEach(bt => bt.addEventListener('click', () => { sel.sk = bt.dataset.sk; sel.velvet = null; G.sfx('femc-hover'); again(`[data-sk="${sel.sk}"]`); }));
    el.querySelectorAll('[data-col]').forEach(bt => bt.addEventListener('click', () => { const g = haenimGrid().filter(x => x.ci === +bt.dataset.col); sel.hn = (g.find(x => hState(x.n.id) === 'avail') || g[0]).n.id; G.sfx('femc-hover'); again(`[data-hn="${sel.hn}"]`); }));
    el.querySelectorAll('[data-hn]').forEach(bt => bt.addEventListener('click', () => {
      const id = bt.dataset.hn;
      if (sel.sk === 'solar') { if (sel.hn === id) buyHaenim(); else { sel.hn = id; G.sfx('femc-hover'); again(`[data-hn="${id}"]`); } }
      else if (sel.pn === id) buyParty(); else { sel.pn = id; G.sfx('femc-hover'); again(`[data-hn="${id}"]`); }
    }));
    el.querySelector('[data-sk-buy]')?.addEventListener('click', buyHaenim);
    el.querySelector('[data-pt-buy]')?.addEventListener('click', buyParty);
    el.querySelectorAll('[data-sk-forget]').forEach(bt => bt.addEventListener('click', () => { sel.forget = bt.dataset.skForget; sel.armed = null; G.sfx('femc-click'); again('[data-forget]'); }));
    el.querySelectorAll('[data-forget]').forEach(bt => bt.addEventListener('click', () => {
      const id = bt.dataset.forget, mid = sel.forget;
      if (sel.armed !== id) { sel.armed = id; G.sfx('femc-hover'); again(`[data-forget="${id}"]`); return; }
      E().forgetSkill(bsave(), mid, id); sel.armed = null;
      G.toast('note', `${member(mid).name} forgot ${D().skills[id].name}.`); G.sfx('femc-click');
      if (!kitOf(mid).pending.length) sel.forget = null;
      G.saveQuiet(); again(sel.forget ? '[data-forget]' : `[data-sk="${sel.sk}"]`);
    }));
    el.querySelectorAll('[data-velvet]').forEach(bt => bt.addEventListener('click', () => { if (opts.inBattle) return; sel.velvet = bt.dataset.velvet; G.sfx('femc-click'); again('[data-velvet-no]'); }));
    el.querySelector('[data-velvet-no]')?.addEventListener('click', () => { sel.velvet = null; G.sfx('femc-hover'); again(`[data-sk="${sel.sk}"]`); });
    el.querySelector('[data-velvet-ok]')?.addEventListener('click', () => {
      const who = sel.velvet, b = bsave(), spent = who === 'solar' ? E().treeSpent(b) : E().ptreeSpent(b, who), cost = fee(who, spent);
      if (!spent || S().yen < cost) return;
      G.addYen(-cost);
      if (who === 'solar') E().treeRespec(b); else E().ptreeRespec(b, who);
      sel.velvet = null; G.saveQuiet(); G.sfx('femc-rankup');
      G.toast('note', `The Velvet Room rewrote ${who === 'solar' ? 'Haenim' : member(who).name}’s tree: ${spent} point${spent === 1 ? '' : 's'} back.`);
      again(`[data-sk="${sel.sk}"]`);
    });
    // Arrows walk the tree (the menu's own [ ] still switch tabs).
    el.querySelector('.g-ht, .g-pt')?.addEventListener('keydown', e => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;
      e.preventDefault(); e.stopPropagation();
      if (sel.sk === 'solar') { sel.hn = gridMove(haenimGrid(), sel.hn, e.key); again(`[data-hn="${sel.hn}"]`); }
      else { sel.pn = gridMove(partyGrid(sel.sk), sel.pn, e.key); again(`[data-hn="${sel.pn}"]`); }
      G.sfx('femc-hover');
    });
  }
  function afterLearn(mid) { if (kitOf(mid).pending.length) { sel.forget = mid; sel.armed = null; } }
  function buyHaenim() {
    if (hState(sel.hn) === 'own') { G.sfx('femc-hover'); return; }
    const b = bsave(), r = E().treeBuy(b, sel.hn, frags());
    if (!r.ok) { G.toast('note', r.why); G.sfx('femc-hover'); return; }
    G.sfx('femc-rankup');
    const n = E().treeNode(sel.hn);
    G.toast('note', r.form ? `${n.name}: ${D().personas[r.form].name} has awakened. Switch forms on the Personas tab.` : r.learned.length ? `Haenim learned ${D().skills[r.learned[0]].name}.` : `${n.name} unlocked.`);
    afterLearn('solar');
    G.saveQuiet();
    render(sel.forget ? '[data-forget]' : `[data-hn="${sel.hn}"]`);
  }
  function buyParty() {
    const b = bsave(), mid = sel.sk;
    if (E().ptreeState(b, mid, sel.pn, rankOf(mid)) === 'own') { G.sfx('femc-hover'); return; }
    const r = E().ptreeBuy(b, mid, sel.pn, rankOf(mid));
    if (!r.ok) { G.toast('note', r.why); G.sfx('femc-hover'); return; }
    G.sfx('femc-rankup');
    const n = E().ptreeNodes(mid).find(x => x.id === sel.pn);
    G.toast('note', r.learned.length ? `${member(mid).name} learned ${D().skills[r.learned[0]].name}.` : `${member(mid).name}: ${n.name} unlocked.`);
    afterLearn(mid);
    G.saveQuiet();
    render(sel.forget ? '[data-forget]' : `[data-hn="${sel.pn}"]`);
  }
  /* What the life sim knows that the battle save needs: fragments found (a skill point each, once; the memory nodes) and the
     link ranks (the party trees' tiers, MAX evolutions). The battle's handoff does the same (battle.js hoBegin). */
  function syncLife() {
    const b = bsave(), D0 = D();
    let changed = false;
    (S().fragments || []).forEach(f => { if (D0.memories.some(m => m.id === f) && !b.memories.includes(f)) { b.memories.push(f); b.pts += D0.progression.memoryPoints; changed = true; } });
    b.ranks = b.ranks || {};
    D0.party.forEach(m => { if (m.id === 'solar' || !G.LINKS[m.id]) return; const r = Math.min(10, rankOf(m.id)); if ((b.ranks[m.id] || 0) !== r) { b.ranks[m.id] = r; changed = true; } });
    // Every link's rank for the bond perks (and the gifts some ranks give: a naginata, a skill point).
    if (BLD()) {
      const ranks = {}, rev = [], love = [];
      Object.entries(S().links || {}).forEach(([k, p]) => { if (p.rank > 0) ranks[k] = p.rank; if (p.reversed) rev.push(k); if (p.route === 'romance') love.push(k); });
      const before = JSON.stringify([b.bonds, b.bondsRev, b.bondsLove, b.bondDate]);
      const gifts = BLD().syncBonds(b, ranks, rev, love, G.dayInfo ? G.dayInfo().md : null);
      gifts.forEach(g => G.toast('perk', g.gear ? `A gift: ${D0.gear[g.gear].name}${BLD().namedTag(g.gear).replace('!', '')}` : 'A gift: +1 skill point for Haenim’s tree'));
      if (gifts.length || before !== JSON.stringify([b.bonds, b.bondsRev, b.bondsLove, b.bondDate])) changed = true;
    }
    if (changed) G.saveQuiet();
  }
  function equipTab() {
    const b = bsave(), list = opts.solo ? roster().filter(m => m.id === 'solar') : roster();
    BS().syncGear(b, S().gear);
    const id = sel.equip && list.some(m => m.id === sel.equip) ? sel.equip : 'solar';
    // Loading an earlier slot can remove the previously selected member from the roster.
    // Equipment clicks must target the same member the panel now displays.
    sel.equip = id;
    const m = member(id), eq = BS().eqOf(b, id), u = unit(id), SL = [['weapon', 'Weapon'], ['armor', 'Armor'], ['acc', 'Accessory']];
    const open = sel.slot;
    const icon = x => (window.FemcIcons ? window.FemcIcons.of(x) : '');
    const cands = open ? BS().candidates(b, id, open) : [];
    return `<div class="g-eq">
      <div class="g-pv-who">${list.map(x => `<button type="button" class="g-who-mini${x.id === id ? ' on' : ''}" data-eq="${x.id}" title="${esc(x.name)}"><i>${face(x.id, x.faces?.idle || 'serious')}</i><b>${esc(x.name)}<small>Lv ${lvOf(x.id)}</small></b></button>`).join('')}</div>
      <div class="g-eq-main">
        <div class="g-eq-head"><h2>${esc(m.name)}<small>${esc(personaOf(id)?.name || '')}</small></h2>${u ? `<p class="g-pv-stats">${[['HP', u.maxHp], ['SP', u.maxSp], ['ATK', u.atk], ['DEF', u.def], ['St', u.st], ['Ma', u.ma], ['En', u.en], ['Ag', u.ag], ['Lu', u.lu]].map(([k, v]) => `<span><small>${k}</small><b>${Math.round(v)}</b></span>`).join('')}</p>` : ''}</div>
        <div class="g-eq-slots">${SL.map(([k, label]) => { const g = D().gear[eq[k]], rf = g && BLD() ? BLD().wrefOf(b, eq[k]) : 0; return `<button type="button" class="g-eq-slot${open === k ? ' open' : ''}${g && g.art ? ' art' : ''}" data-slot="${k}"><small>${label}</small>${g && g.art ? `<img class="g-eq-art${g.artWide ? ' wide' : ''}" src="${G.base}${g.art}" alt="">` : `<i>${g ? icon(eq[k]) : ''}</i>`}<b>${g ? esc(g.name) + (rf ? ` +${rf}` : '') : '—'}<span>${g ? esc(BS().gearLine(eq[k], b)) : 'Nothing equipped'}</span>${g && g.look ? `<span class="look">${esc(g.look)}</span>` : ''}</b></button>`; }).join('')}</div>
        ${refineHtml(b, eq.weapon)}
        ${open ? `<ul class="g-eq-list">${cands.map(x => { const g = x && D().gear[x]; return `<li><button type="button" class="g-eq-item${x === eq[open] ? ' cur' : ''}${g && g.art ? ' art' : ''}" data-pick="${x || ''}">${g && g.art ? `<img class="g-eq-art sm${g.artWide ? ' wide' : ''}" src="${G.base}${g.art}" alt="">` : `<i>${g ? icon(x) : ''}</i>`}<b>${g ? esc(g.name) : 'Remove'}<span>${g ? esc(BS().gearLine(x, b)) : 'Take it off'}</span></b><em>${x === eq[open] ? 'E' : g && g.tier ? `×${BS().spare(b, x)}` : ''}</em></button></li>`; }).join('') || '<li class="g-note">Nothing that fits. Shops are on the Strip and at the Mall.</li>'}</ul>` : '<p class="g-note small">Pick a slot to change it. Gear bought in town goes here.</p>'}
      </div></div>`;
  }
  /* Money for building: the life sim's yen in the field, the battle save's in the Dark Hour (the fight reports it back). */
  const yenNow = () => (opts.inBattle ? bsave().yen : S().yen);
  const payYen = n => { if (opts.inBattle) { bsave().yen = Math.max(0, bsave().yen - n); opts.yen = bsave().yen; } else G.addYen(-n); };
  const costHtml = c => Object.entries(c).map(([k, n]) => k === 'yen' ? `<span class="${yenNow() >= n ? '' : 'short'}">¥${n.toLocaleString('en-US')}</span>` : `<span class="${(bsave().mats[k] || 0) >= n ? '' : 'short'}">${esc(D().materials[k].name)} ×${n} <small>(${bsave().mats[k] || 0})</small></span>`).join('');
  function refineHtml(b, wid) {
    const g = D().gear[wid], B = BLD();
    if (!B || !g || !(g.tier > 0)) return '';
    const r = B.wrefOf(b, wid), c = B.wrefCost(b, wid);
    return `<div class="g-refine"><p><b>Refine · ${esc(g.name)} ${r ? `+${r}` : ''}</b><small>${c ? `+${r + 1}: ATK ${B.weaponAtk(b, wid)} → ${Math.round(g.atk * (1 + B.WREF.atk * (r + 1)))}${g.bonus ? ', its bonus +15%' : ''}` : 'Fully refined (+5).'}</small></p>
      ${c ? `<div class="g-cost">${costHtml(c)}</div><button type="button" class="g-btn small pink" data-refine="${esc(wid)}"${B.canPay(b, c, yenNow()) ? '' : ' disabled'}>Refine to +${r + 1}</button>` : ''}</div>`;
  }
  function wireEquip(el) {
    el.querySelectorAll('[data-eq]').forEach(bt => bt.addEventListener('click', () => { sel.equip = bt.dataset.eq; sel.slot = null; G.sfx('femc-hover'); render(); }));
    el.querySelectorAll('[data-slot]').forEach(bt => bt.addEventListener('click', () => { sel.slot = sel.slot === bt.dataset.slot ? null : bt.dataset.slot; G.sfx('femc-click'); render(`[data-slot="${bt.dataset.slot}"]`); }));
    el.querySelectorAll('[data-pick]').forEach(bt => bt.addEventListener('click', () => {
      const b = bsave(), id = sel.equip || 'solar';
      BS().equip(b, id, sel.slot, bt.dataset.pick || null);
      sel.slot = null; G.saveQuiet(); G.sfx('femc-rankup'); render();
    }));
    el.querySelector('[data-refine]')?.addEventListener('click', e => {
      const wid = e.currentTarget.dataset.refine, r = BLD().refineWeapon(bsave(), wid, { yenNow: yenNow(), payYen });
      if (!r.ok) { G.toast('note', r.why); G.sfx('femc-hover'); return; }
      G.toast('note', `${D().gear[wid].name} is now +${r.lvl}.`); G.sfx('femc-rankup'); G.saveQuiet(); render('[data-refine], [data-slot="weapon"]');
    });
  }

  /* ── CARDS (Revelation-style, P5X) ── */
  /* A Revelation card face: icons.js revCard (Kat's set art in the window, the frame and slot plate drawn around it). */
  const cardFace = (c, cls = '') => window.FemcIcons.revCard(c, { cls, base: G.base });
  const subsHtml = c => { const B = BLD(); return `<ul class="g-card-stats"><li class="main"><b>${esc(B.statLine(c.main, B.mainValue(c)))}</b><small>main</small></li>${c.subs.map(([k, v]) => `<li>${esc(B.statLine(k, v))}</li>`).join('')}${Array.from({ length: Math.max(0, 4 - c.subs.length) }, () => '<li class="empty">—</li>').join('')}</ul>`; };
  // A member's card bonus in words: totals of every stat line and the set bonuses that are on.
  function bonusSummary(mid) {
    const B = BLD(), b = bsave(), x = B.unitBonus(b, mid, BS().eqOf(b, mid).weapon), parts = [];
    ['hp', 'sp', 'st', 'ma', 'en', 'ag', 'lu'].forEach(k => { if (x.flat[k]) parts.push(`${k.toUpperCase()} +${x.flat[k]}`); if (x.pct[k]) parts.push(`${k.toUpperCase()} +${x.pct[k]}%`); });
    ['crit', 'critX', 'heal', 'th', 'evade', 'phys'].forEach(k => { if (x[k]) parts.push(B.statLine(k, Math.round(x[k]))); });
    Object.entries(x.el).forEach(([e, v]) => parts.push(`${D().elements[e] ? D().elements[e].name : e} +${Math.round(v)}%`));
    return parts;
  }
  function cardsTab() {
    const B = BLD();
    if (!B) return '<p class="g-note">Cards aren’t available.</p>';
    const b = bsave(), C = B.ensureCards(b), list = opts.solo ? roster().filter(m => m.id === 'solar') : roster();
    const mid = sel.cmember && list.some(m => m.id === sel.cmember) ? sel.cmember : 'solar';
    sel.cmember = mid;
    const eq = C.eq[mid] || {}, slot = sel.cslot || null;
    const box = C.list.filter(c => !slot || c.slot === slot).slice().sort((a, c2) => ((B.wearerOf(b, c2.u) === mid) - (B.wearerOf(b, a.u) === mid)) || (c2.r - a.r) || (c2.lvl - a.lvl) || (c2.u - a.u));
    const cur = sel.card != null ? B.cardById(b, sel.card) : null;
    const sets = Object.entries(B.setCounts(b, mid)).filter(([, n]) => n >= 2);
    const mats = ['tarot_dust', 'velvet_thread', 'arcana_fragment'].map(k => `<span>${esc(D().materials[k].name)} <b>${b.mats[k] || 0}</b></span>`).join('') + `<span>Yen <b>¥${yenNow().toLocaleString('en-US')}</b></span>`;
    const slotBtn = sd => { const c = B.cardById(b, eq[sd.id]); return `<button type="button" class="g-cslot${slot === sd.id ? ' on' : ''}${c ? ' full' : ''}" data-cslot="${sd.id}" title="${esc(sd.name)}${c ? ': ' + esc(B.cardName(c)) : ''}">${c ? cardFace(c, 'mini') : `<span class="g-cslot-empty"><b>${sd.n}</b>${esc(sd.name)}</span>`}<small>${sd.n} · ${esc(sd.name)}</small></button>`; };
    let detail = '<p class="g-note">Pick a card to see it. Cards come from Shuffle Time, chests, bosses and Mayoido Antiques.</p>';
    if (cur) {
      const who = B.wearerOf(b, cur.u), mine = who === mid, other = eq[cur.slot] && eq[cur.slot] !== cur.u ? B.cardById(b, eq[cur.slot]) : null;
      const lc = B.levelCost(cur), rc = B.refineCost(cur), st = B.SETS[cur.set];
      const cmp = other ? `<p class="g-card-cmp">Instead of <b>${esc(B.cardName(other))}</b> ★${other.r} Lv ${other.lvl}: ${esc(B.statLine(other.main, B.mainValue(other)))}${other.subs.length ? ' · ' + other.subs.map(([k, v]) => esc(B.statLine(k, v))).join(' · ') : ''}</p>` : '';
      detail = `<div class="g-card-detail" style="--g:${st.color}">${cardFace(cur, 'big')}<div>
          <p class="g-kicker">${esc(st.world)} · ★${cur.r} · Lv ${cur.lvl}/${B.CARD.maxLvl[cur.r]} · R${cur.ref}/${B.CARD.maxRef}${who ? ` · on ${esc(member(who)?.name || who)}` : ''}</p>
          <h3 class="g-card-name">${esc(B.cardName(cur))}</h3>
          ${subsHtml(cur)}
          <p class="g-card-set"><b>${esc(st.name)}</b> 2: ${esc(st.t2)} · 4: ${esc(st.t4)}</p>${cmp}
          <div class="g-row g-card-acts">
            ${mine ? `<button type="button" class="g-btn small" data-cunequip="${cur.slot}">Remove</button>` : `<button type="button" class="g-btn small pink" data-cequip="${cur.u}">Equip on ${esc(member(mid).name)}</button>`}
            ${lc ? `<button type="button" class="g-btn small" data-clevel="${cur.u}"${B.canPay(b, lc, yenNow()) ? '' : ' disabled'}>Level up</button>` : '<span class="g-chip">Max level</span>'}
            ${rc ? `<button type="button" class="g-btn small" data-crefine="${cur.u}"${B.canPay(b, rc, yenNow()) ? '' : ' disabled'}>Refine</button>` : '<span class="g-chip">Fully refined</span>'}
            <button type="button" class="g-btn small" data-clock="${cur.u}">${cur.lock ? 'Unlock' : 'Lock'}</button>
            <button type="button" class="g-btn small${sel.armedCard === cur.u ? ' pink' : ''}" data-cdis="${cur.u}"${cur.lock ? ' disabled title="Locked"' : ''}>${sel.armedCard === cur.u ? 'Dismantle? Press again' : 'Dismantle'}</button>
          </div>
          <div class="g-card-costs">${lc ? `<p><small>Level up</small>${costHtml(lc)}</p>` : ''}${rc ? `<p><small>Refine</small>${costHtml(rc)}</p>` : ''}<p><small>Dismantle</small><span>Tarot Dust ×${B.CARD.dismantle[cur.r] + Math.floor((cur.spent || 0) / 2)}${cur.ref ? ` · Velvet Thread ×${cur.ref}` : ''}</span></p></div>
        </div></div>`;
    }
    const sc = Object.entries(b.skillCards || {}).filter(([, n]) => n > 0);
    const skillCards = sc.length ? `<h3>Skill cards</h3><ul class="g-skillcards">${sc.map(([k, n]) => `<li><b>${esc(D().skills[k].name)} ×${n}</b><small>${esc(D().skills[k].desc || '')}</small>${sel.teach === k ? `<span class="g-teach">${list.map(m => { const t = B.teachable(b, m.id, k); return `<button type="button" class="g-btn small" data-teach="${k}" data-to="${m.id}"${t.ok ? '' : ` disabled title="${esc(t.why)}"`}>${esc(m.name)}</button>`; }).join('')}<button type="button" class="g-btn small" data-teach-cancel>Cancel</button></span>` : `<button type="button" class="g-btn small pink" data-teach="${k}">Teach</button>`}</li>`).join('')}</ul>` : '';
    const boosts = Object.entries((b.pboost || {})).filter(([m, o]) => member(m) && Object.keys(o).length);
    const boostHtml = boosts.length ? `<p class="g-note small">Persona boosts from Shuffle Time: ${boosts.map(([m, o]) => `${esc(member(m).name)} ${Object.entries(o).map(([k, v]) => `${k.toUpperCase()} +${v}`).join(' ')}`).join(' · ')}</p>` : '';
    const sum = bonusSummary(mid);
    return `<div class="g-cards">
      <div class="g-pv-who">${list.map(x => `<button type="button" class="g-who-mini${x.id === mid ? ' on' : ''}" data-cmember="${x.id}" title="${esc(x.name)}"><i>${face(x.id, x.faces?.idle || 'serious')}</i><b>${esc(x.name)}<small>${Object.keys(C.eq[x.id] || {}).length}/6 cards</small></b></button>`).join('')}</div>
      <div class="g-cslots">${B.SLOTS.map(slotBtn).join('')}</div>
      <p class="g-card-sum">${sets.length ? sets.map(([set, n]) => `<span class="g-chip on" style="--c:${B.SETS[set].color}">${esc(B.SETS[set].name)} ${n >= 4 ? '4' : '2'}</span>`).join('') : '<span class="g-note small">No set bonus yet: two or four cards of one set.</span>'}${sum.length ? `<small>${esc(sum.join(' · '))}</small>` : ''}</p>
      <div class="g-cards-main">
        <div class="g-cbox-wrap"><div class="g-cbox-head"><b>Card box</b><small>${C.list.length}/${B.CARD.cap}${slot ? ` · ${esc(B.SLOTS.find(x => x.id === slot).name)} only` : ''}</small>${slot ? '<button type="button" class="g-btn small" data-cslot-all>All slots</button>' : ''}</div>
          <div class="g-cbox">${box.map(c => `<button type="button" class="g-cbox-card${sel.card === c.u ? ' on' : ''}${B.wearerOf(b, c.u) ? ' worn' : ''}" data-card="${c.u}" title="${esc(B.cardName(c))}">${cardFace(c, 'mini')}${B.wearerOf(b, c.u) ? `<em>${esc((member(B.wearerOf(b, c.u)) || {}).name || '')}</em>` : ''}</button>`).join('') || '<p class="g-note small">No cards yet.</p>'}</div></div>
        <aside class="g-card-side">${detail}</aside></div>
      <p class="g-mats">${mats}</p>${boostHtml}${skillCards}</div>`;
  }
  function wireCards(el) {
    const B = BLD(), b = bsave(), again = f => render(f);
    el.querySelectorAll('[data-cmember]').forEach(bt => bt.addEventListener('click', () => { sel.cmember = bt.dataset.cmember; sel.armedCard = null; G.sfx('femc-hover'); again(`[data-cmember="${sel.cmember}"]`); }));
    el.querySelectorAll('[data-cslot]').forEach(bt => bt.addEventListener('click', () => {
      const s2 = bt.dataset.cslot, eqd = (B.ensureCards(b).eq[sel.cmember] || {})[s2];
      sel.cslot = sel.cslot === s2 ? null : s2; if (eqd) sel.card = eqd; sel.armedCard = null; G.sfx('femc-hover'); again(`[data-cslot="${s2}"]`);
    }));
    el.querySelector('[data-cslot-all]')?.addEventListener('click', () => { sel.cslot = null; again('[data-cslot]'); });
    el.querySelectorAll('[data-card]').forEach(bt => bt.addEventListener('click', () => { const u = +bt.dataset.card, c = B.cardById(b, u); if (c && c.isNew) { c.isNew = false; G.saveQuiet(); } sel.card = u; sel.armedCard = null; G.sfx('femc-hover'); again(`[data-card="${u}"]`); }));
    el.querySelector('[data-cequip]')?.addEventListener('click', e => { B.equipCard(b, sel.cmember, +e.currentTarget.dataset.cequip); G.saveQuiet(); G.sfx('femc-rankup'); again('[data-cunequip]'); });
    el.querySelector('[data-cunequip]')?.addEventListener('click', e => { B.unequipCard(b, sel.cmember, e.currentTarget.dataset.cunequip); G.saveQuiet(); G.sfx('femc-click'); again('[data-cequip]'); });
    el.querySelector('[data-clevel]')?.addEventListener('click', e => { const r = B.levelCard(b, +e.currentTarget.dataset.clevel, { yenNow: yenNow(), payYen }); if (!r.ok) { G.toast('note', r.why); return; } G.sfx('femc-rankup'); G.saveQuiet(); again('[data-clevel]'); });
    el.querySelector('[data-crefine]')?.addEventListener('click', e => { const r = B.refineCard(b, +e.currentTarget.dataset.crefine, Math.random, { yenNow: yenNow(), payYen }); if (!r.ok) { G.toast('note', r.why); return; } G.toast('note', `Refined to R${r.ref}: ${B.statLine(r.gained[0], r.gained[1])}${r.gained[2] ? ' (new)' : ''}.`); G.sfx('femc-rankup'); G.saveQuiet(); again('[data-crefine]'); });
    el.querySelector('[data-clock]')?.addEventListener('click', e => { const c = B.cardById(b, +e.currentTarget.dataset.clock); c.lock = !c.lock; sel.armedCard = null; G.saveQuiet(); G.sfx('femc-click'); again('[data-clock]'); });
    el.querySelector('[data-cdis]')?.addEventListener('click', e => {
      const u = +e.currentTarget.dataset.cdis;
      if (sel.armedCard !== u) { sel.armedCard = u; G.sfx('femc-hover'); again('[data-cdis]'); return; }
      const r = B.dismantleCard(b, u); sel.armedCard = null;
      if (!r.ok) { G.toast('note', r.why); return; }
      sel.card = null; G.toast('note', `Dismantled: Tarot Dust ×${r.dust}${r.thread ? `, Velvet Thread ×${r.thread}` : ''}.`); G.sfx('femc-click'); G.saveQuiet(); again('[data-card], [data-cslot]');
    });
    el.querySelectorAll('[data-teach]').forEach(bt => bt.addEventListener('click', () => {
      const k = bt.dataset.teach, to = bt.dataset.to;
      if (!to) { sel.teach = k; G.sfx('femc-click'); again(`[data-teach="${k}"][data-to]`); return; }
      const r = B.teach(b, to, k); sel.teach = null;
      if (!r.ok) { G.toast('note', r.why); return; }
      G.toast('note', `${member(to).name} learned ${D().skills[k].name}.`); G.sfx('femc-rankup'); G.saveQuiet();
      if (kitOf(to).pending.length) { tab = 'skills'; sel.sk = to; sel.forget = to; sel.armed = null; }
      again();
    }));
    el.querySelector('[data-teach-cancel]')?.addEventListener('click', () => { sel.teach = null; again(); });
  }

  /* ── BONDS: every met link's perks ── */
  const PSTATE = { own: ['Earned', 'own'], party: ['Earned · in the party', 'own'], assist: ['Earned · an Assist until they join', 'own'], paused: ['Paused · the bond is reversed', 'paused'], rank: ['Not yet', 'rank'], stub: ['Coming later', 'stub'] };
  function perkCtx() { const b = bsave(); return { bonds: Object.fromEntries(Object.entries(S().links || {}).map(([k, p]) => [k, p.rank || 0])), rev: Object.entries(S().links || {}).filter(([, p]) => p.reversed).map(([k]) => k), joined: G.available() }; }
  // A perk's rank tag: MAX at the link's top rank (maxRank; 15 for the rank-15 links), R<n> below it.
  const perkRankLabel = p => (G.LINKS[p.link] && p.rank >= G.maxOf(G.LINKS[p.link]) ? 'MAX' : `R${p.rank}`);
  function perkList(linkId, ctx = perkCtx()) {
    const B = BLD();
    return `<ul class="g-perks">${B.perksOf(linkId).map(p => { const st = B.perkState(p, ctx), [word, cls] = PSTATE[st]; return `<li class="g-perk ${cls}${p.kat ? ' kat' : ''}"><span class="g-perk-r">${perkRankLabel(p)}</span><div><b>${esc(p.name)}<em class="t-${p.type}">${esc(B.TYPE_NAME[p.type])}</em>${p.kat ? '<em class="t-kat">★ Kat</em>' : ''}</b><small>${esc(p.desc)}</small>${st === 'stub' ? `<small class="why">${esc(p.stub)}</small>` : ''}</div><span class="g-perk-st">${esc(word)}</span></li>`; }).join('')}</ul>`;
  }
  /* Bond skills (bonds.js): Solar and a partner, one combo each, with the rank each version unlocks at. Met partners only. */
  const BSTATE = { own: ['Ready', 'own'], rank: ['Not yet', 'rank'], paused: ['Paused · the bond is reversed', 'paused'], gone: ['Unavailable', 'paused'] };
  function bondSkillsHtml() {
    const BD = window.FemcBonds;
    if (!BD) return '';
    const links = S().links || {};
    const ctx = { bonds: Object.fromEntries(Object.entries(links).map(([k, p]) => [k, p.rank || 0])), rev: Object.entries(links).filter(([, p]) => p.reversed).map(([k]) => k),
      love: Object.entries(links).filter(([, p]) => p.route === 'romance').map(([k]) => k), date: G.dayInfo ? G.dayInfo().md : null };
    const rows = BD.BONDS.filter(b => G.isMet(b.partner)).map(b => {
      const st = BD.status(b, ctx), [word, cls] = BSTATE[st.state], name = member(b.partner)?.name || b.partner;
      const vers = st.vers.map(v => `<li class="g-perk ${st.rank >= v.rank && st.state !== 'paused' && st.state !== 'gone' ? 'own' : 'rank'}"><span class="g-perk-r">R${v.rank}</span><div><b>${esc(v.name)}${v.love ? '<em class="t-kat">♥ Romance</em>' : ''}</b><small>${esc(v.desc)} Both pay ${v.sp} SP.</small></div><span class="g-perk-st">${st.cur && st.cur.name === v.name && st.state === 'own' ? 'In use' : st.rank >= v.rank ? 'Earned' : 'Not yet'}</span></li>`).join('');
      const spare = b.love && !st.love ? `<li class="g-perk rank"><span class="g-perk-r">R${b.love.rank}</span><div><b>♥ ? ? ?</b><small>A special version of this bond, if the two of you become more than friends.</small></div><span class="g-perk-st">Not yet</span></li>` : '';
      const spare15 = b.love15 && !st.love ? `<li class="g-perk rank"><span class="g-perk-r">R${b.love15.rank}</span><div><b>♥ ? ? ?</b><small>And one more, further on.</small></div><span class="g-perk-st">Not yet</span></li>` : '';
      return `<section class="g-bond g-bondsk" data-bondsk="${b.id}"><header><b>Solar & ${esc(name)}</b><small>${esc(word)}${b.until ? ' · only while he fights alongside you' : ''}</small></header><ul class="g-perks">${vers}${spare}${spare15}</ul></section>`;
    }).join('');
    return rows ? `<h3 class="g-bondsk-h">Bond skills</h3><p class="g-note">A combo for Solar and one partner, from the battle menu’s <b>Bond</b>. Both must be in the party and able to act; both pay the SP and both use their turn. Once per battle each.</p><div class="g-bondsks">${rows}</div><h3 class="g-bondsk-h">Bond perks</h3>` : '';
  }
  function bondsTab() {
    const B = BLD();
    if (!B) return '<p class="g-note">No bonds yet.</p>';
    const ctx = perkCtx(), met = Object.values(G.LINKS).filter(l => G.isMet(l.id) && B.perksOf(l.id).length);
    const f = sel.bondType || 'all';
    const all = met.flatMap(l => B.perksOf(l.id).map(p => [l, p, B.perkState(p, ctx)]));
    const earned = all.filter(([, , st]) => ['own', 'party', 'assist'].includes(st));
    const rows = met.map(l => {
      const ps = B.perksOf(l.id).filter(p => f === 'all' || (f === 'earned' ? ['own', 'party', 'assist'].includes(B.perkState(p, ctx)) : p.type === f));
      if (!ps.length) return '';
      const pr = G.progress(l.id);
      return `<section class="g-bond"><header><b>${esc(l.short)}</b><small>${esc(l.arcana)}${pr.reversed ? ' · Reversed' : ''} · ${G.isMaxed(l) ? 'MAX' : `rank ${pr.rank}`}</small></header>
        <ul class="g-perks">${ps.map(p => { const st = B.perkState(p, ctx), [word, cls] = PSTATE[st]; return `<li class="g-perk ${cls}${p.kat ? ' kat' : ''}"><span class="g-perk-r">${perkRankLabel(p)}</span><div><b>${esc(p.name)}<em class="t-${p.type}">${esc(B.TYPE_NAME[p.type])}</em>${p.kat ? '<em class="t-kat">★ Kat</em>' : ''}</b><small>${esc(p.desc)}</small>${st === 'stub' ? `<small class="why">${esc(p.stub)}</small>` : ''}</div><span class="g-perk-st">${esc(word)}</span></li>`; }).join('')}</ul></section>`;
    }).join('');
    return `${bondSkillsHtml()}<p class="g-note">Every bond pays off: Battle perks (a fighter in the party), Assists (friends cutting in from outside the party), Tartarus, Daily and a MAX skill or passive. <b>${earned.length}</b> earned of ${all.length} from the bonds you’ve made.</p>
      <div class="g-row g-bond-filter">${[['all', 'All'], ['earned', 'Earned'], ['battle', 'Battle'], ['assist', 'Assist'], ['tartarus', 'Tartarus'], ['daily', 'Daily'], ['max', 'MAX']].map(([k, n]) => `<button type="button" class="g-chip${f === k ? ' on' : ''}" data-btype="${k}">${n}</button>`).join('')}</div>
      <div class="g-bonds">${rows || '<p class="g-note">No bonds yet. Go out after school and meet people.</p>'}</div>`;
  }
  function wireBonds(el) { el.querySelectorAll('[data-btype]').forEach(bt => bt.addEventListener('click', () => { sel.bondType = bt.dataset.btype; G.sfx('femc-hover'); render(`[data-btype="${sel.bondType}"]`); })); }
  // On a floor, items that work outside a fight can be used from here (the frame applies them: opts.useItem).
  const usable = k => { const it = D().items?.[k]; return !!(opts.useItem && it && it.use !== 'battle' && it.type !== 'key'); };
  const needsTarget = k => ['ally', 'dead'].includes(D().items?.[k]?.target);
  function useRow(k, n) {
    const it = D().items?.[k] || {}, hp = opts.hp || {};
    const who = sel.use === k && needsTarget(k) ? `<div class="g-use-who">${Object.keys(hp).map(id => `<button type="button" class="g-btn small" data-use="${k}" data-tgt="${id}">${esc(member(id)?.name || id)} <small>${hp[id].hp}/${hp[id].maxHp}</small></button>`).join('')}<button type="button" class="g-btn small" data-use-cancel>Cancel</button></div>` : '';
    return `<li class="g-use"><b>${esc(it.name || k)}<small>${esc(it.desc || '')}</small></b><span>×${n}</span>${usable(k) && sel.use !== k ? `<button type="button" class="g-btn small pink" data-use="${k}"${needsTarget(k) ? ' data-pick-target' : ''}>Use</button>` : ''}${who}</li>`;
  }
  function wireItems(el) {
    el.querySelectorAll('[data-use]').forEach(bt => bt.addEventListener('click', () => {
      const k = bt.dataset.use;
      if (bt.hasAttribute('data-pick-target')) { sel.use = k; G.sfx('femc-click'); render(`[data-tgt]`); return; }
      const r = opts.useItem(k, bt.dataset.tgt || null);
      sel.use = null;
      if (!r) return;
      if (r.leave) { o.close(); return; }
      opts.items = r.items; opts.hp = r.hp;
      G.toast('note', `Used ${D().items[k].name}${bt.dataset.tgt ? ` on ${member(bt.dataset.tgt)?.name || ''}` : ''}.`);
      render();
    }));
    el.querySelector('[data-use-cancel]')?.addEventListener('click', () => { sel.use = null; render(); });
  }
  function itemsTab() {
    // In the Dark Hour Solar carries the battle's own counts (items used tonight come off as she goes).
    const s = S(), inv = Object.entries(opts.items || s.inventory).filter(([, n]) => n > 0), b = bsave();
    if (opts.useItem) return `<div class="g-cols"><div class="g-col"><h3>Items</h3>${inv.length ? `<ul class="g-list">${inv.map(([k, n]) => useRow(k, n)).join('')}</ul>` : '<p class="g-note">Nothing in the bag tonight.</p>'}</div>
      <div class="g-col"><h3>The team</h3><ul class="g-list">${Object.entries(opts.hp || {}).map(([id, h]) => `<li><b>${esc(member(id)?.name || id)}</b><span>${h.hp}/${h.maxHp} HP · ${h.sp}/${h.maxSp} SP</span></li>`).join('')}</ul></div></div>`;
    const gear = [...new Set([...s.gear, ...Object.keys(b.gear.owned).filter(k => b.gear.owned[k] > 0)])].filter(k => D().gear[k]);
    const mats = Object.entries(b.mats || {}).filter(([, n]) => n > 0);
    return `<div class="g-cols">
      <div class="g-col"><h3>Items</h3>${inv.length ? `<ul class="g-list">${inv.map(([k, n]) => `<li><b>${esc(D().items?.[k]?.name || k)}<small>${esc(D().items?.[k]?.desc || '')}</small></b><span>×${n}</span></li>`).join('')}</ul>` : '<p class="g-note">Nothing yet. Aohige Pharmacy is on the Strip.</p>'}
        ${mats.length ? `<h3>Materials</h3><ul class="g-list">${mats.map(([k, n]) => `<li><b>${esc(D().materials?.[k]?.name || k)}</b><span>×${n}</span></li>`).join('')}</ul>` : ''}</div>
      <div class="g-col"><h3>Gear</h3>${gear.length ? `<ul class="g-list">${gear.map(k => `<li><b>${esc(D().gear[k].name)}<small>${esc(BS().gearLine(k))}</small></b><span>${BS().equippedCount(b, k) ? 'E' : ''}</span></li>`).join('')}</ul>` : '<p class="g-note">No gear yet. The Police Box and Be Blue V sell it.</p>'}
        <h3>Books</h3>${s.books.owned.length ? `<ul class="g-list">${s.books.owned.map(k => { const bk = G.bookById(k); return `<li><b>${esc(bk?.name || k)}</b><span>${s.books.done.includes(k) ? 'Read' : `${s.books.progress[k] || 0}/${bk?.nights}`}</span></li>`; }).join('')}</ul>` : '<p class="g-note">Bookworms on the Strip sells used books.</p>'}
        ${Object.values(s.jobs).some(j => j.hired) ? `<h3>Jobs</h3><ul class="g-list">${G.D.jobs.filter(j => G.jobState(j.id).hired).map(j => `<li><b>${esc(j.name)}</b><span>${G.jobState(j.id).shifts} shifts</span></li>`).join('')}</ul>` : ''}</div></div>`;
  }
  /* ── Social stats, P5R-style: a radar of every stat (the five make a pentagon) and a
     card per stat with its rank name, rank number in suns, and the meter to the next rank. Everything is read from
     G.D.stats.stats (name, color, ranks, at), so a stat added there appears here without changes. ── */
  function statsScreen() {
    const list = Object.entries(G.D.stats.stats), n = list.length;
    const sun = cls => (UI().SUN ? UI().SUN(cls) : '☀');
    const pt = (k, r) => { const a = -Math.PI / 2 + (k * 2 * Math.PI) / n; return [100 + Math.cos(a) * r, 100 + Math.sin(a) * r]; };
    const poly = r => list.map((_, k) => pt(k, r).map(v => v.toFixed(1)).join(',')).join(' ');
    const level = ([k, d]) => { const max = d.ranks.length, r = G.statRank(k); return max > 1 ? Math.min(1, (r - 1 + (r >= max ? 0 : G.statProgress(k))) / (max - 1)) : 1; };
    const maxR = Math.max(...list.map(([, d]) => d.ranks.length));
    const radar = n >= 3 ? `<svg class="g-ss-radar" viewBox="-52 -2 304 206" role="img" aria-label="${esc(list.map(([k, d]) => `${d.name}: ${G.statRankName(k)}`).join(', '))}">
        ${Array.from({ length: maxR - 1 }, (_, j) => `<polygon class="grid" points="${poly(70 * (j + 1) / (maxR - 1))}"/>`).join('')}
        ${list.map((_, k) => { const [x, y] = pt(k, 70); return `<line x1="100" y1="100" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join('')}
        <polygon class="val" points="${list.map((st, k) => pt(k, 8 + 62 * level(st)).map(v => v.toFixed(1)).join(',')).join(' ')}"/>
        ${list.map((st, k) => { const [x, y] = pt(k, 8 + 62 * level(st)); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" style="fill:${st[1].color}"/>`; }).join('')}
        ${list.map(([, d], k) => { const [x, y] = pt(k, 82); return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${Math.abs(x - 100) < 8 ? 'middle' : x < 100 ? 'end' : 'start'}" style="fill:${d.color}">${esc(d.name)}</text>`; }).join('')}
        <g transform="translate(100 100) scale(.34)" class="g-ss-core">${(UI().SUN ? UI().SUN('') : '').replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g></svg>` : '';
    const card = ([k, d]) => {
      const r = G.statRank(k), max = d.ranks.length, top = r >= max, pr = top ? 1 : G.statProgress(k);
      return `<div class="g-ss-stat" style="--c:${d.color}" data-stat="${k}"><p class="g-ss-name">${esc(d.name)}</p><p class="g-ss-rank">${esc(G.statRankName(k))}</p>
        <p class="g-ss-suns" aria-label="Rank ${r} of ${max}">${Array.from({ length: max }, (_, j) => sun(j < r ? 'on' : '')).join('')}<small>${top ? 'MAX' : `Rank ${r}`}</small></p>
        <div class="g-ss-meter" role="progressbar" aria-label="${esc(d.name)} to the next rank" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(pr * 100)}"><i style="width:${Math.round(pr * 100)}%"></i></div>
        <p class="g-ss-next">${top ? 'Mastered.' : `Next: ${esc(d.ranks[r])}`}</p></div>`;
    };
    return `<div class="g-ss"><div class="g-ss-chart">${radar}<p class="g-ss-title">Social stats</p></div><div class="g-st-stats g-ss-list">${list.map(card).join('')}</div></div>`;
  }
  function statusTab() {
    const s = S(), c = G.D.stats.conditions[s.condition], i = G.dayInfo(), b = bsave();
    return `<div class="g-st-solar"><img src="${G.base}assets/femc/portraits/solar/neutral.webp" alt=""><div>
        <p class="g-st-name">Solar<small>3rd year · Gekkoukan High${b.lvl ? ` · Lv ${b.lvl}` : ''}</small></p>
        <ul class="g-st-facts"><li><span>Date</span>${esc(i.md)} ${esc(i.day)} · ${esc(G.slotName(s.slot, i))}</li><li><span>Condition</span><b style="color:${c.color}">${esc(c.name)}</b></li><li><span>Yen</span>${yen(s.yen)}</li><li><span>Tartarus</span>${s.tartarus.maxFloor ? `${s.tartarus.maxFloor}F · ${s.tartarus.nights} night${s.tartarus.nights === 1 ? '' : 's'}` : 'Not yet'}</li></ul></div></div>
      ${statsScreen()}
      ${Object.keys(s.exams).filter(k => s.exams[k].posted).length ? `<div class="g-st-party"><h3>Exams</h3><p>${Object.entries(s.exams).filter(([, x]) => x.posted).map(([k, x]) => `<span class="g-chip">${esc(G.D.q.exams[k]?.name || k)} · #${x.place}</span>`).join('')}</p></div>` : ''}`;
  }
  function linksTab() {
    const met = Object.values(G.LINKS).filter(l => G.isMet(l.id));
    const B = BLD(), ctx = B ? perkCtx() : null, cur = sel.link && met.find(l => l.id === sel.link);
    const detail = cur && B ? `<div class="g-link-perks"><p class="g-kicker">${esc(cur.short)} · ${esc(cur.arcana)} · bond perks</p>${perkList(cur.id, ctx)}<button type="button" class="g-btn small" data-link-close>Close</button></div>` : '';
    return met.length ? `${detail}<div class="g-st-links">${met.map(l => { const p = G.progress(l.id), art = G.tarot(l), n = B ? B.perksOf(l.id).filter(x => ['own', 'party', 'assist'].includes(B.perkState(x, ctx))).length : 0; return `<button type="button" class="g-st-link${p.reversed ? ' rev' : ''}${cur === l ? ' on' : ''}" data-link="${l.id}"><div class="g-tarot"${art ? ` style="background-image:url('${art}')"` : ''}><span>${esc(l.numeral || '✦')}</span></div><div><b>${esc(l.short)}</b><small>${esc(l.arcana)}${p.reversed ? ' · Reversed' : ''}</small><p class="g-pips${G.maxOf(l) > 10 ? ' long' : ''}" aria-label="Rank ${p.rank} of ${G.maxOf(l)}">${Array.from({ length: G.maxOf(l) }, (_, k) => `<i class="${k < p.rank ? 'on' : ''}${k >= 10 ? ' ext' : ''}"></i>`).join('')}</p><small class="g-hint">${esc(G.isMaxed(l) ? 'MAX' : l.closes && S().day > G.dayOf(l.closes) && !G.stretchOn(l) ? 'Gone' : G.homeOf(l).hint || '')}</small>${B && B.perksOf(l.id).length ? `<small class="g-perkn">${n} perk${n === 1 ? '' : 's'} earned</small>` : ''}</div></button>`; }).join('')}</div>` : '<p class="g-note">No bonds yet. Go out after school and meet people.</p>';
  }
  function wireLinks(el) {
    el.querySelectorAll('[data-link]').forEach(bt => bt.addEventListener('click', () => { sel.link = sel.link === bt.dataset.link ? null : bt.dataset.link; G.sfx('femc-hover'); render(sel.link ? '[data-link-close]' : `[data-link="${bt.dataset.link}"]`); }));
    el.querySelector('[data-link-close]')?.addEventListener('click', () => { const id = sel.link; sel.link = null; render(`[data-link="${id}"]`); });
  }
  function journalTab() {
    const fr = S().fragments.map(G.fragmentInfo);
    return `<p class="g-note">Things that feel too familiar. ${fr.length ? `${fr.length} so far.` : 'Nothing yet.'}</p><div class="g-frags">${fr.map(f => `<figure class="g-frag"><img src="${G.base}assets/femc/memories/${f.id}.webp" alt=""><figcaption><b>${esc(f.title)}</b>${esc(f.text || '')}</figcaption></figure>`).join('')}</div>`;
  }
  function calendarTab() {
    const s = S(), today = G.dayInfo(), y = today.date.getFullYear(), mo = today.date.getMonth();
    const first = new Date(y, mo, 1), days = new Date(y, mo + 1, 0).getDate();
    const cells = [];
    for (let k = 0; k < first.getDay(); k++) cells.push('<i></i>');
    for (let d = 1; d <= days; d++) {
      const dd = Math.round((new Date(y, mo, d) - G.dateOf(0)) / 86400000);
      if (dd < 0 || dd > G.END()) { cells.push(`<i class="off"><b>${d}</b></i>`); continue; }
      const info = G.dayInfo(dd), marks = [];
      if (info.moon.full) marks.push('<em class="moon" title="Full moon">●</em>');
      if (info.exam) marks.push('<em class="exam">Exam</em>');
      if (info.holiday) marks.push(`<em class="hol">${esc(info.holiday)}</em>`);
      else if (info.label && !info.exam) marks.push(`<em>${esc(info.label)}</em>`);
      cells.push(`<i class="${dd === s.day ? 'today' : dd < s.day ? 'past' : ''}${info.type === 'off' ? ' off' : ''}"><b>${d}</b>${marks.join('')}</i>`);
    }
    return `<div class="g-cal"><p class="g-kicker">${esc(first.toLocaleString('en', { month: 'long' }))} ${y}</p>
      <div class="g-cal-grid"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>${cells.join('')}</div>
      <p class="g-note small">● full moon · days off are dimmed. ${today.moon.full ? 'Tonight is a full moon.' : today.moon.days != null ? `Full moon in ${today.moon.days} day${today.moon.days === 1 ? '' : 's'}.` : ''}</p></div>`;
  }

  /* ── The panel ── */
  function render(focus) {
    if (!o) return;
    const body = o.el.querySelector('.g-fm-body');
    let html = '';
    if (tab === 'party') html = partyTab();
    else if (tab === 'personas') html = personasTab();
    else if (tab === 'skills') html = skillsTab();
    else if (tab === 'equip') html = equipTab();
    else if (tab === 'cards') html = cardsTab();
    else if (tab === 'bonds') html = bondsTab();
    else if (tab === 'items') html = itemsTab();
    else if (tab === 'collection') html = window.FemcGacha ? window.FemcGacha.collectionHtml() : '<p class="g-note">Nothing collected yet.</p>';
    else if (tab === 'status') html = statusTab();
    else if (tab === 'links') html = linksTab();
    else if (tab === 'journal') html = journalTab();
    else if (tab === 'calendar') html = calendarTab();
    const top = body.scrollTop;
    body.innerHTML = html;
    body.scrollTop = top;
    if (tab === 'party') wireParty(body); else if (tab === 'personas') wirePersonas(body); else if (tab === 'equip') wireEquip(body); else if (tab === 'items') wireItems(body); else if (tab === 'skills') wireSkills(body);
    else if (tab === 'cards') wireCards(body); else if (tab === 'bonds') wireBonds(body); else if (tab === 'links') wireLinks(body);
    else if (tab === 'collection') window.FemcGacha?.wireCollection(body, render);
    o.el.querySelectorAll('[data-tab]').forEach(b => { b.classList.toggle('on', b.dataset.tab === tab); b.setAttribute('aria-selected', b.dataset.tab === tab); });
    if (focus) { const f = typeof focus === 'string' && focus.startsWith('[') ? body.querySelector(focus) : body.querySelector(`[data-pm="${focus}"]`); f?.focus({ preventScroll: true }); f?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' }); }
  }
  function open(startTab, options = {}) {
    if (o) return false;
    opts = options || {};
    if (startTab && TABS.some(([k]) => k === startTab)) tab = startTab;
    if (tab === 'compendium') tab = 'party';
    const s = S(), i = G.dayInfo(), when = opts.inBattle ? 'The Dark Hour' : G.slotName(s.slot, i);
    o = UI().overlay(`<div class="g-fm${opts.inBattle ? ' dark' : ''}"><div class="g-fm-head"><div><p class="g-kicker">${esc(i.md)} ${esc(i.day)} · ${esc(when)}</p><h2>Menu</h2></div><span class="g-yen">${yen(opts.yen ?? s.yen)}</span><button type="button" class="g-btn small" data-close>${opts.inBattle ? 'Back' : 'Close'}</button></div>
      <nav class="g-tabs g-fm-tabs" role="tablist">${TABS.map(([k, n]) => (k === 'compendium' ? `<a role="tab" href="${G.base}compendium.html" target="_blank" rel="noopener">${n} ↗</a>` : `<button type="button" role="tab" data-tab="${k}">${n}</button>`)).join('')}</nav>
      <div class="g-fm-body" tabindex="-1"></div>
      <p class="g-hint g-fm-hint">[ ] or ←→ on the tabs · Esc ${opts.inBattle ? 'back' : 'close'}</p></div>`, `g-fm-ov${opts.inBattle ? ' g-over-battle' : ''}`, () => { o = null; sel.slot = null; G.save(); const done = opts.onClose; opts = {}; done?.(); });
    sel.use = null; sel.velvet = null; sel.armed = null; sel.armedCard = null; sel.teach = null;
    try { syncLife(); } catch (e) {}
    // Someone waiting on a "forget which?" choice: the Skills tab opens on it.
    sel.forget = skMembers().find(m => kitOf(m.id).pending.length)?.id || null;
    o.el.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { tab = b.dataset.tab; sel.slot = null; sel.use = null; sel.velvet = null; G.sfx('femc-click'); render(); }));
    o.el.addEventListener('keydown', e => {
      const keys = TABS.filter(([k]) => k !== 'compendium').map(([k]) => k);
      const onTab = e.target.closest?.('[data-tab]');
      // Down from the tabs (keyboard or a pad's D-pad) steps into the Skills tab's tree, or its open prompt.
      if (onTab && e.key === 'ArrowDown' && tab === 'skills') {
        const f = o.el.querySelector('.g-sk-forget [data-forget], .g-sk-velvet [data-velvet-no], .g-hn.sel');
        if (f) { e.preventDefault(); e.stopPropagation(); f.focus(); return; }
      }
      if (e.key === '[' || e.key === ']' || (onTab && (e.key === 'ArrowLeft' || e.key === 'ArrowRight'))) {
        e.preventDefault(); e.stopPropagation();
        tab = keys[(keys.indexOf(tab) + (e.key === '[' || e.key === 'ArrowLeft' ? -1 : 1) + keys.length) % keys.length];
        sel.slot = null; G.sfx('femc-hover'); render();
        o.el.querySelector(`[data-tab="${tab}"]`)?.focus();
      }
    });
    render();
    setTimeout(() => o?.el.querySelector(`[data-tab="${tab}"]`)?.focus({ preventScroll: true }), 40);
    G.sfx('femc-click');
    return true;
  }
  return { open, close: () => o?.close(), isOpen: () => !!o, TABS };
})();
