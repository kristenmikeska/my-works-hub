/* Elizabeth: the Velvet Room frame story. Not a social link (hidden). Her opening plays the first time
   Solar opens her social links in FEMC mode. Format notes are at the top of akihiko.js. */
FemcSocial.define({
  id: 'elizabeth', name: 'Elizabeth', short: 'Elizabeth', arcana: 'Velvet Room', numeral: '', from: 'Persona 3',
  hidden: true, theme: 'velvet',
  home: { place: 'The Velvet Room', slot: 1, days: [], hint: '' },
  ranks: [
    { title: '0: the velvet room', place: 'The Velvet Room', scene: [
      { n: "Solar didn't remember falling asleep. She remembered her desk, and her lamp, and the textbook she'd been not reading, and then she remembered nothing, and then she was here." },
      { n: "Here was blue. Everything was blue, the walls and the light and the long velvet seat she was sitting on, a deep, rich, impossible blue like the inside of a closed eye. The room hummed. It was rising, she realized. An elevator, climbing past numbers that didn't belong to any building she'd ever been in." },
      { n: "Across from her, standing very straight with a heavy book held against her chest, was a young woman with pale hair and golden eyes and the composed, faintly delighted expression of someone who had been waiting for a long time and found the wait entirely worthwhile." },
      { s: 'elizabeth', f: 'happy', t: 'Welcome to the Velvet Room.' },
      { s: 'elizabeth', f: 'neutral', t: 'My master is away at present, so I shall be attending to you myself. My name is Elizabeth.' },
      { choose: [
        { t: 'Where am I?', notes: 0, then: [{ s: 'elizabeth', f: 'neutral', t: 'A place between dream and reality, mind and matter. You may think of it as a waiting room. A very comfortable one.' }] },
        { t: 'Am I dreaming?', notes: 0, then: [{ s: 'elizabeth', f: 'neutral', t: 'In a manner of speaking. Though I would advise against assuming that what happens here does not count.' }] },
        { t: "(Stay quiet and watch her.)", notes: 0, then: [
          { n: "Elizabeth watched her back with frank, bright curiosity, the way a person looks at a new kind of flower." },
          { s: 'elizabeth', f: 'happy', t: 'Ah. A guest who observes before she speaks. How refreshing.' }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: 'Something curious has been happening in your city. The hour that does not exist has grown thin. Like fabric worn through at the elbows.' },
      { s: 'elizabeth', f: 'sad', t: 'People are slipping through it. People from places that are not here. They arrive confused, and very, very far from home.' },
      { n: "The elevator kept climbing. Solar thought about Junpei at Hagakure, going on about a girl with fox ears at the shrine, and how everyone had laughed." },
      { s: 'elizabeth', f: 'sad', t: 'They cannot break free of the hour on their own. Left alone, they would simply fade into it.' },
      { s: 'elizabeth', f: 'happy', t: 'But a bond would anchor them. And you, it seems, are rather good at bonds.' },
      { choose: [
        { t: "Why me?", notes: 0, then: [{ s: 'elizabeth', f: 'happy', t: 'That is an excellent question. I intend to find out.' }] },
        { t: "I'm not, actually. I'm terrible at bonds.", notes: 0, then: [
          { s: 'elizabeth', f: 'happy', t: "Hm. That is what people who are good at them tend to say." },
          { n: 'Solar decided not to argue with a woman who lived in an elevator.' }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: 'Before we go any further, the contract requires your name.' },
      { naming: true },
      { s: 'elizabeth', f: 'happy', t: '...Solar. A fitting name.' },
      { s: 'elizabeth', f: 'neutral', t: 'Eighteen years old, a third-year at Gekkoukan High, newly moved into the dormitory by the station. The contract is satisfied.' },
      { s: 'elizabeth', f: 'neutral', t: 'How curious. In every world I have peered into, there is someone by that name.' },
      { choose: [
        { t: 'Every world?', notes: 0, then: [
          { s: 'elizabeth', f: 'happy', t: 'Many of them. In one, you run a long way from your family name. In another, you are promised to someone you did not choose. In another, you play a game against the whole world, and win.' },
          { s: 'elizabeth', f: 'sad', t: 'You never seem to know about the others. I find that rather sad, and rather wonderful.' }
        ] },
        { t: "That's impossible.", notes: 0, then: [{ s: 'elizabeth', f: 'happy', t: 'So is this elevator. And yet here we both are.' }] }
      ] },
      { n: "The humming changed pitch. The numbers above the door slowed, like the room was getting ready to let her go." },
      { s: 'elizabeth', f: 'neutral', t: 'I keep a book. A compendium. Each person you come to know will find a page in it, whether they are from your world or another.' },
      { s: 'elizabeth', f: 'happy', t: 'I confess I am terribly curious what you will fill it with.' },
      { s: 'elizabeth', f: 'happy', t: 'Now. Your world is waiting for you. And I believe there is a boy at your school who very much wishes to go running.' },
      { n: "The light went white at the edges. The last thing she saw was Elizabeth, lifting one gloved hand in a small, formal wave, like a girl seeing someone off at a train station." },
      { n: "She woke at her desk with her cheek on the textbook and the lamp still on. It was five-twelve in the morning. Her phone was buzzing." }
    ] }
  ]
});
