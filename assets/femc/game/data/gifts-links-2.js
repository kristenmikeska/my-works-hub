/* Gift preferences and reactions (2026-11-02), writer 2: haechan, jungwon, jihoon, minji, hanni, hyein, mark. Format: data/gifts.js header. */
(() => {
  const L = ((window.FEMC_GAME_GIFTS ||= {}).links ||= {});

  L.haechan = {
    loved: ['headphones', 'citypop', 'grapesoda', 'huntgame'],
    liked: ['consomme', 'yakisobapan', 'mixcd', 'earcuff', 'tokencup', 'chocosticks'],
    no: ['romancemanga', 'teddy', 'sweatbands'],
    say: {
      headphones: [
        { n: 'He turned the box over once, read the back, and went very still in the way he did when something was actually good.' },
        { s: 'haechan', f: 'surprised', t: 'Closed-back.' },
        { s: 'haechan', f: 'neutral', t: 'These don’t lie to you. Everything sounds worse in them. That’s the point.' },
        { s: 'haechan', f: 'happy', t: '...You didn’t have to do that. I’m keeping them. Obviously.' }
      ],
      citypop: [
        { s: 'haechan', f: 'neutral', t: 'Where’d you find this.' },
        { n: 'He tipped the sleeve toward the light and found the pale ring worn into track three before she could point it out.' },
        { s: 'haechan', f: 'happy', t: 'Somebody played this one to death. Good. That means it’s the right one.' },
        { s: 'haechan', f: 'neutral', t: 'I’m going to steal that bassline. Don’t tell anyone.' }
      ],
      grapesoda: [
        { s: 'haechan', f: 'neutral', t: 'Six.' },
        { s: 'haechan', f: 'happy', t: 'This is the worst drink in the world. It tastes like a crayon. I love it.' },
        { n: 'He cracked one open right there, and held the second out to her without looking, like that had always been the arrangement.' }
      ],
      huntgame: [
        { s: 'haechan', f: 'surprised', t: '...The one everyone’s yelling about at lunch.' },
        { s: 'haechan', f: 'neutral', t: 'There’s a bow in this. A long one. I’m going to sit on a rock at the back and be insufferable.' },
        { s: 'haechan', f: 'happy', t: 'You’re playing with me. That’s the condition. I’m not hunting alone.' }
      ],
      liked: [
        [ { s: 'haechan', f: 'neutral', t: '{gift}. Huh.' }, { s: 'haechan', f: 'happy', t: 'Okay. Yeah. Thanks, princess.' } ],
        [ { n: 'He looked at it, then at her, then put it somewhere safe instead of somewhere convenient.' }, { s: 'haechan', f: 'neutral', t: 'Mm. Good pick.' } ],
        [ { s: 'haechan', f: 'neutral', t: 'You keep doing this. Buying me things.' }, { s: 'haechan', f: 'happy', t: 'Don’t stop. I’m just noting it.' } ]
      ],
      meh: [
        [ { s: 'haechan', f: 'neutral', t: 'Thanks. I’ll find a place for it.' } ],
        [ { s: 'haechan', f: 'neutral', t: 'Mm. Okay.' }, { n: 'He turned it over in his hands once, politely, the way you hold something you don’t know what to do with yet.' } ]
      ],
      no: [
        [ { s: 'haechan', f: 'neutral', t: '...Yeah. Okay.' }, { s: 'haechan', f: 'serious', t: 'It’s not you. It’s very much me. I’ll give it to Junpei. He’ll be thrilled.' } ],
        [ { n: 'He looked at {gift} for a long second, like it had asked him a question he didn’t have an answer for.' }, { s: 'haechan', f: 'neutral', t: 'Thanks, agasshi. Truly. I don’t know what I’d do with it.' } ]
      ],
      teddy: [
        { s: 'haechan', f: 'surprised', t: 'Get well.' },
        { s: 'haechan', f: 'neutral', t: 'I’m fine. I promise you I’m fine. The bear disagrees, apparently.' },
        { n: 'He set it on the shelf facing the wall. Then, after a second, turned it back around.' }
      ]
    },
    special: {
      headphones: [
        { n: 'Before she could say anything he had them out of the box and over her ears, his hands careful at her temples.' },
        { n: 'For a second there was nothing. Then a room: a hum under the floor, a fridge somewhere, a slow tick like a radiator settling. Somebody breathing, very quietly, on the other side of it.' },
        { s: 'haechan', f: 'neutral', t: 'That’s here. I recorded it the other night. Nobody else would sit through it.' },
        { s: 'solar', t: 'It’s nice.' },
        { s: 'haechan', f: 'happy', t: 'It’s a room. But yeah. It is.' },
        { n: 'He took them back slowly, like he wasn’t in any hurry for it to be over.' }
      ],
      citypop: [
        { later: { delay: 0, msgs: [
          { from: 'haechan', t: 'track three' },
          { from: 'haechan', t: 'there’s a skip at 2:14. somebody stood up too fast in like 1986' },
          { from: 'solar', t: 'is that bad' },
          { from: 'haechan', t: 'no. it’s the best part. i looped it' },
          { from: 'haechan', t: 'go to sleep' }
        ] } }
      ],
      grapesoda: [
        { n: 'When the can was empty he worked the tab back and forth until it came off clean, and dropped it into her palm.' },
        { s: 'haechan', f: 'neutral', t: 'Receipt.' },
        { gift: { from: 'Haechan', keepsake: 'A grape soda pull tab', note: 'From the first can of six. He called it a receipt and wouldn’t say for what.' } }
      ]
    }
  };

  L.jungwon = {
    loved: ['gostones', 'fountainpen', 'darjeeling', 'notebook'],
    liked: ['pencil', 'shortbread', 'poetry', 'fruitbasket', 'omamori', 'dogjerky'],
    no: ['tokencup', 'huntgame', 'grapesoda'],
    say: {
      gostones: [
        { n: 'He lifted the lid of one bowl and the stones inside shifted against each other with a sound like rain starting.' },
        { s: 'jungwon', f: 'surprised', t: 'These are clamshell.' },
        { s: 'jungwon', f: 'flustered', t: 'You can’t— these are far too much. I want that minuted. I’m going to accept them anyway. I want that minuted as well.' },
        { s: 'jungwon', f: 'happy', t: 'Thank you. Truly. I’ve been playing with bottle caps.' }
      ],
      fountainpen: [
        { s: 'jungwon', f: 'neutral', t: 'May I?' },
        { n: 'He uncapped it, wrote his own name on the back of his hand in three neat strokes, and looked at it for a long moment.' },
        { s: 'jungwon', f: 'happy', t: 'It drags a little. On the upstrokes. That’s exactly right. Good pens have opinions.' },
        { s: 'jungwon', f: 'flustered', t: 'I’m going to use this for everything now. Everything. You’ve made a monster.' }
      ],
      darjeeling: [
        { s: 'jungwon', f: 'surprised', t: 'First flush.' },
        { s: 'jungwon', f: 'neutral', t: 'This is far too good for my kettle. My kettle is a disgrace. It shrieks like it’s being prosecuted.' },
        { s: 'jungwon', f: 'happy', t: 'I’ll make it properly. I’ll find out how and do it properly. You’ll have the first cup. That’s non-negotiable.' }
      ],
      notebook: [
        { n: 'He ran a thumb along the edge of the pages, then opened it to the very middle, as if checking the binding would hold.' },
        { s: 'jungwon', f: 'neutral', t: 'It’s blank.' },
        { s: 'jungwon', f: 'happy', t: 'I mean that as the highest compliment. Everything else I write in belongs to somebody. This one doesn’t yet.' }
      ],
      liked: [
        [ { s: 'jungwon', f: 'neutral', t: '{gift}. That’s very thoughtful.' }, { s: 'jungwon', f: 'happy', t: 'Thank you. I’ll put it to good use. I always do.' } ],
        [ { s: 'jungwon', f: 'flustered', t: 'You didn’t have to. I’ll note that you did.' } ],
        [ { s: 'jungwon', f: 'happy', t: 'Oh. That’s lovely.' }, { s: 'jungwon', f: 'neutral', t: 'I have nothing for you. That’s an oversight. I’ll correct it.' } ]
      ],
      meh: [
        [ { s: 'jungwon', f: 'neutral', t: 'Thank you. That’s kind of you.' } ],
        [ { s: 'jungwon', f: 'neutral', t: 'How thoughtful.' }, { n: 'He said it the way he said everything, very correctly, and set it squarely on the corner of the table.' } ]
      ],
      no: [
        [ { s: 'jungwon', f: 'neutral', t: 'Ah.' }, { s: 'jungwon', f: 'flustered', t: 'Thank you. I want to be honest, and I also want to be polite, and I’m going to choose polite. Thank you.' } ],
        [ { n: 'He held {gift} slightly away from himself, like a form he hadn’t been told how to file.' }, { s: 'jungwon', f: 'neutral', t: 'I’m sure someone will love this. I’ll make sure it finds them.' } ]
      ],
      grapesoda: [
        { s: 'jungwon', f: 'neutral', t: 'It’s very purple.' },
        { s: 'jungwon', f: 'flustered', t: 'I’m sorry. I’ve never understood drinks that taste of a colour. I’ll find it a good home.' }
      ]
    },
    special: {
      gostones: [
        { n: 'He cleared the table with one sweep of his sleeve, set the two bowls down facing each other, and pushed the white one toward her.' },
        { s: 'jungwon', f: 'neutral', t: 'One stone. Anywhere. I just want to hear it.' },
        { n: 'She put it down. *Click.* He closed his eyes for a second, like a man listening to a piece of music he’d been told about for years.' },
        { s: 'jungwon', f: 'happy', t: 'Yes. That.' },
        { s: 'jungwon', f: 'neutral', t: 'I’m going to answer it. Then you’re going to answer me. We have time. I’ve checked.' }
      ],
      fountainpen: [
        { n: 'He tore a page out of the back of his own notebook, wrote something on it with the new pen, blotted it on his sleeve, and folded it twice.' },
        { s: 'jungwon', f: 'flustered', t: 'The first thing it wrote. It should be yours. Don’t read it in front of me.' },
        { gift: { from: 'Jungwon', keepsake: 'The pen’s first page', note: 'Folded twice. In green ink, very neatly: *Received with thanks. — Y.J.* Underlined once, then once more.' } }
      ],
      darjeeling: [
        { later: { delay: 1, msgs: [
          { from: 'jungwon', t: 'i looked it up. ninety degrees, not a hundred. three minutes, not four.' },
          { from: 'jungwon', t: 'the kettle doesn’t have a ninety. i stood next to it and counted.' },
          { from: 'solar', t: 'how was it' },
          { from: 'jungwon', t: 'very good. i saved you the better half of the tin. it’s labelled.' },
          { from: 'jungwon', t: 'that isn’t pressure. it’s inventory.' }
        ] } }
      ]
    }
  };

  L.jihoon = {
    loved: ['shibaplush', 'tokencup', 'liptint', 'camera'],
    liked: ['sweatbands', 'chocosticks', 'pudding', 'handcream', 'earcuff', 'sprayroses'],
    no: ['gostones', 'poetry', 'castiron'],
    say: {
      shibaplush: [
        { s: 'jihoon', f: 'surprised', t: 'No.' },
        { s: 'jihoon', f: 'happy', t: 'NO. That’s HIM. That’s the one from the crane. The crane has been HOLDING HIM HOSTAGE.' },
        { s: 'jihoon', f: 'neutral', t: 'Did you win him or did you pay for him. Don’t tell me. I respect both. I respect one slightly less.' },
        { s: 'jihoon', f: 'happy-2', t: 'He’s so ugly. He’s perfect. He looks like he knows things.' }
      ],
      tokencup: [
        { n: 'He shook the cup next to his ear like a man checking a melon.' },
        { s: 'jihoon', f: 'happy', t: 'Two hundred. That’s generational wealth. That’s an afternoon.' },
        { s: 'jihoon', f: 'neutral', t: 'You understand you have funded a war. The crane game and I are at war. You’re the Allies now.' }
      ],
      liptint: [
        { s: 'jihoon', f: 'neutral', t: 'Cherry.' },
        { n: 'He tried it on right then, in the reflection off the nearest window, pressed his lips together and turned his chin both ways.' },
        { s: 'jihoon', f: 'happy-2', t: 'Iconic. Obviously. Everything’s iconic on a face like this. But you have a good eye. Finally. After years of training.' }
      ],
      camera: [
        { s: 'jihoon', f: 'surprised', t: 'A camera. For me.' },
        { s: 'jihoon', f: 'happy', t: 'Twenty-seven shots. Twenty-six of them will be me. One of them will be you, by accident, in the background, being jealous.' },
        { s: 'jihoon', f: 'neutral', t: 'This is for posterity. Somebody has to document the almighty Hoon. Historians will thank you.' }
      ],
      liked: [
        [ { s: 'jihoon', f: 'neutral', t: '{gift}? For me? Fan behavior.' }, { s: 'jihoon', f: 'happy', t: 'I’m accepting it. Graciously. Like royalty.' } ],
        [ { s: 'jihoon', f: 'happy', t: 'Oh, you’re being nice to me. Suspicious. Thank you. Suspicious.' } ],
        [ { s: 'jihoon', f: 'neutral', t: 'Okay. This is decent. This is a solid seven.' }, { n: 'He put it in his bag very carefully, which made it an eight.' } ]
      ],
      meh: [
        [ { s: 'jihoon', f: 'neutral', t: 'Huh. Okay. Thanks, Skank.' } ],
        [ { s: 'jihoon', f: 'neutral', t: 'This is a present. I can tell because it was wrapped.' }, { s: 'jihoon', f: 'happy', t: 'No, I’ll keep it. I keep everything you give me. Ask anyone. Don’t ask anyone.' } ]
      ],
      no: [
        [ { s: 'jihoon', f: 'neutral', t: '...Oh. You got me {gift}.' }, { s: 'jihoon', f: 'sad', t: 'No, it’s great. It’s fine. I’m going to put it somewhere I’ll never see it again. Lovingly.' } ],
        [ { s: 'jihoon', f: 'surprised', t: 'Is this a bit? Blink twice if this is a bit.' }, { s: 'jihoon', f: 'neutral', t: 'It’s the thought that counts. I’m counting the thought. The thought gets full marks.' } ]
      ],
      gostones: [
        { s: 'jihoon', f: 'neutral', t: 'This is a game for men who iron their ties.' },
        { s: 'jihoon', f: 'sad', t: 'It’s very nice. It’s very expensive. I’m going to use the bowls for snacks and you can’t stop me.' }
      ]
    },
    special: {
      shibaplush: [
        { n: 'He spent a full minute pretending to be too dignified to hug it. Then he hugged it.' },
        { n: 'When he finally let go, he dug in his pocket and held something out to her in a fist, not looking.' },
        { s: 'jihoon', f: 'neutral', t: 'Here. I won that. Fair and square. First try. Don’t check the receipt.' },
        { gift: { from: 'Jihoon', keepsake: 'A crane-game keychain', note: 'A tiny shiba, the twin of the big one, on a cheap silver ring. He claims first try. It was not first try.' } }
      ],
      tokencup: [
        { later: { delay: 0, msgs: [
          { from: 'jihoon', t: 'Status Report' },
          { from: 'jihoon', t: '200 tokens deployed. 3 prizes. 1 small child Inspired' },
          { from: 'solar', t: 'what did you win' },
          { from: 'jihoon', t: 'a whistle. a frog. and the Respect of the crane' },
          { from: 'jihoon', t: 'saving u the frog. u didn’t earn it but i’m Generous #philanthropy' }
        ] } }
      ]
    }
  };

  L.minji = {
    loved: ['sunflowers', 'snowglobe', 'huntgame', 'poetry'],
    liked: ['tokencup', 'chocosticks', 'grapesoda', 'consomme', 'succulent'],
    no: ['romancemanga', 'castiron'],
    say: {
      sunflowers: [
        { s: 'minji', f: 'surprised', t: 'Oh, they’re enormous.' },
        { n: 'She held them up to whatever light there was and tilted them, slowly, watching how it went through the petals.' },
        { s: 'minji', f: 'happy', t: 'They’re backlit. Look. They’re backlit all by themselves. That’s so generous of them.' },
        { s: 'minji', f: 'flustered', t: 'And you. Obviously. That’s generous of you too. Sorry. I looked at the flowers first.' }
      ],
      snowglobe: [
        { s: 'minji', f: 'happy', t: 'Sol. It snows on the sea.' },
        { n: 'She shook it and watched it settle, then shook it again before it could finish.' },
        { s: 'minji', f: 'neutral', t: 'It’s never the same twice. Look, it’s doing a different thing now. I love things that do that.' }
      ],
      huntgame: [
        { s: 'minji', f: 'surprised', t: 'Is this— this is the hunting one.' },
        { s: 'minji', f: 'happy', t: 'Okay. Okay okay okay. I’m taking the biggest sword. You’re on support. Don’t argue, you’re always on support.' },
        { s: 'minji', f: 'neutral', t: 'This means we’re playing tonight. That’s what this means. That’s the law.' }
      ],
      poetry: [
        { n: 'She opened it to the page with the pencilled star first, like she’d known it would be there.' },
        { s: 'minji', f: 'neutral', t: 'Someone loved this one.' },
        { s: 'minji', f: 'happy', t: 'They’re all about the water. They’re short. You can read one between trains.' },
        { s: 'minji', f: 'flustered', t: 'Thank you. That’s a very me present. I don’t know how you knew.' }
      ],
      liked: [
        [ { s: 'minji', f: 'happy', t: '{gift}! Sol. Thank you!' }, { s: 'minji', f: 'neutral', t: 'Can I keep the bag too? I keep all the bags. It’s a thing.' } ],
        [ { s: 'minji', f: 'happy', t: 'Oh, that’s cute. You’re cute. Both. Thank you.' } ],
        [ { s: 'minji', f: 'neutral', t: 'For me? Okay. Yeah.' }, { n: 'She was smiling at it the way she smiled at a shot that came out better than she expected.' } ]
      ],
      meh: [
        [ { s: 'minji', f: 'neutral', t: 'Oh! Thanks, Sol. That’s really sweet.' } ],
        [ { s: 'minji', f: 'neutral', t: 'Huh. I’ll find somewhere good for it.' }, { n: 'She turned it toward the window, checking, out of habit, what the light did to it.' } ]
      ],
      no: [
        [ { s: 'minji', f: 'flustered', t: 'Oh. Um. Thank you.' }, { s: 'minji', f: 'neutral', t: 'I’m going to be honest because you’d know anyway. It’s not really me. But you thought of me. That part is.' } ],
        [ { n: 'She looked at {gift} with the polite face she used for bad footage.' }, { s: 'minji', f: 'neutral', t: 'It’s very nice. I’m going to find it someone who’ll love it more than I can. Is that okay?' } ]
      ]
    },
    special: {
      snowglobe: [
        { s: 'minji', f: 'neutral', t: 'Can I film it? Just the globe. Not you. Unless— no. Just the globe.' },
        { s: 'solar', t: 'Go ahead.' },
        { n: 'She held her phone close to the glass and shook the globe once with her other hand. On the screen the snow came down slow and enormous, and the little monorail sat in it like it had all the time in the world.' },
        { s: 'minji', f: 'happy', t: 'Look. It’s a whole storm.' },
        { n: 'At the very edge of the frame, out of focus, there was a hand. Hers. She didn’t crop it.' },
        { s: 'minji', f: 'flustered', t: 'I’ll keep that in. Just this once.' }
      ],
      poetry: [
        { later: { delay: 1, msgs: [
          { from: 'minji', t: 'read the starred one on the train home. then read it again at the water' },
          { from: 'minji', t: 'filmed 40 seconds of the bay for it. no music. it doesn’t need music' },
          { from: 'solar', t: 'can i see' },
          { from: 'minji', t: 'yeah. ur the only one who gets to (:' },
          { from: 'minji', t: 'thank u for the book. i put the bus ticket in it as a bookmark so it knows it’s mine now :]' }
        ] } }
      ]
    }
  };

  L.hanni = {
    loved: ['bathsalts', 'handcream', 'teddy', 'fruitbasket'],
    liked: ['coffeebeans', 'daifuku', 'sprayroses', 'shortbread', 'succulent', 'pudding'],
    no: ['musclerub', 'tokencup'],
    say: {
      bathsalts: [
        { n: 'She unscrewed the lid, smelled it, and closed her eyes.' },
        { s: 'hanni', f: 'happy', t: 'Oh, Sol. Yuzu. That’s a whole winter in a jar.' },
        { s: 'hanni', f: 'neutral', t: 'I’m going to take the longest bath in the history of this building. Someone will knock. I won’t answer.' }
      ],
      handcream: [
        { s: 'hanni', f: 'surprised', t: 'Oh!' },
        { n: 'She squeezed a little out and worked it into her knuckles, slowly, like she was only now noticing they’d been dry all week.' },
        { s: 'hanni', f: 'happy', t: 'Rose. It smells like a grandma’s bathroom in the best way. You know me so well. It’s scary. It’s nice.' }
      ],
      teddy: [
        { s: 'hanni', f: 'surprised', t: 'Get well?' },
        { s: 'hanni', f: 'sad', t: 'I’m not even sick. Why am I— okay. Okay. Hold on.' },
        { n: 'Her face did the thing it always did, all of it at once, with nowhere to hide it.' },
        { s: 'hanni', f: 'happy', t: 'He’s holding a heart. Sol. He’s holding a *tiny heart.* I love him. I love him so much.' }
      ],
      fruitbasket: [
        { s: 'hanni', f: 'happy', t: 'A fruit basket! Oh my god, who gives a fruit basket. I love people who give fruit baskets.' },
        { s: 'hanni', f: 'neutral', t: 'I’m cutting this up. All of it. I’m putting it on plates and making everyone eat it. That’s my love language.' },
        { s: 'hanni', f: 'happy', t: 'You get the pear. The pear looks important.' }
      ],
      liked: [
        [ { s: 'hanni', f: 'happy', t: 'Sol!! {gift}!! For me?!' }, { s: 'hanni', f: 'neutral', t: 'You have to stop spending money on me. You can do it one more time. Then stop.' } ],
        [ { s: 'hanni', f: 'happy', t: 'Oh, that’s so cute. Thank you, thank you.' }, { n: 'She hugged her quickly, sideways, before she could argue.' } ],
        [ { s: 'hanni', f: 'happy', t: 'You thought of me! That’s the best part. The thing is also very good. But that’s the best part.' } ]
      ],
      meh: [
        [ { s: 'hanni', f: 'happy', t: 'Aw! Thanks, Sol. That’s really sweet of you.' } ],
        [ { s: 'hanni', f: 'neutral', t: 'Ooh. Okay. I’ll find a spot for it.' }, { n: 'She held it a little longer than she needed to, being kind to it on purpose.' } ]
      ],
      no: [
        [ { s: 'hanni', f: 'happy', t: 'Oh! Thank you!' }, { n: 'Her face, which had never once in its life managed to lie, went on to say something else entirely.' }, { s: 'hanni', f: 'flustered', t: 'Sorry. My face. You know my face. I love that you got me something.' } ],
        [ { s: 'hanni', f: 'flustered', t: 'Oh. Um. Sol.' }, { s: 'hanni', f: 'neutral', t: 'It’s really thoughtful. It’s just not very me. I’m keeping the thought, though. The thought is very me.' } ]
      ],
      musclerub: [
        { n: 'She opened the cap and her eyes started watering immediately.' },
        { s: 'hanni', f: 'flustered', t: 'Oh, wow. Oh, that’s strong. That’s a lot of menthol. Is this for me or for Akihiko? Should I give this to Akihiko?' }
      ]
    },
    special: {
      teddy: [
        { n: 'She set the bear on her knee and straightened his little heart so it faced out.' },
        { s: 'hanni', f: 'neutral', t: 'Can I tell you something embarrassing?' },
        { s: 'hanni', f: 'neutral', t: 'I always want someone to give me one of these. Not because I’m sick. Just because. And nobody does, because I’m always the one fine.' },
        { s: 'solar', t: 'Now somebody did.' },
        { s: 'hanni', f: 'sad', t: 'Don’t. I’ll cry. I’m crying.' },
        { s: 'hanni', f: 'happy', t: 'He’s sleeping on my pillow. He’s earned it.' }
      ],
      handcream: [
        { n: 'She took Solar’s hand without asking, squeezed a dot of the cream onto it, and rubbed it in with both thumbs, briskly, like a mom at a bus stop.' },
        { s: 'hanni', f: 'neutral', t: 'Yours are worse than mine. You do things all day too. You just don’t say.' },
        { n: 'Then she dug in her bag and pressed something small into Solar’s palm and closed her fingers over it.' },
        { s: 'hanni', f: 'happy', t: 'For your bag. So we match.' },
        { gift: { from: 'Hanni', keepsake: 'A little tin of lip balm', note: 'From the bottom of Hanni’s bag. Peach. She has a second one and said so twice.' } }
      ]
    }
  };

  L.hyein = {
    loved: ['sewingtin', 'ribbon', 'earcuff', 'gelpens'],
    liked: ['liptint', 'sprayroses', 'notebook', 'romancemanga', 'chocosticks', 'camera'],
    no: ['sweatbands', 'musclerub', 'castiron'],
    say: {
      sewingtin: [
        { s: 'hyein', f: 'surprised', t: 'Sol. SOL.' },
        { n: 'She opened the tin and went quiet, which almost never happened, running a fingertip over the spools.' },
        { s: 'hyein', f: 'happy', t: 'Silk thread. Real silk thread. And the thimbles are BRASS. Do you know what you’ve done? I’m going to be insufferable now.' },
        { s: 'hyein', f: 'neutral', t: 'I’m never sharing these. I’m sharing them with you. Only you. And only if you ask nicely.' }
      ],
      ribbon: [
        { s: 'hyein', f: 'happy', t: 'Oh, that colour.' },
        { n: 'She had it in a bow in her hair in about four seconds, looked at her reflection, pulled it out, and tied it again a little crooked on purpose.' },
        { s: 'hyein', f: 'neutral', t: 'Perfect looks like a shop. Crooked looks like a person. Thank you. I love it. I love it.' }
      ],
      earcuff: [
        { s: 'hyein', f: 'surprised', t: 'No piercing? Wait. Okay. Wait.' },
        { s: 'hyein', f: 'happy', t: 'It catches the light when I turn. Look. Look at me turning. I’m turning. Are you looking.' },
        { s: 'hyein', f: 'neutral', t: 'You have taste. I always said. I said it loudly, once, at a party. You weren’t there. It still counts.' }
      ],
      gelpens: [
        { s: 'hyein', f: 'happy', t: 'TWENTY-FOUR. With GLITTER.' },
        { s: 'hyein', f: 'neutral', t: 'What is Moody Lake. Why is it this colour. Who hurt the person who named this pen.' },
        { s: 'hyein', f: 'happy', t: 'I’m redrawing every sketch I’ve ever done. You’re all getting glitter hems. Nobody can stop me.' }
      ],
      liked: [
        [ { s: 'hyein', f: 'happy', t: 'Ooh. {gift}. Okay, you’re forgiven for everything.' }, { s: 'hyein', f: 'neutral', t: 'I don’t know what you did. You’re forgiven anyway.' } ],
        [ { s: 'hyein', f: 'happy', t: 'For me?? Sol. Thank you. Fr.' } ],
        [ { s: 'hyein', f: 'neutral', t: 'Okay. This is cute. I’m judging it and it’s passing.' }, { n: 'She held it up to her face like she was checking it against her colouring, and nodded once.' } ]
      ],
      meh: [
        [ { s: 'hyein', f: 'neutral', t: 'Oh! Thanks, Sol.' }, { s: 'hyein', f: 'neutral', t: 'I don’t know what I’ll do with it yet. I’ll think of something. I always think of something.' } ],
        [ { s: 'hyein', f: 'happy', t: 'Aw. That’s nice of you. Really.' } ]
      ],
      no: [
        [ { s: 'hyein', f: 'neutral', t: '...Okay. Okay. I’m going to be honest right now and not later, nicely, because that’s worse.' }, { s: 'hyein', f: 'flustered', t: 'It’s not for me. You’re still my favourite. Both things.' } ],
        [ { n: 'She looked at {gift}, then at Solar, with a face that was trying very hard.' }, { s: 'hyein', f: 'flustered', t: 'Thank you. I love you. I’m going to give this to Junpei.' } ]
      ],
      sweatbands: [
        { s: 'hyein', f: 'surprised', t: 'Terry cloth.' },
        { s: 'hyein', f: 'flustered', t: 'Sol. This is a crime. This is a fabric crime. I appreciate the thought. I’m calling the police on the fabric.' }
      ]
    },
    special: {
      sewingtin: [
        { n: 'She picked out a spool of deep red silk, held it up against Solar’s sleeve, and narrowed her eyes like she was doing sums.' },
        { s: 'hyein', f: 'neutral', t: 'Don’t move. I need to know something.' },
        { later: { delay: 1, msgs: [
          { from: 'hyein', t: 'sol. check ur door handle' },
          { from: 'hyein', t: 'made it last night with the new thread. first thing out of the tin' },
          { from: 'solar', t: 'hyein its beautiful' },
          { from: 'hyein', t: 'ik. wear it. dont lose it. if u lose it im making u another one and ill be mad the whole time' }
        ] } },
        { gift: { from: 'Hyein', keepsake: 'A red silk scrunchie', note: 'Left on her door handle, the first thing Hyein made with the new thread. Exactly the right size.' } }
      ],
      earcuff: [
        { n: 'Hyein dragged Solar to the nearest reflective surface and stood behind her so their faces were both in it.' },
        { s: 'hyein', f: 'neutral', t: 'Okay. Hold still. You’re wearing it for one second. For research.' },
        { n: 'She clipped the cuff onto Solar’s ear, tilted her chin a quarter inch, and stepped back.' },
        { s: 'hyein', f: 'surprised', t: '...Oh, no. It’s better on you.' },
        { s: 'hyein', f: 'happy', t: 'It’s still mine. But I’m lending it to you. Indefinitely. Whenever I’m not looking.' }
      ]
    }
  };

  L.mark = {
    loved: ['pocketwatch', 'mixcd', 'picktin', 'daifuku'],
    liked: ['citypop', 'headphones', 'yakisobapan', 'snowglobe', 'chocosticks', 'grapesoda'],
    no: ['handwraps', 'castiron'],
    say: {
      pocketwatch: [
        { s: 'mark', f: 'surprised', t: 'Sol. This is— is this real brass?' },
        { n: 'He held it up to his ear first, before anything else, and listened to it tick with his whole face.' },
        { s: 'mark', f: 'neutral', t: 'It’s slow. Like, a minute a day, maybe. That’s the best part. I’m going to time exactly how slow.' },
        { s: 'mark', f: 'flustered', t: 'Sorry. Thank you. Thank you first. Then the timing.' }
      ],
      mixcd: [
        { n: 'He read the handwritten track list top to bottom, then again, lips moving slightly.' },
        { s: 'mark', f: 'neutral', t: 'I don’t know half of these. That’s so good. Do you know how rare that is?' },
        { s: 'mark', f: 'flustered', t: 'I’m listening to it in order. No skipping. That’s the rule. That’s respect.' }
      ],
      picktin: [
        { s: 'mark', f: 'neutral', t: 'Oh, these are the good ones.' },
        { n: 'He tipped them out into his palm and sorted them by thickness without looking, the way other people shuffle cards.' },
        { s: 'mark', f: 'flustered', t: 'I’m going to lose every single one of these. I want you to know that going in. I’m going to love them while I have them.' }
      ],
      daifuku: [
        { s: 'mark', f: 'surprised', t: 'Wait, these sell out. How did you get these.' },
        { s: 'mark', f: 'neutral', t: 'Okay. Okay. One now. One later. Four for— no. One now.' },
        { n: 'He ate it in two bites and had to put a hand over his mouth, laughing, because the strawberry was cold and he hadn’t been ready for it.' }
      ],
      liked: [
        [ { s: 'mark', f: 'neutral', t: '{gift}? Sol, come on. You didn’t have to.' }, { s: 'mark', f: 'flustered', t: 'I’m glad you did. Is that bad? I’m really glad.' } ],
        [ { s: 'mark', f: 'neutral', t: 'Oh, nice. Nice nice nice. Thank you.' }, { n: 'He rubbed the back of his neck, grinning at it.' } ],
        [ { s: 'mark', f: 'neutral', t: 'This is so you. To get me this, I mean. It’s so you.' } ]
      ],
      meh: [
        [ { s: 'mark', f: 'neutral', t: 'Oh, hey! Thanks, Sol. That’s really nice.' } ],
        [ { s: 'mark', f: 'neutral', t: 'For me? Aw. I’ll put it somewhere good.' }, { n: 'He meant it. He also clearly didn’t know where that would be.' } ]
      ],
      no: [
        [ { s: 'mark', f: 'neutral', t: 'Oh! Wow. Okay.' }, { s: 'mark', f: 'flustered', t: 'I’m being so normal about this. It’s really thoughtful. I just— I genuinely don’t know what I’d do with it. Is that okay?' } ],
        [ { n: 'He looked at {gift} for a second too long, then laughed, kindly, at himself.' }, { s: 'mark', f: 'neutral', t: 'I’m going to be honest. Not my thing. But you thought of me, and that’s the thing.' } ]
      ],
      handwraps: [
        { s: 'mark', f: 'surprised', t: 'Hand wraps. For me. Sol, I play piano.' },
        { s: 'mark', f: 'flustered', t: 'No, I love that you think I could punch someone. That’s the nicest thing. I’m giving these to Akihiko, though. For both our sakes.' }
      ]
    },
    special: {
      pocketwatch: [
        { later: { delay: 1, msgs: [
          { from: 'mark', t: 'ok so i checked it against the station clock every hour today' },
          { from: 'mark', t: '52 seconds slow. per day. consistent!! it’s so consistent' },
          { from: 'solar', t: 'is that good' },
          { from: 'mark', t: 'it’s perfect lol. it’s not wrong it just has its own tempo' },
          { from: 'mark', t: 'thank u sol. for real :)' }
        ] } }
      ],
      mixcd: [
        { n: 'He was still holding the sleeve, and then he was humming. Track four, she realised, though he’d never heard it. He was guessing the melody from the title.' },
        { s: 'mark', f: 'neutral', t: 'Bet it goes like that. Bet it goes up at the end.' },
        { s: 'solar', t: 'You haven’t even heard it.' },
        { s: 'mark', f: 'flustered', t: 'That’s the game. I guess it, then I hear it, then I find out how wrong I was. It’s the best part of anything new.' },
        { n: 'He hummed the last bar again, softer, and tucked the CD into his jacket like he was keeping it warm.' },
        { s: 'mark', f: 'neutral', t: 'I’ll tell you if I was right. Don’t look it up.' }
      ]
    }
  };
})();
