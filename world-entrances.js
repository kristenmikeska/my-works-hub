/* Short, optional world entrances. Page content remains usable without this script.
   Each scene uses its own class prefix (e.g. campus-*, tide-*) for styling in world-entrances.css. */
window.WorldEntrances = (() => {
  const SCENES = {
    runners: {
      prefix: 'campus',
      replay: 'Fall semester · revisit campus',
      enter: 'Enter Runners',
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

    function play() {
      if (disposeEntrance) disposeEntrance();
      const dialog = document.createElement('dialog');
      dialog.className = `world-entrance ${p}-entrance`;
      dialog.setAttribute('aria-labelledby', `${p}-entrance-title`);
      dialog.setAttribute('aria-describedby', `${p}-entrance-description`);
      const skip = `<span class="entrance-actions"><button class="${p}-skip entrance-sound" type="button" data-entrance="sound" aria-pressed="false" aria-label="Turn intro sound on"><span class="entrance-sound-icon" aria-hidden="true">♪</span> <span class="entrance-sound-label">Sound on</span></button><button class="${p}-skip" type="button" data-entrance="skip">${reducedMotion.matches ? scene.enter : 'Skip intro'} <span aria-hidden="true">↗</span></button></span>`;
      dialog.innerHTML = scene.markup(skip);
      document.body.appendChild(dialog);
      const stopScene = scene.start ? scene.start(dialog) : null;
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
      const turnOn = () => { engine.start(); writePref('on'); };
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
      const handOff = () => {
        if (engine && engine.running) {
          if (music) { engine.stop(3.5); music.fadeIn(4); } else engine.stop(4);
        } else {
          if (engine) engine.stop(0);
          if (musicWasPlaying) music.fadeIn(1.2);
        }
      };
      let exitTimer;
      let leaving = false;
      const overflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const release = (restoreFocus = false) => {
        clearTimeout(exitTimer);
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
        dialog.classList.add(`${p}-leaving`);
        exitTimer = setTimeout(() => release(true), 420);
      };
      disposeEntrance = () => { if (engine) engine.stop(0); release(false); };
      dialog.querySelector('[data-entrance="skip"]').addEventListener('click',leave);
      dialog.addEventListener('cancel',event => { event.preventDefault(); leave(); });
      dialog.showModal();
    }
    const onMotionChange = () => { if (reducedMotion.matches && disposeEntrance) disposeEntrance(); };
    const onPageHide = () => { if (disposeEntrance) disposeEntrance(); };
    const onVisibility = () => { if (document.hidden) onPageHide(); };
    replay.addEventListener('click',play);
    reducedMotion.addEventListener('change',onMotionChange);
    window.addEventListener('pagehide',onPageHide);
    document.addEventListener('visibilitychange',onVisibility);
    if (!reducedMotion.matches) play();
    return () => {
      onPageHide(); replay.remove();
      reducedMotion.removeEventListener('change',onMotionChange);
      window.removeEventListener('pagehide',onPageHide);
      document.removeEventListener('visibilitychange',onVisibility);
    };
  }
  return {mount};
})();
