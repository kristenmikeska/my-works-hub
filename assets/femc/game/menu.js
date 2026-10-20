/* FEMC revamp: the field menu (P3's dorm / field menu), opened from the HUD's Menu button or M.
   One menu for the whole game. Tabs: Party (who goes into Tartarus, levels, HP/SP, Personas), Personas (the current Persona,
   its skills and affinities; Haenim's forms), Skills (empty for now: see SKILLS below), Equipment (weapon, armor, accessory
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
   hp ({ id: { hp, maxHp, sp, maxSp } } mid-climb), openTree (Haenim's tree, the battle's own screen, until the skill
   system replaces it).

   ── SKILLS: the seam for the skill-tree system (next on the roadmap) ──
   The Skills tab is deliberately empty. The system that will live here owns:
     - S.battleSave.nodes / pts (Haenim's tree: data.js `tree`, engine.js treeFx / mastered) and whatever replaces them;
     - each member's learned list (engine.js skillsFor) once members get their own small trees (opened by link rank:
       G.progress(id).rank) and skills that upgrade in place;
     - memory fragments as currency (S.fragments; the battle side gives data.js progression.memoryPoints per fragment);
     - respec. The battle game's own tree screen (battle.js treeScreen) still works in a fight's results and in practice mode.
   To build it: replace skillsTab() below, keep the tab id 'skills', and read/write S.battleSave through G.ensureBattleSave()
   then G.saveQuiet() (or G.save() to repaint the HUD). engine.js is where the rules go; data.js is where the nodes go. */
