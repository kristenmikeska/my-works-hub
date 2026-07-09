const fmt = new Intl.NumberFormat("en-US");

function readingTime(words) {
  const min = Math.round(words / 250);
  if (min < 60) return `${min} min read`;
  const hr = Math.round(min / 60);
  return `${hr} hr read`;
}

function getProgress(id) {
  try {
    return JSON.parse(localStorage.getItem("kg-reading-" + id));
  } catch (e) {
    return null;
  }
}

function updateStats() {
  const totalWords = worlds.reduce((s, w) => s + w.words, 0);
  const totalChapters = worlds.reduce((s, w) => s + w.chapters, 0);
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
  const hasProg = prog && prog.percent >= 1 && prog.percent <= 99;
  const progLabel = hasProg
    ? (prog.title || `Chapter ${prog.idx + 1}`)
    : "";

  content.innerHTML = `
    <div class="card-top">
      <span class="card-universe">${world.universe}</span>
      <span class="card-status-chip">${world.status}</span>
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
          <span class="card-progress-label">Continue · ${progLabel} · ${prog.percent}%</span>
        </div>
      ` : ""}
    </div>
  `;
  a.appendChild(content);
  return a;
}

const filterState = { q: "", universe: "all", status: "all" };
let archiveRendered = false;

function worldHaystack(w) {
  return [
    w.title, w.universe, w.lead, w.status, w.format, w.mood, w.tagline,
    (w.cast || []).join(" "), (w.loveInterests || []).join(" ")
  ].join(" ").toLowerCase();
}

function worldMatches(w) {
  if (filterState.universe !== "all" && w.group !== filterState.universe) return false;
  if (filterState.status !== "all" && w.status !== filterState.status) return false;
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

  document.querySelectorAll(".filter-group").forEach(group => {
    const key = group.dataset.group;
    group.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        filterState[key] = chip.dataset.value;
        group.querySelectorAll(".filter-chip").forEach(c => c.classList.toggle("active", c === chip));
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

updateStats();
renderGrids();
initFilters();
renderSites();
window.observeReveal?.();
