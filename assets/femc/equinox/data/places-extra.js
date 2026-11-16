/* Persona 3: Equinox · places that exist only in Equinox, added to the shared town (assets/femc/game/data/places.js, which
   stays Solstice's). Loads right after places.js. Map pins: FEMC_GAME_CONFIG.mapPins (config.js).
   - okahouse: the Oka boarding house by the river. bg / bgEvening: Kat's eqx-oka-gate (8E, late-afternoon light, so it
     serves the evening too); when 8W (garden) exists it could take bgEvening.
   cgFocus: where each Equinox CG is cropped on narrow screens (scene.js reads FEMC_GAME_PLACES.cgFocus; unset = centre). */
(function () {
  const P = window.FEMC_GAME_PLACES; if (!P || !Array.isArray(P.areas)) return;
  const area = { id: 'okahouse', name: 'The Oka Boarding House', bg: 'eqx-oka-gate', bgEvening: 'eqx-oka-gate',
    slots: ['after', 'evening'], blurb: 'Tea, the garden, and always room for one more.',
    about: 'An old wooden house by the river, with a persimmon tree and a capped well in the garden. Mrs. Oka keeps the kettle on.' };
  const at = P.areas.findIndex(a => a.id === 'dorm');
  if (!P.areas.some(a => a.id === area.id)) P.areas.splice(at < 0 ? P.areas.length : at, 0, area);
  P.cgFocus = Object.assign(P.cgFocus || {}, {
    'eqx-ribbon-glove': '40% 55%', 'eqx-well-waking': '56% 30%', 'eqx-holders-wake': '48% 35%', 'eqx-minji-frame': '45% 50%',
    'eqx-there-you-are': '50% 35%'
  });
})();
