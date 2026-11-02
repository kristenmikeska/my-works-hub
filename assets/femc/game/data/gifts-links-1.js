/* Gift preferences and reactions (2026-11-02), writer 1: akihiko, shinjiro, yukari, junpei, mitsuru, fuuka, aigis, ken, koromaru. Format: data/gifts.js header. */
(() => {
  const L = ((window.FEMC_GAME_GIFTS ||= {}).links ||= {});

  L.akihiko = {
    loved: ['handwraps', 'musclerub', 'yakisobapan'],
    liked: ['sweatbands', 'basketball', 'baseball', 'taiyaki', 'tennisball'],
    no: ['liptint', 'romancemanga', 'sewingtin'],
    say: {
      handwraps: [
        { s: 'akihiko', f: 'surprised', t: 'These are the good ones. Four and a half metres.' },
        { n: 'He had one unrolled and around his knuckles before she’d finished saying they were for him, thumb loop, wrist, between the fingers, without looking.' },
        { s: 'akihiko', f: 'happy', t: 'Mine are grey now. They used to be black. That’s how you know they did their job.' },
        { s: 'akihiko', f: 'happy', t: 'Thanks. Really.' }
      ],
      musclerub: [
        { s: 'akihiko', f: 'happy', t: 'Ha. You noticed I was out.' },
        { s: 'akihiko', f: 'neutral', t: 'Everybody else complains about the smell. Shinji says I come downstairs smelling like a cough drop.' },
        { s: 'akihiko', f: 'happy', t: 'This is the strong one, too. You actually looked.' }
      ],
      yakisobapan: [
        { s: 'akihiko', f: 'surprised', t: 'Wait. Where did you get this? It’s gone by the end of the first bell.' },
        { s: 'solar', t: 'It was the last one.' },
        { s: 'akihiko', f: 'happy', t: 'The last one. And you didn’t eat it on the way here.' },
        { n: 'He broke it in half, looked at the halves, and handed her the bigger one without comment.' },
        { s: 'akihiko', f: 'happy', t: 'Carbs. For later. Don’t argue.' }
      ],
      basketball: [
        { s: 'akihiko', f: 'happy', t: 'Outdoor rubber. Good. We’ll find a court and you can watch me be bad at something.' },
        { s: 'akihiko', f: 'neutral', t: 'Briefly. I’ll get good.' }
      ],
      liked: [
        [ { s: 'akihiko', f: 'happy', t: 'Huh. For me?' }, { s: 'akihiko', f: 'neutral', t: 'Thanks. I’ll use it. I use everything.' } ],
        [ { s: 'akihiko', f: 'neutral', t: 'You didn’t have to do that.' }, { s: 'akihiko', f: 'happy', t: 'I’m glad you did, though. That’s the right answer, right?' } ],
        [ { n: 'He turned {gift} over in his hands like he was checking the weight of it.' }, { s: 'akihiko', f: 'happy', t: 'Good. Yeah. This is good.' } ]
      ],
      meh: [
        [ { s: 'akihiko', f: 'neutral', t: 'Oh. Thanks. I’ll find somewhere to put it.' } ],
        [ { s: 'akihiko', f: 'neutral', t: 'Huh. Okay. Thanks, Solar.' }, { n: 'He set it carefully on the corner of the table, the way you set down a thing you don’t know the rules for.' } ]
      ],
      no: [
        [ { s: 'akihiko', f: 'surprised', t: '...Is this for me?' }, { s: 'akihiko', f: 'neutral', t: 'I mean. Thanks. I don’t really know what to do with it. I’ll figure it out.' } ],
        [ { s: 'akihiko', f: 'neutral', t: 'Thanks. That’s nice of you.' }, { n: 'He said it in the voice he used for teachers, and then seemed to hear himself, and scratched the back of his neck.' }, { s: 'akihiko', f: 'neutral', t: 'I’ll pass it to someone who’ll get more out of it. Is that okay?' } ]
      ]
    },
    special: {
      handwraps: [
        { s: 'akihiko', f: 'neutral', t: 'Give me your hands.' },
        { n: 'He unrolled the second wrap and did hers instead, slowly, so she could follow it. Thumb, wrist three times, across the back, between each finger, wrist again.' },
        { s: 'akihiko', f: 'neutral', t: 'Not too tight. If your fingers go cold, start over. Your hands are the only ones you get.' },
        { n: 'He pressed the velcro shut with his thumb and held on a second longer than the velcro needed.' },
        { s: 'akihiko', f: 'happy', t: 'There. Now you can’t say you don’t know how.' },
        { stat: { proficiency: 1 } }
      ],
      musclerub: [
        { later: { delay: 1, msgs: [
          { from: 'akihiko', t: 'used the rub after the run. my eyes are watering. it\'s great' },
          { from: 'akihiko', t: 'koro came in and sneezed and left' },
          { from: 'solar', t: 'you\'re welcome' },
          { from: 'akihiko', t: 'five tomorrow? i\'ll be loose for once. you won\'t keep up' }
        ] } }
      ]
    }
  };

  L.shinjiro = {
    loved: ['castiron', 'dogjerky', 'handcream'],
    liked: ['coffeebeans', 'taiyaki', 'fruitbasket', 'shibaplush', 'daifuku'],
    no: ['consomme', 'grapesoda', 'liptint'],
    say: {
      castiron: [
        { n: 'He took the pan by the handle, felt the weight drop into his wrist, and didn’t say anything for a second.' },
        { s: 'shinjiro', f: 'surprised', t: '...Where’d you find this.' },
        { s: 'shinjiro', f: 'neutral', t: 'Somebody used this right. Look at the black on it. That’s years. You don’t buy that, you earn it.' },
        { s: 'shinjiro', f: 'happy', t: 'Tch. Now I gotta cook you something in it. That’s how it works.' }
      ],
      dogjerky: [
        { s: 'shinjiro', f: 'neutral', t: 'That’s not for me.' },
        { s: 'solar', t: 'It’s for you to give out.' },
        { n: 'He read the back of the bag. No salt. He read it again.' },
        { s: 'shinjiro', f: 'neutral', t: '...Yeah. Okay. This one’s fine. The cheap ones are garbage.' },
        { n: 'It went into his coat pocket, the inside one, like it had always had a place there.' }
      ],
      handcream: [
        { s: 'shinjiro', f: 'surprised', t: 'The hell is this.' },
        { s: 'solar', t: 'Your knuckles are cracked. From the washing up.' },
        { s: 'shinjiro', f: 'neutral', t: '...You’re looking at my hands now.' },
        { n: 'He turned the tube over, uncapped it, smelled it, made a face at the roses, and put it in his pocket anyway.' },
        { s: 'shinjiro', f: 'neutral', t: 'Don’t tell Aki.' }
      ],
      liked: [
        [ { s: 'shinjiro', f: 'neutral', t: 'Hm. Not bad.' }, { s: 'shinjiro', f: 'neutral', t: '...Thanks.' } ],
        [ { n: 'He looked at {gift}, then at her, like he was checking it for a catch.' }, { s: 'shinjiro', f: 'neutral', t: 'Yeah. Okay. I’ll use it.' } ],
        [ { s: 'shinjiro', f: 'happy', t: 'You keep doing this. Bringing stuff.' }, { s: 'shinjiro', f: 'neutral', t: 'Didn’t say stop.' } ]
      ],
      meh: [
        [ { s: 'shinjiro', f: 'neutral', t: 'Huh. Thanks.' } ],
        [ { s: 'shinjiro', f: 'neutral', t: '...You didn’t have to get me anything.' }, { n: 'He kept it, though.' } ]
      ],
      consomme: [
        { s: 'shinjiro', f: 'neutral', t: 'I can smell the powder through the bag.' },
        { s: 'shinjiro', f: 'neutral', t: 'Give ’em to Iori. He’ll cry. Next time you want chips, I’ll fry you potatoes. Real ones.' }
      ],
      no: [
        [ { s: 'shinjiro', f: 'neutral', t: '...Huh.' }, { s: 'shinjiro', f: 'neutral', t: 'Not really my thing. Don’t look like that. It’s the thought. Or whatever.' } ],
        [ { s: 'shinjiro', f: 'surprised', t: 'For me?' }, { s: 'shinjiro', f: 'neutral', t: 'Okay. I’ll find somebody it’s for. Thanks for thinking of me, I guess.' } ]
      ]
    },
    special: {
      castiron: [
        { gift: { from: 'Shinjiro', keepsake: 'A Card in Shinjiro’s Handwriting', note: 'An index card, slightly greasy: how to season a pan, step by step, ending “don’t use soap on it. i will know.”' } }
      ],
      dogjerky: [
        { later: { delay: 1, msgs: [
          { from: 'shinjiro', t: 'shrine dog liked it' },
          { from: 'shinjiro', t: 'two strays too. one of them followed me to the station' },
          { from: 'solar', t: 'did you give him more' },
          { from: 'shinjiro', t: 'no' },
          { from: 'shinjiro', t: 'one more' }
        ] } }
      ]
    }
  };

  L.yukari = {
    loved: ['sprayroses', 'liptint', 'daifuku'],
    liked: ['gelpens', 'handcream', 'bathsalts', 'ribbon', 'camera', 'shibaplush'],
    no: ['musclerub', 'castiron', 'featherman'],
    say: {
      sprayroses: [
        { s: 'yukari', f: 'surprised', t: 'Wait. Flowers? For me?' },
        { n: 'She put her face right into them, which you are apparently not supposed to do with roses, and came up laughing.' },
        { s: 'yukari', f: 'blushing', t: 'Okay, these are so pink. You know that, right? You did that on purpose.' },
        { s: 'yukari', f: 'neutral', t: 'Nobody gives you flowers unless you’re in a hospital or you won something. This is so much better than both.' }
      ],
      liptint: [
        { s: 'yukari', f: 'surprised', t: 'No way. This is the cherry one. It’s been sold out for like a month.' },
        { s: 'yukari', f: 'neutral', t: 'I tried it on in the store twice and put it back twice. I was being responsible.' },
        { s: 'yukari', f: 'blushing', t: 'You were not supposed to see that. Thank you. Seriously.' }
      ],
      daifuku: [
        { s: 'yukari', f: 'surprised', t: 'Is that the strawberry box from the station?' },
        { s: 'yukari', f: 'neutral', t: 'Okay, I’m eating one right now. You get one. Junpei does not get one. He doesn’t even know these exist and we’re keeping it that way.' },
        { n: 'She bit into it and closed her eyes.' },
        { s: 'yukari', f: 'blushing', t: '...Okay. You’re my favorite person today.' }
      ],
      gelpens: [
        { s: 'yukari', f: 'neutral', t: 'Oh, there’s like four pinks in here. And one’s called Moody Lake? Who named these?' },
        { s: 'yukari', f: 'blushing', t: 'I’m using them. I’m using all of them. Don’t tell anyone I said thanks for gel pens.' }
      ],
      liked: [
        [ { s: 'yukari', f: 'surprised', t: 'Oh, cute! For me?' }, { s: 'yukari', f: 'neutral', t: 'Thanks, Sol. Seriously. You’re good at this.' } ],
        [ { s: 'yukari', f: 'neutral', t: 'Okay, I like this. I wasn’t going to say anything, but I like it.' } ],
        [ { s: 'yukari', f: 'blushing', t: 'You didn’t have to. But I’m keeping it. Obviously.' } ]
      ],
      meh: [
        [ { s: 'yukari', f: 'neutral', t: 'Oh. Huh. Thanks! That’s really sweet.' } ],
        [ { s: 'yukari', f: 'neutral', t: 'Aw, you got me something.' }, { n: 'She smiled at it like it was a nice stranger.' } ]
      ],
      no: [
        [ { s: 'yukari', f: 'surprised', t: '...Oh.' }, { s: 'yukari', f: 'neutral', t: 'Okay, I love that you thought of me. I’m just going to be honest, it’s not really me. Is that awful? That’s awful.' } ],
        [ { s: 'yukari', f: 'neutral', t: 'Um. Was this meant for Akihiko-senpai?' }, { s: 'yukari', f: 'neutral', t: 'No, no, thank you! I’ll find it a good home. A really good home.' } ]
      ]
    },
    special: {
      liptint: [
        { s: 'yukari', f: 'neutral', t: 'Hold on. Don’t move.' },
        { n: 'She opened the little bottle, dabbed it on with one finger, pressed her lips together, and turned to her phone’s camera, then away from it, then to Solar.' },
        { s: 'yukari', f: 'neutral', t: 'Okay. Honestly. Popsicle or clown?' },
        { s: 'solar', t: 'Popsicle.' },
        { s: 'yukari', f: 'blushing', t: 'Good answer. Now you.' },
        { n: 'She did Solar’s too before she could argue, very carefully, tongue between her teeth, and then held up the phone so they could both look.' },
        { s: 'yukari', f: 'neutral', t: 'See? We match. That’s the rule now.' },
        { stat: { charm: 1 } }
      ],
      sprayroses: [
        { later: { delay: 1, msgs: [
          { from: 'yukari', t: 'update: the roses are in my pencil cup bc i don\'t own a vase' },
          { from: 'yukari', t: 'the pencils are on the floor. this is fine' },
          { from: 'solar', t: 'they look good there' },
          { from: 'yukari', t: 'they really do. ok i\'m going to stare at them and not do homework. thank you!!' }
        ] } }
      ]
    }
  };

  L.junpei = {
    loved: ['consomme', 'baseball', 'huntgame', 'tokencup'],
    liked: ['grapesoda', 'chocosticks', 'yakisobapan', 'romancemanga', 'camera', 'sweatbands'],
    no: ['darjeeling', 'bathsalts', 'sewingtin', 'poetry'],
    say: {
      consomme: [
        { s: 'junpei', f: 'surprised', t: 'Is that... the good brand? The consommé?' },
        { s: 'junpei', f: 'happy', t: 'Solar. Solar. You get me. You actually get me.' },
        { n: 'He had the bag open before he’d finished saying it, and held it out to her first, which seemed to cost him something.' },
        { s: 'junpei', f: 'happy', t: 'Take a big one. No. Bigger. Okay, that’s too big.' }
      ],
      baseball: [
        { n: 'He took the ball in his right hand and his fingers found the stitches on their own.' },
        { s: 'junpei', f: 'surprised', t: 'Oh man. This is a real one. Leather. You can tell by the stitching.' },
        { s: 'junpei', f: 'neutral', t: 'Feels heavier than I remember. Or my hands got dumber. One of those.' },
        { s: 'junpei', f: 'happy', t: 'Thanks. Like. Actually. Thanks.' }
      ],
      huntgame: [
        { s: 'junpei', f: 'surprised', t: 'NO. Shut up. That’s sold out everywhere.' },
        { s: 'junpei', f: 'happy', t: 'This is the one where you all fight the giant thing together and somebody always forgets to heal. I’m gonna be the one who forgets to heal.' },
        { s: 'junpei', f: 'happy', t: 'You’re playing with me. That’s not a question. That’s the deal.' }
      ],
      tokencup: [
        { n: 'He shook the cup next to his ear like a maraca.' },
        { s: 'junpei', f: 'happy', t: 'That’s the sound of me finally beating the shooting game. Two hundred tokens. You know what I can do with two hundred tokens?' },
        { s: 'junpei', f: 'flustered', t: 'Okay, realistically, lose most of them. But some of them, Solar. Some of them.' }
      ],
      romancemanga: [
        { s: 'junpei', f: 'flustered', t: 'What. Why would you think. I don’t read this.' },
        { s: 'junpei', f: 'flustered', t: '...Is this the one with the rain? Does the guy ever say it? Don’t tell me. I’m just asking. For a friend.' }
      ],
      liked: [
        [ { s: 'junpei', f: 'happy', t: 'Ayy, for me? Nice!' }, { s: 'junpei', f: 'happy', t: 'You’re seriously the best. I’m saying it out loud so it counts.' } ],
        [ { s: 'junpei', f: 'surprised', t: 'Wait, you just had this on you?' }, { s: 'junpei', f: 'happy', t: 'Okay. Okay! Thank you. I owe you. I always pay back. With interest.' } ],
        [ { s: 'junpei', f: 'happy', t: 'Dude. {gift}? Yes.' } ]
      ],
      meh: [
        [ { s: 'junpei', f: 'neutral', t: 'Oh, hey, thanks!' }, { s: 'junpei', f: 'neutral', t: 'I’m gonna figure out what it does and then I’m gonna love it.' } ],
        [ { s: 'junpei', f: 'neutral', t: 'Huh. Cool. Thanks, Solar.' } ]
      ],
      no: [
        [ { s: 'junpei', f: 'surprised', t: 'Oh. Uh.' }, { s: 'junpei', f: 'flustered', t: 'Thanks! That’s. Yeah. Is this a Mitsuru-senpai thing? I feel like this is a Mitsuru-senpai thing.' } ],
        [ { s: 'junpei', f: 'flustered', t: 'Okay, I’m gonna be real with you, I don’t know what this is for.' }, { s: 'junpei', f: 'happy', t: 'But you got it for me, so it’s going on the shelf. The good shelf. Next to the trophy. It’s a small trophy.' } ]
      ]
    },
    special: {
      baseball: [
        { s: 'junpei', f: 'neutral', t: 'Here. Hold it like this.' },
        { n: 'He put the ball in her hand and moved her fingers across the stitches, two on top, thumb underneath, very serious, like a doctor.' },
        { s: 'junpei', f: 'neutral', t: 'That’s a four-seam. Goes straight. Well. It goes straight when I throw it.' },
        { s: 'junpei', f: 'happy', t: 'You throw like you’re mad at it. That’s good. That’s half of it.' },
        { n: 'He took the ball back and tossed it up and caught it without looking, and for a second he looked about twelve and very pleased.' },
        { s: 'junpei', f: 'happy', t: 'Okay. You’re on my team. That’s just a fact now.' }
      ],
      huntgame: [
        { later: { delay: 1, msgs: [
          { from: 'junpei', t: 'its 2am. i have been fighting the same lizard for 3 hours' },
          { from: 'junpei', t: 'the lizard is winning' },
          { from: 'solar', t: 'go to sleep' },
          { from: 'junpei', t: 'cant. lizard. need backup. tomorrow?? lounge??' },
          { from: 'junpei', t: 'also thanks again. for real. best thing anybody got me this year' }
        ] } }
      ]
    }
  };

  L.mitsuru = {
    loved: ['darjeeling', 'fountainpen', 'grapesoda'],
    liked: ['pocketwatch', 'shortbread', 'notebook', 'citypop', 'coffeebeans', 'tokencup'],
    no: ['sweatbands', 'consomme', 'gelpens'],
    say: {
      darjeeling: [
        { s: 'mitsuru', f: 'surprised', t: 'First flush. They only had it for a week.' },
        { n: 'She lifted the lid of the tin and breathed in, and her shoulders came down a centimetre.' },
        { s: 'mitsuru', f: 'happy', t: 'This is very thoughtful. I’d be ungracious to pretend it isn’t exactly right.' }
      ],
      fountainpen: [
        { n: 'She uncapped it, turned it to the light, and looked at the nib the way some people look at a knife.' },
        { s: 'mitsuru', f: 'surprised', t: 'Gold nib, and someone has repaired it with care. You can feel it.' },
        { s: 'mitsuru', f: 'neutral', t: 'I sign a great many things. Very few of them deserve this.' },
        { s: 'mitsuru', f: 'happy', t: 'Thank you, Solar. I’ll save it for the ones that matter.' }
      ],
      grapesoda: [
        { s: 'mitsuru', f: 'surprised', t: 'Six cans. Of... grape?' },
        { s: 'solar', t: 'It tastes like being eleven.' },
        { s: 'mitsuru', f: 'neutral', t: 'I don’t believe I tasted anything like this at eleven. That’s rather the point, isn’t it.' },
        { n: 'She held a can up and read the ingredients with real interest, all the way to the end.' },
        { s: 'mitsuru', f: 'happy', t: 'It goes on the list. Thank you. I mean that.' }
      ],
      liked: [
        [ { s: 'mitsuru', f: 'neutral', t: 'For me? That’s kind of you.' }, { s: 'mitsuru', f: 'happy', t: 'I’ll take good care of it.' } ],
        [ { s: 'mitsuru', f: 'surprised', t: 'You chose {gift} for me.' }, { s: 'mitsuru', f: 'happy', t: 'It’s a good choice. I find I’m pleased.' } ],
        [ { s: 'mitsuru', f: 'neutral', t: 'Thank you. You have a talent for this.' } ]
      ],
      meh: [
        [ { s: 'mitsuru', f: 'neutral', t: 'How kind. Thank you, Solar.' } ],
        [ { s: 'mitsuru', f: 'neutral', t: 'A gift. Thank you.' }, { n: 'She held it with both hands, which was the polite way, and looked at it as if it might later be explained to her.' } ]
      ],
      no: [
        [ { s: 'mitsuru', f: 'surprised', t: 'Ah.' }, { s: 'mitsuru', f: 'neutral', t: 'I confess I’m not sure what I’d do with this. But I’m touched that you thought of me. Truly.' } ],
        [ { s: 'mitsuru', f: 'neutral', t: 'Thank you. I suspect Iori would make better use of it than I would.' }, { s: 'mitsuru', f: 'neutral', t: 'That isn’t a criticism. Only an honest assessment.' } ]
      ]
    },
    special: {
      darjeeling: [
        { s: 'mitsuru', f: 'neutral', t: 'Sit down. No, stay. It’s best fresh, and I won’t drink it alone.' },
        { n: 'She heated the water and let it stand, checked it once with the back of her hand against the kettle, and measured the leaves in a spoon she leveled with her finger.' },
        { s: 'mitsuru', f: 'neutral', t: 'Three minutes. Not four. Four and it turns.' },
        { n: 'They waited the three minutes without talking. She poured, the colour of pale honey, and passed Solar the first cup.' },
        { s: 'mitsuru', f: 'happy', t: 'There. That’s what it’s meant to taste like. Now you know.' }
      ],
      grapesoda: [
        { gift: { from: 'Mitsuru', keepsake: 'A Page from Mitsuru’s List', note: 'A planner page, torn neatly along the perforation: “Grape soda (Solar). Tastes like being eleven. Confirmed.” Ticked, in fountain pen.' } }
      ]
    }
  };

  L.fuuka = {
    loved: ['valveradio', 'pencil', 'notebook'],
    liked: ['succulent', 'sewingtin', 'mixcd', 'shortbread', 'pudding', 'teddy'],
    no: ['handwraps', 'basketball', 'musclerub'],
    say: {
      valveradio: [
        { s: 'fuuka', f: 'surprised', t: 'Oh. Oh, senpai. It has valves. Real ones.' },
        { n: 'She had it turned around to look at the back before she remembered to say thank you, and then said it three times in a row to make up for it.' },
        { s: 'fuuka', f: 'happy', t: 'It hums. Do you hear it? That’s the transformer. It’s fine. It’s just warming up. Like a person.' }
      ],
      pencil: [
        { s: 'fuuka', f: 'surprised', t: 'It’s a metal barrel. Senpai, this is a drafting pencil.' },
        { n: 'She clicked it once and watched the lead come out, exactly half a millimetre, and smiled at it.' },
        { s: 'fuuka', f: 'happy', t: 'I always borrow one from the tech room and then I have to give it back. Now I don’t have to give it back.' }
      ],
      notebook: [
        { s: 'fuuka', f: 'surprised', t: 'It’s leather. And there’s a ribbon.' },
        { s: 'fuuka', f: 'neutral', t: 'I keep my notes on the backs of handouts. They get mixed up. Last week a recipe ended up in my chemistry homework.' },
        { s: 'fuuka', f: 'happy', t: 'This is for the important ones. I’ll write neatly. I’ll try to write neatly.' }
      ],
      liked: [
        [ { s: 'fuuka', f: 'surprised', t: 'For me? Senpai, you didn’t have to.' }, { s: 'fuuka', f: 'happy', t: 'Thank you. I really like it.' } ],
        [ { s: 'fuuka', f: 'happy', t: 'Oh, {gift}. That’s so nice.' }, { s: 'fuuka', f: 'neutral', t: 'I’m going to keep it somewhere I can see it.' } ],
        [ { s: 'fuuka', f: 'neutral', t: 'Um. Thank you. I don’t know what else to say, so I’ll just say thank you again. Thank you.' } ]
      ],
      meh: [
        [ { s: 'fuuka', f: 'neutral', t: 'Oh, thank you, senpai. That’s kind of you.' } ],
        [ { s: 'fuuka', f: 'neutral', t: 'Thank you!' }, { n: 'She looked at it carefully from several sides, like it might have a back panel.' } ]
      ],
      no: [
        [ { s: 'fuuka', f: 'surprised', t: 'Oh.' }, { s: 'fuuka', f: 'neutral', t: 'Thank you. I’m sorry. I don’t think I’d know how to use it properly. I don’t want to waste it.' } ],
        [ { s: 'fuuka', f: 'neutral', t: 'That’s really nice of you. Um. Do you think Akihiko-senpai might like it more? I don’t want to say that. I’m sorry I said that.' } ]
      ]
    },
    special: {
      valveradio: [
        { s: 'fuuka', f: 'neutral', t: 'Can I. Just for a second.' },
        { n: 'She plugged it in and turned the dial very slowly, all the way across, past static, past half a voice, past a man reading the shipping forecast.' },
        { n: 'Somewhere near the end of the band she stopped. Piano, a long way off, coming and going like it was on the other side of the bay.' },
        { s: 'fuuka', f: 'happy', t: 'There. You have to go slowly. Everything’s in there if you go slowly.' },
        { n: 'They listened to the whole song. The radio hummed under it, warm and orange, and neither of them touched the dial.' },
        { stat: { knowledge: 1 } }
      ],
      notebook: [
        { later: { delay: 1, msgs: [
          { from: 'fuuka', t: 'senpai, i wrote the first page in the notebook!!' },
          { from: 'fuuka', t: 'it says "attempt 1" and then nothing yet because i was too nervous to ruin the second page' },
          { from: 'solar', t: 'you can\'t ruin it. it\'s a notebook' },
          { from: 'fuuka', t: 'okay. okay, you\'re right. attempt 1: tamagoyaki. i\'ll tell you how it goes. thank you again :)' }
        ] } }
      ]
    }
  };

  L.aigis = {
    loved: ['pocketwatch', 'camera', 'snowglobe'],
    liked: ['shibaplush', 'succulent', 'ribbon', 'sunflowers', 'omamori', 'foxstrap'],
    no: ['bathsalts', 'pudding', 'chocosticks'],
    say: {
      pocketwatch: [
        { s: 'aigis', f: 'surprised', t: 'A mechanical timepiece. It is running.' },
        { n: 'She held it to the side of her head and listened, perfectly still.' },
        { s: 'aigis', f: 'neutral', t: 'It is approximately fifty seconds slow. It does not know that. It is keeping time anyway.' },
        { s: 'aigis', f: 'happy', t: 'I like it very much. I did not know that I would. Thank you.' }
      ],
      camera: [
        { s: 'aigis', f: 'neutral', t: 'A camera with film. The images are not visible until they are developed.' },
        { s: 'aigis', f: 'surprised', t: 'So one takes the picture without knowing whether it worked.' },
        { s: 'aigis', f: 'happy', t: 'That is very human. I would like to try it.' }
      ],
      snowglobe: [
        { n: 'She turned it over, very carefully, and then the right way up, and watched it snow on the little bay.' },
        { s: 'aigis', f: 'neutral', t: 'It does not snow on the sea here. The model is inaccurate.' },
        { s: 'aigis', f: 'happy', t: 'I prefer it this way. I will keep it where the light reaches it.' }
      ],
      liked: [
        [ { s: 'aigis', f: 'neutral', t: 'This is for me?' }, { s: 'aigis', f: 'happy', t: 'Thank you, Solar-san. I have logged it as something I like.' } ],
        [ { s: 'aigis', f: 'surprised', t: 'You selected {gift} with me in mind.' }, { s: 'aigis', f: 'happy', t: 'That is pleasing. Both the object and the selecting.' } ],
        [ { s: 'aigis', f: 'neutral', t: 'I will take good care of it. I am very good at taking care of things.' } ]
      ],
      meh: [
        [ { s: 'aigis', f: 'neutral', t: 'Thank you. I will find an appropriate place for it.' } ],
        [ { s: 'aigis', f: 'neutral', t: 'A gift. Thank you, Solar-san.' }, { n: 'She looked at it for a long time, as if waiting for it to tell her what it was for.' } ]
      ],
      no: [
        [ { s: 'aigis', f: 'neutral', t: 'Thank you, Solar-san. I do not eat.' }, { s: 'aigis', f: 'neutral', t: 'I will give it to Junpei-san. He will eat it in under a minute. I will time him. That is a use.' } ],
        [ { s: 'aigis', f: 'surprised', t: 'This is not compatible with me.' }, { s: 'aigis', f: 'neutral', t: 'That is not a complaint. I am glad you thought of me. That part is compatible.' } ]
      ]
    },
    special: {
      camera: [
        { s: 'aigis', f: 'neutral', t: 'Solar-san. Please stay where you are.' },
        { n: 'She held the camera in both hands, a little too far from her face, and wound the wheel with her thumb until it clicked.' },
        { s: 'aigis', f: 'neutral', t: 'I do not know if this will be a good image. I am choosing to take it anyway.' },
        { n: 'The flash went. Solar blinked. Aigis lowered the camera and looked at the back of it, where there was no screen, for quite a while.' },
        { s: 'aigis', f: 'happy', t: 'Twenty-six remaining. The first one was you. I wanted that on record.' }
      ],
      pocketwatch: [
        { later: { delay: 0, msgs: [
          { from: 'aigis', t: 'Solar-san. It is 00:00:41. The watch says 23:59:51.' },
          { from: 'aigis', t: 'I considered correcting it. I have decided not to.' },
          { from: 'solar', t: 'why not?' },
          { from: 'aigis', t: 'It has its own time. I find I would rather know it than change it. Goodnight.' }
        ] } }
      ]
    }
  };

  L.ken = {
    loved: ['featherman', 'pencil', 'chocosticks'],
    liked: ['tennisball', 'shibaplush', 'grapesoda', 'pudding', 'snowglobe', 'sweatbands', 'basketball'],
    no: ['coffeebeans', 'romancemanga', 'teddy'],
    say: {
      featherman: [
        { s: 'ken', f: 'neutral', t: 'That’s Red Hawk. That’s the finishing pose. From the season finale.' },
        { n: 'He held the box very still, in both hands, and read the back of it twice.' },
        { s: 'ken', f: 'happy', t: 'The cape has a wire in it. So it stays up. Like he’s moving.' },
        { s: 'ken', f: 'neutral', t: 'I’m too old for this. I know I’m too old for this. Thank you very much, Solar-san.' }
      ],
      pencil: [
        { s: 'ken', f: 'neutral', t: 'It’s metal. It’s heavy, in a good way.' },
        { s: 'ken', f: 'happy', t: 'The other boys in my class have the plastic ones with characters on. This one looks like it belongs to an architect.' },
        { s: 'ken', f: 'neutral', t: 'I’ll do my homework with it. All of it. Even the kanji.' }
      ],
      chocosticks: [
        { s: 'ken', f: 'happy', t: 'The family pack.' },
        { s: 'ken', f: 'neutral', t: 'That’s eight sleeves. That’s enough for everyone in the dorm, if Junpei-san only takes one.' },
        { s: 'ken', f: 'happy', t: 'He won’t only take one. I’ll hide two. Thank you, Solar-san.' }
      ],
      teddy: [
        { s: 'ken', f: 'neutral', t: 'Oh. A bear.' },
        { s: 'ken', f: 'serious', t: 'Thank you. I’m not really... I don’t have stuffed animals. I’m in fifth grade. But it’s very soft. I’ll give it to someone who needs it. Is that all right?' }
      ],
      liked: [
        [ { s: 'ken', f: 'happy', t: 'For me? Thank you, Solar-san.' }, { s: 'ken', f: 'neutral', t: 'I’ll take good care of it. I’m good at that.' } ],
        [ { s: 'ken', f: 'neutral', t: 'You didn’t have to get me anything.' }, { s: 'ken', f: 'happy', t: 'But I’m glad you did. That’s the polite thing to say, and it’s also true.' } ],
        [ { s: 'ken', f: 'happy', t: 'Is that {gift}? For me?' }, { s: 'ken', f: 'neutral', t: 'I’m going to show Koromaru when I get back. He’ll pretend he isn’t interested. He’ll be interested.' } ]
      ],
      meh: [
        [ { s: 'ken', f: 'neutral', t: 'Thank you very much, Solar-san.' } ],
        [ { s: 'ken', f: 'neutral', t: 'Oh. Thank you.' }, { n: 'He bowed, slightly too deeply, the way he did when he wasn’t sure what else was expected.' } ]
      ],
      no: [
        [ { s: 'ken', f: 'serious', t: 'Thank you.' }, { s: 'ken', f: 'neutral', t: 'I think this might be a grown-up thing. I’ll keep it until I understand it. That might be a while.' } ],
        [ { s: 'ken', f: 'neutral', t: 'Thank you, Solar-san. I don’t think it’s for me.' }, { s: 'ken', f: 'neutral', t: 'I’m saying so because you’d want to know. Not to be rude.' } ]
      ]
    },
    special: {
      featherman: [
        { s: 'ken', f: 'serious', t: 'Could you not tell anyone. That it’s the one I wanted.' },
        { s: 'solar', t: 'I won’t.' },
        { n: 'He nodded, very grave, and then opened the box anyway, right there, because he couldn’t not. He stood Red Hawk up on the nearest flat thing and bent the cape a little, then a little more.' },
        { s: 'ken', f: 'happy', t: 'There. Now he’s moving.' },
        { n: 'He looked at it for a long moment with his hands in his lap, and for once he didn’t look older than he was.' },
        { s: 'ken', f: 'neutral', t: 'Sunday at seven-thirty. If you’re up. Volume on three.' },
        { stat: { kindness: 1 } }
      ],
      pencil: [
        { later: { delay: 1, msgs: [
          { from: 'ken', t: 'Good evening, Solar-san. I finished all my homework with the pencil.' },
          { from: 'ken', t: 'The teacher said my handwriting has improved. I told her it was the pencil. She said it was not the pencil.' },
          { from: 'solar', t: 'it was a little bit the pencil' },
          { from: 'ken', t: 'That’s what I think too. Good night.' }
        ] } }
      ]
    }
  };

  L.koromaru = {
    loved: ['dogjerky', 'tennisball', 'shibaplush'],
    liked: ['teddy', 'baseball', 'sweatbands', 'basketball', 'fruitbasket'],
    no: ['musclerub', 'bathsalts'],
    say: {
      dogjerky: [
        { n: 'The bag rustled once. Koromaru was already sitting, perfectly, at her feet, before she’d got it out of her bag.' },
        { s: 'koromaru', f: 'happy', t: 'Arf!' },
        { n: 'She gave him one strip. He took it so gently he barely touched her fingers, then lay down to eat it slowly, like it deserved the time.' }
      ],
      tennisball: [
        { n: 'She squeezed it. It squeaked. Every part of Koromaru stopped at once.' },
        { n: 'His ears came up. His head tilted, all the way over. She squeezed it again and his tail started going so hard his back half went with it.' },
        { s: 'koromaru', f: 'happy', t: 'Arf! Arf!' }
      ],
      shibaplush: [
        { n: 'She set the plush down. Koromaru walked around it once, nose low, the way he checked the edges of a room.' },
        { n: 'Then he lay down with his chin on its head, like it had been his idea, and looked up at her.' },
        { s: 'koromaru', f: 'happy', t: 'Wuff.' }
      ],
      liked: [
        [ { n: 'Koromaru sniffed {gift} thoroughly, then pushed it once with his nose, which seemed to mean yes.' }, { s: 'koromaru', f: 'happy', t: 'Wuff.' } ],
        [ { s: 'koromaru', f: 'happy', t: 'Arf!' }, { n: 'His tail went twice against the floor. He picked it up in his mouth and carried it a little way off to keep it.' } ]
      ],
      meh: [
        [ { n: 'Koromaru sniffed it politely, looked up at her, and sat down to wait for whatever came next.' } ],
        [ { s: 'koromaru', f: 'neutral', t: 'Wuff.' }, { n: 'He gave her hand a single lick, which was for her, not the present.' } ]
      ],
      no: [
        [ { n: 'Koromaru sniffed it, sneezed hard, and backed up two steps.' }, { s: 'koromaru', f: 'sad', t: '...Whine.' }, { n: 'Then he came round the other side of her, away from it, and leaned on her leg, so she’d know it wasn’t personal.' } ],
        [ { n: 'He put his nose near it and turned his whole head away, slowly, with great dignity.' }, { s: 'koromaru', f: 'serious', t: 'Wuff.' } ]
      ]
    },
    special: {
      tennisball: [
        { n: 'She rolled it. He was on it before it stopped, and brought it back, and dropped it exactly at the toe of her shoe, wet, and stepped back.' },
        { n: 'She rolled it again. And again. On the sixth time he didn’t drop it. He stood holding it, tail going, eyes on her, waiting to see what she’d do.' },
        { s: 'solar', t: 'You want me to chase you.' },
        { s: 'koromaru', f: 'happy', t: 'Arf!' },
        { n: 'She chased him. Not far, and not for long, but by the end she was out of breath and laughing and he was lying on his back with the ball between his front paws, very pleased with the result.' }
      ],
      dogjerky: [
        { n: 'When he’d finished, he got up and trotted off. A minute later he came back with something in his mouth and put it down in front of her, very carefully, and sat.' },
        { n: 'It was a stick. A straight one, about the length of her forearm, with the bark on. Clearly the best one he knew of.' },
        { gift: { from: 'Koromaru', keepsake: 'A Very Good Stick', note: 'Straight, bark on, about a forearm long. Koromaru chose it personally and would like you to keep it.' } }
      ]
    }
  };
})();
