/* Gift preferences and reactions (2026-11-02), writer 4: rio, saori, ann, kasumi, haru, kiriko, kuromi, mymelody, mercy,
   sebastian, aphrodite, judy, rohan, widowmaker, kat (Kat & Ethan; speakers kat, ethan, cosmo, wanda). Format: data/gifts.js header.
   None of these are main links, so no specials. Every reaction is rank-, route- and month-free. */
(() => {
  const L = ((window.FEMC_GAME_GIFTS ||= {}).links ||= {});

  L.rio = {
    loved: ['sweatbands', 'gelpens', 'musclerub', 'pocketwatch'],
    liked: ['notebook', 'tennisball', 'grapesoda', 'basketball', 'handcream', 'pencil'],
    no: ['romancemanga', 'liptint', 'teddy'],
    say: {
      sweatbands: [
        { s: 'rio', f: 'surprised', t: 'Oh. Oh, these are loud.' },
        { n: 'She put the headband on right there, over her fringe, and looked at Solar with total seriousness.' },
        { s: 'rio', f: 'happy', t: 'I look ridiculous. I’m wearing them tomorrow. If anyone laughs I’ll serve at them.' }
      ],
      gelpens: [
        { s: 'rio', f: 'surprised', t: 'Twenty-four colours?' },
        { n: 'She had the box open and the pens out in a fan before Solar had finished saying they were for her, sorting them by some system only she could see.' },
        { s: 'rio', f: 'happy', t: 'Do you know how many things I could colour-code with this. Drills. Matches. The fridge.' },
        { s: 'rio', f: 'neutral', t: '...What’s Moody Lake for. Nothing’s Moody Lake. I’ll find something.' }
      ],
      musclerub: [
        { s: 'rio', f: 'neutral', t: 'This is the strong kind.' },
        { n: 'She uncapped it, sniffed it, and blinked hard, eyes watering, looking delighted about it.' },
        { s: 'rio', f: 'happy', t: 'Yes. Okay. My shoulder’s going to love you. That’s the right one, senpai. Everybody buys the weak one to be nice.' }
      ],
      pocketwatch: [
        { s: 'rio', f: 'surprised', t: 'It still runs?' },
        { n: 'She held it to her ear, then checked it against her phone, then checked it again.' },
        { s: 'rio', f: 'serious', t: 'It’s a minute slow.' },
        { s: 'rio', f: 'happy', t: 'That’s fine. I’ll set it a minute fast. Then it’s right. I’m keeping it in my bag. I’m never going to be late with this.' }
      ],
      tennisball: [
        { s: 'rio', f: 'neutral', t: 'This is a dog toy.' },
        { n: 'She bounced it once on the ground. It squeaked. She bounced it again.' },
        { s: 'rio', f: 'happy', t: '...I’m putting this in the cart. Somebody’s going to serve it in a drill and scream.' }
      ],
      liked: [
        [ { s: 'rio', f: 'surprised', t: 'For me? I didn’t do anything.' }, { s: 'rio', f: 'happy', t: 'Thanks, senpai. I’ll use {gift}. I actually will. I don’t keep things I don’t use.' } ],
        [ { s: 'rio', f: 'neutral', t: 'Huh. Good pick.' }, { n: 'She tucked it into her racket bag, between the grip tape and the spare strings, which was, from Rio, a place of honour.' } ]
      ],
      meh: [
        [ { s: 'rio', f: 'neutral', t: 'Oh. Thank you. That’s nice of you.' } ],
        [ { s: 'rio', f: 'neutral', t: 'Thanks. I’ll... find a place for it.' }, { n: 'She said it like a schedule she hadn’t written yet.' } ]
      ],
      no: [
        [ { s: 'rio', f: 'surprised', t: 'Oh. Um.' }, { s: 'rio', f: 'neutral', t: 'That’s not really... me. Sorry. That came out wrong. Thank you. Really.' } ],
        [ { s: 'rio', f: 'neutral', t: 'I don’t know what I’d do with {gift}.' }, { s: 'rio', f: 'sad', t: 'I’ll give it to someone who does. Is that okay? That’s okay. I’ll say it was from you.' } ]
      ]
    }
  };

  L.saori = {
    loved: ['fountainpen', 'poetry', 'notebook', 'succulent'],
    liked: ['darjeeling', 'mixcd', 'pencil', 'snowglobe', 'romancemanga', 'bathsalts'],
    no: ['sweatbands', 'tokencup', 'earcuff'],
    say: {
      fountainpen: [
        { s: 'saori', f: 'surprised', t: 'This is... someone repaired this. Somebody cared about it enough to fix it.' },
        { n: 'She uncapped it the way you’d open a letter that wasn’t yours, and wrote one word on the back of a due-date slip, and looked at it.' },
        { s: 'saori', f: 'happy', t: 'It’s heavier than my handwriting. I mean that in a good way. I’ll have to write better things to keep up with it.' }
      ],
      poetry: [
        { s: 'saori', f: 'neutral', t: 'Somebody starred one.' },
        { n: 'She found the pencilled star straight away, and read the poem under it, and then read it again with her lips moving slightly.' },
        { s: 'saori', f: 'happy', t: 'I’d have starred that one too. Sorry. I like knowing that a stranger and I agree about something. It’s a very small thing to like.' }
      ],
      notebook: [
        { s: 'saori', f: 'surprised', t: 'Oh. Oh, this is too nice to write in.' },
        { s: 'saori', f: 'neutral', t: 'That’s what everybody says about nice notebooks, and then they never write in them. I’m going to write in it. On purpose. Badly, at first.' },
        { n: 'She ran her thumb down the ribbon marker and left it on the first page, which was empty, as if to keep its place.' }
      ],
      succulent: [
        { s: 'saori', f: 'surprised', t: 'It’s so small.' },
        { n: 'She set it on the library desk next to the date stamp, then moved it an inch to the left, into the light from the window.' },
        { s: 'saori', f: 'happy', t: 'There. It can keep me company on the slow afternoons. Nobody’s going to ask it to be quiet.' }
      ],
      liked: [
        [ { s: 'saori', f: 'surprised', t: 'You didn’t have to.' }, { s: 'saori', f: 'happy', t: 'Sorry. That’s the wrong thing to say. Thank you. That’s the right thing.' } ],
        [ { s: 'saori', f: 'neutral', t: '{gift}. For me?' }, { n: 'She held it in both hands for a second too long, the way people hold things they haven’t been given in a while.' }, { s: 'saori', f: 'happy', t: 'Thank you, Solar.' } ]
      ],
      meh: [
        [ { s: 'saori', f: 'neutral', t: 'Oh, that’s kind. Thank you.' } ],
        [ { s: 'saori', f: 'neutral', t: 'Thank you. I’ll keep it somewhere safe.' }, { n: 'She meant it. Saori kept everything somewhere safe.' } ]
      ],
      no: [
        [ { s: 'saori', f: 'surprised', t: 'Oh. That’s... very bright. I mean, it’s nice. Sorry. I’m not very good with bright things.' }, { s: 'saori', f: 'neutral', t: 'Thank you for thinking of me, though. That part I like.' } ],
        [ { s: 'saori', f: 'sad', t: 'I don’t think {gift} is really for someone like me.' }, { s: 'saori', f: 'neutral', t: 'Sorry. I don’t mean that sadly. I just mean I’d feel like I was borrowing it.' } ]
      ]
    }
  };

  L.ann = {
    loved: ['camera', 'daifuku', 'liptint', 'pudding'],
    liked: ['earcuff', 'ribbon', 'sprayroses', 'handcream', 'shortbread', 'sunflowers', 'chocosticks'],
    no: ['castiron', 'musclerub', 'pencil'],
    say: {
      camera: [
        { s: 'ann', f: 'surprised', t: 'Oh my god, a disposable? Do they still make these?' },
        { n: 'She wound the little wheel with her thumb, click-click-click, and held it up to her eye and pointed it straight at Solar.' },
        { s: 'ann', f: 'happy', t: 'No, don’t fix your hair. That’s the whole point. You don’t get to check. It’s just true.' },
        { n: 'The flash went off. Ann laughed at whatever face Solar made, and wound it again.' }
      ],
      daifuku: [
        { s: 'ann', f: 'happy', t: 'Strawberry daifuku! Solar. Solar. Do you know what you’ve done.' },
        { n: 'She ate one on the spot, carefully, from the side, so the strawberry showed in the middle like a cross-section in a magazine.' },
        { s: 'ann', f: 'happy', t: 'Ten out of ten. Don’t tell the crepes. They’re sensitive.' }
      ],
      liptint: [
        { s: 'ann', f: 'surprised', t: 'Wait, this is the good one.' },
        { n: 'She checked it on the back of her hand, then on her mouth, using the shop window behind Solar as a mirror.' },
        { s: 'ann', f: 'happy', t: 'Okay, it’s perfect. It looks like I just ate a popsicle, which is the dream. You have such good taste. Who taught you that?' }
      ],
      pudding: [
        { s: 'ann', f: 'surprised', t: 'The limited one? They had some left?' },
        { s: 'ann', f: 'happy', t: 'I went to three konbini for this last week. Three. I’m sharing it with you. No, I am. Get a spoon. It tastes better if somebody else is suffering with you.' }
      ],
      liked: [
        [ { s: 'ann', f: 'happy', t: 'Aww. You got me {gift}?' }, { s: 'ann', f: 'happy', t: 'Thank you! I love it. Okay, I love you a normal amount for it. Thanks.' } ],
        [ { s: 'ann', f: 'surprised', t: 'For me? Seriously?' }, { n: 'She hugged it to her chest for a second, the way she hugged everything she was pleased about, including, once, a crepe.' } ],
        [ { s: 'ann', f: 'happy', t: 'This is so cute. You’re so cute. Thank you, Solar.' } ]
      ],
      meh: [
        [ { s: 'ann', f: 'neutral', t: 'Oh, thanks! That’s sweet of you.' } ],
        [ { s: 'ann', f: 'neutral', t: 'Huh. {gift}. Okay! Thank you.' }, { n: 'She smiled the polite smile. Solar had seen the real one. It wasn’t this.' } ]
      ],
      no: [
        [ { s: 'ann', f: 'surprised', t: 'Oh! Oh. This is... a lot of {gift}.' }, { s: 'ann', f: 'flustered', t: 'I don’t think I’d know what to do with it. But thank you. Honestly. It’s the thought.' } ],
        [ { s: 'ann', f: 'neutral', t: 'Hm. Okay, I’m going to be honest, because you’d know if I wasn’t.' }, { s: 'ann', f: 'happy', t: 'It’s not really me. But I love that you got me something. That part I’m keeping.' } ]
      ]
    }
  };

  L.kasumi = {
    loved: ['ribbon', 'bathsalts', 'omamori', 'sprayroses'],
    liked: ['musclerub', 'handcream', 'sweatbands', 'daifuku', 'camera', 'sunflowers'],
    no: ['consomme', 'huntgame'],
    say: {
      ribbon: [
        { s: 'kasumi', f: 'surprised', t: 'Senpai, is this satin?' },
        { n: 'She let it unroll off her palm and gave it one small flick, and it lifted and turned in the air and came back to her hand like it had always lived there.' },
        { s: 'kasumi', f: 'happy', t: 'It moves beautifully. It’s too short for a routine, so I’m going to wear it. In my hair. Every competition. I’ve decided.' }
      ],
      bathsalts: [
        { s: 'kasumi', f: 'happy', t: 'Yuzu! Oh, Senpai, you don’t know how much I need this.' },
        { s: 'kasumi', f: 'neutral', t: 'After practice everything hurts in a very specific order. Calves, then shoulders, then my pride.' },
        { s: 'kasumi', f: 'happy', t: 'This fixes two of those. Thank you.' }
      ],
      omamori: [
        { s: 'kasumi', f: 'surprised', t: 'A charm? For me?' },
        { n: 'She held the little silk bag in both hands and bowed over it, very seriously, the way you’d bow to a judge.' },
        { s: 'kasumi', f: 'blushing', t: 'I’m tying it to my bag. I know luck isn’t supposed to matter if you’ve practiced enough. But it’s nice to have both.' }
      ],
      sprayroses: [
        { s: 'kasumi', f: 'blushing', t: 'Flowers? Senpai, I haven’t even competed.' },
        { s: 'kasumi', f: 'happy', t: 'People only ever give flowers after. These are before. I think I like before better. It means you think I’ll do well.' }
      ],
      liked: [
        [ { s: 'kasumi', f: 'happy', t: 'For me? Senpai, thank you!' }, { s: 'kasumi', f: 'happy', t: 'I’m going to take really good care of {gift}. Gymnasts are very good at taking care of things. We have to be.' } ],
        [ { s: 'kasumi', f: 'surprised', t: 'Oh, you didn’t have to!' }, { n: 'She bowed anyway, quick and neat, the bow of someone who had done a lot of bows in front of a lot of panels.' } ]
      ],
      meh: [
        [ { s: 'kasumi', f: 'neutral', t: 'Thank you, Senpai. That’s very kind.' } ],
        [ { s: 'kasumi', f: 'neutral', t: 'Oh! Thank you. I’ll find somewhere to put it.' } ]
      ],
      no: [
        [ { s: 'kasumi', f: 'surprised', t: 'Oh, um.' }, { s: 'kasumi', f: 'sad', t: 'I’m not really allowed {gift} during the season. Coach would make that face. You know the face.' }, { s: 'kasumi', f: 'happy', t: 'Thank you, though! I’ll give it to someone who isn’t being watched.' } ],
        [ { s: 'kasumi', f: 'neutral', t: 'Thank you, Senpai. I don’t think it’s very me. But I like that you thought of me.' } ]
      ]
    }
  };

  L.haru = {
    loved: ['coffeebeans', 'castiron', 'sunflowers'],
    liked: ['succulent', 'darjeeling', 'shortbread', 'fruitbasket', 'handcream', 'pocketwatch', 'poetry'],
    no: ['grapesoda', 'tokencup'],
    say: {
      coffeebeans: [
        { s: 'haru', f: 'surprised', t: 'Ethiopian? Light roast?' },
        { n: 'She opened the top of the bag and breathed in, eyes closed, for long enough that Solar wondered if she should leave them alone.' },
        { s: 'haru', f: 'happy', t: 'Blueberries. They really do smell like blueberries. I’ll brew these slowly, Solar-chan. Some things shouldn’t be hurried, and these are one of them.' }
      ],
      castiron: [
        { s: 'haru', f: 'surprised', t: 'Oh my. It’s so heavy.' },
        { n: 'She held it level with both hands, looking at the black surface the way other people looked at old photographs.' },
        { s: 'haru', f: 'happy', t: 'Forty years of somebody’s breakfasts. And now it gets to be mine. I’ll be very careful with it. One day there’ll be a little kitchen, and this will be the first thing in it.' }
      ],
      sunflowers: [
        { s: 'haru', f: 'happy', t: 'Sunflowers! Look how tall they are!' },
        { s: 'haru', f: 'neutral', t: 'Did you know they turn to follow the sun when they’re young? Then they get old enough and pick one direction and stay.' },
        { s: 'haru', f: 'happy', t: 'I’ll save the seeds. Next year there will be sunflowers on this roof, and they’ll be yours.' }
      ],
      liked: [
        [ { s: 'haru', f: 'happy', t: 'For me? How lovely. Thank you, Solar-chan.' }, { s: 'haru', f: 'neutral', t: 'I’ll think of you every time I use {gift}. That’s the best thing a gift can do, I think.' } ],
        [ { s: 'haru', f: 'surprised', t: 'Oh! You shouldn’t have.' }, { s: 'haru', f: 'happy', t: 'But I’m very glad you did.' } ]
      ],
      meh: [
        [ { s: 'haru', f: 'neutral', t: 'How thoughtful. Thank you very much.' } ],
        [ { s: 'haru', f: 'neutral', t: 'Thank you, Solar-chan. That’s very kind of you.' }, { n: 'She said it beautifully. Haru said everything beautifully, which made it hard to tell.' } ]
      ],
      no: [
        [ { s: 'haru', f: 'surprised', t: 'Oh! Goodness.' }, { s: 'haru', f: 'neutral', t: 'I’m afraid {gift} isn’t really to my taste. Please don’t mind me. I’m terribly particular.' }, { s: 'haru', f: 'happy', t: 'I’ll find it someone who’ll love it. I promise it won’t go to waste.' } ],
        [ { s: 'haru', f: 'neutral', t: 'That’s very kind. I’m not sure what I’d do with it.' }, { s: 'haru', f: 'happy', t: 'Shall we just have tea, and not tell anyone?' } ]
      ]
    }
  };

  L.kiriko = {
    loved: ['taiyaki', 'foxstrap', 'gelpens'],
    liked: ['omamori', 'daifuku', 'grapesoda', 'tokencup', 'huntgame', 'shibaplush', 'pudding'],
    no: ['musclerub', 'castiron'],
    say: {
      taiyaki: [
        { s: 'kiriko', f: 'surprised', t: 'Taiyaki? From the pier? Still hot??' },
        { n: 'She had the bag open before the sentence was over and counted them, out loud, with one finger.' },
        { s: 'kiriko', f: 'happy', t: 'Three. Good. Three is correct. You get one, I get one, and the third one we fight for.' },
        { s: 'kiriko', f: 'happy', t: 'I’m kidding. I win. Head first. Always head first.' }
      ],
      foxstrap: [
        { s: 'kiriko', f: 'surprised', t: 'A fox! A little white fox!' },
        { n: 'She shook it next to her ear to hear the bell, then hooked it straight onto her phone and held the phone up to show it off to nobody.' },
        { s: 'kiriko', f: 'happy', t: 'It looks smug. I love it. It looks like it knows something. Foxes always do.' }
      ],
      gelpens: [
        { s: 'kiriko', f: 'surprised', t: 'Twenty-four colours?? Glitter ones??' },
        { s: 'kiriko', f: 'happy', t: 'Okay, everybody’s fortunes are getting so much better. Not luckier. Prettier. Great blessing in gold glitter. Bad luck in Moody Lake.' },
        { s: 'kiriko', f: 'happy', t: 'Moody Lake is so perfect for bad luck. Who named this. I want to meet them.' }
      ],
      omamori: [
        { s: 'kiriko', f: 'neutral', t: 'Ooh. Let me see.' },
        { n: 'She turned the charm over with professional suspicion, checked the knot, checked the stitching, and nodded once.' },
        { s: 'kiriko', f: 'happy', t: 'Good knot. Somebody up those steps knows what they’re doing. I’ll keep it. Professional respect.' }
      ],
      liked: [
        [ { s: 'kiriko', f: 'happy', t: 'For me? Ha! Nobody gives me stuff. I’m usually the one handing things out.' }, { s: 'kiriko', f: 'happy', t: 'Thanks. Really. {gift}. Okay. I’m keeping it.' } ],
        [ { s: 'kiriko', f: 'surprised', t: 'Wait, seriously?' }, { s: 'kiriko', f: 'happy', t: 'Okay, I like you. I already liked you. Now I like you with evidence.' } ]
      ],
      meh: [
        [ { s: 'kiriko', f: 'neutral', t: 'Oh! Thanks. That’s nice of you.' } ],
        [ { s: 'kiriko', f: 'neutral', t: 'Hm. {gift}. Okay! Thank you.' }, { n: 'She tucked it into her sleeve, where Kiriko kept everything she didn’t have a better place for.' } ]
      ],
      no: [
        [ { s: 'kiriko', f: 'surprised', t: 'Oh. Oh, that’s... a thing.' }, { s: 'kiriko', f: 'neutral', t: 'I don’t know what I’d do with it. Thank you, though! It’s the thought. The thought is good.' } ],
        [ { s: 'kiriko', f: 'serious', t: 'Okay, I’m going to be honest, because I’m bad at lying and you’d catch me.' }, { s: 'kiriko', f: 'happy', t: 'Not my thing. But you thought of me, and that’s a good omen. I’m counting it.' } ]
      ]
    }
  };

  L.kuromi = {
    loved: ['romancemanga', 'pudding', 'earcuff'],
    liked: ['chocosticks', 'grapesoda', 'liptint', 'tokencup', 'huntgame', 'shibaplush', 'gelpens'],
    no: ['sprayroses', 'teddy'],
    say: {
      romancemanga: [
        { s: 'kuromi', f: 'surprised', t: 'Volumes one to five?' },
        { s: 'kuromi', f: 'flustered', t: 'This is for RESEARCH. Obviously. You have to know how the enemy thinks.' },
        { n: 'She was already reading the back of volume two. Her lips moved a little at the word *almost-confession.*' },
        { s: 'kuromi', f: 'serious', t: 'If the rival gets one good panel in here, I’m writing to the author. Thanks. Don’t make it weird.' }
      ],
      pudding: [
        { s: 'kuromi', f: 'surprised', t: 'The LIMITED one?' },
        { n: 'She snatched it, checked the date, checked the caramel, and held it up to the light like a jewel thief with a very small diamond.' },
        { s: 'kuromi', f: 'happy', t: 'Okay. This is a serious tribute. I accept it. I’m eating it right now, before anybody gets ideas.' }
      ],
      earcuff: [
        { s: 'kuromi', f: 'surprised', t: 'Wait. That’s actually cool.' },
        { n: 'She clipped it on, turned her head, turned it the other way, and caught the light off it in a car window on purpose.' },
        { s: 'kuromi', f: 'happy', t: 'I look EVIL. In a good way. In the best way. You have taste, rival. Who knew.' }
      ],
      liked: [
        [ { s: 'kuromi', f: 'neutral', t: 'Huh. {gift}. For me?' }, { s: 'kuromi', f: 'happy', t: 'Fine. Tribute accepted. Don’t think this means I go easy on you.' } ],
        [ { s: 'kuromi', f: 'flustered', t: 'Why are you giving me stuff. What’s the angle.' }, { s: 'kuromi', f: 'neutral', t: '...There’s no angle? Ugh. Fine. Thanks. I mean it, so don’t look at me.' } ]
      ],
      meh: [
        [ { s: 'kuromi', f: 'neutral', t: 'Okay. Thanks, I guess.' } ],
        [ { s: 'kuromi', f: 'neutral', t: 'Huh. That’s a gift. You gave me a gift.' }, { s: 'kuromi', f: 'neutral', t: 'It’s fine. It’s not evil enough, but it’s fine.' } ]
      ],
      no: [
        [ { s: 'kuromi', f: 'surprised', t: 'Ew. It’s so CUTE.' }, { s: 'kuromi', f: 'flustered', t: 'I mean. Thank you. I’m just going to... put it somewhere I can’t see it. That’s a compliment. Kind of.' } ],
        [ { s: 'kuromi', f: 'serious', t: 'Is this a prank? Are you pranking ME? That’s my whole thing.' }, { s: 'kuromi', f: 'neutral', t: '...It’s not a prank. Okay. Thanks. It’s just really not my style.' } ]
      ]
    }
  };

  L.mymelody = {
    loved: ['sprayroses', 'teddy', 'shortbread', 'fruitbasket'],
    liked: ['daifuku', 'succulent', 'handcream', 'chocosticks', 'sunflowers', 'sewingtin'],
    no: ['musclerub', 'huntgame'],
    say: {
      sprayroses: [
        { s: 'mymelody', f: 'surprised', t: 'Oh! Roses! Little ones!' },
        { n: 'She put her whole face in them, briefly, the way a child would, and came up smiling with a petal on her nose.' },
        { s: 'mymelody', f: 'happy', t: 'They smell like a garden somebody’s grandmother keeps. I’m putting them by the kitchen window, so everybody gets some.' }
      ],
      teddy: [
        { s: 'mymelody', f: 'surprised', t: 'It says get well. Senpai, I’m not sick.' },
        { s: 'mymelody', f: 'happy', t: 'That’s all right. I’ll keep it until somebody is. And then I’ll lend it. And then they’ll give it back, because it’s mine.' },
        { n: 'She sat the bear on the counter facing the oven, so it could watch.' }
      ],
      shortbread: [
        { s: 'mymelody', f: 'happy', t: 'Oh, the Chagall tin!' },
        { n: 'She ate one very slowly, with her eyes half closed, the way bakers eat other people’s biscuits, working out the butter.' },
        { s: 'mymelody', f: 'neutral', t: 'More butter than I’d dare. A little salt. Hm.' },
        { s: 'mymelody', f: 'happy', t: 'I’m keeping the tin, Senpai. For my own biscuits. When I make some that deserve it.' }
      ],
      fruitbasket: [
        { s: 'mymelody', f: 'surprised', t: 'A whole basket? With a bow?' },
        { s: 'mymelody', f: 'happy', t: 'Look at the pear. It looks so important. I think it should be a tart. A pear tart, with the apples underneath holding it up.' },
        { s: 'mymelody', f: 'happy', t: 'Come on Wednesday. You can have the first slice. You’ll have to tell me the truth about it.' }
      ],
      liked: [
        [ { s: 'mymelody', f: 'happy', t: 'For me? Oh, thank you, Senpai!' }, { s: 'mymelody', f: 'happy', t: 'I love {gift}. I mean it. I’m not only saying it.' } ],
        [ { s: 'mymelody', f: 'surprised', t: 'Oh! A present!' }, { n: 'She clapped her hands together once, very softly, as if presents were something that might startle.' } ]
      ],
      meh: [
        [ { s: 'mymelody', f: 'neutral', t: 'Thank you, Senpai. That’s very kind.' } ],
        [ { s: 'mymelody', f: 'neutral', t: 'Oh, thank you. I’ll put it somewhere nice.' } ]
      ],
      no: [
        [ { s: 'mymelody', f: 'surprised', t: 'Oh. Oh my.' }, { s: 'mymelody', f: 'neutral', t: 'I don’t think {gift} is for me, Senpai. But Kuromi might like it. Can I give it to her? I won’t say it was a hand-me-down.' } ],
        [ { s: 'mymelody', f: 'flustered', t: 'It’s a little scary. Sorry. Clumsy me.' }, { s: 'mymelody', f: 'happy', t: 'Thank you for thinking of me, though. That part isn’t scary at all.' } ]
      ]
    }
  };

  L.mercy = {
    loved: ['handcream', 'coffeebeans', 'fountainpen'],
    liked: ['chocosticks', 'bathsalts', 'darjeeling', 'fruitbasket', 'teddy', 'poetry'],
    no: ['grapesoda', 'consomme'],
    say: {
      handcream: [
        { s: 'mercy', f: 'surprised', t: 'Hand cream. Oh, you noticed.' },
        { n: 'She held up her hands. The knuckles were pink and dry from a hundred washes a day, the skin round the nails split in two places.' },
        { s: 'mercy', f: 'happy', t: 'Doctors have the worst hands in any building. Thank you, Solar. I’ll actually use it. That’s a medical promise.' }
      ],
      coffeebeans: [
        { s: 'mercy', f: 'happy', t: 'Real coffee. Thank God.' },
        { s: 'mercy', f: 'neutral', t: 'The machine on the third floor makes something it calls coffee. I have a professional opinion about that, and it is not printable.' },
        { s: 'mercy', f: 'happy', t: 'These are going in my bag. For the night rounds. You may have just saved a life. Probably mine.' }
      ],
      fountainpen: [
        { s: 'mercy', f: 'surprised', t: 'A fountain pen? A real one?' },
        { n: 'She wrote her name on the back of her hand with it, the way people test pens, and watched the ink dry, and smiled at the nib.' },
        { s: 'mercy', f: 'blushing', t: 'It writes beautifully. I’ll sign charts with it. Everyone will think I’ve become very old-fashioned. Let them.' }
      ],
      fruitbasket: [
        { s: 'mercy', f: 'surprised', t: 'A fruit basket. Who’s sick?' },
        { s: 'mercy', f: 'happy', t: 'Nobody? It’s for me? ...That’s a very strange feeling, getting the patient’s present. I like it. Vitamins. Very good.' }
      ],
      liked: [
        [ { s: 'mercy', f: 'happy', t: 'For me? That’s very kind.' }, { s: 'mercy', f: 'happy', t: 'Thank you, Solar. I don’t get a lot of {gift} at work. Mostly I get forms.' } ],
        [ { s: 'mercy', f: 'surprised', t: 'Oh! You shouldn’t spend your money on me.' }, { s: 'mercy', f: 'happy', t: 'But since you have. Thank you. Truly.' } ]
      ],
      meh: [
        [ { s: 'mercy', f: 'neutral', t: 'Thank you, Solar. That’s thoughtful.' } ],
        [ { s: 'mercy', f: 'neutral', t: 'Ah. Thank you. I’ll find a place for it in the office.' }, { n: 'The office was a corner of a staff room. She would find a place anyway.' } ]
      ],
      no: [
        [ { s: 'mercy', f: 'neutral', t: 'Ah. {gift}.' }, { s: 'mercy', f: 'serious', t: 'I’m going to read you the label, and then I’m going to give it to the night porter, who has never read a label in his life.' }, { s: 'mercy', f: 'happy', t: 'Thank you, though. Really.' } ],
        [ { s: 'mercy', f: 'surprised', t: 'Oh. That’s... not really for me, I think.' }, { s: 'mercy', f: 'happy', t: 'But you thought of me, on a day you didn’t have to. I’m keeping that part.' } ]
      ]
    }
  };

  L.sebastian = {
    loved: ['huntgame', 'mixcd', 'notebook'],
    liked: ['tokencup', 'consomme', 'coffeebeans', 'citypop', 'pencil', 'headphones'],
    no: ['sweatbands', 'liptint'],
    say: {
      huntgame: [
        { s: 'sebastian', f: 'surprised', t: 'Is this the one everyone at the arcade keeps yelling about?' },
        { n: 'He turned the box over and read every word on the back, including the small print, including the ratings.' },
        { s: 'sebastian', f: 'happy', t: 'Four players. Okay. You have to play. That’s not optional. I’m not fighting a giant monster by myself, I’ve seen how I play.' }
      ],
      mixcd: [
        { s: 'sebastian', f: 'neutral', t: 'Huh. A burned CD. Handwritten sleeve.' },
        { n: 'He read the track list, top to bottom, and his face did a thing it rarely did, which was change.' },
        { s: 'sebastian', f: 'happy', t: 'I don’t know half of these. That’s the best part. Thanks. I’m going to listen to this in the dark like a weirdo.' }
      ],
      notebook: [
        { s: 'sebastian', f: 'surprised', t: '...Leather?' },
        { s: 'sebastian', f: 'neutral', t: 'This is way too nice for campaign notes. I’m going to use it for campaign notes.' },
        { s: 'sebastian', f: 'happy', t: 'First page is going to be a map. A bad map. Thanks. Seriously.' }
      ],
      liked: [
        [ { s: 'sebastian', f: 'neutral', t: 'Oh. For me?' }, { s: 'sebastian', f: 'happy', t: '...Cool. Thanks. That’s actually cool.' } ],
        [ { s: 'sebastian', f: 'surprised', t: 'You got me {gift}?' }, { n: 'He nodded at it slowly, like a person agreeing with something he hadn’t expected to agree with.' }, { s: 'sebastian', f: 'neutral', t: 'Thanks. I’ll use it.' } ]
      ],
      meh: [
        [ { s: 'sebastian', f: 'neutral', t: 'Huh. Thanks.' } ],
        [ { s: 'sebastian', f: 'neutral', t: 'Oh. Okay. Thanks, Solar.' }, { n: 'He put it in his hoodie pocket, which was where things went to be thought about later.' } ]
      ],
      no: [
        [ { s: 'sebastian', f: 'surprised', t: 'That’s... really bright.' }, { s: 'sebastian', f: 'flustered', t: 'Sorry. I’m not a bright person. I mean the colour. I mean, thanks. Thank you.' } ],
        [ { s: 'sebastian', f: 'neutral', t: 'I don’t think {gift} is very me.' }, { s: 'sebastian', f: 'neutral', t: 'But it’s nice that you thought I was the kind of person who’d get a present. That part’s good.' } ]
      ]
    }
  };

  L.aphrodite = {
    loved: ['liptint', 'fruitbasket', 'snowglobe', 'bathsalts'],
    liked: ['sprayroses', 'sunflowers', 'earcuff', 'handcream', 'ribbon', 'daifuku'],
    no: ['musclerub', 'baseball', 'castiron'],
    say: {
      liptint: [
        { s: 'aphrodite', f: 'happy', t: 'Oh, little sun. You brought me paint.' },
        { n: 'She put it on without a mirror, in one stroke, perfectly, the way a goddess would, and then pressed her lips together and pouted at the street.' },
        { s: 'aphrodite', f: 'happy', t: 'Popsicle. Yes. It’s so silly. It’s exactly right. Mortals are geniuses about very small things.' }
      ],
      fruitbasket: [
        { s: 'aphrodite', f: 'surprised', t: 'Fruit? You brought a goddess fruit?' },
        { n: 'She went straight past the melon and the pear and the grapes and picked out an apple, and turned it slowly in her hand with a look Solar couldn’t read.' },
        { s: 'aphrodite', f: 'happy', t: 'Apples always cause trouble, little sun. I’ll be very careful with this one. Then I’ll eat it.' }
      ],
      snowglobe: [
        { s: 'aphrodite', f: 'surprised', t: 'What is it doing? Is it snowing? On the sea?' },
        { n: 'She shook it, and watched, and shook it again before it had finished, and then held it very still to see the last flakes settle on the water.' },
        { s: 'aphrodite', f: 'happy', t: 'I came out of the sea, you know. Foam and light. Nobody ever told me it could snow on it. I’m going to stare at this all night.' }
      ],
      bathsalts: [
        { s: 'aphrodite', f: 'happy', t: 'Bath salts. Little sun, you understand me.' },
        { s: 'aphrodite', f: 'neutral', t: 'Yuzu. It smells like winter and somebody’s orchard. A goddess should be bathed in this at least once a week. Twice, if she’s been sad.' },
        { s: 'aphrodite', f: 'happy', t: 'Thank you. I’ll think of you in the water. That’s a compliment where I’m from.' }
      ],
      liked: [
        [ { s: 'aphrodite', f: 'happy', t: 'An offering! How lovely.' }, { s: 'aphrodite', f: 'happy', t: 'I accept {gift}. Graciously. Hugely. Thank you, little sun.' } ],
        [ { s: 'aphrodite', f: 'surprised', t: 'For me? Not to ask for anything?' }, { n: 'She looked at it, then at Solar, as if checking which of them was the stranger thing.' }, { s: 'aphrodite', f: 'happy', t: 'Then thank you. That’s rarer than gold, you know.' } ]
      ],
      meh: [
        [ { s: 'aphrodite', f: 'neutral', t: 'How sweet. Thank you, little sun.' } ],
        [ { s: 'aphrodite', f: 'neutral', t: 'Hm. A mortal thing. I’ll find out what it’s for.' } ]
      ],
      no: [
        [ { s: 'aphrodite', f: 'surprised', t: 'Oh. Oh, it’s... sporting.' }, { s: 'aphrodite', f: 'neutral', t: 'I don’t sweat, little sun. I glow. But I love that you thought I might. I’ll give it to someone who does.' } ],
        [ { s: 'aphrodite', f: 'flustered', t: 'What is {gift} for? No, don’t tell me. I’d rather not know.' }, { s: 'aphrodite', f: 'happy', t: 'Thank you anyway. Truly. It’s the gesture. Gods are very big on gestures.' } ]
      ]
    }
  };

  L.judy = {
    loved: ['valveradio', 'camera', 'tokencup'],
    liked: ['mixcd', 'headphones', 'citypop', 'consomme', 'grapesoda', 'snowglobe'],
    no: ['romancemanga', 'castiron'],
    say: {
      valveradio: [
        { s: 'judy', f: 'surprised', t: 'Wait. Is this valves? Actual vacuum tubes?' },
        { n: 'She had the back off it in about a minute, Solar wasn’t sure with what, and was looking inside with her face lit orange by the glow.' },
        { s: 'judy', f: 'happy', t: 'Hear that hum? That’s it thinking. Your tech’s like a museum, I swear. I’m never putting this back together right. I love it.' }
      ],
      camera: [
        { s: 'judy', f: 'surprised', t: 'A disposable. Analogue. No playback?' },
        { s: 'judy', f: 'neutral', t: 'So you just... take it. And you don’t find out what you got till later. No edits.' },
        { s: 'judy', f: 'happy', t: 'That’s kinda beautiful, Solar. I’m gonna use every shot. Don’t look at me like that. You’re in at least three.' }
      ],
      tokencup: [
        { s: 'judy', f: 'happy', t: 'Ha! A whole cup?' },
        { n: 'She shook it, loud, and listened to it the way other people listened to music.' },
        { s: 'judy', f: 'happy', t: 'Half of these are going in the cabinets. The other half are going in my rig. Don’t tell the arcade. Come on, you’re player two.' }
      ],
      liked: [
        [ { s: 'judy', f: 'happy', t: 'Huh. For me? Thanks, Solar.' }, { s: 'judy', f: 'neutral', t: 'Nobody gives me stuff. Mostly people hand me broken stuff and ask if I can fix it. This is better.' } ],
        [ { s: 'judy', f: 'surprised', t: 'You got me {gift}?' }, { s: 'judy', f: 'happy', t: 'Kid. That’s sweet. I’m keeping it.' } ]
      ],
      meh: [
        [ { s: 'judy', f: 'neutral', t: 'Oh, hey. Thanks.' } ],
        [ { s: 'judy', f: 'neutral', t: 'Huh. Okay. Thanks. I’ll find somewhere for it on the bench.' }, { n: 'There was no room on the bench. There would be.' } ]
      ],
      no: [
        [ { s: 'judy', f: 'surprised', t: 'Oh. That’s... huh.' }, { s: 'judy', f: 'neutral', t: 'Not really my scene. But thanks, Solar. Seriously. Thought counts.' } ],
        [ { s: 'judy', f: 'neutral', t: 'I don’t think I know what to do with {gift}.' }, { s: 'judy', f: 'happy', t: 'I’ll figure something out. Or I’ll take it apart. That’s kind of my answer to everything.' } ]
      ]
    }
  };

  L.rohan = {
    loved: ['fountainpen', 'pocketwatch', 'camera'],
    liked: ['notebook', 'darjeeling', 'coffeebeans', 'poetry', 'citypop', 'valveradio'],
    no: ['romancemanga', 'gelpens', 'featherman'],
    say: {
      fountainpen: [
        { s: 'rohan', f: 'serious', t: 'Give it here.' },
        { n: 'He didn’t say thank you. He uncapped it and drew a line, a single long line on the back of his sketchbook, thick to thin to thick, and studied it.' },
        { s: 'rohan', f: 'neutral', t: 'Somebody repaired the nib properly. That’s rare. It’s not a G-pen. It’ll never be a G-pen.' },
        { s: 'rohan', f: 'happy', t: '...It’s very good. I’m keeping it. That’s all you’re getting.' }
      ],
      pocketwatch: [
        { s: 'rohan', f: 'neutral', t: 'There’s a date engraved in the lid.' },
        { n: 'He held it close to his eye, turning it under the light, and Solar could practically hear the reference pages filling up.' },
        { s: 'rohan', f: 'serious', t: 'Somebody wore this for years. The case is worn on one side. They were left-handed. They checked it often. Too often.' },
        { s: 'rohan', f: 'happy', t: 'This is a whole person in my hand. Thank you. I mean that.' }
      ],
      camera: [
        { s: 'rohan', f: 'neutral', t: 'A disposable.' },
        { s: 'rohan', f: 'serious', t: 'Most people think a camera is cheating. They’re idiots. A camera is just a very fast eye that doesn’t know what it’s looking at. I still have to know.' },
        { s: 'rohan', f: 'happy', t: 'Twenty-seven shots. I’ll waste none of them. Stand there. No, don’t pose. Posing ruins everything.' }
      ],
      romancemanga: [
        { s: 'rohan', f: 'serious', t: 'Shoujo.' },
        { n: 'He flipped through volume one so fast the pages fluttered, and stopped at a rain panel, and frowned at it.' },
        { s: 'rohan', f: 'neutral', t: 'The rain’s lazy. Screentone, not lines. I’ll read it, purely so I can be right about it. Thank you.' }
      ],
      liked: [
        [ { s: 'rohan', f: 'neutral', t: 'Hm. {gift}.' }, { s: 'rohan', f: 'neutral', t: 'That’s acceptable. More than acceptable. Thank you.' } ],
        [ { s: 'rohan', f: 'serious', t: 'You chose this. You didn’t just grab it.' }, { s: 'rohan', f: 'happy', t: 'I can tell. Good. I’ll use it.' } ]
      ],
      meh: [
        [ { s: 'rohan', f: 'neutral', t: 'Thank you. I suppose.' } ],
        [ { s: 'rohan', f: 'neutral', t: 'Hm. It’s a present.' }, { s: 'rohan', f: 'neutral', t: 'I’ll draw it, at least. Everything’s worth drawing once.' } ]
      ],
      no: [
        [ { s: 'rohan', f: 'serious', t: 'No.' }, { n: 'He looked at it for a long moment, and then at Solar, and his face did something that, on anyone else, would have been a wince of apology.' }, { s: 'rohan', f: 'neutral', t: 'That was rude. Thank you for the thought. The thought, I’ll keep.' } ],
        [ { s: 'rohan', f: 'neutral', t: 'This is for children.' }, { s: 'rohan', f: 'serious', t: 'Which is not an insult. Children have terrible taste and excellent instincts. I’ll find one who deserves it.' } ]
      ]
    }
  };

  L.widowmaker = {
    loved: ['earcuff', 'coffeebeans', 'citypop'],
    liked: ['poetry', 'darjeeling', 'shortbread', 'pocketwatch', 'sprayroses', 'liptint'],
    no: ['shibaplush', 'sweatbands'],
    say: {
      earcuff: [
        { s: 'widowmaker', f: 'surprised', t: '...Silver.' },
        { n: 'She clipped it on without looking, the way she did everything with her hands, and turned her head so it caught the light. Once. Precisely.' },
        { s: 'widowmaker', f: 'neutral', t: 'It is very thin. Very plain. It does not ask to be looked at.' },
        { s: 'widowmaker', f: 'happy', t: 'That is the best kind of beautiful, petite. You have good eyes. I will wear it.' }
      ],
      coffeebeans: [
        { s: 'widowmaker', f: 'neutral', t: 'Coffee. Real coffee. Not the brown water they sell here in cans.' },
        { n: 'She opened the bag and breathed it in and, for a second, her face forgot to be anything at all.' },
        { s: 'widowmaker', f: 'happy', t: 'Merci. I will drink it black and very slowly and I will not share it. Except with you. Perhaps.' }
      ],
      citypop: [
        { s: 'widowmaker', f: 'neutral', t: 'A record. Old. The sleeve is faded.' },
        { s: 'widowmaker', f: 'serious', t: 'Track three is worn pale. Someone played it over and over. They needed it.' },
        { s: 'widowmaker', f: 'happy', t: 'Then I will need it too. At night. Quietly. Thank you, petite.' }
      ],
      liked: [
        [ { s: 'widowmaker', f: 'neutral', t: '...For me?' }, { s: 'widowmaker', f: 'happy', t: 'Hm. Merci. It is not terrible.' }, { n: 'From her, that was close to gushing.' } ],
        [ { s: 'widowmaker', f: 'surprised', t: 'You bought {gift}. For me. On purpose.' }, { s: 'widowmaker', f: 'neutral', t: 'You are very strange, petite. Thank you.' } ]
      ],
      meh: [
        [ { s: 'widowmaker', f: 'neutral', t: 'Merci.' } ],
        [ { s: 'widowmaker', f: 'neutral', t: 'Hm. A gift. I will find somewhere to put it.' } ]
      ],
      no: [
        [ { s: 'widowmaker', f: 'serious', t: 'What is it.' }, { s: 'widowmaker', f: 'neutral', t: 'No. Do not explain. I see what it is.' }, { s: 'widowmaker', f: 'neutral', t: '...You meant well. That is the part I will keep. Give the rest to a child.' } ],
        [ { s: 'widowmaker', f: 'neutral', t: 'It is very loud, petite. I am not a loud thing.' }, { s: 'widowmaker', f: 'happy', t: 'But thank you. Truly.' } ]
      ]
    }
  };

  L.kat = {
    loved: ['dogjerky', 'tennisball', 'huntgame', 'liptint'],
    liked: ['consomme', 'shibaplush', 'grapesoda', 'camera', 'tokencup', 'earcuff', 'chocosticks'],
    no: ['taiyaki', 'musclerub'],
    say: {
      dogjerky: [
        { n: 'The bag made one small rustle. Both huskies turned their heads at the same time, like they were on the same string.' },
        { s: 'wanda', f: 'happy', t: 'Awoo! Awoo-woo!' },
        { s: 'kat', f: 'happy', t: 'Oh no. You did it. You rustled. Now you have to follow through.' },
        { s: 'ethan', f: 'happy', t: 'No salt. That’s the good stuff. Cosmo, look, she brought you the good stuff.' },
        { s: 'cosmo', f: 'serious', t: '...' },
        { n: 'Cosmo accepted one strip, with great dignity, as if it had been owed him for some time. Wanda ate three before anyone saw it happen.' }
      ],
      tennisball: [
        { n: 'Ethan squeezed it once. It squeaked. Wanda was across the path and on top of him before the squeak had finished.' },
        { s: 'ethan', f: 'surprised', t: 'Okay. Okay! She likes it. She likes it a normal amount.' },
        { s: 'kat', f: 'happy', t: 'That’s gone. That ball is gone. She’s going to take it on a tour of the whole riverside and bring it back in, like, an hour.' },
        { s: 'kat', f: 'happy', t: 'Thank you. Seriously. She’s going to sleep so good tonight.' }
      ],
      huntgame: [
        { s: 'ethan', f: 'surprised', t: 'Wait. Is that the hunting one? With the giant guy?' },
        { s: 'kat', f: 'serious', t: 'Ethan. Don’t. We have a backlog.' },
        { s: 'ethan', f: 'happy', t: 'It’s four player. That’s three friends. We have one. That’s—' },
        { s: 'kat', f: 'happy', t: 'Okay, fine, I’m healing. Nobody argue with me. Solar, you’re in. That’s not a question.' }
      ],
      liptint: [
        { s: 'kat', f: 'surprised', t: 'Oh, this is the cherry one. This is the cherry one!' },
        { n: 'She put it on using her phone camera as a mirror and Ethan held her coffee without being asked, which seemed to be a thing that happened a lot.' },
        { s: 'kat', f: 'happy', t: 'Ugh. Perfect. You get it. Ethan, look.' },
        { s: 'ethan', f: 'happy', t: 'You look great. You always look great. It’s very red.' }
      ],
      taiyaki: [
        { s: 'kat', f: 'happy', t: 'Ooh, taiyaki. Thank you!' },
        { n: 'Ethan took one, looked at it, and it looked back at him.' },
        { s: 'ethan', f: 'serious', t: 'It has a face.' },
        { s: 'kat', f: 'neutral', t: 'Oh brother. It’s bread. Give it here. I’ll eat yours. I always eat yours.' }
      ],
      musclerub: [
        { s: 'kat', f: 'happy', t: 'Oh, this is for Ethan. For the gym.' },
        { s: 'ethan', f: 'neutral', t: 'I’m going. I’m going this week. This is great, actually. It’s motivation.' },
        { s: 'kat', f: 'neutral', t: 'He’s going to have to go to the gym to need it. So this is going in a drawer. Forever. Thank you though, it’s very sweet.' }
      ],
      liked: [
        [ { s: 'kat', f: 'happy', t: 'Wait, you got us something? Stop. That’s so cute.' }, { s: 'ethan', f: 'happy', t: 'Thanks, Solar. That’s really nice of you.' } ],
        [ { s: 'ethan', f: 'surprised', t: 'Oh, sick. {gift}.' }, { s: 'kat', f: 'happy', t: 'See? She gets us. Thank you, love.' }, { n: 'Wanda tried to eat the wrapping. Nobody stopped her very hard.' } ]
      ],
      meh: [
        [ { s: 'kat', f: 'neutral', t: 'Aw, thank you. That’s sweet.' } ],
        [ { s: 'ethan', f: 'neutral', t: 'Oh, cool. Thanks.' }, { s: 'kat', f: 'neutral', t: 'We’ll find a place for it. The apartment is ninety percent dog bed, but we’ll find a place.' } ]
      ],
      no: [
        [ { s: 'kat', f: 'surprised', t: 'Oh. Oh nah.' }, { s: 'kat', f: 'happy', t: 'I mean, thank you. I love you. But that is so not us. We’re going to regift it to someone who’ll be really confused.' } ],
        [ { s: 'ethan', f: 'neutral', t: 'Huh. {gift}.' }, { s: 'kat', f: 'neutral', t: 'Ethan doesn’t know what to do with it. I don’t either. It’s okay. The thought counts. The thought is the whole thing.' } ]
      ]
    }
  };
})();
