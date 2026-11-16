/* Persona 3: Equinox · places that exist only in Equinox, added to the shared town (assets/femc/game/data/places.js, which
   stays Solstice's). Loads right after places.js. Map pins: FEMC_GAME_CONFIG.mapPins (config.js).
   - okahouse: the Oka boarding house by the river. Backgrounds are stand-ins until EQUINOX-ART-TODO 8E (gate) and 8W
     (garden) exist: then point bg / bgEvening at eq-oka-gate / eq-oka-garden. */
(function () {
  const P = window.FEMC_GAME_PLACES; if (!P || !Array.isArray(P.areas)) return;
  const area = { id: 'okahouse', name: 'The Oka Boarding House', bg: 'outside-daytime-neighborhood', bgEvening: 'outside-daytime-neighborhood',
    slots: ['after', 'evening'], blurb: 'Tea, the garden, and always room for one more.',
    about: 'An old wooden house by the river, with a persimmon tree and a capped well in the garden. Mrs. Oka keeps the kettle on.' };
  const at = P.areas.findIndex(a => a.id === 'dorm');
  if (!P.areas.some(a => a.id === area.id)) P.areas.splice(at < 0 ? P.areas.length : at, 0, area);
})();
