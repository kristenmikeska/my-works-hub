/* About page: the regulars cards flip over to show their record across the archive. */
(function () {
  const PEOPLE = {
    jungwon: { label: 'Jungwon', names: ['jungwon'], accent: '#9d73ff' },
    haechan: { label: 'Haechan', names: ['haechan', 'donghyuck'], accent: '#31d0c3' },
    minji: { label: 'Minji', names: ['minji'], accent: '#ff4f8b' }
  };
  const mentions = (list, names) => (list || []).some(entry => names.some(n => entry.toLowerCase().includes(n)));

  document.querySelectorAll('.regular-card').forEach(card => {
    const key = Object.keys(PEOPLE).find(k => card.classList.contains(k));
    if (!key || typeof worlds === 'undefined') return;
    const person = PEOPLE[key];
    const appears = worlds.filter(w => mentions(w.cast, person.names) || mentions(w.loveInterests, person.names) || mentions([w.lead], person.names));
    const loved = appears.filter(w => mentions(w.loveInterests, person.names));

    const front = document.createElement('div');
    front.className = 'rc-front';
    while (card.firstChild) front.appendChild(card.firstChild);
    const back = document.createElement('div');
    back.className = 'rc-back';
    back.style.setProperty('--a', person.accent);
    back.innerHTML = `
      <p class="rc-back-kicker">${person.label} · in the archive</p>
      <p class="rc-back-count"><b>${appears.length}</b> worlds<span> · love interest in ${loved.length}</span></p>
      <div class="rc-worlds"></div>
      <p class="rc-back-hint">tap to turn back</p>`;
    const list = back.querySelector('.rc-worlds');
    appears.forEach(w => {
      const a = document.createElement('a');
      a.className = 'rc-world'; a.href = `world.html#${w.id}`; a.style.setProperty('--a', w.accent);
      a.innerHTML = typeof stampArt === 'function' ? stampArt(w.id) : '';
      const name = document.createElement('span'); name.textContent = w.title + (mentions(w.loveInterests, person.names) ? ' ★' : '');
      a.appendChild(name);
      a.addEventListener('click', e => e.stopPropagation());
      list.appendChild(a);
    });
    if (key === 'haechan') {
      const sun = document.createElement('a');
      sun.className = 'rc-sun'; sun.href = 'solchan.html'; sun.title = 'full sun';
      sun.setAttribute('aria-label', 'full sun');
      sun.innerHTML = '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="12"/><path d="M31 4h2v12h-2zM31 48h2v12h-2zM4 31h12v2H4zM48 31h12v2H48zM11 12.4l1.4-1.4l8.5 8.5l-1.4 1.4zM43.1 44.5l1.4-1.4l8.5 8.5l-1.4 1.4zM51.6 11l1.4 1.4l-8.5 8.5l-1.4-1.4zM20.9 43.1l1.4 1.4l-8.5 8.5l-1.4-1.4z"/></svg>';
      sun.addEventListener('click', e => e.stopPropagation());
      back.appendChild(sun);
    }
    const inner = document.createElement('div');
    inner.className = 'rc-inner';
    inner.append(front, back);
    card.appendChild(inner);

    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');
    card.setAttribute('aria-label', `${person.label}: flip to see every world they appear in`);
    const flip = () => {
      const flipped = card.classList.toggle('flipped');
      card.setAttribute('aria-pressed', String(flipped));
      if (flipped) window.Achievements?.note('regulars-flipped', key, Object.keys(PEOPLE).length, 'regulars');
    };
    card.addEventListener('click', flip);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } });
  });
})();
