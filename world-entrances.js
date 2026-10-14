/* Short, optional world entrances. Page content remains usable without this script.
   Each scene uses its own class prefix (e.g. campus-*, tide-*) for styling in world-entrances.css. */
window.WorldEntrances = (() => {
  const SCENES = {
    runners: {
      prefix: 'campus',
      replay: 'Fall semester · revisit campus',
      enter: 'Enter Runners',
      loader: { mark: 'RUNNERS', lines: ['fall semester is starting.', 'try not to end up on SUgram.'] },
      markup: skip => `
        <div class="campus-scene">
          <img class="campus-backdrop" src="assets/worlds/runners-campus.jpg" alt="" fetchpriority="high">
          <div class="campus-light" aria-hidden="true"></div>
          <div class="campus-grain" aria-hidden="true"></div>
          <div class="campus-topline"><span>Syracuse, New York</span><span>Fall semester</span></div>
          <div class="campus-title-block">
            <p class="campus-eyebrow">Welcome to campus</p>
            <h2 id="campus-entrance-title">RUNNERS</h2>
            <p id="campus-entrance-description">Everyone on campus thinks they know Solar Lee.</p>
            <span class="campus-handwriting" aria-hidden="true">make yourself at home.</span>
          </div>
          <figure class="campus-polaroid" aria-hidden="true">
            <img src="assets/worlds/runners-alphaphi.png" alt="">
            <figcaption>Alpha Phi · between classes</figcaption>
          </figure>
          <div class="campus-note" aria-hidden="true">
            <span class="campus-note-label">Around campus</span>
            <span>The quad</span><span>Alpha Phi / Sigma Chi</span><span>Esports &amp; late nights</span>
            <i>see you around.</i>
          </div>
          <div class="campus-leaves" aria-hidden="true">${Array.from({length:8},(_,i) => `
            <span class="campus-leaf" style="--leaf-x:${[7,22,43,65,81,95,34,72][i]}%;--leaf-delay:${i * -0.47}s;--leaf-drift:${i%2 ? -90 : 110}px;--leaf-color:${['#c27836','#a64228','#d0a253'][i%3]}">
              <svg viewBox="0 0 60 75" fill="none"><path d="M31 4 39 22 48 17 45 32 57 36 40 47 37 58 31 53 25 58 22 47 4 36 18 31 13 17 24 22Z" fill="currentColor"/><path d="M31 17v54M31 40 20 31M31 47l12-10" stroke="#51301f" stroke-width="1.5"/></svg>
            </span>`).join('')}</div>
          <div class="campus-bottomline"><span>New faces. Familiar trouble.</span>${skip}</div>
        </div>`
    },

    strangers: {
      prefix: 'tide',
      replay: 'Low tide · return to Incheon',
      enter: 'Enter Strangers',
      loader: { mark: 'strangers', lines: ['the tide is going out.', 'mind what it leaves behind.'] },
      markup: skip => `
        <div class="tide-scene">
          <img class="tide-backdrop" src="assets/worlds/strangers-harbor.jpg" alt="" fetchpriority="high">
          <div class="tide-tint" aria-hidden="true"></div>
          <div class="tide-fog tide-fog-a" aria-hidden="true"></div>
          <div class="tide-fog tide-fog-b" aria-hidden="true"></div>
          <div class="tide-water" aria-hidden="true">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none"><path d="M0 70 C 180 30 360 110 540 70 S 900 30 1080 70 S 1320 110 1440 70 V320 H0Z"/></svg>
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none"><path d="M0 90 C 200 130 380 50 560 90 S 920 130 1100 90 S 1340 50 1440 90 V320 H0Z"/></svg>
          </div>
          <div class="tide-grain" aria-hidden="true"></div>
          <div class="tide-topline"><span>Incheon · the Yellow Sea</span><span>November 2012</span></div>
          <div class="tide-title-block">
            <p class="tide-eyebrow">Haesong · on the waterfront</p>
            <h2 id="tide-entrance-title">strangers</h2>
            <p id="tide-entrance-description">A wedding to keep the peace. A bodyguard with a history.</p>
            <span class="tide-handwriting" aria-hidden="true">nothing stays buried at low tide.</span>
          </div>
          <figure class="tide-photo" aria-hidden="true">
            <img src="assets/worlds/strangers-engagement.jpg" alt="">
            <figcaption>he stays beside her until the ceremony</figcaption>
          </figure>
          <div class="tide-invite" aria-hidden="true">
            <span class="tide-invite-small">Together with their families</span>
            <span class="tide-invite-names">Solar <em>&amp;</em> Jungwon</span>
            <span class="tide-invite-small">request the honour of your presence</span>
            <span class="tide-invite-date">Saturday, the thirteenth of April<br>two thousand thirteen</span>
            <span class="tide-seal">L·Y</span>
          </div>
          <div class="tide-bottomline"><span>142 days before the wedding</span>${skip}</div>
        </div>`
    },
    delicate: {
      prefix: 'flash',
      replay: 'Seoul · step back into the flashbulbs',
      enter: 'Enter Delicate',
      loader: { mark: 'delicate', lines: ['entering a new world.', 'things may look a little different here.'] },
      markup: skip => `
        <div class="flash-scene">
          <img class="flash-backdrop" src="assets/worlds/delicate-city.jpg" alt="" fetchpriority="high">
          <div class="flash-tint" aria-hidden="true"></div>
          <div class="flash-pops" aria-hidden="true">${[[12,22],[84,18],[70,62],[22,70],[48,12],[92,48],[6,46]].map(([x,y],i) => `<span class="flash-pop" style="--x:${x}%;--y:${y}%;--d:${(i * 0.83).toFixed(2)}s"></span>`).join('')}</div>
          <div class="flash-grain" aria-hidden="true"></div>
          <div class="flash-topline"><span>Seoul · YG Entertainment</span><span>2019</span></div>
          <div class="flash-title-block">
            <p class="flash-eyebrow">Korea's #1 solo artist · 5× Daesang</p>
            <h2 id="flash-entrance-title">delicate</h2>
            <p id="flash-entrance-description">Kim Soomi. Perfect. Beloved. Untouchable.</p>
            <span class="flash-handwriting" aria-hidden="true">no one knows where she came from.</span>
          </div>
          <figure class="flash-card" aria-hidden="true">
            <span class="flash-card-photo"><img src="assets/worlds/delicate-soomi-card.jpg" alt=""><span class="flash-card-name">KIM SOOMI</span></span>
            <figcaption>kimsoomi_official</figcaption>
            <span class="flash-sticker">♥</span>
          </figure>
          <div class="flash-clipping" aria-hidden="true">
            <span class="flash-masthead">THE PULSE</span>
            <span class="flash-kicker">Exclusive</span>
            <span class="flash-headline">Who is Kim Soomi, really?</span>
            <img src="assets/worlds/delicate-hero.jpg" alt="">
            <span class="flash-lines"><i></i><i></i><i></i><i></i></span>
          </div>
          <div class="flash-bottomline"><span>Every public record has a private shadow.</span>${skip}</div>
        </div>`
    },

    'petal-thorn': {
      prefix: 'bloom',
      replay: 'Seoul ⇄ San Francisco · log back in',
      enter: 'Enter Petal & Thorn',
      loader: { mark: 'Petal &amp; Thorn', lines: ['logging in.', 'smile, though.'] },
      markup: skip => `
        <div class="bloom-scene">
          <img class="bloom-backdrop" src="assets/worlds/petal-archive-new.jpg" alt="" fetchpriority="high">
          <div class="bloom-tint" aria-hidden="true"></div>
          <div class="bloom-scan" aria-hidden="true"></div>
          <div class="bloom-petals" aria-hidden="true">${Array.from({length:9},(_,i) => `
            <span class="bloom-petal" style="--px:${[4,15,27,38,9,33,21,44,2][i]}%;--pd:${(i * -0.9).toFixed(1)}s;--pdrift:${i%2 ? -70 : 90}px;--pc:${['#ff8fb8','#ff4f8b','#ffc2d6'][i%3]}">
              <svg viewBox="0 0 40 52"><path d="M20 2C31 12 38 26 32 40 28 48 12 48 8 40 2 26 9 12 20 2Z" fill="currentColor"/><path d="M20 10v32" stroke="#00000022" stroke-width="1.5"/></svg>
            </span>`).join('')}</div>
          <div class="bloom-pixels" aria-hidden="true">${Array.from({length:7},(_,i) => `<span style="--qx:${[58,66,74,82,90,62,86][i]}%;--qy:${[20,58,34,72,26,82,50][i]}%;--qd:${(i * 0.61).toFixed(2)}s"></span>`).join('')}</div>
          <div class="bloom-topline"><span>Seoul · HYBE</span><span>San Francisco · Season 2025</span></div>
          <div class="bloom-queue" aria-hidden="true"><i></i> In queue <b class="bloom-queue-time">00:00</b></div>
          <div class="bloom-title-block">
            <p class="bloom-eyebrow">Le Sserafim · San Francisco Shock</p>
            <h2 id="bloom-entrance-title"><span class="bloom-petal-word">Petal</span> <span class="bloom-amp">&amp;</span> <span class="bloom-thorn-word" data-text="THORN">THORN</span></h2>
            <p id="bloom-entrance-description">Even petals can cut, and thorns can bloom.</p>
            <span class="bloom-handwriting" aria-hidden="true">your eyes are too cold.</span>
          </div>
          <figure class="bloom-card" aria-hidden="true">
            <span class="bloom-card-photo"><img src="assets/worlds/petal-solar-idol.jpg" alt=""></span>
            <figcaption>@solar.lsf</figcaption>
            <span class="bloom-sticker">✦</span>
          </figure>
          <div class="bloom-player" aria-hidden="true">
            <span class="bloom-player-team">SF SHOCK</span>
            <span class="bloom-player-name">SOLAR</span>
            <span class="bloom-player-role">Flex Support · Tracer Specialist</span>
            <span class="bloom-player-stats"><span><b>500</b>Top</span><span><b>34–8</b>Record</span><span><b>1</b>OWL Title</span></span>
            <i>"You're one of us now. Don't waste it."</i>
          </div>
          <div class="bloom-bottomline"><span>23:00 · the others wind down. Solar queues up.</span>${skip}</div>
        </div>`,
      start: dialog => {
        const queue = dialog.querySelector('.bloom-queue');
        const clock = dialog.querySelector('.bloom-queue-time');
        const began = Date.now();
        const tick = () => { const sec = Math.floor((Date.now() - began) / 1000); clock.textContent = `${String(Math.floor(sec / 60)).padStart(2,'0')}:${String(sec % 60).padStart(2,'0')}`; };
        const timer = setInterval(tick, 1000);
        const pop = setTimeout(() => {
          clearInterval(timer); tick();
          queue.classList.add('bloom-queue-found');
          queue.firstChild.nextSibling.textContent = ' Match found ';
          dialog.dispatchEvent(new CustomEvent('entrance:cue', { detail: 'match' }));
        }, (14 + Math.random() * 8) * 1000);
        return () => { clearInterval(timer); clearTimeout(pop); };
      }
    },
    peace: {
      prefix: 'still',
      replay: 'Interview room · go back in',
      enter: 'Enter Peace',
      loader: { mark: 'peace', lines: ['the door slams shut.', 'once again, she was alone.'] },
      markup: skip => `
        <div class="still-scene">
          <img class="still-backdrop" src="assets/worlds/peace-new.jpg" alt="" fetchpriority="high">
          <div class="still-tint" aria-hidden="true"></div>
          <div class="still-lamp" aria-hidden="true"><span class="still-cord"></span><span class="still-shade"></span><span class="still-cone"></span></div>
          <div class="still-dust" aria-hidden="true">${Array.from({length:12},(_,i) => `<span style="--dx:${[44,52,47,58,49,55,41,61,50,46,57,53][i]}%;--dy:${[30,46,58,38,70,62,50,54,34,66,44,76][i]}%;--dd:${(i * -1.3).toFixed(1)}s"></span>`).join('')}</div>
          <div class="still-grain" aria-hidden="true"></div>
          <div class="still-topline"><span>Seoul · interview room</span><span>After the warehouse</span></div>
          <div class="still-title-block">
            <p class="still-eyebrow">The Delicate universe · aftermath</p>
            <h2 id="still-entrance-title">peace</h2>
            <p id="still-entrance-description">"Solar Lee, or do you prefer Kim Soomi?"</p>
            <span class="still-handwriting" aria-hidden="true">how much time had passed?</span>
          </div>
          <div class="still-file" aria-hidden="true">
            <span class="still-file-tab">Case file</span>
            <span class="still-clip"></span>
            <img src="assets/worlds/peace-bridge.jpg" alt="">
            <span class="still-file-row"><b>Subject</b> Lee, Solar (Kim Soomi)</span>
            <span class="still-file-row"><b>Status</b> Will not speak</span>
            <span class="still-stamp">Confidential</span>
          </div>
          <div class="still-alert" aria-hidden="true">
            <span class="still-alert-app"><i></i> News · now</span>
            <b>BREAKING</b>
            <span>Kim Soomi's whereabouts remain unknown.</span>
          </div>
          <div class="still-bottomline"><span>Where do you run if the villain was yourself all along?</span>${skip}</div>
        </div>`
    },

    recherche: {
      prefix: 'gilt',
      replay: 'Upper East Side · return to the Castle',
      enter: 'Enter Recherche',
      loader: { mark: 'recherche', lines: ['dinner is prepared.', 'we have guests.'] },
      markup: skip => `
        <div class="gilt-scene">
          <img class="gilt-backdrop" src="assets/worlds/recherche-night.jpg" alt="" fetchpriority="high">
          <div class="gilt-tint" aria-hidden="true"></div>
          <svg class="gilt-frame" aria-hidden="true" viewBox="0 0 1000 600" preserveAspectRatio="none"><rect x="20" y="20" width="960" height="560"/><rect x="34" y="34" width="932" height="532"/><path d="M20 90 L90 20 M910 20 L980 90 M980 510 L910 580 M90 580 L20 510"/></svg>
          <div class="gilt-motes" aria-hidden="true">${Array.from({length:14},(_,i) => `<span style="--gx:${[8,17,26,35,44,53,62,71,80,89,13,48,67,93][i]}%;--gd:${(i * -0.8).toFixed(1)}s;--gs:${[3,2,4,2,3,5,2,3,4,2,3,2,4,3][i]}px"></span>`).join('')}</div>
          <div class="gilt-topline"><span>New York · Upper East Side</span><span>2005</span></div>
          <div class="gilt-title-block">
            <p class="gilt-eyebrow">The Castle · Lee Industries</p>
            <h2 id="gilt-entrance-title">recherche</h2>
            <p id="gilt-entrance-description">Before the fame, there was the fall.</p>
            <span class="gilt-handwriting" aria-hidden="true">it takes more than fame and money to reside in the Castle.</span>
          </div>
          <div class="gilt-clipping" aria-hidden="true">
            <span class="gilt-masthead">UES LEDGER</span>
            <span class="gilt-kicker">Society</span>
            <span class="gilt-headline">Dinner at the Castle: the Lees welcome new partners</span>
            <span class="gilt-lines"><i></i><i></i><i></i><i></i><i></i></span>
          </div>
          <div class="gilt-card" aria-hidden="true">
            <span class="gilt-card-house">The Lee Residence</span>
            <span class="gilt-card-name">Miss Solar Lee</span>
            <span class="gilt-card-note">heir to Lee Industries</span>
            <svg class="gilt-key" viewBox="0 0 60 24"><circle cx="10" cy="12" r="7"/><path d="M17 12h38M44 12v7M50 12v5"/></svg>
          </div>
          <div class="gilt-bottomline"><span>From the outside, privilege. From the inside, a cage.</span>${skip}</div>
        </div>`
    },

    secret: {
      prefix: 'priv',
      replay: 'Close friends · peek again',
      enter: 'Enter Secret',
      loader: { mark: 'secret', lines: ['switching accounts.', 'close friends only.'] },
      markup: skip => `
        <div class="priv-scene">
          <img class="priv-backdrop" src="assets/worlds/secret-nearkiss.jpg" alt="" fetchpriority="high">
          <div class="priv-tint" aria-hidden="true"></div>
          <div class="priv-hearts" aria-hidden="true">${Array.from({length:8},(_,i) => `<span style="--hx:${[14,19,24,11,28,16,22,26][i]}%;--hd:${(i * -0.7).toFixed(1)}s">♥</span>`).join('')}</div>
          <div class="priv-grain" aria-hidden="true"></div>
          <div class="priv-topline"><span>Seoul · LE SSERAFIM</span><span>After the festival</span></div>
          <div class="priv-title-block">
            <p class="priv-eyebrow">On main · on private</p>
            <h2 id="priv-entrance-title">secret</h2>
            <p id="priv-entrance-description">Beloved on main. Exhausted on private.</p>
            <span class="priv-handwriting" aria-hidden="true">when can we go home?!</span>
          </div>
          <div class="priv-phone priv-main" aria-hidden="true">
            <span class="priv-handle">lesoorin <i>✓</i></span>
            <span class="priv-shot priv-shot-main"><img src="assets/worlds/secret-post-main.jpg" alt=""></span>
            <span class="priv-likes">♥ <b class="priv-like-count">48,201</b> likes</span>
            <span class="priv-caption"><b>lesoorin</b> thank you fearnot for the support at the festival, cant wait to see you again soon! &lt;3</span>
            <span class="priv-comment"><b>*fan05*</b> as usual ate and left NO CRUMBS</span>
            <span class="priv-comment"><b>*fan06*</b> our 5th gen it girl MISS SOORIN</span>
          </div>
          <div class="priv-phone priv-private" aria-hidden="true">
            <span class="priv-handle">rinsoos <i>🔒</i></span>
            <span class="priv-shot priv-shot-private"><img src="assets/worlds/secret-post-private.jpg" alt=""></span>
            <span class="priv-caption"><b>rinsoos</b> dont hmu im tired &amp; going to sleep for the rest of my socalled life. goodbye.</span>
            <span class="priv-comment"><b>chaechae</b> get some sleep then!</span>
            <span class="priv-comment"><b>jenaissante</b> @rinsoos babe i love u stop</span>
          </div>
          <div class="priv-bottomline"><span>What do you do when the world wouldn't accept who you love?</span>${skip}</div>
        </div>`,
      start: dialog => {
        const count = dialog.querySelector('.priv-like-count');
        let likes = 48201;
        const timer = setInterval(() => {
          likes += Math.floor(1 + Math.random() * 9);
          count.textContent = likes.toLocaleString('en-US');
          if (Math.random() < 0.45) dialog.dispatchEvent(new CustomEvent('entrance:cue', { detail: 'like' }));
        }, 900);
        return () => clearInterval(timer);
      }
    },

    hoax: {
      prefix: 'gc',
      replay: 'BESTAY CENTRAL · reopen the chat',
      enter: 'Enter Hoax',
      loader: { mark: 'hoax', lines: ['BESTAY CENTRAL · 47 unread', "can't wait till school starts."] },
      markup: skip => `
        <div class="gc-scene">
          <img class="gc-backdrop" src="assets/worlds/hoax-rain.jpg" alt="" fetchpriority="high">
          <div class="gc-tint" aria-hidden="true"></div>
          <div class="gc-grain" aria-hidden="true"></div>
          <div class="gc-topline"><span>Sophomore year</span><span>Student council elections</span></div>
          <div class="gc-title-block">
            <p class="gc-eyebrow">BESTAY CENTRAL · group chat</p>
            <h2 id="gc-entrance-title">hoax</h2>
            <p id="gc-entrance-description">Loud, unserious, and absolutely catastrophic.</p>
            <span class="gc-handwriting" aria-hidden="true">no one talks about sophomore year.</span>
          </div>
          <div class="gc-poster" aria-hidden="true">
            <span class="gc-tape"></span>
            <span class="gc-poster-star">★</span>
            <span class="gc-poster-vote">VOTE</span>
            <span class="gc-poster-name">SOLAR</span>
            <span class="gc-poster-for">for Student Council President</span>
            <span class="gc-poster-star gc-star-2">★</span>
          </div>
          <div class="gc-phone" aria-hidden="true">
            <span class="gc-phone-head"><b>BESTAY CENTRAL</b><i class="gc-unread">0</i></span>
            <span class="gc-thread"></span>
          </div>
          <div class="gc-bottomline"><span>Old habits die hard, especially for these friends.</span>${skip}</div>
        </div>`,
      start: dialog => {
        const FALLBACK = { name: 'BESTAY CENTRAL', kind: 'group', messages: [
          ['solarsystem', 'i hate my life so much everyone'], ['asanoonecares', 'oh goodie just what i needed'],
          ['jaehyukkie', 'why are you so unnecessarily rude?'], ['junkyute', 'speaking of, are u ok solar!!! do u need some ice cream and hugs!!!'],
          ['solarsystem', 'YES that is exactly what i need'], ['jihoney', "i was literally on my way to your house as soon as i saw that awful shrek meme"],
          ['geniusuk', 'LMAOOOO'] ] };
        const COLORS = { solarsystem: '#ffb84d', solarkim: '#ffb84d', jihoney: '#c9a7ff', jihoonie: '#c9a7ff', cherryblossoms: '#ff8a8a', chxrry: '#ff8a8a', geniusuk: '#7fe3e0',
          asanoonecares: '#8fb8ff', junkyute: '#ff9ec7', jaehyukkie: '#9fe0a8', injangwon: '#5ee8de', jungwongarden: '#5ee8de', rikiniki: '#ffd36e', sunooshine: '#ffc2e2',
          sunshinesunoo: '#ffc2e2', jbird: '#b8c4ff', heeheeseung: '#a9f0c8', princehoon: '#ff9f6e', jakeys: '#9ad4ff', jakeyy: '#9ad4ff' };
        const colorOf = who => { if (COLORS[who]) return COLORS[who]; let h = 0; for (const c of who) h = (h * 31 + c.charCodeAt(0)) % 360; return `hsl(${h} 70% 75%)`; };
        const box = dialog.querySelector('.gc-thread'), unread = dialog.querySelector('.gc-unread'), head = dialog.querySelector('.gc-phone-head b');
        let timer, stopped = false, data = null, count = 0;
        const pick = () => {
          const pool = (data || []).filter(t => t.messages.length >= 8);
          if (!pool.length) return FALLBACK;
          const t = pool[Math.floor(Math.random() * pool.length)];
          const len = Math.min(t.messages.length, 9 + Math.floor(Math.random() * 4));
          const from = Math.floor(Math.random() * (t.messages.length - len + 1));
          return { name: t.name, kind: t.kind, from: t.from, messages: t.messages.slice(from, from + len) };
        };
        const play = chain => {
          if (stopped) return;
          head.textContent = chain.name === 'Private message' && chain.from ? `${chain.from}` : chain.name;
          box.replaceChildren();
          let me = null, i = 0;
          const mine = who => chain.kind === 'dm' ? (me = me || (who !== chain.from ? who : null), who === me) : (who === 'solarsystem' || who === 'solarkim');
          const post = () => {
            if (stopped) return;
            const [who, text] = chain.messages[i];
            const msg = document.createElement('span');
            msg.className = 'gc-msg' + (mine(who) ? ' gc-mine' : '');
            msg.style.setProperty('--who', colorOf(who));
            const name = document.createElement('b'); name.textContent = who;
            const body = document.createElement('span'); body.textContent = text;
            msg.append(name, body); box.appendChild(msg);
            while (box.children.length > 6) box.firstElementChild.remove();
            unread.textContent = String(++count);
            dialog.dispatchEvent(new CustomEvent('entrance:cue', { detail: who }));
            i++;
            if (i < chain.messages.length) timer = setTimeout(post, 1300 + Math.min(1800, text.length * 22) + Math.random() * 700);
            else timer = setTimeout(() => { box.classList.add('gc-fade'); timer = setTimeout(() => { box.classList.remove('gc-fade'); play(pick()); }, 600); }, 4200);
          };
          timer = setTimeout(post, 700);
        };
        fetch('assets/hoax-chats.json').then(r => r.json()).then(d => { data = d; play(pick()); }).catch(() => play(FALLBACK));
        return () => { stopped = true; clearTimeout(timer); };
      }
    },
    casual: {
      prefix: 'lease',
      replay: 'Mercer · walk back in',
      enter: 'Enter Casual',
      loader: { mark: 'casual', lines: ["the walls don't know her yet.", 'she signed the lease anyway.'] },
      markup: skip => `
        <div class="lease-scene">
          <img class="lease-backdrop" src="assets/worlds/casual-new.jpg" alt="" fetchpriority="high">
          <div class="lease-tint" aria-hidden="true"></div>
          <div class="lease-window" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
          <div class="lease-dust" aria-hidden="true">${Array.from({length:12},(_,i) => `<span style="--lx:${[30,38,46,54,62,70,34,58,42,66,50,74][i]}%;--ly:${[40,60,48,70,55,64,76,36,82,46,58,72][i]}%;--ld:${(i * -1.1).toFixed(1)}s"></span>`).join('')}</div>
          <div class="lease-topline"><span>Mercer · the new apartment</span><span>Early fall</span></div>
          <div class="lease-title-block">
            <p class="lease-eyebrow">1 · new weather</p>
            <h2 id="lease-entrance-title">casual</h2>
            <p id="lease-entrance-description">She walked back into a house, a history, and a set of people she never fully left.</p>
            <span class="lease-handwriting" aria-hidden="true">okay.</span>
          </div>
          <figure class="lease-photo" aria-hidden="true">
            <img src="assets/worlds/casual-solar.jpg" alt="">
            <figcaption>new weather</figcaption>
          </figure>
          <div class="lease-doc" aria-hidden="true">
            <span class="lease-doc-head">Residential lease</span>
            <span class="lease-doc-title">Mercer</span>
            <span class="lease-doc-row"><b>Tenant</b> Solar Lee</span>
            <span class="lease-doc-row"><b>Rooms</b> three</span>
            <span class="lease-doc-lines"><i></i><i></i><i></i></span>
            <span class="lease-sign">Solar Lee</span>
            <span class="lease-keys"><i></i><i></i></span>
          </div>
          <div class="lease-bottomline"><span>There's the story she tells people, and the one with Mark Lee's name in it.</span>${skip}</div>
        </div>`
    },

    havenbrook: {
      prefix: 'east',
      replay: 'The east side · cross the line again',
      enter: 'Enter Havenbrook',
      loader: { mark: 'havenbrook', lines: ['3:47 p.m., the east entrance.', 'someone has already noticed.'] },
      markup: skip => `
        <div class="east-scene">
          <img class="east-backdrop" src="assets/worlds/havenbrook-night.jpg" alt="" fetchpriority="high">
          <div class="east-tint" aria-hidden="true"></div>
          <div class="east-fence" aria-hidden="true"></div>
          <div class="east-neon" aria-hidden="true">OPEN LATE</div>
          <div class="east-grain" aria-hidden="true"></div>
          <div class="east-topline"><span>Havenbrook · the east side</span><span>October</span></div>
          <div class="east-title-block">
            <p class="east-eyebrow">Three blocks from the line DREAM drew</p>
            <h2 id="east-entrance-title">havenbrook</h2>
            <p id="east-entrance-description">The east side of Havenbrook has its own rules.</p>
            <span class="east-handwriting" aria-hidden="true">she didn't start anything.</span>
          </div>
          <figure class="east-photo" aria-hidden="true">
            <img src="assets/worlds/havenbrook-new.jpg" alt="">
            <figcaption>the east side</figcaption>
          </figure>
          <div class="east-pass" aria-hidden="true">
            <span class="east-pass-school">DMHS · hall pass</span>
            <span class="east-pass-row"><b>Name</b> Lee, Solar</span>
            <span class="east-pass-row"><b>Exit</b> East entrance</span>
            <span class="east-pass-row"><b>Time</b> 3:47 p.m.</span>
            <span class="east-pass-stamp">Tuesday</span>
          </div>
          <div class="east-bottomline"><span>Being noticed meant someone had made a decision.</span>${skip}</div>
        </div>`
    },

    'soul-of-minji': {
      prefix: 'quest',
      replay: 'Main quest · start again',
      enter: 'Enter Soul of Minji',
      loader: { mark: 'soul of minji', lines: ['QUEST ACCEPTED', 'locate minji.'] },
      markup: skip => `
        <div class="quest-scene">
          <img class="quest-backdrop" src="assets/worlds/minji-curtain.jpg" alt="" fetchpriority="high">
          <div class="quest-tint" aria-hidden="true"></div>
          <div class="quest-wisps" aria-hidden="true">${Array.from({length:10},(_,i) => `<span style="--wx:${[12,24,36,48,60,72,84,18,54,90][i]}%;--wd:${(i * -0.9).toFixed(1)}s"></span>`).join('')}</div>
          <div class="quest-grain" aria-hidden="true"></div>
          <div class="quest-topline"><span>Act I · The Spark</span><span>The practice room</span></div>
          <div class="quest-hud" aria-hidden="true"><span class="quest-hp"><i></i><i></i><i></i></span><span>Soul link <b>?</b></span></div>
          <div class="quest-title-block">
            <p class="quest-eyebrow">A mission that behaves like a game objective</p>
            <h2 id="quest-entrance-title">soul of minji</h2>
            <p id="quest-entrance-description">A crash, a missing Minji, and two Cherrys.</p>
            <span class="quest-handwriting" aria-hidden="true">that almost. that maybe.</span>
          </div>
          <div class="quest-system" aria-hidden="true"><span class="quest-system-head">System</span><span class="quest-type"></span><span class="quest-caret"></span></div>
          <div class="quest-objective" aria-hidden="true">
            <span class="quest-objective-head">Main quest</span>
            <span class="quest-objective-title">The Soul of Minji</span>
            <span class="quest-check"><i></i> Find Minji <b>0 / 1</b></span>
            <span class="quest-check"><i></i> Survive the crash <b class="quest-done">✓</b></span>
          </div>
          <div class="quest-bottomline"><span>One soul in the wrong body.</span>${skip}</div>
        </div>`,
      start: dialog => {
        const LINES = ['A soul has entered the wrong body.', 'Main quest unlocked: The Soul of Minji.', 'Objective: find Minji.'];
        const out = dialog.querySelector('.quest-type');
        let line = 0, ch = 0, timer;
        const type = () => {
          const text = LINES[line];
          out.textContent = text.slice(0, ++ch);
          if (text[ch - 1] && text[ch - 1] !== ' ') dialog.dispatchEvent(new CustomEvent('entrance:cue', { detail: 'type' }));
          if (ch < text.length) timer = setTimeout(type, 42);
          else { line = (line + 1) % LINES.length; ch = 0; timer = setTimeout(type, 2600); }
        };
        timer = setTimeout(type, 1500);
        return () => clearTimeout(timer);
      }
    },

    'saint-of-dead-air': {
      prefix: 'air',
      replay: 'Last pass · back to the stage',
      enter: 'Enter Saint of Dead Air',
      loader: { mark: 'saint of dead air', lines: ['four bars of count-off.', 'then nothing.'] },
      markup: skip => `
        <div class="air-scene">
          <img class="air-backdrop" src="assets/worlds/soda-backstage.jpg" alt="" fetchpriority="high">
          <div class="air-tint" aria-hidden="true"></div>
          <div class="air-led" aria-hidden="true"></div>
          <div class="air-grain" aria-hidden="true"></div>
          <div class="air-topline"><span>Arena · last pass</span><span>Soundcheck</span></div>
          <div class="air-tally" aria-hidden="true"><i></i><span class="air-tally-label">On air</span></div>
          <div class="air-title-block">
            <p class="air-eyebrow">Third-person limited · Jungwon</p>
            <h2 id="air-entrance-title">saint of dead air</h2>
            <p id="air-entrance-description">Seven seconds of live silence opens the Dead Air.</p>
            <span class="air-handwriting" aria-hidden="true">rooms lie.</span>
          </div>
          <div class="air-meter" aria-hidden="true">${Array.from({length:16},(_,i) => `<i style="--md:${(i * -0.13).toFixed(2)}s;--mh:${[40,62,78,55,90,70,48,84,66,58,92,74,50,68,80,60][i]}%"></i>`).join('')}<span class="air-count">7</span></div>
          <div class="air-setlist" aria-hidden="true">
            <span class="air-tape"></span>
            <span class="air-setlist-head">Last pass, then dinner</span>
            <span>1 · count-off (4 bars)</span>
            <span>2 · post-chorus · center X</span>
            <span>3 · hold</span>
            <span class="air-rule">rituals steady rooms.</span>
          </div>
          <div class="air-bottomline"><span>Keep all six in peripheral. Keep the room honest.</span>${skip}</div>
        </div>`,
      start: dialog => {
        const count = dialog.querySelector('.air-count');
        let timers = [];
        const cycle = () => {
          dialog.classList.add('air-dead');
          dialog.dispatchEvent(new CustomEvent('entrance:cue', { detail: 'dead-start' }));
          for (let n = 7; n >= 0; n--) timers.push(setTimeout(() => { count.textContent = String(n); }, (7 - n) * 1000));
          timers.push(setTimeout(() => {
            dialog.classList.remove('air-dead');
            dialog.dispatchEvent(new CustomEvent('entrance:cue', { detail: 'dead-end' }));
            timers.push(setTimeout(cycle, 14000 + Math.random() * 6000));
          }, 7000));
        };
        timers.push(setTimeout(cycle, 9000));
        return () => timers.forEach(clearTimeout);
      }
    },

    go: {
      prefix: 'rain',
      replay: 'DMHS · back into the rain',
      enter: 'Enter GO',
      loader: { mark: 'GO', lines: ['drrr. the bell.', 'throw the looks right back.'] },
      markup: skip => `
        <div class="rain-scene">
          <img class="rain-backdrop" src="assets/worlds/go-haechan.jpg" alt="" fetchpriority="high">
          <div class="rain-tint" aria-hidden="true"></div>
          <div class="rain-flash" aria-hidden="true"></div>
          <div class="rain-fall" aria-hidden="true"></div>
          <div class="rain-fall rain-fall-near" aria-hidden="true"></div>
          <div class="rain-glass" aria-hidden="true">${Array.from({length:9},(_,i) => `<span style="--rx:${[8,19,31,44,57,66,78,88,95][i]}%;--rd:${(i * -0.9).toFixed(1)}s;--rl:${[38,54,30,62,44,50,36,58,42][i]}%"></span>`).join('')}</div>
          <div class="rain-topline"><span>DMHS · senior year</span><span>The rain</span></div>
          <div class="rain-title-block">
            <p class="rain-eyebrow">Since the incident</p>
            <h2 id="rain-entrance-title">GO</h2>
            <p id="rain-entrance-description">A ruined reputation, and Cheng returning changed in the rain.</p>
            <span class="rain-handwriting" aria-hidden="true">she stopped caring completely.</span>
          </div>
          <figure class="rain-photo" aria-hidden="true">
            <img src="assets/worlds/go-group.jpg" alt="">
          </figure>
          <div class="rain-id" aria-hidden="true">
            <span class="rain-id-school">DMHS · student ID</span>
            <span class="rain-id-body"><i></i><span><b>Hyeyeon</b><span>Senior · English 4</span></span></span>
            <span class="rain-id-bar"></span>
          </div>
          <div class="rain-bottomline"><span>Soon enough, she'd be graduating.</span>${skip}</div>
        </div>`,
      start: dialog => {
        let timer;
        const strike = () => {
          dialog.classList.remove('rain-lightning'); void dialog.offsetWidth; dialog.classList.add('rain-lightning');
          dialog.dispatchEvent(new CustomEvent('entrance:cue', { detail: 'thunder' }));
          timer = setTimeout(strike, 13000 + Math.random() * 9000);
        };
        timer = setTimeout(strike, 6000);
        return () => clearTimeout(timer);
      }
    }
  };

  const PREF_KEY = 'kg-intro-sound';
  const readPref = () => { try { return localStorage.getItem(PREF_KEY); } catch { return null; } };
  const writePref = value => { try { localStorage.setItem(PREF_KEY, value); } catch {} };

  function mount(world) {
    const scene = SCENES[world.id];
    if (!scene) return () => {};
    const hero = document.querySelector('#worldPage .world-hero-content');
    if (!hero) return () => {};
    const p = scene.prefix;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const replay = document.createElement('button');
    replay.type = 'button';
    replay.className = `${p}-replay`;
    replay.innerHTML = `<span aria-hidden="true">↻</span> ${scene.replay}`;
    hero.appendChild(replay);
    let disposeEntrance = null;

    function play(isReplay = false) {
      if (disposeEntrance) disposeEntrance();
      const dialog = document.createElement('dialog');
      dialog.className = `world-entrance ${p}-entrance`;
      dialog.setAttribute('aria-labelledby', `${p}-entrance-title`);
      dialog.setAttribute('aria-describedby', `${p}-entrance-description`);
      const skip = `<span class="entrance-actions"><a class="${p}-skip entrance-home" href="index.html" data-entrance="home" aria-label="Back to all worlds" title="All worlds"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11.2 12 3.8l8.5 7.4V20.2h-5.6v-5.4H9.1v5.4H3.5z"/></svg></a><button class="${p}-skip entrance-sound" type="button" data-entrance="sound" aria-pressed="false" aria-label="Turn intro sound on"><span class="entrance-sound-icon" aria-hidden="true">♪</span> <span class="entrance-sound-label">Sound on</span></button><button class="${p}-skip" type="button" data-entrance="skip" autofocus>${reducedMotion.matches ? scene.enter : 'Skip intro'} <span aria-hidden="true">↗</span></button></span>`;
      dialog.innerHTML = scene.markup(skip);
      document.body.appendChild(dialog);
      const stopScene = scene.start ? scene.start(dialog) : null;
      window.Achievements?.note('intros', world.id, Object.keys(SCENES).length, 'every-door');
      dialog.addEventListener('entrance:cue', event => { if (event.detail === 'dead-end') window.Achievements?.unlock('dead-air'); });
      const music = window.WorldMusic;
      const musicWasPlaying = !!(music && music.isPlaying());
      if (musicWasPlaying) music.fadeOut(0.8);
      const engine = window.EntranceSounds ? window.EntranceSounds.create(world.id, dialog) : null;
      const soundBtn = dialog.querySelector('[data-entrance="sound"]');
      const syncSound = () => {
        const on = !!engine && engine.running;
        soundBtn.setAttribute('aria-pressed', String(on));
        soundBtn.setAttribute('aria-label', on ? 'Turn intro sound off' : 'Turn intro sound on');
        soundBtn.querySelector('.entrance-sound-label').textContent = on ? 'Sound off' : 'Sound on';
      };
      const turnOn = () => { engine.start(); writePref('on'); window.Achievements?.unlock('too-loud'); };
      if (!engine) soundBtn.hidden = true;
      else {
        engine.onchange = syncSound;
        soundBtn.addEventListener('click', () => {
          if (engine.running) { engine.stop(0.6); writePref('off'); }
          else if (engine.started) engine.resume();
          else turnOn();
        });
        dialog.addEventListener('pointerdown', event => {
          if (event.target.closest('[data-entrance]')) return;
          if (engine.started) engine.resume();
          else if (readPref() !== 'off') turnOn();
        });
        dialog.addEventListener('keydown', () => { if (engine.started) engine.resume(); });
        if (readPref() === 'on') engine.start();
      }
      syncSound();
      // The soundtrack waits for the reader to leave the entrance, then fades in under the loader.
      const handOff = () => {
        const ambient = !!engine && engine.running;
        if (engine) engine.stop(ambient ? (music ? 3.5 : 4) : 0);
        if (music && (!isReplay || musicWasPlaying)) music.fadeIn(ambient ? 4 : 2.5);
      };
      let exitTimer, loaderTimer;
      let leaving = false;
      const overflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const release = (restoreFocus = false) => {
        clearTimeout(exitTimer); clearTimeout(loaderTimer);
        if (stopScene) stopScene();
        dialog.remove();
        document.body.style.overflow = overflow;
        disposeEntrance = null;
        if (restoreFocus && replay.isConnected) replay.focus({preventScroll:true});
      };
      const leave = () => {
        if (leaving) return;
        leaving = true;
        handOff();
        if (reducedMotion.matches) { release(true); return; }
        const loader = document.createElement('div');
        loader.className = `entrance-loader ${p}-loader`;
        loader.setAttribute('role', 'status');
        loader.setAttribute('aria-label', `Opening ${world.title}`);
        loader.innerHTML = `<div class="entrance-loader-inner"><div class="entrance-loader-mark">${scene.loader.mark}</div><div class="entrance-loader-lines">${scene.loader.lines.map(line => `<span class="entrance-loader-line">${line}</span>`).join('')}</div><span class="entrance-loader-bar"><i></i></span></div>`;
        dialog.firstElementChild.appendChild(loader);
        let finishing = false;
        const finish = () => {
          if (finishing) return;
          finishing = true;
          clearTimeout(loaderTimer);
          dialog.classList.add('entrance-out');
          exitTimer = setTimeout(() => {
            release(true);
            document.body.classList.add('world-revealed');
            setTimeout(() => document.body.classList.remove('world-revealed'), 1800);
          }, 850);
        };
        loader.addEventListener('click', finish);
        loaderTimer = setTimeout(finish, 3600);
      };
      disposeEntrance = () => { if (engine) engine.stop(0); release(false); };
      dialog.querySelector('[data-entrance="skip"]').addEventListener('click',leave);
      dialog.querySelector('[data-entrance="home"]').addEventListener('click', () => { if (engine) engine.stop(0.25); });
      dialog.addEventListener('cancel',event => { event.preventDefault(); leave(); });
      dialog.showModal();
    }
    const onMotionChange = () => { if (reducedMotion.matches && disposeEntrance) disposeEntrance(); };
    const onPageHide = () => { if (disposeEntrance) disposeEntrance(); };
    replay.addEventListener('click',() => play(true));
    reducedMotion.addEventListener('change',onMotionChange);
    window.addEventListener('pagehide',onPageHide);
    if (!reducedMotion.matches) play();
    return () => {
      onPageHide(); replay.remove();
      reducedMotion.removeEventListener('change',onMotionChange);
      window.removeEventListener('pagehide',onPageHide);
    };
  }
  const willPlay = world => !!SCENES[world.id] && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return {mount, willPlay};
})();
