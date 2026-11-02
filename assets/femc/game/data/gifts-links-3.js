/* Gift preferences and reactions (2026-11-02), writer 3: danielle, jaemin, chenle, jaehyun, yunjin, cherry, sunoo, junkyu, jay, niki, sunghoon. Format: data/gifts.js header. */
(() => {
  const L = ((window.FEMC_GAME_GIFTS ||= {}).links ||= {});

  L.danielle = {
    loved: ['camera', 'notebook', 'fountainpen', 'pocketwatch'],
    liked: ['coffeebeans', 'liptint', 'earcuff', 'snowglobe', 'shortbread'],
    no: ['shibaplush', 'tennisball', 'grapesoda'],
    say: {
      camera: [
        { s: 'danielle', f: 'surprised', t: 'Twenty-seven more.' },
        { n: 'She turned the box over, read the side, and put it in her bag before Solar could change her mind.' },
        { s: 'danielle', f: 'happy', t: 'You understand this means you’re on one of them. That’s the tax.' }
      ],
      notebook: [
        { s: 'danielle', f: 'neutral', t: 'Leather. Ribbon marker. Unruled.' },
        { n: 'She ran a thumb down the edge of the pages, the way somebody else might count money.' },
        { s: 'danielle', f: 'happy', t: 'The ledger’s getting crowded. This is for the things that aren’t groceries. Don’t ask what those are.' }
      ],
      fountainpen: [
        { s: 'danielle', f: 'surprised', t: '...This has been repaired. Somebody cared about it enough to fix it.' },
        { n: 'She wrote her name on the back of a receipt, then the date, then just looked at it.' },
        { s: 'danielle', f: 'happy', t: 'Everything I write with this is going to sound true. That’s dangerous. Thank you.' }
      ],
      pocketwatch: [
        { s: 'danielle', f: 'neutral', t: 'There’s a date inside the lid.' },
        { s: 'danielle', f: 'serious', t: 'Somebody wanted a day kept. Nobody remembers whose. I’ll keep it anyway.' },
        { s: 'danielle', f: 'happy', t: 'It runs a minute slow a day. I’ll note that. I’ll note it every day, actually.' }
      ],
      liked: [
        [ { s: 'danielle', f: 'neutral', t: 'Hm. {gift}.' }, { s: 'danielle', f: 'happy', t: 'Fine. Good, even. I’m writing down that you remembered something about me. It’s evidence.' } ],
        [ { s: 'danielle', f: 'happy', t: 'For me? On purpose?' }, { s: 'danielle', f: 'neutral', t: 'I’ll keep it. I keep everything. You knew that, which is the point.' } ],
        [ { s: 'danielle', f: 'neutral', t: 'That’s a reasonable choice. I don’t say that often. Enjoy it.' } ]
      ],
      meh: [
        [ { s: 'danielle', f: 'neutral', t: 'Thank you. I’ll find a use for it. I always do.' } ],
        [ { s: 'danielle', f: 'neutral', t: '{gift}. Noted.' }, { s: 'danielle', f: 'neutral', t: 'That means thank you. It’s a very efficient thank you.' } ]
      ],
      no: [
        [ { s: 'danielle', f: 'neutral', t: '...Oh. That’s. Hm.' }, { s: 'danielle', f: 'neutral', t: 'It’s the thought. I’m told that counts. I’ll be the judge of how much.' } ],
        [ { s: 'danielle', f: 'serious', t: 'I’m going to accept this and never mention it again. That’s a kindness. Don’t get used to it.' } ]
      ]
    }
  };

  L.jaemin = {
    loved: ['mixcd', 'citypop', 'sprayroses', 'earcuff'],
    liked: ['grapesoda', 'chocosticks', 'camera', 'liptint', 'tokencup', 'sunflowers'],
    no: ['poetry', 'castiron', 'pencil'],
    say: {
      mixcd: [
        { s: 'jaemin', f: 'surprised', t: 'A *mix.* Handwritten track list. Solar Lee, do you know what you’ve done.' },
        { n: 'He read the sleeve top to bottom, nodding at some of it, wincing at one.' },
        { s: 'jaemin', f: 'happy', t: 'Track six is a crime. Track seven forgives it. This is a playlist with an arc. I’m playing it at the next thing. There will be a next thing.' }
      ],
      citypop: [
        { s: 'jaemin', f: 'happy', t: 'Oh, that’s *vinyl.* That’s a sleeve with a past.' },
        { s: 'jaemin', f: 'happy', t: 'Track three’s worn pale. Somebody loved this at a party once. Now I get to.' },
        { n: 'He held it up to the light like it was a glass at a toast.' }
      ],
      sprayroses: [
        { s: 'jaemin', f: 'flustered', t: 'Flowers. For me. I bring the flowers. Nobody brings *me* flowers.' },
        { s: 'jaemin', f: 'happy', t: 'Pink. Excellent read. Frilly. Very on brand.' },
        { s: 'jaemin', f: 'neutral', t: 'I’m putting these somewhere everyone has to walk past them. That’s not vanity. It’s décor.' }
      ],
      earcuff: [
        { s: 'jaemin', f: 'surprised', t: 'No piercing? Look at you, thinking about my ears.' },
        { n: 'He had it on before she finished saying it was a cuff, and turned his head, slowly, so it caught the light.' },
        { s: 'jaemin', f: 'happy', t: 'That’s my angle now. You gave me an angle. I owe you forever.' }
      ],
      liked: [
        [ { s: 'jaemin', f: 'happy', t: '{gift}! For me? Fabulous. I am ecstatic.' }, { s: 'jaemin', f: 'neutral', t: 'I mean it, too. Usually I don’t have to.' } ],
        [ { s: 'jaemin', f: 'happy', t: 'Okay, see, *this* is party material.' }, { s: 'jaemin', f: 'happy', t: 'You’re invited, obviously. You’re the one who brought it.' } ],
        [ { s: 'jaemin', f: 'happy', t: 'You shop for people. I didn’t know that about you. I’m filing it.' } ]
      ],
      meh: [
        [ { s: 'jaemin', f: 'happy', t: 'Thank you! Truly. I will find {gift} a home.' } ],
        [ { s: 'jaemin', f: 'neutral', t: 'That’s very... thoughtful. No, it is. I’m smiling. Look.' } ]
      ],
      no: [
        [ { s: 'jaemin', f: 'neutral', t: 'Oh. Oh, that’s. Wow. Yeah.' }, { s: 'jaemin', f: 'happy', t: 'I love that you thought of me. Let’s focus on that part.' } ],
        [ { s: 'jaemin', f: 'flustered', t: 'I’m going to be honest, which is new for me. I don’t know what to do with {gift}.' }, { s: 'jaemin', f: 'happy', t: 'But I’ll hold it. Very sincerely.' } ]
      ]
    }
  };

  L.chenle = {
    loved: ['grapesoda', 'chocosticks', 'huntgame', 'tokencup'],
    liked: ['consomme', 'pencil', 'headphones', 'pudding', 'shibaplush'],
    no: ['sprayroses', 'bathsalts', 'romancemanga'],
    say: {
      grapesoda: [
        { s: 'chenle', f: 'surprised', t: 'Six cans.' },
        { n: 'He opened one immediately, without looking, the way other people breathe.' },
        { s: 'chenle', f: 'happy', t: 'That’s about four days. Three, if practice runs long. Thanks.' }
      ],
      chocosticks: [
        { s: 'chenle', f: 'neutral', t: 'Family pack. Eight sleeves.' },
        { s: 'chenle', f: 'happy', t: 'This is a food group. I don’t care what anyone says. It’s on the pyramid. Somewhere near the top.' },
        { n: 'He offered her the first stick. Then, after a second, the second one too.' }
      ],
      huntgame: [
        { s: 'chenle', f: 'surprised', t: '...This one’s sold out everywhere.' },
        { s: 'chenle', f: 'happy', t: 'Four players. I tank. Obviously. You can be whatever you want, but you stay behind me and you don’t pull aggro.' },
        { s: 'chenle', f: 'neutral', t: 'I’ll explain aggro. It takes about forty minutes.' }
      ],
      tokencup: [
        { s: 'chenle', f: 'neutral', t: 'Two hundred. That’s a good afternoon at the back row.' },
        { n: 'He shook the cup once, listening to it like it was a weight he already knew.' },
        { s: 'chenle', f: 'happy', t: 'Half are yours. I’m not doing the math out loud. Fine, a hundred. They’re yours.' }
      ],
      liked: [
        [ { s: 'chenle', f: 'neutral', t: '{gift}. Huh.' }, { s: 'chenle', f: 'happy', t: 'Good pick. Thanks.' } ],
        [ { s: 'chenle', f: 'neutral', t: 'You didn’t have to.' }, { s: 'chenle', f: 'flustered', t: 'I’m keeping it, though. Just so that’s clear.' } ],
        [ { s: 'chenle', f: 'happy', t: 'That’s useful. I like useful. Thanks.' } ]
      ],
      meh: [
        [ { s: 'chenle', f: 'neutral', t: 'Oh. Thanks. I’ll put it next to my stuff.' } ],
        [ { s: 'chenle', f: 'neutral', t: '...Thanks. I don’t have data on what to do with it yet. I’ll figure it out.' } ]
      ],
      no: [
        [ { s: 'chenle', f: 'neutral', t: '...' }, { s: 'chenle', f: 'neutral', t: 'I don’t think this is for me. You can have it back. Or give it to Jaemin. He’ll say it’s fabulous.' } ],
        [ { s: 'chenle', f: 'flustered', t: 'I don’t know what this is for. That’s not your fault. Thanks anyway.' } ]
      ]
    }
  };

  L.jaehyun = {
    loved: ['pocketwatch', 'musclerub', 'notebook', 'omamori'],
    liked: ['coffeebeans', 'darjeeling', 'sweatbands', 'shortbread', 'fountainpen', 'handwraps'],
    no: ['grapesoda', 'romancemanga', 'tokencup'],
    say: {
      pocketwatch: [
        { s: 'jaehyun', f: 'surprised', t: 'This still runs.' },
        { n: 'He set it against his own watch and checked them, carefully, twice.' },
        { s: 'jaehyun', f: 'neutral', t: 'It’s slow. About a minute a day. I’ll wind it ahead.' },
        { s: 'jaehyun', f: 'happy', t: 'Thank you. I mean it. I don’t always say it so you’d know.' }
      ],
      musclerub: [
        { s: 'jaehyun', f: 'neutral', t: 'Menthol. The strong one.' },
        { s: 'jaehyun', f: 'happy', t: 'You picked the one the trainers use. Of course you did.' },
        { s: 'jaehyun', f: 'neutral', t: 'My shoulder thanks you. It’s not as polite as I am.' }
      ],
      notebook: [
        { s: 'jaehyun', f: 'neutral', t: 'A notebook.' },
        { s: 'solar', t: 'For your tables.' },
        { s: 'jaehyun', f: 'flustered', t: 'They’re schedules, Solar.' },
        { s: 'jaehyun', f: 'happy', t: '...Thank you. They’re going to look very good in here.' }
      ],
      omamori: [
        { s: 'jaehyun', f: 'surprised', t: 'Protection.' },
        { n: 'He turned the red silk bag over once, didn’t open it, and put it in his inside pocket, the one by his chest.' },
        { s: 'jaehyun', f: 'neutral', t: 'That’s usually my job. Watching your back.' },
        { s: 'jaehyun', f: 'happy', t: 'I suppose I can let something else take a shift. One.' }
      ],
      liked: [
        [ { s: 'jaehyun', f: 'neutral', t: '{gift}. That’s thoughtful.' }, { s: 'jaehyun', f: 'happy', t: 'Thank you, sister.' } ],
        [ { s: 'jaehyun', f: 'surprised', t: 'You bought this. For me.' }, { s: 'jaehyun', f: 'happy', t: 'I’m not going to make it a thing. I’m just noting it. Thank you.' } ],
        [ { s: 'jaehyun', f: 'happy', t: 'This is good. You know that, I’m only confirming it.' } ]
      ],
      meh: [
        [ { s: 'jaehyun', f: 'neutral', t: 'Thank you. I’ll put it to use.' } ],
        [ { s: 'jaehyun', f: 'neutral', t: 'That’s kind of you.' }, { s: 'jaehyun', f: 'neutral', t: 'Did you eat today? Since you’re out spending money.' } ]
      ],
      no: [
        [ { s: 'jaehyun', f: 'neutral', t: '...' }, { s: 'jaehyun', f: 'neutral', t: 'I appreciate the thought. I’m going to keep appreciating it, and not the object.' } ],
        [ { s: 'jaehyun', f: 'flustered', t: 'I don’t think I’m the audience for {gift}.' }, { s: 'jaehyun', f: 'neutral', t: 'Thank you for thinking of me. That part I’ll keep.' } ]
      ]
    }
  };

  L.yunjin = {
    loved: ['liptint', 'gelpens', 'shibaplush', 'earcuff'],
    liked: ['daifuku', 'sprayroses', 'grapesoda', 'camera', 'chocosticks', 'romancemanga'],
    no: ['castiron', 'pencil', 'musclerub'],
    say: {
      liptint: [
        { s: 'yunjin', f: 'surprised', t: 'Sol. *Sol.* Cherry tint.' },
        { n: 'She put it on in the reflection of the nearest window, pressed her lips together, and turned around for a verdict.' },
        { s: 'yunjin', f: 'happy', t: 'I look like I just ate a popsicle. I look INCREDIBLE. Don’t answer that, I know.' }
      ],
      gelpens: [
        { s: 'yunjin', f: 'happy', t: 'Twenty-four colours. Six glitter. Do you understand what this does for my system?' },
        { s: 'yunjin', f: 'neutral', t: 'I can colour-code the colour-coding now.' },
        { s: 'yunjin', f: 'happy', t: 'Moody Lake is yours. It’s literally you. I’m not taking questions.' }
      ],
      shibaplush: [
        { s: 'yunjin', f: 'surprised', t: 'Oh my GOD. His FACE.' },
        { n: 'She hugged it with both arms, then held it out at arm’s length to look at it properly, then hugged it again.' },
        { s: 'yunjin', f: 'happy', t: 'He knows what we did. He’s seen everything. He’s our son now. I’m naming him something stupid.' }
      ],
      earcuff: [
        { s: 'yunjin', f: 'happy', t: 'Silver. No piercing. You remembered I’m a coward about needles.' },
        { s: 'yunjin', f: 'neutral', t: 'Don’t tell anyone. My whole thing is fearless.' },
        { s: 'yunjin', f: 'happy', t: 'This is going on now and it is never coming off. Look. Look at it catch the light. That’s rich-person light.' }
      ],
      liked: [
        [ { s: 'yunjin', f: 'happy', t: 'Babe. {gift}? For me?' }, { s: 'yunjin', f: 'happy', t: 'This is why I married you. Bit. It’s a bit. It’s also true.' } ],
        [ { s: 'yunjin', f: 'surprised', t: 'You bought me a present and didn’t even tell me first. Who ARE you.' }, { s: 'yunjin', f: 'happy', t: 'I love it. I’m stealing your stuff later to even it out.' } ],
        [ { s: 'yunjin', f: 'happy', t: 'Okay, wifey. Okay. Points. Big points.' } ]
      ],
      meh: [
        [ { s: 'yunjin', f: 'neutral', t: 'Aw. Thanks, Sol. It’s very... you picked it, so.' } ],
        [ { s: 'yunjin', f: 'neutral', t: '{gift}. Cute. I’ll find a place for it. Probably your room.' } ]
      ],
      no: [
        [ { s: 'yunjin', f: 'neutral', t: '...Babe.' }, { s: 'yunjin', f: 'neutral', t: 'I love you. I don’t know what this is. Those two things can be true at once.' } ],
        [ { s: 'yunjin', f: 'serious', t: 'Did you lose a bet? Blink twice.' }, { s: 'yunjin', f: 'happy', t: 'I’m keeping it anyway. It’s from you. That’s the whole rule.' } ]
      ]
    }
  };

  L.cherry = {
    loved: ['earcuff', 'romancemanga', 'daifuku', 'handcream'],
    liked: ['liptint', 'pudding', 'chocosticks', 'snowglobe', 'teddy'],
    no: ['pencil', 'baseball', 'sunflowers'],
    say: {
      earcuff: [
        { s: 'cherry', f: 'neutral', t: 'Silver. Thin. Not tacky.' },
        { n: 'She put it on without a mirror, first try, and tilted her head at Solar like she was daring her to say something.' },
        { s: 'cherry', f: 'happy', t: 'Okay. You have taste. Since when. Who taught you.' }
      ],
      romancemanga: [
        { s: 'cherry', f: 'surprised', t: '...How did you know I read these.' },
        { s: 'cherry', f: 'serious', t: 'If you tell anyone, I will deny it in two universes.' },
        { s: 'cherry', f: 'happy-2', t: 'Five volumes. A lot of rain. They’re going to almost-confess for four hundred pages and I’m going to scream at every single one.' }
      ],
      daifuku: [
        { s: 'cherry', f: 'happy', t: 'Strawberry. A whole one in each. The good kind.' },
        { n: 'She ate one immediately and handed Solar another without asking, which with Cherry is the same as a hug.' },
        { s: 'cherry', f: 'neutral', t: 'They don’t keep. That’s the excuse. We’re eating all six. That’s the plan.' }
      ],
      handcream: [
        { s: 'cherry', f: 'neutral', t: 'Rose hand cream.' },
        { s: 'cherry', f: 'happy', t: 'The rink wrecks my hands. You noticed. Gross. Thank you.' },
        { s: 'cherry', f: 'neutral', t: 'I’m putting it on now. Don’t watch. Okay, you can watch. It smells nice.' }
      ],
      pencil: [
        { s: 'cherry', f: 'serious', t: 'A mechanical pencil.' },
        { s: 'cherry', f: 'serious', t: 'For me. Who does not go to class.' },
        { s: 'cherry', f: 'neutral', t: '...Fine. I’ll use it to do your math. You can barely add.' }
      ],
      liked: [
        [ { s: 'cherry', f: 'neutral', t: '{gift}. Huh.' }, { s: 'cherry', f: 'happy', t: 'I hate that this is nice. Thanks, bitch. Love you.' } ],
        [ { s: 'cherry', f: 'surprised', t: 'You bought me something? On purpose?' }, { s: 'cherry', f: 'happy', t: 'Okay. I’m keeping it. Don’t make it weird.' } ],
        [ { s: 'cherry', f: 'happy', t: 'Fine. Good. Points to the knockoff.' } ]
      ],
      meh: [
        [ { s: 'cherry', f: 'neutral', t: 'Thanks. I guess. It’s fine. You’re fine.' } ],
        [ { s: 'cherry', f: 'neutral', t: '{gift}? Okay.' }, { s: 'cherry', f: 'neutral', t: 'I’m not mad. This is my face. You know this is my face.' } ]
      ],
      no: [
        [ { s: 'cherry', f: 'serious', t: 'What is this. Who is this for. Is this a test.' }, { s: 'cherry', f: 'neutral', t: '...I’m keeping it because you’re you. Don’t do it again.' } ],
        [ { s: 'cherry', f: 'neutral', t: 'Wow. Okay. You’re dead to me until tomorrow.' }, { s: 'cherry', f: 'happy', t: 'Kidding. Mostly. Love you. Never buy me this again.' } ]
      ]
    }
  };

  L.sunoo = {
    loved: ['sunflowers', 'camera', 'coffeebeans', 'shortbread'],
    liked: ['sprayroses', 'succulent', 'teddy', 'pudding', 'sewingtin', 'daifuku'],
    no: ['musclerub', 'consomme'],
    say: {
      sunflowers: [
        { s: 'sunoo', f: 'surprised', t: 'Oh! Oh, they’re so *tall.*' },
        { n: 'He held them in both arms like a toddler holds a cat, and looked around for anything that could be a vase.' },
        { s: 'sunoo', f: 'happy', t: 'They’re going on the counter. Everyone who comes in for coffee gets to see them. That’s a present for everybody. You did that.' }
      ],
      camera: [
        { s: 'sunoo', f: 'happy', t: 'A camera! Twenty-seven shots!' },
        { s: 'sunoo', f: 'neutral', t: 'I always take the group photos and I’m never in any of them. That’s fine. That’s the job.' },
        { s: 'sunoo', f: 'happy', t: 'But the first one’s you. Smile. No, a real one. There! Okay. Now I have to wait a whole roll to see it.' }
      ],
      coffeebeans: [
        { s: 'sunoo', f: 'surprised', t: 'Ethiopian. Light roast. Smell. Smell this.' },
        { n: 'He held the bag out, and then held it out again, until she did.' },
        { s: 'sunoo', f: 'happy', t: 'Blueberries! I’m making you the first cup. Pour-over. Slowly. It’s worth it. You’ll see.' }
      ],
      shortbread: [
        { s: 'sunoo', f: 'happy', t: 'The Chagall tin!' },
        { s: 'sunoo', f: 'neutral', t: 'I’m going to eat one and figure out how much butter. It’s a lot. It’s always more than you’d think.' },
        { s: 'sunoo', f: 'happy', t: 'And then the tin’s for keeping cookie cutters. You gave me two presents. You didn’t even know.' }
      ],
      liked: [
        [ { s: 'sunoo', f: 'surprised', t: 'For me? You don’t have to— oh, okay. Okay!' }, { s: 'sunoo', f: 'happy', t: 'Thank you! {gift}! I love it!' } ],
        [ { s: 'sunoo', f: 'happy', t: 'This is so nice. You’re so nice. Don’t tell anyone I said that, they’ll all want presents.' } ],
        [ { s: 'sunoo', f: 'happy', t: 'Aw. You thought about me while you were out. That’s the best part. The present’s also good.' } ]
      ],
      meh: [
        [ { s: 'sunoo', f: 'happy', t: 'Thank you! That’s really sweet of you!' } ],
        [ { s: 'sunoo', f: 'neutral', t: 'Oh, {gift}! I’ll find the perfect spot for it. Give me a minute. Or a week.' } ]
      ],
      no: [
        [ { s: 'sunoo', f: 'surprised', t: 'Oh! That’s... oh.' }, { s: 'sunoo', f: 'happy', t: 'Thank you! Really! I’ll keep it somewhere far from the pastry. For safety.' } ],
        [ { s: 'sunoo', f: 'neutral', t: 'I don’t think I know what to do with {gift}. That’s okay! I’ll learn. Or I’ll give it to Niki. He’ll do something weird with it.' } ]
      ]
    }
  };

  L.junkyu = {
    loved: ['teddy', 'shibaplush', 'gelpens', 'pudding'],
    liked: ['chocosticks', 'daifuku', 'sweatbands', 'foxstrap', 'snowglobe', 'grapesoda'],
    no: ['musclerub', 'darjeeling'],
    say: {
      teddy: [
        { s: 'junkyu', f: 'surprised', t: 'A BEAR.' },
        { s: 'junkyu', f: 'happy', t: 'It says get well! I’m not even sick! It works anyway! It says so on the box!' },
        { n: 'He hugged it, then asked Solar if she wanted a hug too, then hugged her before she answered.' }
      ],
      shibaplush: [
        { s: 'junkyu', f: 'surprised', t: 'Oh no. Oh no, he’s perfect.' },
        { s: 'junkyu', f: 'happy', t: 'Look at his face. He’s judging me. I deserve it. I love him.' },
        { s: 'junkyu', f: 'happy', t: 'He’s sleeping in my bed. I’m sleeping on the edge. That’s fine. That’s what you do for family.' }
      ],
      gelpens: [
        { s: 'junkyu', f: 'surprised', t: 'TWENTY-FOUR?!' },
        { s: 'junkyu', f: 'happy', t: 'Six glitter! I can’t draw at all, but I can draw in *glitter* now, so that’s basically art.' },
        { s: 'junkyu', f: 'neutral', t: 'Moody Lake. That’s a weird name. I’m saving it for something important.' }
      ],
      pudding: [
        { s: 'junkyu', f: 'happy', t: 'The LIMITED one! There were only four left! You got one of the four!' },
        { n: 'He held the glass jar up to the light to look at the caramel, then looked at Solar the same way.' },
        { s: 'junkyu', f: 'happy', t: 'It’s not ice cream but it’s the same emotional category. We’re sharing. That’s not a question. Get a spoon.' }
      ],
      liked: [
        [ { s: 'junkyu', f: 'surprised', t: 'For ME?' }, { s: 'junkyu', f: 'happy', t: '{gift}! Sol! I love it! I’m going to cry a little. It’s the wind.' } ],
        [ { s: 'junkyu', f: 'happy', t: 'You bought me a thing! I’m telling everyone! Okay, I’m telling Jihoon. He’ll be jealous. That’s a bonus.' } ],
        [ { s: 'junkyu', f: 'happy', t: 'Thank you thank you thank you. That’s three. I’m allowed to say it three times. It’s a rule I just made.' } ]
      ],
      meh: [
        [ { s: 'junkyu', f: 'happy', t: 'Oh! Thank you! I support it!' } ],
        [ { s: 'junkyu', f: 'neutral', t: 'I don’t know what {gift} is for yet. But I’ll love it anyway. That’s my thing.' } ]
      ],
      no: [
        [ { s: 'junkyu', f: 'neutral', t: 'Oh. Okay! That’s okay!' }, { s: 'junkyu', f: 'sad', t: 'It’s a little bit... grown-up. I’ll grow into it. Maybe. Thank you though!' } ],
        [ { s: 'junkyu', f: 'surprised', t: 'Is this for me or for Asahi?' }, { s: 'junkyu', f: 'happy', t: 'It’s okay! I’m keeping it! I support you in whatever!' } ]
      ]
    }
  };

  L.jay = {
    loved: ['castiron', 'yakisobapan', 'consomme', 'fruitbasket'],
    liked: ['dogjerky', 'baseball', 'coffeebeans', 'tokencup', 'picktin', 'pudding'],
    no: ['liptint', 'teddy', 'poetry'],
    say: {
      castiron: [
        { s: 'jay', f: 'surprised', t: '...Bro.' },
        { n: 'He took it by the handle, felt the weight drop, and turned it over to look at the black of it.' },
        { s: 'jay', f: 'neutral', t: 'Forty years of somebody’s breakfast. You don’t buy seasoning like that. You inherit it.' },
        { s: 'jay', f: 'happy', t: 'It’s mine? Mine-mine? Okay. Okay. Eggs. Tomorrow. You’re eating.' }
      ],
      yakisobapan: [
        { s: 'jay', f: 'surprised', t: 'The last one? You got the *last* one?' },
        { s: 'jay', f: 'happy', t: 'People fight wars over this. You just walked in and took it.' },
        { n: 'He broke it in half without thinking about it and handed her the bigger end.' }
      ],
      consomme: [
        { s: 'jay', f: 'neutral', t: 'Consommé. The good brand.' },
        { s: 'jay', f: 'happy', t: 'Mostly air. Very good air. You get it. Nobody gets it.' },
        { s: 'jay', f: 'neutral', t: 'I’m not sharing. I’m sharing a little. Hold out your hand.' }
      ],
      fruitbasket: [
        { s: 'jay', f: 'surprised', t: 'A whole basket.' },
        { s: 'jay', f: 'neutral', t: 'Melon’s ripe. Apples for tomorrow. That pear needs to be eaten tonight or it’s going to have an attitude.' },
        { s: 'jay', f: 'happy', t: 'This is like four people’s dessert. I know four people. You’re one.' }
      ],
      liked: [
        [ { s: 'jay', f: 'neutral', t: '{gift}? Nice.' }, { s: 'jay', f: 'happy', t: 'For real. Thanks.' } ],
        [ { s: 'jay', f: 'happy', t: 'You went shopping for me. That’s crazy. I’m feeding you for a week. That’s the deal.' } ],
        [ { s: 'jay', f: 'neutral', t: 'Okay, yeah. That’s a good one. You did good.' } ]
      ],
      meh: [
        [ { s: 'jay', f: 'neutral', t: 'Oh. Thanks. Appreciate it.' } ],
        [ { s: 'jay', f: 'neutral', t: '{gift}. Huh. Cool. I’ll figure it out.' } ]
      ],
      no: [
        [ { s: 'jay', f: 'neutral', t: '...Dude.' }, { s: 'jay', f: 'happy', t: 'Nah, it’s fine. It’s the thought. The thought’s good. The thing is... a thing.' } ],
        [ { s: 'jay', f: 'neutral', t: 'I’m not the guy for {gift}. Jake might be. I’ll give it a good home. His.' } ]
      ]
    }
  };

  L.niki = {
    loved: ['basketball', 'shibaplush', 'tokencup', 'huntgame'],
    liked: ['grapesoda', 'chocosticks', 'headphones', 'sweatbands', 'pudding', 'taiyaki'],
    no: ['poetry', 'darjeeling', 'fountainpen'],
    say: {
      basketball: [
        { s: 'niki', f: 'surprised', t: 'Outdoor ball. The grippy one.' },
        { n: 'He spun it on one finger, lost it, caught it, and acted like that was the plan.' },
        { s: 'niki', f: 'happy-2', t: 'Okay. You’re coming to the court. I’m going to destroy you. Respectfully. As a thank-you.' }
      ],
      shibaplush: [
        { s: 'niki', f: 'surprised', t: 'Wait. Wait. That’s the crane one.' },
        { s: 'niki', f: 'serious', t: 'I tried for that guy for like a whole week. It’s rigged. It’s luck. Same thing.' },
        { s: 'niki', f: 'happy-2', t: 'You just *bought* him? That’s cheating. I love cheating. He’s mine now.' }
      ],
      tokencup: [
        { s: 'niki', f: 'happy', t: 'Two hundred tokens. Do you know how many high scores that is?' },
        { s: 'niki', f: 'neutral', t: 'All of them. It’s all of them.' },
        { s: 'niki', f: 'happy', t: 'I’ll put your initials on one. Just one. Don’t get crazy.' }
      ],
      huntgame: [
        { s: 'niki', f: 'surprised', t: 'No way. NO WAY. It’s sold out.' },
        { n: 'He had it out of the bag and the plastic off before she could say anything else.' },
        { s: 'niki', f: 'happy-2', t: 'This is the best day of my life. I have to stop saying that. It keeps being true.' }
      ],
      liked: [
        [ { s: 'niki', f: 'happy', t: '{gift}? Okay, that’s actually good.' }, { s: 'niki', f: 'neutral', t: 'Don’t tell anyone I said actually.' } ],
        [ { s: 'niki', f: 'happy', t: 'Ayy. For me? You’re so nice it’s actually disgusting. Thanks.' } ],
        [ { s: 'niki', f: 'neutral', t: 'Nice. Nice nice. Yeah. Thanks, noona.' } ]
      ],
      meh: [
        [ { s: 'niki', f: 'neutral', t: 'Oh. Thanks. It’s... a thing. I like things.' } ],
        [ { s: 'niki', f: 'neutral', t: '{gift}. Cool. Cool cool. I’ll keep it in my room. With the other stuff.' } ]
      ],
      no: [
        [ { s: 'niki', f: 'neutral', t: 'Bruh.' }, { s: 'niki', f: 'happy', t: 'Kidding. Thanks. I don’t know what to do with it. I’ll figure it out. Probably not.' } ],
        [ { s: 'niki', f: 'serious', t: 'Is this homework? This feels like homework.' }, { s: 'niki', f: 'neutral', t: 'It’s fine. I’ll keep it. Someone older will know what it’s for.' } ]
      ]
    }
  };

  L.sunghoon = {
    loved: ['fruitbasket', 'sprayroses', 'pocketwatch', 'bathsalts'],
    liked: ['earcuff', 'darjeeling', 'handcream', 'poetry', 'snowglobe', 'musclerub'],
    no: ['teddy', 'grapesoda', 'sweatbands'],
    say: {
      fruitbasket: [
        { s: 'sunghoon', f: 'surprised', t: 'A fruit basket. With a bow.' },
        { n: 'He took out an apple, turned it once in his hand, and looked around for a knife.' },
        { s: 'sunghoon', f: 'neutral', t: 'The apples are going to become rabbits. That isn’t a question. Somebody here isn’t eating enough, and nobody refuses a rabbit.' }
      ],
      sprayroses: [
        { s: 'sunghoon', f: 'neutral', t: 'Roses.' },
        { s: 'sunghoon', f: 'flustered', t: 'Park Sunghoon is usually the one who gives these. It’s very strange to be on this side.' },
        { s: 'sunghoon', f: 'neutral', t: 'Princes receive tribute. I’ve read about it. I’ll accept them graciously. Look how gracious.' }
      ],
      pocketwatch: [
        { s: 'sunghoon', f: 'surprised', t: '...Brass. Still running.' },
        { n: 'He opened the lid, read the date engraved inside, and closed it with his thumb, a small, exact click.' },
        { s: 'sunghoon', f: 'neutral', t: 'A watch for a prince. Finally, someone understands the brand. I’m going to check it in meetings. Slowly. So they see.' }
      ],
      bathsalts: [
        { s: 'sunghoon', f: 'neutral', t: 'Yuzu.' },
        { s: 'sunghoon', f: 'flustered', t: 'How did you know the winter thing makes everything hurt. We don’t discuss the winter thing.' },
        { s: 'sunghoon', f: 'neutral', t: 'Thank you. Sincerely. My calves thank you separately. They’re less articulate.' }
      ],
      sweatbands: [
        { s: 'sunghoon', f: 'serious', t: 'Terry cloth.' },
        { s: 'sunghoon', f: 'serious', t: 'Very bright terry cloth.' },
        { s: 'sunghoon', f: 'neutral', t: 'Park Sunghoon does not sweat in public. But it’s a kind thought. I’ll give them to Jay. He sweats beautifully.' }
      ],
      liked: [
        [ { s: 'sunghoon', f: 'neutral', t: '{gift}. That’s a tasteful choice.' }, { s: 'sunghoon', f: 'neutral', t: 'Thank you, Solar. I’m a little moved. Don’t look.' } ],
        [ { s: 'sunghoon', f: 'surprised', t: 'A gift. For me. Well.' }, { s: 'sunghoon', f: 'neutral', t: 'Another admirer. One likes to be ready, and still one is never quite ready.' } ],
        [ { s: 'sunghoon', f: 'neutral', t: 'Good. Very good. I’ll tell people where I got it. In detail.' } ]
      ],
      meh: [
        [ { s: 'sunghoon', f: 'neutral', t: 'Thank you. Park Sunghoon accepts.' } ],
        [ { s: 'sunghoon', f: 'neutral', t: 'That’s... thoughtful. I’ll find somewhere for {gift} to live. Somewhere quiet.' } ]
      ],
      no: [
        [ { s: 'sunghoon', f: 'serious', t: '...' }, { s: 'sunghoon', f: 'neutral', t: 'I’m going to hold this with great dignity until you look away. Thank you.' } ],
        [ { s: 'sunghoon', f: 'neutral', t: 'This is not very princely.' }, { s: 'sunghoon', f: 'neutral', t: 'But it came from you, so I’ll make it work. Princes adapt.' } ]
      ]
    }
  };
})();
