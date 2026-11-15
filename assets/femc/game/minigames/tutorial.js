/* FEMC epilogue minigames: the first-time tutorial (Nov 11 2026, Kat: "all of them should have some kind of tutorial at the
   beginning so the player never has to guess how to play, even if it seems simple"). Shared by every minigame but the café
   (it has its own). Loaded on demand by each game (a tiny loader that injects tutorial.js + .css once from this folder, see
   below), so scene.js and the HTML pages don't have to list it; mockups/minigames/*.html list it anyway.

   FemcTutorial.run(root, { id, steps, who, face, calm, perf, replay, onSkip }) -> Promise<'done' | 'skipped'>
     root   the game's element (the overlay is fixed over the page; selectors in steps are looked up inside root first)
     id     the game id ('holdon', 'stair', ...): marked seen when the run ends (done or skipped)
     who / face   default speaker name + portrait url for every step (a step's own who / face wins; face null = no face)
     calm / perf  Reduce flashes / Performance: no pulse, the spotlight follows its target 4x a second instead of every frame
     replay true = from the pause menu's "How to play": practice steps also get a Next button, so nothing has to be played
     steps  [{ target, say, who, face, wait, pos, next, before, after }]
       target  an element, a selector (root first, then document), a function returning one, or null (no spotlight, dim all)
       say     the line (plain text; a <b>…</b> is kept)            pos   'auto' (default) | 'top' | 'bottom' | 'left' | 'right' | 'center'
       wait    'click' (default: Next, Enter, Space or a tap on the bubble)
               'key:<key>' (practice: resolves on that e.key / e.code, e.g. 'key: ' or 'key:Space'; the key still reaches the game)
               'target' (practice: resolves on a click / tap of the target; the click still reaches the game)
               fn(ctx) -> Promise (practice: the game resolves it once the player did the thing; ctx below)
       next    the Next button's label ('Next', last step 'Let's go')
       before / after   fn(ctx) run as the step opens / closes (set up a practice state, e.g. spawn one fish)
     Practice steps (anything but 'click') let the page through: the spotlight dims lightly and clicks / keys reach the game.
     Info steps ('click') block the game underneath: clicks are caught, and games should ignore input while blocking() is true.
     ctx = { say(text), target(el|sel), done() (finish this step now), skipped (true once skipped), step (index), T (this API) }
   onSkip()  called once if the player skips (Esc or the Skip button, then "Skip it" on the confirm)

   FemcTutorial.seen(id) / mark(id) / reset(id?)  seen-state in localStorage 'kg-femc-tutorials' ({ id: 1 }), try/catch, so blocked
     storage just means "not seen" (the tutorial shows again). Inside the game (window.FemcGame with S) it's mirrored in the save
     as S.tut[id] = 1 (written with the next save), and seen() reads either.
   FemcTutorial.should(id, opt)  opt true = force, false = never, else !seen(id). Games' play({ tutorial }) passes it here.
   FemcTutorial.open()      true while a tutorial is up (games: ignore their own Esc / pause while open(); Esc belongs to it)
   FemcTutorial.blocking()  true while an info step is showing (games: ignore play input then)

   Keys: Enter / Space = Next on info steps; Esc = skip → confirm ([Skip it] [Keep going]; Esc again = keep going).
   Controller (Nov 15 2026, battle/pad.js): ✕ = Next, ○ = skip → confirm (← → between Skip it / Keep going, ✕ picks; pad.js moves
   the focus inside .ftut and presses the focused button). Practice steps get the game's own pad keys (its FemcPad.remap); info
   steps and the confirm always get the plain ones. Loader ?v=2 in every game (Nov 15).
   Palette: Kat's pink and black (no blue / purple / gold UI). Reduced motion: no pulse, no slide.

   The loader each game carries (base() is the game's own; keep the ?v in step with this file's TUTORIAL_V in the games):
     const tutLib = () => window.FemcTutorial ? Promise.resolve(window.FemcTutorial) : (window.FemcTutorialLoading ||= new Promise(ok => {
       const B = `${base()}assets/femc/game/minigames/tutorial`, l = document.createElement('link'), s = document.createElement('script');
       l.rel = 'stylesheet'; l.href = `${B}.css?v=1`; document.head.appendChild(l);
       s.src = `${B}.js?v=2`; s.onload = s.onerror = () => ok(window.FemcTutorial || null); document.head.appendChild(s);
     }));
   A game whose loader gets null just plays without a tutorial. */
