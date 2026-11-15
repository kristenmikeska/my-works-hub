/* FEMC epilogue minigame: Kiriko support (Nov 10 2026, Kat: "an Overwatch support simulation" for the Runners Regionals;
   EPILOGUE-EXPANSION-PLAN.md step 2). In the story since Nov 11 (scene.js { minigame }; see its comment for where) (try it at mockups/minigames/support.html).

   FemcSupport.play({ host, team, seconds, calls, difficulty, onDone }) -> Promise<result>
     host        element to draw into (default document.body; a full-screen overlay is added inside it)
     team        four teammates [{ id, name, role: 'tank' | 'dps' | 'support', hp }] (default: Syracuse at Regionals)
     seconds     round length (default 70)
     difficulty  'easy' | 'normal' | 'hard' (damage and event pace; default 'normal')
     onDone      called with the result too
   result = { deaths, saves, healed, suzus, rushes, grade: 'S' | 'A' | 'B' | 'C', time }

   Solar's kit (Kiriko, simplified):
     Healing Ofuda  click / tap a teammate, or keys 1-4: +34 HP over half a second. 10 charms, reload 1.2 s when empty (or R).
     Protection Suzu  Space or the bell button: +25 HP to everyone, cleanses (removes anti-heal), 0.9 s of invulnerability.
                    10 s cooldown. A Suzu that lands inside a big hit's window counts as a save.
     Kitsune Rush   Q once the meter is full (it fills as she heals): 5 s where the team takes half damage and heals land double.
     Controller (Nov 15 2026, battle/pad.js, through FemcPad.remap): D-pad ← ↓ ↑ → = ofuda to teammates 1-4 (left to right),
                    ✕ Suzu, △ Kitsune Rush, R2 reload, ○ pauses (D-pad + ✕ in the pause menu). A held direction doesn't repeat.
   The other side: steady chip damage, plus telegraphed plays called out over comms ~1.4 s before they land:
     Ana nade  (anti-heal on one teammate for 3 s: heals do nothing until a Suzu cleanses it)
     Dragonblade (a big burst on one DPS)   Graviton (heavy damage to everyone at once)   Dive (two quick hits on one target)
   A teammate at 0 HP is down for 6 s, then back at full. Grade from deaths and saves.
   Pink and black; reduced motion: no shakes or floating numbers. Esc pauses (Resume / How to play / Quit).

   Tutorial (Nov 11 2026, Kat: every minigame teaches itself; tutorial.js, FemcTutorial, loaded on demand from this folder):
     play({ tutorial }) true = always show it, false = never, else only the first time (localStorage kg-femc-tutorials 'support').
     Minji (minji-runners-regionals faces) walks Solar through a practice fight with the clock stopped and no damage coming in:
     heal Olivia (tap / 3), the ofuda count and reload, ring the Suzu on a naded Minji, fire Kitsune Rush, then how calls work.
     Then everything is reset and the real 70 s start. The pause menu's How to play replays it as a walkthrough over the paused
     game (nothing changes). result.tutorial = 'done' | 'skipped' | 'seen' (not shown). o.hook(fn) gets test handles (jsc runs).

   Visual pass (Nov 11 2026, Kat: "every minigame needs as many visuals as possible, as much animation as possible"; rules,
   timings and the result are unchanged, everything below is drawn on top):
     backdrop  one of the Regionals maps (art ow/map-<lijiang|busan>-1..3, else a drawn arena) drifting slowly, a light sweep,
               falling petals, five torii that light up during Kitsune Rush.   hands  ow/hands (else drawn), they bob and throw.
     teammates  their Regionals art (ow/team-<id>, else a role silhouette) breathing on each card; flinch on a hit, glow while
               an ofuda's heal lands, a shimmer while invulnerable, a sickly tint when naded, fall over when down. HP bars have a
               trailing "ghost" bar; a reticle and the play's name mark the target of a call (Graviton: a vortex over the team).
     plays     ofuda fly from her hands to the card with a streak and a burst; the Suzu's bell flies up and rings out a wave over
               every card; Kitsune Rush sends a fox across the screen and foxfire up from the floor; nades splash, blades slash,
               graviton pulls the cards in, dives spark twice; a blocked play shows a shield ripple. A kill feed slides in top
               right (downs, saves, and the match going on around her). Banner at the start; the clock pulses in the last 10 s.
     end       the grade stamps down, the stats count up, petals for S / A.
   Settings: reduced motion = no motion at all (the old rule: no shakes, pops or particles; static backdrop), Reduce flashes
   (o.calm, else FemcGame settings) = no white flashes or hard glows, Performance (o.perf, else settings) = a third of the
   particles, no blur, no drifting backdrop. */
