/* Short, optional world entrances. Page content remains usable without this script. */
window.WorldEntrances = (() => {
  function mount(world) {
    if (world.id !== 'runners') return () => {};
    const hero = document.querySelector('#worldPage .world-hero-content');
    if (!hero) return () => {};
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const replay = document.createElement('button');
    replay.type = 'button';
    replay.className = 'campus-replay';
    replay.innerHTML = '<span aria-hidden="true">↻</span> Fall semester · revisit campus';
    hero.appendChild(replay);
    let disposeEntrance = null;

    function play() {
      if (disposeEntrance) disposeEntrance();
      const dialog = document.createElement('dialog');
      dialog.className = 'campus-entrance';
      dialog.setAttribute('aria-labelledby', 'campus-entrance-title');
      dialog.setAttribute('aria-describedby', 'campus-entrance-description');
      dialog.innerHTML = `
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
          <div class="campus-bottomline"><span>New faces. Familiar trouble.</span><button class="campus-skip" type="button">${reducedMotion.matches ? 'Enter Runners' : 'Skip intro'} <span aria-hidden="true">↗</span></button></div>
          <div class="campus-timer" aria-hidden="true"></div>
        </div>`;
      document.body.appendChild(dialog);
      let autoTimer, exitTimer;
      let leaving = false;
      const overflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const release = (restoreFocus = false) => {
        clearTimeout(autoTimer); clearTimeout(exitTimer);
        dialog.remove();
        document.body.style.overflow = overflow;
        disposeEntrance = null;
        if (restoreFocus && replay.isConnected) replay.focus({preventScroll:true});
      };
      const leave = () => {
        if (leaving) return;
        leaving = true;
        if (reducedMotion.matches) { release(true); return; }
        dialog.classList.add('campus-leaving');
        exitTimer = setTimeout(() => release(true), 420);
      };
      disposeEntrance = () => release(false);
      dialog.querySelector('.campus-skip').addEventListener('click',leave);
      dialog.addEventListener('cancel',event => { event.preventDefault(); leave(); });
      dialog.showModal();
      if (!reducedMotion.matches) autoTimer = setTimeout(leave, 8000);
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
