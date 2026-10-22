/* Social links that exist in the revamp but aren't written yet (TODO). Each is a full link entry with no ranks:
   the game knows who they are, their arcana and when they can first appear, and skips them until `ranks` are added.
   To write one: move it to its own file (links/<id>.js, same shape as links/akihiko.js) and delete it here.
   status: 'stub'. gate: memory fragments needed before they can appear (see the plot doc). starts: earliest date.
   Arcana that two links share (P3P's arcana for S.E.E.S. vs. v1's for others) are an open question for Kat. */
(window.FEMC_GAME_LINKS ||= []).push(
  // S.E.E.S. (P3P FeMC route arcana)
  { id: 'fuuka', name: 'Fuuka Yamagishi', short: 'Fuuka', arcana: 'Priestess', numeral: 'II', from: 'Persona 3', kind: 'sees', romance: null, starts: '6/15', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'aigis', name: 'Aigis', short: 'Aigis', arcana: 'Aeon', numeral: '', from: 'Persona 3', kind: 'sees', romance: null, starts: '7/27', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'ken', name: 'Ken Amada', short: 'Ken', arcana: 'Justice', numeral: 'VIII', from: 'Persona 3', kind: 'sees', romance: null, starts: '8/10', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'koromaru', name: 'Koromaru', short: 'Koromaru', arcana: 'Strength', numeral: 'XI', from: 'Persona 3', kind: 'sees', romance: null, starts: '8/10', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'shinjiro', name: 'Shinjiro Aragaki', short: 'Shinjiro', arcana: 'Moon', numeral: 'XVIII', from: 'Persona 3', kind: 'sees', romance: 'canon', starts: '5/12', closes: '10/4', status: 'stub', todo: 'Ranks 1–10 (plot doc §5, §9).',
    home: { area: 'portisland', spot: 'Back Alley', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6] } },
  // The Velvet Room
  { id: 'elizabeth', name: 'Elizabeth', short: 'Elizabeth', arcana: 'Velvet Room', numeral: '', from: 'Persona 3', kind: 'frame', romance: null, starts: '4/7', hidden: true, status: 'stub', todo: 'Requests and Velvet Room visits.' },
  // Visitors
  { id: 'kiriko', name: 'Kiriko', short: 'Kiriko', arcana: 'Fortune', numeral: 'X', from: 'Overwatch', kind: 'visitor', romance: null, starts: '6/10', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'kuromi', name: 'Kuromi', short: 'Kuromi', arcana: 'Tower', numeral: 'XVI', from: 'Mariland Girls’ Academy', kind: 'persona', romance: null, starts: '6/10', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'mercy', name: 'Mercy', short: 'Mercy', arcana: 'Temperance', numeral: 'XIV', from: 'Overwatch', kind: 'visitor', romance: null, starts: '6/10', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'sebastian', name: 'Sebastian', short: 'Sebastian', arcana: 'Fool', numeral: '0', from: 'Stardew Valley', kind: 'visitor', romance: null, starts: '6/10', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'aphrodite', name: 'Aphrodite', short: 'Aphrodite', arcana: 'Sun', numeral: 'XIX', from: 'Smite', kind: 'visitor', romance: null, starts: '7/9', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'judy', name: 'Judy Alvarez', short: 'Judy', arcana: 'Justice', numeral: 'VIII', from: 'Cyberpunk 2077', kind: 'visitor', romance: 'side', starts: '8/8', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'rohan', name: 'Rohan Kishibe', short: 'Rohan', arcana: 'Magician', numeral: 'I', from: "JoJo's Bizarre Adventure", kind: 'visitor', romance: null, starts: '9/7', status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'widowmaker', name: 'Widowmaker', short: 'Widowmaker', arcana: 'Death', numeral: 'XIII', from: 'Overwatch', kind: 'visitor', romance: null, starts: '10/6', status: 'stub', todo: 'Ranks 1–10.' },
  // Searchers (arcana for most is an open question)
  { id: 'hanni', name: 'Hanni', short: 'Hanni', arcana: '?', numeral: '', kind: 'searcher', world: 'R', romance: null, starts: '9/12', gate: { R: 3 }, status: 'stub', todo: 'Ranks 1–10. Separate link from Hyein; they appear in each other’s scenes.' },
  { id: 'hyein', name: 'Hyein', short: 'Hyein', arcana: '?', numeral: '', kind: 'searcher', world: 'R', romance: null, starts: '9/12', gate: { R: 3 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'jihoon', name: 'Park Jihoon', short: 'Jihoon', arcana: '?', numeral: '', kind: 'searcher', world: 'H', romance: 'canon', starts: '9/19', gate: { H: 3 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'minji', name: 'Minji', short: 'Minji', arcana: '?', numeral: '', kind: 'searcher', world: 'R', romance: 'canon', starts: '9/26', gate: { R: 4 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'yunjin', name: 'Yunjin', short: 'Yunjin', arcana: '?', numeral: '', kind: 'searcher', world: 'S', romance: null, starts: '10/10', gate: { S: 3 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'jungwon', name: 'Yang Jungwon', short: 'Jungwon', arcana: 'Hierophant', numeral: 'V', kind: 'searcher', world: 'HS', romance: 'canon', starts: '10/14', gate: { H: 4, S: 3 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'jaehyun', name: 'Jaehyun', short: 'Jaehyun', arcana: '?', numeral: '', kind: 'searcher', world: 'R', romance: null, starts: '10/24', gate: { R: 5 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'junkyu', name: 'Junkyu', short: 'Junkyu', arcana: '?', numeral: '', kind: 'searcher', world: 'H', romance: null, starts: '10/31', gate: { H: 5 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'haechan', name: 'Haechan', short: 'Haechan', arcana: 'Universe', numeral: '∞', kind: 'searcher', world: 'RS', romance: 'canon', starts: '11/4', gate: { R: 5, S: 4 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'sunoo', name: 'Sunoo', short: 'Sunoo', arcana: '?', numeral: '', kind: 'searcher', world: 'H', romance: null, starts: '11/7', gate: { H: 6 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'cherry', name: 'Cherry', short: 'Cherry', arcana: '?', numeral: '', kind: 'searcher', world: 'H', romance: null, starts: '11/14', gate: { H: 7 }, status: 'stub', todo: 'Ranks 1–10.' },
  { id: 'mark', name: 'Mark', short: 'Mark', arcana: '?', numeral: '', kind: 'searcher', world: 'R', romance: null, starts: '11/18', gate: { R: 7 }, status: 'stub', todo: 'Ranks 1–10.' }
);
