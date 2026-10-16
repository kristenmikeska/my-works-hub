/* Reading passport: three stamps per world (Started, Halfway, the last page), each showing that
   world's emblem in more ink, and a keepsake that opens as an object from the world's intro.
   To use custom art, set `image` on a world in STAMP_ART (square PNG, transparent background). */

const STAMP_ART = {
  strangers: { svg: '<path d="M59 32L56 36.8L56.9 42.3L52.4 45.6L51.1 51.1L45.6 52.4L42.3 56.9L36.8 56L32 59L27.2 56L21.7 56.9L18.4 52.4L12.9 51.1L11.6 45.6L7.1 42.3L8 36.8L5 32L8 27.2L7.1 21.7L11.6 18.4L12.9 12.9L18.4 11.6L21.7 7.1L27.2 8L32 5L36.8 8L42.3 7.1L45.6 11.6L51.1 12.9L52.4 18.4L56.9 21.7L56 27.2Z M32 14a18 18 0 1 0 0 36a18 18 0 1 0 0-36Z"/><text x="32" y="38.5" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="16">LY</text>' },
  delicate: { svg: '<path fill-rule="evenodd" d="M24 14h16l3 6h9a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4h9z M32 26a10 10 0 1 0 0 20a10 10 0 1 0 0-20z M32 30a6 6 0 1 1 0 12a6 6 0 1 1 0-12z M46 24h5v4h-5z"/>' },
  'petal-thorn': { svg: '<path d="M32 6c7 0 13 5 13 12c0 6-5 11-13 11s-13-5-13-11C19 11 25 6 32 6z M30.6 29h2.8v29h-2.8z M33.4 38l6-3l-6 6z M30.6 46l-6-3l6 6z M33.4 50c5-6 12-6 15-4c-4 4-10 6-15 4z"/>' },
  runners: { svg: '<path d="M33.1 5.1L41.6 23.3L51.2 18.2L48 33.4L60.8 37.5L42.7 48.6L39.5 59.8L33.1 54.7L26.7 59.8L23.5 48.6L4.3 37.5L19.2 32.4L13.9 18.2L25.6 23.3Z"/>' },
  peace: { svg: '<path d="M31 3h2v14h-2z M22 30l5-13h10l5 13z M32 31a4 4 0 1 1 0 8a4 4 0 1 1 0-8z"/><path opacity=".45" d="M24 40h16l12 20H12z"/>' },
  recherche: { svg: '<path fill-rule="evenodd" d="M17 22a10 10 0 1 1 0 20a10 10 0 1 1 0-20z M17 27a5 5 0 1 0 0 10a5 5 0 1 0 0-10z M26 29h30v6H26z M44 35h4v9h-4z M51 35h4v6h-4z"/>' },
  secret: { svg: '<path fill-rule="evenodd" d="M20 30v-8a12 12 0 0 1 24 0v8h-6v-8a6 6 0 0 0-12 0v8z M14 30h36a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3z M32 38a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M30.5 44h3v6h-3z"/>' },
  hoax: { svg: '<path fill-rule="evenodd" d="M12 12h40a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H30l-11 9v-9h-7a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z M21 25a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M32 25a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M43 25a4 4 0 1 0 0 8a4 4 0 1 0 0-8z"/>' },
  casual: { svg: '<path fill-rule="evenodd" d="M24 18v-4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4h-4v-3h-8v3z M12 18h40a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V22a4 4 0 0 1 4-4z M20 18h4v36h-4z M40 18h4v36h-4z"/>' },
  havenbrook: { svg: '<path fill-rule="evenodd" d="M32 4L60 32L32 60L4 32Z M32 12L21 23L32 34L43 23Z M21 35L32 46L43 35L32 24.5Z M32 38L24 46L32 54L40 46Z M12 32L19 39L26 32L19 25Z M38 32L45 39L52 32L45 25Z"/>' },
  'soul-of-minji': { svg: '<path d="M32 54C14 41 8 32 8 23c0-7 5-12 11-12c6 0 10 4 13 9c3-5 7-9 13-9c6 0 11 5 11 12c0 9-6 18-24 31z"/><path d="M50 4l2.5 6.5L59 13l-6.5 2.5L50 22l-2.5-6.5L41 13l6.5-2.5z"/>' },
  'saint-of-dead-air': { svg: '<path fill-rule="evenodd" d="M24 6h16v28a8 8 0 0 1-16 0z M17 30h3a12 12 0 0 0 24 0h3a15 15 0 0 1-13.5 14.9V52H42v4H22v-4h8.5v-7.1A15 15 0 0 1 17 30z"/>' },
  go: { svg: '<path d="M18 38a10 10 0 0 1 1-20a14 14 0 0 1 26-2a11 11 0 0 1 2 22z M20 44l4 1l-4 11l-4-1z M32 44l4 1l-4 11l-4-1z M44 44l4 1l-4 11l-4-1z"/>' }
};

