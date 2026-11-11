/* Text photos (Nov 11 2026, Kat: "phone texts in the epilogues should carry REAL photos, never [photo: …] brackets").
   Kat's real pictures for the photos people text in the epilogues (and the ones Solar sends back). Separate from the post
   pictures (art/posts, FEMC_POSTS, scene.js postReady / postHtml, the album): a text photo is never a post and never goes in
   the album.

   Data: any phone message may name a picture by slot id, `img: 'tp-<world>-<slug>'`, or several, `imgs: ['tp-…', …]` (a burst;
   up to four thumbnails, the last one "+N" when the text's leading bracket says a bigger count, "[11 photos]"). Where:
     - text threads: a message in `msgs`, a message in a reply option's `then`, and a reply option itself
       ({ t, img, then }: the button shows the thumbnail, Solar's sent message carries the photo; core.js replyText);
     - contact topics (phone.js `topics[].msgs`, { me | them, img }; epilogue.js message / core.js phoneMessage copy it);
     - a scene's { phone: [{ from, t, img }] } overlay (scene.js phone(), group chats included).
   FEMC-TEXT-PHOTOS.md lists every slot (file:line, sender, gate, what it should show).
   Pictures: assets/femc/game/art/texts/<world>/<slug>.webp, listed in art/texts/index.js (window.FEMC_TEXT_PHOTOS, ids;
   window.FEMC_TEXT_PHOTOS_V, a cache buster). Written only by tools/femc-text-photos.py <slot id> <source> [--crop L,T,R,B].
   Ready (listed): the message is a photo bubble (rounded picture, tap / Enter opens it full screen with ‹ back, Esc closes,
   ← → between a burst's pictures); its `t` is an optional caption: the text with any leading "handle: " and [bracket]
   stripped (a group's handle still names the sender). "[video …]" texts get a ▶ over the still. The thread list and banners
   show the caption, else "Photo" / "Video" / "11 photos"; a banner shows the first picture as a thumbnail.
   Not ready (no picture yet): the message exactly as written, bracket and all. Nothing else changes either way. */
