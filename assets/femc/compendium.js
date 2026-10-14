/* Kat's fictional favorites, shown in compendium.html (FEMC mode only).
   Each entry unlocks when its stamp is found (unlock: a stamp id from achievements.js, or 'always').
   img paths are relative to the site root; link is optional. */
window.FEMC_COMPENDIUM = [
  {
    id: 'femc', name: 'FeMC', from: 'Persona 3 Portable', img: 'assets/femc/img/femc-portrait.jpg', unlock: 'femc',
    note: 'The girl with the XXII hairclips and the red armband. She leads S.E.E.S. through the Dark Hour.'
  },
  {
    id: 'akihiko', name: 'Akihiko Sanada', from: 'Persona 3 Portable', img: 'assets/femc/img/akihiko-hug.jpg', unlock: 'senpai', link: 'akihiko.html',
    note: 'Boxing club captain, protein enthusiast, and S.E.E.S. senpai. Never knows when to stop.'
  }
];
