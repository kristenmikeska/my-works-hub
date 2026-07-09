const fmt = new Intl.NumberFormat("en-US");
const worldPage = document.querySelector("#worldPage");
const universeBadge = document.querySelector("#universeBadge");
const topbar = document.querySelector("#worldTopbar");

function getWorldId() {
  return location.hash.replace("#", "").trim();
}

function getProgress(id) {
  try {
    return JSON.parse(localStorage.getItem("kg-reading-" + id));
  } catch (e) {
    return null;
  }
}

function renderWorld(world) {
  document.title = `${world.title} — My Works`;

  if (universeBadge) universeBadge.textContent = world.universe;

  // Apply world-specific background and accent
  document.body.style.background = world.worldBg || "linear-gradient(180deg, #130f12 0%, #100d0f 100%)";
  document.body.style.setProperty("--accent", world.accent);

  const imgSrc = world.worldImage || world.heroImage || world.image || "";
  const hasImage = Boolean(imgSrc);

  worldPage.innerHTML = `
    <section class="world-hero${hasImage ? "" : " no-image"}">
      ${hasImage ? `
        <div class="world-hero-img">
          <img src="${imgSrc}" alt="${world.title}">
        </div>
        <div class="world-hero-overlay"></div>
      ` : ""}
      <div class="world-hero-content">
        <p class="world-eyebrow">${world.status} &nbsp;·&nbsp; ${world.timeframe}</p>
        <h1 class="world-title">${world.title}</h1>
        <p class="world-tagline">"${world.tagline}"</p>
        <div class="world-chips">
          <span class="world-chip accent">${world.universe}</span>
          <span class="world-chip">${world.chapters} chapters</span>
          <span class="world-chip">${fmt.format(world.words)} words</span>
          <span class="world-chip">Lead: ${world.lead}</span>
        </div>
      </div>
    </section>

    <section class="world-body">
      ${world.quote ? `<p class="world-quote">"${world.quote}"</p>` : ""}
      <p class="world-summary">${world.summary}</p>

      <div class="world-info-grid">
        <div class="info-card">
          <span class="info-label">Lead / POV</span>
          <span class="info-value">${world.lead}</span>
        </div>
        <div class="info-card">
          <span class="info-label">Love Interests</span>
          <span class="info-value">${world.loveInterests.join(", ")}</span>
        </div>
        <div class="info-card">
          <span class="info-label">Genre & Themes</span>
          <span class="info-value">${world.format}</span>
        </div>
        <div class="info-card">
          <span class="info-label">Writing Era</span>
          <span class="info-value">${world.timeframe}</span>
        </div>
      </div>

      <h4 class="world-section-title">Cast</h4>
      <div class="world-cast">
        ${world.cast.map(c => `<span class="cast-tag">${c}</span>`).join("")}
      </div>

      <h4 class="world-section-title">World Flavor</h4>
      <div class="world-mood">${world.mood}</div>

      ${world.note ? `
        <div class="world-note">
          <strong>Canon note:</strong> ${world.note}
        </div>
      ` : ""}

      ${(() => {
        const prog = getProgress(world.id);
        const hasProg = prog && prog.percent >= 1 && prog.percent <= 99;
        const label = hasProg ? (prog.title || `Chapter ${prog.idx + 1}`) : "";
        return `
      <div class="world-actions">
        <a class="world-btn primary" href="${world.readers[0][1]}">${hasProg ? `Continue reading · ${prog.percent}%` : `Read ${world.title}`}</a>
        ${world.site ? `<a class="world-btn secondary" href="${world.site.href}">Open ${world.site.title} →</a>` : ""}
      </div>
      ${hasProg ? `
        <div class="world-progress" title="${prog.percent}% read">
          <div class="world-progress-track"><span style="width:${prog.percent}%"></span></div>
          <span class="world-progress-label">Last read: ${label}</span>
        </div>
      ` : ""}`;
      })()}

      ${world.readers.length > 1 ? `
        <h4 class="world-section-title">All Parts</h4>
        <div class="read-list">
          ${world.readers.map(([label, href]) => `
            <a class="read-item" href="${href}">
              <span>${label}</span>
              <span class="read-arrow">Open →</span>
            </a>
          `).join("")}
        </div>
      ` : ""}

      ${(() => {
        const related = getRelated(world);
        if (related.length === 0) return "";
        return `
          <h4 class="world-section-title">Related Worlds</h4>
          <div class="related-grid">
            ${related.map(r => {
              const thumb = r.image || r.worldImage || r.heroImage || "";
              return `
              <a class="related-card" href="world.html#${r.id}" style="--rc-accent: ${r.accent}">
                ${thumb ? `<div class="related-thumb"><img src="${thumb}" alt="${r.title}" loading="lazy"></div>` : `<div class="related-thumb related-thumb-bg" style="background:${r.worldBg || r.accent}"></div>`}
                <div class="related-info">
                  <span class="related-universe">${r.universe}</span>
                  <span class="related-title">${r.title}</span>
                </div>
                <span class="related-arrow">→</span>
              </a>`;
            }).join("")}
          </div>`;
      })()}
    </section>
  `;
}

