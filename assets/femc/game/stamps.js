/* Persona 3: Solstice achievements, as stamps on the hub's passport (achievements.js, group 'Persona 3: Solstice').
   The stamps themselves (names, spoiler-free hints, art) live in achievements.js with the rest; this file decides when one is
   earned. It watches the save: after every save (G.onChange) it checks the rules below against S and S.battleSave, so a
   stamp also turns up for an old save that already did the thing. A new one is recorded through Achievements.unlock(id,
   { quiet: true }) and shown as an in-game toast (ui.js toast kind 'stamp'), not the site's own pill.
   The battle frame awards two directly (battle.js: the first summon, the first bond skill) through window.parent.FemcStamps,
   and also leaves save.feats.summon / save.feats.bond behind, which the rules read.
   Endings come from 'kg-femc-revamp-clears' (core.js recordClear), so every playthrough's endings count; so do finished
   epilogues (the clear's `epi` list, epilogue.js leave), one stamp per world plus one for all five (batch 9).
   FemcStamps.award(id), .check(), .earned() (the ids whose rules pass now; tests). */
window.FemcStamps = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const VER = 22; // achievements.js?v= (keep in step with the other pages)
  const SEES = ['akihiko', 'yukari', 'junpei', 'mitsuru', 'fuuka', 'aigis', 'ken', 'koromaru', 'shinjiro'];
  const MOONS = ['magician', 'priestess', 'empress', 'lovers', 'chariot', 'hermit', 'fortune', 'hanged', 'tartarus-memory'];
  const slug = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  let loading = null;
  function lib() {
    if (window.Achievements) return Promise.resolve(window.Achievements);
    if (!loading) loading = new Promise(res => {
      const s = document.createElement('script');
      s.src = `${G.base}achievements.js?v=${VER}`;
      s.onload = s.onerror = () => res(window.Achievements || null);
      document.head.appendChild(s);
    });
    return loading;
  }
  const clears = () => { try { return JSON.parse(localStorage.getItem('kg-femc-revamp-clears') || '[]') || []; } catch (e) { return []; } };
  const rank = id => (G.S.links?.[id]?.rank) || 0;
  const statMax = id => { try { return G.statRank(id) >= G.D.stats.stats[id].ranks.length; } catch (e) { return false; } };
  const NAG = () => Object.keys(window.FEMC_BATTLE_DATA?.gear || {}).filter(k => window.FEMC_BATTLE_DATA.gear[k].nag);
  /* The ids whose rules pass for the current save. */
  function earned() {
    const S = G.S, out = [];
    if (!S || !S.started) return out;
    const b = S.battleSave || {}, feats = b.feats || {}, bosses = S.tartarus?.bosses || [];
    if (feats.summon || bosses.includes('magician') || (S.tartarus?.nights || 0) > 0) out.push('p3s-persona');
    MOONS.forEach(op => { if (bosses.includes(op) || S.flags?.[`op-${op}`]) out.push(`p3s-moon-${op}`); });
    // Bond MAX: any link at its own top rank (maxRank: 15 for Haechan, Jungwon, Akihiko and Shinjiro since 2026-10-21, and Hanni,
    // Hyein, Mark, Minji and Jihoon since 2026-10-22; a save that earned the stamp at their old MAX keeps it). All of S.E.E.S.
    // stays at rank 10, P3's MAX, for every member (Akihiko's and Shinjiro's 11–15 are a February epilogue, and Shinjiro's 15 is
    // his waking). Rank 15: any link at 15.
    const top = id => (G.maxOf && G.LINKS[id] ? G.maxOf(G.LINKS[id]) : 10);
    if (Object.entries(S.links || {}).some(([id, p]) => G.LINKS[id] && (p.rank || 0) >= top(id))) out.push('p3s-max-link');
    if (SEES.every(id => rank(id) >= 10)) out.push('p3s-sees-max');
    if (Object.values(S.links || {}).some(p => (p.rank || 0) >= 15)) out.push('p3s-rank-15');
    const stats = Object.keys(G.D.stats?.stats || {});
    if (stats.some(statMax)) out.push('p3s-stat-max');
    if (stats.length && stats.every(statMax)) out.push('p3s-stats-all');
    clears().forEach(c => { if (c && c.ending) out.push(`p3s-end-${slug(c.ending)}`); });
    if ((S.met || []).includes('mymelody') || (S.registered || []).includes('mymelody')) out.push('p3s-mymelody');
    const clubs = (G.D.places?.clubs || []).map(c => c.id);
    if (clubs.length && clubs.every(id => S.clubs?.[id]?.joined)) out.push('p3s-clubs');
    if ((S.tartarus?.maxFloor || 0) >= 100) out.push('p3s-floor-100');
    if (feats.bond) out.push('p3s-bond');
    const owned = new Set([...(S.gear || []), ...Object.keys(b.gear?.owned || {}).filter(k => b.gear.owned[k] > 0)]);
    const nags = NAG();
    if (nags.length && nags.every(k => owned.has(k))) out.push('p3s-naginatas');
    const GA = window.FemcGacha;
    if (S.gacha && GA) {
      if (S.gacha.pulls > 0) out.push('p3s-capsule');
      if (S.gacha.draws > 0) out.push('p3s-velvet');
      if (GA.SETS.some(st => st.ids.every(id => (S.gacha.keys || {})[id] > 0))) out.push('p3s-keyset');
    }
    // The epilogue (batch 9): a world's stamp once any playthrough has finished its epilogue (the clears' `epi`, or this save's
    // S.epilogues / the year's inside an epilogue); the last one once all five have.
    const EPI = ['runners', 'strangers', 'hoax', 'stay', 'true'], done = new Set();
    clears().forEach(c => (c && Array.isArray(c.epi) ? c.epi : []).forEach(w => done.add(w)));
    [S.epilogues, S.year1 && S.year1.epilogues].forEach(r => Object.entries(r || {}).forEach(([w, x]) => { if (x && x.done) done.add(w); }));
    EPI.forEach(w => { if (done.has(w)) out.push(`p3s-epi-${w}`); });
    if (EPI.every(w => done.has(w))) out.push('p3s-epi-all');
    return out;
  }
  function award(id) {
    return lib().then(A => {
      if (!A || !A.byId?.(id)) return false;
      if (!A.unlock(id, { quiet: true })) return false;
      G.toast('stamp', A.byId(id).name, { svg: A.byId(id).svg });
      return true;
    });
  }
  function check() {
    const ids = earned();
    if (!ids.length) return Promise.resolve([]);
    return lib().then(A => {
      if (!A) return [];
      const got = A.unlocked(), fresh = ids.filter(id => !got[id] && A.byId?.(id));
      // An older save can earn a pile at once: two toasts, then one that counts the rest.
      const shown = fresh.filter(id => A.unlock(id, { quiet: true }));
      shown.slice(0, shown.length > 3 ? 2 : 3).forEach(id => G.toast('stamp', A.byId(id).name, { svg: A.byId(id).svg }));
      if (shown.length > 3) G.toast('stamp', `and ${shown.length - 2} more on your passport`, { svg: A.byId(shown[2]).svg });
      return fresh;
    });
  }
  // After saves (debounced). Toast-only notifications pass 'toast' and are ignored.
  let timer = null;
  G.onChange(kind => { if (kind === 'toast') return; clearTimeout(timer); timer = setTimeout(() => { check().catch(() => {}); }, 400); });
  return { award, check, earned, lib };
})();
