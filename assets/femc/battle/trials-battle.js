/* Velvet Trials, the battle side (Persona 3: Solstice, 2026-11-01; design in FEMC-BOSS-RUSH.md). A handoff of kind 'trial'
   (game trials.js builds request.trial) runs here: a row of boss refights with no exits, no EXP, no yen and no loot, scored
   on turns, knockouts and the HP left. battle.js hoStart hands this file its helpers (trialCtx there); nothing else in the
   battle game changes.
   request.trial: { id, name, kicker, duel, featured, mod: { id, name, desc } | null, heal (share of HP/SP back between fights),
     kit { item: n } (the trial's own bag; never the life sim's), fights: [{ group, bg, name, par, op }] }.
   Rules: Get Ready before the first fight (party, equipment), then each fight in a row. Between fights a short interlude: heal
   `heal` of max HP/SP (the fallen get up at 1 HP first), Go on or Give up. A loss or giving up ends it. The battle save's
   party, items, Theurgy gauges and (for the shuffled-weakness modifier) what Analyze knew are put back afterwards, so a
   trial leaves no trace in it. A reload mid-trial can't pick up mid-row: the trial asks to start over or be abandoned
   (save.trialAt marks one in progress; save.trialKeep holds what it borrowed, put back on the next start).
   Result (hoFinish extra): exp {}, items {}, yenDelta 0, trial: { id, outcome, cleared, of, rounds, kos, hp, ms, fights:
   [{ rounds, ko, hp }], abandoned }. The life sim (trials.js apply) scores it and pays. */