function getRelated(world) {
  // Excluded: common Korean/Chinese surnames and non-character words
  const EXCLUDE = new Set([
    "park", "yang", "choi", "jeon", "jung", "moon", "kwon", "kang", "yoon", "dong",
    "solar", "usher", "dead"
  ]);

  function nameWords(nameList) {
    return (nameList || [])
      .flatMap(n => n.toLowerCase().split(/\s+/))
      .filter(w => w.length >= 4 && !EXCLUDE.has(w));
  }

  const myWords = new Set([
    ...nameWords(world.cast),
    ...nameWords(world.loveInterests)
  ]);

  if (myWords.size === 0) return [];

  return worlds
    .filter(w => w.id !== world.id)
    .map(w => {
      let score = 0;
      // Same Delicate Universe worlds always relate to each other
      if (world.group === "delicate" && w.group === "delicate") score += 3;
      const wWords = nameWords([...(w.cast || []), ...(w.loveInterests || [])]);
      score += wWords.filter(word => myWords.has(word)).length;
      return { w, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      // Prefer same group as query world
      const aGroup = a.w.group === world.group ? 1 : 0;
      const bGroup = b.w.group === world.group ? 1 : 0;
      if (aGroup !== bGroup) return bGroup - aGroup;
      // Most recent first
      return b.w.endSort - a.w.endSort;
    })
    .slice(0, 4)
    .map(x => x.w);
}

let _musicAudio = null;
let _musicKeyHandler = null;

function fmtTime(s) {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec < 10 ? "0" : ""}${sec}`;
}

function initMusicPlayer(world) {
  // Clean up any existing player + audio when navigating between worlds
  const existing = document.querySelector(".music-player");
  if (existing) existing.remove();
  if (_musicAudio) { _musicAudio.pause(); _musicAudio.src = ""; _musicAudio = null; }
  if (_musicKeyHandler) { document.removeEventListener("keydown", _musicKeyHandler); _musicKeyHandler = null; }

  const songs = world.songs;
  if (!songs || songs.length === 0) return;

  const STATE_KEY = "kg-music-" + world.id;
  const VOL_KEY = "kg-music-volume";

  let idx = 0;
  let playing = false;
  let pendingSeek = 0;       // currentTime to apply once metadata loads
  let scrubbing = false;     // user is dragging the seek bar

  const audio = new Audio();
  audio.preload = "metadata";
  _musicAudio = audio;

  // Restore global volume
  let savedVol = parseFloat(localStorage.getItem(VOL_KEY));
  if (!isFinite(savedVol)) savedVol = 1;
  audio.volume = savedVol;

  const player = document.createElement("div");
  player.className = "music-player";
  player.innerHTML = `
    <div class="music-row music-top">
      <span class="music-note">♪</span>
      <div class="music-text">
        <span class="music-title"></span>
        <span class="music-artist"></span>
      </div>
      ${songs.length > 1 ? `<span class="music-count"></span>` : ""}
    </div>
    <div class="music-row music-seekrow">
      <span class="music-time music-cur">0:00</span>
      <input type="range" class="music-seek" min="0" max="1000" value="0" step="1" aria-label="Seek">
      <span class="music-time music-dur">0:00</span>
    </div>
    <div class="music-row music-ctrlrow">
      <div class="music-controls">
        <button class="music-btn prev-btn" title="Previous (←)" aria-label="Previous">&#9664;&#9664;</button>
        <button class="music-btn play-btn" title="Play/Pause (space)" aria-label="Play">&#9654;</button>
        <button class="music-btn next-btn" title="Next (→)" aria-label="Next">&#9654;&#9654;</button>
      </div>
      <div class="music-volwrap">
        <button class="music-btn vol-btn" title="Mute" aria-label="Mute">
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </button>
        <input type="range" class="music-vol" min="0" max="100" value="100" aria-label="Volume">
      </div>
    </div>
  `;
  document.body.appendChild(player);

  const titleEl = player.querySelector(".music-title");
  const artistEl = player.querySelector(".music-artist");
  const playBtn = player.querySelector(".play-btn");
  const prevBtn = player.querySelector(".prev-btn");
  const nextBtn = player.querySelector(".next-btn");
  const countEl = player.querySelector(".music-count");
  const seek = player.querySelector(".music-seek");
  const curEl = player.querySelector(".music-cur");
  const durEl = player.querySelector(".music-dur");
  const volBtn = player.querySelector(".vol-btn");
  const vol = player.querySelector(".music-vol");

  vol.value = Math.round(savedVol * 100);

  function saveState() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify({
        idx,
        time: audio.currentTime || 0
      }));
    } catch (e) {}
  }

  function loadSong(i, startAt = 0) {
    idx = i;
    const s = songs[idx];
    audio.src = s.src;
    pendingSeek = startAt;
    titleEl.textContent = s.title;
    artistEl.textContent = s.artist;
    if (countEl) countEl.textContent = `${idx + 1} / ${songs.length}`;
    seek.value = 0;
    curEl.textContent = "0:00";
    durEl.textContent = "0:00";
    saveState();
  }

  function setPlaying(state) {
    playing = state;
    playBtn.innerHTML = playing ? "&#9616;&#9616;" : "&#9654;";
    playBtn.setAttribute("aria-label", playing ? "Pause" : "Play");
    player.classList.toggle("playing", playing);
  }

  // Drive the icon from the audio's real state so it stays correct
  // even if the browser pauses/resumes on its own (e.g. background tabs).
  audio.addEventListener("play", () => setPlaying(true));
  audio.addEventListener("pause", () => setPlaying(false));

  function togglePlay() {
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }

  function goNext(autoContinue) {
    const wasPlaying = autoContinue === true || !audio.paused;
    loadSong((idx + 1) % songs.length);
    if (wasPlaying) audio.play().catch(() => {});
  }

  function goPrev() {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    const wasPlaying = !audio.paused;
    loadSong((idx - 1 + songs.length) % songs.length);
    if (wasPlaying) audio.play().catch(() => {});
  }

  // --- Transport buttons ---
  playBtn.addEventListener("click", togglePlay);
  nextBtn.addEventListener("click", () => goNext());
  prevBtn.addEventListener("click", goPrev);
  audio.addEventListener("ended", () => goNext(true));

  // --- Metadata / time updates ---
  audio.addEventListener("loadedmetadata", () => {
    durEl.textContent = fmtTime(audio.duration);
    if (pendingSeek > 0 && pendingSeek < audio.duration) {
      audio.currentTime = pendingSeek;
    }
    pendingSeek = 0;
  });

  let saveTick = 0;
  audio.addEventListener("timeupdate", () => {
    if (!scrubbing && audio.duration) {
      seek.value = (audio.currentTime / audio.duration) * 1000;
      curEl.textContent = fmtTime(audio.currentTime);
    }
    // Persist position roughly every 2s
    if (Date.now() - saveTick > 2000) { saveTick = Date.now(); saveState(); }
  });

  // --- Seek bar ---
  seek.addEventListener("input", () => {
    scrubbing = true;
    if (audio.duration) {
      curEl.textContent = fmtTime((seek.value / 1000) * audio.duration);
    }
  });
  seek.addEventListener("change", () => {
    if (audio.duration) audio.currentTime = (seek.value / 1000) * audio.duration;
    scrubbing = false;
    saveState();
  });

  // --- Volume ---
  function applyVol(v) {
    audio.volume = v;
    audio.muted = v === 0;
    vol.value = Math.round(v * 100);
    player.classList.toggle("muted", audio.muted);
    try { localStorage.setItem(VOL_KEY, String(v)); } catch (e) {}
  }
  vol.addEventListener("input", () => applyVol(vol.value / 100));
  let lastVol = savedVol || 1;
  volBtn.addEventListener("click", () => {
    if (audio.muted || audio.volume === 0) {
      applyVol(lastVol > 0 ? lastVol : 1);
    } else {
      lastVol = audio.volume;
      applyVol(0);
    }
  });

  // --- Keyboard shortcuts (world page is short; safe to claim these keys) ---
  _musicKeyHandler = (e) => {
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
    const focusedBtn = document.activeElement && document.activeElement.classList.contains("music-btn");
    if (e.key === " " || e.code === "Space") {
      if (focusedBtn) return; // let the button's own click fire
      e.preventDefault();
      togglePlay();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  };
  document.addEventListener("keydown", _musicKeyHandler);

  window.addEventListener("beforeunload", saveState);

  // --- Restore prior position for this world, else start fresh ---
  let restored = null;
  try { restored = JSON.parse(localStorage.getItem(STATE_KEY)); } catch (e) {}
  if (restored && restored.idx >= 0 && restored.idx < songs.length) {
    loadSong(restored.idx, restored.time || 0);
  } else {
    loadSong(0);
  }
  applyVol(savedVol);

  // Fade in after a short delay
  requestAnimationFrame(() => {
    setTimeout(() => player.classList.add("visible"), 600);
  });

  // Attempt autoplay; if blocked, start on first interaction.
  // (The 'play'/'pause' events keep the icon in sync, so no manual setPlaying here.)
  setTimeout(() => {
    audio.play().catch(() => {
      const startOnInteraction = () => {
        audio.play().catch(() => {});
        ["click", "keydown", "scroll", "touchstart"].forEach(ev =>
          document.removeEventListener(ev, startOnInteraction)
        );
      };
      ["click", "keydown", "scroll", "touchstart"].forEach(ev =>
        document.addEventListener(ev, startOnInteraction, { once: true, passive: true })
      );
    });
  }, 800);
}

function renderNotFound(id) {
  worldPage.innerHTML = `
    <div class="world-loading">
      <div style="text-align:center">
        <p style="margin-bottom:16px">No world found for "${id}".</p>
        <a href="index.html" style="color:var(--accent)">← Back to all worlds</a>
      </div>
    </div>
  `;
}

function init() {
  const id = getWorldId();
  if (!id) {
    window.location.href = "index.html";
    return;
  }
  const world = worlds.find(w => w.id === id);
  if (!world) {
    renderNotFound(id);
    return;
  }
  renderWorld(world);
  initMusicPlayer(world);
}

// Scroll: fade in topbar background
window.addEventListener("scroll", () => {
  if (topbar) topbar.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

// Hash navigation (back button, direct links)
window.addEventListener("hashchange", init);

init();