/* How each world's keepsake opens. `kicker` sits above the title; `decor` is extra markup inside the object. */
const KEEPSAKE_THEMES = {
  strangers: { kicker: 'Together with their families', decor: '<span class="ks-seal"><i>L·Y</i></span>' },
  delicate: { kicker: 'THE PULSE · Exclusive', decor: '' },
  'petal-thorn': { kicker: 'SF Shock · match complete · GG', decor: '' },
  runners: { kicker: 'SUgram · campus feed', decor: '<span class="ks-likes">♥ ✦ ♥</span>' },
  peace: { kicker: 'Case file · interview transcript', decor: '<span class="ks-stamp">Confidential</span>' },
  recherche: { kicker: 'The Lee Residence', decor: '' },
  secret: { kicker: 'rinsoos 🔒 · close friends', decor: '' },
  hoax: { kicker: 'BESTAY CENTRAL', decor: '' },
  casual: { kicker: 'Mercer · a note on the lease', decor: '' },
  havenbrook: { kicker: 'DMHS · the back of the hall pass', decor: '' },
  'soul-of-minji': { kicker: '[SYSTEM] Quest complete', decor: '' },
  'saint-of-dead-air': { kicker: 'Last pass · setlist', decor: '' },
  go: { kicker: 'DMHS · senior year', decor: '' }
};

// passport.html has no app.js, so bring its reading-progress reader along.
if (typeof getProgress !== "function") {
  window.getProgress = id => {
    try {
      const saved = JSON.parse(localStorage.getItem("kg-reading-" + id));
      return saved && Number.isInteger(saved.idx) && saved.idx >= 0 && Number.isFinite(saved.percent) && saved.percent >= 0 && saved.percent <= 100 ? saved : null;
    } catch (e) { return null; }
  };
}

function readSeenStamps() {
  try { return new Set(JSON.parse(localStorage.getItem("kg-stamps-seen")) || []); } catch (e) { return new Set(); }
}

function readStamps() {
  try { return JSON.parse(localStorage.getItem("kg-stamps")) || {}; } catch (e) { return {}; }
}

function stampArt(id) {
  const art = STAMP_ART[id];
  if (art && art.image) return `<span class="stamp-art stamp-art-image"><img class="ghost" src="${art.image}" alt=""><img class="ink" src="${art.image}" alt=""></span>`;
  const svg = art ? art.svg : '<circle cx="32" cy="32" r="22"/>';
  return `<span class="stamp-art"><svg class="ghost" viewBox="0 0 64 64" aria-hidden="true">${svg}</svg><svg class="ink" viewBox="0 0 64 64" aria-hidden="true">${svg}</svg></span>`;
}

function renderPassport() {
  renderTeaser();
  const grid = document.querySelector("#passportGrid");
  if (!grid) return;
  const stamps = readStamps();
  const seen = readSeenStamps();
  const dateFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
  let earnedCount = 0;
  grid.replaceChildren(...worlds.map(world => {
    const mine = stamps[world.id] || {};
    const prog = getProgress(world.id);
    const earned = {
      started: mine.started || (prog ? true : null),
      halfway: mine.halfway || (prog && prog.percent >= 50 ? true : null),
      finished: mine.finished || (prog && prog.percent >= 100 ? true : null)
    };
    const page = document.createElement("article");
    page.className = "passport-page";
    page.style.setProperty("--a", world.accent);
    const head = document.createElement("a");
    head.className = "passport-world"; head.href = `world.html#${world.id}`; head.textContent = world.title;
    const slots = document.createElement("div");
    slots.className = "passport-slots";
    [["started", "Started"], ["halfway", "Halfway"], ["finished", world.status === "Completed" ? "Finished" : "Caught up"]].forEach(([key, label]) => {
      const when = earned[key];
      const isKeepsake = key === "finished" && when && mine.keepsake && mine.keepsake.lines && mine.keepsake.lines.length;
      const slot = document.createElement("span");
      slot.className = "passport-slot";
      const stamp = document.createElement(isKeepsake ? "button" : "span");
      stamp.innerHTML = stampArt(world.id);
      const caption = document.createElement("small");
      if (when) {
        earnedCount++;
        stamp.className = `stamp stamp-${key}${isKeepsake ? " stamp-keepsake" : ""}${seen.has(`${world.id}:${key}`) ? "" : " stamp-pending"}`;
        stamp.dataset.stamp = `${world.id}:${key}`;
        caption.textContent = label;
        if (typeof when === "number") { const date = document.createElement("span"); date.className = "passport-date"; date.textContent = dateFmt.format(new Date(when)); caption.append(document.createElement("br"), date); }
        stamp.setAttribute("aria-label", `${world.title}: ${label} stamp collected${isKeepsake ? ", open keepsake" : ""}`);
        if (isKeepsake) { stamp.type = "button"; stamp.title = "Open keepsake"; stamp.addEventListener("click", () => openKeepsake(world, mine.keepsake)); }
      } else {
        stamp.className = "stamp stamp-empty";
        caption.textContent = label;
        stamp.setAttribute("aria-label", `${world.title}: ${label} stamp not collected yet`);
      }
      slot.append(stamp, caption);
      slots.appendChild(slot);
    });
    page.append(head, slots);
    return page;
  }));
  const count = document.querySelector("#passportCount");
  if (count) count.textContent = `${earnedCount} of ${worlds.length * 3} stamps collected`;
  renderHolder(earnedCount);
  checkReadingStamps(stamps);
  renderSecretStamps();
}

