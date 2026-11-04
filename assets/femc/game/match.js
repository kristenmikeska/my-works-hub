/* FEMC revamp: the esports broadcast overlay (Nov 3 2026, Kat: the Runners epilogue's Regionals should look like a stream).
   A scene line's { match } (scene.js next(): applied first; a line that is only { match } goes straight on) paints a broadcast
   HUD over that scene: the two teams and the series score, a line under it (stage, map, round), a kill-feed and, at the end,
   a GG card. Pink and black (game.css --pink / --night), pointer-events none, above the backdrop and portraits but under the
   text box, the tools and the choices, so it never blocks the dialogue.
     { match: { home, away, homeTag, awayTag, stage, map, score: [home, away], feed: [...], gg } }
       home / away (+ the short tags shown on phones): a new home or away starts a new series (the feed and GG clear);
       anything else updates the series on screen. score: maps won. map: the line under the score ('Map 2 · Lijiang').
       feed: entries added to the kill-feed (newest on top, four at most; each fades after a while):
         { by, how, on, su }  by / on: in-world handles (the team's SUgram handles: sollee, minjibear, haerin.k, oliviahye,
                              chenle) or an enemy hero ('Zarya'); how: the short verb or ability between them; su: true when
                              Syracuse made the play (pink), false for the other team (white).
       gg: true or a line ('SYRACUSE WIN · 2-1'): the GG card (until the next series or { match: null }).
     { match: null }   takes it down (the scene's end does too).
   Reduced motion (or the game's Reduce motion settings): no slides or pulses, the feed simply appears.
   Data: the Runners Regionals scenes (data/epi/runners/story-w1.js epi-r-regionals-1 / -2). Tests: FemcMatch.state(). */
window.FemcMatch = (() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const FEED_MAX = 4, FEED_MS = 9000;
  let host = null, scene = null, cur = null, feed = [], seq = 0, timers = [];

  function build(el) {
    host = document.createElement('div');
    host.className = 'gs-match';
    host.setAttribute('role', 'status');
    host.setAttribute('aria-live', 'polite');
    host.innerHTML = `<div class="gs-mx-bar"><span class="gs-mx-live">LIVE</span><b class="gs-mx-team home"></b><span class="gs-mx-score"><i class="h"></i><em>–</em><i class="a"></i></span><b class="gs-mx-team away"></b></div>
      <p class="gs-mx-sub"></p><ol class="gs-mx-feed" aria-label="Kill feed"></ol><div class="gs-mx-gg" hidden><b>GG</b><span></span></div>`;
    const before = el.querySelector(':scope > .gs-tools');
    before ? el.insertBefore(host, before) : el.appendChild(host);
    scene = el;
  }
  function clear() {
    timers.forEach(clearTimeout); timers = [];
    host?.remove(); host = null; scene = null; cur = null; feed = [];
  }
  const team = (name, tag) => `<span class="full">${esc(name)}</span><span class="tag">${esc(tag || name)}</span>`;
  function paint(changed) {
    if (!host) return;
    const still = reduced.matches;
    host.classList.toggle('still', still);
    host.querySelector('.home').innerHTML = team(cur.home, cur.homeTag);
    host.querySelector('.away').innerHTML = team(cur.away, cur.awayTag);
    const [h, a] = cur.score || [0, 0];
    const hi = host.querySelector('.gs-mx-score .h'), ai = host.querySelector('.gs-mx-score .a');
    hi.textContent = h; ai.textContent = a;
    host.querySelector('.gs-mx-score').setAttribute('aria-label', `${cur.home} ${h}, ${cur.away} ${a}`);
    if (changed && !still) [hi, ai].forEach((x, i) => { if (changed[i]) { x.classList.remove('pop'); void x.offsetWidth; x.classList.add('pop'); } });
    const sub = [cur.stage, cur.map].filter(Boolean).join(' · ');
    host.querySelector('.gs-mx-sub').textContent = sub;
    host.querySelector('.gs-mx-sub').hidden = !sub;
    host.querySelector('.gs-mx-feed').innerHTML = feed.map(f => `<li class="${f.su ? 'su' : 'op'}${still ? '' : ' in'}" data-k="${f.k}"><b>${esc(f.by)}</b><small>${esc(f.how || '▸')}</small><b>${esc(f.on || '')}</b></li>`).join('');
    const gg = host.querySelector('.gs-mx-gg');
    gg.hidden = !cur.gg;
    if (cur.gg) gg.querySelector('span').textContent = cur.gg === true ? '' : cur.gg;
    host.classList.toggle('done', !!cur.gg);
  }
  // A scene line's { match } (scene.js). el: the scene's root (.gs).
  function apply(el, spec) {
    if (!spec) { if (!scene || scene === el) clear(); return; }
    if (scene && scene !== el) clear();
    const fresh = !cur || (spec.home && spec.home !== cur.home) || (spec.away && spec.away !== cur.away);
    if (fresh) { timers.forEach(clearTimeout); timers = []; feed = []; cur = { home: 'SYRACUSE', away: '', score: [0, 0], gg: null }; }
    const before = cur.score || [0, 0];
    cur = { ...cur, ...spec, feed: undefined };
    if (fresh && !spec.gg) cur.gg = null;
    if (!host || !host.isConnected) build(el);
    (spec.feed || []).forEach(f => {
      const k = ++seq;
      feed.unshift({ ...f, k });
      timers.push(setTimeout(() => { feed = feed.filter(x => x.k !== k); host?.querySelector(`[data-k="${k}"]`)?.remove(); }, FEED_MS));
    });
    feed = feed.slice(0, FEED_MAX);
    const now = cur.score || [0, 0];
    paint(fresh ? null : [now[0] !== before[0], now[1] !== before[1]]);
  }
  function end(el) { if (!el || scene === el) clear(); }
  const state = () => host ? { on: host.isConnected, home: cur.home, away: cur.away, score: [...(cur.score || [])], stage: cur.stage || '', map: cur.map || '',
    feed: feed.map(f => `${f.by} ${f.how || ''} ${f.on || ''}`.trim()), gg: cur.gg || null, ggShown: !host.querySelector('.gs-mx-gg').hidden, still: host.classList.contains('still') } : { on: false };
  return { apply, end, state };
})();
