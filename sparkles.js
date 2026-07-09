(function () {

  /* ── cursor sparkles ── */
  var chars  = ['✦', '★', '✿', '♡', '☆', '·', '✶', '⭑'];
  var colors = ['#c4a8ff', '#31d0c3', '#ff7aaa', '#f2b84b', '#fff9f1'];
  var last = 0;

  document.addEventListener('mousemove', function (e) {
    var now = Date.now();
    if (now - last < 90) return;
    last = now;
    var s = document.createElement('span');
    s.className = 'cursor-spark';
    s.textContent = chars[Math.floor(Math.random() * chars.length)];
    s.style.left = e.clientX + 'px';
    s.style.top  = e.clientY + 'px';
    s.style.color = colors[Math.floor(Math.random() * colors.length)];
    s.style.fontSize = (0.5 + Math.random() * 0.65) + 'rem';
    document.body.appendChild(s);
    setTimeout(function () { s.remove(); }, 950);
  });

  /* ── scroll reveal ── */
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

  function observeAll() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      obs.observe(el);
    });
    /* auto-reveal vault entries with stagger */
    document.querySelectorAll('.vault-entry:not(.reveal), .vault-group-label:not(.reveal), .vault-hero:not(.reveal)').forEach(function (el, i) {
      el.classList.add('reveal');
      if (el.classList.contains('vault-entry')) {
        el.style.transitionDelay = (i * 0.035) + 's';
      }
      obs.observe(el);
    });
  }

  observeAll();
  window.observeReveal = observeAll;

})();