window.FemcTrialsBattle = (() => {
  const VR = 'assets/femc/bg/velvetroom-2.webp';
  const MODS = {
    // Weaknesses shuffled: each Shadow's affinities swap places (seeded by the handoff id, so a retry deals the same).
    shuffle: (c, rnd) => ({ setup: b => b.foes().forEach(f => {
      const els = c.D.affinityOrder.filter(e => e !== 'almighty'), vals = els.map(e => f.aff[e] || 'normal');
      for (let i = vals.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [vals[i], vals[j]] = [vals[j], vals[i]]; }
      els.forEach((e, i) => { f.aff[e] = vals[i]; if (f.baseAff) f.baseAff[e] = vals[i]; });
    }) }),
    // Critical Moon: crits about twice as often on both sides.
    crit: () => ({ setup: b => { b.S.mods.crit = (b.S.mods.crit || 0) + 15; b.foes().forEach(f => { f.lu *= 2; }); } }),
    // Glass Moon: Shadows have a fifth less HP and hit 30% harder.
    glass: () => ({ edmg: 1.3, setup: b => b.foes().forEach(f => { f.maxHp = Math.round(f.maxHp * 0.8); f.hp = Math.min(f.hp, f.maxHp); }) }),
    // Bare Hands: no items (the bag is empty; trials.js sends no kit).
    bare: () => ({})
  };
  // The intro's list of fights (battle page; the rest uses the room panels' own look).
  if (typeof document !== 'undefined' && !document.getElementById('tr-trial-css')) {
    const st = document.createElement('style'); st.id = 'tr-trial-css';
    st.textContent = '.tr-trial .tr-list{display:flex;flex-wrap:wrap;gap:6px 8px;margin:10px 0;padding:0;list-style:none}.tr-trial .tr-list li{padding:3px 10px;border:1.5px solid rgba(255,79,158,.6);background:rgba(20,7,15,.85);font-style:italic;font-weight:700;transform:skewX(-8deg)}.tr-trial .tr-list b{color:#ff4f9e;margin-right:4px}';
    document.head.appendChild(st);
  }
  const seeded = str => { let h = 2166136261; for (const ch of String(str)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; }; };

  async function run(c) {
    const HO = c.HO, T = HO.request.trial || {}, fights = (T.fights || []).filter(f => f && Array.isArray(f.group) && f.group.every(k => c.D.enemies[String(k).split('@')[0]]));
    const esc = c.esc, save = () => c.save;
    const done = (outcome, t) => c.hoFinish(outcome, { exp: {}, items: {}, yenDelta: 0, trial: Object.assign({ id: T.id, of: fights.length }, t) });
    if (!fights.length) return done('retreat', { outcome: 'void', cleared: 0, abandoned: true });
    // A reload in the middle of a trial: put back what it borrowed first (trialKeep), then no picking up mid-row.
    const kept = save().trialKeep;
    if (kept) { const x = save(); x.party = kept.party || x.party; x.th = kept.th || x.th; x.known = kept.known || x.known; delete x.trialKeep; }
    if (save().trialAt === HO.id) {
      const v = await c.panel({ bg: VR, cls: 'event tr-trial', kicker: 'Velvet Trial', title: 'INTERRUPTED', name: 'trial-interrupted',
        body: `<p>The trial was cut short. It can’t pick up where it stopped: start it over from the first fight, or set it down for now (no reward).</p>`,
        buttons: [{ v: 'again', label: 'Start over', pink: true }, { v: 'leave', label: 'Abandon', small: 'Back to the Velvet Room' }] });
      if (v !== 'again') { delete save().trialAt; c.persist(); return done('retreat', { outcome: 'abandoned', cleared: 0, abandoned: true }); }
    }
    const s = save();
    const keep = { party: (s.party || []).slice(), items: JSON.parse(JSON.stringify(s.items || {})), th: JSON.parse(JSON.stringify(s.th || {})), known: JSON.parse(JSON.stringify(s.known || {})) };
    const restore = () => { const x = save(); x.party = keep.party; x.items = keep.items; x.th = keep.th; x.known = keep.known; delete x.trialAt; delete x.trialKeep; c.persist(); };
    const mod = T.mod && MODS[T.mod.id] ? T.mod : null;
    s.items = {}; if (!(mod && mod.id === 'bare')) Object.entries(T.kit || {}).forEach(([k, n]) => { if (c.D.items[k] && n > 0) s.items[k] = Math.floor(n); });
    if (mod && mod.id === 'shuffle') s.known = {};
    s.trialAt = HO.id; s.trialKeep = { party: keep.party, th: keep.th, known: keep.known };
    c.persist();
    c.mark('trial-start');
    const intro = await c.panel({ bg: VR, cls: 'event tr-trial', kicker: T.kicker || 'Velvet Trial', title: esc((T.name || 'Velvet Trial').toUpperCase()), name: 'trial-intro',
      body: `<p>${fights.length > 1 ? `${fights.length} fights in a row` : 'One fight'}. No running, no EXP, no spoils: only the score. ${fights.length > 1 ? `Between fights everyone gets ${Math.round((T.heal || 0) * 100)}% of their HP and SP back, and the fallen get up.` : ''}</p>
        ${mod ? `<p class="tt-note"><b>${esc(mod.name)}</b> · ${esc(mod.desc)}</p>` : ''}
        <ol class="tr-list">${fights.map((f, i) => `<li><b>${i + 1}</b> ${esc(f.name)}</li>`).join('')}</ol>
        <p class="tt-note">${mod && mod.id === 'bare' ? 'No items this week.' : `The trial’s own bag: ${Object.entries(T.kit || {}).filter(([k]) => c.D.items[k]).map(([k, n]) => `${esc(c.D.items[k].name)} ×${n}`).join(', ') || 'nothing'}. Your own items stay at home.`}</p>`,
      buttons: [{ v: 'go', label: 'Begin', pink: true }, { v: 'leave', label: 'Not now', small: 'No reward' }] });
    if (intro !== 'go') { restore(); return done('retreat', { outcome: 'abandoned', cleared: 0, abandoned: true }); }
    const rnd = seeded(HO.id);
    const RL = Object.assign({ noEscape: true }, mod ? MODS[mod.id](c, rnd) : {});
    c.setRun(c.newRun({ ops: true, tired: {} }));
    const t0 = Date.now(), per = [];
    let outcome = 'win', gaveUp = false;
    for (let i = 0; i < fights.length; i++) {
      const f = fights[i];
      const spec = { group: f.group.slice(), bg: f.bg || VR, label: 'Velvet Trial', block: `${T.name || 'Trial'} · ${i + 1} / ${fights.length}`, boss: true, title: f.name,
        music: i === fights.length - 1 ? 'boss' : 'danger', nav: f.op && c.D.nav[f.op.id] ? f.op.id : 'boss', heat: 0, rules: RL };
      if (f.op) spec.op = f.op;
      if (i === 0) await c.prepare(spec);
      c.mark('trial-fight');
      const out = await c.battle(spec);
      const carry = (c.getRun() || {}).carry || {}, hp = c.partyHp(carry);
      per.push({ rounds: (out.rating && out.rating.rounds) || 0, ko: !!(out.rating ? out.rating.ko : out.result !== 'win'), hp });
      if (out.result !== 'win') { outcome = 'lose'; break; }
      if (i < fights.length - 1) {
        // The interlude: the fallen get up at 1 HP (battle() already carried them so), then `heal` back.
        c.carryEach(u => { u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * (T.heal || 0))); u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * (T.heal || 0))); });
        c.mark('trial-interlude');
        const nx = fights[i + 1];
        const v = await c.panel({ bg: VR, cls: 'event tr-trial', kicker: `${T.name || 'Velvet Trial'} · ${i + 1} / ${fights.length} cleared`, title: 'NEXT', name: 'trial-next',
          body: `<p>${esc(f.name)} down in ${per[i].rounds} turn${per[i].rounds === 1 ? '' : 's'}${per[i].ko ? ', with someone knocked out' : ', nobody down'}.</p><p>Next: <b>${esc(nx.name)}</b>.</p><p class="tt-note">Everyone gets ${Math.round((T.heal || 0) * 100)}% of their HP and SP back.</p>`,
          buttons: [{ v: 'go', label: 'Go on', pink: true }, { v: 'quit', label: 'Give up', small: 'No reward' }] });
        if (v !== 'go') { gaveUp = true; outcome = 'retreat'; break; }
      }
    }
    const last = (c.getRun() || {}).carry || {};
    c.setRun(null);
    restore();
    const cleared = per.filter((p, i) => i < per.length - (outcome === 'lose' ? 1 : 0)).length;
    done(outcome, { outcome: outcome === 'win' ? 'clear' : gaveUp ? 'gaveup' : 'lose', cleared: outcome === 'win' ? fights.length : cleared, rounds: per.reduce((a, p) => a + p.rounds, 0),
      kos: per.filter(p => p.ko).length, hp: outcome === 'win' ? c.partyHp(last) : 0, ms: Date.now() - t0, fights: per, abandoned: gaveUp, mod: mod ? mod.id : null });
  }
  return { run, MODS };
})();
