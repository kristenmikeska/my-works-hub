/* Secret codes typed anywhere in FEMC mode (femc-eggs.js). Each: { code, needs?: { met: [linkIds] }, from, lines: [one is
   picked], link?: { href, text }, stamp?, sound? }. Typed codes are remembered in kg-femc-codes, so secret scenes can
   require them with unlock: { codes: ['...'] }. */
window.FEMC_CODES = [];
