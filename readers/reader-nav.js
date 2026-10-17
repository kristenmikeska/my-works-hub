/* ── READER-NAV.JS — chapter detection + topbar + drawer ── */

(function () {
  /* --- Shared helper: short "Chapter Word(s)" heading with no rich HTML children ---
     Accepts "Chapter Two", "Chapter Ninety-Nine", "Chapter 4" etc.
     Rejects body text that happens to start with "Chapter" by enforcing < 55 chars.
  */
  function isWordChapter(el) {
    const txt = el.textContent.trim();
    return /^Chapter\s+\S/i.test(txt) && txt.length < 55;
  }

  /* --- Chapter detection config per world --- */
  const WORLD_CONFIG = {
    'delicate': {
      // Table-of-contents entries at the top of Part 1 use <span class="s3"> inside <p>.
      // Real chapter headings (p11, p4, p7, p8) across all three parts do NOT.
      // \d{2,3} handles chapters 01:00–99:00 AND 100:00–180:00 (3-digit hours in Parts 2–3).
      detect: el => {
        if (el.querySelector('span.s3')) return false;
        return /^\d{2,3}:\d{2}\s*\|/.test(el.textContent.trim());
      }
    },
    'strangers': {
      detect: el => el.matches('h2') && /^\d+:/.test(el.textContent.trim())
    },
    'runners': {
      // EPUB export: chapter headings are <h2 class="p1 c1"> not <p>
      detect: el => el.matches('h2') && /^\d+:/.test(el.textContent.trim())
    },
    'casual': {
      detect: el => el.matches('p.p1') && /^\d+:/.test(el.textContent.trim())
    },
    'havenbrook': {
      detect: el => el.matches('p.p1') && /^\d{2}:/.test(el.textContent.trim())
    },
    'go': {
      detect: el => el.matches('p.p1') && isWordChapter(el)
    },
    'hoax': {
      // EPUB export: all content is p.p1. Chapter headings have no <br> children.
      // Social posts have "username:<br/>message" inside their spans.
      detect: el => {
        if (!el.matches('p.p1')) return false;
        if (el.querySelector('br,b,i,em,strong')) return false;
        return isWordChapter(el);
      }
    },
    'secret': {
      // EPUB export: chapter headings are p.p1 with plain "Chapter N" text, no <br>.
      detect: el => el.matches('p.p1') && !el.querySelector('br') && isWordChapter(el)
    },
    'recherche': {
      // Chapters use p1, p2, and p5 classes; word-numbered through Thirty Eight.
      detect: el => (el.matches('p.p1') || el.matches('p.p2') || el.matches('p.p5'))
                 && isWordChapter(el)
                 && !el.querySelector('b,i,em,strong')
    },
    'peace': {
      detect: el => el.matches('p.p1') && /^\d{1,2}$/.test(el.textContent.trim())
    },
    'soul-of-minji': {
      detect: el => (el.matches('p.p1') || el.matches('p.p4')) && /^Act\s+(I{1,4}V?|VI{0,3}|IX|\d+)/i.test(el.textContent.trim())
    },
    'saint-of-dead-air': {
      detect: el => el.matches('p.p6') && /^(Chapter|Micro|Epilogue)/i.test(el.textContent.trim())
    },
    'petal-thorn': {
      detect: el => el.matches('p.p8') && /^\d+:/.test(el.textContent.trim())
    }
  };

  /* --- Derive world from data-world on <body> --- */
  const world = document.body.dataset.world || '';
  const config = WORLD_CONFIG[world];

  /* --- Back link destination + display name --- */
  const WORLD_META = {
    'delicate':          { href: '../world.html#delicate',          name: 'Delicate' },
    'strangers':         { href: '../world.html#strangers',         name: 'Strangers' },
    'runners':           { href: '../world.html#runners',           name: 'Runners' },
    'casual':            { href: '../world.html#casual',            name: 'Casual' },
    'havenbrook':        { href: '../world.html#havenbrook',        name: 'Havenbrook' },
    'go':                { href: '../world.html#go',                name: 'GO' },
    'hoax':              { href: '../world.html#hoax',              name: 'Hoax' },
    'secret':            { href: '../world.html#secret',            name: 'Secret' },
    'recherche':         { href: '../world.html#recherche',         name: 'Recherche' },
    'peace':             { href: '../world.html#peace',             name: 'Peace' },
    'soul-of-minji':     { href: '../world.html#soul-of-minji',     name: 'Soul of Minji' },
    'saint-of-dead-air': { href: '../world.html#saint-of-dead-air', name: 'Saint of Dead Air' },
    'petal-thorn':       { href: '../world.html#petal-thorn',       name: 'Petal & Thorn' },
  };
  const meta = WORLD_META[world] || { href: '../index.html', name: world };
  const backHref = meta.href;
  const worldLabel = meta.name;

  /* --- Collect chapter elements --- */
  let chapters = [];
  if (config) {
    Array.from(document.querySelectorAll('p, h2, h3')).forEach(el => {
      if (config.detect(el)) {
        el.classList.add('chapter-heading');
        el.id = 'ch-' + chapters.length;
        chapters.push(el);
      }
    });
  }

  // Peace begins with an unnumbered first chapter. Give it its own section while
  // retaining the existing ch-0...ch-8 anchors for chapters 2–10.
  if (world === 'peace' && chapters.length) {
    const opening = document.querySelector('p.p3');
    if (opening) {
      const heading = document.createElement('h2');
      heading.className = 'chapter-heading'; heading.id = 'ch-opening'; heading.textContent = '1';
      opening.before(heading); chapters.unshift(heading);
    }
  }

  /* --- Mark social media elements --- */
  markSocialElements(world);

  /* --- Build topbar --- */
  const topbar = document.createElement('nav');
  topbar.className = 'reader-topbar';

  const backLink = document.createElement('a');
  backLink.className = 'reader-back';
  backLink.href = backHref;
  backLink.textContent = '← ' + worldLabel;

  const chLabel = document.createElement('span');
  chLabel.className = 'reader-chapter-label';
  chLabel.textContent = chapters.length ? chapters[0].textContent.trim() : worldLabel;

  const menuBtn = document.createElement('button');
  menuBtn.className = 'reader-menu-btn';
  menuBtn.setAttribute('aria-label', 'Chapter list');
  menuBtn.innerHTML = '&#9776;';

  topbar.append(backLink, chLabel, menuBtn);
  document.body.insertBefore(topbar, document.body.firstChild);

  /* --- Build drawer --- */
  const overlay = document.createElement('div');
  overlay.className = 'drawer-overlay';

  const drawer = document.createElement('div');
  drawer.className = 'chapter-drawer';
  drawer.id = 'chapter-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-label', 'Chapters');
  drawer.setAttribute('aria-modal', 'true');
  drawer.inert = true;
  menuBtn.setAttribute('aria-controls', drawer.id);
  menuBtn.setAttribute('aria-expanded', 'false');

  const drawerHead = document.createElement('div');
  drawerHead.className = 'drawer-header';

  const drawerTitle = document.createElement('span');
  drawerTitle.className = 'drawer-title';
  drawerTitle.textContent = 'Chapters';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'drawer-close';
  closeBtn.setAttribute('aria-label', 'Close chapter list');
  closeBtn.innerHTML = '&times;';

  drawerHead.append(drawerTitle, closeBtn);

  const chList = document.createElement('ul');
  chList.className = 'chapter-list';

  chapters.forEach((el, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'chapter-list-item';
    a.href = '#' + el.id;
    a.textContent = el.textContent.trim();
    a.dataset.idx = i;
    a.addEventListener('click', () => closeDrawer());
    li.appendChild(a);
    chList.appendChild(li);
  });

  drawer.append(drawerHead, chList);
  document.body.append(overlay, drawer);

  /* --- Drawer open/close --- */
  function openDrawer() {
    drawer.inert = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    overlay.classList.add('open');
    const active = chList.querySelector('.active');
    if (active) active.scrollIntoView({ block: 'center', behavior: 'instant' });
    closeBtn.focus({ preventScroll: true });
  }
  function closeDrawer() {
    const wasOpen = drawer.classList.contains('open');
    drawer.inert = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    if (wasOpen) menuBtn.focus({ preventScroll: true });
  }

  drawer.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const focusable = [closeBtn, ...chList.querySelectorAll('a')];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  menuBtn.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  /* Load the shared reader controls beside this script (also works with file:// previews). */
  const scriptBase = document.currentScript.src;
  const experienceStyles = document.createElement('link');
  experienceStyles.rel = 'stylesheet';
  experienceStyles.href = new URL('reader-experience.css?v=5', scriptBase).href;
  document.head.appendChild(experienceStyles);
  const experienceScript = document.createElement('script');
  experienceScript.src = new URL('reader-experience.js?v=4', scriptBase).href;
  experienceScript.onload = () => window.initReaderExperience({ world, chapters, topbar, chLabel, chList, backHref, worldLabel, closeDrawer });
  document.body.appendChild(experienceScript);
  const femcScript = document.createElement('script');
  femcScript.src = new URL('../femc-mode.js?v=86', scriptBase).href;
  document.head.appendChild(femcScript);

  /* ─────────────────────────────────────────────────────────────
     SOCIAL MEDIA ELEMENT MARKING
     Runs after chapter detection so chapter headings are already
     classed and won't be picked up as social content.
  ─────────────────────────────────────────────────────────────── */
  function markSocialElements(w) {
    /* Runners EPUB: social posts are images — no text-based social marking needed.
       The old Cocoa version used p3 exclusively for social text, but the EPUB version
       uses p2 p3 for ALL body text, so we cannot distinguish narrative from social. */

    if (w === 'hoax') {
      /* In Hoax: p3 = everything. Detect social blocks by their HTML structure.
         - Social header: has <b>…</b><br><i>username</i> pattern
         - Social comment block: starts with <b>username</b>: structure
         - Chapter headings: already classed, skip
         - Narrative: long paragraphs, no special tagging
      */
      document.querySelectorAll('p.p3:not(.chapter-heading)').forEach(el => {
        const html = el.innerHTML;
        const txt = el.textContent.trim();

        // Post header: <b>new post</b><br>... or "new post\nusername"
        if (/^<b>(new post|post)<\/b>/i.test(html.trim()) ||
            (/^new post$/im.test(txt) && html.includes('<br>'))) {
          el.classList.add('social-block', 'social-header');
          return;
        }
        // Group chat / DM header
        if (/^[A-Z\s]+:?\s*$/.test(txt) && txt.length < 40 && !/<[bi]>/.test(html)) {
          // Plain all-caps short line (group chat name like "PARK JIHOON HATE CLUB")
          el.classList.add('social-block', 'social-header');
          return;
        }
        // Comment block: contains multiple <b>username</b>: lines
        if ((html.match(/<b>/g) || []).length >= 1 && /<b>[^<]+<\/b>:/.test(html)) {
          el.classList.add('social-block', 'social-content');
          return;
        }
        // Text exchange: short paragraphs with "username:\nmessage" patterns
        if (html.includes('<br>') && /<b>/.test(html) && txt.length < 200) {
          el.classList.add('social-block', 'social-content');
          return;
        }
      });
    }
  }

  /* ─────────────────────────────────────────────────────────────
     SOCIAL IMAGE CARDS
     Parses the alt text on each EPUB image and wraps it in a
     platform-appropriate card (Instagram post, group chat, DM).
  ─────────────────────────────────────────────────────────────── */

  const AVATAR_PALETTE = [
    '#e8608a','#31d0c3','#a97fff','#ff8a4c',
    '#e8b44a','#91d36e','#5ecfca','#ff4f8b','#b08fff','#4ecdc4'
  ];
  function hashColor(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) & 0xffff;
    return AVATAR_PALETTE[h % AVATAR_PALETTE.length];
  }

  function parseAlt(raw) {
    const alt = raw
      .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"').replace(/&#10;/g, ' ').replace(/\xa0/g, ' ')
      .replace(/\s+/g, ' ').trim();

    if (alt.length < 3) return { type: 'art' };

    // AI-generated image descriptions
    if (/^A (pixelated|blurry|person|group|drawing|close|young|white|black|photo|man|woman|girl|boy|screenshot|dark|light|pink|purple|red|image)/i.test(alt)
        || /AI-generated content/i.test(alt)) return { type: 'art' };

    // Narrative prose embedded in images
    if (/^[""'']/.test(alt) || /^(The |She |He |They |Days |Picture \d)/i.test(alt))
      return { type: 'art' };

    // Instagram post: starts with @username:
    const igM = alt.match(/^@([\w.]+):\s*([\s\S]+)/);
    if (igM) {
      // Strip trailing @tag mentions that aren't part of the caption
      const caption = igM[2].replace(/\s+@[\w.]+(?!:)\s*[\S\s]{0,4}$/, '').trim();
      return { type: 'post', user: igM[1], caption };
    }

    // Notification headers (no colon separating them from username)
    if (/^PRIVATE MESSAGE FROM\s*(.+)$/i.test(alt))
      return { type: 'dm-header', user: alt.match(/^PRIVATE MESSAGE FROM\s*(.+)$/i)[1].trim() };
    if (/^new post\s*(.+)$/i.test(alt))
      return { type: 'post-header', user: alt.match(/^new post\s*(.+)$/i)[1].trim() };

    // Single-word username before colon
    const chatM = alt.match(/^(@?[\w.]+):\s*([\s\S]*)/);
    if (chatM) {
      const user = chatM[1].replace(/^@/, '');
      const body = chatM[2].trim();
      // Thread: body contains another username: pattern
      const hasThread = /[\w.]+:/.test(body);
      return { type: hasThread ? 'chat-thread' : 'chat', user, caption: body };
    }

    // Multi-word group chat name (spaces before any colon, or no colon at all)
    const name = alt.replace(/:$/, '').trim();
    if (name.length > 0) return { type: 'group-name', name };

    return { type: 'art' };
  }

  /* Hoax profile pictures, keyed by handle (group-chat and Instagram handles can differ). */
  const HOAX_PFP = (() => {
    const map = {
      'solar-solsystem-gc': ['solarsystem'], 'solar-solarkim-instagram': ['solarkim'],
      'jungwon-injangwon-gc': ['injangwon'], 'jungwon-instagram': ['jungwongarden'],
      'jihoon-jihoney': ['jihoney'], 'jihoon-instagram': ['jihoonie'],
      'cherry-cherryblossoms-gc': ['cherryblossoms'], 'cherry-instagram': ['chxrry'],
      'asahi-asanoonecares': ['asanoonecares', 'asanooneoncares', 'asahihi'],
      'hyunsuk-geniusuk': ['geniusuk', 'sukhyun', 'sunhyuk'],
      'jaehyuk-jaehyukkie': ['jaehyukkie', 'jaehyuk__'], 'junkyu-junkyute': ['junkyute', 'junkyuuu'],
      niki: ['rikiniki'], jake: ['jakeys', 'jakeyy'], jay: ['jbird', 'parkjay'],
      heeseung: ['heeheeseung', 'heeeseung'], sunghoon: ['princehoon', 'princesunghoon'], sunoo: ['sunooshine', 'sunshinesunoo']
    };
    const out = {};
    Object.entries(map).forEach(([file, handles]) => handles.forEach(h => { out[h] = `../assets/hoax/pfp/${file}.jpg`; }));
    return out;
  })();
  const pfpFor = user => world === 'hoax' ? HOAX_PFP[String(user).replace(/^@/, '').toLowerCase()] : null;

  function avatar(user) {
    const el = document.createElement('div');
    el.className = 'sc-avatar';
    el.style.background = hashColor(user);
    el.textContent = user[0].toUpperCase();
    const photo = pfpFor(user);
    if (photo) { el.style.background = `${hashColor(user)} url("${photo}") center / cover`; el.classList.add('has-photo'); }
    return el;
  }

  function buildCard(parsed, img) {
    const card = document.createElement('div');
    img.className = (img.className + ' sc-img').trim();

    if (parsed.type === 'post' || parsed.type === 'post-header') {
      // ── Instagram-style post ──────────────────────────────────
      card.className = 'social-card sc-post';
      const user = parsed.user;
      const color = hashColor(user);

      const hdr = document.createElement('div');
      hdr.className = 'sc-header';
      hdr.appendChild(avatar(user));
      hdr.insertAdjacentHTML('beforeend',
        `<span class="sc-username" style="color:${color}">@${user}</span>` +
        (parsed.isNewPost || parsed.type === 'post-header'
          ? `<span class="sc-badge">new post</span>`
          : `<span class="sc-more">···</span>`)
      );
      card.appendChild(hdr);
      card.appendChild(img);

      const actions = document.createElement('div');
      actions.className = 'sc-actions';
      actions.innerHTML =
        `<span class="sc-act" title="like">♡</span>` +
        `<span class="sc-act" title="comment">◯</span>` +
        `<span class="sc-act" title="share">↗</span>` +
        `<span class="sc-act sc-save" title="save">⊡</span>`;
      card.appendChild(actions);

      const captionText = parsed.captionFull
        ? parsed.captionFull.replace(/^@?[\w.]+:\s*/, '')
        : (parsed.caption || '');
      if (captionText) {
        const cap = document.createElement('div');
        cap.className = 'sc-caption';
        cap.innerHTML = `<span class="sc-cap-user" style="color:${color}">@${user}</span> ` +
          captionText.replace(/(@[\w.]+)/g, '<span class="sc-tag">$1</span>');

        if (parsed.comments && parsed.comments.length) {
          parsed.comments.slice(0, 5).forEach(line => {
            const d = document.createElement('div');
            d.className = 'sc-comment';
            const cm = line.match(/^\*?([\w.]+)\*?:\s*(.*)/);
            if (cm) {
              d.innerHTML = `<span class="sc-cap-user">@${cm[1]}</span> ${cm[2]}`;
              const face = pfpFor(cm[1]);
              if (face) { const i = document.createElement('i'); i.className = 'sc-comment-face'; i.style.backgroundImage = `url("${face}")`; d.prepend(i); }
            } else if (line) {
              d.textContent = line;
            }
            if (d.textContent.trim()) cap.appendChild(d);
          });
          if (parsed.comments.length > 5) {
            const more = document.createElement('div');
            more.className = 'sc-more-comments';
            more.textContent = `View all ${parsed.comments.length} comments`;
            cap.appendChild(more);
          }
        }
        card.appendChild(cap);
      }

    } else if (parsed.type === 'chat' || parsed.type === 'chat-thread') {
      // ── Chat / group chat message ─────────────────────────────
      card.className = 'social-card sc-chat';
      const user = parsed.user;
      const color = hashColor(user);

      const hdr = document.createElement('div');
      hdr.className = 'sc-header sc-chat-header';
      hdr.appendChild(avatar(user));
      hdr.insertAdjacentHTML('beforeend',
        `<span class="sc-username" style="color:${color}">${user}</span>` +
        (parsed.type === 'chat-thread'
          ? `<span class="sc-thread-badge">thread</span>` : '')
      );
      card.appendChild(hdr);
      card.appendChild(img);

    } else if (parsed.type === 'dm-header') {
      // ── Private message ───────────────────────────────────────
      card.className = 'social-card sc-dm';
      const user = parsed.user;
      const color = hashColor(user);

      const hdr = document.createElement('div');
      hdr.className = 'sc-header sc-dm-header';
      hdr.appendChild(avatar(user));
      hdr.insertAdjacentHTML('beforeend',
        `<span class="sc-username" style="color:${color}">${user}</span>` +
        `<span class="sc-badge sc-dm-badge">DM</span>`
      );
      card.appendChild(hdr);
      card.appendChild(img);

    } else if (parsed.type === 'group-name') {
      // ── Group chat room header ────────────────────────────────
      card.className = 'social-card sc-group';

      const hdr = document.createElement('div');
      hdr.className = 'sc-header sc-group-header';
      hdr.innerHTML =
        `<span class="sc-group-icon">☰</span>` +
        `<span class="sc-group-name">${parsed.name}</span>` +
        `<span class="sc-more">···</span>`;
      card.appendChild(hdr);
      card.appendChild(img);
    }

    return card;
  }

  function wrapSocialImages(w) {
    if (!['runners', 'hoax', 'secret'].includes(w)) return;

    // Walk siblings, skipping whitespace/nbsp-only paragraphs
    function prevSig(el) {
      let s = el.previousElementSibling;
      while (s && !s.textContent.replace(/[\s\xa0￼]/g, '').trim()) s = s.previousElementSibling;
      return s;
    }
    function nextSig(el) {
      let s = el.nextElementSibling;
      while (s && !s.textContent.replace(/[\s\xa0￼]/g, '').trim()) s = s.nextElementSibling;
      return s;
    }

    // Extract username from "NEW POST (PRIVATE)\nusername" paragraph textContent
    function userFromNewPost(el) {
      const txt = el.textContent.replace(/\xa0/g, ' ').trim();
      return txt.replace(/^new post\s*(?:\([^)]*\))?\s*/i, '').replace(/\s+/g, '').toLowerCase() || 'user';
    }

    document.querySelectorAll('img').forEach(img => {
      const raw = img.getAttribute('alt') || '';
      const parsed = parseAlt(raw);
      // Note: for secret/hoax we do NOT early-return on 'art' — context determines this below

      // Capture parent <p> BEFORE buildCard moves the image out of it
      const p = img.closest('p') || img.parentElement?.closest('p');
      if (!p || !p.parentNode) return;

      const toHide = [];

      if (w === 'runners') {
        if (parsed.type === 'art') return;
        // "NEW POST @username" appears as either:
        //   (a) one <p> with NEW POST<br/>@username
        //   (b) two <p>s: "NEW POST" then "@username"
        const prev = prevSig(p);
        if (prev) {
          const txt = prev.textContent.replace(/\xa0/g, ' ').trim();
          if (/new post/i.test(txt)) {
            // Case (a): single paragraph contains both
            toHide.push(prev);
            parsed.isNewPost = true;
          } else if (/^@[\w.]+$/.test(txt)) {
            // Case (b): @username is the immediate prev, NEW POST is before that
            toHide.push(prev);
            const pp = prevSig(prev);
            if (pp && /^new post$/i.test(pp.textContent.trim())) toHide.push(pp);
            parsed.isNewPost = true;
          }
        }
        // Hide duplicate caption paragraph immediately after image
        const next = nextSig(p);
        if (next && /^@[\w.]+:/.test(next.textContent.replace(/\xa0/g, ' ').trim())) {
          toHide.push(next);
        }

      } else if (w === 'secret' || w === 'hoax') {
        const prev = prevSig(p);
        const isPost = prev && /new post/i.test(prev.textContent);

        if (!isPost) {
          return; // Not a social post — skip
        }

        // It's an Instagram post: hide the "new post / username" paragraph
        toHide.push(prev);
        parsed.isNewPost = true;

        // If alt text is art or unrecognized, derive username from the new-post paragraph
        if (parsed.type === 'art' || !parsed.user) {
          parsed.type = 'post';
          parsed.user = userFromNewPost(prev);
          parsed.caption = '';
        } else if (parsed.type === 'chat' || parsed.type === 'chat-thread') {
          parsed.type = 'post';
        }

        // Caption paragraph immediately after the image
        const next = nextSig(p);
        if (next && !next.classList.contains('chapter-heading')) {
          const firstLine = next.textContent.replace(/\xa0/g, ' ').trim();
          if (/^[\w.]+:/.test(firstLine)) {
            const linesHere = next.innerHTML
              .split(/<br\s*\/?>/i)
              .map(l => l.replace(/<[^>]+>/g, '').replace(/\xa0/g, ' ').trim())
              .filter(l => l.replace(/\s/g, ''));
            parsed.captionFull = linesHere[0];
            const commentsHere = linesHere.slice(1).filter(l => /^[\w.*@]+:/.test(l.trim()));
            toHide.push(next);

            // Comments may live in the next sibling paragraph (both Secret and Hoax)
            const next2 = nextSig(next);
            if (next2 && !next2.classList.contains('chapter-heading') && next2.querySelector && next2.querySelector('br')) {
              const commentLines = next2.innerHTML
                .split(/<br\s*\/?>/i)
                .map(l => l.replace(/<[^>]+>/g, '').replace(/\xa0/g, ' ').trim())
                .filter(l => l.replace(/\s/g, ''));
              if (commentLines.length && /^[\w.@*]+:/.test(commentLines[0].trim())) {
                parsed.comments = commentLines;
                toHide.push(next2);
              } else {
                parsed.comments = commentsHere;
              }
            } else {
              parsed.comments = commentsHere;
            }
          }
        }
      }

      const card = buildCard(parsed, img);
      if (!card.children.length) return;

      toHide.forEach(el => el.style.display = 'none');
      const wrap = document.createElement('div');
      wrap.className = 'social-card-wrap';
      wrap.appendChild(card);
      p.replaceWith(wrap);
    });
  }

  /* ─────────────────────────────────────────────────────────────
     CHAT THREADS (Hoax): "handle:<br>message" paragraphs become a messaging app.
     Group chats and private messages get a header; Solar's own messages sit on the right.
  ───────────────────────────────────────────────────────────── */
  const CHAT_COLORS = { solarsystem: '#ffb84d', solarkim: '#ffb84d', jihoney: '#c9a7ff', jihoonie: '#c9a7ff', cherryblossoms: '#ff8a8a', chxrry: '#ff8a8a',
    geniusuk: '#7fe3e0', asanoonecares: '#8fb8ff', asanooneoncares: '#8fb8ff', junkyute: '#ff9ec7', jaehyukkie: '#9fe0a8', injangwon: '#5ee8de', jungwongarden: '#5ee8de',
    rikiniki: '#ffd36e', sunooshine: '#ffc2e2', sunshinesunoo: '#ffc2e2', jbird: '#b8c4ff', heeheeseung: '#a9f0c8', heeeseung: '#a9f0c8', princehoon: '#ff9f6e',
    princesunghoon: '#ff9f6e', jakeys: '#9ad4ff', jakeyy: '#9ad4ff', parkjay: '#b8c4ff', sukhyun: '#e0b0ff' };
  const MINE = ['solarsystem', 'solarkim'];
  const withPhoto = (el, who) => { const photo = pfpFor(who); if (photo) { el.style.backgroundImage = `url("${photo}")`; el.classList.add('has-photo'); } return el; };
  function chatColor(handle) {
    if (CHAT_COLORS[handle]) return CHAT_COLORS[handle];
    let h = 0; for (const c of handle) h = (h * 31 + c.charCodeAt(0)) % 360;
    return `hsl(${h} 70% 75%)`;
  }
  function buildChatThreads(w) {
    if (w !== 'hoax') return;
    const HANDLE = /^[A-Za-z0-9_.\-]+:$/;
    const isDivider = img => /drawing of a sun/i.test(img.getAttribute('alt') || '');
    const sig = p => p.textContent.replace(/[\s\xa0￼]/g, '');
    const headingSet = new Set(chapters);
    function parseMessage(p) {
      if (p.querySelector('img')) return null;
      const html = p.innerHTML.replace(/^\s*<br\s*\/?>\s*/i, '');
      const cut = html.search(/<br\s*\/?>/i);
      if (cut < 0) return null;
      const scratch = document.createElement('div');
      scratch.innerHTML = html.slice(0, cut);
      const who = scratch.textContent.replace(/\xa0/g, ' ').trim();
      if (!HANDLE.test(who)) return null;
      scratch.innerHTML = html.slice(cut).replace(/^<br\s*\/?>/i, '');
      scratch.querySelectorAll('span').forEach(span => { if (!/c2|italic/.test(span.className)) span.replaceWith(...span.childNodes); });
      if (!scratch.textContent.trim()) return null;
      return { who: who.slice(0, -1).toLowerCase(), html: scratch.innerHTML.replace(/<\/span>$/i, '') };
    }
    function headerOf(p) {
      if (!p.querySelector('.underline')) return null;
      const text = p.textContent.replace(/\xa0/g, ' ').replace(/\s+/g, ' ').trim();
      if (!text || text.length > 60) return null;
      const dm = text.match(/^private message from:\s*(\S+)/i);
      return dm ? { kind: 'dm', from: dm[1].toLowerCase(), name: `Private message` } : { kind: 'group', name: text.replace(/:$/, '') };
    }
    let thread = null, last = null;
    function openThread(before, header) {
      const el = document.createElement('div');
      el.className = 'chat-thread';
      el.dataset.kind = header ? header.kind : 'group';
      if (header && header.from) el.dataset.from = header.from;
      const head = document.createElement('div');
      head.className = 'chat-head';
      const title = document.createElement('b'); title.textContent = header ? header.name : 'group chat';
      const sub = document.createElement('small');
      sub.textContent = header && header.kind === 'dm' ? `from ${header.from}` : 'group chat';
      const faces = document.createElement('span'); faces.className = 'chat-faces';
      head.append(title, sub, faces);
      el.appendChild(head);
      before.parentNode.insertBefore(el, before);
      thread = { el, kind: el.dataset.kind, from: header && header.from, members: new Set(), me: null };
      last = null;
    }
    function isMine(who) {
      if (thread.kind === 'dm') {
        if (!thread.me && who !== thread.from) thread.me = who;
        return who === thread.me;
      }
      return MINE.includes(who);
    }
    function addMessage(who, fill) {
      const row = document.createElement('div');
      const mine = isMine(who);
      const cont = last === who;
      row.className = `chat-msg${mine ? ' mine' : ''}${cont ? ' cont' : ''}`;
      row.style.setProperty('--who', chatColor(who));
      if (!cont) {
        const face = document.createElement('span'); face.className = 'chat-avatar'; face.textContent = who.charAt(0).toUpperCase();
        row.appendChild(withPhoto(face, who));
      } else row.appendChild(Object.assign(document.createElement('span'), { className: 'chat-avatar chat-avatar-gap' }));
      const body = document.createElement('div'); body.className = 'chat-body';
      if (!cont) { const name = document.createElement('span'); name.className = 'chat-name'; name.textContent = who; body.appendChild(name); }
      const bubble = document.createElement('div'); bubble.className = 'chat-bubble';
      fill(bubble);
      body.appendChild(bubble); row.appendChild(body);
      thread.el.appendChild(row);
      if (!thread.members.has(who)) {
        thread.members.add(who);
        const dot = document.createElement('i'); dot.textContent = who.charAt(0).toUpperCase(); dot.style.setProperty('--who', chatColor(who)); dot.title = who;
        thread.el.querySelector('.chat-faces').appendChild(withPhoto(dot, who));
      }
      last = who;
    }
    const paras = [...document.querySelectorAll('p')];
    const consumed = new Set();
    paras.forEach((p, i) => {
      if (consumed.has(p) || !p.parentNode) return;
      if (headingSet.has(p)) { thread = null; return; }
      const img = p.querySelector('img');
      if (img && isDivider(img)) { p.classList.add('scene-divider'); thread = null; return; }
      const header = headerOf(p);
      if (header) { openThread(p, header); p.remove(); return; }
      const msg = parseMessage(p);
      if (msg) {
        if (!thread) openThread(p, null);
        addMessage(msg.who, bubble => { bubble.innerHTML = msg.html; });
        p.remove(); return;
      }
      const text = p.textContent.replace(/\xa0/g, ' ').trim();
      if (HANDLE.test(text)) {
        let j = i + 1; while (j < paras.length && !sig(paras[j]) && !paras[j].querySelector('img')) j++;
        const next = paras[j];
        const pic = next && next.querySelector('img');
        if (pic && !isDivider(pic)) {
          if (!thread) openThread(p, null);
          const who = text.slice(0, -1).toLowerCase();
          addMessage(who, bubble => { bubble.classList.add('chat-image'); const im = document.createElement('img'); im.src = pic.getAttribute('src'); im.alt = ''; im.loading = 'lazy'; bubble.appendChild(im); });
          for (let k = i + 1; k <= j; k++) consumed.add(paras[k]);
          p.remove(); next.remove(); return;
        }
      }
      if (!sig(p) && !img) { if (thread) p.remove(); return; }
      thread = null;
    });
    document.querySelectorAll('.chat-thread').forEach(el => {
      const head = el.querySelector('.chat-head');
      if (head.querySelector('b').textContent === 'group chat' && el.querySelectorAll('.chat-faces i').length <= 2) {
        head.querySelector('b').textContent = 'messages';
        head.querySelector('small').textContent = [...el.querySelectorAll('.chat-faces i')].map(i => i.title).join(' · ');
      }
    });
    revealChats();
  }

  // Messages pop in as they scroll into view, with a soft ping when site sound is on.
  function revealChats() {
    const rows = document.querySelectorAll('.chat-msg');
    if (!rows.length) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) { rows.forEach(r => r.classList.add('in')); return; }
    let soundOn = false; try { soundOn = localStorage.getItem('kg-intro-sound') === 'on'; } catch (e) {}
    let ctx = null, lastPing = 0;
    const ping = color => {
      if (!soundOn || !(navigator.userActivation && navigator.userActivation.hasBeenActive)) return;
      const now = performance.now(); if (now - lastPing < 140) return; lastPing = now;
      try {
        ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
        const t = ctx.currentTime + 0.01, o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = 880 + (parseInt(String(color).replace(/\D/g, '').slice(0, 3) || '0', 10) % 6) * 110;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.025, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.25);
      } catch (e) {}
    };
    let queue = 0;
    const io = new IntersectionObserver(entries => {
      entries.filter(e => e.isIntersecting).forEach(e => {
        const row = e.target; io.unobserve(row);
        const delay = Math.min(queue++, 8) * 90;
        setTimeout(() => { row.classList.add('in'); ping(row.style.getPropertyValue('--who')); queue = Math.max(0, queue - 1); }, delay);
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    rows.forEach(r => io.observe(r));
  }

  buildChatThreads(world);

  /* --- Wrap EPUB social images in styled cards (must run after all const/let declarations) --- */
  wrapSocialImages(world);

})();
