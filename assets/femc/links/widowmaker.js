/* Widowmaker · XIII Death. Arrives 10/4 (the night after Shinjiro). Friendship only. Format notes are at the top of akihiko.js.
   Rank 1 branches on whether Solar already met her with Kiriko (Kiriko rank 8, Moonlight Bridge).
   Rank 6 is the "princesse" slip: an echo of the boy who mains her in another world. Kept quiet on purpose. */
FemcSocial.define({
  id: 'widowmaker', name: 'Widowmaker', short: 'Widowmaker', arcana: 'Death', numeral: 'XIII', from: 'Overwatch',
  arrives: '10/4',
  home: { place: 'Moonlight Bridge', slot: 1, days: [0, 2, 4, 6], hint: 'Evenings on Sundays, Tuesdays, Thursdays and Saturdays, somewhere up in the cables of Moonlight Bridge.' },
  romance: false,
  cast: { kiriko: 'Kiriko', mercy: 'Mercy' },
  threads: { sniper: { name: 'support & sniper', members: ['widowmaker', 'kiriko'] } },
  texts: [
    { id: 'eliz-10-4', thread: 'elizabeth', rank: 0, before: 99, days: 0, date: '10/4', slot: 1, msgs: [
      { from: 'elizabeth', t: 'I am sorry, Solar. I know what tonight has cost you.' },
      { from: 'elizabeth', t: 'Death has drawn one more guest through. A woman who stands very high on Moonlight Bridge and says she feels nothing.' },
      { from: 'elizabeth', t: 'I do not believe her. I think she simply has not been asked.' }
    ] },
    { id: 'widow-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'The coffee was acceptable.' },
      { from: 'widowmaker', t: 'Do not bring it every time. I will begin to expect it.' }
    ], reply: [
      { t: "I'm bringing it every time.", notes: 3, then: [{ from: 'widowmaker', t: '...Black. No sugar.' }] },
      { t: 'How did you get my number?', notes: 2, then: [{ from: 'widowmaker', t: 'I find people. It is my profession.' }] }
    ] },
    { id: 'sniper-3', thread: 'sniper', rank: 3, unlock: { links: { kiriko: 8 } }, days: 1, msgs: [
      { sys: 'kiriko created "support & sniper"' },
      { from: 'kiriko', t: 'ok. new group. because apparently we are friends now' },
      { from: 'widowmaker', t: 'We are not friends.' },
      { from: 'kiriko', t: 'you read my fortune out loud to a pigeon yesterday' },
      { from: 'widowmaker', t: 'The pigeon asked.' }
    ], reply: [
      { t: 'Support and sniper. I love it.', then: [{ from: 'kiriko', t: 'opposites cover each others blind spots 🦊' }, { from: 'widowmaker', t: 'I have no blind spots.' }] },
      { t: 'What did the pigeon get?', then: [{ from: 'widowmaker', t: 'Kichi. It seemed satisfied.' }] }
    ] },
    { id: 'widow-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'You did not ask about him. After I told you.' },
      { from: 'widowmaker', t: 'Most people ask.' }
    ], reply: [
      { t: "You'll tell me if you want to.", notes: 3, then: [{ from: 'widowmaker', t: '...Yes. Perhaps I will.' }] },
      { t: 'I figured you get asked enough.', notes: 3, then: [{ from: 'widowmaker', t: 'I do. You are observant, petite.' }] }
    ] },
    { id: 'widow-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'I am still wearing the scarf.' },
      { from: 'widowmaker', t: 'It is not for warmth. Do not misunderstand.' }
    ], reply: [
      { t: 'What is it for, then?', notes: 3, then: [{ from: 'widowmaker', t: 'I have not decided.' }] },
      { t: 'It looks good on you.', notes: 2, then: [{ from: 'widowmaker', t: 'Everything looks good on me.' }] }
    ] },
    { id: 'widow-7a', rank: 7, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'You moved into my line of fire tonight. Twice.' },
      { from: 'widowmaker', t: 'Do not do that.' },
      { from: 'widowmaker', t: 'I would not have missed. But do not do that.' }
    ], reply: [
      { t: 'You were worried about me.', notes: 3, then: [{ from: 'widowmaker', t: 'I was annoyed.' }, { from: 'widowmaker', t: 'It felt similar.' }] },
      { t: "Sorry. I trusted you.", notes: 3, then: [{ from: 'widowmaker', t: '...No one has said that to me in a long time.' }] }
    ] },
    { id: 'widow-9a', rank: 9, days: 1, slot: 1, msgs: [
      { from: 'widowmaker', t: 'Ninety-two.' },
      { from: 'widowmaker', t: 'My heart. Tonight. On the bridge. Ninety-two.' }
    ], reply: [
      { t: "That's a lot for you.", notes: 3, then: [{ from: 'widowmaker', t: 'It is the most it has done in years.' }, { from: 'widowmaker', t: 'Goodnight, chérie.' }] },
      { t: 'Was it a good ninety-two?', notes: 3, then: [{ from: 'widowmaker', t: '...Yes. I believe so.' }] }
    ] }
  ],
  ranks: [
    { after: '10/5', title: '1: the bridge', place: 'Moonlight Bridge', scene: [
      { n: "The night after, Solar couldn't stay in the dorm. She walked until her legs stopped asking where she was going, and they stopped at Moonlight Bridge, all white cables and lights doubled in the black water, the wind off the bay cold enough to make her eyes sting, which was convenient." },
      { ifRank: { kiriko: 8 }, then: [
        { n: "The woman was up there again, the one from that night with Kiriko, standing on a cable forty meters above the road as if it were a sidewalk. Purple skin. A long braid of dark hair. A rifle as long as a person. She looked down before Solar was halfway across, the way she always seemed to know." },
        { s: 'widowmaker', t: "The fox girl's friend. Alone, tonight." }
      ], else: [
        { n: "There was a woman standing on one of the cables forty meters above the road as if it were a sidewalk. Purple skin, faintly blue in the bridge lights. A long braid of dark hair. A rifle as long as a person, held loosely, like an umbrella. She looked down before Solar was halfway across, the way a cat looks at a sound you didn't hear." },
        { s: 'widowmaker', t: "A girl. Alone. On a bridge. At night. Hm." }
      ] },
      { n: "She dropped. There was no other word for it. She dropped forty meters on a grappling line and landed on the railing next to Solar so lightly that the railing didn't even ring." },
      { s: 'widowmaker', t: "You have been crying. Your face is very loud about it." },
      { choose: [
        { t: "Someone died. In my dorm.", notes: 3, then: [
          { s: 'widowmaker', t: '...' },
          { s: 'widowmaker', t: "Ah. Then you are allowed to be loud." }
        ] },
        { t: "It's the wind.", notes: 2, then: [{ s: 'widowmaker', t: "Of course. The wind. It is very sad tonight, the wind." }] }
      ] },
      { n: "She didn't say anything comforting, because she didn't seem to know how, and she didn't leave, which Solar would realize later was the same thing. She just stood on the railing in the wind and watched the city, and Solar stood beside her and watched it too, and neither of them said anything for an hour." },
      { s: 'widowmaker', t: "Widowmaker. That is what they call me. You may call me that." },
      { s: 'widowmaker', t: "Come back, if you need a place to be loud. No one will hear you up here except me. And I hear nothing." }
    ] },

    { after: '10/17', title: '2: one shot', place: 'Moonlight Bridge · The Cables', scene: [
      { n: "Solar brought coffee, black, which she'd decided Widowmaker would like, purely on vibes. Widowmaker looked at it for a long moment like it might be poisoned. Then she drank it." },
      { s: 'widowmaker', t: "Come up. I will show you something." },
      { n: "The cables went up and up. Widowmaker climbed them like stairs, and Solar climbed them like a person who very much wanted to keep living, and at the top, at the very top of the tower, with the whole of Iwatodai spread out in lights beneath them, Widowmaker handed her the rifle." },
      { s: 'widowmaker', t: "Look through the scope. Do not touch the trigger. I will know." },
      { n: "Through the scope, the city came close enough to touch. A couple arguing in a window. A cat on a roof. A boy at the station, alone, checking his phone over and over. Junpei, outside the convenience store, eating something. She could see everything. She could see everyone." },
      { s: 'widowmaker', t: "This is what I do. I see everything. Every person, every heartbeat. I watch their lives from very far away." },
      { s: 'widowmaker', t: "It is not the same as being in them. You understand?" },
      { choose: [
        { t: "That sounds lonely.", notes: 3, then: [{ s: 'widowmaker', t: "Loneliness is a feeling. I don't have those. ...That is what I am told." }] },
        { t: "You could come down sometime.", notes: 3, then: [{ s: 'widowmaker', t: "Down there? With the people? ...We will see." }] }
      ] },
      { s: 'widowmaker', t: "One shot. One kill. That is what I say. Did you know that?" },
      { s: 'widowmaker', t: "But tonight. No shots. Just you. Looking." }
    ] },

    { after: '10/31', title: '3: the dancer', place: 'Moonlight Bridge', scene: [
      { n: "Halloween, and Iwatodai was full of kids in costumes, and Solar came up the bridge to find Widowmaker on the railing doing something Solar had never seen her do. She was stretching. Slowly. Her leg extended along the cable, arm curved overhead, every line of her exact and still and lovely." },
      { s: 'widowmaker', t: "Don't stare. It is rude." },
      { s: 'solar', t: "Are you a dancer?" },
      { s: 'widowmaker', t: "...I was. A very long time ago. The Opéra de Paris. I was very good." },
      { n: "She moved, there on the railing, forty meters above the black water. A turn on one foot, a long slow extension, arms like wings. It wasn't for anyone. It was the first time Solar had ever seen her do something for no reason at all, and it was the most beautiful thing she'd seen since she came to this city." },
      { choose: [
        { t: "(Clap.)", notes: 3, then: [
          { s: 'widowmaker', t: '...' },
          { s: 'widowmaker', t: "No one has clapped for me in a very long time. Merci." }
        ] },
        { t: "Why did you stop?", notes: 2, then: [{ s: 'widowmaker', t: "I didn't stop. I was stopped. There is a difference, petite." }] }
      ] },
      { n: "Kiriko had told Solar once that in the other world, people dressed up as Widowmaker for Halloween. Solar didn't tell her. She had a feeling Widowmaker would find it either very funny or not funny at all, and she wasn't sure which, and she wanted to keep tonight exactly as it was." }
    ] },

    { after: '11/9', title: '4: amélie', place: 'Moonlight Bridge', scene: [
      { n: "Cold now. November. Widowmaker didn't feel it, she said. She didn't feel much of anything. But she'd started coming down off the cables when Solar came, to sit on the railing at Solar's height, which Solar noticed and didn't mention." },
      { s: 'widowmaker', t: "My name was Amélie. Amélie Lacroix. You may know that, but you may not use it." },
      { s: 'widowmaker', t: "I had a husband. Gérard. I am told that I killed him." },
      { s: 'widowmaker', t: "I am told it because I don't remember feeling anything about it. They took that from me. They took everything that would have made it hurt." },
      { n: "She said it in the same voice she said everything, flat and cool and precise, like reading a weather report. But her hand, on the railing, was gripping the steel very hard. Solar watched it and said nothing about it." },
      { choose: [
        { t: "That wasn't you. Not really.", notes: 2, then: [{ s: 'widowmaker', t: "It was my hands. My rifle. My shot. Whose would it be?" }] },
        { t: "(Put your hand next to hers on the railing.)", notes: 3, then: [
          { n: "Solar put her hand on the railing, not touching Widowmaker's, just near it. A few inches away. Widowmaker looked at it for a long time. She didn't move her hand away." },
          { s: 'widowmaker', t: "...You are very strange, petite. Very strange." }
        ] }
      ] },
      { n: "There was a reason she'd come through on the night of the fourth, Solar thought on the way home. The Death arcana. The night after a death. Some things in this city didn't happen by accident." }
    ] },

    { after: '11/21', title: '5: cold', place: 'Moonlight Bridge', scene: [
      { n: "Solar had brought a scarf. It was red, and soft, and the kind of thing a person would knit for someone they liked, which was not what had happened, she had bought it at a shop in Paulownia Mall, but she'd thought about it for an embarrassingly long time." },
      { s: 'widowmaker', t: "I cannot feel the cold. My heart is slowed. My body is cold always. It is how they made me." },
      { s: 'solar', t: "I know. Wear it anyway." },
      { s: 'widowmaker', t: "...Why?" },
      { choose: [
        { t: "So you'll know someone thought about you.", notes: 3, then: [
          { s: 'widowmaker', t: '...' },
          { n: "Widowmaker held the scarf in both hands, looking at it. Then she wound it around her neck, once, twice, carefully. It was very red against her skin. It looked ridiculous with the rest of her. She did not take it off." }
        ] },
        { t: "Because it's red. It goes with your visor.", notes: 2, then: [{ s: 'widowmaker', t: "...That is a correct observation about fashion. Fine." }] }
      ] },
      { n: "They sat on the railing in the wind. Widowmaker's hand came up, every few minutes, to touch the scarf, as though checking it was still there. She didn't seem to notice she was doing it." }
    ] },

    { after: '12/2', title: '6: princesse', place: 'Moonlight Bridge · The Cables', scene: [
      { n: "December. The first really cold night, the bay black and glittering, the wind sharp enough to cut. They were up on the cables again, watching the city lights, and Solar was cold and stubborn about it and had refused to go home, and Widowmaker was watching her be stubborn the way you'd watch a kitten fight a shoelace." },
      { s: 'widowmaker', t: "Go home, princesse. You are shivering." },
      { n: "She said it without thinking. Then she stopped. Her whole body stopped, the way it did before a shot." },
      { s: 'widowmaker', t: "...Princesse. Why did I say that? I don't call anyone that. I have never called anyone that." },
      { n: "Something in Solar's chest went very still, and then very warm, the way a room does when someone you didn't hear come in turns on a light." },
      { s: 'widowmaker', t: "Kiriko said there is another world. A boy who plays as me, beside a girl who plays as her. I felt him, once. Like a voice through a wall." },
      { s: 'widowmaker', t: "I think he calls someone that. I think it came through. Mon dieu. How embarrassing for me." },
      { choose: [
        { t: "I don't mind it.", notes: 3, then: [{ s: 'widowmaker', t: "...No. I don't suppose you do. Your face is being loud again." }] },
        { t: "(Say nothing. Look at the city.)", notes: 3, then: [{ n: "Solar looked at the city and said nothing, and something she could not name ached behind her ribs, and Widowmaker, beside her, very quietly, did not ask about it." }] }
      ] },
      { n: "She went home. She lay awake a long time. She didn't know a boy who called anyone princess. She was sure she'd never met one. She fell asleep with her headphones on, and dreamed about a sniper and a support, under bright lights, in a room very far away." }
    ] },

    { after: '12/12', title: '7: overwatch', place: 'Port Island · Rooftops · The Dark Hour', scene: [
      { n: "The Dark Hour, a full-team operation, a huge shadow loose in the Port Island shopping district that kept splitting into smaller ones, too many, too fast. They'd needed someone on the high ground. Solar had asked. Widowmaker had said, of course, as though she'd been waiting to be asked." },
      { n: "From the rooftops, it looked like chaos. From the ground, it was worse. Solar was in the middle of it with her Persona out, and every time a shadow got too close, there was a crack from somewhere very high up, and the shadow came apart." },
      { n: "One shot. One kill. Every single time. She didn't miss once. And every time Solar moved, without thinking, she moved somewhere Widowmaker could see her." },
      { s: 'widowmaker', t: "Behind you. Left. I have it." },
      { choose: [
        { t: "(Trust her. Don't turn around.)", notes: 3, then: [{ n: "Solar didn't turn around. She heard the crack, and felt the wind of it past her ear, and the thing behind her stopped existing, and she kept going like it was nothing, because with Widowmaker on the roof, it was." }] },
        { t: "(Turn and fight it yourself.)", notes: 2, then: [{ n: "She turned, and the crack came anyway, a fraction of a second ahead of her, and the shadow fell. Widowmaker, in her ear, sighed with enormous patience." }] }
      ] },
      { n: "Afterward, on the roof, in the fading green, Widowmaker was sitting very still with her rifle across her knees and two fingers pressed to her own throat." },
      { s: 'widowmaker', t: "My heart. It went up. When you were surrounded. It doesn't do that. It is not supposed to." },
      { s: 'widowmaker', t: "...Do not tell anyone. Especially not the fox." }
    ] },

    { after: '12/23', title: '8: talon', place: 'Moonlight Bridge', scene: [
      { n: "There was something wrong with her tonight. She was up on the very top of the tower, not watching the city. Watching nothing. Her visor was down. She didn't come down when Solar called her name, so Solar climbed all the way up, freezing, furious, and sat down next to her." },
      { s: 'widowmaker', t: "When I go back, they will find me. Talon. They always find me." },
      { s: 'widowmaker', t: "They will put me back in the chair. And they will take out whatever has grown back. The dancing. The scarf. This bridge. You." },
      { s: 'widowmaker', t: "I will not remember you, petite. I'm sorry. I wanted to say it while I still could." },
      { n: "It was the first time Solar had ever heard her say she was sorry. It was the first time Solar had heard her say she wanted anything at all." },
      { choose: [
        { t: "Then I'll remember for both of us.", notes: 3, then: [
          { s: 'widowmaker', t: '...' },
          { s: 'widowmaker', t: "That is very stupid. It is the nicest stupid thing anyone has said to me." }
        ] },
        { t: "Some things grow back no matter what.", notes: 3, then: [{ s: 'widowmaker', t: "...Perhaps. Weeds do. Perhaps I am a weed." }] }
      ] },
      { n: "Mercy came to the bridge the next night, Solar heard later. Just stood at the bottom of the tower and looked up. Widowmaker looked down. Neither of them said anything, and then Mercy left, and Widowmaker told Solar she didn't know what that had been about, in a voice that meant she knew exactly." }
    ] },

    { after: '1/8', title: '9: ninety-two', place: 'Moonlight Bridge', scene: [
      { n: "January, and the snow on the bridge, and the whole bay white and silver under a thin cold moon. Widowmaker was waiting on the railing. She had the scarf on. She always had it on now." },
      { n: "Kiriko had come too. She'd climbed halfway up the tower before deciding she didn't love heights and come down again, and she was sitting on the bridge with her back against a support beam, eating something from a bag, and Widowmaker was pretending to be annoyed by her." },
      { s: 'kiriko', t: "Fortune. For you. I'm not asking." },
      { s: 'kiriko', t: "Dai-kichi. 'The cold heart thaws in the company of fools.'" },
      { s: 'widowmaker', t: "...I'm insulted by that. And by how accurate it is." },
      { n: "Later, when Kiriko had gone, Widowmaker stood on the railing with her fingers pressed to her own throat again, and she was very quiet, and then she said something Solar didn't expect." },
      { s: 'widowmaker', t: "Ninety-two. My heart. Right now. It is supposed to be thirty." },
      { s: 'widowmaker', t: "It goes up when I am with you. And the fox. Laughing. On a bridge. With a scarf I cannot feel." },
      { s: 'widowmaker', t: "I believe this is a feeling. I believe I am... happy. It is unpleasant. I love it." },
      { choose: [
        { t: "Welcome back, Amélie.", notes: 3, then: [
          { s: 'widowmaker', t: '...' },
          { s: 'widowmaker', t: "...You may use it. Just tonight. Just you." }
        ] },
        { t: "You're my friend. You know that, right?", notes: 3, then: [{ s: 'widowmaker', t: "...Yes. I know. You have been stubborn about it since October." }] }
      ] }
    ] },

    { after: '1/24', title: '10: the last dance', place: 'Moonlight Bridge', scene: [
      { n: "The last week of January, and everyone knew it was ending. The Dark Hour, this city, all of it. The bridge was very cold and very quiet. Widowmaker came down off the cables before Solar even called her, and stood on the bridge at Solar's height, and for once she didn't seem to know what to say." },
      { s: 'widowmaker', t: "I wish to give you something. I don't have very much. I came here with a rifle and a grappling hook." },
      { n: "She held out her hand. In it was a ribbon, pale pink satin, frayed at the ends, faded with age. A ribbon from a pointe shoe." },
      { s: 'widowmaker', t: "From the Opéra. The last performance. I have carried it everywhere. I never knew why. Talon never found it. I hid it very well." },
      { s: 'widowmaker', t: "If they take everything else, I want this to be somewhere they cannot reach. With someone who will remember." },
      { choose: [
        { t: "Dance with me. One more time.", notes: 3, then: [
          { s: 'widowmaker', t: "...You can't dance, petite. I've seen you walk." },
          { s: 'solar', t: "So teach me." },
          { n: "She did. There on the bridge, in the snow, under the moon. A slow, patient waltz, Widowmaker counting under her breath in French, Solar stepping on her feet, both of them laughing, Widowmaker's laugh rusty and startled like a door that hadn't been opened in years. Her hand was cold. Solar held it anyway." }
        ] },
        { t: "I'll remember. Every single bit of it.", notes: 3, then: [{ s: 'widowmaker', t: "...Good. Then it was real. That is all I wanted, I think. For someone to know it was real." }] }
      ] },
      { s: 'widowmaker', t: "Au revoir is not goodbye, princesse. It means until I see you again. Remember that too." },
      { n: "When Solar looked back from the end of the bridge, Widowmaker was up on the highest cable, a dark shape against the moon, a red scarf snapping in the wind. She didn't wave. She raised her rifle, once, in salute. And Solar, who had cried on this bridge in October, smiled all the way home." }
    ] }
  ]
});
