/* Persona 3: Equinox · the engine's settings for femc-equinox-game.html (EQUINOX-TECH.md "Hooks"). Loads before core.js.
   The Solstice engine (assets/femc/game/core.js, ui.js, menu.js, cosmetics.js) reads window.FEMC_GAME_CONFIG; with it unset
   (femc-game.html) everything is exactly Solstice's.
     key / clearsKey / titleKey   Equinox's own save, clears list and title-colour copy (Solstice's are never written).
     title                        the name on the credits, Extras and the menu screen's ghost word.
     prologueSlot                 the slot the year starts in after the prologue (Solstice: lunch; Equinox's 4/8 starts early).
     titleScreen()                ui.js calls this instead of drawing Solstice's title. The title is its own page
                                  (femc-equinox.html, the Equilux clock), so this:
                                    ?go=new       starts the year from the starting point the title page left in
                                                  'kg-femc-equinox-start' (newGame, FemcEquinoxImport.apply, the eqx-from-*
                                                  flags below), deletes that key and plays the prologue;
                                    ?go=continue  picks the autosave up where it was;
                                    anything else (no save, "Title" from the in-game menu) goes back to femc-equinox.html.
   The eqx-from-* flags (read by the opening's { ifFlag } lines, data/prologue.js): eqx-from-none on a fresh start, or for the
   most recently finished Solstice epilogue in the import: eqx-from-<world> and eqx-from-<world>-<route> (runners: haechan /
   minji / cover; strangers: haechan / jungwon / family; hoax: jungwon / jihoon / council; stay: akihiko / shinjiro / sees;
   true: coda). Nothing past the opening reads them. */
