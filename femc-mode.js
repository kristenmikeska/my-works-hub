/* The FEMC easter egg (Nov 17 2026): type "femc" on any page of My Works Hub to open femc.html, the Persona 3 landing page
   (Persona 3: Solstice at ../p3solstice/, Persona 3: Equinox at ../p3equinox/: their own sites on the same domain).
   The original FEMC mode this file used to run (the pink skin, menu, social links, compendium and secret codes) was
   retired when the games moved out; it's kept in git (tag femc-v1, branch femc-v1-backup, and this file's history), and
   its old save stays in the browser. Typing "femc" still earns the passport's "Memento mori" stamp. */
(() => {
  if (window.FemcMode) return;
  const BASE = new URL('.', document.currentScript.src).href;
  const root = document.documentElement;
  // The retired mode's pink skin was switched on by a saved flag: leave it off.
  root.classList.remove('femc', 'femc-reader');
  const stamp = () => new Promise(resolve => {
    const go = () => { try { window.Achievements?.unlock('femc'); } catch (e) {} resolve(); };
    if (window.Achievements) return go();
    const s = document.createElement('script');
    s.src = BASE + 'achievements.js?v=22'; s.onload = go; s.onerror = () => resolve();
    document.head.appendChild(s);
    setTimeout(resolve, 800);
  });
  let typed = '';
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    typed = (typed + e.key.toLowerCase()).slice(-8);
    if (typed.endsWith('femc')) { typed = ''; stamp().then(() => { location.href = BASE + 'femc.html'; }); }
  });
  window.FemcMode = { landing: BASE + 'femc.html' };
})();