window.FemcMenu = (() => {
  const G = window.FemcGame, UI = () => window.FemcGameUI, SC = window.FemcScene;
  const D = () => window.FEMC_BATTLE_DATA, E = () => window.FemcBattleEngine, BS = () => window.FemcBattleSave;
  const S = () => G.S;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const yen = n => `¥${Math.round(n || 0).toLocaleString('en-US')}`;
  const AFF = { normal: '–', weak: 'Wk', resist: 'Rs', null: 'Nu', drain: 'Dr', repel: 'Rp' };
  const TABS = [['party', 'Party'], ['personas', 'Personas'], ['skills', 'Skills'], ['equip', 'Equipment'], ['items', 'Items'], ['status', 'Status'], ['links', 'Links'], ['journal', 'Journal'], ['calendar', 'Calendar'], ['compendium', 'Compendium']];
  let o = null, tab = 'party', sel = {}, opts = {};

  /* ── Battle-side helpers (no fight running: the engine is asked for numbers only) ── */
  const bsave = () => G.ensureBattleSave();
  const member = id => D().party.find(m => m.id === id);
  // Members the calendar allows today (plus opts.extra), in the battle game's order, Solar first. Unknown ids are skipped.
  const roster = () => { const ids = new Set(G.available().concat(opts.extra || [])); return D().party.filter(m => ids.has(m.id)); };
  const required = id => (opts.required || []).includes(id);
  const inParty = id => id === 'solar' || (bsave().party || []).includes(id);
  const lvOf = id => E().lvlOf(bsave(), id);
  const unit = id => { try { return E().buildUnit(id, bsave(), {}); } catch (e) { return null; } };
  const personaOf = id => D().personas[E().personaId(id, bsave())];
  const elIcon = el => (window.FemcBattleArt ? window.FemcBattleArt.icon(el) : '');
  const skillChips = ids => `<ul class="g-chips">${ids.map(id => { const s = D().skills[id]; return s ? `<li title="${esc(s.desc || '')}">${elIcon(s.el)}<span>${esc(s.name)}</span></li>` : ''; }).join('')}</ul>`;
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
    const head = opts.solo ? 'Solar fights this one alone.'
      : `Pick up to three to fight beside Solar. The bench still earns ${Math.round(D().progression.benchShare * 100)}% of the EXP.${(opts.required || []).length ? ` ${opts.required.map(id => esc(member(id)?.name || id)).join(' and ')} must take part.` : ''}${G.navigator() ? ` ${esc(G.name(G.navigator()))} navigates.` : ''}`;
    return `<p class="g-note">${head} Tactics: Direct lets you choose; the others act on their own.</p>
      <div class="g-pm-grid">${list2.map(card).join('')}</div>`;
  }
  function wireParty(el) {
    el.querySelectorAll('[data-pm]').forEach(bt => bt.addEventListener('click', () => {
      const id = bt.dataset.pm; if (id === 'solar' || opts.solo) return;
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
    const m = member(id), p = personaOf(id), u = unit(id), skills = E().skillsFor(id, b);
    const forms = ['haenim'].concat(E().formsList());
    const formsHtml = id === 'solar' ? `<h3>Forms</h3><div class="g-forms">${forms.map(f => { const fp = D().personas[f], ok = E().formUnlocked(b, f), on = (b.form || 'haenim') === f; return `<button type="button" class="g-form${ok ? '' : ' lock'}${on ? ' on' : ''}" data-form="${f}"${ok ? '' : ' disabled'} style="--c:${fp.color || '#ff4f9e'}"><img src="${fp.art}" alt=""><b>${esc(fp.name)}</b><small>${ok ? esc(fp.theme || 'Base form') : 'Not yet'}</small>${on ? '<i>In use</i>' : ''}</button>`; }).join('')}</div>` : '';
    return `<div class="g-pv">
      <div class="g-pv-who">${list.map(x => `<button type="button" class="g-who-mini${x.id === id ? ' on' : ''}" data-pv="${x.id}" title="${esc(x.name)}"><i>${face(x.id, x.faces?.idle || 'serious')}</i><b>${esc(x.name)}</b></button>`).join('')}</div>
      <div class="g-pv-main"><div class="g-pv-art"><img src="${p.art}" alt="${esc(p.name)}"></div>
        <div class="g-pv-card"><p class="g-kicker">${esc(p.arcana || '')} · ${esc(m.name)}${inParty(id) ? ' · in the party' : ''}</p><h2>${esc(p.name)}${p.ko ? ` <span class="ko">${esc(p.ko)}</span>` : ''}</h2>
          ${u ? `<p class="g-pv-stats">${[['HP', u.maxHp], ['SP', u.maxSp], ['St', u.st], ['Ma', u.ma], ['En', u.en], ['Ag', u.ag], ['Lu', u.lu]].map(([k, v]) => `<span><small>${k}</small><b>${v}</b></span>`).join('')}</p>` : ''}
          ${affChips(u ? u.aff : p.aff || {})}
          <h3>Skills</h3>${skillChips(skills)}
          ${p.blurb ? `<p class="g-note">${esc(p.blurb)}</p>` : ''}${formsHtml}</div></div></div>`;
  }
  function wirePersonas(el) {
    el.querySelectorAll('[data-pv]').forEach(bt => bt.addEventListener('click', () => { sel.persona = bt.dataset.pv; G.sfx('femc-hover'); render(); }));
    el.querySelectorAll('[data-form]').forEach(bt => bt.addEventListener('click', () => { const b = bsave(); if (!E().formUnlocked(b, bt.dataset.form)) return; b.form = bt.dataset.form; G.saveQuiet(); G.sfx('femc-rankup'); render(); }));
  }
  function skillsTab() {
    const b = bsave();
    return `<div class="g-skills-empty"><p class="g-kicker">Coming soon</p><h2>Skills</h2>
      <p>The skill tree lives here next: skills that grow, Haenim's deeper tree, a small tree for each friend, and memory fragments to spend.</p>
      <p class="g-note">For now: Solar has <b>${b.pts}</b> skill point${b.pts === 1 ? '' : 's'} and ${b.nodes.length} node${b.nodes.length === 1 ? '' : 's'} on Haenim's tree. ${opts.openTree ? 'Spend them on Haenim’s tree here in the Dark Hour.' : 'Spend them on Haenim’s tree in Tartarus, or after a fight.'}</p>
      ${opts.openTree ? '<div class="g-row"><button type="button" class="g-btn pink" data-tree>Haenim’s tree ▸</button></div>' : ''}</div>`;
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
        <div class="g-eq-head"><h2>${esc(m.name)}<small>${esc(personaOf(id)?.name || '')}</small></h2>${u ? `<p class="g-pv-stats">${[['HP', u.maxHp], ['SP', u.maxSp], ['ATK', u.atk], ['DEF', u.def], ['St', u.st], ['Ma', u.ma], ['En', u.en], ['Ag', u.ag], ['Lu', u.lu]].map(([k, v]) => `<span><small>${k}</small><b>${v}</b></span>`).join('')}</p>` : ''}</div>
        <div class="g-eq-slots">${SL.map(([k, label]) => { const g = D().gear[eq[k]]; return `<button type="button" class="g-eq-slot${open === k ? ' open' : ''}" data-slot="${k}"><small>${label}</small><i>${g ? icon(eq[k]) : ''}</i><b>${g ? esc(g.name) : '—'}<span>${g ? esc(BS().gearLine(eq[k])) : 'Nothing equipped'}</span></b></button>`; }).join('')}</div>
        ${open ? `<ul class="g-eq-list">${cands.map(x => { const g = x && D().gear[x]; return `<li><button type="button" class="g-eq-item${x === eq[open] ? ' cur' : ''}" data-pick="${x || ''}"><i>${g ? icon(x) : ''}</i><b>${g ? esc(g.name) : 'Remove'}<span>${g ? esc(BS().gearLine(x)) : 'Take it off'}</span></b><em>${x === eq[open] ? 'E' : g && g.tier ? `×${BS().spare(b, x)}` : ''}</em></button></li>`; }).join('') || '<li class="g-note">Nothing that fits. Shops are on the Strip and at the Mall.</li>'}</ul>` : '<p class="g-note small">Pick a slot to change it. Gear bought in town goes here.</p>'}
      </div></div>`;
  }
  function wireEquip(el) {
    el.querySelectorAll('[data-eq]').forEach(bt => bt.addEventListener('click', () => { sel.equip = bt.dataset.eq; sel.slot = null; G.sfx('femc-hover'); render(); }));
    el.querySelectorAll('[data-slot]').forEach(bt => bt.addEventListener('click', () => { sel.slot = sel.slot === bt.dataset.slot ? null : bt.dataset.slot; G.sfx('femc-click'); render(`[data-slot="${bt.dataset.slot}"]`); }));
    el.querySelectorAll('[data-pick]').forEach(bt => bt.addEventListener('click', () => {
      const b = bsave(), id = sel.equip || 'solar';
      BS().equip(b, id, sel.slot, bt.dataset.pick || null);
      sel.slot = null; G.saveQuiet(); G.sfx('femc-rankup'); render();
    }));
  }
  function itemsTab() {
    // In the Dark Hour Solar carries the battle's own counts (items used tonight come off as she goes).
    const s = S(), inv = Object.entries(opts.items || s.inventory).filter(([, n]) => n > 0), b = bsave();
    const gear = [...new Set([...s.gear, ...Object.keys(b.gear.owned).filter(k => b.gear.owned[k] > 0)])].filter(k => D().gear[k]);
    const mats = Object.entries(b.mats || {}).filter(([, n]) => n > 0);
    return `<div class="g-cols">
      <div class="g-col"><h3>Items</h3>${inv.length ? `<ul class="g-list">${inv.map(([k, n]) => `<li><b>${esc(D().items?.[k]?.name || k)}<small>${esc(D().items?.[k]?.desc || '')}</small></b><span>×${n}</span></li>`).join('')}</ul>` : '<p class="g-note">Nothing yet. Aohige Pharmacy is on the Strip.</p>'}
        ${mats.length ? `<h3>Materials</h3><ul class="g-list">${mats.map(([k, n]) => `<li><b>${esc(D().materials?.[k]?.name || k)}</b><span>×${n}</span></li>`).join('')}</ul>` : ''}</div>
      <div class="g-col"><h3>Gear</h3>${gear.length ? `<ul class="g-list">${gear.map(k => `<li><b>${esc(D().gear[k].name)}<small>${esc(BS().gearLine(k))}</small></b><span>${BS().equippedCount(b, k) ? 'E' : ''}</span></li>`).join('')}</ul>` : '<p class="g-note">No gear yet. The Police Box and Be Blue V sell it.</p>'}
        <h3>Books</h3>${s.books.owned.length ? `<ul class="g-list">${s.books.owned.map(k => { const bk = G.bookById(k); return `<li><b>${esc(bk?.name || k)}</b><span>${s.books.done.includes(k) ? 'Read' : `${s.books.progress[k] || 0}/${bk?.nights}`}</span></li>`; }).join('')}</ul>` : '<p class="g-note">Bookworms on the Strip sells used books.</p>'}
        ${Object.values(s.jobs).some(j => j.hired) ? `<h3>Jobs</h3><ul class="g-list">${G.D.jobs.filter(j => G.jobState(j.id).hired).map(j => `<li><b>${esc(j.name)}</b><span>${G.jobState(j.id).shifts} shifts</span></li>`).join('')}</ul>` : ''}</div></div>`;
  }
  function statusTab() {
    const s = S(), c = G.D.stats.conditions[s.condition], i = G.dayInfo(), b = bsave();
    return `<div class="g-st-solar"><img src="${G.base}assets/femc/portraits/solar/neutral.webp" alt=""><div>
        <p class="g-st-name">Solar<small>3rd year · Gekkoukan High${b.lvl ? ` · Lv ${b.lvl}` : ''}</small></p>
        <ul class="g-st-facts"><li><span>Date</span>${esc(i.md)} ${esc(i.day)} · ${esc(G.slotName(s.slot, i))}</li><li><span>Condition</span><b style="color:${c.color}">${esc(c.name)}</b></li><li><span>Yen</span>${yen(s.yen)}</li><li><span>Tartarus</span>${s.tartarus.maxFloor ? `${s.tartarus.maxFloor}F · ${s.tartarus.nights} night${s.tartarus.nights === 1 ? '' : 's'}` : 'Not yet'}</li></ul></div></div>
      <div class="g-st-stats">${Object.entries(G.D.stats.stats).map(([k, d]) => `<div class="g-st-stat" style="--c:${d.color}"><p><b>${esc(d.name)}</b><span>${esc(G.statRankName(k))}</span><small>Lv ${G.statRank(k)}</small></p><div class="g-st-bar"><i style="width:${Math.round(G.statProgress(k) * 100)}%"></i></div></div>`).join('')}</div>
      ${Object.keys(s.exams).filter(k => s.exams[k].posted).length ? `<div class="g-st-party"><h3>Exams</h3><p>${Object.entries(s.exams).filter(([, x]) => x.posted).map(([k, x]) => `<span class="g-chip">${esc(G.D.q.exams[k]?.name || k)} · #${x.place}</span>`).join('')}</p></div>` : ''}`;
  }
  function linksTab() {
    const met = Object.values(G.LINKS).filter(l => G.isMet(l.id));
    return met.length ? `<div class="g-st-links">${met.map(l => { const p = G.progress(l.id), art = G.tarot(l); return `<div class="g-st-link${p.reversed ? ' rev' : ''}"><div class="g-tarot"${art ? ` style="background-image:url('${art}')"` : ''}><span>${esc(l.numeral || '✦')}</span></div><div><b>${esc(l.short)}</b><small>${esc(l.arcana)}${p.reversed ? ' · Reversed' : ''}</small><p class="g-pips">${Array.from({ length: 10 }, (_, k) => `<i class="${k < p.rank ? 'on' : ''}"></i>`).join('')}</p><small class="g-hint">${esc(p.rank >= 10 ? 'MAX' : l.closes && S().day > G.dayOf(l.closes) ? 'Gone' : G.homeOf(l).hint || '')}</small></div></div>`; }).join('')}</div>` : '<p class="g-note">No bonds yet. Go out after school and meet people.</p>';
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
    else if (tab === 'items') html = itemsTab();
    else if (tab === 'status') html = statusTab();
    else if (tab === 'links') html = linksTab();
    else if (tab === 'journal') html = journalTab();
    else if (tab === 'calendar') html = calendarTab();
    const top = body.scrollTop;
    body.innerHTML = html;
    body.scrollTop = top;
    if (tab === 'party') wireParty(body); else if (tab === 'personas') wirePersonas(body); else if (tab === 'equip') wireEquip(body);
    // The battle frame opens its tree once the menu has closed (openTree only asks for it).
    body.querySelector('[data-tree]')?.addEventListener('click', () => { opts.openTree?.(); o.close(); });
    o.el.querySelectorAll('[data-tab]').forEach(b => { b.classList.toggle('on', b.dataset.tab === tab); b.setAttribute('aria-selected', b.dataset.tab === tab); });
    if (focus) { const f = typeof focus === 'string' && focus.startsWith('[') ? body.querySelector(focus) : body.querySelector(`[data-pm="${focus}"]`); f?.focus({ preventScroll: true }); }
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
    o.el.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { tab = b.dataset.tab; sel.slot = null; G.sfx('femc-click'); render(); }));
    o.el.addEventListener('keydown', e => {
      const keys = TABS.filter(([k]) => k !== 'compendium').map(([k]) => k);
      const onTab = e.target.closest?.('[data-tab]');
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
