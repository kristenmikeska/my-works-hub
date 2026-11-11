/* FEMC epilogue minigame: Regionals (Nov 10 2026, Kat: version C of the support minigame, "as close to actually feeling like
   Overwatch as we can get it"; EPILOGUE-EXPANSION-PLAN.md step 2, art list FEMC-ART-TODO 43). Replaces support.js as the Regionals
   game; support.js stays as the simple version. Standalone: nothing in the story calls it yet (try it at
   mockups/minigames/regionals.html).

   FemcRegionals.play({ host, rounds, mute, difficulty, onDone }) -> Promise<result>
     rounds      best of (default 3)   difficulty 'easy' | 'normal' | 'hard'   mute  no sound
   result = { won, rounds: [{ map, won }], elims, soloKills, deaths (Solar), teamDeaths, healed, saves, steps, rushes, potg, grade }
     potg = { kind, text, score } (the Play of the Game: the best moment of the match)

   The view: over Solar's shoulder (Kiriko). The map fills the screen; her team stands in it facing the camera (Kat's
   team art, kept Nov 11 2026) (Chenle on Reinhardt in front, Minji on Ashe, Olivia on Tracer, Haerin on Ana); the other team (Zarya, Genji, Ana, Lúcio,
   Cassidy) pops out of cover, attacks, ducks back. Her hands are at the bottom.
   Controls: aim with the mouse (a crosshair).
     Left click  kunai at the crosshair (15, reload 1.5 s; a head hit crits)    Right click  ofuda heal to the teammate you aim at
     1-4  ofuda to that teammate   Space  Protection Suzu (cleanse, a moment of invulnerability, a little heal; 12 s)
     Shift  Swift Step (teleport to a teammate: dodges a dive on Solar; 7 s)   Q  Kitsune Rush (ult, fills as she heals and hits)
     Esc  pause. Touch: tap an enemy to throw kunai, tap a teammate to heal, buttons for the rest.
   The round: a control point (the bar at the top). The side with more players up takes it; first to 100% wins the round.
   The other team's plays are called out over comms before they land: Ana's sleep on Chenle, Ana's nade (anti-heal), Genji diving
   Solar (Swift Step or kill him), Dragonblade, Graviton Surge, Lúcio's Sound Barrier. A Suzu inside a big hit's window is a save.
   Kill feed top right, Play of the Game at the end (her best moment: a quick multi-kill, a solo kill on her diver, a Suzu save).

   Art (FEMC-ART-TODO 43; cut by tools/femc-minigame-art.py into assets/femc/game/art/minigames/ow/; all in since art batch 150
   but the player cards): map-lijiang-1..3, map-busan-1..3 (each round picks one of its map's three at random; then plain
   map-<id>), hands, team-chenle / -minji / -olivia / -haerin, foe-zarya / -genji / -ana / -lucio / -cassidy, potg-kiriko,
   victory / defeat (behind the round card's big word, and faintly behind the match's end screen). Any picture that isn't
   there is drawn as a stand-in (a coloured silhouette with the hero's name), so the game plays without the art. img() takes
   fallback names (data-alts), tried in order by one error listener on the game's root before the picture is dropped.
   Sounds: Web Audio, made in the browser (no files). Reduced motion: no shakes. */
