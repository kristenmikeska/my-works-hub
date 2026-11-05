/* Outfit-aware lines (Kat, Nov 4 2026: "outfit aware lines would be awesome realism"). A friend notices what Solar wears.
   Shown on the dorm's evening screen as a small speech bubble (ui.js outfitLine; core.js outfitLineDue / seeOutfitLine), when
   the outfit is the one she has on in the Wardrobe (not the season's) and "Outfits in scene portraits" is on. Each reaction
   plays once a playthrough (S.life.outfitSeen, 'look:who'), at most one an in-game day (S.life.outfitDay). Never in the
   prologue, a trip, the epilogue or while a scene or card is up. No stats, ♪ or flags change.
   Entry: { look: Wardrobe id, who: link id (must be met; not gone), f: face, lines: [1-2 lines], before: 'M/D' (only before
   that date), rank: n (their link rank at least n) }. Speakers: the dorm (S.E.E.S.) and searchers once met. No plot. */
window.FEMC_GAME_OUTFIT_LINES = [
  { look: 'sk-swim-lagoon', who: 'yukari', f: 'happy', lines: ["Okay, that is a LOT of pink.", "...It works. Annoyingly well."] },
  { look: 'sk-swim-night', who: 'junpei', f: 'surprised', lines: ["Whoa, wait. It's nine p.m. Where are you even swimming?", "...Can I come?"] },
  { look: 'sk-swim-lifeguard', who: 'ken', f: 'neutral', lines: ["You're a lifeguard now?", "Could you show me the backstroke sometime? Not because I can't swim. For technique."] },
  { look: 'sk-cp-sunmoon', who: 'haechan', f: 'neutral', lines: ["A sun on the front. Huh.", "Don't look at me like that. It's a coincidence. Probably."] },
  { look: 'sk-cp-drive', who: 'haechan', f: 'happy', lines: ["Leather jacket. Cute.", "Don't get ideas. I'm driving."] },
  { look: 'sk-phantom', who: 'junpei', f: 'happy', lines: ["The mask? The coat? You look like you're about to steal somebody's heart.", "Or my snacks. Hands off the snacks."] },
  { look: 'sk-velvet', who: 'fuuka', f: 'neutral', lines: ["That shade of blue... I feel like I've seen it somewhere.", "In a dream, maybe. It's a really calm colour."] },
  { look: 'sk-y2k', who: 'yukari', f: 'surprised', lines: ["Are those butterfly clips? Where did you even find those?", "Don't answer. Just lend me one."] },
  { look: 'sk-halloween', who: 'ken', f: 'neutral', lines: ["Are you going trick-or-treating?", "Not that I want to. I'm too old for it. I was only asking."] },
  { look: 'sk-wintercoat', who: 'mitsuru', f: 'neutral', lines: ["A sensible coat. Good. The wind off the bay is merciless this time of year.", "...The earmuffs are a charming touch."] },
  { look: 'sk-idol', who: 'junpei', f: 'happy', lines: ["Sign my cap! No, seriously, sign it. I'm selling it when you're famous."] },
  { look: 'sk-emo', who: 'shinjiro', f: 'neutral', before: '10/4', lines: ["...You going to a funeral or a concert?", "Either way. Eat first."] },
  { look: 'sk-roadwork', who: 'akihiko', f: 'happy', lines: ["Now that's an outfit. Ready for roadwork?", "Ten kilometres. I'll go easy. For the first one."] },
  { look: 'sk-cp-ringside', who: 'akihiko', f: 'surprised', lines: ["Is that the club jacket? Cropped?", "...Huh. The whole team's going to want one now."] },
  { look: 'sk-date', who: 'yukari', f: 'happy', lines: ["Ooh. Somebody's going somewhere.", "Relax, I won't ask. ...Yet."] },
  { look: 'sk-oops', who: 'aigis', f: 'neutral', lines: ["Solar-san. Your outfit appears to be...", "I have analysed it. I have decided it is intentional."] },
  { look: 'sk-arcana-sun', who: 'aigis', f: 'happy', lines: ["You are very bright this evening.", "I mean that in more than one sense."] },
  { look: 'sk-strawberry', who: 'koromaru', f: 'happy', lines: ["Arf! Arf!", "(He sniffs her sleeve very seriously, like it might be actual strawberry milk.)"] },
  { look: 'sk-hanbok', who: 'fuuka', f: 'happy', lines: ["Oh, the little moons on the sleeves...", "It's so pretty. Could I take a photo? Just one."] },
  { look: 'sk-sugarrush', who: 'ken', f: 'surprised', lines: ["Is that candy? On your skirt?", "...Is it real candy?"] },
  { look: 'sk-esports', who: 'minji', f: 'happy', lines: ["Jersey's on. You look like you're about to ruin somebody's ranked.", "Hold still. I'm getting the camera."] },
  { look: 'sk-limelight', who: 'jihoon', f: 'happy', lines: ["Bold. Dressing like that when I'm in the building.", "Now nobody's going to look at me. Rude."] },
  { look: 'sk-alphaphi', who: 'jungwon', f: 'neutral', lines: ["You look very nice.", "...That's all. I'm not good at adding to it."] },
  { look: 'sk-cp-afterhours', who: 'jungwon', f: 'happy', lines: ["Is that a council tie?", "It suits you better than it suits me. Don't tell anyone I said that."] }
];
