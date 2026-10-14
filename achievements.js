/* Secret stamps: achievements and easter eggs collected anywhere on the site.
   Achievements.unlock(id) records one (kg-achievements) and shows a toast; Achievements.note(set, value, goal, id)
   tracks multi-step ones. The passport (passport.js) renders the list with riddles for locked stamps. */
window.Achievements = (() => {
  const KEY = 'kg-achievements', PROGRESS = 'kg-ach-progress';
  const LIST = [
    { id: 'solchan', name: 'Two suns', group: 'Discoveries', hint: 'two names for the sun. one of the regulars knows the way.',
      svg: '<circle cx="24" cy="35" r="11"/><circle cx="42" cy="28" r="10"/><path d="M41 6h2v8h-2zM41 42h2v8h-2zM56 27h8v2h-8zM20 27h-8v2h8zM51 15l5-5l1.4 1.4l-5 5zM31 39l-5 5l1.4 1.4l5-5z"/>' },
    { id: 'lost', name: 'Lost', group: 'Discoveries', hint: "go somewhere that doesn't exist.",
      svg: '<path fill-rule="evenodd" d="M32 6a26 26 0 1 0 0 52a26 26 0 1 0 0-52zM32 11a21 21 0 1 1 0 42a21 21 0 1 1 0-42z"/><path d="M32 15l6 17l-6 17l-6-17z"/>' },
    { id: 'magic-word', name: 'The magic word', group: 'Discoveries', hint: 'the homepage is listening. type a world.',
      svg: '<path fill-rule="evenodd" d="M12 12h40a5 5 0 0 1 5 5v30a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5zM13 18v28h38V18z"/><text x="32" y="41" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="22">A</text>' },
    { id: 'every-solar', name: 'Every world has a Solar', group: 'Discoveries', hint: 'say her name.',
      svg: '<path d="M30 4l5 19l19 5l-19 5l-5 19l-5-19l-19-5l19-5z M50 38l2.5 7l7 2.5l-7 2.5l-2.5 7l-2.5-7l-7-2.5l7-2.5z"/>' },
    { id: 'keepsake', name: 'Keepsake', group: 'Reading', hint: 'reach a last page, then open what you kept.',
      svg: '<path fill-rule="evenodd" d="M8 16h48v34H8z M11 19l21 15l21-15v2l-21 15l-21-15z"/>' },
    { id: 'the-end', name: 'The end', group: 'Reading', hint: "finish a story that's already finished.",
      svg: '<path d="M8 14c8-2 16-1 23 4v34c-7-5-15-6-23-4z M56 14c-8-2-16-1-23 4v34c7-5 15-6 23-4z"/>' },
    { id: 'traveler', name: 'World traveler', group: 'Reading', hint: 'set foot in every open world.',
      svg: '<path fill-rule="evenodd" d="M32 6a26 26 0 1 0 0 52a26 26 0 1 0 0-52z M32 10c-6 6-9 14-9 22s3 16 9 22c6-6 9-14 9-22s-3-16-9-22z M8 30h48v4H8z"/>' },
    { id: 'hundred', name: 'One hundred', group: 'Reading', hint: 'read a hundred chapters.',
      svg: '<text x="32" y="41" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="24">100</text>' },
    { id: 'every-door', name: 'Every door', group: 'Exploring', hint: 'knock on every door.',
      svg: '<path fill-rule="evenodd" d="M16 6h32v52H16z M21 11h22v42H21z"/><circle cx="38" cy="33" r="3"/>' },
    { id: 'vault', name: 'The Vault', group: 'Exploring', hint: 'some things came before.',
      svg: '<path fill-rule="evenodd" d="M32 4a28 28 0 1 0 0 56a28 28 0 1 0 0-56z M32 10a22 22 0 1 1 0 44a22 22 0 1 1 0-44z"/><path d="M30 14h4v36h-4z M14 30h36v4H14z"/><circle cx="32" cy="32" r="7"/>' },
    { id: 'regulars', name: 'The regulars', group: 'Exploring', hint: 'turn them all over.',
      svg: '<rect x="9" y="16" width="20" height="30" rx="3" transform="rotate(-14 19 31)"/><rect x="22" y="12" width="20" height="30" rx="3"/><rect x="35" y="16" width="20" height="30" rx="3" transform="rotate(14 45 31)"/>' },
    { id: 'hearts', name: 'Generous', group: 'Exploring', hint: 'leave a note on everything.',
      svg: '<path d="M32 56C14 43 7 33 7 24c0-7 5-12 11-12c6 0 10 4 14 9c4-5 8-9 14-9c6 0 11 5 11 12c0 9-7 19-25 32z"/>' },
    { id: 'night-owl', name: 'Night owl', group: 'Moods', hint: 'come back when the stars are out.',
      svg: '<path d="M36 8a24 24 0 1 0 20 38a20 20 0 1 1-20-38z"/><path d="M48 8l2 5l5 2l-5 2l-2 5l-2-5l-5-2l5-2z"/>' },
    { id: 'golden-hour', name: 'Golden hour', group: 'Moods', hint: 'the light gets warmer around five.',
      svg: '<path d="M10 40a22 22 0 0 1 44 0z M5 44h54v3H5z M9 50h46v3H9z M31 6h2v8h-2z M9 17l1.4-1.4l5.7 5.7l-1.4 1.4z M55 17l-1.4-1.4l-5.7 5.7l1.4 1.4z"/>' },
    { id: 'too-loud', name: 'Too loud', group: 'Moods', hint: 'make it louder.',
      svg: '<path d="M8 24h10l14-12v40L18 40H8z M38 22a14 14 0 0 1 0 20l-3-3a10 10 0 0 0 0-14z M44 14a24 24 0 0 1 0 36l-3-3a20 20 0 0 0 0-30z"/>' },
    { id: 'on-repeat', name: 'On repeat', group: 'Moods', hint: 'let a song play all the way through.',
      svg: '<path d="M24 14l28-7v35a7 7 0 1 1-4-6.3V17l-20 5v26a7 7 0 1 1-4-6.3z"/>' },
    { id: 'dead-air', name: 'Seven seconds', group: 'Moods', hint: 'stay for the silence.',
      svg: '<text x="32" y="46" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-weight="800" font-size="40">7</text>' }
  ];
  const byId = Object.fromEntries(LIST.map(a => [a.id, a]));
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} };

  function toast(a) {
    if (!document.getElementById('ach-toast-style')) {
      const style = document.createElement('style');
      style.id = 'ach-toast-style';
      style.textContent = `
        .ach-toast { position: fixed; left: 50%; bottom: 24px; z-index: 99999; display: flex; align-items: center; gap: 12px; max-width: calc(100vw - 28px); padding: 10px 18px 10px 10px; border: 1px solid #f2b84b; border-radius: 99px; background: #141113f2; color: #fff9f1; font: 13px/1.3 ui-sans-serif, system-ui, sans-serif; text-decoration: none; box-shadow: 0 0 30px #f2b84b44, 0 14px 30px #0008; transform: translate(-50%, 30px); opacity: 0; transition: transform .5s cubic-bezier(.2,1.4,.4,1), opacity .3s; }
        .ach-toast.visible { transform: translate(-50%, 0); opacity: 1; }
        .ach-toast svg { width: 34px; height: 34px; flex-shrink: 0; padding: 5px; border-radius: 50%; border: 1.5px solid #f2b84b; fill: #f2b84b; animation: ach-spin 1s cubic-bezier(.2,1.4,.4,1); }
        .ach-toast b { display: block; color: #f2b84b; font-size: 10px; letter-spacing: .16em; text-transform: uppercase; }
        @keyframes ach-spin { from { transform: rotate(-200deg) scale(.3); } to { transform: none; } }
        @media (prefers-reduced-motion: reduce) { .ach-toast { transition: none; } .ach-toast svg { animation: none; } }`;
      document.head.appendChild(style);
    }
    const el = document.createElement('a');
    el.className = 'ach-toast';
    el.href = 'index.html#passport';
    el.setAttribute('role', 'status');
    el.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true">${a.svg}</svg><span><b>Secret stamp found</b></span>`;
    el.querySelector('span').append(a.name);
    (document.querySelector('dialog[open]') || document.body).appendChild(el);
    requestAnimationFrame(() => el.classList.add('visible'));
    setTimeout(() => el.classList.add('visible'), 30);
    setTimeout(() => { el.classList.remove('visible'); setTimeout(() => el.remove(), 500); }, 5200);
    window.EntranceSounds?.home('thunk');
  }

  function unlock(id) {
    const a = byId[id];
    if (!a) return false;
    const got = read(KEY, {});
    if (got[id]) return false;
    got[id] = Date.now();
    write(KEY, got);
    toast(a);
    return true;
  }

  // Track one step of a multi-step stamp; unlock once `goal` distinct values are recorded.
  function note(set, value, goal, id) {
    const progress = read(PROGRESS, {});
    const values = new Set(progress[set] || []);
    values.add(value);
    progress[set] = [...values];
    write(PROGRESS, progress);
    if (values.size >= goal) unlock(id);
  }

  return { list: () => LIST, unlocked: () => read(KEY, {}), unlock, note };
})();