window.FEMC_GAME_CONFIG = {
  id: 'equinox',
  key: 'kg-femc-equinox',
  clearsKey: 'kg-femc-equinox-clears',
  titleKey: 'kg-femc-equinox-title-theme',
  title: { name: 'Persona 3: Equinox', tagline: 'Day Equals Night', ghost: 'Equinox' },
  prologueSlot: 'early',
  // Everyone who woke on 4/6 already knows Solar: met from the first school day (core.js knownTick), not "???" before rank 1.
  // Later arrivals are met in their own first scenes.
  knownFrom: { akihiko: '4/8', mitsuru: '4/8', yukari: '4/8', junpei: '4/8', aigis: '4/8', 'ken-koromaru': '4/8', shinjiro: '4/8',
    haechan: '4/8', hanni: '4/8', hyein: '4/8', yunjin: '4/8', jungwon: '4/8', jihoon: '4/8', cherry: '4/8', minji: '4/8', jaehyun: '4/8',
    elizabeth: '4/8', mrsoka: '4/10' },
  /* Art batch 1 (Nov 15 2026, Kat's first Equinox pictures; EQUINOX-TECH.md "Art batch 1"):
     faces     speaker → portrait folder: Solar's Equinox look (core.js gameFace; a worn Wardrobe outfit still wins).
     homeFig   the menu screen's figure (menu.js homeFig; a worn outfit's HD pose still wins). [ar, ht, hf, hx] as HOME_FIG.
     linkFig   the Social Link screen's full bodies (menu.js cfgFigure): [file under assets/femc/, width/height, head top,
               head-to-chin, head centre x]; a couple link lists two (both stand, heads the same size; game.css .pair).
     loading   the fight loading still (ui.js openBattle): the Well for a night in the Well and the Well's story fights,
               "in between" for everything else. */
  /* faces (art batch 3, Nov 15): Elizabeth's Equinox look, and the parents. Equinox's parent speaker ids are the couple links'
     member ids (data/links.js; the epilogues' generic dad / mom / appa / eomma would be ambiguous with all three couples here):
     jaesang-runners, solji-runners, taesang-strangers (Taejoon), miyeon-strangers (Miseon), kim-dad, kim-mom. LE SSERAFIM and
     Theodore need no entry: their plain ids (chaewon, sakura, kazuha, eunchae, theodore) are their Equinox folders. */
  faces: { solar: 'solar-equinox', haechan: 'haechan-equinox', elizabeth: 'elizabeth-equinox',
    'jaesang-runners': 'jaesang-equinox', 'solji-runners': 'solji-equinox', 'taesang-strangers': 'taejoon-equinox',
    'miyeon-strangers': 'miseon-equinox', 'kim-dad': 'kimdad-equinox', 'kim-mom': 'kimmom-equinox' },
  /* art (art batch 3): Equinox's own picture for a Solstice one, keyed by the path under assets/femc/. Read by battle/data.js
     (the Personas' art: the menu's Personas tab and Forms, the battle frame's cards) and scene.js { summon } lines. */
  art: { 'battle/art/personas/haenim.webp': 'equinox/art/personas/haenim.webp?v=1' },
  homeFig: { src: 'assets/femc/equinox/art/solar/arms-crossed.webp?v=1', ar: .424, ht: .02, hf: .14, hx: .47 },
  linkFig: {
    chaewon: ['equinox/art/bodies/chaewon.webp?v=1', .4, .033, .1, .41],
    sakura: ['equinox/art/bodies/sakura.webp?v=1', .4, .015, .115, .45],
    kazuha: ['equinox/art/bodies/kazuha.webp?v=1', .4, .005, .123, .38],
    eunchae: ['equinox/art/bodies/eunchae.webp?v=1', .4, .015, .115, .41],
    'parents-runners': [['equinox/art/bodies/jaesang.webp?v=1', .4, .01, .105, .37], ['equinox/art/bodies/solji.webp?v=1', .4, .01, .12, .46]],
    'parents-strangers': [['equinox/art/bodies/taejoon.webp?v=1', .4, .013, .122, .46], ['equinox/art/bodies/miseon.webp?v=1', .4, .013, .122, .46]],
    'parents-hoax': [['equinox/art/bodies/hoax-dad.webp?v=1', .4, .007, .138, .41], ['equinox/art/bodies/hoax-mom.webp?v=1', .4, .003, .132, .42]]
  },
  loading(kind, req) {
    const id = (req && (req.script || (req.op && (req.op.id || req.op)))) || '';
    const well = kind === 'tartarus' || /^eqx-(well|first-hill)/.test(String(id)); // the Well's own fights (5/28's First Hill is in it)
    return `assets/femc/equinox/art/loading-${well ? 'well' : 'between'}.webp?v=1`;
  },
  // Go Out map pins for Equinox's own areas (data/places-extra.js), in % of the map art.
  mapPins: { okahouse: { x: 24, y: 24, l: 1 } },
  titlePage: 'femc-equinox.html',
  startKey: 'kg-femc-equinox-start',
  titleScreen() {
    const C = window.FEMC_GAME_CONFIG, G = window.FemcGame, UI = window.FemcGameUI;
    const go = new URLSearchParams(location.search).get('go');
    const clean = () => history.replaceState(null, '', location.pathname);
    let start = null; try { start = JSON.parse(localStorage.getItem(C.startKey) || 'null'); } catch (e) {}
    if (go === 'new' && start && G && UI) {
      clean();
      C.begin(start);
      try { localStorage.removeItem(C.startKey); } catch (e) {}
      return UI.run();
    }
    if (go === 'continue' && G && UI && G.S.started) {
      clean();
      if (G.S.phase === 'title') G.S.phase = 'play';
      G.save();
      return UI.run();
    }
    location.replace(C.titlePage);
  },
  // A new year from the title page's starting point: { fresh: true } or { import: FemcEquinoxImport.read() result }.
  begin(start) {
    const G = window.FemcGame;
    G.newGame();
    const S = G.S, IM = window.FemcEquinoxImport;
    if (start && start.import && IM) IM.apply(S, start.import);
    const eps = (S.solstice && S.solstice.epilogues) || [];
    const last = eps[eps.length - 1]; // read in the order the save recorded them: the last is the most recent
    S.flags = S.flags || {};
    if (last && last.world) {
      S.flags[`eqx-from-${last.world}`] = true;
      if (last.route) S.flags[`eqx-from-${last.world}-${last.route}`] = true;
    } else S.flags['eqx-from-none'] = true;
    G.save();
  }
};
