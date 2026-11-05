/* The Runners epilogue's phone (Nov 3 2026, Kat's notes after the Runners epilogue): the Contacts app's people (card lines,
   calls, message topics) and the group chats' handles. Data only (epilogue.js "The phone" documents the rules: once a week each,
   free, no closeness / flag / stat / outcome ever changes; every line gated so it never runs ahead of what she's seen).
   Handles: the Runners World site's SUgram handles where it has them (sollee, haechanah, markylee, minjibear, jen0l33, hanni,
   hyein, jaemin, renjun, chenle, oliviahye); profile pictures: art/avatars/runners (tools/femc-avatars.py).
   Inventions: Doyoung's handle `dykim.coach`, Haerin's `haerin.k`; Haechan keeps the studio's space heater on a timer; Jaehyun
   ices after practice; Mom's text-only "Mrs. Oh says hello"; Dad answers a plain good morning; Ms. Han signs "H." No plot. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  const T = (R.texts ||= {});
  T.handles = Object.assign(T.handles || {}, {
    solar: 'sollee', haechan: 'haechanah', mark: 'markylee', minji: 'minjibear', jeno: 'jen0l33', hanni: 'hanni', hyein: 'hyein',
    jaemin: 'jaemin', renjun: 'renjun', chenle: 'chenle', olivia: 'oliviahye', doyoung: 'dykim.coach', haerin: 'haerin.k', suesports: 'SUesports'
  });
  const C = 'Syracuse · Alpha Phi House · Her Room';
  R.phone = Object.assign(R.phone || {}, {
    order: ['haechan', 'minji', 'hanni', 'hyein', 'mark', 'jaehyun', 'chenle', 'jaemin', 'mom', 'dad', 'han', 'doyoung', 'danielle'],
    contacts: {
      haechan: {
        rel: 'Sigma Chi · the producer in Studio 4B',
        known: [
          { t: 'He lives at Sigma Chi and makes music upstairs in the Extracurricular Building, Studio 4B.' },
          { t: 'He calls her princess. He has never once asked whether she minds.' },
          { t: 'The five-minute rule still applies. He said so himself.', events: ['epi-r-home'] },
          { t: 'He thinks the coffee on Marshall Street is bad, and drinks it anyway.', events: ['epi-r-ask'] },
          { t: 'He promised nothing opens until she says so.', events: ['epi-r-confession'], flags: ['epi-r-stem-wait'] },
          { t: 'The track still has no name. He won’t give it one.', events: ['epi-r-playback'], route: 'haechan' }
        ],
        calls: [
          { id: 'epi-r-call-haechan-1', events: ['epi-r-regionals-1'], scene: [
            { n: 'He picked up on the first ring and didn’t say hello. Somewhere behind him a space heater ticked.' },
            { s: 'them', f: 'neutral', t: 'The fox on the sign is a dog.' },
            { s: 'solar', f: 'happy', t: 'Hyein told me you said that.' },
            { s: 'them', f: 'serious', t: 'Because it’s a dog. Somebody got paid to draw a fox and drew a dog.' },
            { choose: [
              { t: 'Were you watching the matches, or the sign?', then: [
                { s: 'them', f: 'neutral', t: '...The matches.' },
                { s: 'them', f: 'happy', t: 'Your Kiriko’s faster than it was in October. Don’t tell Chenle I noticed. He’ll make a graph.' }
              ] },
              { t: 'You watched, though.', then: [
                { n: 'There was a pause long enough to hear the heater click off.' },
                { s: 'them', f: 'neutral', t: 'Hyein had it on. I was in the room. That’s not the same thing.' }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: 'Go to bed, princess. Lobby’s at eight-thirty. I heard Doyoung say it from across the hall.' }
          ] },
          { id: 'epi-r-call-haechan-2', route: 'haechan', events: ['epi-r-playback'], scene: [
            { n: 'He answered on speaker. She could hear the studio around him, the hum of the interface, a loop playing very quietly under everything.' },
            { s: 'them', f: 'neutral', t: 'I’m not done with the mix. Before you ask.' },
            { s: 'solar', f: 'happy', t: 'I wasn’t going to ask.' },
            { s: 'them', f: 'happy', t: 'You were going to ask what it’s called.' },
            { s: 'solar', f: 'serious', t: 'What’s it called?' },
            { s: 'them', f: 'neutral', t: 'It isn’t. It doesn’t need one. You know what it is.' },
            { n: 'The loop came round again under his breathing. He turned it up, just slightly, so she could hear her own voice in it.' },
            { s: 'them', f: 'neutral', t: 'Eat something. Then call me back if you want. Or don’t. I’m here either way.' }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-haechan-eat', label: 'Did you eat?', events: ['epi-r-ask'], msgs: [
            { me: 'did u eat' }, { them: 'thats my line' }, { them: 'yes. a sandwich. jaemin made it so its mostly mustard' }, { me: 'good' }, { them: 'ur turn. answer the question' }
          ] },
          { id: 'epi-r-tp-haechan-coffee', label: 'Marshall Street coffee', events: ['epi-r-ask'], msgs: [
            { me: 'the coffee on marshall is bad' }, { them: 'i know. i told u' }, { them: 'its less bad than the rest. thats the whole review' }
          ] },
          { id: 'epi-r-tp-haechan-practice', label: 'Practice ran late', after: '12/8', msgs: [
            { me: 'practice ran late. doyoung made a new whiteboard' }, { them: 'what does it say' }, { me: 'nothing yet' }, { them: 'thats the scariest thing a whiteboard can say' }
          ] }
        ]
      },
      minji: {
        rel: 'SU Overwatch · her duo, the filmmaker',
        known: [
          { t: 'She plays on the team with Solar and films everything, always asking first.' },
          { t: 'She counts things: practices, frames, days. She says it’s a filmmaker thing.', events: ['epi-r-five-days'], after: '12/4' },
          { t: 'She lives in the honors dorm, under the lamppost that flickers.' },
          { t: 'She’s putting together a showcase reel.', events: ['epi-r-reel'], route: 'minji' }
        ],
        calls: [
          { id: 'epi-r-call-minji-1', after: '12/2', until: '12/5', scene: [
            { n: 'Minji called, which she almost never did. When Solar picked up there was the sound of a hard drive spinning down.' },
            { s: 'them', f: 'neutral', t: 'Sorry. I meant to text. My hands were full of cables.' },
            { s: 'solar', f: 'happy', t: 'You can call. It’s allowed.' },
            { s: 'them', f: 'happy', t: 'Okay. Then I’m calling to say I counted the practices before Saturday, and it’s enough.' },
            { choose: [
              { t: 'Is it enough?', then: [{ s: 'them', f: 'serious', t: 'It’s enough if we don’t waste any of them. So. We won’t.' }] },
              { t: 'You counted again?', then: [{ s: 'them', f: 'flustered', t: 'I always count. It makes it feel like it’s already happening, a little.' }] }
            ] },
            { s: 'them', f: 'happy', t: 'Okay. That was the whole call. Goodnight, Sol.' }
          ] },
          { id: 'epi-r-call-minji-2', events: ['epi-r-regionals-2'], scene: [
            { n: 'Her voice was quieter than usual, the way it got after a long day behind a camera.' },
            { s: 'them', f: 'neutral', t: 'I’ve been looking at the Regionals footage. Just the crowd. Not us.' },
            { s: 'solar', f: 'surprised', t: 'Just the crowd?' },
            { s: 'them', f: 'happy', t: 'People’s faces when a fight turns. Everyone leans the same direction at the same time. Like grass.' },
            { s: 'them', f: 'neutral', t: 'I want to cut something out of it someday. Not now. I just wanted to tell someone it was beautiful.' },
            { s: 'solar', f: 'happy', t: 'Tell me when you cut it.' },
            { s: 'them', f: 'happy', t: 'You’ll be first. You’re always first. I ask you first.' }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-minji-lamp', label: 'The lamp outside honors', msgs: [
            { me: 'is the lamp outside honors still flickering' }, { them: 'yes' }, { them: 'i think facilities has given up. i think it’s ours now' }
          ] },
          { id: 'epi-r-tp-minji-duo', label: 'Duo queue tonight?', events: ['epi-r-five-days'], msgs: [
            { me: 'duo queue tonight?' }, { them: 'yes. 9?' }, { me: '9' }, { them: 'i’ll be the one with the cap on backwards. so you can find me' }
          ] },
          { id: 'epi-r-tp-minji-graph', label: 'Chenle’s graph', events: ['epi-r-regionals-2'], after: '12/8', msgs: [
            { me: 'chenle made a graph of my suzu' }, { them: 'i know. he showed me. he was so proud of it' }, { them: 'it’s a good graph sol. it goes up' }
          ] }
        ]
      },
      hanni: {
        rel: 'Alpha Phi · Social Chair, her sister',
        known: [
          { t: 'Alpha Phi’s Social Chair. She runs the house’s calendar out of a binder.' },
          { t: 'She calls Solar “sol” and makes pancakes when there’s a crisis.' },
          { t: 'She made up “the emergency vacation” as a joke. It stuck.', events: ['epi-r-cover'] },
          { t: 'Her mother calls on the other line during chapter business.', after: '12/11' }
        ],
        calls: [
          { id: 'epi-r-call-hanni-1', events: ['epi-r-cover'], scene: [
            { n: 'Hanni was calling from down the hall, which was so Hanni it hurt.' },
            { s: 'them', f: 'happy', t: 'I could have walked. I didn’t want to walk. I’m in bed and I’m staying in bed.' },
            { s: 'solar', f: 'happy', t: 'You could have texted.' },
            { s: 'them', f: 'neutral', t: 'Texts can be screenshotted. This is a phone call. This is between us and God and the Alpha Wi-Fi.' },
            { s: 'them', f: 'serious', t: 'I just wanted to say you were really good this morning. And I hated it a little. Being good at that.' },
            { s: 'solar', f: 'sad', t: 'Me too.' },
            { s: 'them', f: 'happy', t: 'Okay. Then we hate it together. Go to sleep. Pancakes are at nine.' }
          ] },
          { id: 'epi-r-call-hanni-2', after: '12/15', scene: [
            { n: 'Finals week. Hanni sounded like she had a highlighter in her mouth.' },
            { s: 'them', f: 'neutral', t: 'Quick question. Is “bureaucratic” one c or two.' },
            { s: 'solar', f: 'happy', t: 'One.' },
            { s: 'them', f: 'happy', t: 'Okay. That’s all I needed. And also I miss you and you’re thirty feet away.' },
            { choose: [
              { t: 'Come study in my room.', then: [{ s: 'them', f: 'happy', t: 'I’m bringing the good blanket. Don’t tell Hyein, she’ll come too, and then nobody studies.' }] },
              { t: 'Two more days.', then: [{ s: 'them', f: 'neutral', t: 'Two more days. I’m writing it on my hand.' }] }
            ] }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-hanni-pancakes', label: 'Pancakes?', msgs: [
            { me: 'pancakes tomorrow?' }, { them: 'is this a crisis' }, { me: 'no' }, { them: 'then they’re celebration pancakes. same recipe' }
          ] },
          { id: 'epi-r-tp-hanni-binder', label: 'The binder', after: '12/8', msgs: [
            { me: 'how’s the binder' }, { them: 'it has eleven tabs now' }, { them: 'one of them just says “no”' }
          ] },
          { id: 'epi-r-tp-hanni-brand', label: 'The emergency vacation', events: ['epi-r-cover'], msgs: [
            { me: 'someone in my stats class said “emergency vacation” today' }, { them: 'oh no' }, { them: 'i’m never making a joke again. i’m a brand now' }
          ] }
        ]
      },
      hyein: {
        rel: 'Alpha Phi · the artist, her sister',
        known: [
          { t: 'An Alpha Phi sister who sews. Her dress form is never empty.' },
          { t: 'She texts in capitals when she’s excited, which is often.' },
          { t: 'Jaemin paid her deposit. The envelope said FOR THE ARTIST.', after: '12/10' }
        ],
        calls: [
          { id: 'epi-r-call-hyein-1', after: '12/2', scene: [
            { n: 'Hyein called with her mouth full of pins. Solar could tell from the consonants.' },
            { s: 'them', f: 'happy', t: 'Don’t talk. Just listen. Is your jersey a medium or a medium that wants to be a small?' },
            { s: 'solar', f: 'surprised', t: 'Why do you have my jersey?' },
            { s: 'them', f: 'happy', t: 'That’s talking. I said listen. It’s on my dress form. It’s being improved.' },
            { choose: [
              { t: 'A medium that wants to be a small.', then: [{ s: 'them', f: 'happy', t: 'I KNEW it. I knew it in my HANDS.' }] },
              { t: 'Please don’t cut it.', then: [{ s: 'them', f: 'serious', t: 'I would never cut it. I’m taking it in. There’s a difference and the difference is love.' }] }
            ] }
          ] },
          { id: 'epi-r-call-hyein-2', after: '12/10', scene: [
            { n: 'There was velvet in the background. You could hear velvet, Solar had learned, if there was enough of it.' },
            { s: 'them', f: 'happy', t: 'I’m calling because if I text you it’ll be in capitals and Hanni says I have to use my inside voice this week.' },
            { s: 'solar', f: 'happy', t: 'Okay. Inside voice.' },
            { s: 'them', f: 'happy', t: 'I’m going to have a show. A real one. With a little card by each piece with my name on it.' },
            { s: 'solar', f: 'happy', t: 'Hyein. That’s huge.' },
            { s: 'them', f: 'flustered', t: 'I know. I’ve been lying on the floor about it for an hour. Okay. That’s all. Bye. I LOVE YOU.' },
            { n: 'The inside voice had lasted almost the whole call.' }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-hyein-jersey', label: 'My jersey', after: '12/2', msgs: [
            { me: 'do i get my jersey back' }, { them: 'YES' }, { them: 'IMPROVED' }, { them: 'u will cry. in a good way. probably' }
          ] },
          { id: 'epi-r-tp-hyein-frame', label: 'The frame', after: '12/10', msgs: [
            { me: 'did u buy the frame' }, { them: 'I BOUGHT TWO FRAMES' }, { them: 'one for the envelope and one for backup' }
          ] },
          { id: 'epi-r-tp-hyein-outfit', label: 'What do I wear?', after: '12/14', msgs: [
            { me: 'what do i wear on the 19th' }, { them: 'u have been briefed' }, { them: 'u will be briefed AGAIN' }
          ] }
        ]
      },
      mark: {
        rel: 'Statistics · her ex',
        known: [
          { t: 'They dated. It ended. He still calls her Sol.' },
          { t: 'They take Statistics together.' },
          { t: 'He says “word” when he means thank you.', events: ['epi-r-regionals-2'] }
        ],
        calls: [
          { id: 'epi-r-call-mark-1', after: '12/10', scene: [
            { n: 'He called, and then texted *sorry, wrong button,* and then called again, which meant it hadn’t been the wrong button.' },
            { s: 'them', f: 'flustered', t: 'Hey. Okay. Statistics. The final’s on the sixteenth, right? Not the fifteenth?' },
            { s: 'solar', f: 'neutral', t: 'The sixteenth.' },
            { s: 'them', f: 'neutral', t: 'Okay. Cool. That’s, yeah. That was the question.' },
            { choose: [
              { t: 'Was that really the question?', then: [{ s: 'them', f: 'sad', t: 'Mostly. I’ll let you go. Good luck, Sol. I mean it.' }] },
              { t: 'Good luck on it.', then: [{ s: 'them', f: 'happy', t: 'Yeah. You too. Word.' }] }
            ] }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-mark-notes', label: 'The Statistics notes', after: '12/9', msgs: [
            { me: 'thanks for the stats notes' }, { them: 'word' }, { them: 'theyre not mine. i want that on the record' }
          ] },
          { id: 'epi-r-tp-mark-final', label: 'The final', after: '12/15', msgs: [
            { me: 'is the stats final open book' }, { them: 'one page of notes. both sides' }, { them: 'write small' }
          ] },
          { id: 'epi-r-tp-mark-regionals', label: 'You came to Regionals', events: ['epi-r-regionals-2'], msgs: [
            { me: 'thanks for coming to regionals' }, { them: 'u were incredible. i already said that' }, { them: 'saying it again is free' }
          ] }
        ]
      },
      jaehyun: {
        rel: 'Her big brother · Sigma Chi',
        known: [
          { t: 'Her older brother. Football, Sigma Chi, and very few words.' },
          { t: 'His first question is always whether she ate.', events: ['epi-r-did-you-eat'] },
          { t: 'Their mother’s Christmas card needs both their signatures.', after: '12/10' }
        ],
        calls: [
          { id: 'epi-r-call-jaehyun-1', events: ['epi-r-did-you-eat'], scene: [
            { n: 'He called from the training room. She could hear ice being scooped.' },
            { s: 'them', f: 'neutral', t: 'Did you eat.' },
            { s: 'solar', f: 'happy', t: 'Hi, Jaehyun.' },
            { s: 'them', f: 'neutral', t: 'Hi. Did you eat.' },
            { choose: [
              { t: 'Yes. Real food.', then: [{ s: 'them', f: 'neutral', t: 'Good.' }, { n: 'And then, after a pause that was very loud for him:' }, { s: 'them', f: 'happy', t: 'Good. That’s all.' }] },
              { t: 'Coffee counts.', then: [{ s: 'them', f: 'serious', t: 'It doesn’t. Go eat. I’ll stay on the line until you’ve ordered.' }] }
            ] }
          ] },
          { id: 'epi-r-call-jaehyun-2', after: '12/15', scene: [
            { s: 'them', f: 'neutral', t: 'Finals.' },
            { s: 'solar', f: 'neutral', t: 'Finals.' },
            { s: 'them', f: 'neutral', t: 'Sleep more than four hours. That’s the call.' },
            { s: 'solar', f: 'happy', t: 'You called to tell me to sleep?' },
            { s: 'them', f: 'happy', t: 'Someone has to. Johnny says hi. Johnny is not invited to say anything else.' }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-jaehyun-ate', label: 'I ate', events: ['epi-r-did-you-eat'], msgs: [
            { me: 'i ate. before u ask' }, { them: 'What.' }, { me: 'pasta' }, { them: 'Good.' }
          ] },
          { id: 'epi-r-tp-jaehyun-practice', label: 'How was practice?', after: '12/4', msgs: [
            { me: 'how was practice' }, { them: 'Cold.' }, { them: 'Iced after. Fine. Go to class.' }
          ] },
          { id: 'epi-r-tp-jaehyun-card', label: 'Mom’s card', after: '12/10', msgs: [
            { me: 'what do we write on moms card' }, { them: 'Merry Christmas. Our names.' }, { me: 'thats it?' }, { them: 'She reads into everything. Less is safer.' }
          ] }
        ]
      },
      chenle: {
        rel: 'SU Overwatch · the analyst',
        known: [
          { t: 'He plays on the team and keeps a spreadsheet of everything.' },
          { t: 'He eats crust first when he’s thinking.', events: ['epi-r-friday'] },
          { t: 'He made a graph of her Kiriko. He’ll only send it if she asks.', events: ['epi-r-regionals-2'], after: '12/8' },
          { t: 'He drives Haechan on Thursdays.', flags: ['epi-r-hc-thursday'] }
        ],
        calls: [
          { id: 'epi-r-call-chenle-1', after: '12/2', scene: [
            { s: 'them', f: 'neutral', t: 'I have three things. They’re short.' },
            { s: 'solar', f: 'happy', t: 'Go.' },
            { s: 'them', f: 'neutral', t: 'One. Their tank always dives on the second fight. Two. You cleanse faster than you think you do. Three.' },
            { s: 'solar', f: 'neutral', t: 'Three?' },
            { s: 'them', f: 'happy', t: 'Three is that I’m glad you’re back. I put it last so it would land.' }
          ] },
          { id: 'epi-r-call-chenle-2', events: ['epi-r-regionals-2'], after: '12/9', scene: [
            { s: 'them', f: 'neutral', t: 'I’m calling about the graph.' },
            { s: 'solar', f: 'happy', t: 'You said you wouldn’t send it unless I asked.' },
            { s: 'them', f: 'neutral', t: 'I’m not sending it. I’m describing it. Verbally. That’s different.' },
            { choose: [
              { t: 'Describe it, then.', then: [{ s: 'them', f: 'happy', t: 'It goes up. Then it goes up more. Then there’s Regionals, and it goes off the top of the chart. I had to resize the axis.' }] },
              { t: 'Send it. I’m asking.', then: [{ s: 'them', f: 'happy', t: 'Okay. It’s sent. I resized the axis for you. Don’t tell Olivia, she’ll want one.' }] }
            ] }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-chenle-bracket', label: 'The bracket', until: '12/6', msgs: [
            { me: 'whos our first match' }, { them: 'ten am. their dps is good. their tank is predictable' }, { them: 'we’re better. that’s data, not optimism' }
          ] },
          { id: 'epi-r-tp-chenle-ate', label: 'You ate a whole sandwich', events: ['epi-r-regionals-1'], msgs: [
            { me: 'i saw u eat a whole sandwich saturday' }, { them: 'i was hungry' }, { them: 'please don’t tell anyone. it ruins my brand' }
          ] },
          { id: 'epi-r-tp-chenle-practice', label: 'Last practice', after: '12/15', msgs: [
            { me: 'last practice saturday?' }, { them: 'yes. 2pm' }, { them: 'i’m bringing the regionals notes. all of them. sorry in advance' }
          ] }
        ]
      },
      jaemin: {
        rel: 'Sigma Chi · the host',
        known: [
          { t: 'He throws Sigma Chi’s parties and keeps the guest list.' },
          { t: 'She is always on the list. In bold.', after: '12/14' }
        ],
        calls: [
          { id: 'epi-r-call-jaemin-1', after: '12/8', scene: [
            { n: 'He was on speaker, and so, apparently, was most of Sigma Chi.' },
            { s: 'them', f: 'happy', t: 'SOLAR. Tell these men that a punch bowl is a centerpiece and not a challenge.' },
            { s: 'solar', f: 'happy', t: 'It’s a centerpiece.' },
            { s: 'them', f: 'happy', t: 'THANK you. Okay. That’s all. Love you. Don’t come Friday unless you want to, but you want to.' }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-jaemin-list', label: 'Am I on the list?', msgs: [
            { me: 'am i on the list' }, { them: 'u are the list' }, { them: 'that’s not true but it sounded good' }
          ] },
          { id: 'epi-r-tp-jaemin-wifi', label: 'The Wi-Fi password', events: ['epi-r-friday'], msgs: [
            { me: 'whats the sigma wifi password' }, { them: 'ask me in person. it’s a performance' }
          ] },
          { id: 'epi-r-tp-jaemin-dress', label: 'The dress code', after: '12/14', msgs: [
            { me: 'what does festive but not department store mean' }, { them: 'it means hyein knows' }, { them: 'trust hyein' }
          ] }
        ]
      },
      mom: {
        rel: 'Manhattan',
        known: [
          { t: 'She texts in full sentences, early, from the kitchen island.' },
          { t: 'She kept Solar’s place card from Thanksgiving.', events: ['epi-r-rt-mom'] }
        ],
        calls: [
          { id: 'epi-r-call-mom-1', after: '12/9', scene: [
            { n: 'Her mother answered on the second ring, as if she’d been holding the phone.' },
            { s: 'them', f: 'happy', t: 'Sweetheart. Is everything all right?' },
            { s: 'solar', f: 'happy', t: 'Everything’s fine. I just wanted to hear you.' },
            { n: 'A silence. Not a bad one. The kind you could hear somebody smile through.' },
            { s: 'them', f: 'happy', t: 'Well. Here I am. It’s snowing here too, a little. Mrs. Oh says hello.' },
            { s: 'them', f: 'neutral', t: 'Wear something warm. Eat something warm. And then go and do your work.' }
          ] }
        ],
        topics: [
          { id: 'epi-r-tp-mom-snow', label: 'It’s snowing', after: '12/2', msgs: [
            { me: 'its snowing here' }, { them: 'Then wear the good coat, please.' }, { them: 'The one with the lining. Not the pretty one.' }
          ] },
          { id: 'epi-r-tp-mom-love', label: 'Love you', msgs: [
            { me: 'love you mom' }, { them: 'I love you too, sweetheart.' }, { them: 'Is something wrong?' }, { me: 'no. just saying it' }, { them: 'Then thank you for saying it.' }
          ] }
        ]
      },
      dad: {
        rel: 'Lee Jaesang · Manhattan',
        known: [
          { t: 'He calls at 8:15, through Ms. Han. He doesn’t text often.' },
          { t: 'He told her mother it was a retreat.', events: ['epi-r-cover'] }
        ],
        noCall: 'He calls you',
        topics: [
          { id: 'epi-r-tp-dad-morning', label: 'Good morning', events: ['epi-r-cover'], msgs: [
            { me: 'good morning dad' }, { them: 'Good morning, Solar.' }, { them: 'Is something the matter?' }, { me: 'no' }, { them: 'Then good morning.' }
          ] }
        ]
      },
      han: {
        rel: 'Her father’s assistant',
        known: [
          { t: 'Her father’s assistant for eleven years. She sends flowers on Solar’s birthday, on the right day.' },
          { t: 'Every call from her father starts with Ms. Han’s number.', events: ['epi-r-cover'] }
        ],
        noCall: 'Office hours only',
        topics: [
          { id: 'epi-r-tp-han-thanks', label: 'Thank you', after: '12/2', msgs: [
            { me: 'thank you for everything ms. han' }, { them: 'You’re very welcome, Solar.' }, { them: 'Please don’t forget your gloves. H.' }
          ] }
        ]
      },
      doyoung: {
        rel: 'SU Overwatch · the coach',
        known: [
          { t: 'He runs the team with a clipboard and a whiteboard.' },
          { t: 'He gave everyone Monday off after Regionals. An order.', events: ['epi-r-rt-recovery'] }
        ],
        noCall: 'Text him',
        topics: [
          { id: 'epi-r-tp-doyoung-practice', label: 'Practice tomorrow?', msgs: [
            { me: 'practice tomorrow?' }, { them: 'Yes.' }, { them: 'Bring your notes. And water. And a better cleanse timing.' }
          ] }
        ]
      },
      danielle: {
        rel: 'Alpha Phi · the second landing',
        known: [
          { t: 'An Alpha Phi sister whose door is at the end of the second landing.' },
          { t: 'Everything she says is true. Nothing she says can be used.', events: ['epi-r-cover'] },
          { t: 'She has a print of a frame she shouldn’t have.', flags: ['epi-r-danielle-print'] }
        ],
        noCall: 'Better not',
        noMsg: 'Better not'
      }
    }
  });
})();