window.FemcTextPhotos = (() => {
  const ID = /^tp-([a-z]+)-([a-z0-9-]+)$/;
  const LEAD = /^\s*(?:@?[a-z0-9_.]{2,24}:\s+)?\[[^\]]*\]\s*/i;
  const listed = () => window.FEMC_TEXT_PHOTOS || [];
  const is = id => typeof id === 'string' && ID.test(id);
  // The ready ids a message (or a reply option) names, in order; [] when none is ready (= show it as written).
  const ids = m => (m ? [].concat(m.imgs || [], m.img || []) : []).filter((id, i, a) => is(id) && a.indexOf(id) === i && listed().includes(id));
  const ready = m => ids(m).length > 0;
  const src = (base, id) => { const x = ID.exec(id); return `${base || ''}assets/femc/game/art/texts/${x[1]}/${x[2]}.webp?v=${window.FEMC_TEXT_PHOTOS_V || 1}`; };
  const caption = text => String(text ?? '').replace(LEAD, '').trim();
  const lead = text => (/^\s*(?:@?[a-z0-9_.]{2,24}:\s+)?\[([^\]]*)\]/i.exec(String(text ?? '')) || [])[1] || '';
  const isVideo = (m, text) => !!m?.video || /^\s*video\b/i.test(lead(text));
  // How many pictures the text says it is ("[11 photos]"), at least the ready ones.
  const total = (m, text) => Math.max(ids(m).length, +(/^\s*(\d+)\s+(?:photos?|pictures?|pics?|images?)\b/i.exec(lead(text)) || [])[1] || 0);
  // The thread list / banner line for a ready photo message.
  function label(m, text) {
    const c = caption(text); if (c) return c;
    const n = total(m, text);
    return isVideo(m, text) ? 'Video' : n > 1 ? `${n} photos` : 'Photo';
  }

  /* The full-screen viewer: one picture at a time, ‹ back (and Esc) closes, ← → (or the side buttons) for a burst. On
     document.body above every layer; its keys are caught on window first so the scene / phone underneath never see them. */
  function view(srcs, at, opener) {
    if (!srcs.length) return;
    document.querySelector('.g-tp-view')?.remove();
    let i = Math.max(0, Math.min(srcs.length - 1, at || 0));
    const el = document.createElement('div');
    el.className = 'g-tp-view';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', 'Photo');
    el.innerHTML = `<button type="button" class="g-tp-back" data-tpv="back" aria-label="Back">‹ <span>Back</span></button>`
      + `<img alt="">${srcs.length > 1 ? `<button type="button" class="g-tp-nav prev" data-tpv="prev" aria-label="Previous photo">‹</button><button type="button" class="g-tp-nav next" data-tpv="next" aria-label="Next photo">›</button><p class="g-tp-count"></p>` : ''}`;
    const img = el.querySelector('img'), count = el.querySelector('.g-tp-count');
    const show = () => { img.src = srcs[i]; if (count) count.textContent = `${i + 1} / ${srcs.length}`; };
    const step = d => { i = (i + d + srcs.length) % srcs.length; show(); };
    const close = () => {
      window.removeEventListener('keydown', key, true);
      el.remove();
      try { opener?.focus({ preventScroll: true }); } catch (e) {}
    };
    const key = e => {
      if (!el.isConnected) return window.removeEventListener('keydown', key, true);
      if (e.key === 'Escape' || e.key === 'Backspace') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowLeft' && srcs.length > 1) { e.preventDefault(); step(-1); }
      else if (e.key === 'ArrowRight' && srcs.length > 1) { e.preventDefault(); step(1); }
      else if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest?.('.g-tp-view button')) { e.preventDefault(); close(); }
      // Every key stops here (Enter on ‹ Back / ‹ › still presses it), so nothing underneath advances or closes.
      e.stopPropagation(); e.stopImmediatePropagation?.();
    };
    el.addEventListener('click', e => {
      e.stopPropagation();
      const b = e.target.closest('[data-tpv]');
      if (b && b.dataset.tpv === 'prev') return step(-1);
      if (b && b.dataset.tpv === 'next') return step(1);
      if (b || e.target === el || e.target === img) close();
    });
    ['pointerdown', 'mousedown', 'touchstart'].forEach(t => el.addEventListener(t, e => e.stopPropagation()));
    window.addEventListener('keydown', key, true);
    show();
    document.body.appendChild(el);
    el.querySelector('[data-tpv="back"]').focus({ preventScroll: true });
  }

  /* The photo bubble's inside: a grid of up to four buttons (each opens the viewer at its picture), a ▶ on a video, "+N" on
     the last tile of a bigger burst, then the caption. Returns null when nothing is ready (the caller keeps the text).
     onload: called as each picture loads (the threads scroll to the bottom again). */
  function node(base, m, text, onload) {
    const list = ids(m); if (!list.length) return null;
    const srcs = list.map(id => src(base, id)), shown = srcs.slice(0, 4), n = total(m, text), more = n - shown.length;
    const video = isVideo(m, text), cap = caption(text);
    const box = document.createElement('span');
    box.className = `g-tp n${shown.length}${video ? ' video' : ''}`;
    const grid = document.createElement('span');
    grid.className = 'g-tp-grid';
    shown.forEach((s, k) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'g-tp-ph';
      b.setAttribute('aria-label', video ? 'Play video' : shown.length > 1 ? `Open photo ${k + 1} of ${n}` : 'Open photo');
      const im = document.createElement('img'); im.alt = ''; im.src = s; im.decoding = 'async';
      if (onload) im.addEventListener('load', onload);
      b.append(im);
      if (video) { const pl = document.createElement('i'); pl.className = 'g-tp-play'; pl.setAttribute('aria-hidden', 'true'); pl.textContent = '▶'; b.append(pl); }
      if (more > 0 && k === shown.length - 1) { const pm = document.createElement('i'); pm.className = 'g-tp-more'; pm.textContent = `+${more}`; b.append(pm); }
      b.addEventListener('click', e => { e.stopPropagation(); e.preventDefault(); view(srcs, k, b); });
      b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); e.preventDefault(); view(srcs, k, b); } });
      grid.append(b);
    });
    box.append(grid);
    if (cap) { const c = document.createElement('span'); c.className = 'g-tp-cap'; c.textContent = cap; box.append(c); }
    return box;
  }
  // A reply button's thumbnail (the first ready picture), or null.
  const thumb = (base, m) => { const list = ids(m); return list.length ? src(base, list[0]) : null; };

  return { is, ids, ready, src, caption, label, isVideo, total, node, thumb, view };
})();