window.FemcTutorial = (() => {
  const KEY = 'kg-femc-tutorials';
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])).replace(/&lt;(\/?)b&gt;/g, '<$1b>');
  const store = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } };
  const gameS = () => { try { const G = window.FemcGame, S = G && G.S; return S && typeof S === 'object' ? S : null; } catch (e) { return null; } };
  const seen = id => { if (store()[id]) return true; const S = gameS(); return !!(S && S.tut && S.tut[id]); };
  const mark = id => {
    try { const m = store(); m[id] = 1; localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) {}
    try { const S = gameS(); if (S) (S.tut ||= {})[id] = 1; } catch (e) {}
  };
  const reset = id => { try { if (id) { const m = store(); delete m[id]; localStorage.setItem(KEY, JSON.stringify(m)); } else localStorage.removeItem(KEY); } catch (e) {} };
  const should = (id, opt) => opt === true ? true : opt === false ? false : !seen(id);
  let cur = null; // the running tutorial's state
  const open = () => !!cur;
  const blocking = () => !!(cur && cur.blocking);
  const reduced = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  function run(root, o = {}) {
    if (cur) cur.abort();
    const steps = (o.steps || []).filter(Boolean);
    if (!steps.length) return Promise.resolve('done');
    return new Promise(finish => {
      const still = reduced.matches, slow = !!(o.calm || o.perf);
      const el = document.createElement('div');
      el.className = 'ftut' + (still ? ' still' : '') + (o.calm ? ' calm' : '') + (o.perf ? ' perf' : '');
      el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'How to play');
      el.innerHTML = `<div class="ftut-block"></div><div class="ftut-hole" hidden><i class="ftut-arrow"></i></div>
        <div class="ftut-bubble" aria-live="polite"><img class="ftut-face" alt="" hidden><div class="ftut-txt"><b class="ftut-who"></b><p class="ftut-say"></p>
          <div class="ftut-row"><span class="ftut-count"></span><span class="ftut-try" hidden>Your turn</span><button type="button" class="ftut-skip">Skip tutorial</button><button type="button" class="ftut-next">Next</button></div></div></div>
        <div class="ftut-confirm" hidden><div><b>Skip the tutorial?</b><p>You can watch it again any time: Esc (○ on a controller) → How to play.</p><button type="button" data-t="skip">Skip it</button><button type="button" data-t="stay">Keep going</button></div></div>`;
      document.body.appendChild(el);
      const $ = s => el.querySelector(s);
      const S = cur = { blocking: true, abort: () => end('skipped', true) };
      let i = -1, tgt = null, raf = 0, timer = 0, stepDone = null, ctx = null, over = false, confirming = false;
      const find = t => {
        try {
          if (!t) return null;
          if (typeof t === 'function') t = t();
          if (typeof t === 'string') return (root && root.querySelector(t)) || document.querySelector(t);
          return t.nodeType === 1 ? t : null;
        } catch (e) { return null; }
      };
      const place = () => {
        if (over) return;
        const hole = $('.ftut-hole'), b = $('.ftut-bubble'), step = steps[i] || {};
        const r = tgt && tgt.isConnected ? tgt.getBoundingClientRect() : null;
        const W = window.innerWidth, H = window.innerHeight, pad = 8;
        if (r && r.width + r.height > 0) {
          hole.hidden = false; el.classList.remove('dim-all');
          Object.assign(hole.style, { left: r.left - pad + 'px', top: r.top - pad + 'px', width: r.width + pad * 2 + 'px', height: r.height + pad * 2 + 'px' });
        } else { hole.hidden = true; el.classList.add('dim-all'); }
        // bubble: beside the hole on the roomier side, kept on screen
        const bw = b.offsetWidth, bh = b.offsetHeight, m = 14;
        let pos = step.pos || 'auto', x, y;
        if (!r || pos === 'center') { x = (W - bw) / 2; y = (H - bh) / 2; pos = 'center'; }
        else {
          if (pos === 'auto') {
            const room = { bottom: H - r.bottom, top: r.top, right: W - r.right, left: r.left };
            pos = room.bottom >= bh + 40 ? 'bottom' : room.top >= bh + 40 ? 'top' : room.right >= bw + 40 ? 'right' : room.left >= bw + 40 ? 'left' : 'inside';
          }
          if (pos === 'bottom') { x = r.left + r.width / 2 - bw / 2; y = r.bottom + pad + 22; }
          else if (pos === 'top') { x = r.left + r.width / 2 - bw / 2; y = r.top - pad - 22 - bh; }
          else if (pos === 'right') { x = r.right + pad + 22; y = r.top + r.height / 2 - bh / 2; }
          else if (pos === 'left') { x = r.left - pad - 22 - bw; y = r.top + r.height / 2 - bh / 2; }
          else { x = (W - bw) / 2; y = H - bh - m; } // the target fills the screen: bubble at the bottom
        }
        b.style.left = Math.max(m, Math.min(W - bw - m, x)) + 'px';
        b.style.top = Math.max(m, Math.min(H - bh - m, y)) + 'px';
        el.dataset.pos = pos;
      };
      const follow = () => {
        if (over) return;
        place();
        if (slow || still) timer = setTimeout(follow, 250); else raf = requestAnimationFrame(follow);
      };
      const stopFollow = () => { cancelAnimationFrame(raf); clearTimeout(timer); };
      const practiceKey = e => {
        if (over || confirming || !stepDone) return;
        const w = steps[i] && steps[i].wait;
        if (typeof w === 'string' && w.startsWith('key:')) {
          const k = w.slice(4), hit = e.key === k || e.code === k || (k === 'Space' && e.key === ' ');
          if (hit) setTimeout(() => stepDone && stepDone(), 0);
        }
      };
      const targetClick = e => {
        if (over || confirming || !stepDone || !tgt) return;
        if (steps[i] && steps[i].wait === 'target' && tgt.contains(e.target)) setTimeout(() => stepDone && stepDone(), 0);
      };
      const key = e => {
        if (over) return;
        if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); return confirming ? confirm(false) : confirm(true); }
        if (confirming && e.key.startsWith('Arrow')) { e.preventDefault(); e.stopImmediatePropagation(); const sk = $('[data-t=skip]'); (document.activeElement === sk ? $('[data-t=stay]') : sk).focus(); return; } // any arrow flips between the two
        if (confirming) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopImmediatePropagation(); const f = document.activeElement; (f && f.closest && f.closest('.ftut-confirm') ? f : $('[data-t=stay]')).click(); } return; }
        practiceKey(e);
        if (S.blocking && (e.key === 'Enter' || e.key === ' ')) {
          const f = document.activeElement;
          if (f && f.classList && f.classList.contains('ftut-skip')) return; // a focused Skip button gets its own Enter
          e.preventDefault(); e.stopImmediatePropagation(); go();
        } else if (S.blocking) e.stopImmediatePropagation(); // info step: the game underneath gets nothing
      };
      const confirm = on => {
        confirming = on; $('.ftut-confirm').hidden = !on; el.classList.toggle('asking', on);
        if (on) $('[data-t=stay]').focus(); else aim();
      };
      const aim = () => {
        const nx = $('.ftut-next');
        if (!nx.hidden) return nx.focus({ preventScroll: true });
        const f = document.activeElement; if (f && el.contains(f) && f.blur) f.blur();
      };
      const show = n => {
        const prev = steps[i];
        if (prev && prev.after) { try { prev.after(ctx); } catch (e) { console.warn('tutorial after', e); } }
        stepDone = null;
        if (n >= steps.length) return end('done');
        i = n;
        const step = steps[i], w = step.wait || 'click', practice = w !== 'click';
        ctx = { step: i, T: window.FemcTutorial, skipped: false, say: t => { $('.ftut-say').innerHTML = esc(t); place(); }, target: t => { tgt = find(t); place(); }, done: () => stepDone && stepDone() };
        const who = step.who !== undefined ? step.who : o.who, face = step.face !== undefined ? step.face : o.face;
        $('.ftut-who').textContent = who || ''; $('.ftut-who').hidden = !who;
        const img = $('.ftut-face');
        if (face) { img.hidden = false; img.onerror = () => { img.hidden = true; }; if (img.getAttribute('src') !== face) img.src = face; } else img.hidden = true;
        $('.ftut-say').innerHTML = esc(step.say);
        $('.ftut-count').textContent = `${i + 1} / ${steps.length}`;
        S.blocking = !practice;
        el.classList.toggle('practice', practice);
        const nx = $('.ftut-next');
        nx.hidden = practice && !o.replay;
        nx.textContent = step.next || (i === steps.length - 1 ? 'Let’s go' : 'Next');
        $('.ftut-try').hidden = !practice;
        el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
        if (step.before) { try { step.before(ctx); } catch (e) { console.warn('tutorial before', e); } }
        tgt = find(step.target);
        place();
        if (!confirming) aim();
        const me = i;
        const p = new Promise(ok => { stepDone = ok; });
        if (typeof w === 'function') { try { Promise.resolve(w(ctx)).then(() => stepDone && i === me && stepDone()); } catch (e) { console.warn('tutorial wait', e); stepDone(); } }
        p.then(() => { if (!over && i === me) setTimeout(() => !over && i === me && show(i + 1), practice ? 450 : 0); });
      };
      const go = () => { if (!over && !confirming && stepDone) stepDone(); };
      const end = (how, quiet) => {
        if (over) return; over = true;
        if (how === 'skipped' && ctx) ctx.skipped = true;
        if (how === 'skipped' && steps[i] && steps[i].after) { try { steps[i].after(ctx); } catch (e) {} }
        stopFollow();
        window.removeEventListener('keydown', key, true); window.removeEventListener('resize', place); document.removeEventListener('click', targetClick, true);
        el.remove(); if (cur === S) cur = null;
        if (o.id) mark(o.id);
        if (how === 'skipped' && !quiet && o.onSkip) { try { o.onSkip(); } catch (e) {} }
        finish(how);
      };
      $('.ftut-next').onclick = e => { e.stopPropagation(); go(); };
      $('.ftut-skip').onclick = e => { e.stopPropagation(); confirm(true); };
      $('.ftut-bubble').onclick = e => { if (S.blocking && !e.target.closest('button')) go(); };
      $('.ftut-block').addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); });
      $('.ftut-confirm').onclick = e => { const t = e.target.dataset.t; if (t === 'skip') end('skipped'); else if (t === 'stay') confirm(false); };
      window.addEventListener('keydown', key, true); window.addEventListener('resize', place); document.addEventListener('click', targetClick, true);
      show(0);
      follow();
    });
  }
  return { run, seen, mark, reset, should, open, blocking };
})();