window.FemcSupport = (() => {
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/support"]')?.src.split('assets/')[0]) || '';
  // the shared first-time tutorial (tutorial.js / .css, loaded once from this folder; null = play without one)
  const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
    const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
    l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
    s.src = `${B}.js?v=2`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
  }));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // Roles (Kat, Nov 10): Chenle tank, Minji and Olivia DPS, Haerin the other support, Solar Kiriko.
  const TEAM = [
    { id: 'chenle', name: 'Chenle', role: 'tank', hp: 300 },
    { id: 'minji', name: 'Minji', role: 'dps', hp: 175 },
    { id: 'olivia', name: 'Olivia', role: 'dps', hp: 175 },
    { id: 'haerin', name: 'Haerin', role: 'support', hp: 175 },
  ];
  const DIFF = { easy: { chip: 0.65, gap: 1.35, burst: 0.8 }, normal: { chip: 1, gap: 1, burst: 1 }, hard: { chip: 1.3, gap: 0.8, burst: 1.2 } };
  const ROLE = { tank: 'TANK', dps: 'DPS', support: 'SUP' };
  const CALLS = {
    nade: t => [`Nade on ${t.name}!`, `${t.name}'s naded, Sol!`],
    blade: t => [`Genji blade, he's on ${t.name}!`, `Blade out, ${t.name}!`],
    grav: () => ['GRAV GRAV GRAV', 'Zarya ult, everyone!'],
    dive: t => [`They're diving ${t.name}!`, `${t.name}'s getting jumped!`],
  };
  const WHO_CALLS = ['haerin', 'chenle', 'minji'];
  // the drawn side (Nov 11 visual pass)
  const ART = id => `${base()}assets/femc/game/art/minigames/ow/${id}.webp`;
  const FOES = ['Zarya', 'Genji', 'Cassidy', 'Ana', 'Lúcio'];
  const BY = { nade: 'Ana', blade: 'Genji', grav: 'Zarya', dive: 'Genji' };
  const TELE = { nade: 'NADE', blade: 'BLADE', grav: 'GRAV', dive: 'DIVE' };
  const rnd = (a, b) => a + Math.random() * (b - a);
  // a role silhouette for a teammate without art (pink, drawn from the front)
  const SIL = {
    tank: '<path d="M30 22a10 10 0 1 1 20 0a10 10 0 1 1 -20 0z"/><path d="M22 40c4-6 12-8 18-8s14 2 18 8l4 56H18z"/><rect x="4" y="38" width="26" height="48" rx="4" opacity=".75"/>',
    dps: '<path d="M31 20a9 9 0 1 1 18 0a9 9 0 1 1 -18 0z"/><path d="M27 36c4-4 9-6 13-6s9 2 13 6l3 60H24z"/><path d="M50 52l26-8 2 5-26 8z" opacity=".8"/>',
    support: '<path d="M31 20a9 9 0 1 1 18 0a9 9 0 1 1 -18 0z"/><path d="M26 36c4-4 9-6 14-6s10 2 14 6l4 60H22z"/><path d="M62 18l3 0 0 78-3 0z" opacity=".8"/><circle cx="63.5" cy="16" r="5" opacity=".9"/>',
  };
  const FOX = '<svg viewBox="0 0 120 60" aria-hidden="true"><path d="M8 40c10-2 20-10 34-10 10 0 18 4 26 4l10-14 4 12 8-10 2 14c6 2 10 6 12 10-6 0-12 2-16 4-8 4-20 6-30 4l-10 8-4-8c-10 0-24-6-36-14z" fill="#ff9ac8"/><path d="M8 40c-4-6-2-14 4-18 0 6 2 10 6 12" fill="#ffd1e6"/><circle cx="92" cy="36" r="2" fill="#14070f"/></svg>';
  const BELL = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4c-8 0-12 7-12 15v8l-4 5h32l-4-5v-8c0-8-4-15-12-15z" fill="#ffd1e6"/><circle cx="20" cy="34" r="3.5" fill="#ff4f9e"/><path d="M14 4h12" stroke="#ff4f9e" stroke-width="3"/></svg>';

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const team = (o.team || TEAM).map(t => ({ ...t, max: t.hp, hp: t.hp, down: 0, anti: 0, inv: 0, heal: 0 }));
      const D = DIFF[o.difficulty] || DIFF.normal, LEN = (o.seconds || 70) * 1000;
      const st = { tut: true, tutRes: 'seen', act: null, t: 0, ammo: 10, reload: 0, suzu: 0, rush: 0, rushOn: 0, events: [], next: 4500, deaths: 0, saves: 0, healed: 0, suzus: 0, rushes: 0, paused: false, over: false };
      const GS0 = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {};
      const still = reduced.matches, calm = o.calm ?? !!GS0.calm, perf = o.perf ?? !!GS0.perf;
      const el = document.createElement('div');
      el.dataset.padnav = ''; el.className = 'mg-sup' + (still ? ' still' : '') + (calm ? ' calm' : '') + (perf ? ' perf' : '');
      el.setAttribute('role', 'application');
      const mapPic = `map-${o.map || (Math.random() < 0.5 ? 'lijiang' : 'busan')}-${1 + Math.floor(Math.random() * 3)}`;
      const petals = Array.from({ length: perf ? 6 : 16 }, () => `<i style="left:${rnd(0, 100).toFixed(1)}%;--dur:${rnd(9, 17).toFixed(1)}s;--del:${(-rnd(0, 17)).toFixed(1)}s;--sx:${rnd(-60, 60).toFixed(0)}px;--sz:${rnd(5, 10).toFixed(1)}px"></i>`).join('');
      el.innerHTML = `
        <div class="mg-bg" aria-hidden="true"><div class="mg-map"><img src="${ART(mapPic)}" alt="" draggable="false" onerror="this.remove()"></div>
          <div class="mg-sweep"></div><div class="mg-torii">${[0, 1, 2, 3, 4].map(k => `<i style="--k:${k}"></i>`).join('')}</div><div class="mg-petals">${petals}</div></div>
        <div class="mg-hands" aria-hidden="true"><div class="mg-hands-stand"><span class="l"></span><span class="r"></span></div><img src="${ART('hands')}" alt="" draggable="false" onerror="this.remove()"></div>
        <div class="mg-top"><span class="mg-live">LIVE</span><b>SYRACUSE</b><span class="mg-clock">1:10</span><b>TOP SEED</b></div>
        <p class="mg-call" aria-live="assertive"></p>
        <ol class="mg-team">${team.map((t, i) => `<li data-i="${i}" tabindex="0" style="--i:${i}"><span class="mg-key">${i + 1}</span>
          <span class="mg-fig" aria-hidden="true"><span class="mg-aura"></span><svg viewBox="0 0 80 100">${SIL[t.role] || SIL.dps}</svg><img src="${ART('team-' + t.id)}" alt="" draggable="false" onerror="this.remove()"><span class="mg-tele"></span></span>
          <b>${esc(t.name)}</b><small>${ROLE[t.role]}</small>
          <span class="mg-hp"><u></u><i></i><em></em></span><span class="mg-tag"></span></li>`).join('')}</ol>
        <div class="mg-kit">
          <span class="mg-ammo"><b>10</b>/10 <small>ofuda</small><span class="mg-pips" aria-hidden="true"></span></span>
          <button class="mg-suzu" type="button">Suzu <small>Space / ✕</small></button>
          <button class="mg-rush" type="button" disabled>Kitsune Rush <small>Q / △</small></button>
        </div>
        <p class="mg-help">Tap a teammate (or 1–4) to heal. Space: Suzu. Q: Rush. Esc: pause.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="howto">How to play</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>
        <ol class="mg-feed" aria-label="Kill feed"></ol>
        <div class="mg-fx" aria-hidden="true"></div>
        <div class="mg-banner" aria-hidden="true"></div>`;
      host.appendChild(el);
      const TUT = () => window.FemcTutorial;
      const lis = [...el.querySelectorAll('.mg-team li')];
      const $ = s => el.querySelector(s);
      // timers that die with the game (the drawn effects only)
      const timers = new Set();
      const later = (fn, ms) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
      const say = (txt, kind = '') => { const c = $('.mg-call'); c.textContent = txt; c.className = 'mg-call on ' + kind; clearTimeout(say.t); say.t = setTimeout(() => c.classList.remove('on'), 1700); };
      const pop = (i, txt, cls) => {
        if (still || !lis[i]) return;
        const p = document.createElement('span'); p.className = 'mg-pop ' + cls; p.textContent = txt; lis[i].appendChild(p); later(() => p.remove(), 800);
      };
      /* ── the drawn effects (Nov 11 visual pass): none of this touches the rules ── */
      const fxL = $('.mg-fx');
      let live = 0;
      const CAP = perf ? 24 : 70;
      const spawn = (cls, x, y, life, vars) => { // one throwaway element in the fx layer, px from the game's top left
        if (still || live >= CAP) return null;
        const n = document.createElement('i'); n.className = cls; n.style.left = `${x.toFixed(1)}px`; n.style.top = `${y.toFixed(1)}px`;
        if (vars) Object.keys(vars).forEach(k => n.style.setProperty(k, vars[k]));
        fxL.appendChild(n); live++; later(() => { n.remove(); live--; }, life); return n;
      };
      const burst = (x, y, n, cls, spread = 60, life = 800) => {
        n = perf ? Math.ceil(n / 3) : n;
        for (let k = 0; k < n; k++) { const a = Math.random() * Math.PI * 2, d = rnd(spread * 0.4, spread); spawn('mg-pt ' + cls, x, y, life, { '--dx': `${(Math.cos(a) * d).toFixed(1)}px`, '--dy': `${(Math.sin(a) * d - spread * 0.3).toFixed(1)}px`, '--del': `${rnd(0, 80).toFixed(0)}ms` }); }
      };
      const box = () => { const r = el.getBoundingClientRect(); return { x: r.left || 0, y: r.top || 0, w: r.width || (r.right - r.left) || 1, h: r.height || (r.bottom - r.top) || 1 }; };
      const centre = node => { // a node's centre in the game's px
        const E = box(), r = node.getBoundingClientRect(); return { x: (r.left + r.right) / 2 - E.x, y: (r.top + r.bottom) / 2 - E.y };
      };
      const handsAt = () => { const E = box(); return { x: E.w * 0.5, y: E.h * 0.9 }; };
      const restart = (node, cls, ms) => { if (!node || still) return; node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); if (ms) later(() => node.classList.remove(cls), ms); };
      const fly = (from, to, cls, ms, trail = true) => { // a thrown thing (ofuda, bell): the paper and a streak behind it
        const dx = to.x - from.x, dy = to.y - from.y, ang = Math.atan2(dy, dx) * 180 / Math.PI, len = Math.hypot(dx, dy);
        if (trail) spawn('mg-streak', from.x, from.y, ms + 260, { '--len': `${len.toFixed(0)}px`, '--ang': `${ang.toFixed(1)}deg`, '--ms': `${ms}ms` });
        return spawn(cls, from.x, from.y, ms, { '--dx': `${dx.toFixed(1)}px`, '--dy': `${dy.toFixed(1)}px`, '--ms': `${ms}ms` });
      };
      const shake = big => { if (!still) restart(el, big ? 'shake-big' : 'shake', 420); };
      const feed = (by, how, on, side) => {
        const f = $('.mg-feed'); if (!f) return;
        const li = document.createElement('li'); li.className = side; li.innerHTML = `<b>${esc(by)}</b><i>${esc(how)}</i><b>${esc(on)}</b>`;
        f.prepend(li); later(() => li.classList.add('old'), 5000); later(() => li.remove(), 6000);
        const all = f.children || []; if (all.length > 5) all[all.length - 1].remove();
      };
      const banner = (big, small = '') => {
        const b = $('.mg-banner'); b.innerHTML = `<b>${esc(big)}</b>${small ? `<small>${esc(small)}</small>` : ''}`;
        restart(b, 'on', 1500); if (still) { b.classList.add('on'); later(() => b.classList.remove('on'), 1500); }
      };
      const hurt = (i, n, by) => {
        const t = team[i]; if (t.down || t.inv > 0) return 0;
        n *= st.rushOn > 0 ? 0.5 : 1;
        t.hp -= n; pop(i, `-${Math.round(n)}`, n >= 50 ? 'dmg big' : 'dmg');
        if (!still) { lis[i].classList.remove('hit'); void lis[i].offsetWidth; lis[i].classList.add('hit'); if (n >= 50) { const c = centre(lis[i]); burst(c.x, c.y - 20, 6, 'spark', 46, 500); } }
        if (t.hp <= 0) { t.hp = 0; t.down = 6000; t.anti = 0; st.deaths++; say(`${t.name} is down.`, 'bad'); feed(by || pick(FOES), '✕', t.name, 'them'); }
        return n;
      };
      const pick = a => a[Math.floor(Math.random() * a.length)];
      const mend = (i, n) => {
        const t = team[i]; if (t.down) return;
        if (t.anti > 0) { pop(i, 'blocked', 'anti'); return; }
        n *= st.rushOn > 0 ? 2 : 1;
        const got = Math.min(n, t.max - t.hp); t.hp += got; st.healed += got; st.rush = Math.min(100, st.rush + got / 22);
        if (got > 0) pop(i, `+${Math.round(got)}`, got >= 20 ? 'heal big' : 'heal');
      };
      let throws = 0;
      const throwOfuda = i => {
        if (st.over || st.paused || team[i].down || st.reload > 0 || st.ammo <= 0) return;
        st.act?.('heal', i); st.ammo--; team[i].heal += 34; lis[i].classList.add('charm'); setTimeout(() => lis[i].classList.remove('charm'), 250);
        if (!st.ammo) st.reload = 1200;
        // drawn: a hand flicks, the ofuda flies to the card and bursts
        const h = $('.mg-hands'); restart(h, (throws++ % 2) ? 'throw-l' : 'throw-r', 260);
        const to = centre(lis[i]), from = handsAt(); from.x += (throws % 2 ? -1 : 1) * box().w * 0.08;
        fly(from, to, 'mg-ofuda', 300);
        later(() => { burst(to.x, to.y, 9, team[i].anti > 0 ? 'anti' : 'heal', 54, 750); spawn('mg-ring heal', to.x, to.y, 600); }, 300);
        restart(el.querySelector('.mg-ammo'), 'tick', 200);
      };
      const suzu = () => {
        if (st.over || st.paused || st.suzu > 0) return;
        st.act?.('suzu'); st.suzu = 10000; st.suzus++;
        let saved = false;
        const before = team.map(t => t.anti > 0);
        st.events.forEach(e => { if (e.at - st.t < 700 && e.at - st.t > -150) { e.blocked = true; saved = true; } });
        team.forEach((t, i) => { if (t.down) return; if (t.anti > 0) saved = saved || true; t.anti = 0; t.inv = 900; mend(i, 25); });
        if (saved) { st.saves++; say('Suzu! Cleansed.', 'good'); feed('sollee', 'Suzu', 'SAVE', 'us'); }
        el.classList.add('suzu-on'); setTimeout(() => el.classList.remove('suzu-on'), 500);
        // drawn: the bell flies up, rings, and a wave washes over every card
        const E = box(), mid = { x: E.w / 2, y: E.h * 0.46 };
        const bell = fly(handsAt(), mid, 'mg-bell', 260, false); if (bell) bell.innerHTML = BELL;
        later(() => {
          const rang = spawn('mg-bell ring', mid.x, mid.y, 800); if (rang) rang.innerHTML = BELL; spawn('mg-wave', mid.x, mid.y, 900); spawn('mg-wave two', mid.x, mid.y, 1100);
          lis.forEach((li, i) => { if (!team[i] || team[i].down) return; const c = centre(li); later(() => { burst(c.x, c.y - 10, 6, 'suzu', 40, 650); const w = before[i] && spawn('mg-word', c.x, c.y - 40, 900); if (w) w.textContent = 'CLEANSED'; }, 120 + i * 50); });
        }, 260);
        restart($('.mg-suzu'), 'press', 220);
      };
      const rush = () => {
        if (st.over || st.paused || st.rush < 100) return;
        st.act?.('rush'); st.rush = 0; st.rushOn = 5000; st.rushes++; say('Kitsune Rush!', 'good');
        // drawn: the fox runs the floor, the torii light up (.rushing)
        const E = box(); const f = spawn('mg-fox', -E.w * 0.1, E.h * 0.62, 1300); if (f) f.innerHTML = FOX;
        banner('KITSUNE RUSH', '5 s · double heals'); feed('sollee', '狐', 'Kitsune Rush', 'us');
        restart($('.mg-rush'), 'press', 220);
      };
      const upIdx = () => team.map((t, i) => i).filter(i => !team[i].down);
      const plan = () => {
        const alive = upIdx(); if (!alive.length) return;
        const kinds = ['nade', 'blade', 'grav', 'dive', 'dive', 'nade'];
        const kind = kinds[Math.floor(Math.random() * kinds.length)];
        let i = alive[Math.floor(Math.random() * alive.length)];
        if (kind === 'blade') { const d = alive.filter(j => team[j].role === 'dps'); if (d.length) i = d[Math.floor(Math.random() * d.length)]; }
        const caller = team.find(t => WHO_CALLS.includes(t.id) && !t.down && t !== team[i]);
        const lines = CALLS[kind](team[i]);
        say(`${caller ? caller.name + ': ' : ''}${lines[Math.floor(Math.random() * lines.length)]}`, 'warn');
        lis[i]?.classList.add('marked'); setTimeout(() => lis[i]?.classList.remove('marked'), 1500);
        st.events.push({ kind, i, at: st.t + 1400 });
        // drawn: the target's reticle names the play; Graviton marks everyone and a vortex gathers over the team
        const marks = kind === 'grav' ? lis : [lis[i]];
        marks.forEach(li => { if (!li) return; li.dataset.tele = kind; const tg = li.querySelector('.mg-tele'); if (tg) tg.textContent = TELE[kind]; later(() => { delete li.dataset.tele; }, 1450); });
        if (kind === 'grav') { el.classList.add('grav-tele'); later(() => el.classList.remove('grav-tele'), 1450); const c = centre($('.mg-team')); spawn('mg-vortex', c.x, c.y, 1900); }
        restart($('.mg-call'), 'slam');
      };
      const land = e => {
        const li = lis[e.i], c = li ? centre(li) : { x: 0, y: 0 };
        if (e.blocked) { // drawn: the Suzu's shield takes it
          (e.kind === 'grav' ? lis : [li]).forEach(n => { if (!n) return; const p = centre(n); spawn('mg-shield', p.x, p.y, 700); });
          return;
        }
        const B = D.burst;
        if (e.kind === 'nade') { hurt(e.i, 60 * B, BY.nade); if (!team[e.i].down) team[e.i].anti = 3000; burst(c.x, c.y, 12, 'anti', 70, 900); spawn('mg-splash', c.x, c.y, 800); }
        if (e.kind === 'blade') { hurt(e.i, 95 * B, BY.blade); spawn('mg-slash', c.x, c.y, 500); shake(); setTimeout(() => { if (st.over) return; hurt(e.i, 70 * B, BY.blade); spawn('mg-slash two', c.x, c.y, 500); }, 450); }
        if (e.kind === 'grav') { team.forEach((t, i) => hurt(i, (t.role === 'tank' ? 110 : 85) * B, BY.grav)); shake(true); const m = centre($('.mg-team')); spawn('mg-implode', m.x, m.y, 700); restart(el, 'grav-hit', 700); }
        if (e.kind === 'dive') { hurt(e.i, 55 * B, BY.dive); burst(c.x, c.y, 7, 'spark', 50, 500); setTimeout(() => { if (st.over) return; hurt(e.i, 55 * B, BY.dive); burst(c.x, c.y, 7, 'spark', 50, 500); }, 350); shake(); }
      };
      const paint = () => {
        team.forEach((t, i) => {
          const li = lis[i]; if (!li) return;
          li.querySelector('.mg-hp i').style.width = `${(t.hp / t.max) * 100}%`;
          li.querySelector('.mg-hp u').style.width = `${((t.gh ?? t.hp) / t.max) * 100}%`;
          li.querySelector('.mg-hp em').textContent = t.down ? `${Math.ceil(t.down / 1000)}s` : Math.ceil(t.hp);
          li.classList.toggle('down', !!t.down); li.classList.toggle('low', !t.down && t.hp / t.max < 0.35);
          li.classList.toggle('anti', t.anti > 0); li.classList.toggle('inv', t.inv > 0);
          li.classList.toggle('mend', t.heal > 0 && !t.down && !(t.anti > 0)); li.classList.toggle('full', !t.down && t.hp >= t.max);
          li.querySelector('.mg-tag').textContent = t.down ? 'DOWN' : t.anti > 0 ? 'ANTI-HEAL' : '';
        });
        $('.mg-ammo b').textContent = st.reload > 0 ? '…' : st.ammo;
        const am = $('.mg-ammo'); am.style.setProperty('--ammo', (st.reload > 0 ? 1 - st.reload / 1200 : st.ammo / 10).toFixed(3)); am.classList.toggle('reloading', st.reload > 0);
        el.classList.toggle('rushing', st.rushOn > 0);
        const sz = $('.mg-suzu'); sz.disabled = st.suzu > 0; sz.style.setProperty('--cd', st.suzu / 10000);
        sz.querySelector('small').textContent = st.suzu > 0 ? `${Math.ceil(st.suzu / 1000)}s` : 'Space';
        const rb = $('.mg-rush'); rb.disabled = st.rush < 100; rb.style.setProperty('--fill', st.rush / 100); rb.classList.toggle('on', st.rushOn > 0);
        rb.classList.toggle('ready', st.rush >= 100 && !(st.rushOn > 0)); sz.classList.toggle('ready', !(st.suzu > 0));
        const left = Math.max(0, LEN - st.t); $('.mg-clock').textContent = st.tut ? 'PRACTICE' : `${Math.floor(left / 60000)}:${String(Math.floor(left / 1000) % 60).padStart(2, '0')}`;
        $('.mg-clock').classList.toggle('warn', !st.tut && !st.over && left <= 10000);
      };
      // the drawn side's own clock: ghost bars, foxfire, the match going on around her (kill feed)
      let feedAt = 6000, fireAt = 0;
      const ambient = dt => {
        team.forEach(t => {
          if (t.gh == null || t.hp >= t.gh) { t.gh = t.hp; t.ghH = 380; }
          else if ((t.ghH -= dt) <= 0) t.gh = Math.max(t.hp, t.gh - t.max * 0.7 * dt / 1000);
        });
        if (st.rushOn > 0 && !still && (fireAt -= dt) <= 0) {
          fireAt = perf ? 420 : 140; const E = box();
          spawn('mg-pt foxfire', rnd(E.w * 0.08, E.w * 0.92), E.h * rnd(0.62, 0.8), 1100, { '--dx': `${rnd(-20, 20).toFixed(0)}px`, '--dy': `${(-rnd(80, 160)).toFixed(0)}px`, '--del': '0ms' });
        }
        if (!st.tut && (feedAt -= dt) <= 0) {
          feedAt = rnd(5000, 9500);
          const up = team.filter(t => !t.down && t.role !== 'support');
          if (up.length) feed(pick(up).name, pick(['✕', '⌖', '✕']), pick(FOES), 'us');
        }
      };
      let last = performance.now(), raf = 0, chipAt = 0;
      const tick = now => {
        const dt = Math.min(100, now - last); last = now;
        if (!st.paused && !st.over) {
          if (!st.tut) st.t += dt;
          if (st.reload > 0 && (st.reload -= dt) <= 0) { st.reload = 0; st.ammo = 10; }
          if (st.suzu > 0) st.suzu = Math.max(0, st.suzu - dt);
          if (st.rushOn > 0) st.rushOn = Math.max(0, st.rushOn - dt);
          team.forEach((t, i) => {
            if (t.down && (t.down -= dt) <= 0) { t.down = 0; t.hp = t.max; }
            if (t.anti > 0) t.anti = Math.max(0, t.anti - dt);
            if (t.inv > 0) t.inv = Math.max(0, t.inv - dt);
            if (t.heal > 0) { const step = Math.min(t.heal, dt * 0.068); t.heal -= step; mend(i, step); }
            if (t.role === 'support' && !t.down && t.hp < t.max) mend(i, dt * 0.004); // Haerin heals herself a little
          });
          if (!st.tut && (chipAt -= dt) <= 0) { chipAt = 500; const a = upIdx(); if (a.length) hurt(a[Math.floor(Math.random() * a.length)], (6 + Math.random() * 10) * D.chip); }
          ambient(dt);
          if (!st.tut && st.t >= st.next && st.t < LEN - 3000) { plan(); st.next = st.t + (3800 + Math.random() * 3200) * D.gap; }
          st.events = st.events.filter(e => { if (st.t >= e.at) { land(e); return false; } return true; });
          if (!st.tut && st.t >= LEN) return finish();
          paint();
        }
        raf = requestAnimationFrame(tick);
      };
      const grade = () => (st.deaths === 0 && st.saves >= 3 ? 'S' : st.deaths <= 1 ? 'A' : st.deaths <= 3 ? 'B' : 'C');
      const finish = (quit = false) => {
        if (st.over) return; st.over = true; cancelAnimationFrame(raf); paint();
        const res = { deaths: st.deaths, saves: st.saves, healed: Math.round(st.healed), suzus: st.suzus, rushes: st.rushes, grade: quit ? 'C' : grade(), time: Math.round(st.t / 1000), quit, tutorial: st.tutRes };
        const end = $('.mg-end'); end.hidden = false; el.classList.add('over');
        const head = quit ? 'MATCH LEFT' : res.deaths === 0 ? 'FLAWLESS' : 'MATCH OVER';
        end.innerHTML = `<p class="mg-end-head">${head}</p><b class="mg-grade g-${res.grade}">${res.grade}</b><dl><dt>Healing</dt><dd data-n="${res.healed}">${still ? res.healed : 0}</dd><dt>Suzu saves</dt><dd data-n="${res.saves}">${still ? res.saves : 0}</dd><dt>Teammates down</dt><dd data-n="${res.deaths}">${still ? res.deaths : 0}</dd></dl><button type="button" data-mg="done">Continue</button>`;
        // drawn: the stats count up after the stamp lands; petals for a good match
        if (!still) {
          const dds = [...end.querySelectorAll('dd[data-n]')];
          dds.forEach((dd, k) => { const n = +dd.dataset.n || 0; for (let f = 1; f <= 20; f++) later(() => { dd.textContent = Math.round(n * f / 20); }, 520 + k * 160 + f * 32); });
          if ((res.grade === 'S' || res.grade === 'A') && !quit) { const E = box(); for (let k = 0; k < (perf ? 8 : 24); k++) later(() => spawn('mg-pt petal', rnd(0, E.w), -20, 2600, { '--dx': `${rnd(-80, 80).toFixed(0)}px`, '--dy': `${(E.h * rnd(0.7, 1.05)).toFixed(0)}px`, '--del': '0ms' }), 500 + k * 60); }
        }
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };
      const key = e => {
        if (st.over) return;
        const T = TUT(); if (T && T.open() && (e.key === 'Escape' || T.blocking())) return; // the tutorial has the keys
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; el.classList.toggle('paused', st.paused); if (st.paused) $('.mg-pause button').focus(); return; }
        if (st.paused) return;
        if (/^[1-4]$/.test(e.key)) { e.preventDefault(); if (!e.repeat) throwOfuda(+e.key - 1); }
        else if (e.key === ' ') { e.preventDefault(); suzu(); }
        else if (e.key === 'q' || e.key === 'Q') rush();
        else if (e.key === 'r' || e.key === 'R') { if (st.ammo < 10 && !st.reload) st.reload = 1200; }
      };
      // the controller (battle/pad.js reads this at each press): ← ↓ ↑ → = 1-4, ✕ = Space, △ = Q
      const padMap = k => { if (st.over || st.paused || !el.isConnected) return; return { ArrowLeft: '1', ArrowDown: '2', ArrowUp: '3', ArrowRight: '4', Enter: ' ', y: 'q' }[k]; };
      if (window.FemcPad) window.FemcPad.remap = padMap;
      const cleanup = () => { if (window.FemcPad && window.FemcPad.remap === padMap) window.FemcPad.remap = null; cancelAnimationFrame(raf); timers.forEach(clearTimeout); timers.clear(); window.removeEventListener('keydown', key, true); el.remove(); };
      lis.forEach((li, i) => li.addEventListener('pointerdown', e => { e.preventDefault(); if (TUT()?.blocking()) return; throwOfuda(i); }));
      $('.mg-suzu').onclick = suzu; $('.mg-rush').onclick = rush;
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; el.classList.remove('paused'); } if (b === 'howto') howTo(); if (b === 'quit') finish(true); };
      window.addEventListener('keydown', key, true);

      /* the tutorial: Minji runs a practice fight (clock stopped, no damage coming in); live = it changes the practice state
         (the first time), else a walkthrough over the paused game (How to play) */
      const FACE = f => `${base()}assets/femc/portraits/minji-runners-regionals/${f}.webp`;
      const until = kind => ctx => new Promise(ok => { const prev = st.act; st.act = (k, i) => { prev?.(k, i); if (k === kind && (kind !== 'heal' || i === 2)) { st.act = prev; ok(); } }; });
      const steps = live => [
        { target: '.mg-team', say: 'Practice round, Sol. The clock\'s stopped. Four of us, one of you: keep these bars full.', face: FACE('happy') },
        { target: () => lis[2], say: 'Olivia\'s low. <b>Tap her</b> (or press <b>3</b>; on a controller the D-pad is the four of us, ← ↓ ↑ →, so <b>↑</b>) to throw a healing ofuda.', wait: live ? until('heal') : 'click', face: FACE('serious'),
          before: () => { if (live) { team[2].hp = 50; paint(); } } },
        { target: '.mg-ammo', say: 'Ten ofuda, then a quick reload. <b>R</b> (<b>R2</b>) reloads early.', face: FACE('neutral') },
        { target: '.mg-suzu', say: 'I\'m naded: heals bounce off me. Ring the <b>Suzu</b> (Space / <b>✕</b> or this bell) to cleanse it.', wait: live ? until('suzu') : 'click', face: FACE('surprised'),
          before: () => { if (live) { team[1].hp = 110; team[1].anti = 1e9; st.suzu = 0; paint(); } } },
        { target: '.mg-call', say: 'Big plays get called out here first. A Suzu right as one lands blocks it: that\'s a save.', face: FACE('serious') },
        { target: '.mg-rush', say: 'Healing fills <b>Kitsune Rush</b>. It\'s full: press <b>Q</b> (<b>△</b>, or tap it). Less damage, double heals.', wait: live ? until('rush') : 'click', face: FACE('happy'),
          before: () => { if (live) { st.rush = 100; paint(); } } },
        { target: null, say: 'That\'s it. Seventy seconds, nobody goes down. Esc (○) pauses. Ready?', face: FACE('happy') },
      ];
      const tutOpts = T => { const GS = (window.FemcGame && window.FemcGame.settings && window.FemcGame.settings()) || {}; return { who: 'Minji', calm: o.calm ?? !!GS.calm, perf: o.perf ?? !!GS.perf }; };
      const howTo = () => {
        const T = TUT(); if (!T) return;
        $('.mg-pause').hidden = true;
        T.run(el, { ...tutOpts(T), id: 'support', replay: true, steps: steps(false) }).then(() => { if (!st.over) { $('.mg-pause').hidden = false; $('.mg-pause [data-mg=resume]').focus(); } });
      };
      const begin = () => { // the real thing, from a clean slate
        Object.assign(st, { tut: false, act: null, t: 0, ammo: 10, reload: 0, suzu: 0, rush: 0, rushOn: 0, events: [], next: 4500, deaths: 0, saves: 0, healed: 0, suzus: 0, rushes: 0 });
        team.forEach(t => Object.assign(t, { hp: t.max, down: 0, anti: 0, inv: 0, heal: 0 })); chipAt = 0;
        team.forEach(t => { t.gh = t.hp; }); feedAt = 6000;
        say('Haerin: Okay. Same as practice. Keep them up, Sol.', ''); paint();
        // drawn: a slash wipes the practice away, then the match banner
        const E = box(); spawn('mg-wipe', 0, 0, 700); later(() => banner('MATCH START', 'Regionals · Syracuse vs Top Seed'), 200);
        if (E.w) lis.forEach((li, i) => restart(li, 'enter', 700 + i * 80));
      };
      o.hook?.({ st, team, throwOfuda, suzu, rush, el });
      paint(); raf = requestAnimationFrame(tick);
      (o.tutorial === false ? Promise.resolve(null) : tutLib()).then(T => {
        if (st.over) return;
        if (!T || !T.should('support', o.tutorial)) return begin();
        T.run(el, { ...tutOpts(T), id: 'support', steps: steps(true) }).then(r => { st.tutRes = r; begin(); });
      });
    });
  }
  return { play, TEAM };
})();