/* Every reading stamp earned so far, newest first: [{ world, key, when }]. */
function earnedReadingStamps() {
  const stamps = readStamps(), out = [];
  worlds.forEach(world => {
    const mine = stamps[world.id] || {}, prog = getProgress(world.id);
    const earned = { started: mine.started || (prog ? true : null), halfway: mine.halfway || (prog && prog.percent >= 50 ? true : null), finished: mine.finished || (prog && prog.percent >= 100 ? true : null) };
    Object.entries(earned).forEach(([key, when]) => { if (when) out.push({ world, key, when: typeof when === "number" ? when : 0 }); });
  });
  return out.sort((a, b) => b.when - a.when);
}

function visibleSecrets() {
  if (!window.Achievements) return { list: [], got: {} };
  const got = Achievements.unlocked();
  return { list: Achievements.list().filter(a => !a.side || got.femc), got };
}

/* Homepage card: counts, the newest stamps, and a way in to passport.html. */
function renderTeaser() {
  const card = document.querySelector("#passportTeaser");
  if (!card) return;
  const reading = earnedReadingStamps(), { list, got } = visibleSecrets();
  const secrets = list.filter(a => got[a.id]).map(a => ({ secret: a, when: got[a.id] }));
  const recent = [...reading, ...secrets].sort((a, b) => b.when - a.when).slice(0, 7);
  card.querySelector(".pt-counts").innerHTML = `<span><b>${reading.length}</b> of ${worlds.length * 3} reading stamps</span><span><b>${secrets.length}</b> of ${list.length} secret stamps</span>`;
  const row = card.querySelector(".pt-stamps");
  row.replaceChildren(...(recent.length ? recent : [null, null, null]).map((item, i) => {
    const stamp = document.createElement("span");
    stamp.style.setProperty("--rot", `${[-7, 5, -3, 6, -5, 4, -2][i]}deg`);
    if (!item) { stamp.className = "stamp stamp-empty"; stamp.innerHTML = stampArt(""); return stamp; }
    if (item.secret) {
      stamp.className = "stamp stamp-finished";
      stamp.style.setProperty("--a", "#f2b84b");
      stamp.innerHTML = `<span class="stamp-art"><svg class="ink" viewBox="0 0 64 64" aria-hidden="true">${item.secret.svg}</svg></span>`;
      stamp.title = item.secret.name;
    } else {
      stamp.className = `stamp stamp-${item.key}`;
      stamp.style.setProperty("--a", item.world.accent);
      stamp.innerHTML = stampArt(item.world.id);
      stamp.title = `${item.world.title} · ${item.key}`;
    }
    return stamp;
  }));
  card.querySelector(".pt-empty").hidden = recent.length > 0;
}

/* passport.html's holder page: counts and a machine-readable zone made from them. */
function renderHolder(readingCount) {
  const holder = document.querySelector("#holder");
  if (!holder) return;
  const { list, got } = visibleSecrets();
  const found = list.filter(a => got[a.id]).length;
  const dates = [...Object.values(got), ...earnedReadingStamps().map(s => s.when)].filter(n => n > 0);
  const issued = dates.length ? new Date(Math.min(...dates)) : new Date();
  const visited = worlds.filter(w => getProgress(w.id) || (readStamps()[w.id] || {}).started).length;
  const fmt = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "short", year: "numeric" });
  holder.querySelector("[data-issued]").textContent = fmt.format(issued).toUpperCase();
  holder.querySelector("[data-visited]").textContent = `${visited} of ${worlds.length}`;
  holder.querySelector("[data-reading]").textContent = `${readingCount} of ${worlds.length * 3}`;
  holder.querySelector("[data-secret]").textContent = `${found} of ${list.length}`;
  const pad = (v, n) => String(v).padStart(n, "0");
  const ymd = d => `${pad(d.getFullYear() % 100, 2)}${pad(d.getMonth() + 1, 2)}${pad(d.getDate(), 2)}`;
  const line1 = `P<KGA<<UNIVERSE<ARCHIVE<<READER`.padEnd(44, "<");
  const line2 = `${pad(readingCount, 3)}${pad(found, 3)}${pad(visited, 2)}<<${ymd(issued)}<<${ymd(new Date())}<<${worlds.length}WORLDS`.padEnd(44, "<").slice(0, 44);
  holder.querySelector(".pp-mrz").textContent = `${line1}\n${line2}`;
}

