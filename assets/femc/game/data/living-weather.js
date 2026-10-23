/* The world reacts to the weather (2026-10-23, with weather.js and core.js wx). Loaded after living-variants.js and the
   crush files. Adds to FEMC_GAME_VARIANTS:
   - monorail.storm: the commute on a storm day (ui.js earlyMorning; rain, snow and cloudy already had pools);
   - weather.<spot>.<rain | storm | snow>: bedtime (late), going straight home (home) and lunch (lunch). On most days with
     that weather ui.js wxLine plays one of these instead of the spot's usual line (a storm falls back to rain); a crush's
     own line for the spot still comes first.
   Lines that can appear any month name no one by name. And a few rain and snow lines for the crush tracks' world
   reactions (data/crush.js `add`, gated by phase, weather and month). */
(() => {
  const V = (window.FEMC_GAME_VARIANTS ||= {});
  V.monorail ||= {};
  V.monorail.storm = [
    "The monorail crossed the bay in a gray roar of rain, the cars rocking on the gusts, the water below whipped white, and a whole carriage of students holding the straps a little tighter and pretending they weren't.",
    "Storm warnings on the station screens, and a train that ran anyway, slowly, the wipers on the driver's window losing every round. Someone's umbrella had died on the platform and been left there like a dropped bird.",
    "Rain hit the windows in handfuls. Halfway across the bay the lights in the carriage flickered and the whole car went *ooh* together, like a crowd at fireworks, and then laughed at itself, and the city came out of the gray to meet them.",
    { t: "Typhoon weather. The carriage smelled of wet blazers and the wind leaned on the train hard enough to feel through the floor, and a first-year near the door said, hopefully, that they might cancel school, and nobody had the heart to tell him they never did.", months: [8, 9, 10] }
  ];
  V.weather = {
    late: {
      rain: [
        "Rain on the window, steady as breathing. She lay on her side and watched the drops gather at the top of the glass and race each other down, and picked one, and it lost, and she picked another.",
        "The rain kept the whole dorm quiet. Even the pipes seemed to be listening to it. She fell asleep in the middle of a thought and never found out how it ended.",
        "A soft rain all night, the kind that didn't so much fall as arrive, and the streetlight outside her window wore a halo in it. She left the curtain open to watch it and slept like that.",
        { t: "Warm rain, rainy-season rain, the window open a crack because it was too humid not to, and the smell of wet concrete coming in with the sound. She lay on top of the sheet and let it put her to sleep.", months: [6, 7] },
        { t: "Cold rain against the glass, and the radiator ticking, and her blanket pulled up to her ears. Somewhere down the hall someone was running a hair dryer at midnight. She didn't hold it against them.", months: [11, 12, 1, 2, 3] }
      ],
      storm: [
        "The storm came properly after midnight. The window rattled in its frame, the rain went sideways, and every so often the room went white for half a heartbeat and the thunder came after, rolling over the roof like furniture being moved upstairs.",
        "Thunder, close. Somebody down the hall said a word their mother wouldn't like, and somebody else laughed, and the lights stayed on, and she lay counting the seconds between the flash and the sound the way she must have been taught once, by someone, somewhere.",
        "Wind in the eaves and rain on the glass like gravel thrown by the handful. She should have been scared of it, maybe. She wasn't. It sounded like the whole sky was busy with something that had nothing to do with her, and that was restful."
      ],
      snow: [
        "Snow falling past the window, slow and enormous in the streetlight, and the whole city gone quiet under it, the way a room goes quiet when someone important comes in. She watched it until her eyes closed on their own.",
        "The radiator clanked, the glass was cold to the touch, and outside the snow kept coming down without a sound. She wrote a single letter in the fog on the window with one finger and didn't know why that one.",
        "Snow on the sill. In the morning there'd be footprints and complaints and somebody throwing the first snowball too early. Tonight there was only the hush, and her warm bed, and the soft white light coming in."
      ]
    },
    home: {
      rain: [
        "She came home under a dripping umbrella, left it open in the entrance to dry with all the others, a little crowd of them like flowers, and went upstairs with wet ankles and nowhere to be.",
        "Rain all afternoon. She sat in the window seat of the lounge with a blanket and watched it run down the glass and turn the street outside into a mirror, and didn't turn the TV on, and didn't need to.",
        "Home early, because the rain made the decision for her. She towel-dried her hair at the kitchen table and made something hot to drink and let the gray afternoon go by at its own pace."
      ],
      storm: [
        "She ran the last stretch home with her bag over her head, which did nothing, and came through the door soaked to the skin and laughing for no reason, and stood dripping in the entrance while the storm hammered the glass behind her.",
        "Nobody was going anywhere in this. The dorm closed itself up against the storm like a shell, curtains drawn by four, the lounge lamps on, the rain so loud on the windows that the TV had to be turned up twice."
      ],
      snow: [
        "Home through the snow, slowly, because the pavement had opinions, and in through the front door stamping her shoes, and the warm air of the lounge hit her face like a hand. She sat on the radiator until her fingers came back.",
        "Snow in her hair when she got in. She stood at the lounge window with her coat still on and watched it fill in her own footprints on the path, one by one, until there was no sign she'd come home at all.",
        "The dorm smelled of somebody's instant cocoa and wet boots by the door. She took off her scarf and found it stiff with snow and hung it over the heater to drip, and called the afternoon her own."
      ]
    },
    lunch: {
      rain: [
        "Lunch indoors. The corridor windows were running with rain and every bench by them was taken, so she ate standing at the end of the hall, watching the courtyard turn into a lake and the sports clubs give up one by one.",
        "Rain had driven the whole third year inside, and the classroom at lunch was damp coats over every chair and the windows steamed white, and someone had drawn a cat in the fog that was getting slowly rained off from the outside."
      ],
      storm: [
        "Storm at lunch. The hallway lights flickered every time the wind hit, and the whole floor cheered each time they came back, and a teacher went past saying *walk, please* to nobody in particular while the rain went sideways past the windows.",
        "Nobody went near the roof. Lunch was the hallway floor, backs to the lockers, the storm a constant gray roar outside, and someone's phone playing the weather report out loud like a radio drama."
      ],
      snow: [
        "Snow outside the hallway windows at lunch, and the whole school had lost its mind about it, half the third year pressed to the glass and the other half pretending to be too old to care and pressed to the glass anyway.",
        "Lunch indoors with the snow coming down past the windows. The radiators were on full, everyone's cheeks were pink, and a boy from the next class had brought a ball of snow inside in his bento box to prove a point nobody remembered.",
        "The courtyard was white and untouched at lunch, perfect, and then a first-year ran across it, and then everybody did, and she watched from the window with her bread and felt, absurdly, like she'd been there for a hundred of these."
      ]
    }
  };

  /* Crush tracks (data/crush.js): a few rain and snow lines for the world reactions, gated by phase and weather. */
  const C = window.FEMC_GAME_CRUSH, add = C && C.add, P = C && C.phases;
  if (!add || !P) return;
  add('home', [
    { t: "Rain, so no roadwork, so Akihiko was in the lounge when she got home, doing push-ups between the sofa and the television with the grim focus of a man the weather had cheated, and he lost count when she said hi, and started again from one, and didn't seem to mind.", crush: { akihiko: P.UP }, weather: ['rain'], months: [4, 5, 6, 7, 9, 10] }
  ]);
  add('evening.sub', [
    { t: "Rain on the dorm windows. Shinjiro is in the kitchen with the radio on low, cooking something that takes a long time, and he's set out two bowls without saying who the second one is for. What now?", crush: { shinjiro: P.UP }, weather: ['rain'], months: [8, 9] }
  ]);
  add('late.plain', [
    { t: "Snow at the window. Her phone lit up once on the pillow: a blurry photo from the guesthouse roof, snow falling through a streetlight, no caption, from Haechan. She looked at it a lot longer than a photo of snow deserved, and didn't reply, and didn't put the phone down either.", crush: { haechan: P.UP }, weather: ['snow'], months: [12, 1, 2] },
    { t: "Rain on the glass, and a text from Jungwon at a quarter to twelve: *you left your umbrella in the guesthouse lobby. I have it. It's dry. Don't come for it in this.* She read it twice. It was the most words he'd ever spent on an umbrella, probably.", crush: { jungwon: P.UP }, weather: ['rain'], months: [10, 11, 12] }
  ]);
})();
