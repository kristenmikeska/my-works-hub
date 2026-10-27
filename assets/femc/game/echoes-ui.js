/* Persona 3: Solstice · Echoes on the game page (2026-10-27). Rules and data are assets/femc/battle/echoes.js; this file draws:
     - the Personas tab's Echo slot (menu.js personasTab / wirePersonas call personaHtml / wirePersona): Solar's equipped Echo,
       her stock (tap to equip, tap again to take it off), the Compendium button. Swapping works any time outside a fight.
     - Echo Fusion with Elizabeth (openFusion; the Velvet Room's buttons via velvetButtons / wireVelvet in gacha.js): pick two,
       the preview (result, level, the link's arcana bonus EXP, skills, the inheritance picks, warnings), then Fuse.
       While one Echo is picked, every other one shows the arcana they'd make together (the chart, read off the stock).
     - the Echo Compendium (openCompendium): a tile per Echo (??? until registered), a page per Echo (art, myth, arcana, skills,
       passive, affinities, a lore line), Register (a stronger copy Solar holds) and Summon for yen (the Velvet Room only),
       and the Rewards page (each arcana, each myth set, everything).
     - Rewards: payMilestones() pays every finished milestone once (plumes into S.gacha.plumes, a Revelation card into the battle
       save, a Boutique look or title through FemcCosmetics.grantItem, Samjogo) and toasts it. It runs after every save
       (G.onChange, like stamps.js) and when the Compendium opens; story-gift news (es.news) becomes a toast there too.
       The +1 Velvet Plume per registered Echo is Elizabeth's claim button (gacha.js claim: ids 'echo:<id>').
   Battle-save edits go straight into S.battleSave (never a fresh ensureBattleSave copy mid-action), then G.saveQuiet(). */
