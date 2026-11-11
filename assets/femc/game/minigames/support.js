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
   The other side: steady chip damage, plus telegraphed plays called out over comms ~1.4 s before they land:
     Ana nade  (anti-heal on one teammate for 3 s: heals do nothing until a Suzu cleanses it)
     Dragonblade (a big burst on one DPS)   Graviton (heavy damage to everyone at once)   Dive (two quick hits on one target)
   A teammate at 0 HP is down for 6 s, then back at full. Grade from deaths and saves.
   Pink and black; reduced motion: no shakes or floating numbers. Esc pauses (Resume / Quit). */
window.FemcSupport = (() => {
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

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body;
      const team = (o.team || TEAM).map(t => ({ ...t, max: t.hp, hp: t.hp, down: 0, anti: 0, inv: 0, heal: 0 }));
      const D = DIFF[o.difficulty] || DIFF.normal, LEN = (o.seconds || 70) * 1000;
      const st = { t: 0, ammo: 10, reload: 0, suzu: 0, rush: 0, rushOn: 0, events: [], next: 4500, deaths: 0, saves: 0, healed: 0, suzus: 0, rushes: 0, paused: false, over: false };
      const el = document.createElement('div');
      el.className = 'mg-sup' + (reduced.matches ? ' still' : '');
      el.setAttribute('role', 'application');
      el.innerHTML = `
        <div class="mg-top"><span class="mg-live">LIVE</span><b>SYRACUSE</b><span class="mg-clock">1:10</span><b>TOP SEED</b></div>
        <p class="mg-call" aria-live="assertive"></p>
        <ol class="mg-team">${team.map((t, i) => `<li data-i="${i}" tabindex="0"><span class="mg-key">${i + 1}</span><b>${esc(t.name)}</b><small>${ROLE[t.role]}</small>
          <span class="mg-hp"><i></i><em></em></span><span class="mg-tag"></span></li>`).join('')}</ol>
        <div class="mg-kit">
          <span class="mg-ammo"><b>10</b>/10 <small>ofuda</small></span>
          <button class="mg-suzu" type="button">Suzu <small>Space</small></button>
          <button class="mg-rush" type="button" disabled>Kitsune Rush <small>Q</small></button>
        </div>
        <p class="mg-help">Tap a teammate (or 1–4) to heal. Space: Suzu. Q: Rush. Esc: pause.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const lis = [...el.querySelectorAll('.mg-team li')];
      const $ = s => el.querySelector(s);
      const say = (txt, kind = '') => { const c = $('.mg-call'); c.textContent = txt; c.className = 'mg-call on ' + kind; clearTimeout(say.t); say.t = setTimeout(() => c.classList.remove('on'), 1700); };
      const pop = (i, txt, cls) => {
        if (reduced.matches) return;
        const p = document.createElement('span'); p.className = 'mg-pop ' + cls; p.textContent = txt; lis[i].appendChild(p); setTimeout(() => p.remove(), 800);
      };
      const hurt = (i, n) => {
        const t = team[i]; if (t.down || t.inv > 0) return 0;
        n *= st.rushOn > 0 ? 0.5 : 1;
        t.hp -= n; pop(i, `-${Math.round(n)}`, 'dmg');
        if (!reduced.matches) { lis[i].classList.remove('hit'); void lis[i].offsetWidth; lis[i].classList.add('hit'); }
        if (t.hp <= 0) { t.hp = 0; t.down = 6000; t.anti = 0; st.deaths++; say(`${t.name} is down.`, 'bad'); }
        return n;
      };
      const mend = (i, n) => {
        const t = team[i]; if (t.down) return;
        if (t.anti > 0) { pop(i, 'blocked', 'anti'); return; }
        n *= st.rushOn > 0 ? 2 : 1;
        const got = Math.min(n, t.max - t.hp); t.hp += got; st.healed += got; st.rush = Math.min(100, st.rush + got / 22);
        if (got > 0) pop(i, `+${Math.round(got)}`, 'heal');
      };
      const throwOfuda = i => {
        if (st.over || st.paused || team[i].down || st.reload > 0 || st.ammo <= 0) return;
        st.ammo--; team[i].heal += 34; lis[i].classList.add('charm'); setTimeout(() => lis[i].classList.remove('charm'), 250);
        if (!st.ammo) st.reload = 1200;
      };
      const suzu = () => {
        if (st.over || st.paused || st.suzu > 0) return;
        st.suzu = 10000; st.suzus++;
        let saved = false;
        st.events.forEach(e => { if (e.at - st.t < 700 && e.at - st.t > -150) { e.blocked = true; saved = true; } });
        team.forEach((t, i) => { if (t.down) return; if (t.anti > 0) saved = saved || true; t.anti = 0; t.inv = 900; mend(i, 25); });
        if (saved) { st.saves++; say('Suzu! Cleansed.', 'good'); }
        el.classList.add('suzu-on'); setTimeout(() => el.classList.remove('suzu-on'), 500);
      };
      const rush = () => {
        if (st.over || st.paused || st.rush < 100) return;
        st.rush = 0; st.rushOn = 5000; st.rushes++; say('Kitsune Rush!', 'good');
      };
      const pick = () => team.map((t, i) => i).filter(i => !team[i].down);
      const plan = () => {
        const alive = pick(); if (!alive.length) return;
        const kinds = ['nade', 'blade', 'grav', 'dive', 'dive', 'nade'];
        const kind = kinds[Math.floor(Math.random() * kinds.length)];
        let i = alive[Math.floor(Math.random() * alive.length)];
        if (kind === 'blade') { const d = alive.filter(j => team[j].role === 'dps'); if (d.length) i = d[Math.floor(Math.random() * d.length)]; }
        const caller = team.find(t => WHO_CALLS.includes(t.id) && !t.down && t !== team[i]);
        const lines = CALLS[kind](team[i]);
        say(`${caller ? caller.name + ': ' : ''}${lines[Math.floor(Math.random() * lines.length)]}`, 'warn');
        lis[i]?.classList.add('marked'); setTimeout(() => lis[i]?.classList.remove('marked'), 1500);
        st.events.push({ kind, i, at: st.t + 1400 });
      };
      const land = e => {
        if (e.blocked) return;
        const B = D.burst;
        if (e.kind === 'nade') { hurt(e.i, 60 * B); if (!team[e.i].down) team[e.i].anti = 3000; }
        if (e.kind === 'blade') { hurt(e.i, 95 * B); setTimeout(() => !st.over && hurt(e.i, 70 * B), 450); }
        if (e.kind === 'grav') team.forEach((t, i) => hurt(i, (t.role === 'tank' ? 110 : 85) * B));
        if (e.kind === 'dive') { hurt(e.i, 55 * B); setTimeout(() => !st.over && hurt(e.i, 55 * B), 350); }
      };
      const paint = () => {
        team.forEach((t, i) => {
          const li = lis[i];
          li.querySelector('.mg-hp i').style.width = `${(t.hp / t.max) * 100}%`;
          li.querySelector('.mg-hp em').textContent = t.down ? `${Math.ceil(t.down / 1000)}s` : Math.ceil(t.hp);
          li.classList.toggle('down', !!t.down); li.classList.toggle('low', !t.down && t.hp / t.max < 0.35);
          li.classList.toggle('anti', t.anti > 0); li.classList.toggle('inv', t.inv > 0);
          li.querySelector('.mg-tag').textContent = t.down ? 'DOWN' : t.anti > 0 ? 'ANTI-HEAL' : '';
        });
        $('.mg-ammo b').textContent = st.reload > 0 ? '…' : st.ammo;
        const sz = $('.mg-suzu'); sz.disabled = st.suzu > 0; sz.style.setProperty('--cd', st.suzu / 10000);
        sz.querySelector('small').textContent = st.suzu > 0 ? `${Math.ceil(st.suzu / 1000)}s` : 'Space';
        const rb = $('.mg-rush'); rb.disabled = st.rush < 100; rb.style.setProperty('--fill', st.rush / 100); rb.classList.toggle('on', st.rushOn > 0);
        const left = Math.max(0, LEN - st.t); $('.mg-clock').textContent = `${Math.floor(left / 60000)}:${String(Math.floor(left / 1000) % 60).padStart(2, '0')}`;
      };
      let last = performance.now(), raf = 0, chipAt = 0;
      const tick = now => {
        const dt = Math.min(100, now - last); last = now;
        if (!st.paused && !st.over) {
          st.t += dt;
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
          if ((chipAt -= dt) <= 0) { chipAt = 500; const a = pick(); if (a.length) hurt(a[Math.floor(Math.random() * a.length)], (6 + Math.random() * 10) * D.chip); }
          if (st.t >= st.next && st.t < LEN - 3000) { plan(); st.next = st.t + (3800 + Math.random() * 3200) * D.gap; }
          st.events = st.events.filter(e => { if (st.t >= e.at) { land(e); return false; } return true; });
          if (st.t >= LEN) return finish();
          paint();
        }
        raf = requestAnimationFrame(tick);
      };
      const grade = () => (st.deaths === 0 && st.saves >= 3 ? 'S' : st.deaths <= 1 ? 'A' : st.deaths <= 3 ? 'B' : 'C');
      const finish = (quit = false) => {
        if (st.over) return; st.over = true; cancelAnimationFrame(raf); paint();
        const res = { deaths: st.deaths, saves: st.saves, healed: Math.round(st.healed), suzus: st.suzus, rushes: st.rushes, grade: quit ? 'C' : grade(), time: Math.round(st.t / 1000), quit };
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${res.grade}</b><dl><dt>Healing</dt><dd>${res.healed}</dd><dt>Suzu saves</dt><dd>${res.saves}</dd><dt>Teammates down</dt><dd>${res.deaths}</dd></dl><button type="button" data-mg="done">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };
      const key = e => {
        if (st.over) return;
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; return; }
        if (st.paused) return;
        if (/^[1-4]$/.test(e.key)) { e.preventDefault(); throwOfuda(+e.key - 1); }
        else if (e.key === ' ') { e.preventDefault(); suzu(); }
        else if (e.key === 'q' || e.key === 'Q') rush();
        else if (e.key === 'r' || e.key === 'R') { if (st.ammo < 10 && !st.reload) st.reload = 1200; }
      };
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); el.remove(); };
      lis.forEach((li, i) => li.addEventListener('pointerdown', e => { e.preventDefault(); throwOfuda(i); }));
      $('.mg-suzu').onclick = suzu; $('.mg-rush').onclick = rush;
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') finish(true); };
      window.addEventListener('keydown', key, true);
      say('Haerin: Okay. Same as practice. Keep them up, Sol.', '');
      paint(); raf = requestAnimationFrame(tick);
    });
  }
  return { play, TEAM };
})();
