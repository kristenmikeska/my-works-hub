(function () {
  // Inject cover CSS
  const style = document.createElement("style");
  style.textContent = `
    #page-cover {
      position: fixed;
      inset: 0;
      background: var(--bg, #12100f);
      z-index: 9998;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.28s ease;
    }
    #page-cover.active {
      opacity: 1;
      pointer-events: auto;
    }
  `;
  document.head.appendChild(style);

  const cover = document.createElement("div");
  cover.id = "page-cover";
  cover.setAttribute("aria-hidden", "true");
  document.body.appendChild(cover);

  document.addEventListener("click", e => {
    const link = e.target.closest("a[href]");
    if (!link || link.target === "_blank") return;

    const href = link.getAttribute("href");
    // Skip: pure hash, external, mailto/tel
    if (!href || href.startsWith("#") || /^(https?:|mailto:|tel:)/.test(href)) return;

    e.preventDefault();
    cover.classList.add("active");

    let gone = false;
    const go = () => {
      if (gone) return;
      gone = true;
      window.location.href = href;
    };
    cover.addEventListener("transitionend", go, { once: true });
    setTimeout(go, 380); // safety fallback
  });
})();
