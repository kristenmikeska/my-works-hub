/* The Runners epilogue, week 2 ("wrong", 12/8-12/14): story events and eight everyday routines (epilogue batch 3, writer B).
   Format: story events as data/story-*.js; routines as daily-life.js (core.js dailyLife). Loaded with the world; wraps itself
   so load order never matters.
   Events (all consumes: true): epi-r-studio (12/9 evening, every route), epi-r-playback (12/10 evening, flag
   epi-route-haechan), epi-r-sisters (12/10 evening, flag epi-route-cover), epi-r-reel (12/10 evening, flag epi-route-minji),
   epi-r-print (12/11 after), epi-r-strategy (12/11 evening), epi-r-sigma (12/12 evening), epi-r-sunday (12/14 after).
   Routines: epi-r-rt-class, -mom, -doyoung (week 1), -recovery, -olivia, -jaehyun-film, -yunjin, -jeno (week 2).
   Flags set:
     epi-r-stem-cleared / epi-r-stem-hers   studio, a "Not yet" save: every copy deleted in front of her / one copy, on her drive
     epi-r-voice-mine                       studio: she told the girl in the hallway it was her
     epi-r-term-ask / epi-r-term-none       studio terms, recordings and images: ask every time / nothing at all, for now
     epi-r-term-exclusive (+ epi-r-term-no-word)   just them (and the word "boyfriend" stays banked)
     epi-r-term-circle / epi-r-term-quiet   who knows: the inner circle (Hanni, Hyein, Minji, Chenle) / nobody yet
     epi-r-term-first / epi-r-term-silent   if SUnews photographs them: they say it first / they never answer it
     epi-r-term-tell (+ epi-r-term-chenle)  he tells her before he disappears or uses (and Chenle too)
     epi-r-term-safety                      the safety plan: she gets help first, then calls Chenle (always set with the terms)
     epi-r-studio-late                      studio, Haechan route: she stayed
     epi-r-reel-yes / epi-r-reel-cut / epi-r-reel-think   Minji's showcase: yes / yes without the green frame / not yet
     epi-r-danielle-print                   she has seen Danielle's frame (12/11)
     epi-r-public-inner / epi-r-public-post going public (12/12, Haechan route)
   Reads: epi-r-stem-wait / -file / -deleted, the locked route (ifEpiRoute), epi-r-term-*, epi-r-danielle-print,
     epi-r-public-post; ifYear: met wren, flag danielle-refused / danielle-sold, rank danielle 6, noFlag arrived-danielle /
     arrived-jaemin / arrived-mark / arrived-chenle, xmas minji, romance minji. Routine epi-r-rt-jeno gates on events: ['epi-r-sigma'].
   Glitches: { glitch: { stage: 2 } } + epi-r-g-room (studio playback), epi-r-g-freeze + tint (the party), epi-r-g-yunjin
     (the quad), strain on the lying choices (sisters, print, the party's cover). The track stays untitled. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});

  (R.events ||= []).push(

    // ---------------------------------------------------------------- 12/9 · the studio, on her terms (canon 89)
    { id: 'epi-r-studio', date: '12/9', slot: 'evening', consumes: true, title: 'her voice, this time', place: 'Syracuse · Studio 4B · Hallway', time: 'Evening', scene: [
      { music: 'epi-r-studio' },
      { n: "Tuesday practice let out at seven, Doyoung's whiteboard wiped clean for the first time in a month and nothing written on it yet, which felt stranger than any number had, and everybody else went down the stairs and out into the cold, and Solar went up them instead." },
      { n: "The Extracurricular Building had always been two buildings stacked on top of each other: the lab downstairs, RGB and the hum of thirty PCs and Olivia's laugh bouncing off the drop ceiling, and upstairs the studios, carpet on the walls, doors that sealed with a sound like a held breath. She knew the second floor better than she should. She knew which stair creaked. She'd spent a whole fall learning the geography of a secret, and here it still was, exactly where she'd left it." },
      { ifEpiRoute: 'haechan', then: [
        { n: "Nobody had asked her to come. That was the point, and she held onto it the whole way up like a railing. She'd decided on Sunday night, somewhere between the celebration and the shuttle, and she'd decided again on Monday in the shower, and again this morning on the salted path to class with her hands jammed in her pockets, and by now it wasn't a decision anymore so much as a fact about Tuesday. He worked Tuesdays. She'd known that since November. She'd never used it before." },
        { n: "4B's light was on under the door. She knocked twice, the way you'd knock on an office, and the door opened before she'd lowered her hand." },
        { place: 'Syracuse · Studio 4B', time: 'Evening' },
        { n: "He had his headphones round his neck and a pencil behind his ear and the look of someone who'd been sitting in the same position for three hours, and for one second, before the face went back on, he looked exactly as surprised as he was." },
        { s: 'haechan', f: 'surprised', t: "...Hey." },
        { s: 'solar', t: "You didn't ask me to come." },
        { s: 'haechan', f: 'neutral', t: "No." },
        { s: 'solar', t: "Good. That's why I'm here." },
        { n: "He stepped back to let her in, and didn't touch her on the way past, and she noticed that the way you notice a step that isn't there. The room was the room. Carpet, the monitors, the cheap couch with the arm that had been glued, the smell of warm electronics and, under it, vanilla, which she had decided weeks ago she wasn't going to think about and thought about immediately." },
        { s: 'solar', t: "Before anything. Show me what there is." },
        { ifFlag: 'epi-r-stem-file', then: [
          { n: "She had the file. It had been on her laptop since Wednesday, in a folder she'd named something boring on purpose, and she'd opened it once, at two in the morning, and closed it again before it loaded, which was its own sentence." },
          { n: "He didn't argue. He rolled the chair aside so she could see and opened everything, the session, the bounce folder, the backup drive with the masking tape label, his phone's voice memos, the cloud account he swore he never used, and went through them one at a time while she watched, and there was nothing. Where her voice had been in the session there was a gap, a clean rectangle of nothing on the timeline, like the pale square on a wall where a frame used to hang." },
          { s: 'haechan', f: 'serious', t: "I took it out Thursday. Bounced everything again without it. It sounds wrong now. It's supposed to." },
          { s: 'haechan', f: 'neutral', t: "That's all of it. You've got the only one." }
        ], else: [
          { n: "He didn't argue. He rolled the chair aside so she could see and opened everything, and said each thing out loud as he got to it, flat, like a man reading a receipt back to a cashier: the original take, from the night in his room. Two working copies in the session folder. A bounce from the week before Regionals. One on the backup drive with the masking tape label. Nothing on his phone. He showed her his phone anyway." },
          { s: 'haechan', f: 'serious', t: "That's everything. I didn't touch it after Wednesday. You said don't, so I didn't." },
          { n: "Five files. That was what it came to, the thing that had sat in her chest since the confession and a whole month before that when she hadn't even known it was there. Five files and a backup drive with masking tape on it. She'd thought it would be bigger. It was small enough to delete in under a minute, which somehow made it worse." },
          { choose: [
            { t: "(Delete all of it. Watch him do it.)", flag: 'epi-r-stem-cleared', then: [
              { n: "She said so, and he did it, one at a time, with the folder open so she could see each one go, then the trash, then the backup drive, then the trash on the backup drive. He didn't sigh. He didn't do it slowly to make a point. He did it the way you'd put something back where it belonged." },
              { s: 'haechan', f: 'neutral', t: "Gone." }
            ] },
            { t: "Keep one. On my drive. Nobody opens it but me.", flag: 'epi-r-stem-hers', then: [
              { n: "He copied the original take to the drive she held out, and checked it played, without playing it, just the little waveform blooming on the screen, and then he deleted every other copy in front of her, down to the trash on the backup drive." },
              { s: 'haechan', f: 'neutral', t: "It's yours. It always was. I just didn't act like it." },
              { n: "She put the drive in the inside pocket of her coat and zipped the pocket, and he watched her zip it, and looked away." }
            ] }
          ] }
        ] },
        { n: "Then there was nothing left to settle, and the room got very quiet in the specific way a studio got quiet, which was more quiet than a room was supposed to be, as if the walls were holding their breath for you." },
        { s: 'solar', t: "Play me the part where I was." },
        { n: "He looked at her. Not flat. Just looked, for a beat too long, the way he did when something landed and he hadn't decided yet what to do with it. Then he pulled the mic stand out of the corner and set it at her height without asking what her height was, and handed her the headphones, and went back behind the glass." },
        { n: "The track came up in her ears with a hole in it. She could hear exactly where she had been. The bones from that night in his room with a body on them now, drums and something low that moved under everything like a tide, and then the place where her voice should have come in, and didn't, and the music went on through the gap pretending it didn't notice." },
        { n: "She'd sung in a choir once. She'd been good at it. She'd stood in the second row of a chapel in a navy blazer and felt a whole room tune itself to the note she was holding, and then her father had said something about priorities at dinner and she'd let it go so quietly she couldn't have said which week it happened. She thought about that girl now, the one in the blazer. She thought the girl would have liked this. Being asked." },
        { cg: 'epi-r-studio' },
        { n: "The second time through the gap, she sang into it." },
        { n: "It wasn't the same. The notes were, mostly, but the night in his room she'd sung to a boy with his headphones round his neck who said he wasn't recording, half to herself, half to the ceiling, and this time she sang knowing it would be music, to a red light that said exactly what it was doing, and her voice came out of her steadier than she'd expected and lower than she remembered and entirely hers. Her hands were shaking. Her voice wasn't. She'd take that." },
        { cg: null },
        { n: "When she opened her eyes he wasn't looking at the meters. He was looking at her through the glass with his jaw set so hard she could see it from there, and then he looked down at the desk, and pressed something, and said into the talkback, flat as ever, *one more, if you want,* and she did." },
        { place: 'Syracuse · Studio 4B · Hallway', time: 'Evening' },
        { n: "She went out for water after the third take, because her throat had gone tight in a way that was only partly singing, and there was a girl in the hallway." },
        { n: "High school, obviously. A senior, maybe, standing in front of the bulletin board with a campus-tour lanyard round her neck and a folded map in one hand, the tour group's voices going away down the far stairs without her. She had the look of someone who'd stopped walking on purpose and was now pretending she'd gotten lost." },
        { s: 'eunchae', t: "Sorry. Sorry, I'm not, I'm with the tour, I just..." },
        { s: 'eunchae', t: "Who was that? Singing. Just now. Through the door." },
        { choose: [
          { t: "Me.", flag: 'epi-r-voice-mine', then: [
            { n: "It came out before she'd vetted it, which almost nothing did. The girl's whole face changed. Not starstruck. Something simpler, like she'd been told the answer to a question she'd been carrying around." },
            { s: 'eunchae', t: "Oh. Okay. Cool. That's, okay. I'm applying here. I think I'm applying here now." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Nobody. Just a session.)", then: [
            { n: "She said it was just a session, somebody's demo, and the girl nodded the way you nod at an adult who's told you something you don't believe, and looked once more at the door of 4B, and then down at her map." },
            { s: 'eunchae', t: "Well. Whoever it was. Tell them it was really good." }
          ] }
        ] },
        { n: "Then she went off after her tour at a jog, lanyard bouncing, and Solar stood in the hallway with a paper cup of water she hadn't drunk and the very specific feeling of having been heard by someone who wanted nothing from her." },
        { place: 'Syracuse · Studio 4B', time: 'Evening' },
        { n: "He played the take back for her with nothing on it, just her voice, raw, in the big speakers, and she made herself sit still for it." },
        { glitch: { stage: 2 } },
        { glitch: 'epi-r-g-room' },
        { n: "And under her voice, very faint, there was a room." },
        { n: "Not this one. A bigger one, with a high ceiling and a television on somewhere and the soft clatter of somebody setting down a tray of cups, and a couch that creaked when someone dropped onto it, and somebody laughing, a boy, the loose, open, too-loud laugh of a boy who'd been told he was too loud his whole life and had decided to keep doing it. A dorm lounge. Two seconds of it, maybe less. Then just her voice again, alone, the way it had been recorded." },
        { n: "She knew that lounge. She knew the couch. She knew the boy, and her throat closed on his name so fast it hurt." },
        { n: "He'd stopped the playback. His hand was still on the space bar. He rolled it back and played it again, and it wasn't there, and he played it a third time, leaning in with one ear turned to the speaker the way he did in the valley when he read people off the far path." },
        { s: 'haechan', f: 'serious', t: "...Bleed. Somebody's tracking down the hall, it gets into the conduit. Happens in winter, something about the heat." },
        { n: "He said it with total confidence. He was very good at total confidence. He also didn't take his hand off the space bar for a long time after, and he didn't look at her while he didn't." },
        { n: "She didn't correct him. She sat with her hands between her knees and let him have it, the conduit and the heat, because she understood suddenly that he needed it to be a conduit, and that she'd have given a great deal for it to be one too." },
        { s: 'solar', t: "Terms." },
        { s: 'haechan', f: 'neutral', t: "...What?" },
        { s: 'solar', t: "Before anything else happens in this room. We're doing terms." },
        { n: "He turned the chair to face her properly, and put both feet flat on the floor, and his elbows on his knees, and gave her his entire attention, which he so rarely did in daylight that it felt like standing too close to a heater." },
        { s: 'haechan', f: 'neutral', t: "Okay. Go." },
        { choose: [
          { t: "Recordings. Photos. Anything with me in it. You ask, out loud, every time.", flag: 'epi-r-term-ask', then: [
            { s: 'haechan', f: 'neutral', t: "Every time. Out loud. Before, not after." },
            { n: "He said *before, not after* like it was the part that mattered, and it was, and he knew it was, and neither of them said why." }
          ] },
          { t: "Nothing. No recordings, no pictures. Not for now.", flag: 'epi-r-term-none', then: [
            { s: 'haechan', f: 'neutral', t: "Okay. Nothing." },
            { n: "He didn't ask *for how long.* She watched him not ask it, and gave him one point, privately, in a ledger she would never admit she kept." }
          ] }
        ] },
        { s: 'solar', t: "And it's just us. If this is a thing." },
        { choose: [
          { t: "Nobody else. Me neither.", flag: 'epi-r-term-exclusive', then: [
            { s: 'haechan', f: 'neutral', t: "I'm not looking at anybody else, princess. I haven't been for a while. I'm just saying it out loud now." }
          ] },
          { t: "Just us. And I'm not saying boyfriend, so don't make me.", flag: ['epi-r-term-exclusive', 'epi-r-term-no-word'], then: [
            { n: "Something happened at the corner of his mouth that nobody else on campus would have believed her about." },
            { s: 'haechan', f: 'happy', t: "Wasn't going to. You'd make it sound like a diagnosis." }
          ] }
        ] },
        { s: 'haechan', f: 'neutral', t: "Who knows." },
        { choose: [
          { t: "Hanni. Hyein. Minji. Chenle. That's the list.", flag: 'epi-r-term-circle', then: [
            { s: 'haechan', f: 'neutral', t: "Chenle already knows. Chenle knows everything. He just waits for you to say it so he doesn't have to." }
          ] },
          { t: "Nobody yet. I want a week where it's just ours.", flag: 'epi-r-term-quiet', then: [
            { s: 'haechan', f: 'neutral', t: "A week. Okay. I've kept bigger things quieter than that." },
            { n: "She looked at him. He heard it as soon as it was out, and didn't take it back, and didn't decorate it either." }
          ] }
        ] },
        { s: 'solar', t: "And when SUnews gets a picture. Because she will." },
        { choose: [
          { t: "Then we say it first. Our picture, our words.", flag: 'epi-r-term-first', then: [
            { s: 'haechan', f: 'serious', t: "Then it's yours before it's hers. Fine. Better, actually." }
          ] },
          { t: "Then we never answer it. Not one word. She doesn't get a conversation.", flag: 'epi-r-term-silent', then: [
            { s: 'haechan', f: 'serious', t: "She hates that more than anything. Good." }
          ] }
        ] },
        { n: "The last two were the hard ones, and she'd known they would be since Sunday, and she said them anyway, looking at him and not at the floor, which cost her something." },
        { s: 'solar', t: "If you want to disappear. Or use. Anything. I want to know before, not after. I'm not asking you to never. I'm asking you not to lie about it." },
        { n: "He didn't answer fast. That was how she knew he'd heard it." },
        { choose: [
          { t: "Tell me. That's all. Just me.", flag: 'epi-r-term-tell', then: [
            { s: 'haechan', f: 'serious', t: "Before. Not after. Even when it's ugly." },
            { s: 'haechan', f: 'neutral', t: "Especially then, I guess." }
          ] },
          { t: "Tell me. And tell Chenle. I can't be the only one holding it.", flag: ['epi-r-term-tell', 'epi-r-term-chenle'], then: [
            { s: 'haechan', f: 'serious', t: "...Yeah. That's fair. He's already doing it anyway. He just doesn't call it that." },
            { n: "He said it like it embarrassed him. It probably did. He said it anyway." }
          ] }
        ] },
        { s: 'solar', t: "And if it's ever bad. Really bad. I call for help first. Then Chenle. Then I deal with you." },
        { flag: 'epi-r-term-safety' },
        { n: "He nodded once, slowly. Then he did something she wasn't ready for: he took his phone out and put Chenle's number in hers himself, under a contact name she didn't see until later, and handed it back, and that was the whole speech." },
        { s: 'haechan', f: 'neutral', t: "In that order. Help, him, me. Don't let me talk you out of the order." },
        { bond: { haechan: 1 } },
        { n: "Then, because he couldn't stand it, she could see him not being able to stand it, he reached behind the monitor and came back with a small paper bag, folded over twice at the top, the kind of bag a store gives you when what you bought is small enough to lose." },
        { n: "A keycap. One single keycap, white, with a fox on it, a tiny red-and-white kitsune mask painted so carefully she could see each whisker. It would fit her board. She knew without trying it that it would fit her board exactly, because she knew exactly which board he'd been looking at across a convention hall on Saturday when he'd told everybody he was only there for Chenle." },
        { s: 'haechan', f: 'neutral', t: "Your setup looked boring." },
        { n: "She laughed. She hadn't meant to. It came out of her the way the name had in the valley, without asking, and he looked at the laugh like it was something he'd been waiting on for a month." },
        { choose: [
          { t: "(Kiss him.)", flag: 'epi-r-studio-late', then: [
            { music: 'epi-r-spice' },
            { n: "She didn't decide it so much as stop deciding against it. She stood up from the couch with the keycap closed in her fist and crossed the four feet of carpet and he was already standing, already there, and she kissed him the way she'd wanted to since a hallway in October and a valley in November and a whole year in a city where none of this had happened yet." },
            { n: "He kissed her back carefully, at first, like somebody walking on ice he'd fallen through once, and then not carefully at all. His hand found her jaw. The chair rolled back into the desk and something on the desk fell over and neither of them looked. The room that was built to hold every sound held all of them, her breath catching, his name, *Hyuck*, said into his mouth, and the low sound he made when she said it, which she would think about in Statistics for a week." },
            { s: 'haechan', f: 'flustered', t: "...Say it again." },
            { n: "She did. Somewhere behind them the red take light was still on, the session still armed, and he reached past her without looking and turned it off first, deliberately, before anything else, and that, more than his hands, was what undid her." },
            { n: "The door locked with a sound like a held breath." }
          ] },
          { t: "(Not tonight. Take the keycap home.)", then: [
            { n: "She didn't kiss him. She thought about it so hard it was nearly the same thing, and he could see her think about it, and he let her not do it without a single word, which was its own answer to the terms." },
            { s: 'haechan', f: 'neutral', t: "Go home, princess. Text me you got there." },
            { n: "She walked back across the quad with the paper bag in her coat pocket and her hand closed around it the whole way, the snow coming down slow and ordinary, and she texted him from the porch, *home,* and he texted back *good,* and she stood on the porch longer than the cold allowed." }
          ] }
        ] }
      ], else: [
        { ifEpiRoute: 'cover', then: [
          { n: "Hanni and Hyein had walked her up. They hadn't asked; they'd just been waiting at the bottom of the lab stairs when practice let out, Hyein with a family-size bag of gummy worms and Hanni with two coats over her arm, one of which was Solar's, which she'd left in the house that morning." },
          { s: 'hyein', f: 'serious', t: "We'll be RIGHT here. In the hallway. On the floor. Like a security detail but with snacks." },
          { s: 'hanni', f: 'neutral', t: "If you want us to come in, you say. If you don't, we don't. We're just the door, Sol." }
        ] },
        { ifEpiRoute: 'minji', then: [
          { n: "Minji had walked her up. Her camera bag was on her shoulder, because it was always on her shoulder, and when Solar looked at it Minji put her hand flat over the clasp without being asked." },
          { s: 'minji', f: 'neutral', t: "Lens cap's on. It stays on. I'm not here as anything except the person by the door." },
          { s: 'minji', f: 'happy', t: "I'll be right here. Go." }
        ] },
        { n: "She'd come for her voice. Not for him, and not for whatever they were or weren't, which she'd been very clear with herself about all the way up the stairs, so clear that it had started to sound like protesting. Her voice had been taken once in that room. She wanted to know what it sounded like when it wasn't." },
        { n: "4B's light was on under the door. She knocked twice. He opened it, headphones round his neck, and looked past her to the hallway, to whoever was sitting on its floor, and back to her, and something in his face filed it, approved of it, and closed." },
        { place: 'Syracuse · Studio 4B', time: 'Evening' },
        { s: 'haechan', f: 'neutral', t: "Hey." },
        { ifFlag: 'epi-r-stem-deleted', then: [
          { s: 'solar', t: "I'm not here to settle anything. There's nothing to settle. You did it last Wednesday. I know you did." },
          { s: 'haechan', f: 'neutral', t: "I did." },
          { n: "He didn't add anything. He didn't tell her what it had cost, or how the track sounded now with a hole in it, or that it was better or worse. She'd asked for a thing and the thing was done, and he let it stay done, which she'd half expected him to be bad at." }
        ] },
        { ifFlag: 'epi-r-stem-file', then: [
          { s: 'solar', t: "I've got the file. I want to see that you don't." },
          { n: "He rolled the chair aside without a word and opened everything, the session, the bounces, the backup drive with the masking tape label, his phone, and went through them one at a time while she watched. Where her voice had been there was a gap. Clean. Like the pale square on a wall where a frame had hung." },
          { s: 'haechan', f: 'neutral', t: "You've got the only one." }
        ] },
        { ifFlag: 'epi-r-stem-wait', then: [
          { s: 'solar', t: "I've decided. Show me everything there is." },
          { n: "He showed her. Five files, read out flat, one at a time, the original take and two working copies and a bounce and the one on the backup drive with masking tape on it, and his phone, which had nothing on it, and which he showed her anyway." },
          { choose: [
            { t: "(Delete all of it. Watch him do it.)", flag: 'epi-r-stem-cleared', then: [
              { n: "He did, one file at a time with the folder open, then the trash, then the backup drive's trash. He didn't make it slow and he didn't make it a gesture. When it was done there was nothing on the screen but an empty folder and her own reflection in the dark half of the monitor." }
            ] },
            { t: "Keep one. On my drive. Nobody opens it but me.", flag: 'epi-r-stem-hers', then: [
              { n: "He copied the original to the drive she held out and deleted everything else in front of her. She zipped the drive into her coat. He watched her zip it, and looked away." }
            ] }
          ] }
        ] },
        { s: 'solar', t: "I want to hear what I sound like when I've said yes first." },
        { n: "He looked at her for a second longer than was comfortable. Then he set up the mic at her height without asking what her height was, and pulled a fresh session up, empty, a gray grid with nothing on it, and turned the screen so she could see that it was empty." },
        { s: 'haechan', f: 'neutral', t: "It records to your phone, not mine. I'll show you how. When you're done you take it with you and I never had it." },
        { n: "She didn't sing his track. She sang the thing she'd sung in the second row of a chapel in a navy blazer when she was fifteen, the descant from the winter concert, which she hadn't sung out loud in three years and found she knew down to the breath marks. Her hands shook. Her voice didn't. It came out lower than she remembered and steadier than she'd expected and entirely hers, and through the glass he didn't look at the meters once." },
        { n: "He played it back for her through the big speakers with nothing on it, just her, raw." },
        { glitch: { stage: 2 } },
        { glitch: 'epi-r-g-room' },
        { n: "And under her voice there was a room. A high ceiling, a television, cups set down on a tray, a couch creaking, a boy laughing too loud, the way he'd always laughed too loud. A dorm lounge on the other side of the world. Two seconds. Then just her voice again." },
        { n: "Her throat closed so fast on a name that it hurt." },
        { n: "He hadn't moved. He was writing something on the back of his hand with the pencil from behind his ear, frowning at it, the playback running on without him, and when she said *did you hear that* he looked up at her, mildly, from very far inside his own work." },
        { s: 'haechan', f: 'neutral', t: "Hear what?" },
        { s: 'solar', t: "...Nothing. The heater." },
        { n: "He nodded and went back to his hand. She sat on the glued couch with her own voice going round in the speakers and the knowledge, very cold and very clear, that this one was hers alone." },
        { place: 'Syracuse · Studio 4B · Hallway', time: 'Evening' },
        { n: "There was a girl in the hallway when she came out, a high-school senior with a campus-tour lanyard and a folded map, standing in front of the bulletin board with the look of someone who'd stopped walking on purpose." },
        { ifEpiRoute: 'cover', then: [
          { n: "Hyein had already offered her a gummy worm. She had already taken it." }
        ] },
        { ifEpiRoute: 'minji', then: [
          { n: "Minji was showing her where the film building was on the map, patiently, with one finger." }
        ] },
        { s: 'eunchae', t: "Sorry. I'm with the tour, I just... who was that? Singing. Through the door." },
        { choose: [
          { t: "Me.", flag: 'epi-r-voice-mine', then: [
            { n: "The girl's face changed, not starstruck, something simpler, like she'd been handed the answer to a question she'd been carrying around for a while." },
            { s: 'eunchae', t: "Oh. Okay. I think I'm applying here now." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Just a session. Somebody's demo.)", then: [
            { s: 'eunchae', t: "Well. Tell whoever it was it was really good." },
            { ifEpiRoute: 'cover', then: [
              { s: 'hyein', f: 'happy', t: "It was HER. She's lying. She does that." }
            ], else: [
              { n: "Minji didn't say anything. She just looked at Solar, a long patient look, and let her keep the lie, which was somehow worse than correcting it." }
            ] }
          ] }
        ] },
        { place: 'Syracuse · Studio 4B', time: 'Evening' },
        { n: "His laptop rang while she was getting her coat. A video call, two names on the screen, and he looked at it and then at her." },
        { s: 'haechan', f: 'neutral', t: "Paid client. Five minutes. You can go or you can wait, it's not interesting either way." },
        { n: "She waited. She sat on the couch and watched him become someone she'd only ever seen the edges of: a boy who did this for money, and was good at it. Two girls on the screen in a bright apartment somewhere, one with long dark hair, very still, one sharper, talking faster, a half-eaten something on a plate between them, and between his speakers, faint, their song, a demo with a hook that went up where you didn't expect it to." },
        { s: 'chaewon', t: "The second chorus. Kazuha thinks it's hiding." },
        { s: 'kazuha', t: "It's hiding a little. I like the hiding. But a little less." },
        { s: 'haechan', f: 'neutral', t: "It's hiding on purpose. The first one gives it all away, so the second one has to take something back. I'll bring it up a dB and you'll hear why it was down." },
        { n: "He did, there on the call, and played it, and the girls on the screen looked at each other and Kazuha laughed and put her hand over her mouth, and Chaewon said *okay, okay, leave it down,* and he wrote something on the back of his hand, and it was the flattest, kindest, most competent five minutes she had ever watched anybody spend." },
        { n: "Chaewon's eyes went past him once, to the corner of the frame where Solar was sitting with her coat in her lap. She didn't ask. He didn't explain. He said *Thursday,* and they said *Thursday,* and the screen went dark." },
        { s: 'haechan', f: 'neutral', t: "Told you. Not interesting." },
        { n: "It had been very interesting. She didn't tell him so. She went out to the hallway where somebody was waiting for her, with her own voice in her pocket, on her own phone, and for once in her life she didn't check it on the stairs." }
      ] }
    ] },

    // ---------------------------------------------------------------- 12/10 · playback (Haechan route)
    { id: 'epi-r-playback', date: '12/10', slot: 'evening', consumes: true, flag: 'epi-route-haechan', title: 'playback', place: 'Syracuse · Studio 4B', time: 'Evening', scene: [
      { phone: [
        { from: 'haechan', t: 'its done' },
        { from: 'haechan', t: 'if u want to hear it. ur call. no is fine' },
        { from: 'solar', t: 'after dinner' },
        { from: 'haechan', t: 'eat first then. actually eat' }
      ], contact: 'haechanah' },
      { n: "There was music already playing when she got there, and it wasn't his, or it wasn't only his. Two girls' voices on a demo, close-miked, one warm and breathy and one with an edge on it like a cut glass, trading lines over a beat he'd clearly built, the hook going up where you didn't expect it to and staying there a beat longer than was polite." },
        { s: 'haechan', f: 'neutral', t: "Client. Kazuha and Chaewon. They pay on time and they know what they want, which makes them the best people I've ever worked for." },
        { s: 'haechan', f: 'neutral', t: "Sit. They're calling in a minute and then it's yours." },
        { n: "The call came. He took it with her right there on the couch in the corner of the frame, and he didn't angle the laptop away and he didn't introduce her, and she watched him do his job: flat, quick, entirely sure of himself, telling two strangers exactly why the bridge was sitting where it sat and offering to move it anyway if they wanted to hear it wrong first." },
        { s: 'kazuha', t: "Can we hear it wrong first?" },
        { s: 'haechan', f: 'neutral', t: "Yeah. That's the right answer." },
        { n: "He moved it. It was wrong. They all heard it at once and Chaewon actually groaned and he moved it back without saying *told you,* which Solar happened to know cost him enormously." },
        { s: 'chaewon', t: "Okay. Okay, you win. Who's that?" },
        { n: "Her eyes had gone past him to the corner of the frame. To Solar." },
        { s: 'haechan', f: 'neutral', t: "She's not on this session." },
        { n: "Not *nobody.* Not *a friend.* Not anything that would make her a thing on someone else's call. Chaewon nodded like that was a perfectly normal answer, and it was, and the call ended, and Solar sat in the corner with her coat still on and something warm and stupid in her chest she was choosing not to name." },
        { n: "He reached, then, to the shelf over the desk, absently, the way you reach for a light switch in your own house in the dark, his hand going up to something that should have been there at the height of his shoulder, a dial, a knob, and closing on nothing. He looked at his own hand for a second as if it belonged to somebody else. Then he put it on the mouse." },
        { s: 'haechan', f: 'neutral', t: "...Okay. Yours." },
        { music: 'epi-r-studio' }, // the track itself: Not Enough, her voice on it
        { n: "He didn't explain it before he played it. That was the first thing she noticed and she would think about it later more than the music: he didn't tell her what to listen for, or what it meant, or what it had cost. He pressed the space bar and leaned back and looked at the floor." },
        { n: "The bones from his room had a body now. She recognized them the way you recognize a house you lived in once from the street, the shape of it under the new paint, and then the low thing came in under everything, the thing that moved like weather, and the drums, and then, in the place where there'd been a hole yesterday, her voice." },
        { n: "Her voice. The one from Tuesday, the one she'd given him with the red light on, low and steady and hers, laid into the track so carefully it didn't sound placed there, it sounded like the song had been waiting for it, like the whole architecture of the thing had been built around a space only that shape would fit. It was the most beautiful thing anybody had ever made with her in it." },
        { n: "And it had still been taken, the first time. Both of those were true at once. She sat with both of them on the glued couch with her coat still on and didn't let either one win, because the minute the beauty won, it would become an explanation, and she had decided on Sunday that nothing was going to explain it away. Not even this. Especially not this." },
        { n: "He didn't say the name of it. It had a name; she could tell from how he held his mouth at the end, the way you hold a word you've decided not to spend. The session file just said a date and a number. She didn't ask. Some things you let a person keep, and some things you make them hand over, and she'd done the second kind of thing yesterday, and today she could afford the first." },
        { choose: [
          { t: "(Say nothing. Stay till it ends.)", then: [
            { n: "She stayed till it ended, and through the four seconds of room tone after it ended, and he didn't move to stop it, and neither of them breathed very much." },
            { s: 'haechan', f: 'neutral', t: "...Yeah." },
            { n: "It wasn't a question. She didn't answer it." }
          ] },
          { t: "It's good. You know it's good.", then: [
            { s: 'haechan', f: 'neutral', t: "It's good because you said yes to it." },
            { n: "He said it to the floor. Then, because he'd heard how it sounded, he looked up and said it again to her, flatter, so she'd know he meant it and wasn't performing meaning it." }
          ] },
          { t: "It's still mine. The part with me. That doesn't change because it's beautiful.", then: [
            { s: 'haechan', f: 'serious', t: "I know. That's why I didn't play it for you until it was." },
            { s: 'haechan', f: 'neutral', t: "Yours, I mean. Not beautiful. It was always beautiful. That was the problem." }
          ] }
        ] },
        { bond: { haechan: 1 } },
        { n: "The snow had started again by the time she left. He walked her to the bottom of the stairs, which was as far as he walked anybody, and she looked back from the door and he was still standing there with his hands in his pockets, watching her the way he'd watched the far path in the valley, reading her off the dark, and for once she didn't mind being read." }
    ] },

    // ---------------------------------------------------------------- 12/10 · the sisters (cover route)
    { id: 'epi-r-sisters', date: '12/10', slot: 'evening', consumes: true, flag: 'epi-route-cover', title: 'the emergency vacation, again', place: 'Syracuse · Alpha Phi House', time: 'Evening', scene: [
      { music: 'epi-r-sisters' },
      { n: "Wednesday chapter meeting, seven o'clock, the living room with the good couches pushed back and the folding chairs out, forty girls in sweatpants and pearls in various ratios, somebody's candle making the whole room smell like a cookie someone had set on fire, and Chungha at the front with the laptop and the little bell she rang when people talked over each other, which was always." },
        { n: "Danielle had the treasurer's report. She always had the treasurer's report. It was usually four minutes long and nobody listened to it, and tonight it was four minutes long and then she turned a page in the folder she kept on her knee, unhurried, and kept going." },
        { s: 'danielle', f: 'neutral', t: "One more thing. Just for the records." },
        { s: 'danielle', f: 'happy', t: "I'm reconciling November, and there's a line I can't close. The retreat over the break. The joint one. I've had three people mention it to me as a chapter trip, and it isn't in the budget, and it isn't on the risk forms, and nobody filed a headcount with Chungha, which I know, because I asked her." },
        { n: "Chungha's bell hand went very still on the table. Chaeyeon, beside her, found something deeply interesting on the agenda." },
        { s: 'danielle', f: 'neutral', t: "So I'm just asking. If it was a chapter event, I need to know who went and who paid for it, so we're covered. Insurance. That's all. And if it wasn't, then it's a private trip, and I'll stop calling it one." },
        { s: 'danielle', f: 'happy', t: "Only it's a little awkward, because a Ms. Han called the chapter line on the twenty-sixth. Very polite. Very formal. Asking about the dates of the chapter trip, so her office could make arrangements. I told her I'd look into it." },
        { n: "Solar felt it in her stomach first, the way you feel an elevator go before the floor numbers change. Ms. Han. On the chapter line. On the twenty-sixth, while Solar was somewhere none of these girls had a word for, and Danielle had been sitting on it for two weeks like a coin she was saving." },
        { glitch: 'tint' },
        { n: "Hanni stood up. Not dramatically. Social Chair stood up at every meeting, it was practically in the bylaws, and she stood with her phone in her hand and her calendar open on it like she'd been waiting all evening to be asked." },
        { s: 'hanni', f: 'neutral', t: "It wasn't a chapter event. It was a private trip. Some of us and some of Sigma, over the break, on our own money. Nobody filed anything because there was nothing to file." },
        { s: 'hyein', f: 'happy', t: "Friendsgiving! It was a Friendsgiving situation! With, like, a cabin component." },
        { s: 'hanni', f: 'serious', t: "So you can stop calling it one. Thanks, Danielle." },
        { s: 'danielle', f: 'neutral', t: "Of course. Then I'll let Ms. Han know it wasn't the chapter. She'll want to know." },
        { n: "She turned to Solar. Not all the way. Just her eyes, over the folder, the gold in them catching the bad overhead light, and the room did what rooms did, which was follow her look to the end of it." },
        { s: 'chungha', t: "...Solar? Just so we have it straight. Was it the chapter?" },
        { choose: [
          { t: "(Lie.) It was a Sigma thing. We tagged along. Nothing to do with Alpha.", then: [
            { glitch: { strain: 1 } },
            { n: "It came out perfectly, the way her father's sentences came out, no hitch, no tell, a hand passing a coat to a valet. She was so good at it. She hated that she was so good at it. Somewhere at the back of her eyes the room went a shade too green for one breath and came back, and she kept her face exactly where it was." },
            { s: 'chungha', t: "Okay. Good. Then it's not ours. Moving on." }
          ] },
          { t: "Can we do this after the meeting? It's my family's business, not the chapter's.", then: [
            { n: "Chungha looked at her for a second too long, the look of a president deciding whether a fire was hers to put out, and decided it wasn't, and rang the bell." },
            { s: 'chungha', t: "Fair. After. Moving on." },
            { n: "Danielle wrote something down. Small, upright, one line. She didn't look up while she did it, which was worse than if she had." }
          ] },
          { t: "(Let Hanni answer for you.)", then: [
            { s: 'hanni', f: 'neutral', t: "She's answered. I answered. It was private. Can we do the formal now? Some of us need dresses." },
            { n: "Somebody laughed, and the laugh spread, and Chungha took it gratefully and rang the bell, and the meeting slid on toward the formal like a car finding the road again after a skid." }
          ] }
        ] },
        { n: "Chaeyeon, Solar noticed, never looked up from the agenda once. Not when Danielle said Ms. Han, not when Hanni stood. She sat through the rest of the meeting with her pen capped and her eyes on the same line of the same page, and when it ended she was out of her chair before the bell had finished ringing." },
        { place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'Night' },
        { n: "After, the three of them on Hanni and Hyein's floor, because the beds were for sleeping and the floor was for crises, a ruling Hyein had made in September and enforced ever since. Fairy lights. The radiator knocking like it wanted in on the conversation. Hyein's half-finished sketches for Jaemin's December outfits pinned to the corkboard over her desk, headless figures in velvet, judging them." },
        { s: 'hyein', f: 'sad', t: "Ms. Han called the CHAPTER LINE. Who calls a chapter line? Who even knows we have a chapter line? I didn't know we had a chapter line." },
        { s: 'hanni', f: 'serious', t: "Danielle knows. Danielle answers it. That's the point of having it." },
        { n: "Hanni had her knees up and her arms around them and her phone on the carpet in front of her, face down, which meant she'd been looking at something on it she didn't want to see again." },
        { s: 'hanni', f: 'sad', t: "My mom asked again today. In the family chat. Whose cabin it was. She wants to send a thank-you card. A card, Sol. To the cabin." },
        { s: 'hyein', f: 'neutral', t: "Mine asked what we ate. I said turkey. I don't know why I said turkey, everyone eats turkey, it's a terrible lie because it's not even a lie, it's just a noun." },
        { n: "It was getting harder to hold. All three of them could feel it, the way you can feel a stack of books start to lean before it goes. Every person who believed the story asked one more question, and every question needed one more answer, and every answer was a little brick they'd have to remember the exact shape of forever." },
        { s: 'hanni', f: 'neutral', t: "Okay. Okay. We tighten it. One cabin. Upstate. Someone's uncle's. No names, nobody posts, nobody remembers the address because it was a dirt road. We say less. Less is harder to check." },
        { s: 'hyein', f: 'serious', t: "And we say it the same. All of us. Word for word. Memorize it." },
        { n: "Solar laughed, and it came out wrong, wet at the edges. *Memorize it.* The first morning, the snow on the sill, the girls saying exactly that. It felt like a year ago. It had been nine days." },
        { s: 'hanni', f: 'sad', t: "...Sol. I'm sorry. It's my fault she has this much rope. I should have said something at the door. In November. I keep thinking about it." },
        { choose: [
          { t: "It's not on you. It was never on you.", then: [
            { s: 'hanni', f: 'sad', t: "It's a little on me." },
            { s: 'solar', t: "Okay. A little. Then we split it. Three ways. That's what the floor's for." },
            { n: "Hyein made a sound that was half laugh and half something else and put her head on Hanni's shoulder, and Hanni let her, and after a while Hanni's hand found Solar's on the carpet and held it, and nobody said anything for a long time, and the radiator knocked." }
          ] },
          { t: "You kept it because you were scared. I know what that's like. I'm doing it right now.", then: [
            { n: "Hanni looked at her. Hyein looked at both of them. Nobody said *the trip,* and nobody needed to." },
            { s: 'hyein', f: 'sad', t: "We're all doing it right now. That's the whole problem. We're all really good at it." },
            { n: "They sat in the fairy lights being really good at it, the three of them, and holding hands about it, which was at least a better way to be good at it than alone." }
          ] }
        ] },
        { bond: { hanni: 1 } },
        { n: "When she went back to her own room the hall was dark, and Danielle's door at the end of it was open, the way it was always open, a slice of lamplight on the carpet. She walked past it without turning her head. She felt the light on the side of her face the whole way, like the sun through a car window, long after she'd shut her own door." }
    ] },

    // ---------------------------------------------------------------- 12/10 · the reel (Minji route)
    { id: 'epi-r-reel', date: '12/10', slot: 'evening', consumes: true, flag: 'epi-route-minji', title: 'the reel', place: 'Syracuse · Honors Dorm', time: 'Evening', scene: [
      { music: 'epi-r-closure' },
      { n: "Minji's room in the honors dorm was the cleanest room Solar had ever been in that belonged to someone under thirty. Two monitors, a hard drive tower stacked like a wedding cake, a corkboard with index cards in color-coded rows, the bed made with hospital corners, and on the windowsill a single dying succulent Minji refused to give up on, which explained most things about her." },
        { n: "She'd asked Solar to come. Asked properly, a text at noon with a time and an out: *you can say no, it's just footage.* Nothing with Minji was ever just footage. That was the whole point of Minji." },
        { s: 'minji', f: 'neutral', t: "I want to show you something before I show anyone else. And then I want to ask you something. In that order. Okay?" },
        { s: 'solar', t: "Okay." },
        { ifYear: { xmas: 'minji' }, then: [
          { n: "It was the lamppost. Of course it was. The first afternoon back, the snow just stopped, the light gone long and gold, the lamp outside this building that had flickered since September, and Solar walking into frame across the quad without deciding to, and stopping under it, and the lamp holding steady for once, and Solar looking straight into the lens." },
          { n: "She'd never seen her own face do that. Not in a mirror, not in a photo. She looked like someone who'd been allowed to stop for a second. She looked like herself, which was a stranger to look at than she'd expected." },
          { n: "Minji scrubbed forward, slowly, a frame at a time, the arrow key clicking. Click. Solar smiling. Click. Click. And then one frame that was green." },
          { n: "Not tinted. Green, the whole thing, a sick still underwater green, and in it the quad was the quad, and the lamppost was the lamppost, and where the students crossing the background should have been there were shapes. Upright. Dark. The size and height of people. Then the next frame, click, and they were students again, and Solar was smiling into the lens again, and it had never happened." },
          { s: 'minji', f: 'serious', t: "One frame. Twenty-four of them a second and one's like that. I've checked the card. I've checked the camera. I've checked the other camera." },
          { s: 'minji', f: 'neutral', t: "We both know what it looks like. I'm just not saying it out loud in a building with an RA." }
        ], else: [
          { n: "It was Regionals. Her footage of the crowd from the side of the stage, Saturday afternoon, the convention hall with its terrible carpet and its terrible light and three hundred people in team colors holding up their phones, the camera panning slow across the rows the way Minji panned everything, like she was reading it." },
          { n: "Minji stopped it. Scrubbed back. A frame at a time, the arrow key clicking." },
          { n: "In the fourth row, between a girl in an SU beanie and a man in a lanyard, there was a boy. Baseball cap on backwards, chin stubble, a grin so wide it was practically a sound, both hands up, cheering for somebody with his whole body like he'd paid for the seat. One frame. The next frame, click, the seat was a girl in a puffer jacket eating popcorn, and she'd been there the whole time." },
          { n: "Solar knew him. She knew the cap and the grin and the way he cheered like nobody had ever told him to lower it. Her hand had gone flat against the desk without her telling it to." },
          { s: 'minji', f: 'serious', t: "One frame. I've checked the card. I've checked the camera. He's not in the frame before and he's not in the frame after." },
          { s: 'minji', f: 'neutral', t: "You know who that is. I can see you know. You don't have to tell me. I think I know too. I saw him at the dorm once. Over there." }
        ] },
        { n: "They sat with it for a minute, the frame frozen on the monitor, the hard drives humming, the radiator ticking, two girls who'd been somewhere neither of them could explain looking at proof of it that nobody else on earth would believe was proof of anything." },
        { s: 'minji', f: 'neutral', t: "There's a showcase in the spring. The film department. Shorts, ten minutes, a jury, a real audience. I've been cutting something since we got back." },
        { s: 'minji', f: 'flustered', t: "It's not about you. It's, it has you in it. It's about coming home and nobody knowing you went anywhere. About pretending it was a cabin." },
        { n: "She turned her chair to face Solar fully, and put her hands in her lap, and did the thing she'd done twenty times before and would do twenty more, which was ask." },
        { s: 'minji', f: 'serious', t: "Can I use this? You. Your face, the footage. You can say no. You can say some of it. You can say not yet. I'll ask again before it's final either way, and again before it screens." },
        { choose: [
          { t: "Yes. All of it.", flag: 'epi-r-reel-yes', then: [
            { n: "Minji didn't smile right away. She wrote it down first, on an index card, the date and the word *yes* and Solar's initials, and pinned it to the corkboard in a color all its own, and then she smiled, and it was the kind of smile you weren't supposed to see." },
            { s: 'minji', f: 'happy', t: "Okay. Thank you. I'll still ask again. You know I will." }
          ] },
          { t: "Yes. But not that frame. That one stays here.", flag: 'epi-r-reel-cut', then: [
            { s: 'minji', f: 'neutral', t: "That one was never going in. That one's ours." },
            { n: "She dragged the single frame out of the timeline into a folder of its own and named the folder nothing, a blank, and Solar watched her do it and felt something she didn't have a word for and didn't want one." }
          ] },
          { t: "Not yet. Ask me again after finals.", flag: 'epi-r-reel-think', then: [
            { s: 'minji', f: 'neutral', t: "After finals. I'll put it in my calendar. I'm actually putting it in my calendar, look." },
            { n: "She was. A little block on the nineteenth that just said *ask.* Solar laughed, and Minji looked at her laughing the way she always had, for a second too long, and then made herself look back at the screen." }
          ] }
        ] },
        { ifYear: { romance: 'minji' }, then: [
          { n: "At the door, coat on, Solar turned back for no reason, and Minji was already looking at her, the way she'd looked at her across a whole year in another city, in a dorm, on a roof, and didn't look away this time, and didn't say anything either." },
          { s: 'minji', f: 'neutral', t: "I said what I said on Sunday. I meant it. I just want you to know I didn't say it so the door would close." },
          { s: 'minji', f: 'flustered', t: "...Go. Get home before it snows more." }
        ], else: [
          { n: "At the door Minji hugged her, quick and firm, a teammate's hug, and then held on a second past where a teammate would have, and let go, and pretended she hadn't." },
          { s: 'minji', f: 'happy', t: "Text me you got home. And sleep. You've got a Statistics final and you have not opened the book, I can tell from here." }
        ] },
        { bond: { minji: 1 } }
    ] },

    // ---------------------------------------------------------------- 12/11 · the print
    { id: 'epi-r-print', date: '12/11', slot: 'after', consumes: true, title: 'the print', place: 'Syracuse · Alpha Phi House · Stairs', time: 'After Class', scene: [
      { flag: 'epi-r-danielle-print' },
      { music: 'epi-r-faceoff' },
      { n: "The second landing. Of course it was the second landing, the place on the stairs where the house turned on itself and you couldn't see up or down, where she'd come down at two in the morning in November in somebody else's jacket and seen a light on where it shouldn't have been." },
      { n: "It was four in the afternoon now, gray, the snow outside the landing window coming down in no hurry, and Danielle was sitting on the top step of the second flight with her back very straight and an envelope on her knee, a paper envelope with a pharmacy's photo-counter logo on it, as if she'd been waiting a while and would have waited a while longer." },
      { s: 'danielle', f: 'happy', t: "Solar. Do you have a minute? You have a minute." },
      { n: "She didn't stand. She didn't need to. Solar was below her on the stairs, and Danielle had picked the step for that, the way she picked everything, and was perfectly happy to let it do the work." },
      { s: 'danielle', f: 'neutral', t: "Everyone's been so curious about the cabin. I haven't been. I want you to know that. I'm the only person in this house who hasn't asked you a single thing about the cabin." },
      { s: 'danielle', f: 'neutral', t: "Because I know there wasn't one." },
      { ifYear: { noFlag: 'arrived-danielle' }, then: [
        { n: "She'd said it in the kitchen, the second day back, about seeing Solar over there when Solar had never seen her. Solar had decided it was a bluff. It had been easier, for a week, to decide it was a bluff." }
      ], else: [
        { n: "Of course she knew. She'd stood across a dead street at midnight in a long coat holding a folder in a world that wasn't hers, smiling like she'd been waiting for a meeting. She'd been there the whole time Solar had." }
      ] },
      { ifYear: { rank: { danielle: 6 } }, then: [
        { n: "And somewhere in there, in a plaza in the Dark Hour, Solar had grabbed her by the sleeve and pulled. Danielle's hands had shaken afterward. It was the only time Solar had ever seen them do anything but hold a pen level. Neither of them had mentioned it since. Neither of them was going to start now." }
      ] },
      { n: "She opened the envelope. Slid one print out, with two fingers, by the edges, like it might stain, and held it out down the stairs at arm's length so that Solar had to come up two steps to take it." },
      { n: "A street. That was all it was, at first. A narrow street at night, a row of houses, a streetlamp. Except the light was wrong. The whole print was green, a still, underwater, rotting green, like the color had been left out in the rain, and the streetlamp wasn't on, and along the pavement where people should have been walking home there were shapes. Upright. Dark. Each one the height of a person. Each one with a lid." },
      { n: "Coffins. Standing on the pavement in a row, in the green, outside a convenience store whose sign she could almost read." },
      { n: "Solar's hand didn't shake. She was very proud of her hand. Her stomach dropped through the stairs and kept going." },
      { s: 'danielle', f: 'neutral', t: "Disposable camera. I finished the roll somewhere I can't account for, and I dropped it at a pharmacy on Erie Boulevard on the second, and this came back in the envelope with twenty-three pictures of things I remember taking." },
      { s: 'danielle', f: 'neutral', t: "I didn't take this one. Well. I did. I remember the shutter. I don't remember there being anything to take." },
      { ifYear: { met: 'wren' }, then: [
        { n: "There was a second print. She didn't hand it over. She just tilted it, on her knee, so Solar could see." },
        { n: "A bench at the end of a station platform, the light falling across it in long bars. An empty bench. A clean, careful, well-composed photograph of nothing. Except that across the slats, where the light fell, there was a shadow, and it wasn't the shadow of the bench, and it wasn't the shadow of anything on the platform. It was small and soft-edged and it had a brim, the exact shape of a cap, the kind a train porter wore, resting on the empty seat where nobody was." },
        { n: "Solar looked at it a second too long. She knew the bench. She knew who'd sat there at that hour, every day, with a ticket she never used." },
        { n: "Danielle watched her look. Danielle said nothing at all. She slid the print back into the envelope, behind the others, and laid her hand flat on it." }
      ] },
      { ifYear: { flag: 'danielle-sold' }, then: [
        { s: 'danielle', f: 'happy', t: "You let me take one, over there. Do you remember? You stood still and let me. I still have it. I just want you to know I keep my receipts." }
      ] },
      { ifYear: { flag: 'danielle-refused' }, then: [
        { s: 'danielle', f: 'neutral', t: "You wouldn't trade with me over there. It was very irritating. I've thought about it more than I'd like." },
        { n: "She said it like a complaint. It was the closest thing to a compliment Solar had ever heard come out of her, and they both knew it, and Danielle's mouth tightened about having let it out." }
      ] },
      { s: 'danielle', f: 'neutral', t: "So I'll ask you the way I'd ask anyone. For the records." },
      { s: 'danielle', f: 'happy', t: "Where were you, Solar? From the twenty-second to the thirtieth?" },
      { choose: [
        { t: "(Lie.) Joint retreat. Invite only. No signal.", then: [
          { glitch: { strain: 1 } },
          { n: "She said it word for word, the way they'd drilled it, in her father's voice, smooth as a wineglass, and the print in her hand went a shade greener for one breath at the edges, she would swear it did, and came back." },
          { s: 'danielle', f: 'happy', t: "Word for word. Hyein must be so proud." },
          { s: 'danielle', f: 'neutral', t: "You're very good at that. I always thought you would be. You're your father's daughter." }
        ] },
        { t: "You know where I was.", then: [
          { s: 'danielle', f: 'neutral', t: "I do. I'd like to hear you say it." },
          { n: "Solar didn't. Danielle waited exactly as long as it took to be sure she wouldn't, and smiled, as if the silence had been the answer and a good one, and she'd been hoping Solar would give it." },
          { stat: { courage: 1 } }
        ] },
        { t: "(Say nothing. Hand the print back.)", then: [
          { n: "She held it out, up the stairs, at arm's length. Danielle had to lean down to take it. Solar watched her notice that, and file it, and decide to let her have it, this once." },
          { s: 'danielle', f: 'neutral', t: "Keep your secrets. Everyone does. It's what makes them interesting." }
        ] }
      ] },
      { n: "She stood. She tucked the envelope into the folder, behind the receipts, and the folder under her arm, and came down the two steps that put them level, close enough to smell her coffee and the cold on her coat." },
      { s: 'danielle', f: 'neutral', t: "I can't post it. I want you to know I thought about it. It's the best thing I've ever taken and nobody would believe a word of the caption." },
      { s: 'danielle', f: 'happy', t: "That's never stopped me before. It's just interesting, that's all. Being the only one with the picture." },
      { n: "She went down the stairs. At the landing she paused, the way she always paused in doorways, because exits were where she kept her best material, and Solar braced for it." },
      { s: 'danielle', f: 'neutral', t: "Except you're not, are you. The only one. I've counted." },
      { n: "Then she was gone, a click of heels on the hall floor, her door shutting with a sound so small and precise it was almost polite, and Solar stood on the second landing in the gray light with the snow coming down outside the window and the green still on the backs of her eyes like she'd looked at the sun." }
    ] },

    // ---------------------------------------------------------------- 12/11 · strategy, not fire (canon 90)
    { id: 'epi-r-strategy', date: '12/11', slot: 'evening', consumes: true, title: 'strategy, not fire', place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'Evening', scene: [
      { music: 'epi-r-sisters' },
      { n: "By eight there were five people on Hanni and Hyein's floor, which was two more than the floor had been designed for and four more than the RA policy allowed after seven, which nobody mentioned. Hanni with her laptop. Hyein with a sketchbook open to a blank page and four colors of pen uncapped in a row. Minji cross-legged by the radiator with her phone in her hand. Chenle in the desk chair, turned backward, arms folded on the back of it, because he didn't sit on floors, which he'd explained once in October in a way that had made everyone regret asking." },
      { ifEpiRoute: 'haechan', then: [
        { n: "And Haechan, on the floor with his back against the door, legs out, as close to the exit as he could get while still technically being in the room. Hyein had looked at him for a full five seconds when he came in. Hanni had said *hi* the way you say it to a dog you've been told is friendly. He'd said *hey* back, flat, and sat where he was put, and hadn't said anything since." },
        { n: "He was warmer with them than he had any right to be. A whole year over there had done that, a year of the same dorm and the same kitchen and Hyein measuring him for things he never asked to be measured for. It was strange to watch it show up here, in a pink room in Syracuse, and see the girls not quite know what to do with it." }
      ] },
      { n: "Solar had told them about the print. All of it, the stairs, the green, the shapes, the envelope, the folder. Then she'd stood up, which was a mistake, because once she was standing she wanted to be walking, and she wanted to be walking down the hall." },
      { s: 'solar', t: "I'm going to her room. Right now. I'm going to tell her I know it's her, all of it, SUnews, SUanon, the posts, the captions, the chapter line, everything, and I'm going to say it loud enough that the whole hall hears, and then I'm going to—" },
      { ifEpiRoute: 'haechan', then: [
        { s: 'haechan', f: 'serious', t: "No." },
        { n: "He didn't get up. He didn't raise his voice. He said it from the floor with his back against the door, and the whole room turned to look at him, and he let it." },
        { s: 'haechan', f: 'serious', t: "I watched a girl pay for being turned into a story. Last year. I watched from closer than anyone in this room." },
        { s: 'haechan', f: 'neutral', t: "That's what Danielle wants. A scene. You in a hallway, shouting. She doesn't need a single true thing if she gets that, she just needs the hallway. Don't give her a hallway." },
        { n: "Solar knew exactly how close he'd watched from. The others didn't, not all of it, and she saw Hyein's pen stop, and Minji look at him and then at Solar, and Hanni not look at anyone. He didn't explain. He didn't take it back either. He just sat there with it, owning it in front of four people who could have used it, which she understood, slowly, was the most expensive thing he'd ever done in a room." },
        { n: "She sat down." }
      ], else: [
        { s: 'hanni', f: 'serious', t: "Sol. Sit down." },
        { n: "Hanni didn't raise her voice. She didn't need to. She just said it, and kept her hand on the laptop, and waited." },
        { s: 'hanni', f: 'serious', t: "If you go up there tonight, she gets a scene. That's all she's been waiting for. Two weeks of being nice at meetings, waiting for you to give her a hallway. Don't give her a hallway." },
        { s: 'hyein', f: 'sad', t: "Please don't give her a hallway. I can't do another hallway." },
        { n: "She sat down." }
      ] },
      { s: 'chenle', f: 'neutral', t: "Okay. Then we do it properly. Two columns." },
      { n: "Hyein drew them before he'd finished the sentence, a line straight down the middle of the page, and wrote PROOF at the top of one in green and THINGS WE KNOW at the top of the other in pink, then crossed out THINGS WE KNOW and wrote INFERENCE, because Chenle was looking at her." },
      { s: 'chenle', f: 'serious', t: "Proof is what you could show someone who hates you. Inference is everything else. Most of what we have is inference. That's not bad, it's just a different column." },
      { n: "It went on for an hour. Hanni's screenshots, every SUnews post since August, every caption, every timestamp, sorted by date in a folder she'd started in October and never told anyone about. Minji's footage logs, which had the exact minute of things down to the second, because of course they did. The doorstep: Mark at Danielle's door in October, *I just want an in,* which Hanni and Hyein had heard with their own ears and sat on for a month, and said again now, out loud, word for word, to the room. Who knew what, and when. Who'd said what to whom. Hyein's columns filling up in two colors, the pink one three times as long as the green." },
      { s: 'minji', f: 'neutral', t: "The caption. After Halloween. *Some lessons have to be learned the hard way.* That always sounded like it was for someone." },
      { ifEpiRoute: 'haechan', then: [
        { s: 'haechan', f: 'neutral', t: "It was. She said it to her. Last year. The girl. They were friendly, before. Danielle warned her off Mark in the same voice she uses on you, all concern, all *I'm just telling you because I care.* When she didn't listen, that was the lesson." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "She said that to her. Last year. The girl everyone talks about. In the kitchen at the house, at a party, I was getting ice. *Some lessons.* I remember because it was a strange thing to say to someone holding a cup." },
        { s: 'chenle', f: 'neutral', t: "They were friendly. Before. Then they weren't." }
      ] },
      { n: "Hyein wrote it in pink. Then, after a second, she drew a little arrow from it to the caption on the other side of the page, from INFERENCE toward PROOF, and didn't quite let it arrive." },
      { ifEpiRoute: 'cover', then: [
        { s: 'hanni', f: 'neutral', t: "Chungha and Chaeyeon know something. Chaeyeon didn't look up once last night when Danielle said Ms. Han. You don't stare at an agenda that hard unless you're scared of what's on your face." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "Chungha and Chaeyeon know something. I've watched Chaeyeon at every meeting since September. Every time Danielle opens that folder, she reads the agenda like it owes her money." }
      ] },
      { s: 'solar', t: "So we go to them." },
      { s: 'hanni', f: 'serious', t: "Carefully. Not as a group. Not with a list. One of us, one of them, somewhere boring, and we ask a question, not an accusation. They've been quiet a year. You don't get somebody to stop being quiet by shouting at them." },
      { s: 'solar', t: "And not Jaehyun." },
      { s: 'hanni', f: 'neutral', t: "Not Jaehyun yet. Not till it's strong enough that him knowing doesn't just cost you." },
      { s: 'solar', t: "And no fresh scene. Nothing public. Nothing she can photograph." },
      { ifEpiRoute: 'haechan', then: [
        { s: 'haechan', f: 'neutral', t: "That includes me, by the way. Don't let me be the scene." }
      ] },
      { ifYear: { noFlag: 'arrived-chenle' }, then: [
        { s: 'chenle', f: 'neutral', t: "I was in the back row over there, too. The whole time. Back rows are good for this. You see who's watching." }
      ] },
      { n: "Then, because it had to go somewhere, Solar said the last thing. The one that didn't fit in either column." },
      { s: 'solar', t: "And she has a picture none of us can explain." },
      { n: "Nobody wrote that down. Hyein's pen hovered over the page for a long second, between the two columns, and came down on neither, and she capped it. Five people who'd been somewhere none of them could put on a map sat on a pink floor in Syracuse and looked at the space between PROOF and INFERENCE where the green street went, and the radiator knocked, and outside the window the snow came down on the quad, slow, ordinary, falling the right way, for now." },
      { s: 'chenle', f: 'neutral', t: "...We'll need a third column." },
      { stat: { knowledge: 1 } }
    ] },

    // ---------------------------------------------------------------- 12/12 · the first social test (Sigma Friday)
    { id: 'epi-r-sigma', date: '12/12', slot: 'evening', consumes: true, title: 'first social test', place: 'Syracuse · Sigma Chi House', time: 'Evening', scene: [
      { music: 'epi-r-party' },
      { n: "The Friday party happened. It always happened; it happened weekly without fail, the way the tides did, and the last one before finals had a particular desperation to it, everybody drinking like the library was a war they were shipping out to on Monday." },
      { n: "Jaehyun was downtown at the football banquet in a suit, with a plaque, which meant the house was Jaemin's, which meant there was a list at the door with names on it Jaemin had clearly made up, and fairy lights stapled to the banister in a way that was going to cost someone their deposit, and a punch bowl in the kitchen that Jeno had mixed personally and was describing to everyone who passed as *medically interesting.*" },
      { s: 'jaemin', f: 'happy', t: "The emergency vacationers! Welcome back to civilization! Was there signal yet? Do they have signal where you went? Blink twice." },
      { ifYear: { noFlag: 'arrived-jaemin' }, then: [
        { s: 'jaemin', f: 'neutral', t: "I threw a party over there you never came to. Rude." },
        { n: "He said it right there in the doorway, cheerful, as a greeting, and walked off before she could answer, and she stood on the step with her mouth open and the cold at her back." }
      ] },
      { n: "Renjun was in the kitchen doorway with a cup he wasn't drinking from, watching the room the way other people watched television. Jisung was trying to get the speaker to connect and asking everybody, sincerely, whether they knew the password, which nobody did. Jeno had his phone up, filming his story, turning in a slow circle with the punch bowl in the foreground like it was a monument." },
      { s: 'jeno', t: "Last one before finals, lock in, academic weapons only, the punch is for morale." },
      { n: "And Danielle. On the stairs, three steps up, a cup in her hand she wasn't drinking from either, in a cream sweater, perfectly still, the only person in the house standing on the stairs who wasn't on the way up or down them." },
      { ifEpiRoute: 'haechan', then: [
        { n: "They'd come in together. Not touching. Not not touching. The terms sat between them in the doorway like a third person: what they'd said in 4B, what they'd decided, the list of who knew, which was short, and the rest of this house, which wasn't on it." },
        { n: "It was the first time. That was the thing she kept feeling in her stomach, a step dropping under her. The first party where they'd walked in through the same door on purpose, and every person in the hallway who looked up looked at both of them, and then at each other, and then away, in that order." },
        { s: 'haechan', f: 'neutral', t: "...She's on the stairs." },
        { s: 'solar', t: "I know. I can feel her on the stairs." },
        { ifFlag: 'epi-r-term-none', then: [
          { n: "Her phone was in her hand. She didn't remember taking it out. There were no pictures of them; that had been the deal, *nothing, not for now,* her own rule. She looked at the stairs. Then she held the phone up between them and asked him, out loud, the way she'd made him promise to ask her, whether she could take one. Just one. Here." },
          { s: 'haechan', f: 'neutral', t: "...Yeah. You can." },
          { n: "So she took it, in the front hall of Sigma Chi with the bass in the floor: his face half turned away from the lens and hers looking straight into it, a pink can in her hand, nothing much." }
        ], else: [
          { n: "Her phone was in her hand. She didn't remember taking it out. On it, a photo from Tuesday, which he'd asked for, out loud, before: the two of them in 4B, nothing much, his face half turned away from the lens and hers looking straight into it, and the kitsune keycap catching the light on the desk at the edge of the frame." }
        ] },
        { ifFlag: 'epi-r-term-silent', then: [
          { n: "*We never answer it,* she'd said in the studio. *She doesn't get a conversation.* And she still thought that. She also thought there was a difference between answering a question and getting to it first." }
        ] },
        { ifFlag: 'epi-r-term-first', then: [
          { n: "*Then we say it first,* she'd said in the studio. *Our picture, our words.* She'd meant it as a contingency. Looking up at the stairs, at the cup Danielle wasn't drinking from, it felt less like a contingency and more like a clock." }
        ] },
        { choose: [
          { t: "(Post it. Our picture, our words.)", flag: 'epi-r-public-post', then: [
            { n: "She held it up so he could see it, so he could say no. He looked at it, and at her, and didn't say no." },
            { s: 'haechan', f: 'neutral', t: "Your caption, princess. Not mine. I'd make it weird." },
            { n: "She typed one word. *hi.* Lowercase. She looked at it for a full five seconds, which was four and a half seconds longer than she'd ever looked at anything before posting it, and then she posted it, standing in the front hall of Sigma Chi with the bass coming up through the floor, and put the phone in her pocket, and didn't look at it again." },
            { n: "On the stairs, three steps up, a phone lit in a cream sweater's hand. Danielle looked at the screen. Then she looked up, across the hall, straight at Solar, and something moved behind her eyes, a chart being updated, a draft being deleted, a whole caption she'd been saving folded in half and put away. She didn't smile. That was how Solar knew it had worked." },
            { s: 'haechan', f: 'neutral', t: "...Somebody's going to send that to your brother before midnight." },
            { s: 'solar', t: "I know." },
            { s: 'haechan', f: 'neutral', t: "Okay. Just so we both know." },
            { stat: { courage: 1 } }
          ] },
          { t: "(Put it away. The people who need to know already do.)", flag: 'epi-r-public-inner', then: [
            { n: "She put it away. The photo was theirs. The four people on the list knew, and they were the four people whose knowing she'd chosen, and the rest of this house could guess, and would, and could keep guessing." },
            { s: 'haechan', f: 'neutral', t: "...Good. Means it's still ours." },
            { n: "He said it without looking at her, to the hallway at large, and his little finger brushed the side of her hand once on the way past, nobody in the room could have seen it, and she felt it all the way up her arm." }
          ] }
        ] },
        { n: "Mark was in the kitchen doorway. She saw him see her, and see Haechan, and see the space between them that was exactly the width of two people who'd decided where to stand. He didn't come over. He stood there with a cup of water in his hand, actual water, and waited to be allowed." },
        { n: "Haechan saw him too. He saw him before she did, actually; she watched it happen, his jaw doing the thing, the half second where he decided something, and then decided against it." },
        { s: 'haechan', f: 'neutral', t: "I'm getting you a drink that isn't Jeno's. Take your time." },
        { n: "He went. He didn't look back to see whether she went to Mark. That was the whole thing. He let her go do it and didn't watch her do it, and she understood that it cost him exactly as much as it looked like it cost him, which was a lot." }
      ] },
      { ifEpiRoute: 'cover', then: [
        { n: "Hanni had her by one arm and Hyein had her by the other, which was how they'd walked in, which was how they'd been walking everywhere for a week, like a set of parentheses with Solar as the thing that needed setting apart." },
        { n: "Jaemin did it in the middle of the living room, loudly, because Jaemin did everything in the middle of the living room loudly. He had a cup in each hand and an audience of eleven and the specific grin of a man who'd started a rumour by accident and been delighted by it every day since." },
        { s: 'jaemin', f: 'happy', t: "Okay but for real. Where did you GO. I have heard four different answers. One of them involved a yacht." },
        { s: 'hyein', f: 'serious', t: "There was no yacht. There was a cabin. A modest cabin. Someone's uncle's. Upstate. There was a dirt road and nobody remembers the address because of the dirt road." },
        { s: 'hanni', f: 'neutral', t: "We said less is harder to check, Hyein." },
        { s: 'hyein', f: 'flustered', t: "I SAID less. That was less. You should hear what I didn't say." },
        { n: "Everybody laughed. That was the trick of it, Solar was learning: you didn't hold a cover by being serious about it, you held it by being the funniest people in the room about it, so that anyone who pushed looked like they couldn't take a joke. On the stairs, three steps up, Danielle didn't laugh. She watched the laugh go round the room like a bill being passed hand to hand and waited to see who'd be left holding it." },
        { s: 'jaemin', f: 'neutral', t: "Solar. Uncle's cabin. Confirm or deny." },
        { choose: [
          { t: "(Lie.) Someone's uncle's. I never met the uncle. I'm told he exists.", then: [
            { glitch: { strain: 1 } },
            { n: "The room laughed. It was a good line. She'd built it out of nothing in a second and a half, her father's daughter, and the lights along the banister flickered once, all of them, in a ripple, and came back, and Jisung said *it's the fairy lights, they do that,* and nobody but Solar looked up." }
          ] },
          { t: "Ask Hanni. She's the Social Chair. I just went where I was told.", then: [
            { s: 'hanni', f: 'happy', t: "It's true. She was very obedient. It was unsettling." },
            { n: "Another laugh. Hanni held it like a tray of drinks, steady, not a drop spilled, and passed it on. On the stairs, Danielle wrote nothing down, because there was nothing to write, and Solar watched her not write it." }
          ] }
        ] },
        { n: "Mark was in the kitchen doorway with a cup of water. Actual water. He was looking at her the way he'd looked at her all week, from a distance he'd picked very carefully, and Hanni saw him and squeezed her arm and let go of it." },
        { s: 'hanni', f: 'neutral', t: "You don't have to. If you want to, we're right here." }
      ] },
      { ifEpiRoute: 'minji', then: [
        { n: "Minji was working. Jaemin had hired her for the house account, paid in a pizza and a promise to credit her, and she was moving through the party with the camera low, against her stomach, and asking. Every person, every time, before she raised it: *can I get you in this?* Half of them said yes. The other half said *wait, wait, my hair,* and then yes. Two said no and she lowered it and moved on and never once looked annoyed about it." },
        { n: "She'd asked Solar on the walk over, and Solar had said yes, and Minji had asked again at the door anyway, because that was Minji." },
        { s: 'jaemin', f: 'happy', t: "The emergency vacationer and the auteur! Kim Minji, if my house account doesn't hit ten thousand likes off this I'm suing." },
        { s: 'minji', f: 'neutral', t: "You paid me in pizza. You can sue me for a pizza." },
        { n: "On the stairs, three steps up, Danielle watched Minji film. Solar watched Danielle watch. It was the first time she'd seen Danielle look at a camera that wasn't hers, and she looked at it the way you'd look at somebody else's dog doing a trick yours never learned." },
        { n: "Mark was in the kitchen doorway with a cup of water. Minji saw him before Solar did, and lowered the camera all the way, and said nothing, and gave Solar the room to decide." }
      ] },
      { n: "She went over. She'd known she would since the door." },
      { s: 'mark', f: 'neutral', t: "Sol." },
      { n: "It still did that. Every time. *Sol* in his mouth had been the warmest thing on this campus once, the first name anyone had used for her in Syracuse that wasn't her brother's sister, and now it went into her like a splinter does, small and specific, and stayed. He knew. She could see him know it. He'd said it anyway, because he didn't have another name for her, and they both stood there in the kitchen doorway with it." },
      { ifEpiRoute: 'haechan', then: [
        { ifFlag: 'epi-r-public-post', then: [
          { s: 'mark', f: 'neutral', t: "Saw your post." },
          { s: 'solar', t: "Everyone did." },
          { s: 'mark', f: 'sad', t: "...It's a good picture, Sol. You look like you." },
          { n: "That was the worst thing he could have said, because he meant it, and it was true, and it was the kind thing, and it still hurt to hear it from him. He'd never once in his life been able to be kind to her without it costing her something. She didn't think he was trying to, now. That was almost worse." }
        ], else: [
          { s: 'mark', f: 'neutral', t: "You look good. Happy. I'm not, that's not a thing. I'm just saying it because it's true." },
          { n: "That was the worst thing he could have said, because he meant it, and he was right, and it was kind, and it still hurt to hear it from him." }
        ] }
      ], else: [
        { s: 'mark', f: 'neutral', t: "You look good. Rested. Regionals looked good on you." },
        { n: "He meant it. That was always the trouble with Mark: he usually meant it, and he usually wanted something, and he'd never in his life been able to tell her which was which, or maybe never been able to tell himself." }
      ] },
      { ifYear: { noFlag: 'arrived-mark' }, then: [
        { s: 'mark', f: 'sad', t: "I kept out of your way over there. I'm trying to do it here, too. I'm bad at it." }
      ], else: [
        { s: 'mark', f: 'sad', t: "Over there was easier. You know? Nobody over there had heard of me." }
      ] },
      { s: 'mark', f: 'neutral', t: "Anyway. I just wanted to say hi. That's it. I'm going to go stand somewhere else now." },
      { n: "He didn't ask for anything. She waited for it, the ask, the hook in the bottom of the kindness, and it didn't come, and he lifted his cup of water an inch, like a toast to nobody, and turned to go." },
      { n: "And then the party stopped." },
      { glitch: { stage: 2 } },
      { glitch: 'epi-r-g-freeze' },
      { glitch: 'tint' },
      { n: "All of it. At once. Mark half turned in the doorway with his cup lifted an inch. Jeno's phone up, mid-circle, the punch bowl's surface caught in a ripple that didn't finish rippling. Jisung reaching for the speaker. Renjun's cup, tipped, a single thread of something pink hanging out of the lip of it in the air, not falling. A girl on the couch with her head thrown back laughing and no sound coming out. Out the front window, the snow hung in the streetlight, every flake stopped where it was, a whole sky of it pinned in place like a photograph of snow." },
      { n: "The bass was gone. Her heart was the only thing in the house making a sound, and it was making a lot of it." },
      { n: "She moved. Her hand came up in front of her face because she needed to see something move and it was the only thing she could make move. It moved. Nothing else did. On the stairs, Danielle had her cup at her lip, eyes on Solar, perfectly still, and that was the most frightening thing in the room, because she looked exactly the same frozen as she did awake." },
      { n: "One second. Not even. Then the bass came back mid-beat and the pink thread fell into Renjun's cup and the snow fell and the girl on the couch finished her laugh, and Mark finished turning and went, and nobody had noticed a thing." },
      { ifEpiRoute: 'haechan', then: [
        { n: "Except him." },
        { n: "He was in the kitchen with two cans in his hands, one of them pink, and he was standing absolutely still in a room where everyone else had just started moving again, staring at the window. At the snow. He turned his head slowly and found her across the house, through the doorway, past Mark's back, and she watched him decide. She watched the whole thing happen on his face: the knowing, and then the putting it somewhere, and then the door closing on it." },
        { n: "He came back across the room and handed her the pink can, already open, and looked at the side of her face instead of at her." },
        { s: 'haechan', f: 'neutral', t: "...Speaker cut out. Jisung's thing." },
        { n: "It was the wrong small thing. They both knew it was the wrong small thing. She took the can and didn't correct him, and he stood next to her for the rest of the night closer than the terms technically required, and didn't say why, and didn't have to." }
      ] },
      { ifEpiRoute: 'cover', then: [
        { n: "Hanni's hand had found hers. She didn't know when. Hanni was laughing at something Jaemin said, easy, her Social Chair laugh, and under it her fingers were locked through Solar's so tight it hurt, and she didn't look down at them, and she didn't let go until they were outside in the snow, which was falling, which was falling the right way." },
        { s: 'hyein', f: 'serious', t: "...Did the lights just, or was that the punch?" },
        { s: 'hanni', f: 'neutral', t: "The punch. Definitely the punch. Walk." }
      ] },
      { ifEpiRoute: 'minji', then: [
        { n: "Minji was staring at the back of her camera." },
        { n: "Solar went to her, through the crowd, and Minji didn't look up, just turned the camera's little screen so Solar could see, and scrubbed back with her thumb. The living room. The party, mid-sentence. And then the party not moving, everyone, the snow outside not moving, the pink thread in the air, and in the middle of it all, small, in the kitchen doorway, one person turning her head. Solar. Moving. The timecode in the corner didn't advance. It sat on the same number for the whole of the second, and then it caught up, as if the camera had simply declined to count." },
        { s: 'minji', f: 'serious', t: "...I asked you before I filmed. I'm asking you now before I show anyone. I'm not showing anyone." },
        { s: 'minji', f: 'neutral', t: "But I'm keeping it. If that's okay. I want to keep it." },
        { n: "Solar said it was okay. Her voice came out almost normal. Minji nodded, once, and capped the lens, and didn't uncap it again for the rest of the night." }
      ] },
      { n: "Somewhere behind her, on the stairs, a phone made the small fake sound of a camera shutter. She didn't turn around. She didn't have to know what it had caught to know Danielle had been pointing it at her." }
    ] },

    // ---------------------------------------------------------------- 12/14 · Sunday
    { id: 'epi-r-sunday', date: '12/14', slot: 'after', consumes: true, title: 'sunday', place: 'Syracuse · Marshall Street · Café', time: 'Afternoon', scene: [
      { music: 'epi-r-home' },
      { n: "Sunday. The café on Marshall Street at one in the afternoon, the back table, the windows steamed to the height of a person's head so the street went past as a blur of coats, and the coffee exactly as burnt as he'd said it was in November, and nobody at the table able to taste it anymore, which was what a semester did to you." },
      { ifEpiRoute: 'haechan', then: [
        { n: "Six people at a table for four. Hanni and Hyein on the bench, Minji on the end with her laptop closed for once, Chenle with a pancake he was cutting into a perfect grid, and Haechan in the chair next to Solar, which he'd pulled from another table without asking anybody, and which nobody had said anything about, and which Hyein had looked at for a full three seconds before deciding not to." },
        { n: "He was eating her fries. Not asking, not hiding it, just reaching over every so often and taking one, the way you'd take one from your own plate, and the first time he did it she slapped his hand and the second time she didn't, and by the fourth Hanni was watching with an expression of deep, private, scientific delight." },
        { s: 'hyein', f: 'serious', t: "Okay. Haechan. I have questions. I have eleven questions. This is a safe space and I'm going to ask all of them." },
        { s: 'haechan', f: 'neutral', t: "You can have three." },
        { s: 'hyein', f: 'happy', t: "FIVE." },
        { s: 'haechan', f: 'neutral', t: "Two now. You argued." },
        { n: "Hyein used both of them on whether he'd let her make him something for the holiday party, and he said no twice, and somewhere in the second no it turned into a yes, and he looked as surprised about it as anyone. Chenle didn't look up from his pancake. He just said, to the grid, *she gets everyone eventually,* in the tone of a man reading a weather report." },
        { n: "It was close to a couple. Close enough that the waitress said *you two* when she brought the check, and neither of them corrected her, and Solar felt it land somewhere under her ribs and decided to let it stay there, just for the afternoon." }
      ] },
      { ifEpiRoute: 'cover', then: [
        { n: "Three of them at the back table, Hanni and Hyein on the bench and Solar across from them, which was how it had been since September, which was how it had been in another city for a whole year, and was how it was going to be, she'd decided, in any world that had a back table in it." },
        { s: 'hyein', f: 'happy', t: "Pop quiz. Whose cabin." },
        { s: 'solar', t: "Someone's uncle's." },
        { s: 'hanni', f: 'neutral', t: "Which road." },
        { s: 'solar', t: "Dirt. Nobody remembers. That's the whole point of the dirt." },
        { s: 'hyein', f: 'happy', t: "A plus. Honor roll. Hanni, she's ready for Thanksgiving next year." },
        { n: "They laughed until the waitress looked over. It was a terrible joke, about the worst thing that had ever happened to the three of them, and it was the funniest thing in the world, and Hanni paid for everything before anyone could stop her and said it was a Social Chair expense, which it absolutely was not." }
      ] },
      { ifEpiRoute: 'minji', then: [
        { n: "Minji had the laptop open, because she'd said she wouldn't, and her headphones on one ear, and she was cutting. Hanni and Hyein on the bench across, pretending not to watch, watching. Every so often Minji turned the screen and showed Solar four seconds of something, a hallway, a snowy quad, a lamp, the back of Solar's head at Regionals, and asked, every single time, *okay?* and Solar said okay every single time, and it never once got boring to be asked." },
        { s: 'minji', f: 'neutral', t: "This one's the end. I think. I don't know yet. You're walking away from the camera and you don't look back." },
        { s: 'hyein', f: 'sad', t: "That's so sad. Why is that the end. Make her look back." },
        { s: 'minji', f: 'happy', t: "She doesn't have to look back. That's why it's the end. She knows where she's going." },
        { n: "Solar looked at her. Minji was looking at the screen. She didn't look up, which meant she knew exactly what she'd said." }
      ] },
      { n: "Outside, the snow had started again, the fat slow kind that took its time, and it was falling the right way, down, all of it, every flake, and she watched it through the steamed glass for longer than she meant to, just to be sure." },
      { n: "Finals tomorrow. Statistics, then everything else. Somewhere under the week ahead there was a thing she could feel coming the way you feel weather in a knee, low and patient, and she put her hands around her burnt coffee and let it be Sunday a little longer. It was the last easy hour. She didn't know that yet. She'd find out." }
    ] }
  );

  (R.routines ||= []).push(

    // Week 1 ------------------------------------------------------------------------------------------------
    { id: 'epi-r-rt-class', slot: 'early', after: '12/2', until: '12/4', place: 'Syracuse · Lecture Hall', time: 'Morning', scene: [
      { n: "Media and Society, the big hall with the broken third row, two hundred laptops open and maybe forty of them on the slides. The professor had a cold and was lecturing about parasocial attention through it, which felt pointed, and kept stopping to blow his nose into a handkerchief he folded with real ceremony each time." },
      { n: "He was there. Two rows down and four seats over, in his usual seat, headphones round his neck, not taking notes. He didn't turn around. She didn't expect him to. Whatever was going to be said between them wasn't going to be said in a lecture hall, and they both knew it so precisely it was practically a seating chart." },
      { n: "Her phone lit on the desk. SUanon, a new post, text only:" },
      { n: "*not to be dramatic but why does half of alpha and half of sigma have the same tan line in december. exclusive retreat my ass. who do i have to know.*" },
      { n: "Forty-one likes. A reply under it: *its not a tan its windburn. cabin people.* Another: *i heard there was no signal and honestly thats the most exclusive thing ive ever heard.*" },
      { choose: [
        { t: "(Turn the phone face down.)", then: [
          { n: "She turned it over and took notes on parasocial attention like her life depended on it, which, she reflected, it sort of did." },
          { stat: { knowledge: 1 } }
        ] },
        { t: "(Screenshot it for the girls.)", then: [
          { n: "She screenshotted it and sent it to the chat. Hyein replied in under four seconds: *WINDBURN. i am using windburn.* Two rows down, without turning around, he huffed something that might have been a laugh at his own phone, and she decided not to wonder what at." }
        ] }
      ] }
    ] },

    { id: 'epi-r-rt-mom', slot: 'early', after: '12/3', until: '12/5', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
      { n: "Her mother texted at six-fifteen, which meant she'd been up since five, which meant she'd been sitting at the kitchen island in the penthouse with her reading glasses on and her phone held at arm's length, composing." },
      { phone: [
        { from: 'mom', t: 'Good morning sweetheart.' },
        { from: 'mom', t: 'I know you are busy with exams. I won\'t keep you.' },
        { from: 'mom', t: 'The table was set for four on Thursday. Rosa did the flowers. Your father didn\'t say anything about it. You know how he is.' },
        { from: 'mom', t: 'I kept your place card. It\'s on your desk at home.' },
        { from: 'mom', t: 'Eat something today. Love you.' }
      ], contact: 'Mom' },
      { n: "No mention of her father's office, or Ms. Han, or the school. Her mother had never once in her life put the hard part in writing. She left it in the white space between the messages, where you had to stand still to see it." },
      { n: "She read it twice. The place card. Of course her mother had kept the place card, cream stock, her name in the calligrapher's hand, sitting on a desk in an empty room in Manhattan beside a choir folder nobody had moved in three years." },
      { choose: [
        { t: "(Reply.) i'm sorry mom. i'll be home soon. love you", then: [
          { phone: [{ from: 'solar', t: 'i\'m sorry mom. i\'ll be home soon. love you' }, { from: 'mom', t: 'I know. I know you are. ♡' }], contact: 'Mom' },
          { n: "Her mother had never used a heart before in her life. She'd had to go into a menu to find it. Solar put the phone down and sat on the edge of the bed for a minute and didn't cry, which took most of the minute." }
        ] },
        { t: "(Heart it. You don't have the words yet.)", then: [
          { n: "She pressed on the message until the little row of reactions came up and gave it a heart, and it was the coward's answer and she knew it, and her mother would see it and know it too, and would take it anyway, the way she'd been taking whatever Solar could give for eighteen years." }
        ] }
      ] }
    ] },

    { id: 'epi-r-rt-doyoung', slot: 'early', after: '12/3', until: '12/5', place: 'Syracuse · eSports Lab', time: 'Morning', scene: [
      { n: "She stopped by the lab at eight to grab the headset she'd left, and Doyoung was already there, alone, in yesterday's hoodie, standing in front of the whiteboard with a marker in his hand and the cap in his teeth." },
      { n: "The number on the board said 3. Under it, in smaller writing, *practices left.* Under that, smaller still, *2 missed. 2. (remote.)* and an arrow pointing to nobody in particular, which pointed at her and Minji with a precision only a clipboard could achieve." },
      { s: 'doyoung', t: "Lee." },
      { s: 'doyoung', t: "Six years I've been coaching. You know how many players have gone off the grid during Regionals week and come back sharper." },
      { s: 'doyoung', t: "None. Zero. Prove me wrong on Saturday and I'll erase this." },
      { choose: [
        { t: "I'll prove you wrong.", then: [
          { n: "He took the cap out of his teeth and wrote, very small, in the corner of the board, *Lee: says she'll prove me wrong. 12/3.* Then he capped the marker and went back to his laptop without another word." },
          { stat: { proficiency: 1 } }
        ] },
        { t: "I'm sorry. Really.", then: [
          { s: 'doyoung', t: "I know you are. Sorry doesn't heal Kiriko. Get in here at four." },
          { n: "He didn't erase it. He did, she noticed on her way out, draw a very small sun next to her name, which he denied for the rest of the year." }
        ] }
      ] }
    ] },

    // Week 2 ------------------------------------------------------------------------------------------------
    { id: 'epi-r-rt-recovery', slot: 'early', after: '12/8', until: '12/9', place: 'Syracuse · The Quad', time: 'Morning', scene: [
      { n: "Monday. The quad salted into gray paths, the bell tower white with frost, and her whole body aching in the specific way it only ever ached after a tournament: neck, wrists, the backs of her eyes, a hangover from adrenaline instead of anything you could drink." },
      { phone: [
        { from: 'doyoung', t: 'No practice today.' },
        { from: 'doyoung', t: 'Go to class. Eat food. Sleep. Do not open the game.' },
        { from: 'doyoung', t: 'That is an order from your coach.' },
        { from: 'olivia', t: 'HE SAID FOOD' },
        { from: 'chenle', t: 'he said food last time and then ran vod review at 11pm' },
        { from: 'doyoung', t: 'That was different. We were losing.' }
      ], contact: 'the team' },
      { n: "Haerin reacted to Doyoung's last message with a single thumbs up, which from Haerin was a eulogy, and the chat went quiet, and it stayed quiet, and that was so strange that Solar checked twice that her phone was still on." },
      { n: "She went to Statistics and understood about a third of it. She went to lunch and ate an entire burrito and understood all of that. Somewhere around two she sat down on a bench by the bell tower with her coat zipped to her chin and nothing to be anywhere for, and the feeling was so unfamiliar that it took her a minute to recognize it as rest." },
      { choose: [
        { t: "(Stay on the bench a while.)", then: [
          { n: "She stayed till her toes went numb. Students went by in twos and threes, someone's music leaking out of their headphones, a dog in a coat. Nobody looked at her. It was the best hour she'd had in a month." }
        ] },
        { t: "(Go home and sleep, like you were told.)", then: [
          { n: "She went home and slept for four hours in her clothes on top of the covers, and woke up in the dark not knowing what city she was in, which happened less than it used to, and more than it should." }
        ] }
      ] }
    ] },

    { id: 'epi-r-rt-olivia', slot: 'early', after: '12/8', until: '12/10', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
      { n: "Her phone had buzzed itself halfway across the nightstand overnight, a slow migration toward the edge, and she caught it a second before it went over." },
      { n: "The team chat had been going since Sunday night. It hadn't stopped. Somewhere around three in the morning it had stopped being a team chat and become, mostly, Olivia." },
      { phone: [
        { from: 'olivia', t: 'WE ADVANCE. I REPEAT. WE ADVANCE' },
        { from: 'olivia', t: 'i have watched the clip 41 times' },
        { from: 'olivia', t: 'the KIRIKO SUZU. the one in the last map. CHENLE YOU SCREAMED' },
        { from: 'chenle', t: 'i did not scream. i called it at an elevated volume' },
        { from: 'haerin', t: 'he screamed' },
        { from: 'minji', t: 'he screamed' },
        { from: 'olivia', t: 'HAERIN SPOKE. HAERIN SPOKE IN THE CHAT. HISTORIC WEEK' },
        { from: 'haerin', t: 'im leaving' },
        { from: 'olivia', t: 'sol where are u. come be insane with us' }
      ], contact: 'the team' },
      { choose: [
        { t: "(Reply.) i'm here. it was 42 times, i watched it once too", then: [
          { phone: [{ from: 'solar', t: 'i\'m here. it was 42 times, i watched it once too' }, { from: 'olivia', t: 'SHE ADMITS IT' }, { from: 'olivia', t: 'SHE IS ONE OF US' }, { from: 'doyoung', t: 'Go to class.' }], contact: 'the team' },
          { n: "She lay in bed grinning at the ceiling like an idiot, alone, at seven in the morning, which was nobody's business." },
          { stat: { charm: 1 } }
        ] },
        { t: "(Mute it for an hour. Smile anyway.)", then: [
          { n: "She muted it for an hour and the phone buzzed against the mattress anyway, because Olivia had found her DMs. *u muted us. i can FEEL it.* She unmuted it. There was no point. There was never any point with Olivia." }
        ] }
      ] }
    ] },

    { id: 'epi-r-rt-jaehyun-film', slot: 'after', after: '12/8', until: '12/11', place: 'Syracuse · Football Complex', time: 'After Class', scene: [
      { n: "She waited for him at the player exit, the way she'd learned to, outside the gate, in the cold, because you didn't wander into a varsity building like you owned it even when your last name was on the donor wall. Film day. The season was over and they still had film, because the season was never really over, it just changed what it hurt." },
      { n: "He came out with a bag over one shoulder and his hood up and his good-player face on, the one he wore for the reporters and their father and anyone who might want something, and it softened about a quarter of an inch when he saw her, which for Jaehyun was a hug." },
      { s: 'jaehyun', f: 'neutral', t: "You didn't have to wait out here. It's eleven degrees." },
      { s: 'solar', t: "You'd have walked right past me." },
      { s: 'jaehyun', f: 'neutral', t: "I'd have seen you." },
      { n: "He pulled his sleeve down when he reached for the door handle behind her. Fast, smooth, the way a quarterback moves a ball from one hand to the other so the defense never sees which. But she saw it anyway: a bruise on the inside of his wrist, purple going yellow, the size and shape of somebody else's helmet." },
      { choose: [
        { t: "Your wrist.", then: [
          { s: 'jaehyun', f: 'neutral', t: "It's from the game. It's nothing. Treatment's looked at it." },
          { s: 'jaehyun', f: 'serious', t: "Don't tell Mom. She'll send a doctor. An actual doctor, on a plane." },
          { n: "She didn't tell Mom. It was the first secret he'd ever asked her to keep for him instead of from her, and she found she liked the weight of it." }
        ] },
        { t: "(Say nothing. Walk with him.)", then: [
          { n: "She said nothing. She fell into step beside him on the salted path, and after a minute he took his hand out of his pocket and let the sleeve ride up a little, and didn't pull it down again, which was the closest he would ever come to saying *thank you for not asking.*" }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Banquet's Friday. Suit. Plaque. Dad's sending someone to take a picture. Did you eat." },
      { bond: { jaehyun: 1 } }
    ] },

    { id: 'epi-r-rt-yunjin', slot: 'early', after: '12/12', until: '12/14', place: 'Syracuse · The Quad', time: 'Morning', scene: [
      { n: "The first real snow of the week had come down overnight and nobody had walked on the quad yet, a whole white field of it with the bell tower standing over it like it was keeping count, and Solar was halfway along the salted path with Hanni beside her, both of them with their hands round coffees, when she looked up." },
      { n: "Across the quad, on the far path, a girl in a yellow puffer jacket." },
      { n: "Bright yellow, the only color in the whole white morning. Long dark hair under a knit hat. She'd stopped walking. She was standing on the far path with her hands in her pockets, looking across the whole width of the snow, straight at Solar, and her face was doing something Solar had seen before on exactly one face, in a different city, in a different life: the look of somebody who'd known you forever, and was so glad to see you, and was a little sad about it, all at once." },
      { glitch: 'epi-r-g-yunjin' },
      { n: "Solar's whole body went toward her. Not her feet. Everything else. Her chest, her throat, the name coming up in her like a bubble in water." },
      { n: "And then the far path was empty. Snow, and the path, and a lamppost, and nobody. No footprints going on. No footprints at all, where she'd been standing, just the clean unbroken white." },
      { s: 'hanni', f: 'neutral', t: "...Sol? What is it?" },
      { choose: [
        { t: "Did you see her? The girl. Yellow jacket.", then: [
          { s: 'hanni', f: 'serious', t: "There's nobody there, Sol." },
          { n: "Hanni looked at the empty path, and then at Solar, and then took Solar's coffee out of her hand and held it for her, because her hand had started to shake, and didn't ask anything else, and walked her to class a little closer than usual." }
        ] },
        { t: "(Nothing. Keep walking.)", then: [
          { n: "She said it was nothing, the light off the snow. Hanni accepted it the way Hanni accepted most of what Solar said, which was completely and not at all, and walked a little closer for the rest of the way." }
        ] }
      ] },
      { n: "She'd had a friend once who looked at her exactly like that, in a dorm by a bay, in a different life, every single morning over the breakfast table. She didn't let herself finish the thought. She drank her coffee. It had gone cold." }
    ] },

    { id: 'epi-r-rt-jeno', slot: 'early', after: '12/13', until: '12/14', events: ['epi-r-sigma'], place: 'Syracuse · Alpha Phi House · Kitchen', time: 'Morning', scene: [
      { n: "Saturday morning in the Alpha kitchen, the radiator going, Hyein asleep on the island with her cheek on a sketchbook, and Jeno's story from last night still up on everyone's phone, because Jeno posted the way some people breathed." },
      { n: "*@jen0l33:* the punch bowl, close up, captioned *its for MORALE.* Then Jisung, still trying to get the speaker to connect, captioned *day 3.* Then a blurry wide shot of the living room, everyone mid-something, captioned *last one before finals we will never forget this.* Then the punch bowl again, empty, at what the timestamp said was 1:40 a.m., captioned *morale achieved.*" },
      { n: "The house living on. Somebody had already posted the cleanup, too, Renjun's, a single photo of the Sigma kitchen at nine a.m. with a mop leaning against the island like it had given up, no caption, which was Renjun's whole personality in one frame." },
      { n: "Under the third one, in the comments, someone had written *why does it look like everyone's frozen in this lmao,* and Jeno had replied *bad wifi king,* and that was that." },
      { n: "She looked at the wide shot longer than she meant to. Everyone mid-something. The snow in the window, white streaks, falling." },
      { choose: [
        { t: "(Zoom in on the window.)", then: [
          { n: "She zoomed in on the window. The snow was just snow, motion-blurred, falling. She zoomed out. She put the phone face down on the island next to Hyein's sleeping head and made coffee and didn't pick it up again till the coffee was done." }
        ] },
        { t: "(Swipe past. It's just Jeno.)", then: [
          { n: "She swiped past. It was just Jeno. Jeno's next story was a video of Jaemin asleep on the stairs with a traffic cone, captioned *the house lives on,* and she laughed out loud in the empty kitchen, and Hyein woke up and said *what* and went straight back to sleep." }
        ] }
      ] }
    ] }
  );
})();
