/* Secret stamps: achievements and easter eggs collected anywhere on the site.
   Achievements.unlock(id) records one (kg-achievements) and shows a toast; Achievements.note(set, value, goal, id)
   tracks multi-step ones. The passport (passport.js) renders the list with riddles for locked stamps. */
window.Achievements = (() => {
  const KEY = 'kg-achievements', PROGRESS = 'kg-ach-progress';
  // The site root, so the toast's passport link works from readers/ too.
  const HOME = document.currentScript ? new URL('.', document.currentScript.src).href : '';
  const LIST = [
    { id: 'solchan', name: 'Two suns', group: 'Discoveries', hint: 'two names for the sun. one of the regulars knows the way.',
      svg: '<circle cx="24" cy="35" r="11"/><circle cx="42" cy="28" r="10"/><path d="M41 6h2v8h-2zM41 42h2v8h-2zM56 27h8v2h-8zM20 27h-8v2h8zM51 15l5-5l1.4 1.4l-5 5zM31 39l-5 5l1.4 1.4l5-5z"/>' },
    { id: 'lost', name: 'Lost', group: 'Discoveries', hint: "go somewhere that doesn't exist.",
      svg: '<path fill-rule="evenodd" d="M32 6a26 26 0 1 0 0 52a26 26 0 1 0 0-52zM32 11a21 21 0 1 1 0 42a21 21 0 1 1 0-42z"/><path d="M32 15l6 17l-6 17l-6-17z"/>' },
    { id: 'magic-word', name: 'The magic word', group: 'Discoveries', hint: 'the homepage is listening. type a world.',
      svg: '<path fill-rule="evenodd" d="M12 12h40a5 5 0 0 1 5 5v30a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5zM13 18v28h38V18z"/><text x="32" y="41" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="22">A</text>' },
    { id: 'every-solar', name: 'Every world has a Solar', group: 'Discoveries', hint: 'say her name.',
      svg: '<path d="M30 4l5 19l19 5l-19 5l-5 19l-5-19l-19-5l19-5z M50 38l2.5 7l7 2.5l-7 2.5l-2.5 7l-2.5-7l-7-2.5l7-2.5z"/>' },
    { id: 'camera-roll', name: 'Camera roll', group: 'Discoveries', hint: 'check her phone.',
      svg: '<path fill-rule="evenodd" d="M22 12h20l4 7h8a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V23a4 4 0 0 1 4-4h8z M32 25a9 9 0 1 0 0 18a9 9 0 1 0 0-18z"/>' },
    { id: 'say-cheese', name: 'Say cheese', group: 'Discoveries', hint: "on the rooftop, one of the stars is a flash.",
      svg: '<path fill-rule="evenodd" d="M20 4h24v56H20z M24 8v14h16V8z M24 25v14h16V25z M24 42v14h16V42z"/>' },
    { id: 'femc', name: 'Memento mori', group: 'The other side', hint: 'she never got a name. four letters will do.',
      svg: '<text x="32" y="43" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="25" letter-spacing="-1">XXII</text>' },
    { id: 'senpai', side: 'femc', name: 'Senpai', group: 'The other side', hint: 'someone at the dorm wants to train with you. say his name.',
      svg: '<path d="M18 24c0-10 7-16 16-16c10 0 16 7 16 16v8c0 5-3 9-8 10v6H23v-7c-3-2-5-5-5-9z"/><rect x="21" y="50" width="24" height="7" rx="2"/>' },
    { id: 'max-rank', side: 'femc', name: 'Rank MAX', group: 'The other side', hint: 'spend ten different days with him.',
      svg: '<text x="32" y="42" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="21">MAX</text>' },
    { id: 'gains', side: 'femc', name: 'Gains', group: 'The other side', hint: 'type what he lives on.',
      svg: '<rect x="25" y="7" width="14" height="5" rx="1"/><path d="M21 14h22l-2 6H23z M22 22h20l-3 34H25z"/>' },
    { id: 'dark-hour', side: 'femc', name: 'The Dark Hour', group: 'The other side', hint: 'be awake for the hour that doesn\'t exist.',
      svg: '<path fill-rule="evenodd" d="M32 6a26 26 0 1 0 0 52a26 26 0 1 0 0-52zM32 11a21 21 0 1 1 0 42a21 21 0 1 1 0-42z"/><path d="M30 15h4v19h-4z"/>' },
    { id: 'full-moon', side: 'femc', name: 'Full Moon Operation', group: 'The other side', hint: 'wait for a full moon.',
      svg: '<path fill-rule="evenodd" d="M32 10a22 22 0 1 0 0 44a22 22 0 1 0 0-44z M24 21a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M39 33a6 6 0 1 0 0 12a6 6 0 1 0 0-12z"/>' },
    { id: 'compendium', side: 'femc', name: 'Compendium', group: 'The other side', hint: 'open the book.',
      svg: '<path d="M8 12h19c3 0 5 2 5 5v36c0-2-2-4-5-4H8z M56 12H37c-3 0-5 2-5 5v36c0-2 2-4 5-4h19z"/>' },
    { id: 'heroes-never-die', side: 'femc', name: 'Heroes Never Die', group: 'The other side', hint: 'once you know her, say what she says when she brings someone back.',
      svg: '<path d="M32 6c9 0 16 3 16 6s-7 6-16 6s-16-3-16-6s7-6 16-6zM32 10c-6 0-11 1-11 2s5 2 11 2s11-1 11-2s-5-2-11-2z"/><path d="M30 22h4v34h-4z"/><path d="M28 26c-6-6-16-6-22 0c4 1 8 4 10 8c3-3 8-5 12-4zM36 26c6-6 16-6 22 0c-4 1-8 4-10 8c-3-3-8-5-12-4z"/>' },
    { id: 'every-universe', side: 'femc', name: 'Every Universe', group: 'The other side', hint: 'two names for the sun, in a world that belongs to neither of them.',
      svg: '<circle cx="24" cy="32" r="12"/><circle cx="40" cy="32" r="12" fill-opacity=".55"/><path d="M32 4l2 6h-4zM32 60l2-6h-4zM4 32l6 2v-4zM60 32l-6 2v-4z"/>' },
    { id: 'you-look-like-you', side: 'femc', name: 'You Look Like You', group: 'The other side', hint: "he keeps saying you look like someone. stay until the end of the count, and he'll get it right.",
      svg: '<path fill-rule="evenodd" d="M32 3a17 19 0 1 1 0 38a17 19 0 1 1 0-38zm0 6a11 13 0 1 0 0 26a11 13 0 1 0 0-26z"/><rect x="28.5" y="40" width="7" height="20" rx="3.5"/><circle cx="32" cy="22" r="5"/>' },
    { id: 'mid-lane-goddess', side: 'femc', name: 'Mid Lane Goddess', group: 'The other side', hint: 'once you know her, call her birds.',
      svg: '<path d="M32 54C16 42 8 33 8 24c0-7 5-12 11-12c6 0 10 4 13 9c3-5 7-9 13-9c6 0 11 5 11 12c0 9-8 18-24 30z" fill-opacity=".35"/><path d="M14 30c6-6 12-6 16-2c-3 1-5 3-6 6c-3-2-6-3-10-4zM50 30c-6-6-12-6-16-2c3 1 5 3 6 6c3-2 6-3 10-4zM32 22l2 6h6l-5 4l2 6l-5-4l-5 4l2-6l-5-4h6z"/>' },
    { id: "rn-settling-in", side: 'femc', name: "Settling in", group: "Crossovers", hint: "somebody's big brother keeps texting the wrong little sister. answer him twice.",
      svg: "<path fill-rule=\"evenodd\" d=\"M6 32C13 15 51 15 58 32C51 49 13 49 6 32z M20 31h24v2H20z M24 26h2v5h-2z M29 26h2v5h-2z M34 26h2v5h-2z M39 26h2v5h-2z M24 33h2v5h-2z M29 33h2v5h-2z M34 33h2v5h-2z M39 33h2v5h-2z\"/>" },
    { id: "rn-wrong-chat", side: 'femc', name: "Wrong chat", group: "Crossovers", hint: "two girls added the wrong solar to their group. keep answering until the new year.",
      svg: "<path d=\"M9 8h28a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H21l-9 7v-7H9a5 5 0 0 1-5-5V13a5 5 0 0 1 5-5z\"/><path fill-opacity=\".55\" d=\"M27 28h28a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5h-3v7l-9-7H27a5 5 0 0 1-5-5V33a5 5 0 0 1 5-5z\"/>" },
    { id: "rn-the-kiriko", side: 'femc', name: "The Kiriko", group: "Crossovers", hint: "a saturday night at the arcade, late in october. somebody recognizes you.",
      svg: "<path fill-rule=\"evenodd\" d=\"M20 8h24v5h9c0 10-5 15-11 16c-2 4-5 7-8 8v8h9v7H21v-7h9v-8c-3-1-6-4-8-8c-6-1-11-6-11-16h9z M15 17c1 5 3 7 6 8c-1-2-1-5-1-8z M49 17h-5c0 3 0 6-1 8c3-1 5-3 6-8z\"/>" },
    { id: "rn-small-wings", side: 'femc', name: "Small wings", group: "Crossovers", hint: "the day before halloween, check the dorm steps.",
      svg: "<path d=\"M30 31C25 18 13 13 6 17c4 3 6 7 6 11c-3 1-5 4-5 8c7 2 16 0 23-5z M34 31c5-13 17-18 24-14c-4 3-6 7-6 11c3 1 5 4 5 8c-7 2-16 0-23-5z M32 36l2.4 5.6l6 .4l-4.6 3.9l1.5 5.9l-5.3-3.2l-5.3 3.2l1.5-5.9l-4.6-3.9l6-.4z\"/>" },
    { id: "rn-let-solar-cook", side: 'femc', name: "Let Solar Cook", group: "Crossovers", hint: "the nights before a big game, a door off the strip sticks. push.",
      svg: "<path fill-rule=\"evenodd\" d=\"M5 8h54v34H5z M10 13v24h44V13z\"/><path d=\"M30 42h4v16h-4z M20 17l2 5h5l-4 3l2 5l-5-3l-5 3l2-5l-4-3h5z M44 17l2 5h5l-4 3l2 5l-5-3l-5 3l2-5l-4-3h5z M32 24l1.5 3.5h3.5l-3 2l1 3.5l-3-2l-3 2l1-3.5l-3-2h3.5z\"/>" },
    { id: "rn-suzu", side: 'femc', name: "Perfect suzu timing", group: "Crossovers", hint: "once you know the fox girl, type how good her timing is.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 4a5 5 0 1 0 0 10a5 5 0 1 0 0-10z M32 7a2 2 0 1 1 0 4a2 2 0 1 1 0-4z\"/><path fill-rule=\"evenodd\" d=\"M32 17a19 19 0 1 0 0 38a19 19 0 1 0 0-38z M15 38h34v3H15z M30.5 41h3v10h-3z\"/>" },
    { id: "spare-sol", side: 'femc', name: "Spare sol", group: "Crossovers", hint: "someone in incheon keeps texting the wrong sun. answer her all winter.",
      svg: "<path d=\"M31 18h2v32h-2z\"/><path d=\"M30 18L24 8l1.7-1l6 10zM34 18l6-10l-1.7-1l-6 10z\"/><path d=\"M30 27C22 10 5 9 6 21c1 9 12 11 24 8zM34 27C42 10 59 9 58 21c-1 9-12 11-24 8zM30 33C20 33 10 40 14 50c4 7 13 2 16-13zM34 33c10 0 20 7 16 17c-4 7-13 2-16-13z\"/>" },
    { id: "six-down", side: 'femc', name: "Six down", group: "Crossovers", hint: "a big man on a back step needs eight letters. the step is only there twice.",
      svg: "<path fill-rule=\"evenodd\" d=\"M26 6h12v12h-12zM28 8v8h8v-8zM26 19h12v12h-12zM28 21v8h8v-8zM26 32h12v12h-12zM28 34v8h8v-8zM26 45h12v12h-12zM28 47v8h8v-8zM13 19h12v12h-12zM15 21v8h8v-8zM39 19h12v12h-12zM41 21v8h8v-8zM52 19h11v11h-11zM54 21v7h7v-7z\"/><path d=\"M15 34h8v8h-8z\"/>" },
    { id: "three-oh-seven", side: 'femc', name: "3:07", group: "Crossovers", hint: "two knocks. a pause. one more.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 4a28 28 0 1 0 0 56a28 28 0 1 0 0-56zM32 8a24 24 0 1 1 0 48a24 24 0 1 1 0-48z\"/><text x=\"32\" y=\"39\" text-anchor=\"middle\" font-family=\"Georgia,serif\" font-weight=\"700\" font-size=\"18\">3:07</text>" },
    { id: "jasmine-flower", side: 'femc', name: "Jasmine flower", group: "Crossovers", hint: "someone sings louder when someone is coming.",
      svg: "<circle cx=\"32\" cy=\"17\" r=\"8.5\"/><circle cx=\"46.3\" cy=\"27.4\" r=\"8.5\"/><circle cx=\"40.8\" cy=\"44.1\" r=\"8.5\"/><circle cx=\"23.2\" cy=\"44.1\" r=\"8.5\"/><circle cx=\"17.7\" cy=\"27.4\" r=\"8.5\"/><circle cx=\"32\" cy=\"32\" r=\"4.5\"/>" },
    { id: "birthday-rice", side: 'femc', name: "Birthday rice", group: "Crossovers", hint: "in december, somebody cooks for a birthday nobody is having.",
      svg: "<circle cx=\"32\" cy=\"13\" r=\"4\"/><path d=\"M11 31a21 15 0 0 1 42 0z\"/><path d=\"M6 34h52c0 12-10 21-26 21S6 46 6 34z\"/><path d=\"M2 36h6v5H2zM56 36h6v5h-6z\"/>" },
    { id: "agasshi", side: 'femc', name: "Agasshi", group: "Crossovers", hint: "a word for a girl who forgets her coat. it only reaches you once you know him.",
      svg: "<path d=\"M21 4h18v7H21z\"/><path d=\"M22 13h16v19l12 8c6 4 4 14-4 14H28c-8 0-11-7-6-14z\"/>" },
    { id: "wrong-gc", side: 'femc', name: "Wrong number", group: "Crossovers", hint: "someone gets one digit wrong. answer anyway.",
      svg: "<path fill-rule=\"evenodd\" d=\"M8 8h48a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H28l-13 11V42H8a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z M9 13v24h11v5l6-5h29V13z\"/><text x=\"32\" y=\"33\" text-anchor=\"middle\" font-family=\"Georgia,serif\" font-weight=\"700\" font-size=\"19\">?</text>" },
    { id: "solar-system", side: 'femc', name: "Solar System", group: "Crossovers", hint: "stay in the wrong chat until it gets a new name.",
      svg: "<circle cx=\"32\" cy=\"32\" r=\"9\"/><path fill-rule=\"evenodd\" d=\"M32 10a22 22 0 1 0 0 44a22 22 0 1 0 0-44z M32 13a19 19 0 1 1 0 38a19 19 0 1 1 0-38z\"/><circle cx=\"49\" cy=\"20\" r=\"6\"/><circle cx=\"15\" cy=\"44\" r=\"6\"/>" },
    { id: "maeumi", side: 'femc', name: "Maeumi", group: "Crossovers", hint: "the first morning of a new term. someone is throwing a ball at the shrine.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 8a24 24 0 1 0 0 48a24 24 0 1 0 0-48z M15 21c7 6 7 16 0 22l-2-3c5-5 5-11 0-16z M49 21c-7 6-7 16 0 22l2-3c-5-5-5-11 0-16z\"/>" },
    { id: "vote-solar-kim", side: 'femc', name: "Vote Solar Kim", group: "Crossovers", hint: "in october, read the board outside the council room.",
      svg: "<path fill-rule=\"evenodd\" d=\"M10 8h44v50H10z M14 12v42h36V12z\"/><circle cx=\"32\" cy=\"7\" r=\"3\"/><circle cx=\"32\" cy=\"27\" r=\"7\"/><path d=\"M31 15h2v5h-2zM31 34h2v5h-2zM19 26h5v2h-5zM40 26h5v2h-5z\"/><text x=\"32\" y=\"50\" text-anchor=\"middle\" font-family=\"Georgia,serif\" font-weight=\"700\" font-size=\"10\">VOTE</text>" },
    { id: "yeobos-cafe", side: 'femc', name: "Yeobo's", group: "Crossovers", hint: "a bell on the strip, on a few friday evenings. take the croissant.",
      svg: "<path d=\"M10 26h34v12a14 14 0 0 1-14 14h-6a14 14 0 0 1-14-14z\"/><path fill-rule=\"evenodd\" d=\"M44 28a8 8 0 1 1 0 16a8 8 0 1 1 0-16z M44 32a4 4 0 1 0 0 8a4 4 0 1 0 0-8z\"/><path d=\"M6 55h44v4H6z\"/><path d=\"M19 8c-3 4 3 6 0 13h3c3-7-3-9 0-13zM28 6c-3 4 3 7 0 15h3c3-8-3-11 0-15zM37 8c-3 4 3 6 0 13h3c3-7-3-9 0-13z\"/>" },
    { id: "gc-names", side: 'femc', name: "The gc name??? rly???", group: "Crossovers", hint: "two group chats, two grudges. type the name of either one.",
      svg: "<rect x=\"4\" y=\"8\" width=\"36\" height=\"13\" rx=\"6.5\"/><rect x=\"24\" y=\"25\" width=\"36\" height=\"13\" rx=\"6.5\"/><rect x=\"4\" y=\"42\" width=\"44\" height=\"13\" rx=\"6.5\"/>" },
    { id: "council-president", side: 'femc', name: "Mr. President", group: "Crossovers", hint: "take the croissant. read the glitter. then give them a night to count the votes. someone is working late.",
      svg: "<path fill-rule=\"evenodd\" d=\"M8 28h48v30H8z M20 32h24v4H20z\"/><path d=\"M24 6h16v29H24z\"/><path d=\"M30 12l1.8 4.2l4.5.4l-3.4 3l1 4.4l-3.9-2.4l-3.9 2.4l1-4.4l-3.4-3l4.5-.4z\" fill-opacity=\".35\"/>" },
    { id: "define-kicking", side: 'femc', name: "Define Kicking", group: "The other side", hint: "a boxer who won't stop and an agent who can't. know them both well, then give them a ring.",
      svg: "<path d=\"M20 8h18c8 0 14 6 14 14v10c0 6-4 10-10 10H22c-5 0-8-4-8-9V14c0-3 3-6 6-6z\"/><path d=\"M14 22c-4 0-7 3-7 7s3 7 7 7z\"/><rect x=\"19\" y=\"45\" width=\"26\" height=\"11\" rx=\"2\"/>" },
    { id: "no-hurry", side: 'femc', name: "No Hurry", group: "The other side", hint: "three swords far from home. one pier. nobody rushing back.",
      svg: "<path fill-rule=\"evenodd\" d=\"M40 2a5 5 0 1 0 0 10a5 5 0 1 0 0-10zM40 5a2 2 0 1 1 0 4a2 2 0 1 1 0-4z\"/><path d=\"M38 11h4v27a13 13 0 0 1-26 0v-12l9 8h-5v4a9 9 0 0 0 18 0z\"/>" },
    { id: "danger-adore-me", side: 'femc', name: "Danger, Adore Me", group: "The other side", hint: "a goddess and a menace finally agree on something. it's you.",
      svg: "<rect x=\"23\" y=\"34\" width=\"18\" height=\"24\" rx=\"2\"/><rect x=\"25\" y=\"26\" width=\"14\" height=\"9\"/><path d=\"M26 26V13l12-7v20z\"/>" },
    { id: "cold-blooded", side: 'femc', name: "Cold Blooded", group: "The other side", hint: "two hunters on the bridge, and not one warm heartbeat between them.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 6a26 26 0 1 0 0 52a26 26 0 1 0 0-52zM32 10a22 22 0 1 1 0 44a22 22 0 1 1 0-44z\"/><path d=\"M30 2h4v14h-4zM30 48h4v14h-4zM2 30h14v4H2zM48 30h14v4H48z\"/><path d=\"M24 22h16l-3 11l-5 11l-5-11z\"/>" },
    { id: "hundred-and-first", side: 'femc', name: "The 101st Stick", group: "The other side", hint: "let the fox girl bless the whole dorm. count what's left in the box.",
      svg: "<path fill-rule=\"evenodd\" d=\"M16 24h32v34H16zM21 29v24h22V29z\"/><rect x=\"29\" y=\"4\" width=\"6\" height=\"30\" rx=\"1\"/>" },
    { id: "cleric-of-the-frog", side: 'femc', name: "Cleric of the Frog", group: "The other side", hint: "a game master, and two players from a real dungeon.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 4l24 14v28L32 60L8 46V18zM32 15l-15 25h30z\"/><text x=\"32\" y=\"37\" text-anchor=\"middle\" font-family=\"Georgia,serif\" font-weight=\"700\" font-size=\"13\">1</text>" },
    { id: "half-and-half", side: 'femc', name: "Half and Half", group: "The other side", hint: "a spiker and a gymnast, one gym, the wrong day.",
      svg: "<path fill-rule=\"evenodd\" d=\"M26 6a20 20 0 1 0 0 40a20 20 0 1 0 0-40zM26 10c-4 6-4 14 1 20c-6 3-13 2-18-2c1-9 8-16 17-18zM31 33c6-4 9-11 8-18c4 3 7 8 7 13c-4 4-9 6-15 5z\"/><path d=\"M44 46c6-3 14 0 14 6s-7 9-12 7c-3-1-3-5 1-5c-2 2 2 4 5 2c3-2 1-7-4-7c-2 0-3 1-4 2z\"/>" },
    { id: "chapter-nine", side: 'femc', name: "Chapter Nine", group: "The other side", hint: "a rude artist with notes. a quiet reader who disagrees, politely.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 4l14 22l-7 28H25l-7-28zM31 22h2v20h-2zM32 16a3 3 0 1 0 0 6a3 3 0 1 0 0-6z\"/><rect x=\"24\" y=\"56\" width=\"16\" height=\"5\" rx=\"1\"/>" },
    { id: "lost-property", side: 'femc', name: "Lost Property", group: "The other side", hint: "on a full moon, the strip has a door it didn't have in the morning.",
      svg: "<path fill-rule=\"evenodd\" d=\"M18 14a12 12 0 1 0 0 24a12 12 0 1 0 0-24zM18 20a6 6 0 1 1 0 12a6 6 0 1 1 0-12z\"/><path d=\"M29 24h29v5h-4v9h-5v-9h-4v6h-5v-6h-11z\"/>" },
    { id: "but-i-refuse", side: 'femc', name: "But I Refuse", group: "The other side", hint: "once you know the manga artist, answer him the way he answers everyone. in his language.",
      svg: "<text x=\"32\" y=\"46\" text-anchor=\"middle\" font-family=\"serif\" font-weight=\"700\" font-size=\"38\">断</text>" },
    { id: "whatre-ya-buyin", side: 'femc', name: "Stranger", group: "The other side", hint: "once you know the agent, ask the merchant's question.",
      svg: "<path fill-rule=\"evenodd\" d=\"M23 8h18v9h-4v-5H27v5h-4z\"/><rect x=\"6\" y=\"17\" width=\"52\" height=\"36\" rx=\"4\"/>" },
    { id: "not-interested", side: 'femc', name: "Not Interested", group: "The other side", hint: "once you know the mercenary, turn someone down the way he does.",
      svg: "<path d=\"M27 4h12v38H27z\"/><rect x=\"18\" y=\"42\" width=\"30\" height=\"5\" rx=\"1\"/><rect x=\"30\" y=\"47\" width=\"6\" height=\"13\"/>" },
    { id: "polydeuces", side: 'femc', name: "Polydeuces", group: "The other side", hint: "once you know the boxer, call the one who fights inside him.",
      svg: "<path d=\"M20 6l4 11h12l-10 7l4 12l-10-7l-10 7l4-12l-10-7h12z M44 26l4 11h12l-10 7l4 12l-10-7l-10 7l4-12l-10-7h12z\"/>" },
    { id: "calling-card", side: 'femc', name: "Calling Card", group: "The other side", hint: "once you know panther, say what the thieves come to take.",
      svg: "<path fill-rule=\"evenodd\" d=\"M4 24c8-6 18-6 28 2c10-8 20-8 28-2c0 11-6 17-14 17c-6 0-10-4-14-8c-4 4-8 8-14 8c-8 0-14-6-14-17zM13 28a7 4.5 0 1 0 14 0a7 4.5 0 1 0-14 0zM37 28a7 4.5 0 1 0 14 0a7 4.5 0 1 0-14 0z\"/>" },
    { id: "hundred-twelve", side: 'femc', name: "Hundred and Twelve", group: 'The other side', hint: "a boxer's favorite stairs and a captain who never stops serving. know them both. hand someone a stopwatch.",
      svg: "<path d=\"M4 58V48h14V38h14V28h14V18h14v40z\"/><rect x=\"40\" y=\"4\" width=\"4\" height=\"12\" rx=\"1\"/><path d=\"M44 4l10 4-10 4z\"/>" },
    { id: "panther-pink", side: 'femc', name: "The Pink and the Panther", group: 'The other side', hint: "a model who said no and a goddess who's learning to hear it. one mall, one mirror.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 3a17 19 0 1 1 0 38a17 19 0 1 1 0-38zm0 6a11 13 0 1 0 0 26a11 13 0 1 0 0-26z\"/><rect x=\"28.5\" y=\"40\" width=\"7\" height=\"21\" rx=\"3.5\"/><path d=\"M50 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2z\"/>" },
    { id: "do-not-read", side: 'femc', name: "Do Not Read", group: 'The other side', hint: "two diaries, one bookshop on the strip. nobody reads anybody's. that's the rule.",
      svg: "<rect x=\"8\" y=\"5\" width=\"5\" height=\"54\" rx=\"2\"/><path fill-rule=\"evenodd\" d=\"M15 5h31a5 5 0 0 1 5 5v44a5 5 0 0 1-5 5H15zM33 18a7 7 0 0 0-7 7v3h-3v15h20V28h-3v-3a7 7 0 0 0-7-7zm0 4a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3z\"/>" },
    { id: "rain-bd", side: 'femc', name: "Rain on Glass", group: 'The other side', hint: "a rig from the future, code from a basement. bring the tinkerers together and wait for weather.",
      svg: "<path d=\"M32 3C24 17 13 28 13 41a19 19 0 0 0 38 0C51 28 40 17 32 3z\"/><path d=\"M53 4c-2 4-5 7-5 10a5 5 0 0 0 10 0c0-3-3-6-5-10z\"/>" },
    { id: "new-recipe", side: 'femc', name: "For His Highness, Covertly", group: 'The other side', hint: "a prince who hates vegetables. a girl who grows them. a camp stove at the end of the pier.",
      svg: "<path d=\"M5 25h44v5h-3v15a11 11 0 0 1-11 11H19A11 11 0 0 1 8 45V30H5z\"/><rect x=\"46\" y=\"27\" width=\"15\" height=\"5\" rx=\"2.5\"/><path d=\"M18 6c4 4-4 8 0 12h4c-4-4 4-8 0-12zM30 6c4 4-4 8 0 12h4c-4-4 4-8 0-12z\"/>" },
    { id: "rest-day", side: 'femc', name: "Rest Day", group: 'The other side', hint: "a sword that's too big and an ankle that's too sore. two people who won't sit down. find them a bench.",
      svg: "<rect x=\"5\" y=\"22\" width=\"54\" height=\"7\" rx=\"2\"/><rect x=\"5\" y=\"33\" width=\"54\" height=\"6\" rx=\"2\"/><rect x=\"10\" y=\"39\" width=\"6\" height=\"19\" rx=\"1\"/><rect x=\"48\" y=\"39\" width=\"6\" height=\"19\" rx=\"1\"/><rect x=\"10\" y=\"12\" width=\"6\" height=\"10\" rx=\"1\"/><rect x=\"48\" y=\"12\" width=\"6\" height=\"10\" rx=\"1\"/>" },
    { id: "kinder-than-glass", side: 'femc', name: "Kinder Than Glass", group: 'The other side', hint: "a face no mirror will hold, a pen that never lies. bring them to the café after dark.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 3l15 23-6 26H23l-6-26zM32 23a4 4 0 1 0 0 8a4 4 0 1 0 0-8z\"/><rect x=\"21\" y=\"54\" width=\"22\" height=\"7\" rx=\"2\"/>" },
    { id: "worst-patient", side: 'femc', name: "The Worst Patient", group: 'The other side', hint: "an agent who walks everything off and a doctor who won't let him. know them both, and wait for a scratch.",
      svg: "<path d=\"M24 5h16v19h19v16H40v19H24V40H5V24h19z\"/>" },
    { id: "full-attendance", side: 'femc', name: "Full Attendance", group: 'The other side', hint: "the lost & found meets again in winter. see who shows up. see who doesn't.",
      svg: "<path fill-rule=\"evenodd\" d=\"M29 4h25a5 5 0 0 1 5 5v25L33 60 4 31zM46 12a5 5 0 1 0 0 10a5 5 0 1 0 0-10z\"/>" },
    { id: "ceasefire", side: 'femc', name: "Ceasefire", group: 'The other side', hint: "a healer, a fox and a spider on one roof in the snow. bring tea. nobody shoots.",
      svg: "<path d=\"M8 24h40v9a20 20 0 0 1-40 0z\"/><path d=\"M47 27h4a8 8 0 0 1 0 16h-6v-5h6a3 3 0 0 0 0-6h-4z\"/><rect x=\"6\" y=\"55\" width=\"44\" height=\"5\" rx=\"2.5\"/><path d=\"M22 4c4 4-4 8 0 13h4c-4-5 4-9 0-13zM32 4c4 4-4 8 0 13h4c-4-5 4-9 0-13z\"/>" },
    { id: "busy-heart", side: 'femc', name: "Busy Heart", group: 'The other side', hint: "give your heart to more than one of them. the dorm always notices first.",
      svg: "<path transform=\"translate(1 10) scale(.72)\" d=\"M32 56C14 43 7 33 7 24c0-7 5-12 11-12c6 0 10 4 14 9c4-5 8-9 14-9c6 0 11 5 11 12c0 9-7 19-25 32z\"/><path fill-opacity=\".55\" transform=\"translate(21 3) scale(.72)\" d=\"M32 56C14 43 7 33 7 24c0-7 5-12 11-12c6 0 10 4 14 9c4-5 8-9 14-9c6 0 11 5 11 12c0 9-7 19-25 32z\"/>" },
    { id: "small-world", side: 'femc', name: "Small World", group: 'The other side', hint: "two of the people you love, one place, the same afternoon. nobody has to choose.",
      svg: "<path fill-rule=\"evenodd\" d=\"M32 6a26 26 0 1 0 0 52a26 26 0 1 0 0-52zM32 11a21 21 0 1 1 0 42a21 21 0 1 1 0-42z\"/><path transform=\"translate(16 15) scale(.5)\" d=\"M32 56C14 43 7 33 7 24c0-7 5-12 11-12c6 0 10 4 14 9c4-5 8-9 14-9c6 0 11 5 11 12c0 9-7 19-25 32z\"/>" },
    { id: 'good-boy', name: 'Good boy', group: 'Discoveries', hint: "who's a good boy? say his name.",
      svg: '<ellipse cx="32" cy="42" rx="12" ry="10"/><ellipse cx="17" cy="28" rx="5" ry="7"/><ellipse cx="27" cy="19" rx="5" ry="7"/><ellipse cx="37" cy="19" rx="5" ry="7"/><ellipse cx="47" cy="28" rx="5" ry="7"/>' },
    { id: 'keepsake', name: 'Keepsake', group: 'Reading', hint: 'reach a last page, then open what you kept.',
      svg: '<path fill-rule="evenodd" d="M8 16h48v34H8z M11 19l21 15l21-15v2l-21 15l-21-15z"/>' },
    { id: 'the-end', name: 'The end', group: 'Reading', hint: "finish a story that's already finished.",
      svg: '<path d="M8 14c8-2 16-1 23 4v34c-7-5-15-6-23-4z M56 14c-8-2-16-1-23 4v34c7-5 15-6 23-4z"/>' },
    { id: 'traveler', name: 'World traveler', group: 'Reading', hint: 'set foot in every open world.',
      svg: '<path fill-rule="evenodd" d="M32 6a26 26 0 1 0 0 52a26 26 0 1 0 0-52z M32 10c-6 6-9 14-9 22s3 16 9 22c6-6 9-14 9-22s-3-16-9-22z M8 30h48v4H8z"/>' },
    { id: 'hundred', name: 'One hundred', group: 'Reading', hint: 'read a hundred chapters.',
      svg: '<text x="32" y="41" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="24">100</text>' },
    { id: 'every-door', name: 'Every door', group: 'Exploring', hint: 'knock on every door.',
      svg: '<path fill-rule="evenodd" d="M16 6h32v52H16z M21 11h22v42H21z"/><circle cx="38" cy="33" r="3"/>' },
    { id: 'vault', name: 'The Vault', group: 'Exploring', hint: 'some things came before.',
      svg: '<path fill-rule="evenodd" d="M32 4a28 28 0 1 0 0 56a28 28 0 1 0 0-56z M32 10a22 22 0 1 1 0 44a22 22 0 1 1 0-44z"/><path d="M30 14h4v36h-4z M14 30h36v4H14z"/><circle cx="32" cy="32" r="7"/>' },
    { id: 'regulars', name: 'The regulars', group: 'Exploring', hint: 'turn them all over.',
      svg: '<rect x="9" y="16" width="20" height="30" rx="3" transform="rotate(-14 19 31)"/><rect x="22" y="12" width="20" height="30" rx="3"/><rect x="35" y="16" width="20" height="30" rx="3" transform="rotate(14 45 31)"/>' },
    { id: 'hearts', name: 'Generous', group: 'Exploring', hint: 'leave a note on everything.',
      svg: '<path d="M32 56C14 43 7 33 7 24c0-7 5-12 11-12c6 0 10 4 14 9c4-5 8-9 14-9c6 0 11 5 11 12c0 9-7 19-25 32z"/>' },
    { id: 'night-owl', name: 'Night owl', group: 'Moods', hint: 'come back when the stars are out.',
      svg: '<path d="M36 8a24 24 0 1 0 20 38a20 20 0 1 1-20-38z"/><path d="M48 8l2 5l5 2l-5 2l-2 5l-2-5l-5-2l5-2z"/>' },
    { id: 'golden-hour', name: 'Golden hour', group: 'Moods', hint: 'the light gets warmer around five.',
      svg: '<path d="M10 40a22 22 0 0 1 44 0z M5 44h54v3H5z M9 50h46v3H9z M31 6h2v8h-2z M9 17l1.4-1.4l5.7 5.7l-1.4 1.4z M55 17l-1.4-1.4l-5.7 5.7l1.4 1.4z"/>' },
    { id: 'too-loud', name: 'Too loud', group: 'Moods', hint: 'make it louder.',
      svg: '<path d="M8 24h10l14-12v40L18 40H8z M38 22a14 14 0 0 1 0 20l-3-3a10 10 0 0 0 0-14z M44 14a24 24 0 0 1 0 36l-3-3a20 20 0 0 0 0-30z"/>' },
    { id: 'on-repeat', name: 'On repeat', group: 'Moods', hint: 'let a song play all the way through.',
      svg: '<path d="M24 14l28-7v35a7 7 0 1 1-4-6.3V17l-20 5v26a7 7 0 1 1-4-6.3z"/>' },
    { id: 'dead-air', name: 'Seven seconds', group: 'Moods', hint: 'stay for the silence.',
      svg: '<text x="32" y="46" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-weight="800" font-size="40">7</text>' }
  ];
  const byId = Object.fromEntries(LIST.map(a => [a.id, a]));
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch (e) { return fallback; } };
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} };

  function toast(a) {
    if (!document.getElementById('ach-toast-style')) {
      const style = document.createElement('style');
      style.id = 'ach-toast-style';
      style.textContent = `
        .ach-toast { position: fixed; left: 50%; bottom: 24px; z-index: 99999; display: flex; align-items: center; gap: 12px; max-width: calc(100vw - 28px); padding: 10px 18px 10px 10px; border: 1px solid #f2b84b; border-radius: 99px; background: #141113f2; color: #fff9f1; font: 13px/1.3 ui-sans-serif, system-ui, sans-serif; text-decoration: none; box-shadow: 0 0 30px #f2b84b44, 0 14px 30px #0008; transform: translate(-50%, 30px); opacity: 0; transition: transform .5s cubic-bezier(.2,1.4,.4,1), opacity .3s; }
        .ach-toast.visible { transform: translate(-50%, 0); opacity: 1; }
        .ach-toast svg { width: 34px; height: 34px; flex-shrink: 0; padding: 5px; border-radius: 50%; border: 1.5px solid #f2b84b; fill: #f2b84b; animation: ach-spin 1s cubic-bezier(.2,1.4,.4,1); }
        .ach-toast b { display: block; color: #f2b84b; font-size: 10px; letter-spacing: .16em; text-transform: uppercase; }
        @keyframes ach-spin { from { transform: rotate(-200deg) scale(.3); } to { transform: none; } }
        @media (prefers-reduced-motion: reduce) { .ach-toast { transition: none; } .ach-toast svg { animation: none; } }`;
      document.head.appendChild(style);
    }
    const el = document.createElement('a');
    el.className = 'ach-toast';
    el.href = HOME + 'passport.html';
    el.setAttribute('role', 'status');
    el.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true">${a.svg}</svg><span><b>Secret stamp found</b></span>`;
    el.querySelector('span').append(a.name);
    (document.querySelector('dialog[open]') || document.body).appendChild(el);
    requestAnimationFrame(() => el.classList.add('visible'));
    setTimeout(() => el.classList.add('visible'), 30);
    setTimeout(() => { el.classList.remove('visible'); setTimeout(() => el.remove(), 500); }, 5200);
    window.EntranceSounds?.home('thunk');
  }

  function unlock(id) {
    const a = byId[id];
    if (!a) return false;
    const got = read(KEY, {});
    if (got[id]) return false;
    got[id] = Date.now();
    write(KEY, got);
    toast(a);
    return true;
  }

  // Track one step of a multi-step stamp; unlock once `goal` distinct values are recorded.
  function note(set, value, goal, id) {
    const progress = read(PROGRESS, {});
    const values = new Set(progress[set] || []);
    values.add(value);
    progress[set] = [...values];
    write(PROGRESS, progress);
    if (values.size >= goal) unlock(id);
  }

  return { list: () => LIST, unlocked: () => read(KEY, {}), unlock, note };
})();
