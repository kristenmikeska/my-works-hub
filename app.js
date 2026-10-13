function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

const fmt = new Intl.NumberFormat("en-US");

function readingTime(words) {
  const min = Math.round(words / 250);
  if (min < 60) return `${min} min read`;
  const hr = Math.round(min / 60);
  return `${hr} hr read`;
}

function getProgress(id) {
  try {
    const saved = JSON.parse(localStorage.getItem("kg-reading-" + id));
    return saved && Number.isInteger(saved.idx) && saved.idx >= 0 && Number.isFinite(saved.percent) && saved.percent >= 0 && saved.percent <= 100 ? saved : null;
  } catch (e) {
    return null;
  }
}

function updateStats() {
  const totalWords = worlds.reduce((s, w) => s + w.words, 0);
  const totalChapters = worlds.reduce((s, w) => s + w.chapters, 0);
  const elWorlds = document.querySelector("#statWorlds");
  if (elWorlds) elWorlds.textContent = worlds.length;
  const elWords = document.querySelector("#statWords");
  const elChapters = document.querySelector("#statChapters");
  if (elWords) elWords.textContent = `${(totalWords / 1e6).toFixed(1)}M`;
  if (elChapters) elChapters.textContent = fmt.format(totalChapters);
}

function makeCard(world) {
  const a = document.createElement("a");
  a.href = `world.html#${world.id}`;
  a.className = "world-card reveal";
  a.style.setProperty("--card-accent", world.accent);

  const hasImage = Boolean(world.image);

  if (hasImage) {
    const img = document.createElement("img");
    img.src = world.image;
    img.alt = "";
    img.loading = "lazy";
    a.appendChild(img);

    const fg = document.createElement("div");
    fg.className = "world-card-fg";
    a.appendChild(fg);
  } else {
    const bg = document.createElement("div");
    bg.className = "world-card-bg";
    bg.style.background = world.worldBg || "linear-gradient(135deg, rgba(30,20,30,0.95), rgba(12,10,12,0.98))";
    a.appendChild(bg);
  }

  const content = document.createElement("div");
  content.className = "world-card-content";

  const prog = getProgress(world.id);
  const hasProg = !world.readingPaused && prog && prog.percent >= 1 && prog.percent <= 99;
  const progLabel = hasProg
    ? (prog.title || `Chapter ${prog.idx + 1}`)
    : "";

  content.innerHTML = `
    <div class="card-top">
      <span class="card-universe">${world.universe}</span>
      <span class="card-status-chip">${world.readingPaused ? "Under revision" : world.status}</span>
    </div>
    <div class="card-bottom">
      <span class="card-title">${world.title}</span>
      <span class="card-tagline">${world.tagline}</span>
      <div class="card-meta">
        <span class="card-chip">${world.lead}</span>
        <span class="card-chip">${fmt.format(world.words)} words</span>
        <span class="card-chip">${readingTime(world.words)}</span>
      </div>
      ${hasProg ? `
        <div class="card-progress" title="${prog.percent}% read">
          <div class="card-progress-track"><span style="width:${prog.percent}%"></span></div>
          <span class="card-progress-label">Continue · ${escapeHtml(progLabel)} · ${prog.percent}%</span>
        </div>
      ` : ""}
    </div>
  `;
  a.appendChild(content);
  window.CardPreviews?.decorate(a, world);
  return a;
}

const filterState = { q: "", universe: "all", status: "all", tag: "all" };
let archiveRendered = false;

function worldHaystack(w) {
  return [
    w.title, w.universe, w.lead, w.status, w.format, w.mood, w.tagline,
    (w.tags || []).join(" "), (w.readingPaused ? "Under revision" : ""), (w.cast || []).join(" "), (w.loveInterests || []).join(" ")
  ].join(" ").toLowerCase();
}

function worldMatches(w) {
  if (filterState.universe !== "all" && w.group !== filterState.universe) return false;
  if (filterState.status !== "all" && w.status !== filterState.status) return false;
  if (filterState.tag !== "all" && !(w.tags || []).includes(filterState.tag)) return false;
  if (filterState.q && !worldHaystack(w).includes(filterState.q.toLowerCase())) return false;
  return true;
}

function renderGrids() {
  const delicateGrid = document.querySelector("#delicateGrid");
  const standaloneGrid = document.querySelector("#standaloneGrid");
  if (!delicateGrid || !standaloneGrid) return;

  delicateGrid.innerHTML = "";
  standaloneGrid.innerHTML = "";

  const matched = worlds.filter(worldMatches);
  const count = document.querySelector("#resultCount");
  if (count) count.textContent = `${matched.length} ${matched.length === 1 ? "story" : "stories"}`;
  const delicate = matched.filter(w => w.group === "delicate");
  const standalone = matched.filter(w => w.group === "standalone");

  // First paint uses the staggered scroll-reveal; filter re-renders appear instantly.
  const animate = !archiveRendered;

  function place(list, grid) {
    list.forEach((w, i) => {
      const card = makeCard(w);
      if (animate) card.style.transitionDelay = `${i * 0.05}s`;
      else card.classList.add("visible");
      grid.appendChild(card);
    });
  }
  place(delicate, delicateGrid);
  place(standalone, standaloneGrid);

  const delicateBlock = document.querySelector("#delicateBlock");
  const standaloneBlock = document.querySelector("#standaloneBlock");
  if (delicateBlock) delicateBlock.hidden = delicate.length === 0;
  if (standaloneBlock) standaloneBlock.hidden = standalone.length === 0;

  const empty = document.querySelector("#archiveEmpty");
  if (empty) empty.hidden = matched.length !== 0;

  if (animate) window.observeReveal?.();
  archiveRendered = true;
}