window.FemcRegionals = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const base = () => (window.FemcGame && window.FemcGame.base) || (document.querySelector('script[src*="minigames/regionals.js"]')?.src.split('assets/')[0]) || '';
  const ART = id => `${base()}assets/femc/game/art/minigames/ow/${id}.webp`;
  const MAPS = [{ id: 'lijiang', name: 'Lijiang Tower · Night Market', sky: ['#1b1440', '#4a1b3d'], pics: 3 }, { id: 'busan', name: 'Busan · Downtown', sky: ['#ff8a6b', '#5a2a6b'], pics: 3 }];
  // Kat's picks (Nov 10): Chenle tank, Minji and Olivia DPS, Haerin and Solar support. x / y / h: % of the stage (feet at y).
  const TEAM = [
    { id: 'chenle', handle: 'chenle', hero: 'Reinhardt', role: 'tank', hp: 650, dps: 26, x: 42, y: 92, h: 52, col: '#c9d3e0' },
    { id: 'minji', handle: 'minjibear', hero: 'Ashe', role: 'dps', hp: 250, dps: 34, x: 20, y: 88, h: 42, col: '#e8e0d0' },
    { id: 'olivia', handle: 'oliviahye', hero: 'Tracer', role: 'dps', hp: 175, dps: 30, x: 64, y: 86, h: 38, col: '#ff9d3c' },
    { id: 'haerin', handle: 'haerin.k', hero: 'Ana', role: 'support', hp: 250, dps: 12, x: 82, y: 90, h: 40, col: '#4f7bd0' },
  ];
  const FOES = [
    { id: 'zarya', hero: 'Zarya', role: 'tank', hp: 650, dps: 30, col: '#ff7fbf' },
    { id: 'genji', hero: 'Genji', role: 'dps', hp: 250, dps: 34, col: '#8dffb0' },
    { id: 'cassidy', hero: 'Cassidy', role: 'dps', hp: 250, dps: 30, col: '#c98b5a' },
    { id: 'ana', hero: 'Ana', role: 'support', hp: 250, dps: 14, col: '#4f7bd0' },
    { id: 'lucio', hero: 'Lúcio', role: 'support', hp: 225, dps: 14, col: '#b8ff4f' },
  ];
  const SPOTS = [{ x: 14, y: 52, h: 24 }, { x: 31, y: 47, h: 21 }, { x: 50, y: 44, h: 19 }, { x: 68, y: 47, h: 21 }, { x: 86, y: 52, h: 24 }, { x: 40, y: 56, h: 27 }, { x: 60, y: 56, h: 27 }];
  const DIFF = { easy: { dmg: 0.65, gap: 1.35, hp: 0.85 }, normal: { dmg: 1, gap: 1, hp: 1 }, hard: { dmg: 1.3, gap: 0.8, hp: 1.15 } };
  const pick = a => a[Math.floor(Math.random() * a.length)];

  /* ── sounds (Web Audio, no files) ── */
  function sfx(muted) {
    let ac = null;
    const ctx = () => { if (muted) return null; try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); return ac; } catch (e) { return null; } };
    const tone = (f, dur, type = 'sine', g = 0.2, at = 0, slide) => {
      const a = ctx(); if (!a) return; const t = a.currentTime + at, o = a.createOscillator(), v = a.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
      v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(g, t + 0.01); v.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(v); v.connect(a.destination); o.start(t); o.stop(t + dur + 0.05);
    };
    const hiss = (dur, f = 2000, g = 0.15, at = 0) => {
      const a = ctx(); if (!a) return; const t = a.currentTime + at, n = Math.ceil(a.sampleRate * dur), b = a.createBuffer(1, n, a.sampleRate), d = b.getChannelData(0);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
      const s = a.createBufferSource(), fl = a.createBiquadFilter(), v = a.createGain(); s.buffer = b; fl.type = 'bandpass'; fl.frequency.value = f; v.gain.value = g;
      s.connect(fl); fl.connect(v); v.connect(a.destination); s.start(t);
    };
    return {
      kunai: () => hiss(0.08, 3200, 0.12),
      hit: () => tone(520, 0.06, 'square', 0.06),
      crit: () => { tone(1180, 0.09, 'triangle', 0.14); tone(1580, 0.12, 'triangle', 0.1, 0.05); },
      heal: () => { tone(880, 0.12, 'sine', 0.08, 0, 1320); },
      suzu: () => { [1318, 1760, 2093].forEach((f, i) => tone(f, 0.6, 'sine', 0.12, i * 0.04)); },
      step: () => { hiss(0.25, 900, 0.18); tone(300, 0.25, 'sine', 0.1, 0, 900); },
      rush: () => { tone(220, 0.8, 'sawtooth', 0.08, 0, 880); hiss(0.6, 1500, 0.12); },
      elim: () => { tone(988, 0.08, 'square', 0.1); tone(1319, 0.14, 'square', 0.1, 0.08); },
      down: () => tone(330, 0.5, 'sine', 0.12, 0, 110),
      warn: () => { tone(740, 0.1, 'square', 0.07); tone(740, 0.1, 'square', 0.07, 0.15); },
      horn: () => { tone(196, 0.9, 'sawtooth', 0.1); tone(247, 0.9, 'sawtooth', 0.08); },
      win: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.35, 'triangle', 0.12, i * 0.12)),
      lose: () => [392, 330, 262].forEach((f, i) => tone(f, 0.45, 'triangle', 0.1, i * 0.15)),
      close: () => { try { ac && ac.close(); } catch (e) {} },
    };
  }

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, D = DIFF[o.difficulty] || DIFF.normal, BEST = o.rounds || 3, NEED = Math.ceil(BEST / 2);
      const S = sfx(!!o.mute);
      const M = { rounds: [], elims: 0, soloKills: 0, deaths: 0, teamDeaths: 0, healed: 0, saves: 0, steps: 0, rushes: 0, moments: [] };
      const el = document.createElement('div');
      el.className = 'mg-ow' + (reduced.matches ? ' still' : '');
      el.innerHTML = `
        <div class="ow-stage"><div class="ow-map"></div><div class="ow-foes"></div><div class="ow-team"></div><div class="ow-fx"></div><div class="ow-hands"></div>
          <div class="ow-cross" aria-hidden="true"><i></i></div></div>
        <div class="ow-hud">
          <div class="ow-obj"><span class="us">SYRACUSE</span><div class="bar"><i class="u"></i><i class="t"></i></div><span class="them">TOP SEED</span><small class="ow-round"></small></div>
          <p class="ow-call" aria-live="assertive"></p>
          <ol class="ow-feed" aria-label="Kill feed"></ol>
          <div class="ow-me"><b>Kiriko</b><small>sollee</small><span class="ow-mehp"><i></i><em></em></span></div>
          <div class="ow-kit">
            <span class="ow-ammo" title="Kunai (left click)"><b>15</b><small>kunai</small></span>
            <span class="ow-ammo heal" title="Ofuda (right click / 1-4)"><b>10</b><small>ofuda</small></span>
            <button type="button" class="ow-ab" data-ab="step">Swift Step<small>Shift</small></button>
            <button type="button" class="ow-ab" data-ab="suzu">Suzu<small>Space</small></button>
            <button type="button" class="ow-ab ult" data-ab="rush"><span class="ring"></span>Kitsune Rush<small>Q</small></button>
          </div>
        </div>
        <div class="ow-card" hidden></div>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s), stage = $('.ow-stage');
      const img = (id, alt, alts = [], cls = '') => `<img src="${ART(id)}" alt="${esc(alt || '')}" draggable="false"${cls ? ` class="${cls}"` : ''}${alts.length ? ` data-alts="${alts.join(' ')}"` : ''}>`;
      el.addEventListener('error', e => { // a missing picture: try its next name, else drop it (the drawn stand-in shows)
        const i = e.target; if (i.tagName !== 'IMG') return;
        const a = (i.dataset.alts || '').split(' ').filter(Boolean);
        if (a.length) { i.dataset.alts = a.slice(1).join(' '); i.src = ART(a[0]); } else i.remove();
      }, true);

      // hands
      $('.ow-hands').innerHTML = `<div class="ow-hands-stand"><span class="l"></span><span class="r"></span></div>${img('hands', '')}`;
      const fig = (who, kind) => `<div class="ow-body" style="--c:${who.col}"><div class="ow-stand"><span class="hd"></span><span class="bd"></span><b>${esc(who.hero)}</b></div>${img(`${kind}-${who.id}`, who.hero)}</div>`;

      let R = null, raf = 0, last = 0, paused = false, over = false, mouse = { x: 50, y: 50 };
      const say = (t, kind = '') => { const c = $('.ow-call'); c.textContent = t; c.className = 'ow-call on ' + kind; clearTimeout(say.t); say.t = setTimeout(() => c.classList.remove('on'), 1800); };
      const feed = (by, how, on, us) => {
        const li = document.createElement('li'); li.className = us ? 'us' : 'them';
        li.innerHTML = `<b>${esc(by)}</b><i>${esc(how)}</i><b>${esc(on)}</b>`;
        $('.ow-feed').prepend(li); setTimeout(() => li.classList.add('old'), 6000); setTimeout(() => li.remove(), 7000);
        const all = $('.ow-feed').children; if (all.length > 6) all[all.length - 1].remove();
      };
      const pop = (x, y, txt, cls) => {
        if (reduced.matches && cls !== 'big') return;
        const p = document.createElement('span'); p.className = 'ow-pop ' + cls; p.textContent = txt; p.style.left = x + '%'; p.style.top = y + '%';
        $('.ow-fx').appendChild(p); setTimeout(() => p.remove(), 900);
      };
      const moment = (kind, text, score) => M.moments.push({ kind, text, score, round: M.rounds.length + 1 });

      function startRound() {
        const map = MAPS[M.rounds.length % MAPS.length];
        $('.ow-map').innerHTML = `<div class="ow-map-stand" style="--a:${map.sky[0]};--b:${map.sky[1]}"><span class="pt"></span></div>${img(`map-${map.id}-${1 + Math.floor(Math.random() * map.pics)}`, map.name, ['map-' + map.id])}`;
        $('.ow-round').textContent = `Round ${M.rounds.length + 1} · ${map.name}`;
        const team = TEAM.map(t => ({ ...t, max: t.hp, down: 0, anti: 0, sleep: 0, inv: 0, heal: 0 }));
        const foes = FOES.map((f, i) => ({ ...f, max: Math.round(f.hp * D.hp), hp: Math.round(f.hp * D.hp), down: 0, state: 'hid', t: 1500 + i * 700, spot: -1, target: null, lastHitBy: null }));
        $('.ow-team').innerHTML = team.map((t, i) => `<div class="ow-mate" data-i="${i}" style="left:${t.x}%;top:${t.y}%;--h:${t.h}%">${fig(t, 'team')}<span class="ow-tag"><b>${esc(t.handle)}</b><span class="hp"><i></i></span><em class="st"></em><kbd>${i + 1}</kbd></span></div>`).join('');
        $('.ow-foes').innerHTML = foes.map((f, i) => `<div class="ow-foe" data-i="${i}" hidden>${fig(f, 'foe')}<span class="ow-tag"><span class="hp"><i></i></span></span></div>`).join('');
        R = { map, team, foes, me: { hp: 200, max: 200, down: 0, inv: 0, dove: null }, us: 0, them: 0, t: 0,  kAmmo: 15, kReload: 0, kCd: 0, hAmmo: 10, hReload: 0, suzu: 0, step: 0, rush: 0, rushOn: 0,
          events: [], next: 6000, killsAt: [], over: false };
        say(pick(['Haerin: Same as practice. Keep them up, Sol.', 'Chenle: Shield up. Walking in.', 'Minji: I\'ve got high ground.']));
        S.horn();
      }
      const mates = () => [...el.querySelectorAll('.ow-mate')], foeEls = () => [...el.querySelectorAll('.ow-foe')];
      const aliveUs = () => R.team.filter(t => !t.down).length + (R.me.down ? 0 : 1);
      const aliveThem = () => R.foes.filter(f => !f.down).length;

      // damage to our side
      const hurtMate = (i, n, by) => {
        const t = R.team[i]; if (t.down || t.inv > 0) return;
        n *= D.dmg * (R.rushOn > 0 ? 0.6 : 1); t.hp -= n;
        if (!reduced.matches) { const m = mates()[i]; m.classList.remove('hit'); void m.offsetWidth; m.classList.add('hit'); }
        if (t.hp <= 0) { t.hp = 0; t.down = 8000; t.anti = 0; t.sleep = 0; M.teamDeaths++; feed(by || 'Top Seed', '✕', t.handle, false); S.down(); }
      };
      const hurtMe = (n, by) => {
        if (R.me.down || R.me.inv > 0) return;
        n *= D.dmg * (R.rushOn > 0 ? 0.6 : 1); R.me.hp -= n; el.classList.remove('ouch'); void el.offsetWidth; el.classList.add('ouch');
        if (R.me.hp <= 0) { R.me.hp = 0; R.me.down = 8000; R.me.dove = null; M.deaths++; feed(by || 'Top Seed', '✕', 'sollee', false); say(`You were eliminated by ${by || 'Top Seed'}.`, 'bad'); S.down(); el.classList.add('dead'); }
      };
      const mend = (i, n) => {
        const t = R.team[i]; if (t.down) return 0;
        if (t.anti > 0) return 0;
        n *= R.rushOn > 0 ? 1.5 : 1; const got = Math.min(n, t.max - t.hp); t.hp += got; M.healed += got; R.rush = Math.min(100, R.rush + got / 18); return got;
      };
      const killFoe = (j, by, solar) => {
        const f = R.foes[j]; if (f.down) return;
        f.hp = 0; f.down = 9000; f.state = 'hid'; f.spot = -1; foeEls()[j].hidden = true;
        feed(by.handle || by, solar ? 'kunai' : '▸', f.hero, true); S.elim();
        if (solar) {
          M.elims++; R.killsAt.push(R.t); R.rush = Math.min(100, R.rush + 12);
          const quick = R.killsAt.filter(t => R.t - t < 4000).length;
          if (quick >= 2) moment('multi', `${quick} eliminations in 4 seconds`, 40 * quick);
          if (R.me.dove === j) { M.soloKills++; moment('solo', `Killed her own diver, ${f.hero}, before he could finish`, 70); R.me.dove = null; }
          pop(mouse.x, mouse.y - 4, 'ELIMINATED', 'big');
        }
        if (R.me.dove === j) R.me.dove = null;
      };
      const hurtFoe = (j, n, by, solar, crit) => {
        const f = R.foes[j]; if (f.down || f.state === 'hid') return;
        n *= R.rushOn > 0 ? 1.5 : 1; f.hp -= n; f.lastHitBy = by;
        if (solar) { R.rush = Math.min(100, R.rush + n / 40); crit ? S.crit() : S.hit(); }
        if (f.hp <= 0) killFoe(j, by, solar);
      };

      // Solar's kit
      const kunai = () => {
        if (!R || R.over || paused || R.me.down || R.kReload > 0 || R.kCd > 0 || R.kAmmo <= 0) return;
        R.kAmmo--; R.kCd = R.rushOn > 0 ? 260 : 520; S.kunai(); if (!R.kAmmo) R.kReload = 1500;
        $('.ow-hands').classList.remove('throw'); void $('.ow-hands').offsetWidth; $('.ow-hands').classList.add('throw');
        const hit = foeAt(mouse);
        if (hit) { hurtFoe(hit.j, hit.head ? 95 : 40, { handle: 'sollee' }, true, hit.head); pop(mouse.x, mouse.y, hit.head ? '✦ 95' : '40', hit.head ? 'crit' : 'dmg'); }
      };
      const ofuda = i => {
        if (!R || R.over || paused || R.me.down || R.hReload > 0 || R.hAmmo <= 0 || i == null || R.team[i].down) return;
        R.hAmmo--; R.team[i].heal += 40; S.heal(); if (!R.hAmmo) R.hReload = 1400;
        const m = mates()[i]; m.classList.add('charm'); setTimeout(() => m.classList.remove('charm'), 260);
      };
      const suzu = () => {
        if (!R || R.over || paused || R.me.down || R.suzu > 0) return;
        R.suzu = 12000; S.suzu(); el.classList.add('suzu-on'); setTimeout(() => el.classList.remove('suzu-on'), 600);
        let saved = 0;
        R.events.forEach(e => { if (e.at - R.t < 750 && e.at - R.t > -150 && e.big) { e.blocked = true; saved++; } });
        R.team.forEach((t, i) => { if (t.down) return; if (t.anti > 0 || t.sleep > 0) saved++; t.anti = 0; t.sleep = 0; t.inv = 900; mend(i, 30); });
        if (saved) { M.saves++; say('Suzu! Cleansed.', 'good'); moment('suzu', `Suzu saved ${saved > 1 ? 'the team' : 'a teammate'} from ${R.lastBig || 'a big play'}`, 30 + saved * 15); }
      };
      const step = () => {
        if (!R || R.over || paused || R.me.down || R.step > 0) return;
        R.step = 7000; M.steps++; S.step(); R.me.inv = 600;
        if (R.me.dove != null) { say('Swift Step. Missed her.', 'good'); moment('step', `Swift Stepped away from ${R.foes[R.me.dove].hero}`, 25); R.events = R.events.filter(e => e.kind !== 'dive'); R.me.dove = null; }
        el.classList.add('stepping'); setTimeout(() => el.classList.remove('stepping'), 350);
      };
      const rush = () => {
        if (!R || R.over || paused || R.me.down || R.rush < 100) return;
        R.rush = 0; R.rushOn = 6000; M.rushes++; S.rush(); say('Kitsune Rush!', 'good'); el.classList.add('rushing');
      };
      // what's under the crosshair
      const foeAt = p => {
        let best = null;
        foeEls().forEach((e, j) => {
          if (e.hidden || R.foes[j].down) return;
          const r = e.querySelector('.ow-body').getBoundingClientRect(), s = stage.getBoundingClientRect();
          const x = s.left + p.x / 100 * s.width, y = s.top + p.y / 100 * s.height;
          if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) best = { j, head: y < r.top + r.height * 0.22 };
        });
        return best;
      };
      const mateAt = p => {
        const s = stage.getBoundingClientRect(), x = s.left + p.x / 100 * s.width, y = s.top + p.y / 100 * s.height;
        const i = mates().findIndex(m => { const r = m.querySelector('.ow-body').getBoundingClientRect(); return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom; });
        return i < 0 ? null : i;
      };

      // the other team's plays
      const plan = () => {
        const upMates = R.team.map((t, i) => i).filter(i => !R.team[i].down), F = R.foes;
        const up = id => { const j = F.findIndex(f => f.id === id); return j >= 0 && !F[j].down ? j : -1; };
        const opts = [];
        if (up('ana') >= 0 && !R.team[0].down) opts.push('sleep', 'nade');
        if (up('genji') >= 0 && !R.me.down) opts.push('dive', 'dive');
        if (up('genji') >= 0) opts.push('blade');
        if (up('zarya') >= 0) opts.push('grav');
        if (up('lucio') >= 0) opts.push('beat');
        if (!opts.length || !upMates.length) return;
        const kind = pick(opts); S.warn();
        const callers = R.team.filter(t => !t.down), who = callers.length ? pick(callers) : null, nm = who ? who.id[0].toUpperCase() + who.id.slice(1) + ': ' : '';
        if (kind === 'sleep') { say(`${nm}Sleep on Chenle!`, 'warn'); R.events.push({ kind, at: R.t + 1300, big: false }); }
        if (kind === 'nade') { const i = pick(upMates); say(`${nm}Nade on ${R.team[i].id[0].toUpperCase() + R.team[i].id.slice(1)}!`, 'warn'); R.events.push({ kind, i, at: R.t + 1300, big: true }); R.lastBig = 'Ana\'s nade'; }
        if (kind === 'dive') { const j = up('genji'); say(`${nm}Genji's diving you, Sol!`, 'warn'); R.me.dove = j; F[j].state = 'dive'; F[j].t = 2400; F[j].spot = 5 + Math.floor(Math.random() * 2); R.events.push({ kind, j, at: R.t + 1500, big: false }); }
        if (kind === 'blade') { const pool = upMates.filter(i => R.team[i].role !== 'tank'); const i = pick(pool.length ? pool : upMates); say(`${nm}BLADE! He's on ${R.team[i].id[0].toUpperCase() + R.team[i].id.slice(1)}!`, 'warn'); R.events.push({ kind, i, at: R.t + 1500, big: true }); R.lastBig = 'Dragonblade'; }
        if (kind === 'grav') { say(`${nm}GRAV GRAV GRAV`, 'warn'); R.events.push({ kind, at: R.t + 1500, big: true }); R.lastBig = 'Graviton Surge'; }
        if (kind === 'beat') { say(`${nm}Lúcio beat. Don't let them fight in it.`, 'warn'); R.events.push({ kind, at: R.t + 1200, big: false }); }
      };
      const land = e => {
        if (e.blocked) { if (e.kind === 'nade' && e.i != null) R.team[e.i].anti = 0; return; }
        if (e.kind === 'sleep' && !R.team[0].down) { R.team[0].sleep = 3500; feed('Ana', 'sleep', 'chenle', false); }
        if (e.kind === 'nade' && e.i != null) { hurtMate(e.i, 60, 'Ana'); if (!R.team[e.i].down) R.team[e.i].anti = 3500; }
        if (e.kind === 'dive' && R.me.dove === e.j && !R.foes[e.j].down) { [0, 350, 700].forEach(d => setTimeout(() => { if (!over && R && R.me.dove === e.j && !R.foes[e.j].down) hurtMe(48, 'Genji'); }, d)); setTimeout(() => { if (R && R.me.dove === e.j) R.me.dove = null; }, 1100); }
        if (e.kind === 'blade' && e.i != null) { hurtMate(e.i, 100, 'Genji'); setTimeout(() => { if (!over && R) hurtMate(e.i, 90, 'Genji'); }, 450); }
        if (e.kind === 'grav') { R.team.forEach((t, i) => hurtMate(i, t.role === 'tank' ? 120 : 95, 'Zarya')); hurtMe(80, 'Zarya'); }
        if (e.kind === 'beat') R.foes.forEach(f => { if (!f.down) f.hp = Math.min(f.max, f.hp + 120); });
      };

      const endRound = won => {
        R.over = true; M.rounds.push({ map: R.map.id, won });
        won ? S.win() : S.lose();
        const w = M.rounds.filter(r => r.won).length, l = M.rounds.length - w;
        const card = $('.ow-card'); card.hidden = false;
        card.innerHTML = `${img(won ? 'victory' : 'defeat', '', [], 'ow-card-bg')}<b class="ow-big ${won ? 'v' : 'd'}">${won ? 'VICTORY' : 'DEFEAT'}</b><p>Round ${M.rounds.length} · ${esc(R.map.name)}</p><p class="ow-series">SYRACUSE ${w} – ${l} TOP SEED</p>`;
        setTimeout(() => {
          card.hidden = true;
          if (w >= NEED || l >= NEED || M.rounds.length >= BEST) finish();
          else startRound();
        }, 2600);
      };
      // the player cards (FEMC-ART-TODO 43N, art card-<id>; Nov 11): the team along the end screen, Solar first; a card without art drops out
      const CARDS = [['solar', 'sollee'], ['chenle', 'chenle'], ['minji', 'minjibear'], ['olivia', 'oliviahye'], ['haerin', 'haerin.k']];
      const potg = () => {
        const best = M.moments.sort((a, b) => b.score - a.score)[0];
        return best ? { kind: best.kind, text: best.text, score: best.score } : { kind: 'heal', text: `${Math.round(M.healed)} healing, kept the team standing`, score: 10 };
      };
      const finish = (quit = false) => {
        if (over) return; over = true; cancelAnimationFrame(raf);
        const won = M.rounds.filter(r => r.won).length >= NEED && !quit, p = potg();
        const grade = quit ? 'C' : won && M.deaths <= 1 && M.elims >= 8 ? 'S' : won ? 'A' : M.rounds.some(r => r.won) ? 'B' : 'C';
        const res = { won, rounds: M.rounds, elims: M.elims, soloKills: M.soloKills, deaths: M.deaths, teamDeaths: M.teamDeaths, healed: Math.round(M.healed), saves: M.saves, steps: M.steps, rushes: M.rushes, potg: p, grade, quit };
        const card = $('.ow-card'); card.hidden = false; card.classList.add('potg');
        card.innerHTML = `${img(won ? 'victory' : 'defeat', '', [], 'ow-card-bg')}<div class="ow-potg">${img('potg-kiriko', 'Kiriko')}<div class="ow-potg-stand"></div><div class="ow-potg-copy"><small>PLAY OF THE GAME</small><b>sollee</b><span>Kiriko</span><p>${esc(p.text)}</p></div></div>
          <ol class="ow-cards" aria-label="Syracuse">${CARDS.map(([id, tag], i) => `<li${i === 0 ? ' class="me"' : ''}><img src="${ART('card-' + id)}" alt="" draggable="false" onerror="this.parentNode.remove()"><b>${esc(tag)}</b></li>`).join('')}</ol>
          <dl class="ow-stats"><dt>Eliminations</dt><dd>${M.elims}</dd><dt>Healing</dt><dd>${Math.round(M.healed)}</dd><dt>Suzu saves</dt><dd>${M.saves}</dd><dt>Deaths</dt><dd>${M.deaths}</dd><dt>Series</dt><dd>${M.rounds.filter(r => r.won).length} – ${M.rounds.filter(r => !r.won).length}</dd><dt>Grade</dt><dd class="g">${grade}</dd></dl>
          <button type="button">Continue</button>`;
        card.querySelector('button').focus();
        card.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };

      // the loop
      const paint = () => {
        R.team.forEach((t, i) => {
          const m = mates()[i];
          m.querySelector('.hp i').style.width = `${(t.hp / t.max) * 100}%`;
          m.classList.toggle('down', !!t.down); m.classList.toggle('low', !t.down && t.hp / t.max < 0.35);
          m.classList.toggle('anti', t.anti > 0); m.classList.toggle('slept', t.sleep > 0); m.classList.toggle('inv', t.inv > 0);
          m.querySelector('.st').textContent = t.down ? `${Math.ceil(t.down / 1000)}` : t.sleep > 0 ? 'ASLEEP' : t.anti > 0 ? 'ANTI-HEAL' : '';
        });
        foeEls().forEach((e, j) => {
          const f = R.foes[j], show = !f.down && f.state !== 'hid' && f.spot >= 0;
          e.hidden = !show; if (!show) return;
          const sp = SPOTS[f.spot]; e.style.left = sp.x + '%'; e.style.top = sp.y + '%'; e.style.setProperty('--h', sp.h + '%');
          e.querySelector('.hp i').style.width = `${(f.hp / f.max) * 100}%`; e.classList.toggle('diving', R.me.dove === j);
        });
        $('.ow-mehp i').style.width = `${(R.me.hp / R.me.max) * 100}%`; $('.ow-mehp em').textContent = R.me.down ? `${Math.ceil(R.me.down / 1000)}` : Math.ceil(R.me.hp);
        $('.ow-ammo b').textContent = R.kReload > 0 ? '…' : R.kAmmo; $('.ow-ammo.heal b').textContent = R.hReload > 0 ? '…' : R.hAmmo;
        const ab = (k, cd, max) => { const b = el.querySelector(`[data-ab="${k}"]`); b.disabled = cd > 0 || !!R.me.down; b.style.setProperty('--cd', cd / max); b.querySelector('small').textContent = cd > 0 ? `${Math.ceil(cd / 1000)}s` : { step: 'Shift', suzu: 'Space' }[k]; };
        ab('step', R.step, 7000); ab('suzu', R.suzu, 12000);
        const rb = el.querySelector('[data-ab="rush"]'); rb.disabled = R.rush < 100 || !!R.me.down; rb.style.setProperty('--fill', R.rush / 100);
        $('.ow-obj .u').style.width = `${R.us / 2}%`; $('.ow-obj .t').style.width = `${R.them / 2}%`;
        const c = $('.ow-cross'); c.style.left = mouse.x + '%'; c.style.top = mouse.y + '%';
        c.classList.toggle('on-foe', !!foeAt(mouse)); c.classList.toggle('on-mate', mateAt(mouse) != null);
      };
      const tick = now => {
        const dt = Math.min(80, now - (last || now)); last = now;
        if (R && !paused && !R.over) {
          R.t += dt;
          if (R.kReload > 0 && (R.kReload -= dt) <= 0) { R.kReload = 0; R.kAmmo = 15; }
          if (R.hReload > 0 && (R.hReload -= dt) <= 0) { R.hReload = 0; R.hAmmo = 10; }
          R.kCd = Math.max(0, R.kCd - dt); R.suzu = Math.max(0, R.suzu - dt); R.step = Math.max(0, R.step - dt);
          if (R.rushOn > 0 && (R.rushOn -= dt) <= 0) { R.rushOn = 0; el.classList.remove('rushing'); }
          if (R.me.inv > 0) R.me.inv -= dt;
          if (R.me.down && (R.me.down -= dt) <= 0) { R.me.down = 0; R.me.hp = R.me.max; el.classList.remove('dead'); say('Back in. Go.', ''); }
          if (!R.me.down && R.me.hp < R.me.max) R.me.hp = Math.min(R.me.max, R.me.hp + dt * 0.012);
          // teammates: healing landing, statuses, their own fire
          R.team.forEach((t, i) => {
            if (t.down && (t.down -= dt) <= 0) { t.down = 0; t.hp = t.max; }
            t.anti = Math.max(0, t.anti - dt); t.sleep = Math.max(0, t.sleep - dt); t.inv = Math.max(0, t.inv - dt);
            if (t.heal > 0) { const st = Math.min(t.heal, dt * 0.08); t.heal -= st; mend(i, st); }
            if (t.id === 'haerin' && !t.down) { const low = R.team.filter(x => !x.down && x.hp < x.max).sort((a, b) => a.hp / a.max - b.hp / b.max)[0]; if (low) low.hp = Math.min(low.max, low.hp + dt * 0.018); }
            if (!t.down && !t.sleep) { const vis = R.foes.map((f, j) => j).filter(j => !R.foes[j].down && R.foes[j].state !== 'hid'); if (vis.length && Math.random() < dt / 600) hurtFoe(pick(vis), t.dps * 0.6 * (0.7 + Math.random() * 0.6), t, false); }
          });
          // the other team: peek, shoot, duck
          R.foes.forEach((f, j) => {
            if (f.down) { if ((f.down -= dt) <= 0) { f.down = 0; f.hp = f.max; f.state = 'hid'; f.t = 800; } return; }
            f.t -= dt;
            if (f.t <= 0) {
              if (f.state === 'hid') { const used = R.foes.map(x => x.spot); const free = SPOTS.map((s, k) => k).filter(k => k < 5 && !used.includes(k)); f.spot = free.length ? pick(free) : -1; f.state = f.spot >= 0 ? 'up' : 'hid'; f.t = 1800 + Math.random() * 2000; }
              else { f.state = 'hid'; f.spot = -1; f.t = 1300 + Math.random() * 1900; if (R.me.dove === j) R.me.dove = null; }
            }
            if (f.state === 'up' && Math.random() < dt / 400) {
              const pool = R.team.map((t, i) => i).filter(i => !R.team[i].down); const tank = pool.includes(0) && Math.random() < 0.45;
              if (Math.random() < 0.18 && !R.me.down) hurtMe(f.dps * 0.5, f.hero);
              else if (pool.length) hurtMate(tank ? 0 : pick(pool), f.dps * 0.75 * (0.7 + Math.random() * 0.6), f.hero);
            }
          });
          if (R.t >= R.next) { plan(); R.next = R.t + (3600 + Math.random() * 3000) * D.gap; }
          R.events = R.events.filter(e => { if (R.t >= e.at) { land(e); return false; } return true; });
          // the point
          const a = aliveUs(), b = aliveThem(), rate = dt / 1000 * 1.15;
          if (a > b) R.us = Math.min(100, R.us + rate * (a - b)); else if (b > a) R.them = Math.min(100, R.them + rate * (b - a));
          if (R.us >= 100) endRound(true); else if (R.them >= 100) endRound(false);
          paint();
        }
        if (!over) raf = requestAnimationFrame(tick);
      };

      // input
      stage.addEventListener('pointermove', e => { const r = stage.getBoundingClientRect(); mouse = { x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100 }; });
      stage.addEventListener('contextmenu', e => e.preventDefault());
      stage.addEventListener('pointerdown', e => {
        e.preventDefault(); const r = stage.getBoundingClientRect(); mouse = { x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100 };
        if (e.button === 2) return ofuda(mateAt(mouse));
        if (e.pointerType === 'touch') { const m = mateAt(mouse); if (m != null) return ofuda(m); }
        kunai();
      });
      el.querySelectorAll('[data-ab]').forEach(b => b.onclick = () => ({ step, suzu, rush })[b.dataset.ab]());
      const key = e => {
        if (over) return;
        e.stopPropagation(); // the scene underneath never sees the match's keys
        if (e.key === 'Escape') { e.preventDefault(); paused = !paused; $('.mg-pause').hidden = !paused; return; }
        if (paused) return;
        if (/^[1-4]$/.test(e.key)) { e.preventDefault(); ofuda(+e.key - 1); }
        else if (e.key === ' ') { e.preventDefault(); suzu(); }
        else if (e.key === 'Shift') step();
        else if (e.key === 'q' || e.key === 'Q') rush();
        else if (e.key === 'r' || e.key === 'R') { if (R && R.kAmmo < 15 && !R.kReload) R.kReload = 1500; }
      };
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') { paused = false; $('.mg-pause').hidden = true; finish(true); } };
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); S.close(); el.remove(); };
      window.addEventListener('keydown', key, true);
      startRound(); raf = requestAnimationFrame(tick);
    });
  }
  return { play, TEAM, FOES };
})();