window.FemcEchoUI = (() => {
  const G = window.FemcGame, EC = () => window.FemcEchoes;
  if (!G) return null;
  const D = () => window.FEMC_BATTLE_DATA, UI = () => window.FemcGameUI;
  const S = () => G.S;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const yen = n => `¥${Math.round(n || 0).toLocaleString('en-US')}`;
  const bs = () => S().battleSave || G.ensureBattleSave();
  const elIcon = el => (window.FemcBattleArt ? window.FemcBattleArt.icon(el) : '');
  const skIcon = id => { const s = D().skills[id]; return s && s.icon && window.FemcIcons ? window.FemcIcons.svg(s.icon, null, 'bt-ico sk') : s ? elIcon(s.el) : ''; };
  const chips = ids => `<ul class="g-chips">${ids.map(id => { const s = D().skills[id]; return s ? `<li title="${esc(s.desc || '')}">${skIcon(id)}<span>${esc(s.name)}</span></li>` : ''; }).join('')}</ul>`;
  const AFF = { resist: 'Rs', weak: 'Wk' };
  const affChips = aff => `<div class="g-affs">${Object.entries(aff).map(([el, a]) => `<span class="g-aff ${a}" title="${esc((D().elements[el] || {}).name || el)}: ${a}">${elIcon(el)}<em>${AFF[a] || a}</em></span>`).join('')}</div>`;
  const setOf = x => EC().SETS[x.set] || { name: 'Secret', myth: 'Every world', color: '#fff2b0' };
  const need = L => D().progression.expToNext(L);
  const expBar = i => `<span class="g-ec-exp" title="${i.exp} / ${need(i.lvl)} EXP"><i style="--w:${Math.min(100, Math.round(i.exp / need(i.lvl) * 100))}%"></i></span>`;
  const LINES = {
    fuseHi: ['“Two answers to one question. Shall we see what they make together?”', '“Bring me two, and I’ll show you a third. That is the whole trick, and it never gets old.”', '“The cards remember every Echo that passes through here. Fusing is only asking them politely.”'],
    fused: ['“Oh, I like this one. It looks at you the way you look at it.”', '“A fine result. I’ll write it down before it changes its mind.”'],
    summon: ['“Back from the pages, exactly as you left it.”'],
    full: ['“Your hands are full. Twelve is quite enough for anyone.”']
  };
  const pick = a => a[Math.floor(Math.random() * a.length)];

  /* ── Link ranks by arcana (the fusion bonus) ── */
  function ranksByArcana() {
    const ranks = {}, links = {};
    Object.values(G.LINKS || {}).forEach(l => {
      const r = Math.min(10, ((S().links || {})[l.id] || {}).rank || 0);
      if (!r || !l.arcana || r <= (ranks[l.arcana] || 0)) return;
      ranks[l.arcana] = r; links[l.arcana] = l.short || l.name || l.id;
    });
    return { ranks, links };
  }

  /* ── The Personas tab ── */
  function slotHtml(b) {
    const X = EC(), i = X.equipped(b);
    if (!i) return `<div class="g-ec-slot empty"><span class="g-ec-none">No Echo</span><p class="g-note">${X.owned(b).length ? 'Pick one below. Its skills join Haenim’s, its passive adds to the sun’s, and its resistances fill the gaps in hers.' : 'Echoes answer Shuffle Time’s cards, wait in rare corners of Tartarus, come from fusing two in the Velvet Room, and sometimes find Solar on their own.'}</p></div>`;
    const x = X.byId(i.id), set = setOf(x), sk = X.skillsOf(i);
    return `<div class="g-ec-slot" style="--ec:${set.color}">${X.cardHtml(x.id, { cls: 'g-ec-slotpic' })}
      <div class="g-ec-slotinfo"><p class="g-kicker">Echo · ${esc(x.arcana)} · ${esc(set.myth)}</p><h3>${esc(x.name)}${X.nativeName(x) ? ` <span class="ko">${esc(X.nativeName(x))}</span>` : ''} <small>Lv ${i.lvl}</small></h3>${expBar(i)}
        ${chips(sk)}<p class="g-ec-passive"><b>${esc(x.passive.name)}</b> ${esc(x.passive.desc)}</p>
        <p class="g-note small">${esc(X.affLine(x))}. Only where Haenim has no affinity of her own.</p>
        <button type="button" class="g-btn small" data-ec-off><span>Take it off</span></button></div></div>`;
  }
  function stockHtml(b, sel = null) {
    const X = EC(), list = X.owned(b), on = (X.es(b).on);
    if (!list.length) return '';
    return `<div class="g-ec-stock" role="list">${list.map(i => { const x = X.byId(i.id); return `<button type="button" role="listitem" class="g-ec-mini${i.u === on ? ' on' : ''}${sel && sel.includes(i.u) ? ' sel' : ''}" data-ec-u="${i.u}" style="--ec:${setOf(x).color}" aria-pressed="${i.u === on || !!(sel && sel.includes(i.u))}">${X.cardHtml(x.id, { cls: 'g-ec-thumb' })}<b>${esc(x.name)}</b><small>${esc(x.arcana)} · Lv ${i.lvl}</small>${i.u === on ? '<i>Equipped</i>' : ''}<em class="g-ec-to"></em></button>`; }).join('')}</div>`;
  }
  function personaHtml(b) {
    const X = EC(); if (!X || !b) return '';
    X.es(b);
    return `<section class="g-ec-sec" aria-label="Echo"><h3>Echo <small>Solar’s second slot · ${X.owned(b).length} / ${X.STOCK}</small></h3>${slotHtml(b)}${stockHtml(b)}
      <div class="g-row"><button type="button" class="g-btn small" data-ec-comp><span>Echo Compendium · ${X.regCount(b)} / ${X.collectable().length}</span></button></div></section>`;
  }
  function wirePersona(el, render) {
    const X = EC(); if (!X) return;
    el.querySelectorAll('[data-ec-u]').forEach(bt => bt.addEventListener('click', () => {
      const b = bs(), u = +bt.dataset.ecU;
      if (X.es(b).on === u) X.unequip(b); else X.equip(b, u);
      G.saveQuiet(); G.sfx(X.es(b).on ? 'femc-rankup' : 'femc-hover'); render(`[data-ec-u="${u}"]`);
    }));
    el.querySelector('[data-ec-off]')?.addEventListener('click', () => { X.unequip(bs()); G.saveQuiet(); G.sfx('femc-hover'); render(); });
    el.querySelector('[data-ec-comp]')?.addEventListener('click', () => { G.sfx('femc-click'); openCompendium({ velvet: false, done: () => render() }); });
  }

  /* ── Fusion ── */
  function openFusion(done) {
    const X = EC(); if (!X) return null;
    let sel = [], inherit = null, last = null, busy = false;
    const pic = G.portrait('elizabeth', 'happy');
    const o = UI().overlay(`<div class="g-ec g-ec-fuse"><div class="g-st-head"><h2>Echo Fusion<small>Elizabeth · the Velvet Room</small></h2><div class="g-row g-ec-head"><button type="button" class="g-btn small" data-ec-comp><span>Compendium</span></button><button type="button" class="g-btn small" data-close><span>Back</span></button></div></div>
      <div class="g-shop-top">${pic ? `<img src="${pic}" alt="">` : ''}<p class="g-shop-say g-ec-say">${esc(pick(LINES.fuseHi))}</p></div>
      <div class="g-ec-fz"><div class="g-ec-fzstock"></div><div class="g-ec-prev" aria-live="polite"></div></div></div>`, 'g-ec-ov g-vel-ov', () => done?.());
    const $ = q => o.el.querySelector(q);
    const ctx = () => { const r = ranksByArcana(); return { solarLvl: bs().lvl, ranks: r.ranks, links: r.links, inherit, day: S().day }; };
    const paint = () => {
      const b = bs(), list = X.owned(b);
      $('.g-ec-fzstock').innerHTML = list.length ? stockHtml(b, sel) : '<p class="g-note">Solar has no Echoes yet.</p>';
      // The chart, read off the stock: with one picked, every other Echo shows what the pair would make.
      if (sel.length === 1) {
        const a = X.instOf(b, sel[0]);
        o.el.querySelectorAll('[data-ec-u]').forEach(bt => { const i = X.instOf(b, bt.dataset.ecU); if (!i || i.u === a.u) return; const p = X.preview(b, a.u, i.u, ctx()); bt.querySelector('.g-ec-to').textContent = p.result ? `→ ${X.byId(p.result.id).name}` : p.arcana ? `→ ${p.arcana} · none` : '→ none'; bt.classList.toggle('nofuse', !p.ok); });
      }
      const prev = $('.g-ec-prev');
      if (last) { prev.innerHTML = last; return; }
      if (sel.length < 2) { prev.innerHTML = `<p class="g-kicker">Preview</p><p class="g-note">${sel.length ? 'Now pick a second Echo. Each one shows what the pair would become.' : 'Pick two Echoes to see what they’d become. Both go into the result; it keeps up to two of their skills.'}</p><p class="g-note small">A link in the result’s arcana adds EXP to it, more the higher its rank (up to rank 10).</p>`; return; }
      const p = X.preview(b, sel[0], sel[1], ctx());
      if (!p.result) { prev.innerHTML = `<p class="g-kicker">Preview</p><p class="g-note">${esc(p.why)}</p>`; return; }
      const r = p.result, x = X.byId(r.id), A = X.byId(p.a.id), B = X.byId(p.b.id);
      inherit = r.inh.slice();
      prev.innerHTML = `<p class="g-kicker">Preview · ${esc(A.name)} × ${esc(B.name)}</p>
        <div class="g-ec-res" style="--ec:${setOf(x).color}">${X.cardHtml(x.id, { cls: 'g-ec-respic' })}<div><h3>${esc(x.name)}${r.isNew ? '<i class="g-new">NEW</i>' : ''}</h3>
          <p class="g-ec-sub">${esc(x.arcana)} · ${esc(setOf(x).myth)} · <b>Lv ${r.lvl}</b></p>
          <p class="g-note small" data-ec-bonus>${r.bonusExp ? `+${r.bonusExp} EXP from ${esc(r.link || 'a link')} (${esc(x.arcana)}, rank ${r.rank})${r.lvl > r.base ? `: Lv ${r.base} → ${r.lvl}` : ''}` : `No link in the ${esc(x.arcana)} arcana yet: no bonus EXP.`}</p></div></div>
        <p class="g-kicker">Skills</p>${chips(r.skills)}
        ${r.inheritable.length ? `<p class="g-kicker">Inherit ${r.inheritN} <small>(${r.inh.length} picked)</small></p><div class="g-ec-inh">${r.inheritable.map(k => `<button type="button" class="g-chip${r.inh.includes(k) ? ' on' : ''}" data-inh="${k}" aria-pressed="${r.inh.includes(k)}">${esc(D().skills[k].name)}</button>`).join('')}</div>` : '<p class="g-note small">Nothing to inherit: the result already learns everything they know.</p>'}
        ${r.consumesEquipped ? '<p class="g-note small g-ec-warn">Solar’s equipped Echo goes into this fusion.</p>' : ''}
        <div class="g-row"><button type="button" class="g-btn pink" data-fuse${p.ok && !busy ? '' : ' disabled'}><span>${p.ok ? `Fuse into ${esc(x.name)}` : esc(p.why)}</span></button><button type="button" class="g-btn small" data-unpick><span>Start over</span></button></div>`;
      prev.querySelectorAll('[data-inh]').forEach(c => c.addEventListener('click', () => {
        const k = c.dataset.inh, cur = (inherit || []).slice();
        if (cur.includes(k)) inherit = cur.filter(z => z !== k);
        else { cur.push(k); inherit = cur.slice(-r.inheritN); }
        G.sfx('femc-hover'); repaint();
      }));
      prev.querySelector('[data-unpick]')?.addEventListener('click', () => { sel = []; inherit = null; G.sfx('femc-hover'); repaint(); });
      prev.querySelector('[data-fuse]')?.addEventListener('click', () => fuse());
    };
    // The inheritance picks survive a repaint (preview() fills defaults only when inherit is null).
    const repaint = () => { const keep = inherit; paint(); if (keep !== null) inherit = keep; wire(); };
    function wire() {
      o.el.querySelectorAll('.g-ec-fzstock [data-ec-u]').forEach(bt => bt.addEventListener('click', () => {
        if (busy) return;
        const u = +bt.dataset.ecU; last = null;
        if (sel.includes(u)) sel = sel.filter(z => z !== u); else { sel = sel.concat(u).slice(-2); }
        inherit = null; G.sfx('femc-click'); repaint();
      }));
    }
    function fuse() {
      if (busy || sel.length < 2) return;
      busy = true;
      const b = bs(), r = X.fuse(b, sel[0], sel[1], ctx());
      if (!r.ok) { busy = false; $('.g-ec-say').textContent = r.why; return repaint(); }
      G.saveQuiet(); G.sfx('femc-rankup');
      const x = X.byId(r.preview.result.id);
      sel = []; inherit = null; busy = false;
      $('.g-ec-say').textContent = pick(LINES.fused);
      last = `<p class="g-kicker">Fused</p><div class="g-ec-res g-ec-born" style="--ec:${setOf(x).color}">${X.cardHtml(x.id, { cls: 'g-ec-respic' })}<div><h3>${esc(x.name)}${r.isNew ? '<i class="g-new">NEW</i>' : ''}</h3><p class="g-ec-sub">${esc(x.arcana)} · Lv ${r.inst ? r.inst.lvl : r.preview.result.lvl}</p><p class="g-note small">${r.isNew ? 'Registered in the Compendium. Show Elizabeth for a Velvet Plume.' : 'Its page in the Compendium is up to date.'}</p></div></div>${chips(r.inst ? X.skillsOf(r.inst) : r.preview.result.skills)}`;
      repaint();
      payMilestones();
    }
    o.el.querySelector('[data-ec-comp]').addEventListener('click', () => openCompendium({ velvet: true, done: () => { last = null; repaint(); } }));
    repaint();
    return o;
  }

  /* ── The Compendium ── */
  function openCompendium({ velvet = false, done = null, at = null } = {}) {
    const X = EC(); if (!X) return null;
    payMilestones();
    let filter = 'all', page = at;
    const o = UI().overlay(`<div class="g-ec g-ec-comp"><div class="g-st-head"><h2>Echo Compendium<small class="g-ec-count"></small></h2><button type="button" class="g-btn small" data-close><span>Back</span></button></div>
      <div class="g-ec-filter" role="tablist"></div><div class="g-ec-body"></div></div>`, `g-ec-ov${velvet ? ' g-vel-ov' : ''}`, () => done?.());
    const $ = q => o.el.querySelector(q);
    const list = () => (filter === 'all' ? X.collectable() : X.collectable().filter(x => x.set === filter)).concat(filter === 'all' && X.isRegistered(bs(), X.SECRET) ? [X.byId(X.SECRET)] : []);
    function grid() {
      const b = bs();
      return `<div class="g-ec-grid">${list().map(x => { const known = X.isRegistered(b, x.id), r = X.es(b).reg[x.id]; return `<button type="button" class="g-ec-tile${known ? '' : ' locked'}" data-cp="${x.id}" style="--ec:${setOf(x).color}" aria-label="${esc(known ? x.name : `Unknown ${x.arcana} Echo`)}">${X.cardHtml(x.id, { cls: 'g-ec-thumb', known })}<b>${esc(known ? x.name : '???')}</b><small>${esc(x.arcana)}${known ? ` · Lv ${r.lvl}` : ''}</small></button>`; }).join('')}</div>`;
    }
    function detail(id) {
      const b = bs(), x = X.byId(id), known = X.isRegistered(b, id), r = X.es(b).reg[id], set = setOf(x), arr = list(), k = arr.findIndex(z => z.id === id);
      if (!known) return `<div class="g-ec-page locked"><button type="button" class="g-btn small" data-cp-back><span>‹ All Echoes</span></button><div class="g-ec-pgmain">${X.cardHtml(id, { cls: 'g-ec-big', known: false })}<div><p class="g-kicker">${esc(x.arcana)} · ${esc(set.myth)}</p><h2>???</h2><p class="g-note">Not registered yet.</p></div></div></div>`;
      const sumWhy = velvet ? X.summonWhy(b, id) : '', cost = X.summonCost(r.lvl), held = X.owned(b).filter(i => i.id === id).sort((p, q) => q.lvl - p.lvl)[0];
      const better = held && (held.lvl > r.lvl || held.exp !== r.exp || (held.inh || []).join() !== (r.inh || []).join());
      const learn = x.learn.map(([L, s]) => `<li title="${esc(D().skills[s].desc || '')}">${skIcon(s)}<span>${esc(D().skills[s].name)}</span><small>Lv ${L}</small></li>`).join('') + (r.inh || []).map(s => `<li title="${esc(D().skills[s].desc || '')}">${skIcon(s)}<span>${esc(D().skills[s].name)}</span><small>inherited</small></li>`).join('');
      return `<div class="g-ec-page" style="--ec:${set.color}"><div class="g-row g-ec-pgnav"><button type="button" class="g-btn small" data-cp-back><span>‹ All Echoes</span></button><button type="button" class="g-btn small" data-cp-step="-1"${k > 0 ? '' : ' disabled'}><span>‹</span></button><button type="button" class="g-btn small" data-cp-step="1"${k < arr.length - 1 ? '' : ' disabled'}><span>›</span></button></div>
        <div class="g-ec-pgmain">${X.cardHtml(id, { cls: 'g-ec-big' })}<div class="g-ec-pgtext">
          <p class="g-kicker">${esc(X.arc(x.arcana).num)} · ${esc(x.arcana)} · ${esc(set.name)} · ${esc(set.myth)}</p>
          <h2>${esc(x.name)}${X.nativeName(x) ? ` <span class="ko">${esc(X.nativeName(x))}</span>` : ''}</h2>
          <p class="g-ec-sub">Registered at Lv ${r.lvl} · base Lv ${x.lvl}${X.artKind(id) !== 'own' ? ' · <span class="g-ec-artnote">art coming</span>' : ''}</p>
          <p class="g-ec-myth">${esc(x.myth)}</p><p class="g-ec-lore">“${esc(x.lore)}”</p>
          <p class="g-kicker">Skills</p><ul class="g-chips g-ec-learn">${learn}</ul>
          <p class="g-ec-passive"><b>${esc(x.passive.name)}</b> ${esc(x.passive.desc)}</p>${affChips(x.aff)}
          <div class="g-row">${velvet ? `<button type="button" class="g-btn pink" data-summon="${id}"${sumWhy || S().yen < cost ? ' disabled' : ''}><span>${sumWhy ? esc(sumWhy) : S().yen < cost ? `Summon · ${yen(cost)} (not enough yen)` : `Summon · ${yen(cost)}`}</span></button>` : ''}
            ${held ? `<button type="button" class="g-btn small" data-register="${held.u}"${better ? '' : ' disabled'}><span>${better ? `Register Lv ${held.lvl}` : 'Registered'}</span></button>` : ''}</div>
          ${velvet ? '' : '<p class="g-note small">Summon registered Echoes for yen from Elizabeth in the Velvet Room.</p>'}</div></div></div>`;
    }
    function rewards() {
      const b = bs(), ms = X.milestones(b);
      const rw = m => [m.reward.plumes ? `${m.reward.plumes} Velvet Plumes` : '', m.reward.card ? `a ★${m.reward.card} Revelation card` : '', m.reward.cos ? (window.FemcCosmetics && window.FemcCosmetics.byId(m.reward.cos) ? window.FemcCosmetics.byId(m.reward.cos).name : 'a look') : '', m.reward.echo ? 'a secret Echo' : ''].filter(Boolean).join(', ');
      const row = s => `<li class="g-ec-mile${s.claimed ? ' done' : ''}" data-mile="${esc(s.m.id)}"><b>${esc(s.m.kind === 'all' ? 'Every Echo' : s.m.name)}</b><span class="g-ec-meter"><i style="--w:${Math.round(s.have / s.total * 100)}%"></i></span><small>${s.have} / ${s.total} · ${esc(rw(s.m))}${s.claimed ? ' · ✓' : ''}</small></li>`;
      return `<p class="g-note">Every new Echo registered is a Velvet Plume from Elizabeth (show her the Compendium). Finishing an arcana or a whole myth set pays out here by itself.</p>
        <p class="g-kicker">Myth sets</p><ul class="g-ec-miles">${ms.filter(s => s.m.kind !== 'arcana').map(row).join('')}</ul>
        <p class="g-kicker">Arcana</p><ul class="g-ec-miles cols">${ms.filter(s => s.m.kind === 'arcana').map(row).join('')}</ul>`;
    }
    const paint = () => {
      const b = bs();
      $('.g-ec-count').textContent = `${X.regCount(b) - (X.isRegistered(b, X.SECRET) ? 1 : 0)} / ${X.collectable().length} registered`;
      const tabs = [['all', 'All']].concat(X.SET_ORDER.map(k => [k, X.SETS[k].name])).concat([['rewards', 'Rewards']]);
      $('.g-ec-filter').innerHTML = tabs.map(([k, n]) => { const c = k === 'all' || k === 'rewards' ? '' : ` <em>${X.collectable().filter(x => x.set === k && X.isRegistered(b, x.id)).length}/${X.collectable().filter(x => x.set === k).length}</em>`; return `<button type="button" role="tab" class="g-chip${filter === k ? ' on' : ''}" data-cf="${k}" aria-selected="${filter === k}">${esc(n)}${c}</button>`; }).join('');
      $('.g-ec-body').innerHTML = filter === 'rewards' ? rewards() : page ? detail(page) : grid();
      o.el.querySelectorAll('[data-cf]').forEach(c => c.addEventListener('click', () => { filter = c.dataset.cf; page = null; G.sfx('femc-hover'); paint(); }));
      o.el.querySelectorAll('[data-cp]').forEach(c => c.addEventListener('click', () => { page = c.dataset.cp; G.sfx('femc-click'); paint(); o.el.querySelector('[data-cp-back]')?.focus({ preventScroll: true }); }));
      $('[data-cp-back]')?.addEventListener('click', () => { const was = page; page = null; G.sfx('femc-hover'); paint(); o.el.querySelector(`[data-cp="${was}"]`)?.focus({ preventScroll: true }); });
      o.el.querySelectorAll('[data-cp-step]').forEach(c => c.addEventListener('click', () => { const arr = list(), k = arr.findIndex(z => z.id === page) + +c.dataset.cpStep; if (arr[k]) { page = arr[k].id; G.sfx('femc-hover'); paint(); } }));
      $('[data-summon]')?.addEventListener('click', () => {
        const id = $('[data-summon]').dataset.summon, r = X.summon(bs(), id, cost => { if (S().yen < cost) return false; G.addYen(-cost); return true; });
        if (!r.ok) { G.toast('note', r.why); return; }
        G.saveQuiet(); G.sfx('femc-rankup'); G.toast('perk', `${X.byId(id).name} answers the summons (Lv ${r.inst.lvl}).`); paint();
      });
      $('[data-register]')?.addEventListener('click', () => { const b2 = bs(), i = X.instOf(b2, $('[data-register]').dataset.register); if (!i) return; X.register(b2, i, S().day); G.saveQuiet(); G.sfx('femc-note'); paint(); });
    };
    paint();
    return o;
  }

  /* ── The Velvet Room's buttons (gacha.js openVelvet) ── */
  function velvetButtons() {
    const X = EC(); if (!X) return '';
    const b = bs(); X.es(b);
    return `<button type="button" class="g-btn small" data-ec-fuse><span>Echo Fusion</span></button><button type="button" class="g-btn small" data-ec-vcomp><span>Echo Compendium · ${X.regCount(b)}</span></button>`;
  }
  function wireVelvet(el, repaint) {
    el.querySelector('[data-ec-fuse]')?.addEventListener('click', () => { G.sfx('femc-click'); openFusion(() => repaint?.()); });
    el.querySelector('[data-ec-vcomp]')?.addEventListener('click', () => { G.sfx('femc-click'); openCompendium({ velvet: true, done: () => repaint?.() }); });
  }

  /* ── Rewards ── */
  function payMilestones() {
    const X = EC(), b = S().battleSave; if (!X || !b) return [];
    const o = X.es(b), paid = [];
    // Story gifts that arrived while the battle save was normalized: a toast here (Shuffle Time and Tartarus show their own).
    X.takeNews(b).forEach(n => { const x = X.byId(n.id); if (x && n.t === 'gift') paid.push(`An Echo found Solar: ${x.name} (${x.arcana}).${n.full ? ' It waits in the Compendium.' : ' Equip it on the Personas tab.'}`); });
    X.dueMilestones(b).forEach(m => {
      if (o.miles.includes(m.id)) return;
      o.miles.push(m.id);
      const got = [];
      if (m.reward.plumes && window.FemcGacha) { window.FemcGacha.gs().plumes += m.reward.plumes; got.push(`+${m.reward.plumes} Velvet Plumes`); }
      if (m.reward.card && window.FemcBuild) { const B = window.FemcBuild, c = B.rollCard(Math.random, { tier: Math.min(7, 1 + Math.floor((b.lvl || 5) / 9)), minR: m.reward.card, r: m.reward.card }); const res = B.addCard(b, c); got.push(res.card ? `a ★${c.r} Revelation card` : `Tarot Dust ×${res.dust}`); }
      if (m.reward.cos && window.FemcCosmetics) { const it = window.FemcCosmetics.grantItem(m.reward.cos); if (it) got.push(it.name); }
      if (m.reward.echo) { const r = X.add(b, m.reward.echo, { via: 'milestone', day: S().day }); if (r) got.push(`a secret Echo: ${X.byId(m.reward.echo).name}`); }
      paid.push(`Echo Compendium: ${m.kind === 'all' ? 'every Echo' : m.name} complete! ${got.join(', ')}`);
    });
    if (paid.length) { G.saveQuiet(); paid.forEach(t => G.toast('perk', t)); }
    return paid;
  }
  let timer = null;
  G.onChange(kind => { if (kind === 'toast') return; clearTimeout(timer); timer = setTimeout(() => { try { payMilestones(); } catch (e) { console.error(e); } }, 300); });

  /* ── Rewards' looks (cosmetics.js items, `pool: false`: only these milestones give them) ── */
  if (window.FemcCosmetics && Array.isArray(window.FemcCosmetics.ITEMS)) {
    const add = (id, kind, name, r, desc, more) => { if (!window.FemcCosmetics.byId(id)) window.FemcCosmetics.ITEMS.push(Object.assign({ id, kind, name, r, desc, pool: false }, more)); };
    add('ec-wp-dancheong', 'wallpaper', 'Dancheong', 'SR', 'Temple-eave colours: jade, red and gold. The strangers Echoes reward.', { css: 'repeating-linear-gradient(90deg, #1f7a5a 0 18px, #c8323c 18px 26px, #ffd36b 26px 30px, #2b5fd0 30px 40px, #1f7a5a 40px 58px) 0 0 / 58px 100%, #0b1a14' });
    add('ec-tt-laurel', 'title', 'Laurel Title', 'UR', 'Olympian gold on night blue. The Runners Echoes reward.', { title: ['#e8c25a', '#0b1640'] });
    add('ec-wp-static', 'wallpaper', 'Static', 'SR', 'A dead channel at 3 a.m. The HOAX Echoes reward.', { css: 'repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 3px), radial-gradient(circle at 30% 40%, #2a1a3a, #07050c 70%)' });
    add('ec-tt-torii', 'title', 'Torii Title', 'UR', 'Shrine-gate vermilion on black. The Persona 3 Echoes reward.', { title: ['#e8452c', '#140605'] });
    add('ec-tt-samjogo', 'title', 'Three-Legged Sun Title', 'UR', 'A black crow inside a gold sun. For every Echo in the Compendium.', { title: ['#ffd36b', '#050302'] });
  }

  return { personaHtml, wirePersona, openFusion, openCompendium, velvetButtons, wireVelvet, payMilestones, ranksByArcana };
})();