function initFilters() {
  const search = document.querySelector("#archiveSearch");
  const clear = document.querySelector("#searchClear");

  if (search) {
    search.addEventListener("input", () => {
      filterState.q = search.value.trim();
      if (clear) clear.hidden = !search.value;
      renderGrids();
    });
  }
  if (clear && search) {
    clear.addEventListener("click", () => {
      search.value = "";
      filterState.q = "";
      clear.hidden = true;
      renderGrids();
      search.focus();
    });
  }

  const tagSelect = document.querySelector("#tagFilter");
  if (tagSelect) {
    [...new Set(worlds.flatMap(w => w.tags || []))].sort().forEach(tag => {
      const option = document.createElement("option");
      option.value = tag; option.textContent = tag; tagSelect.appendChild(option);
    });
    tagSelect.addEventListener("change", () => { filterState.tag = tagSelect.value; renderGrids(); });
  }
  document.querySelector("#resetFilters")?.addEventListener("click", () => {
    Object.assign(filterState, { q: "", universe: "all", status: "all", tag: "all" });
    if (search) search.value = "";
    if (clear) clear.hidden = true;
    if (tagSelect) tagSelect.value = "all";
    document.querySelectorAll(".filter-chip[data-value]").forEach(chip => {
      const active = chip.dataset.value === "all";
      chip.classList.toggle("active", active); chip.setAttribute("aria-pressed", active);
    });
    renderGrids();
  });
  document.querySelectorAll(".filter-group").forEach(group => {
    const key = group.dataset.group;
    group.querySelectorAll(".filter-chip").forEach(chip => {
      chip.setAttribute("aria-pressed", chip.classList.contains("active"));
      chip.addEventListener("click", () => {
        filterState[key] = chip.dataset.value;
        group.querySelectorAll(".filter-chip").forEach(c => { c.classList.toggle("active", c === chip); c.setAttribute("aria-pressed", c === chip); });
        renderGrids();
      });
    });
  });
}

function renderSites() {
  const sitesGrid = document.querySelector("#sitesGrid");
  if (!sitesGrid) return;

  const withSites = worlds.filter(w => w.site);
  sitesGrid.innerHTML = withSites.map((w, i) => `
    <article class="site-card reveal" style="--site-accent: ${w.accent}; transition-delay: ${i * 0.1}s">
      ${w.site.preview ? `<img src="${w.site.preview}" alt="${w.title} universe site preview" loading="lazy">` : ""}
      <div class="site-card-overlay"></div>
      <div class="site-card-content">
        <span class="site-status">${w.site.status}</span>
        <h3>${w.site.title}</h3>
        <p>${w.site.description}</p>
        <a class="site-link" href="${w.site.href}">Open ${w.title} →</a>
      </div>
    </article>
  `).join("");
}

function renderShelves() {
  const continuing = worlds.map(world => ({ world, progress: getProgress(world.id) }))
    .filter(({world, progress}) => !world.readingPaused && progress && progress.percent < 100)
    .sort((a, b) => (Number(b.progress.updated) || 0) - (Number(a.progress.updated) || 0));
  const continueSection = document.querySelector("#continueSection");
  if (continueSection) {
    continueSection.hidden = continuing.length === 0;
    document.querySelector("#continueGrid").replaceChildren(...continuing.map(({world, progress}) => {
      const card = shelfCard(world);
      const idx = Math.min(progress.idx, world.chapters - 1);
      const anchor = /^ch-(\d+|opening)$/.test(progress.anchor || "") ? progress.anchor : `ch-${idx}`;
      card.href = `${world.readers[0][1]}?resume=1#${anchor}`;
      const detail = document.createElement("span"); detail.className = "shelf-detail";
      detail.textContent = `${progress.title || `Chapter ${idx + 1}`} · ${progress.percent}% read`;
      card.querySelector(".shelf-copy").appendChild(detail);
      return card;
    }));
  }
  const recent = worlds.filter(w => w.latestUpdate && !w.readingPaused)
    .sort((a,b) => b.latestUpdate.date.localeCompare(a.latestUpdate.date)).slice(0,4);
  const recentSection = document.querySelector("#recentSection");
  if (recentSection) {
    recentSection.hidden = recent.length === 0;
    document.querySelector("#recentGrid").replaceChildren(...recent.map(world => {
      const card = shelfCard(world), update = world.latestUpdate;
      card.href = `world.html#${world.id}`;
      const copy = card.querySelector(".shelf-copy");
      const date = document.createElement("time"); date.dateTime = update.date;
      date.textContent = new Intl.DateTimeFormat("en-US", {month:"short", day:"numeric", year:"numeric", timeZone:"UTC"}).format(new Date(update.date + "T12:00:00Z"));
      const label = document.createElement("span"); label.className = "shelf-detail"; label.textContent = update.label;
      const chapter = document.createElement("span"); chapter.className = "shelf-detail"; chapter.textContent = `Latest: ${update.chapter}`;
      copy.append(date, label, chapter); return card;
    }));
  }
}

function shelfCard(world) {
  const card = document.createElement("a"); card.className = "shelf-card";
  const img = document.createElement("img"); img.src = world.image; img.alt = ""; img.loading = "lazy";
  const copy = document.createElement("span"); copy.className = "shelf-copy";
  const title = document.createElement("strong"); title.textContent = world.title;
  copy.appendChild(title); card.append(img, copy); return card;
}

window.addEventListener("pageshow", () => { renderShelves(); renderGrids(); renderPassport(); });
window.addEventListener("storage", event => { if (!event.key || event.key.startsWith("kg-reading-") || event.key === "kg-stamps") { renderShelves(); renderGrids(); renderPassport(); } });
updateStats();
renderShelves();
renderPassport();
renderGrids();
initFilters();
renderSites();
window.observeReveal?.();