/* Stamps earned since the last visit press into the pages, one by one. */
function pressInStamps() {
  const pending = [...document.querySelectorAll("#passportGrid .stamp-pending")];
  if (!pending.length) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen = readSeenStamps();
  pending.forEach((stamp, i) => {
    seen.add(stamp.dataset.stamp);
    const press = () => { stamp.classList.remove("stamp-pending"); if (!reduced) stamp.classList.add("stamp-pressing"); window.EntranceSounds?.home("thunk"); };
    if (reduced) press(); else setTimeout(press, 500 + i * 450);
  });
  try { localStorage.setItem("kg-stamps-seen", JSON.stringify([...seen])); } catch (e) {}
}

function checkReadingStamps(stamps) {
  const A = window.Achievements;
  if (!A) return;
  let chapters = 0, startedAll = true;
  worlds.forEach(world => {
    const mine = stamps[world.id] || {}, prog = getProgress(world.id);
    if (world.status === "Completed" && (mine.finished || (prog && prog.percent >= 100))) A.unlock("the-end");
    if (!world.readingPaused && !mine.started && !prog) startedAll = false;
    chapters += Math.max(Number.isInteger(mine.maxIdx) ? mine.maxIdx + 1 : 0, prog ? prog.idx + 1 : 0);
  });
  if (startedAll) A.unlock("traveler");
  if (chapters >= 100) A.unlock("hundred");
}

function renderSecretStamps() {
  const grid = document.querySelector("#secretGrid");
  if (!grid || !window.Achievements) return;
  const got = Achievements.unlocked();
  const dateFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });
  // Stamps from the other side (FEMC mode) stay hidden until you've crossed over once.
  const { list } = visibleSecrets();
  const card = a => {
    const when = got[a.id];
    const el = document.createElement("div");
    el.className = `secret-stamp${when ? " secret-found" : ""}`;
    el.innerHTML = `<span class="stamp ${when ? "stamp-finished" : "stamp-locked"}"><span class="stamp-art"><svg class="ghost" viewBox="0 0 64 64" aria-hidden="true">${a.svg}</svg><svg class="ink" viewBox="0 0 64 64" aria-hidden="true">${a.svg}</svg></span></span><span class="secret-copy"><b></b><small></small></span>`;
    el.querySelector("b").textContent = when ? a.name : "???";
    el.querySelector("small").textContent = when ? `${a.group} · ${dateFmt.format(new Date(when))}` : a.hint;
    return el;
  };
  const fill = (gridEl, countEl, items) => {
    gridEl.replaceChildren(...items.map(card));
    if (countEl) countEl.textContent = `${items.filter(a => got[a.id]).length} of ${items.length} found`;
  };
  // Crossovers (the novels leaking into FEMC mode) get their own page section.
  fill(grid, document.querySelector("#secretCount"), list.filter(a => a.group !== "Crossovers"));
  const cross = list.filter(a => a.group === "Crossovers"), section = document.querySelector("#crossSection");
  if (section) {
    section.hidden = !cross.length;
    if (cross.length) fill(document.querySelector("#crossGrid"), document.querySelector("#crossCount"), cross);
  }
}

function openKeepsake(world, keepsake) {
  const dialog = document.querySelector("#keepsake");
  if (!dialog) return;
  const theme = KEEPSAKE_THEMES[world.id] || { kicker: "Keepsake", decor: "" };
  dialog.dataset.world = world.id;
  dialog.style.setProperty("--a", world.accent);
  const object = dialog.querySelector(".ks-object");
  object.className = `ks-object ks-${world.id}`;
  object.innerHTML = `${theme.decor}<p class="ks-kicker"></p><h3 class="ks-title" id="keepsakeTitle"></h3><p class="ks-chapter"></p><div class="ks-lines"></div><p class="ks-date"></p>`;
  object.querySelector(".ks-kicker").textContent = theme.kicker;
  object.querySelector(".ks-title").textContent = world.title;
  object.querySelector(".ks-chapter").textContent = keepsake.chapter || "";
  object.querySelector(".ks-lines").replaceChildren(...keepsake.lines.map((line, i) => {
    const p = document.createElement("p"); p.textContent = line; p.style.setProperty("--i", i); return p;
  }));
  object.querySelector(".ks-date").textContent = keepsake.at ? `Kept ${new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(keepsake.at))}` : "";
  dialog.showModal();
  window.EntranceSounds?.preview(world.id);
  window.Achievements?.unlock('keepsake');
}
