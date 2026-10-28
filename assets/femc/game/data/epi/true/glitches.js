/* The true ending's coda: its glitches (epilogue batch 8, 2026-10-28). Quiet until each night's pull: a deniable thing in each
   day (one frame of a face from a year nobody else remembers), then the pull itself (each held scene sets stage 4).
   Thin places: the three places she's held. Her constants: Haechan and Jungwon. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).true ||= {});
  R.glitch = {
    floors: { '3/8': 2, '3/9': 2, '3/10': 3 },
    thin: ['Language Arts Rooftop', 'The Lee House · Garden', 'Gym at Midnight'],
    constant: ['haechan', 'jungwon'],
    chance: [0, 0, 0, 0, 0],
    ambient: {}
  };
  R.glitches = [
    { id: 'epi-tr-g-aki', kind: 'face', who: 'akihiko', f: 'neutral', inline: true },   // Syracuse: a boy in a red scarf across the quad, one frame
    { id: 'epi-tr-g-snow', kind: 'weather', mode: 'hold', inline: true },               // the rooftop: the snow stops in the air
    { id: 'epi-tr-g-r-pull', kind: 'name', inline: true },                              // the rooftop: Haenim's name, the pull
    { id: 'epi-tr-g-radio', kind: 'sound', sound: 'static', inline: true },             // Incheon: the radio on the annex sill
    { id: 'epi-tr-g-tide', kind: 'tint', ms: 1800, inline: true },                      // the garden: the tide stops
    { id: 'epi-tr-g-s-pull', kind: 'tear', inline: true },                              // the garden: the pull
    { id: 'epi-tr-g-koro', kind: 'sound', sound: 'piano', inline: true },               // Hanlim: a Velvet Room note in the hallway
    { id: 'epi-tr-g-h-pull', kind: 'tear', inline: true },                              // the gym: the pull
    { id: 'epi-tr-g-voice', kind: 'name', label: 'Persona', names: ['HAENIM', 'H̷A̵E̶N̸I̷M̵', 'I AM THOU', 'HAENIM'], inline: true } // the gym: the voice
  ];
})();
