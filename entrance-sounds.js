/* Ambient sound for the world entrances, synthesized with Web Audio (no audio files).
   create(worldId, dialog) returns an engine with start(), stop(fadeSeconds), resume() and a running flag. */
window.EntranceSounds = (() => {
  const AC = window.AudioContext || window.webkitAudioContext;
  const rand = (a, b) => a + Math.random() * (b - a);
  const LEVELS = { strangers: 1, delicate: 1.4, 'petal-thorn': 1.7, runners: 1.5 };

  function makeNoise(ctx, seconds, color) {
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      let last = 0, b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        if (color === 'brown') { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
        else if (color === 'pink') {
          b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759; b2 = 0.969 * b2 + w * 0.153852;
          b3 = 0.8665 * b3 + w * 0.3104856; b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
          d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11; b6 = w * 0.115926;
        } else d[i] = w;
      }
      // Blend the tail into the head so the loop point doesn't click.
      const fade = Math.floor(ctx.sampleRate * 0.4);
      for (let i = 0; i < fade; i++) { const t = i / fade; d[len - fade + i] = d[len - fade + i] * (1 - t) + d[i] * t; }
    }
    return buf;
  }

  function kit(ctx, out) {
    const timers = new Set();
    const listeners = [];
    const buffers = {};
    const k = {
      ctx, out,
      noise(color = 'white', seconds = 6) { const key = color + seconds; return buffers[key] || (buffers[key] = makeNoise(ctx, seconds, color)); },
      loop(buf) { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; s.start(0, rand(0, buf.duration)); return s; },
      filter(type, freq, q = 0.7) { const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q; return f; },
      gain(v = 1) { const g = ctx.createGain(); g.gain.value = v; return g; },
      pan(v = 0) { if (!ctx.createStereoPanner) return ctx.createGain(); const p = ctx.createStereoPanner(); p.pan.value = v; return p; },
      chain(...nodes) { for (let i = 0; i < nodes.length - 1; i++) nodes[i].connect(nodes[i + 1]); return nodes[nodes.length - 1]; },
      later(fn, seconds) { const id = setTimeout(() => { timers.delete(id); fn(); }, seconds * 1000); timers.add(id); },
      on(target, type, fn) { target.addEventListener(type, fn); listeners.push([target, type, fn]); },
      every(fn, seconds) { const id = setInterval(fn, seconds * 1000); timers.add(id); },
      burst(t, { freq = 3000, q = 1, type = 'bandpass', level = 0.3, decay = 0.02, pan = 0 } = {}) {
        const s = ctx.createBufferSource(); s.buffer = k.noise('white', 1); s.start(t, rand(0, 0.9), decay * 4 + 0.02);
        const g = k.gain(0); g.gain.setValueAtTime(level, t); g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
        k.chain(s, k.filter(type, freq, q), g, k.pan(pan), out);
      },
      tone(t, { freq = 440, to, type = 'sine', level = 0.2, attack = 0.005, decay = 0.4, pan = 0, glide } = {}) {
        const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
        if (to) o.frequency.exponentialRampToValueAtTime(to, t + (glide || decay));
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(level, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
        k.chain(o, g, k.pan(pan), out); o.start(t); o.stop(t + attack + decay + 0.05);
      },
      clear() { timers.forEach(id => { clearTimeout(id); clearInterval(id); }); timers.clear(); listeners.splice(0).forEach(([t, type, fn]) => t.removeEventListener(type, fn)); }
    };
    return k;
  }

  const SCENES = {
    /* Strangers: the Yellow Sea at night. Surf, gulls, a foghorn far out on the water. */
    strangers(k) {
      const { ctx, out } = k;
      k.chain(k.loop(k.noise('brown', 8)), k.filter('lowpass', 320), k.gain(0.42), out);
      const surfLP = k.filter('lowpass', 500), surfG = k.gain(0.06);
      k.chain(k.loop(k.noise('pink', 8)), surfLP, surfG, out);
      const foamG = k.gain(0.0001);
      k.chain(k.loop(k.noise('white', 6)), k.filter('highpass', 3200), foamG, out);
      const wave = () => {
        const t = ctx.currentTime + 0.05, rise = rand(2, 3.4), fall = rand(3.4, 5.4), peak = rand(0.5, 0.9);
        for (const [param, a, b, c] of [[surfG.gain, peak, 0.07, 0], [surfLP.frequency, 1500, 460, 0]]) {
          param.cancelScheduledValues(t); param.setValueAtTime(param.value, t);
          param.linearRampToValueAtTime(a, t + rise); param.exponentialRampToValueAtTime(b, t + rise + fall);
        }
        foamG.gain.cancelScheduledValues(t); foamG.gain.setValueAtTime(0.0001, t);
        foamG.gain.exponentialRampToValueAtTime(0.13 * peak, t + rise + 0.3); foamG.gain.exponentialRampToValueAtTime(0.0001, t + rise + fall * 0.85);
        k.later(wave, rise + fall - rand(0.6, 1.6));
      };
      const gull = (t, pan, level, pitch) => {
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        o.frequency.setValueAtTime(1450 * pitch, t); o.frequency.linearRampToValueAtTime(2250 * pitch, t + 0.07); o.frequency.exponentialRampToValueAtTime(1050 * pitch, t + 0.4);
        const rasp = ctx.createOscillator(); rasp.frequency.value = 31; const raspG = k.gain(55); rasp.connect(raspG); raspG.connect(o.frequency);
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(level, t + 0.04); g.gain.setValueAtTime(level, t + 0.22); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.44);
        const f1 = k.filter('bandpass', 1750, 3.5), f2 = k.filter('bandpass', 3100, 5), mix = k.gain(1);
        o.connect(f1); o.connect(f2); f1.connect(mix); f2.connect(mix);
        k.chain(mix, g, k.filter('lowpass', 4200), k.pan(pan), out);
        o.start(t); rasp.start(t); o.stop(t + 0.5); rasp.stop(t + 0.5);
      };
      const flock = () => {
        const calls = Math.floor(rand(2, 5)), pan = rand(-0.75, 0.75), level = rand(0.035, 0.085), pitch = rand(0.88, 1.12);
        let t = ctx.currentTime + 0.05;
        for (let i = 0; i < calls; i++) { gull(t, pan, level * rand(0.75, 1), pitch * rand(0.96, 1.05)); t += rand(0.32, 0.5); }
        k.later(flock, rand(6, 13));
      };
      const foghorn = () => {
        const t = ctx.currentTime + 0.05, g = k.gain(0);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.5); g.gain.setValueAtTime(0.16, t + 2.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 4);
        const lp = k.filter('lowpass', 420); k.chain(lp, g, k.pan(-0.3), out);
        for (const f of [98, 98.7, 147]) { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(lp); o.start(t); o.stop(t + 4.1); }
        k.later(foghorn, rand(24, 36));
      };
      wave(); k.later(flock, 1.6); k.later(foghorn, 9);
    },

    /* Delicate: the photo line outside an event in Seoul at night. The show thumps through the walls,
       the street goes by, and every so often heels cross the carpet and the cameras and fans erupt. */
    delicate(k, dialog, openedAt) {
      const { ctx, out } = k;
      k.chain(k.loop(k.noise('brown', 8)), k.filter('lowpass', 220), k.gain(0.3), out);
      const crowdG = k.gain(0.11);
      k.chain(k.loop(k.noise('pink', 8)), k.filter('bandpass', 650, 0.7), k.filter('lowpass', 1600), crowdG, out);
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; const lfoG = k.gain(0.04); lfo.connect(lfoG); lfoG.connect(crowdG.gain); lfo.start();

      // Camera bodies: shutter + mirror, and now and then the flash recharging.
      const shutter = (t, pan, level = 1) => {
        k.burst(t, { freq: 2600, q: 1.1, level: 0.32 * level, decay: 0.022, pan });
        k.burst(t + 0.048, { freq: 3400, q: 1.4, level: 0.24 * level, decay: 0.03, pan });
        k.tone(t, { freq: 150, to: 90, level: 0.08 * level, decay: 0.05, pan });
        if (Math.random() < 0.3) k.tone(t + 0.12, { freq: 2600, to: 8200, glide: 0.75, level: 0.008 * level, attack: 0.05, decay: 0.8, pan });
      };
      const flashes = [...dialog.querySelectorAll('.flash-pop')].map(el => ({
        delay: parseFloat(el.style.getPropertyValue('--d')) || 0,
        pan: ((parseFloat(el.style.getPropertyValue('--x')) || 50) / 50 - 1) * 0.8
      }));
      const CYCLE = 5.8, HIT = 0.17;
      const flashesVisible = getComputedStyle(dialog.querySelector('.flash-pops') || dialog).display !== 'none';
      let scheduledUntil = (performance.now() - openedAt) / 1000;
      const plan = () => {
        const now = (performance.now() - openedAt) / 1000, until = now + 0.6;
        if (flashesVisible) {
          for (const f of flashes) {
            for (let n = Math.floor((scheduledUntil - f.delay - HIT) / CYCLE); ; n++) {
              const at = f.delay + HIT + n * CYCLE;
              if (at >= until) break;
              if (at > scheduledUntil && at >= now) shutter(ctx.currentTime + (at - now), f.pan);
            }
          }
        }
        scheduledUntil = until;
      };
      const motorDrive = () => {
        let t = ctx.currentTime + 0.05; const pan = rand(-0.8, 0.8);
        for (let i = 0, n = Math.floor(rand(3, 6)); i < n; i++) { shutter(t, pan); t += rand(0.09, 0.12); }
        k.later(motorDrive, rand(5, 11));
      };

      // The show inside, heard through the walls: kick and bass at 118 bpm.
      const venue = k.filter('lowpass', 190); k.chain(venue, k.gain(0.3), out);
      const BEAT = 60 / 118, BASS = [55, 55, 65.4, 49];
      let nextBeat = ctx.currentTime + 0.1, beatIndex = 0;
      const pulse = () => {
        while (nextBeat < ctx.currentTime + 0.35) {
          const t = nextBeat, kick = ctx.createOscillator(), kg = k.gain(0);
          kick.frequency.setValueAtTime(115, t); kick.frequency.exponentialRampToValueAtTime(48, t + 0.12);
          kg.gain.setValueAtTime(0.0001, t); kg.gain.exponentialRampToValueAtTime(0.9, t + 0.005); kg.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
          k.chain(kick, kg, venue); kick.start(t); kick.stop(t + 0.32);
          const bass = ctx.createOscillator(), bg = k.gain(0); bass.type = 'triangle';
          bass.frequency.value = BASS[Math.floor(beatIndex / 8) % BASS.length];
          bg.gain.setValueAtTime(0.0001, t + BEAT / 2); bg.gain.exponentialRampToValueAtTime(0.35, t + BEAT / 2 + 0.02); bg.gain.exponentialRampToValueAtTime(0.0001, t + BEAT - 0.02);
          k.chain(bass, bg, venue); bass.start(t + BEAT / 2); bass.stop(t + BEAT);
          nextBeat += BEAT; beatIndex++;
        }
      };

      // The street: cars passing, a horn somewhere down the block.
      const passingCar = () => {
        const t = ctx.currentTime + 0.05, dur = rand(2.6, 4), dir = Math.random() < 0.5 ? 1 : -1;
        const src = k.loop(k.noise('brown', 8)), bp = k.filter('bandpass', 260, 0.8), g = k.gain(0), pn = k.pan(-0.9 * dir);
        bp.frequency.setValueAtTime(220, t); bp.frequency.linearRampToValueAtTime(620, t + dur * 0.5); bp.frequency.linearRampToValueAtTime(240, t + dur);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + dur * 0.5); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        if (pn.pan) pn.pan.linearRampToValueAtTime(0.9 * dir, t + dur);
        k.chain(src, bp, g, pn, out); src.stop(t + dur + 0.1);
        if (Math.random() < 0.35) {
          const ht = t + rand(0.5, 1.5), lp = k.filter('lowpass', 1300), hg = k.gain(0);
          const honks = Math.random() < 0.5 ? [[0, 0.22]] : [[0, 0.14], [0.2, 0.3]];
          for (const [a, b] of honks) { hg.gain.setValueAtTime(0.0001, ht + a); hg.gain.exponentialRampToValueAtTime(0.035, ht + a + 0.015); hg.gain.setValueAtTime(0.035, ht + b - 0.02); hg.gain.exponentialRampToValueAtTime(0.0001, ht + b); }
          k.chain(lp, hg, k.pan(rand(-0.6, 0.6)), out);
          for (const f of [392, 466]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(lp); o.start(ht); o.stop(ht + 0.35); }
        }
        k.later(passingCar, rand(7, 15));
      };

      // Fans: a swell of screaming voices (sawtooth through vowel formants) over a roar.
      const scream = (t, pan, level) => {
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        const f0 = rand(620, 1050), hold = rand(0.6, 1.3);
        o.frequency.setValueAtTime(f0 * 0.92, t); o.frequency.linearRampToValueAtTime(f0, t + 0.18); o.frequency.linearRampToValueAtTime(f0 * rand(0.95, 1.08), t + hold);
        const vib = ctx.createOscillator(), vg = k.gain(f0 * 0.03); vib.frequency.value = rand(5, 7); vib.connect(vg); vg.connect(o.frequency);
        const mix = k.gain(1);
        for (const [f, q, l] of [[850, 5, 1], [1250, 6, 0.7], [2900, 8, 0.35]]) { const bp = k.filter('bandpass', f, q), bg = k.gain(l); o.connect(bp); k.chain(bp, bg, mix); }
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(level, t + 0.16); g.gain.setValueAtTime(level, t + hold); g.gain.exponentialRampToValueAtTime(0.0001, t + hold + 0.45);
        k.chain(mix, g, k.filter('lowpass', 3600), k.pan(pan), out);
        o.start(t); vib.start(t); o.stop(t + hold + 0.5); vib.stop(t + hold + 0.5);
      };
      const fanSwell = (t, center) => {
        const roar = k.loop(k.noise('pink', 8)), rg = k.gain(0);
        rg.gain.setValueAtTime(0.0001, t); rg.gain.exponentialRampToValueAtTime(0.3, t + 0.5); rg.gain.setValueAtTime(0.3, t + 1.8); rg.gain.exponentialRampToValueAtTime(0.0001, t + 3.8);
        k.chain(roar, k.filter('bandpass', 1400, 0.6), rg, k.pan(center * 0.5), out); roar.stop(t + 4);
        for (let i = 0, n = Math.floor(rand(8, 14)); i < n; i++) scream(t + rand(0, 0.9), Math.max(-0.95, Math.min(0.95, center + rand(-0.6, 0.6))), rand(0.025, 0.055));
      };

      // The walk: heels crossing the carpet; at the photo line the cameras and fans go off.
      const heel = (t, pan, level) => {
        k.burst(t, { freq: 4200, q: 2.2, level: 0.26 * level, decay: 0.01, pan });
        k.burst(t + 0.006, { freq: 1300, q: 1.2, level: 0.14 * level, decay: 0.035, pan });
        k.tone(t, { freq: 320, to: 170, level: 0.05 * level, decay: 0.04, pan });
      };
      const walk = () => {
        const steps = Math.floor(rand(16, 22)), dir = Math.random() < 0.5 ? 1 : -1;
        let t = ctx.currentTime + 0.1;
        for (let i = 0; i < steps; i++) {
          const x = i / (steps - 1), pan = (x * 1.7 - 0.85) * dir, near = 1 - Math.abs(x - 0.5) * 1.3;
          heel(t, pan, Math.max(0.25, near) * (i % 2 ? 0.9 : 1));
          if (i === Math.floor(steps / 2)) {
            fanSwell(t, pan);
            let ft = t + 0.05;
            for (let j = 0, n = Math.floor(rand(12, 20)); j < n; j++) { shutter(ft, rand(-0.9, 0.9), rand(0.6, 1)); ft += rand(0.05, 0.16); }
          }
          t += rand(0.4, 0.47);
        }
        k.later(walk, (t - ctx.currentTime) + rand(9, 16));
      };

      plan(); k.every(plan, 0.5); k.later(motorDrive, 2.4);
      pulse(); k.every(pulse, 0.1);
      k.later(passingCar, 1.5);
      k.later(walk, 3.5);
    },

    /* Petal & Thorn: 11 p.m. in the dorm. PC hum, a soft pad, mechanical keys, and the queue popping. */
    'petal-thorn'(k, dialog) {
      const { ctx, out } = k;
      k.chain(k.loop(k.noise('pink', 8)), k.filter('lowpass', 240), k.gain(0.14), out);
      const padFilter = k.filter('lowpass', 950), padG = k.gain(0.0001);
      k.chain(padFilter, padG, out);
      padG.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 3);
      for (const [f, d] of [[220, -4], [261.63, 3], [329.63, -2], [392, 5]]) {
        const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f; o.detune.value = d; o.connect(padFilter); o.start();
      }
      const key = (t, pan) => {
        k.burst(t, { freq: rand(2300, 4200), q: 0.9, level: rand(0.12, 0.24), decay: 0.014, pan });
        k.tone(t, { freq: rand(190, 240), to: 110, level: 0.07, decay: 0.03, pan });
      };
      const typing = () => {
        let t = ctx.currentTime + 0.05; const pan = rand(0.15, 0.45);
        for (let i = 0, n = Math.floor(rand(6, 22)); i < n; i++) { key(t, pan); t += rand(0.055, 0.15); }
        if (Math.random() < 0.35) { t += 0.3; k.burst(t, { freq: 1800, type: 'highpass', level: 0.18, decay: 0.012, pan: 0.5 }); k.burst(t + 0.11, { freq: 1800, type: 'highpass', level: 0.16, decay: 0.012, pan: 0.5 }); }
        k.later(typing, (t - ctx.currentTime) + rand(0.8, 2.8));
      };
      const matchFound = () => {
        const t = ctx.currentTime + 0.05;
        k.tone(t, { freq: 90, to: 45, level: 0.3, decay: 0.5 });
        [[659.25, 0], [830.6, 0.09], [987.77, 0.18], [1318.5, 0.27]].forEach(([f, d]) => {
          k.tone(t + d, { freq: f, level: 0.12, decay: 1.4 });
          k.tone(t + d, { freq: f * 2, level: 0.03, decay: 0.6 });
        });
      };
      k.on(dialog, 'entrance:cue', e => { if (e.detail === 'match') matchFound(); });
      k.later(typing, 0.8);
    },

    /* Runners: autumn wind across the quad, leaves skittering on the paths. */
    runners(k) {
      const { ctx, out } = k;
      const gusts = [-0.5, 0.5].map(p => {
        const bp = k.filter('bandpass', 500, 0.6), g = k.gain(0.12);
        k.chain(k.loop(k.noise('pink', 8)), bp, g, k.pan(p), out);
        return { bp, g };
      });
      k.chain(k.loop(k.noise('brown', 8)), k.filter('lowpass', 260), k.gain(0.22), out);
      const leaves = level => {
        const t0 = ctx.currentTime + 0.05;
        for (let i = 0, n = Math.floor(rand(10, 26) * level); i < n; i++) {
          k.burst(t0 + rand(0, 1.8), { freq: rand(3000, 7000), type: 'highpass', q: 0.5, level: rand(0.02, 0.07) * level, decay: rand(0.008, 0.03), pan: rand(-0.8, 0.8) });
        }
      };
      const gust = () => {
        const t = ctx.currentTime + 0.05, rise = rand(1.5, 3), fall = rand(2.5, 4.5), peak = rand(0.28, 0.55);
        gusts.forEach(({ bp, g }, i) => {
          const p = peak * rand(0.7, 1);
          g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(g.gain.value, t);
          g.gain.linearRampToValueAtTime(p, t + rise + i * 0.3); g.gain.exponentialRampToValueAtTime(0.08, t + rise + fall);
          bp.frequency.cancelScheduledValues(t); bp.frequency.setValueAtTime(bp.frequency.value, t);
          bp.frequency.linearRampToValueAtTime(rand(750, 1100), t + rise); bp.frequency.exponentialRampToValueAtTime(380, t + rise + fall);
        });
        k.later(() => leaves(peak * 2), rise * 0.7);
        k.later(gust, rise + fall - rand(0.5, 1.5));
      };
      gust(); k.every(() => leaves(0.4), 2.2);
    }
  };

  function create(worldId, dialog) {
    const scene = SCENES[worldId];
    if (!scene || !AC) return null;
    const openedAt = performance.now();
    let ctx = null, master = null, tools = null, stopped = false, built = false;
    // Build the scene only once audio is actually running, so nothing piles up while the browser holds sound back.
    const build = () => {
      if (built || !ctx || stopped || ctx.state !== 'running') return;
      built = true;
      master.gain.setValueAtTime(0.0001, ctx.currentTime); master.gain.exponentialRampToValueAtTime(0.9 * (LEVELS[worldId] || 1), ctx.currentTime + 2);
      tools = kit(ctx, master);
      scene(tools, dialog, openedAt);
    };
    const engine = {
      get running() { return !!ctx && !stopped && ctx.state === 'running'; },
      get started() { return !!ctx && !stopped; },
      onchange: null,
      start() {
        if (ctx && !stopped) { ctx.resume().catch(() => {}); return; }
        stopped = false; built = false;
        ctx = new AC();
        const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4;
        master = ctx.createGain(); master.gain.value = 0.0001;
        master.connect(comp); comp.connect(ctx.destination);
        ctx.onstatechange = () => { build(); if (engine.onchange) engine.onchange(); };
        ctx.resume().then(build).catch(() => {});
        build();
        if (engine.onchange) engine.onchange();
      },
      resume() { if (ctx && !stopped && ctx.state !== 'running') ctx.resume().catch(() => {}); },
      stop(fade = 0.6) {
        if (!ctx || stopped) return;
        stopped = true;
        const c = ctx, t = c.currentTime;
        master.gain.cancelScheduledValues(t); master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), t);
        master.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(0.05, fade));
        if (tools) tools.clear();
        tools = null;
        setTimeout(() => { c.close().catch(() => {}); }, Math.max(0.05, fade) * 1000 + 150);
        ctx = null;
        if (engine.onchange) engine.onchange();
      }
    };
    return engine;
  }

  return { create };
})();
