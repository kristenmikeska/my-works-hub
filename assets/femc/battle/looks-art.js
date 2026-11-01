/* Persona 3: Solstice · the outfit extras' shared drawings (FEMC-SKINS-BATTLE-DESIGN part 8 and S3, Nov 1 2026).
   Loaded by femc-battle.html (battle.js: the HUD theme frames, the All-Out burst, the entrance card, couple Showtime, the
   hand charge's point) and femc-game.html (game/tryon.js: the Wardrobe's "Try it on" showcase), so both draw the same.
   FIGHTER_HAND: the casting hand as [x, y] shares of the pose frame canvas, measured by eye from each pose-3 frame; a look
   uses its fighter's unless its item has `hand`; anyone else HAND_DEFAULT (about the chest).
   THEME_SVG / THEME_ART: each theme's small SVG motifs (24 x 24, `currentColor`) and colours; motif(theme, i, style, cls)
   draws the theme's i-th shape in its i-th colour (`style` places it; --r a resting turn). */
window.FemcLooksArt = (() => {
  const FIGHTER_HAND = { solar: [0.22, 0.17], akihiko: [0.25, 0.25], yukari: [0.35, 0.17], junpei: [0.75, 0.23], mitsuru: [0.73, 0.31], aigis: [0.33, 0.19],
    koromaru: [0.32, 0.41], shinjiro: [0.73, 0.16], haechan: [0.32, 0.2], jungwon: [0.2, 0.22], jihoon: [0.16, 0.12], minji: [0.21, 0.2] };
  const HAND_DEFAULT = [0.5, 0.3];

  const THEME_SVG = {
    heart: '<path fill="currentColor" d="M12 21s-8.5-5.3-8.5-11.3A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 3.1C20.5 15.7 12 21 12 21z"/>',
    sun: '<circle cx="12" cy="12" r="4.6" fill="currentColor"/><path d="M12 1.8v3.4M12 18.8v3.4M1.8 12h3.4M18.8 12h3.4M4.8 4.8l2.4 2.4M16.8 16.8l2.4 2.4M4.8 19.2l2.4-2.4M16.8 7.2l2.4-2.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    moon: '<path fill="currentColor" d="M15.5 2.5a9.5 9.5 0 1 0 6 16.9A7.6 7.6 0 0 1 15.5 2.5z"/>',
    flower: '<g fill="currentColor">' + [0, 72, 144, 216, 288].map(a => `<ellipse cx="12" cy="6.6" rx="3.3" ry="5" transform="rotate(${a} 12 12)"/>`).join('') + '</g><circle cx="12" cy="12" r="2.2" fill="#fff"/>',
    star: '<path fill="currentColor" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z"/>',
    glint: '<path fill="currentColor" d="M12 1c.9 5.8 3.2 8.1 11 11-7.8 2.9-10.1 5.2-11 11-.9-5.8-3.2-8.1-11-11 7.8-2.9 10.1-5.2 11-11z"/>',
    bubble: '<circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7.6 9.4a5 5 0 0 1 3.6-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    note: '<path fill="currentColor" d="M9 17.5a3.2 3.2 0 1 1-2-3V4l12-2.2v13a3.2 3.2 0 1 1-2-3V5.5L9 7z"/>',
    flake: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17l17.4-10M9.4 3.7 12 6.3l2.6-2.6M9.4 20.3 12 17.7l2.6 2.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    bat: '<path fill="currentColor" d="M12 9.2c.8-1.4 1.6-2.1 2-2.1 0 .9-.2 1.5-.4 2 2.6-.9 5.5-.4 8.4 2.2-1.6-.2-2.8.3-3.4 1.5-1-.7-2.1-.8-3.2-.2-.9.4-1.7 1.4-2.4 3-.5-.9-.8-1.5-1-1.5s-.5.6-1 1.5c-.7-1.6-1.5-2.6-2.4-3-1.1-.6-2.2-.5-3.2.2C4.8 11.6 3.6 11.1 2 11.3c2.9-2.6 5.8-3.1 8.4-2.2-.2-.5-.4-1.1-.4-2 .4 0 1.2.7 2 2.1z"/>',
    thorn: '<path d="M3 21C8 15.5 10.5 9 21 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path fill="currentColor" d="M8.2 15.6 4.6 14.4l4.6-.9zM12 10.8 10.9 7l2.6 3zM16.3 7.3l3.4.3-3 1.3z"/>',
    card: '<rect x="5" y="2.5" width="14" height="19" rx="2.2" fill="currentColor"/><path d="M12 7.2l3.2 4.8-3.2 4.8-3.2-4.8z" fill="#14070f"/>',
    butterfly: '<path fill="currentColor" d="M12 8c-1.2-3.2-5-5.2-8-4.8C2 3.5 2.4 8.2 5 10.1c-2.2 1-2.6 4.6-.6 6.1s5.6-.6 7.6-4.1c2 3.5 5.6 5.6 7.6 4.1s1.6-5.1-.6-6.1c2.6-1.9 3-6.6 1-6.9-3-.4-6.8 1.6-8 4.8z"/>',
    flame: '<path fill="currentColor" d="M12 22c-4 0-6.5-2.8-6.5-6.3 0-3.7 3.2-5.4 3.8-9.2 1.8 1.3 2.4 3 2.3 4.6C13 9.6 13.6 6 12.8 2c4.1 2.6 5.7 7.4 5.7 11.5 0 5-2.5 8.5-6.5 8.5z"/>',
    confetti: '<rect x="9.5" y="2.5" width="5" height="11" rx="1" fill="currentColor" transform="rotate(28 12 8)"/><path d="M4 20.5c2-2 3 1 5-1s3 1 5-1 3 1 5-1" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
  };
  const THEME_ART = {
    hearts: { m: ['heart'], c: ['#ff4f9e', '#ffb3d4', '#ffffff'] },
    sunmoon: { m: ['sun', 'moon'], c: ['#ffd9b8', '#ff8cc0', '#ffffff'] },
    petals: { m: ['flower'], c: ['#ff8cc0', '#ffe3ee', '#ffffff'] },
    stars: { m: ['star', 'glint'], c: ['#ffffff', '#ffc2dc', '#ff4f9e'] },
    bubbles: { m: ['bubble'], c: ['#c6f3ff', '#ffffff', '#ffc2dc'] },
    notes: { m: ['note'], c: ['#ff4f9e', '#ffffff', '#ffb3d4'] },
    glitter: { m: ['glint'], c: ['#ffffff', '#ffd0e6', '#ff8cc0'] },
    snow: { m: ['flake'], c: ['#ffffff', '#cdeffc', '#ffd0e6'] },
    thorns: { m: ['bat', 'thorn'], c: ['#e0245a', '#ff4f9e', '#ff9bc4'] },
    cards: { m: ['card'], c: ['#ff3b5c', '#ffffff', '#ff8cc0'] },
    butterflies: { m: ['butterfly'], c: ['#a9dcff', '#ffffff', '#ffc2dc'] },
    foxfire: { m: ['flame'], c: ['#c4ecff', '#ffffff', '#ff5c7a'] },
    confetti: { m: ['confetti', 'glint'], c: ['#ff4f9e', '#ffffff', '#ffb08a'] }
  };
  // One motif: the theme's i-th shape in its i-th colour (`style` places it; --r a resting turn).
  const motif = (theme, i, style = '', cls = 'tm') => { const T = THEME_ART[theme] || THEME_ART.hearts; return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" style="color:${T.c[i % T.c.length]};--r:${(i * 47) % 70 - 35}deg;${style}">${THEME_SVG[T.m[i % T.m.length]]}</svg>`; };
  return { FIGHTER_HAND, HAND_DEFAULT, THEME_SVG, THEME_ART, motif };
})();
