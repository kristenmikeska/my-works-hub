/* FEMC epilogue minigame: dumplings (Nov 10 2026, Kat: "a cooking minigame"; EPILOGUE-EXPANSION-PLAN.md step 2). Runners, 12/31
   "the list": Haechan makes sixty-one, Solar does the folding, badly, and gets shouted at about it. Standalone: nothing in the story
   calls it yet (try it at mockups/minigames/dumplings.html).

   FemcDumplings.play({ host, count, coach, onDone }) -> Promise<result>
     count   dumplings to fold (default 6)   coach  who grades you: { name, lines } (default Haechan)
   result = { folded, perfect, okay, bags, pleats, hits, grade: 'S' | 'A' | 'B' | 'C' }

   How it plays: a wrapper with filling sits on the board. A marker sweeps along the timing bar; press Space / click / tap when it's
   in the pink zone to crimp a pleat (7 pleats a dumpling). Gold centre = a clean pleat; pink = fine; outside = a tear. Each pleat
   speeds the marker up a little and narrows the zone. A dumpling with no tears is perfect, one or two is okay, three or more is a
   bag ("That's a bag, Solar."). Haechan's lines react. Esc pauses. Reduced motion: no wobble, the marker still moves (it's the game). */
window.FemcDumplings = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const PLEATS = 7;
  const HAECHAN = {
    name: 'Haechan',
    start: ["Fold it over. Then pleat. I'll show you once more and then I'm not showing you again.", 'Crimp, crimp, crimp. Like a bar of eighths.'],
    perfect: ['...Okay. That one\'s good.', 'Huh. Look at you.', 'That one can go on the good tray.', 'Clean. Do that again.'],
    okay: ['It\'ll hold.', 'Fine. It\'s fine. It\'s a dumpling.', 'Your mother would eat that one.', 'Close enough. Don\'t tell anyone.'],
    bag: ["That's a bag, Solar.", "That's a bag with meat in it.", 'I demonstrated the pleat four times.', 'We\'re putting that one at the back.'],
    tear: ['Gentle.', 'You\'re rushing the and.', 'Easy. It\'s not a race.'],
    end: { S: 'Sixty-one, and you did six of them perfectly. I\'m telling everyone.', A: 'Okay. You can fold at my house.', B: 'Some of them are dumplings.', C: 'You do the flat ones.' },
  };
  const pick = a => a[Math.floor(Math.random() * a.length)];

  function play(o = {}) {
    return new Promise(done => {
      const host = o.host || document.body, coach = o.coach || HAECHAN, N = o.count || 6;
      const st = { i: 0, p: 0, tears: 0, x: 0, dir: 1, speed: 0.55, zone: 0.26, results: [], hits: 0, pleats: 0, paused: false, over: false, lock: 0 };
      const el = document.createElement('div');
      el.className = 'mg-dmp' + (reduced.matches ? ' still' : '');
      el.innerHTML = `
        <div class="mg-dmp-top"><b>12/31 · the kitchen</b><span class="mg-dmp-count"></span></div>
        <p class="mg-dmp-say" aria-live="polite"><b>${esc(coach.name)}</b><span></span></p>
        <div class="mg-dmp-board">
          <svg class="mg-dmp-svg" viewBox="0 0 300 200" aria-hidden="true">
            <ellipse cx="150" cy="150" rx="128" ry="22" class="tray"/>
            <path class="wrap" d="M40 140 Q150 -10 260 140 Z"/>
            <ellipse cx="150" cy="118" rx="52" ry="20" class="fill"/>
            <g class="pleats"></g>
          </svg>
          <ol class="mg-dmp-tray" aria-label="Your dumplings"></ol>
        </div>
        <div class="mg-dmp-bar"><i class="zone"></i><i class="gold"></i><i class="mark"></i></div>
        <p class="mg-dmp-help">Space, click or tap to crimp when the marker is in the pink. Gold is perfect. Esc pauses.</p>
        <div class="mg-pause" hidden><b>Paused</b><button type="button" data-mg="resume">Resume</button><button type="button" data-mg="quit">Quit</button></div>
        <div class="mg-end" hidden></div>`;
      host.appendChild(el);
      const $ = s => el.querySelector(s);
      const say = t => { $('.mg-dmp-say span').textContent = t; };
      // a pleat's place along the wrapper's curved edge (quadratic from (40,140) via (150,-10) to (260,140))
      const edge = t => { const u = 1 - t; return [u * u * 40 + 2 * u * t * 150 + t * t * 260, u * u * 140 + 2 * u * t * -10 + t * t * 140]; };
      const drawPleat = (k, good) => {
        const t = 0.14 + (k / (PLEATS - 1)) * 0.72, [x, y] = edge(t), [x2, y2] = edge(Math.min(1, t + 0.04));
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        g.setAttribute('d', `M${x} ${y} Q${(x + x2) / 2} ${Math.min(y, y2) + (good ? 14 : 4)} ${x2} ${y2}`);
        g.setAttribute('class', good === 2 ? 'p gold' : good ? 'p' : 'p torn');
        $('.pleats').appendChild(g);
      };
      const paintBar = () => {
        const z = st.zone, g = z * 0.3;
        $('.zone').style.cssText = `left:${(0.5 - z / 2) * 100}%;width:${z * 100}%`;
        $('.gold').style.cssText = `left:${(0.5 - g / 2) * 100}%;width:${g * 100}%`;
        $('.mark').style.left = `${st.x * 100}%`;
      };
      const paintTray = () => {
        $('.mg-dmp-tray').innerHTML = st.results.map(r => `<li class="${r}" title="${r}"></li>`).join('') + '<li class="todo"></li>'.repeat(Math.max(0, N - st.results.length));
        $('.mg-dmp-count').textContent = `${Math.min(st.i + 1, N)} / ${N}`;
      };
      const newWrap = () => { $('.pleats').innerHTML = ''; st.p = 0; st.tears = 0; st.speed = 0.55 + st.i * 0.04; st.zone = Math.max(0.16, 0.26 - st.i * 0.012); el.classList.remove('done-one'); };
      const crimp = () => {
        if (st.over || st.paused || st.lock > 0) return;
        const off = Math.abs(st.x - 0.5), z = st.zone / 2, g = z * 0.3;
        st.pleats++;
        if (off <= g) { st.hits++; drawPleat(st.p, 2); }
        else if (off <= z) { st.hits++; drawPleat(st.p, 1); }
        else { st.tears++; drawPleat(st.p, 0); if (Math.random() < 0.5) say(pick(coach.tear)); if (!reduced.matches) { el.classList.remove('wobble'); void el.offsetWidth; el.classList.add('wobble'); } }
        st.p++; st.speed *= 1.06; st.zone = Math.max(0.12, st.zone * 0.96);
        if (st.p >= PLEATS) {
          const r = st.tears === 0 ? 'perfect' : st.tears <= 2 ? 'okay' : 'bag';
          st.results.push(r); say(pick(coach[r])); el.classList.add('done-one'); st.lock = 900; st.i++;
          paintTray();
          if (st.i >= N) return setTimeout(finish, 900);
          setTimeout(newWrap, 850);
        }
      };
      const grade = () => {
        const p = st.results.filter(r => r === 'perfect').length, b = st.results.filter(r => r === 'bag').length;
        return p >= N - 1 && !b ? 'S' : p >= N / 2 && b <= 1 ? 'A' : b <= N / 2 ? 'B' : 'C';
      };
      const finish = (quit = false) => {
        if (st.over) return; st.over = true;
        const count = k => st.results.filter(r => r === k).length;
        const res = { folded: st.results.length, perfect: count('perfect'), okay: count('okay'), bags: count('bag'), pleats: st.pleats, hits: st.hits, grade: quit ? 'C' : grade(), quit };
        say(coach.end[res.grade]);
        const end = $('.mg-end'); end.hidden = false;
        end.innerHTML = `<b class="mg-grade">${res.grade}</b><dl><dt>Perfect</dt><dd>${res.perfect}</dd><dt>Will hold</dt><dd>${res.okay}</dd><dt>Bags</dt><dd>${res.bags}</dd></dl><p class="mg-end-say">${esc(coach.name)}: ${esc(coach.end[res.grade])}</p><button type="button">Continue</button>`;
        end.querySelector('button').focus();
        end.querySelector('button').onclick = () => { cleanup(); o.onDone?.(res); done(res); };
      };
      let last = performance.now(), raf = 0;
      const tick = now => {
        const dt = Math.min(60, now - last) / 1000; last = now;
        if (!st.paused && !st.over) {
          if (st.lock > 0) st.lock -= dt * 1000;
          else { st.x += st.dir * st.speed * dt; if (st.x > 1) { st.x = 1; st.dir = -1; } if (st.x < 0) { st.x = 0; st.dir = 1; } }
          paintBar();
        }
        raf = requestAnimationFrame(tick);
      };
      const key = e => {
        if (st.over) return;
        if (e.key === 'Escape') { e.preventDefault(); st.paused = !st.paused; $('.mg-pause').hidden = !st.paused; return; }
        if (!st.paused && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); crimp(); }
      };
      const cleanup = () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', key, true); el.remove(); };
      $('.mg-dmp-board').addEventListener('pointerdown', e => { e.preventDefault(); crimp(); });
      $('.mg-dmp-bar').addEventListener('pointerdown', e => { e.preventDefault(); crimp(); });
      $('.mg-pause').onclick = e => { const b = e.target.dataset.mg; if (b === 'resume') { st.paused = false; $('.mg-pause').hidden = true; } if (b === 'quit') { st.paused = false; finish(true); } };
      window.addEventListener('keydown', key, true);
      say(pick(coach.start)); newWrap(); paintTray(); paintBar(); raf = requestAnimationFrame(tick);
    });
  }
  return { play };
})();
