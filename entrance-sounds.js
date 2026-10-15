/* Ambient sound for the world entrances, synthesized with Web Audio (no audio files).
   create(worldId, dialog) returns an engine with start(), stop(fadeSeconds), resume() and a running flag. */
window.EntranceSounds = (() => {
  const AC = window.AudioContext || window.webkitAudioContext;
  const rand = (a, b) => a + Math.random() * (b - a);
  const LEVELS = { strangers: 1, delicate: 1.4, 'petal-thorn': 1.7, runners: 1.5, peace: 3.3, recherche: 1.7, secret: 3.6, hoax: 2.6, casual: 3.6, havenbrook: 1.8, 'soul-of-minji': 2.4, 'saint-of-dead-air': 1.8, go: 1.6 };

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
      reverb(seconds = 1.6, decay = 3) {
        const len = Math.floor(ctx.sampleRate * seconds), ir = ctx.createBuffer(2, len, ctx.sampleRate);
        for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay); }
        const c = ctx.createConvolver(); c.buffer = ir; return c;
      },
      burst(t, { freq = 3000, q = 1, type = 'bandpass', level = 0.3, decay = 0.02, pan = 0, to } = {}) {
        const s = ctx.createBufferSource(); s.buffer = k.noise('white', 1); s.start(t, rand(0, 0.9), decay * 4 + 0.02);
        const g = k.gain(0); g.gain.setValueAtTime(level, t); g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
        k.chain(s, k.filter(type, freq, q), g, k.pan(pan), to || this.out);
      },
      tone(t, { freq = 440, to, type = 'sine', level = 0.2, attack = 0.005, decay = 0.4, pan = 0, glide, dest } = {}) {
        const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
        if (to) o.frequency.exponentialRampToValueAtTime(to, t + (glide || decay));
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(level, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
        k.chain(o, g, k.pan(pan), dest || this.out); o.start(t); o.stop(t + attack + decay + 0.05);
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
    },
    /* Peace: the interview room. Her foot on the concrete, the light buzzing, detectives coming and going. */
    peace(k, dialog, openedAt) {
      const { ctx, out } = k;
      const room = k.gain(1), verb = k.reverb(1.8, 2.6), wet = k.gain(0.55);
      room.connect(out); k.chain(room, verb, wet, out);
      k.chain(k.loop(k.noise('pink', 8)), k.filter('lowpass', 420), k.gain(0.06), out);
      const hum = ctx.createOscillator(); hum.type = 'sawtooth'; hum.frequency.value = 120;
      k.chain(hum, k.filter('bandpass', 240, 2), k.gain(0.014), out); hum.start();
      const mains = ctx.createOscillator(); mains.frequency.value = 60; k.chain(mains, k.gain(0.02), out); mains.start();
      const buzz = () => { const t = ctx.currentTime + 0.02; for (let i = 0; i < 6; i++) k.burst(t + i * 0.035, { freq: 2600, type: 'highpass', level: 0.035, decay: 0.02 }); };
      const flickerAt = 9 * 0.62;
      const syncFlicker = () => { const el = (performance.now() - openedAt) / 1000, wait = flickerAt - (el % 9); k.later(() => { buzz(); syncFlicker(); }, wait < 0.05 ? wait + 9 : wait); };
      const tap = (t, level = 1) => {
        k.tone(t, { freq: 115, to: 58, level: 0.22 * level, decay: 0.09, dest: room });
        k.burst(t, { freq: 900, q: 1, level: 0.1 * level, decay: 0.03, to: room });
      };
      const PATTERNS = [[0, 0.9, 1.8], [0, 0.28, 1.2], [0], [0, 0.9, 1.8, 2.08]];
      let pattern = 0;
      const tapping = () => {
        const t = ctx.currentTime + 0.05, beats = PATTERNS[pattern++ % PATTERNS.length];
        beats.forEach(b => tap(t + b, rand(0.8, 1)));
        k.later(tapping, beats[beats.length - 1] + rand(2, 3.6));
      };
      const step = (t, pan, level, heel) => heel
        ? (k.burst(t, { freq: 4000, q: 2, level: 0.18 * level, decay: 0.01, pan, to: room }), k.burst(t + 0.006, { freq: 1300, q: 1.2, level: 0.1 * level, decay: 0.035, pan, to: room }))
        : (k.tone(t, { freq: 140, to: 80, level: 0.12 * level, decay: 0.06, pan, dest: room }), k.burst(t, { freq: 700, q: 0.8, level: 0.06 * level, decay: 0.05, pan, to: room }));
      const chair = t => {
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(380, t); o.frequency.linearRampToValueAtTime(520, t + 0.45);
        const lfo = ctx.createOscillator(), lg = k.gain(60); lfo.frequency.value = 34; lfo.connect(lg); lg.connect(o.frequency);
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.035, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
        k.chain(o, k.filter('bandpass', 1500, 3), g, room); o.start(t); lfo.start(t); o.stop(t + 0.55); lfo.stop(t + 0.55);
      };
      const door = (t, slam) => {
        if (slam) {
          k.burst(t, { freq: 220, type: 'lowpass', level: 0.55, decay: 0.25, pan: -0.5, to: room });
          k.tone(t, { freq: 75, to: 38, level: 0.4, decay: 0.35, pan: -0.5, dest: room });
          k.burst(t + 0.05, { freq: 3000, q: 3, level: 0.08, decay: 0.02, pan: -0.5, to: room });
        } else {
          const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(150, t); o.frequency.linearRampToValueAtTime(95, t + 0.9);
          const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.03, t + 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + 1);
          k.chain(o, k.filter('bandpass', 900, 6), g, k.pan(-0.5), room); o.start(t); o.stop(t + 1.05);
        }
      };
      let leaving = true;
      const detectives = () => {
        let t = ctx.currentTime + 0.1;
        if (leaving) {
          chair(t); t += 0.9;
          for (let i = 0; i < 5; i++) { step(t, -0.1 - i * 0.1, 1 - i * 0.12, false); step(t + 0.27, -0.05 - i * 0.1, 0.9 - i * 0.12, true); t += 0.55; }
          door(t + 0.3, true);
        } else {
          door(t, false); t += 1.1;
          for (let i = 0; i < 6; i++) { step(t, -0.5 + i * 0.09, 0.5 + i * 0.1, true); t += 0.5; }
          chair(t + 0.2);
        }
        leaving = !leaving;
        k.later(detectives, (t - ctx.currentTime) + rand(9, 14));
      };
      k.later(tapping, 0.8); syncFlicker(); k.later(detectives, 7);
    },

    /* Recherche: inside the Castle at dinner. The clock, the crystal, Manhattan through the glass. */
    recherche(k) {
      const { ctx, out } = k;
      const hall = k.gain(1), verb = k.reverb(2.4, 2.2), wet = k.gain(0.45);
      hall.connect(out); k.chain(hall, verb, wet, out);
      k.chain(k.loop(k.noise('brown', 8)), k.filter('lowpass', 330), k.gain(0.2), out);
      k.chain(k.loop(k.noise('pink', 8)), k.filter('bandpass', 900, 0.7), k.filter('lowpass', 1000), k.gain(0.03), out);
      const murmurG = k.gain(0.05);
      k.chain(k.loop(k.noise('pink', 8)), k.filter('bandpass', 460, 0.9), murmurG, hall);
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09; const lfoG = k.gain(0.02); lfo.connect(lfoG); lfoG.connect(murmurG.gain); lfo.start();
      let nextTick = ctx.currentTime + 0.2, tick = 0;
      const clock = () => {
        while (nextTick < ctx.currentTime + 0.4) {
          k.burst(nextTick, { freq: tick % 2 ? 1500 : 2300, q: 4, level: 0.11, decay: 0.025, pan: -0.35, to: hall });
          nextTick += 1; tick++;
        }
      };
      const bell = (t, f) => [[1, 0.06, 3.2], [2.76, 0.025, 1.8], [5.4, 0.015, 1.1], [8.93, 0.008, 0.6]].forEach(([r, l, d]) => k.tone(t, { freq: f * r, level: l, attack: 0.004, decay: d, pan: -0.35, dest: hall }));
      const chime = () => {
        const t = ctx.currentTime + 0.1;
        [415.3, 369.99, 329.63, 246.94].forEach((f, i) => bell(t + i * 0.85, f));
        k.later(chime, rand(26, 34));
      };
      const clink = (t, pan) => [2637, 3520, 4186, 5274].forEach(f => k.tone(t, { freq: f * rand(0.98, 1.02), level: rand(0.008, 0.02), attack: 0.002, decay: rand(0.7, 1.3), pan, dest: hall }));
      const toast = () => {
        const t = ctx.currentTime + 0.05, pan = rand(-0.4, 0.6);
        clink(t, pan); if (Math.random() < 0.6) clink(t + rand(0.12, 0.3), pan + 0.1);
        if (Math.random() < 0.5) k.burst(t + rand(0.6, 1.4), { freq: 4800, type: 'highpass', level: 0.03, decay: 0.03, pan, to: hall });
        k.later(toast, rand(5, 10));
      };
      const siren = () => {
        const t = ctx.currentTime + 0.05, dur = rand(7, 10);
        const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 950;
        const wail = ctx.createOscillator(), wg = k.gain(330); wail.frequency.value = 0.42; wail.connect(wg); wg.connect(o.frequency);
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.022, t + dur * 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        k.chain(o, k.filter('lowpass', 1300), g, k.pan(rand(0.3, 0.8)), out); o.start(t); wail.start(t); o.stop(t + dur); wail.stop(t + dur);
        k.later(siren, rand(22, 36));
      };
      clock(); k.every(clock, 0.2); k.later(chime, 5); k.later(toast, 2.2); k.later(siren, 11);
    },

    /* Secret: the practice room after the festival. The track on repeat, sneakers, the phones lighting up. */
    secret(k, dialog) {
      const { ctx, out } = k;
      k.chain(k.loop(k.noise('pink', 8)), k.filter('lowpass', 300), k.gain(0.07), out);
      const track = k.filter('lowpass', 2600); k.chain(track, k.gain(0.22), out);
      const BEAT = 60 / 100; let nextBeat = ctx.currentTime + 0.1, beat = 0;
      const groove = () => {
        while (nextBeat < ctx.currentTime + 0.35) {
          const t = nextBeat;
          k.tone(t, { freq: 110, to: 46, level: 0.5, decay: 0.22, dest: track });
          if (beat % 2) k.burst(t, { freq: 1800, q: 0.8, level: 0.3, decay: 0.12, to: track });
          k.burst(t + BEAT / 2, { freq: 7000, type: 'highpass', level: 0.06, decay: 0.03, to: track });
          if (beat % 4 === 3) k.tone(t + BEAT * 0.75, { freq: [196, 233.08, 174.61, 220][Math.floor(beat / 4) % 4], type: 'triangle', level: 0.12, decay: 0.3, dest: track });
          nextBeat += BEAT; beat++;
        }
      };
      const squeak = t => {
        const o = ctx.createOscillator(); o.type = 'square'; const f = rand(1900, 2700);
        o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * rand(1.15, 1.35), t + 0.09);
        const lfo = ctx.createOscillator(), lg = k.gain(180); lfo.frequency.value = 45; lfo.connect(lg); lg.connect(o.frequency);
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.018, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + rand(0.08, 0.15));
        k.chain(o, k.filter('bandpass', 2500, 6), g, k.pan(rand(-0.6, 0.6)), out); o.start(t); lfo.start(t); o.stop(t + 0.2); lfo.stop(t + 0.2);
      };
      const dancing = () => { const t = ctx.currentTime + 0.05; for (let i = 0, n = Math.floor(rand(1, 4)); i < n; i++) squeak(t + i * rand(0.15, 0.35)); k.later(dancing, rand(1.8, 4.5)); };
      const like = () => { const t = ctx.currentTime + 0.02; k.tone(t, { freq: 1568, level: 0.035, decay: 0.22, pan: -0.55 }); k.tone(t + 0.06, { freq: 2349, level: 0.025, decay: 0.28, pan: -0.55 }); };
      const dm = () => { const t = ctx.currentTime + 0.05; k.tone(t, { freq: 880, to: 1320, glide: 0.08, level: 0.04, decay: 0.18, pan: 0.6 }); k.tone(t + 0.1, { freq: 1760, level: 0.025, decay: 0.3, pan: 0.6 }); k.later(dm, rand(8, 14)); };
      k.on(dialog, 'entrance:cue', e => { if (e.detail === 'like') like(); });
      groove(); k.every(groove, 0.1); k.later(dancing, 1.4); k.later(dm, 5);
    },

    /* Hoax: the hallway before class, and a group chat that will not stop. */
    hoax(k, dialog) {
      const { ctx, out } = k;
      const hall = k.gain(1), verb = k.reverb(1.4, 2.8), wet = k.gain(0.4);
      hall.connect(out); k.chain(hall, verb, wet, out);
      const chatter = k.gain(0.09);
      k.chain(k.loop(k.noise('pink', 8)), k.filter('bandpass', 850, 0.7), chatter, hall);
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.15; const lfoG = k.gain(0.035); lfo.connect(lfoG); lfoG.connect(chatter.gain); lfo.start();
      const bell = () => {
        const t = ctx.currentTime + 0.05, dur = 2.2, g = k.gain(0);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.05); g.gain.setValueAtTime(0.05, t + dur - 0.2); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        const ham = ctx.createOscillator(), hg = k.gain(0.5); ham.type = 'square'; ham.frequency.value = 22; ham.connect(hg);
        const am = k.gain(0.5); hg.connect(am.gain);
        k.chain(am, g, k.pan(0.3), hall);
        for (const f of [930, 1870, 2630]) { const o = ctx.createOscillator(); o.frequency.value = f; o.connect(am); o.start(t); o.stop(t + dur + 0.05); }
        ham.start(t); ham.stop(t + dur + 0.05);
        k.later(bell, rand(40, 55));
      };
      const locker = () => {
        const t = ctx.currentTime + 0.05, pan = rand(-0.8, 0.8);
        k.burst(t, { freq: 650, type: 'lowpass', level: 0.22, decay: 0.08, pan, to: hall });
        [340, 720, 1210].forEach(f => k.tone(t, { freq: f * rand(0.95, 1.05), level: 0.018, decay: 0.45, pan, dest: hall }));
        k.burst(t + 0.03, { freq: 3500, q: 3, level: 0.05, decay: 0.015, pan, to: hall });
        k.later(locker, rand(3.5, 8));
      };
      const NOTES = { solarsystem: 1046.5, jihoney: 1318.5, junkyute: 1568, asanoonecares: 880, cherryblossoms: 1174.7, jaehyukkie: 987.8, geniusuk: 1396.9 };
      const SCALE = [880, 987.8, 1108.7, 1318.5, 1480, 1760];
      const noteOf = who => { if (NOTES[who]) return NOTES[who]; let h = 0; for (const c of who) h = (h * 31 + c.charCodeAt(0)) % 997; return SCALE[h % SCALE.length]; };
      const ping = who => {
        const t = ctx.currentTime + 0.02, f = noteOf(who);
        k.tone(t, { freq: f, level: 0.06, decay: 0.25, pan: 0.5 }); k.tone(t + 0.07, { freq: f * 1.5, level: 0.04, decay: 0.3, pan: 0.5 });
        const bz = ctx.createOscillator(), bg = k.gain(0); bz.type = 'square'; bz.frequency.value = 160;
        bg.gain.setValueAtTime(0.0001, t); bg.gain.exponentialRampToValueAtTime(0.015, t + 0.02); bg.gain.setValueAtTime(0.015, t + 0.22); bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.26);
        k.chain(bz, k.filter('lowpass', 400), bg, k.pan(0.5), out); bz.start(t); bz.stop(t + 0.3);
      };
      k.on(dialog, 'entrance:cue', e => { if (typeof e.detail === 'string' && /^[a-z0-9_.\-]+$/.test(e.detail)) ping(e.detail); });
      k.later(bell, 0.6); k.later(locker, 3);
    },
    /* Casual: the new apartment. The bathroom light, old floorboards, a suitcase that keeps catching. */
    casual(k) {
      const { ctx, out } = k;
      const room = k.gain(1), verb = k.reverb(1, 3.2), wet = k.gain(0.3);
      room.connect(out); k.chain(room, verb, wet, out);
      k.chain(k.loop(k.noise('pink', 8)), k.filter('lowpass', 360), k.gain(0.06), out);
      const fixture = ctx.createOscillator(); fixture.type = 'sawtooth'; fixture.frequency.value = 120;
      const fixG = k.gain(0.006); k.chain(fixture, k.filter('bandpass', 360, 3), fixG, k.pan(0.6), out); fixture.start();
      const fixtureMood = () => { const t = ctx.currentTime, buzzing = Math.random() < 0.5; fixG.gain.setTargetAtTime(buzzing ? 0.016 : 0.005, t, 0.4); k.later(fixtureMood, rand(7, 12)); };
      const creak = (t, pan) => {
        const o = ctx.createOscillator(); o.type = 'sawtooth'; const f = rand(85, 140);
        o.frequency.setValueAtTime(f, t); o.frequency.linearRampToValueAtTime(f * rand(1.2, 1.6), t + rand(0.25, 0.5));
        const j = ctx.createOscillator(), jg = k.gain(f * 0.25); j.frequency.value = rand(22, 38); j.connect(jg); jg.connect(o.frequency);
        const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.03, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
        k.chain(o, k.filter('bandpass', 620, 7), g, k.pan(pan), room); o.start(t); j.start(t); o.stop(t + 0.6); j.stop(t + 0.6);
      };
      const footsteps = () => { let t = ctx.currentTime + 0.05; const pan = rand(-0.5, 0.5); for (let i = 0, n = Math.floor(rand(2, 5)); i < n; i++) { k.tone(t, { freq: 110, to: 70, level: 0.05, decay: 0.07, pan, dest: room }); if (Math.random() < 0.45) creak(t + 0.04, pan); t += rand(0.55, 0.7); } k.later(footsteps, rand(5, 9)); };
      const suitcase = () => {
        const t = ctx.currentTime + 0.05, dur = rand(1.4, 2.2), src = k.loop(k.noise('brown', 8)), g = k.gain(0), pn = k.pan(-0.7);
        const am = ctx.createOscillator(), amG = k.gain(0.5); am.type = 'square'; am.frequency.value = 17; am.connect(amG); amG.connect(g.gain);
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.12, t + 0.2); g.gain.setValueAtTime(0.12, t + dur - 0.2); g.gain.linearRampToValueAtTime(0.0001, t + dur);
        if (pn.pan) pn.pan.linearRampToValueAtTime(0.5, t + dur);
        k.chain(src, k.filter('bandpass', 280, 1.2), g, pn, room); am.start(t); am.stop(t + dur); src.stop(t + dur + 0.1);
        const snag = t + dur * rand(0.4, 0.7);
        k.burst(snag, { freq: 900, q: 2, level: 0.06, decay: 0.04, to: room }); k.tone(snag, { freq: 160, to: 90, level: 0.05, decay: 0.08, dest: room });
        k.later(suitcase, rand(14, 20));
      };
      const bird = () => {
        const t = ctx.currentTime + 0.05, pan = rand(-0.9, -0.4);
        for (let i = 0, n = Math.floor(rand(2, 5)); i < n; i++) { const f = rand(3200, 4600); k.tone(t + i * rand(0.09, 0.14), { freq: f, to: f * rand(1.1, 1.3), glide: 0.06, level: 0.012, decay: 0.08, pan }); }
        k.later(bird, rand(4, 9));
      };
      k.later(fixtureMood, 3); k.later(footsteps, 2); k.later(suitcase, 5); k.later(bird, 1.5);
    },

    /* Havenbrook: the east side after dark. Traffic, the chain-link in the wind, the neon, a bike going by. */
    havenbrook(k, dialog, openedAt) {
      const { ctx, out } = k;
      k.chain(k.loop(k.noise('brown', 8)), k.filter('lowpass', 300), k.gain(0.26), out);
      const windG = k.gain(0.05), windBP = k.filter('bandpass', 500, 0.7);
      k.chain(k.loop(k.noise('pink', 8)), windBP, windG, out);
      const neon = ctx.createOscillator(); neon.type = 'sawtooth'; neon.frequency.value = 120;
      const neonG = k.gain(0.01); k.chain(neon, k.filter('bandpass', 1200, 4), neonG, k.pan(0.7), out); neon.start();
      const flick = () => { const el = (performance.now() - openedAt) / 1000, wait = 6 * 0.41 - (el % 6); k.later(() => { const t = ctx.currentTime; neonG.gain.setValueAtTime(0.0001, t); neonG.gain.setValueAtTime(0.02, t + 0.06); neonG.gain.setValueAtTime(0.0001, t + 0.12); neonG.gain.setValueAtTime(0.01, t + 0.18); for (let i = 0; i < 4; i++) k.burst(t + i * 0.04, { freq: 3000, type: 'highpass', level: 0.03, decay: 0.015, pan: 0.7 }); flick(); }, wait < 0.05 ? wait + 6 : wait); };
      const rattle = level => { const t0 = ctx.currentTime + 0.05; for (let i = 0, n = Math.floor(rand(8, 18)); i < n; i++) { const t = t0 + rand(0, 1.2); k.tone(t, { freq: rand(2200, 5200), level: 0.008 * level, decay: rand(0.05, 0.12), pan: rand(-0.8, 0.8) }); k.burst(t, { freq: 4000, type: 'highpass', level: 0.02 * level, decay: 0.01 }); } };
      const gust = () => { const t = ctx.currentTime + 0.05, peak = rand(0.12, 0.22); windG.gain.setTargetAtTime(peak, t, 0.8); windG.gain.setTargetAtTime(0.05, t + 2.5, 1.2); windBP.frequency.setTargetAtTime(rand(700, 1000), t, 0.8); windBP.frequency.setTargetAtTime(500, t + 2.5, 1.2); k.later(() => rattle(peak * 6), 1.2); k.later(gust, rand(6, 11)); };
      const bike = () => {
        const t = ctx.currentTime + 0.05, dur = rand(3.5, 5), dir = Math.random() < 0.5 ? 1 : -1;
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(55, t); o.frequency.linearRampToValueAtTime(rand(95, 120), t + dur * 0.45); o.frequency.linearRampToValueAtTime(70, t + dur);
        const g = k.gain(0), pn = k.pan(-0.9 * dir); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + dur * 0.5); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        if (pn.pan) pn.pan.linearRampToValueAtTime(0.9 * dir, t + dur);
        k.chain(o, k.filter('lowpass', 700), g, pn, out); o.start(t); o.stop(t + dur + 0.05);
        k.later(bike, rand(14, 24));
      };
      const siren = () => { const t = ctx.currentTime + 0.05, dur = rand(6, 9); const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = 900; const w = ctx.createOscillator(), wg = k.gain(300); w.frequency.value = 0.5; w.connect(wg); wg.connect(o.frequency); const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.015, t + dur * 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); k.chain(o, k.filter('lowpass', 1200), g, k.pan(rand(-0.7, 0.7)), out); o.start(t); w.start(t); o.stop(t + dur); w.stop(t + dur); k.later(siren, rand(25, 40)); };
      flick(); k.later(gust, 1); k.later(bike, 4); k.later(siren, 14);
    },

    /* Soul of Minji: a quest screen. A soft pad, a heartbeat, the system typing. */
    'soul-of-minji'(k, dialog) {
      const { ctx, out } = k;
      const padF = k.filter('lowpass', 1400), padG = k.gain(0.0001); k.chain(padF, padG, out);
      padG.gain.exponentialRampToValueAtTime(0.006, ctx.currentTime + 3);
      for (const [f, d] of [[261.63, -5], [329.63, 4], [392, -3], [493.88, 6]]) { const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f; o.detune.value = d; o.connect(padF); o.start(); }
      const shimmerLfo = ctx.createOscillator(), sl = k.gain(500); shimmerLfo.frequency.value = 0.08; shimmerLfo.connect(sl); sl.connect(padF.frequency); shimmerLfo.start();
      let nextBeat = ctx.currentTime + 0.4;
      const heart = () => { while (nextBeat < ctx.currentTime + 0.4) { k.tone(nextBeat, { freq: 62, to: 42, level: 0.16, decay: 0.12 }); k.tone(nextBeat + 0.22, { freq: 56, to: 40, level: 0.1, decay: 0.12 }); nextBeat += 1.15; } };
      const glint = () => { const t = ctx.currentTime + 0.05; k.tone(t, { freq: [1568, 1760, 2093, 2349][Math.floor(rand(0, 4))], level: 0.01, attack: 0.02, decay: 1.2, pan: rand(-0.8, 0.8) }); k.later(glint, rand(1.5, 4)); };
      const blip = () => k.tone(ctx.currentTime + 0.01, { freq: rand(860, 920), type: 'square', level: 0.012, decay: 0.03 });
      k.on(dialog, 'entrance:cue', e => { if (e.detail === 'type') blip(); });
      heart(); k.every(heart, 0.2); k.later(glint, 2);
    },

    /* Saint of Dead Air: soundcheck in an empty arena, until the room cuts to seven seconds of silence. */
    'saint-of-dead-air'(k, dialog) {
      const { ctx, out } = k;
      const stage = k.gain(1); stage.connect(out);
      k.chain(k.loop(k.noise('brown', 8)), k.filter('lowpass', 160), k.gain(0.3), stage);
      k.chain(k.loop(k.noise('pink', 8)), k.filter('bandpass', 1200, 0.6), k.gain(0.025), stage);
      const thump = k.filter('lowpass', 170); k.chain(thump, k.gain(0.32), stage);
      const BEAT = 60 / 124; let nextBeat = ctx.currentTime + 0.1, beat = 0;
      const pulse = () => {
        while (nextBeat < ctx.currentTime + 0.35) {
          const t = nextBeat;
          k.tone(t, { freq: 120, to: 46, level: 0.7, decay: 0.25, dest: thump });
          k.burst(t, { freq: beat % 4 ? 1600 : 2600, q: 6, level: beat % 4 ? 0.05 : 0.08, decay: 0.012, pan: 0.2, to: stage });
          nextBeat += BEAT; beat++;
        }
      };
      const screams = () => { const t = ctx.currentTime + 0.05, src = k.loop(k.noise('pink', 8)), g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4); k.chain(src, k.filter('bandpass', 2200, 1.5), g, k.pan(rand(-0.8, 0.8)), stage); src.stop(t + 2.5); k.later(screams, rand(6, 12)); };
      const ring = ctx.createOscillator(), ringG = k.gain(0); ring.frequency.value = 7800; k.chain(ring, ringG, out); ring.start();
      k.on(dialog, 'entrance:cue', e => {
        const t = ctx.currentTime;
        if (e.detail === 'dead-start') { stage.gain.cancelScheduledValues(t); stage.gain.setValueAtTime(stage.gain.value, t); stage.gain.linearRampToValueAtTime(0.0001, t + 0.05); ringG.gain.setTargetAtTime(0.002, t + 0.3, 0.8); }
        if (e.detail === 'dead-end') { ringG.gain.setTargetAtTime(0, t, 0.05); stage.gain.cancelScheduledValues(t); stage.gain.setValueAtTime(0.0001, t); stage.gain.exponentialRampToValueAtTime(1, t + 0.5); }
      });
      pulse(); k.every(pulse, 0.1); k.later(screams, 3);
    },

    /* GO: rain on the windows, her foot on the tile, the bell, and thunder after the flash. */
    go(k, dialog) {
      const { ctx, out } = k;
      k.chain(k.loop(k.noise('pink', 8)), k.filter('highpass', 700), k.filter('lowpass', 7000), k.gain(0.12), out);
      k.chain(k.loop(k.noise('brown', 8)), k.filter('lowpass', 400), k.gain(0.12), out);
      const drops = () => { const t0 = ctx.currentTime + 0.02; for (let i = 0; i < 6; i++) k.burst(t0 + rand(0, 0.5), { freq: rand(2500, 6000), q: 3, level: rand(0.01, 0.035), decay: 0.01, pan: rand(-0.9, 0.9) }); };
      const room = k.gain(1), verb = k.reverb(1.2, 3), wet = k.gain(0.35); room.connect(out); k.chain(room, verb, wet, out);
      const PATTERN = [0, 0.5, 0.75, 1.25, 1.5, 2];
      const tapping = () => { const t = ctx.currentTime + 0.05; PATTERN.forEach(b => { k.tone(t + b, { freq: 150, to: 90, level: 0.07, decay: 0.05, dest: room }); k.burst(t + b, { freq: 1800, q: 1.5, level: 0.04, decay: 0.015, to: room }); }); k.later(tapping, rand(3, 5)); };
      const bell = () => {
        const t = ctx.currentTime + 0.05, dur = 1.8, g = k.gain(0);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 0.04); g.gain.setValueAtTime(0.06, t + dur - 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        const ham = ctx.createOscillator(), hg = k.gain(0.5); ham.type = 'square'; ham.frequency.value = 26; ham.connect(hg);
        const am = k.gain(0.5); hg.connect(am.gain); k.chain(am, k.filter('bandpass', 2400, 0.8), g, k.pan(-0.3), room);
        for (const f of [1050, 2200, 3150]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(am); o.start(t); o.stop(t + dur + 0.05); }
        ham.start(t); ham.stop(t + dur + 0.05);
        for (let i = 0; i < 5; i++) { const ct = t + dur + rand(0.1, 1.2), o = ctx.createOscillator(), cg = k.gain(0); o.type = 'sawtooth'; o.frequency.setValueAtTime(rand(260, 340), ct); o.frequency.linearRampToValueAtTime(rand(380, 460), ct + 0.3); cg.gain.setValueAtTime(0.0001, ct); cg.gain.exponentialRampToValueAtTime(0.015, ct + 0.04); cg.gain.exponentialRampToValueAtTime(0.0001, ct + 0.35); k.chain(o, k.filter('bandpass', 1200, 4), cg, k.pan(rand(-0.8, 0.8)), room); o.start(ct); o.stop(ct + 0.4); }
        k.later(bell, rand(40, 55));
      };
      const thunder = () => {
        const t = ctx.currentTime + rand(0.6, 1.4), src = k.loop(k.noise('brown', 8)), g = k.gain(0), lp = k.filter('lowpass', 260);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.25); g.gain.exponentialRampToValueAtTime(0.25, t + 1.2); g.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);
        lp.frequency.setValueAtTime(600, t); lp.frequency.exponentialRampToValueAtTime(140, t + 3);
        k.chain(src, lp, g, out); src.stop(t + 4.6);
      };
      k.on(dialog, 'entrance:cue', e => { if (e.detail === 'thunder') thunder(); });
      k.every(drops, 0.5); k.later(bell, 1.2); k.later(tapping, 4);
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

  /* Homepage hover previews: a one-second signature of each world, on a shared context. */
  let previewCtx = null, previewKit = null, previewRoom = null, previewMaster = null;
  const PREVIEW_LEVELS = { strangers: 0.55, go: 0.5, delicate: 2.4, runners: 2, secret: 2, hoax: 1.6, havenbrook: 3, 'saint-of-dead-air': 4, 'soul-of-minji': 1.2, recherche: 1.2 };
  const PREVIEWS = {
    runners(k) { const t = k.ctx.currentTime + 0.02; const src = k.loop(k.noise('pink', 8)), g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3); k.chain(src, k.filter('bandpass', 800, 0.6), g, k.out); src.stop(t + 1.4); for (let i = 0; i < 16; i++) k.burst(t + 0.2 + rand(0, 0.8), { freq: rand(3000, 7000), type: 'highpass', level: rand(0.03, 0.08), decay: rand(0.008, 0.025), pan: rand(-0.8, 0.8) }); },
    strangers(k) {
      const { ctx, out } = k, t = ctx.currentTime + 0.02, src = k.loop(k.noise('pink', 8)), lp = k.filter('lowpass', 500), g = k.gain(0);
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.7, t + 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8); lp.frequency.linearRampToValueAtTime(1500, t + 0.7); lp.frequency.exponentialRampToValueAtTime(400, t + 1.8);
      k.chain(src, lp, g, out); src.stop(t + 1.9);
      const o = ctx.createOscillator(); o.type = 'sawtooth'; const gt = t + 0.35; o.frequency.setValueAtTime(1450, gt); o.frequency.linearRampToValueAtTime(2250, gt + 0.07); o.frequency.exponentialRampToValueAtTime(1050, gt + 0.4);
      const gg = k.gain(0); gg.gain.setValueAtTime(0.0001, gt); gg.gain.exponentialRampToValueAtTime(0.06, gt + 0.04); gg.gain.exponentialRampToValueAtTime(0.0001, gt + 0.44);
      k.chain(o, k.filter('bandpass', 1750, 3.5), gg, k.pan(0.5), out); o.start(gt); o.stop(gt + 0.5);
    },
    delicate(k) { const t = k.ctx.currentTime + 0.02; [0, 0.16].forEach((d, i) => { k.burst(t + d, { freq: 2600, q: 1.1, level: 0.32, decay: 0.022, pan: i ? 0.4 : -0.3 }); k.burst(t + d + 0.048, { freq: 3400, q: 1.4, level: 0.24, decay: 0.03, pan: i ? 0.4 : -0.3 }); }); k.tone(t + 0.3, { freq: 2600, to: 8200, glide: 0.75, level: 0.01, attack: 0.05, decay: 0.8 }); },
    'petal-thorn'(k) { const t = k.ctx.currentTime + 0.02; for (let i = 0; i < 5; i++) k.burst(t + i * rand(0.07, 0.11), { freq: rand(2300, 4200), q: 0.9, level: rand(0.14, 0.24), decay: 0.014, pan: 0.3 }); [[659.25, 0.55], [987.77, 0.66], [1318.5, 0.77]].forEach(([f, d]) => k.tone(t + d, { freq: f, level: 0.09, decay: 0.9 })); },
    peace(k) { const t = k.ctx.currentTime + 0.02; [0, 0.55].forEach(d => { k.tone(t + d, { freq: 115, to: 58, level: 0.3, decay: 0.09, dest: previewRoom }); k.burst(t + d, { freq: 900, q: 1, level: 0.14, decay: 0.03, to: previewRoom }); }); },
    recherche(k) { const t = k.ctx.currentTime + 0.02; [0, 0.18].forEach((d, i) => [2637, 3520, 4186, 5274].forEach(f => k.tone(t + d, { freq: f * rand(0.98, 1.02), level: rand(0.015, 0.035), attack: 0.002, decay: rand(0.8, 1.3), pan: i ? 0.3 : -0.2, dest: previewRoom }))); },
    secret(k) { const t = k.ctx.currentTime + 0.02; [0, 0.32].forEach(d => { k.tone(t + d, { freq: 1568, level: 0.06, decay: 0.22, pan: -0.3 }); k.tone(t + d + 0.06, { freq: 2349, level: 0.045, decay: 0.28, pan: -0.3 }); }); },
    hoax(k) { const { ctx, out } = k; [0, 0.3, 0.52].forEach((d, i) => { const t = ctx.currentTime + 0.02 + d, f = [1046.5, 1318.5, 1568][i]; k.tone(t, { freq: f, level: 0.07, decay: 0.25, pan: 0.3 }); k.tone(t + 0.07, { freq: f * 1.5, level: 0.045, decay: 0.3, pan: 0.3 }); }); const t = ctx.currentTime + 0.02, bz = ctx.createOscillator(), bg = k.gain(0); bz.type = 'square'; bz.frequency.value = 160; bg.gain.setValueAtTime(0.0001, t); bg.gain.exponentialRampToValueAtTime(0.02, t + 0.02); bg.gain.setValueAtTime(0.02, t + 0.25); bg.gain.exponentialRampToValueAtTime(0.0001, t + 0.3); k.chain(bz, k.filter('lowpass', 400), bg, out); bz.start(t); bz.stop(t + 0.35); },
    casual(k) { const { ctx } = k, t = ctx.currentTime + 0.02, o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(95, t); o.frequency.linearRampToValueAtTime(150, t + 0.5); const j = ctx.createOscillator(), jg = k.gain(28); j.frequency.value = 30; j.connect(jg); jg.connect(o.frequency); const g = k.gain(0); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.32, t + 0.1); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6); k.chain(o, k.filter('bandpass', 620, 7), g, previewRoom); o.start(t); j.start(t); o.stop(t + 0.65); j.stop(t + 0.65); },
    havenbrook(k) { const t0 = k.ctx.currentTime + 0.02; for (let i = 0; i < 18; i++) { const t = t0 + rand(0, 0.9); k.tone(t, { freq: rand(2200, 5200), level: 0.03, decay: rand(0.05, 0.12), pan: rand(-0.8, 0.8) }); k.burst(t, { freq: 4000, type: 'highpass', level: 0.05, decay: 0.01 }); } for (let i = 0; i < 4; i++) k.burst(t0 + 0.9 + i * 0.04, { freq: 3000, type: 'highpass', level: 0.06, decay: 0.015, pan: 0.6 }); },
    'soul-of-minji'(k) { const t = k.ctx.currentTime + 0.02; [[523.25, 0], [659.25, 0.12], [783.99, 0.24], [1046.5, 0.36]].forEach(([f, d]) => { k.tone(t + d, { freq: f, level: 0.07, decay: 0.7 }); k.tone(t + d, { freq: f * 2, level: 0.015, decay: 0.4 }); }); },
    'saint-of-dead-air'(k) { const t = k.ctx.currentTime + 0.02; for (let i = 0; i < 4; i++) k.burst(t + i * 0.24, { freq: i ? 1600 : 2600, q: 6, level: i ? 0.18 : 0.26, decay: 0.012 }); k.tone(t + 1.05, { freq: 7800, level: 0.006, attack: 0.2, decay: 0.8 }); },
    go(k) { const { ctx, out } = k, t = ctx.currentTime + 0.02, rain = k.loop(k.noise('pink', 8)), rg = k.gain(0); rg.gain.setValueAtTime(0.0001, t); rg.gain.linearRampToValueAtTime(0.4, t + 0.3); rg.gain.exponentialRampToValueAtTime(0.0001, t + 1.8); k.chain(rain, k.filter('highpass', 700), rg, out); rain.stop(t + 1.9); const th = k.loop(k.noise('brown', 8)), tg = k.gain(0); tg.gain.setValueAtTime(0.0001, t + 0.4); tg.gain.exponentialRampToValueAtTime(0.8, t + 0.65); tg.gain.exponentialRampToValueAtTime(0.0001, t + 2); k.chain(th, k.filter('lowpass', 220), tg, out); th.stop(t + 2.1); }
  };
  // Homepage sound follows the site-wide setting (the "loud" switch and the intros' Sound on button share kg-intro-sound).
  const previewsAllowed = () => { let pref = null; try { pref = localStorage.getItem('kg-intro-sound'); } catch {} return pref === 'on'; };
  // Start the shared context on the visitor's first click or key press, so the first hover isn't lost to warm-up.
  function warm(force = false) {
    if (!AC || (!force && !previewsAllowed())) return;
    if (!previewCtx) {
      previewCtx = new AC();
      const comp = previewCtx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4;
      previewMaster = previewCtx.createGain(); previewMaster.gain.value = 0.8;
      previewMaster.connect(comp); comp.connect(previewCtx.destination);
      previewKit = kit(previewCtx, previewMaster);
      previewRoom = previewKit.gain(1); previewRoom.connect(previewMaster);
      const verb = previewKit.reverb(1.4, 2.6), wet = previewKit.gain(0.4); previewKit.chain(previewRoom, verb, wet, previewMaster);
    }
    if (previewCtx.state !== 'running') previewCtx.resume().catch(() => {});
  }
  function preview(worldId) {
    const play = PREVIEWS[worldId];
    if (!play || !AC || !previewsAllowed()) return;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;
    warm();
    const go = () => {
      const level = previewCtx.createGain(); level.gain.value = PREVIEW_LEVELS[worldId] || 1; level.connect(previewMaster);
      const k = Object.create(previewKit); k.out = level;
      try { play(k); } catch (e) {}
      setTimeout(() => level.disconnect(), 4000);
    };
    if (previewCtx.state === 'running') go(); else previewCtx.resume().then(go).catch(() => {});
  }

  /* Homepage moments: the loud switch, counters, passport stamps, secret words. */
  const HOME = {
    'loud-on'(k) {
      const { ctx, out } = k, t = ctx.currentTime + 0.02, src = k.loop(k.noise('pink', 8)), g = k.gain(0), bp = k.filter('bandpass', 700, 0.7);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.55); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
      bp.frequency.setValueAtTime(400, t); bp.frequency.exponentialRampToValueAtTime(1600, t + 0.55); bp.frequency.exponentialRampToValueAtTime(700, t + 1.6);
      const trem = ctx.createOscillator(), tg = k.gain(0.18); trem.frequency.value = 9; trem.connect(tg); tg.connect(g.gain); trem.start(t); trem.stop(t + 1.7);
      k.chain(src, bp, g, out); src.stop(t + 1.7);
      k.tone(t, { freq: 70, to: 45, level: 0.25, attack: 0.3, decay: 1 });
    },
    'loud-off'(k) {
      const t = k.ctx.currentTime + 0.02;
      k.burst(t, { freq: 1800, q: 2, level: 0.12, decay: 0.012 });
      k.tone(t + 0.02, { freq: 7800, level: 0.004, attack: 0.1, decay: 1.2 });
    },
    tick(k) { k.burst(k.ctx.currentTime + 0.01, { freq: rand(2800, 3600), q: 3, level: 0.07, decay: 0.012, pan: rand(-0.3, 0.3) }); },
    thunk(k) {
      const t = k.ctx.currentTime + 0.01;
      k.tone(t, { freq: 130, to: 55, level: 0.35, decay: 0.14 });
      k.burst(t, { freq: 1100, type: 'lowpass', level: 0.25, decay: 0.05 });
      k.burst(t + 0.015, { freq: 3500, q: 2, level: 0.05, decay: 0.02 });
    },
    solar(k) {
      const t = k.ctx.currentTime + 0.02;
      [1046.5, 1318.5, 1568, 2093, 2637].forEach((f, i) => { k.tone(t + i * 0.07, { freq: f, level: 0.05, decay: 1.2, pan: (i - 2) * 0.3 }); k.tone(t + i * 0.07 + 0.02, { freq: f * 2.01, level: 0.012, decay: 0.6, pan: (i - 2) * 0.3 }); });
    },
    booth(k) {
      const t = k.ctx.currentTime + 0.02;
      for (let i = 0; i < 4; i++) {
        k.burst(t + i * 0.38, { freq: 2600, q: 1.1, level: 0.3, decay: 0.022 });
        k.burst(t + i * 0.38 + 0.05, { freq: 3400, q: 1.4, level: 0.22, decay: 0.03 });
      }
      k.tone(t + 1.6, { freq: 2200, to: 7000, glide: 0.6, level: 0.01, attack: 0.05, decay: 0.7 });
    },
    /* FEMC mode: original menu sounds in the spirit of a certain pink handheld RPG. */
    'femc-hover'(k) {
      const t = k.ctx.currentTime + 0.005;
      k.tone(t, { freq: 2637, level: 0.022, attack: 0.002, decay: 0.07 });
      k.tone(t, { freq: 3951, level: 0.008, attack: 0.002, decay: 0.05 });
      k.burst(t, { freq: 6000, q: 2, level: 0.03, decay: 0.008 });
    },
    'femc-click'(k) {
      const t = k.ctx.currentTime + 0.005;
      k.burst(t, { freq: 5200, q: 1.5, level: 0.06, decay: 0.012 });
      k.tone(t, { freq: 1318.5, type: 'triangle', level: 0.045, attack: 0.003, decay: 0.12 });
      k.tone(t + 0.055, { freq: 1975.5, type: 'triangle', level: 0.045, attack: 0.003, decay: 0.3 });
      k.tone(t + 0.055, { freq: 3951, level: 0.01, attack: 0.003, decay: 0.25 });
    },
    'femc-back'(k) {
      const t = k.ctx.currentTime + 0.005;
      k.tone(t, { freq: 1174.7, type: 'triangle', level: 0.04, attack: 0.003, decay: 0.08 });
      k.tone(t + 0.06, { freq: 880, type: 'triangle', level: 0.035, attack: 0.003, decay: 0.18 });
    },
    'femc-on'(k) {
      const { ctx, out } = k, t = ctx.currentTime + 0.02;
      const src = k.loop(k.noise('pink', 4)), g = k.gain(0), bp = k.filter('bandpass', 600, 1.2);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22, t + 0.35); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
      bp.frequency.setValueAtTime(500, t); bp.frequency.exponentialRampToValueAtTime(6000, t + 0.6);
      k.chain(src, bp, g, out); src.stop(t + 1);
      [1046.5, 1318.5, 1568, 1975.5, 2349.3, 3136].forEach((f, i) => {
        k.tone(t + 0.25 + i * 0.055, { freq: f, type: 'triangle', level: 0.035, attack: 0.003, decay: 0.9, pan: (i - 2.5) * 0.25 });
        k.tone(t + 0.25 + i * 0.055, { freq: f * 2, level: 0.008, attack: 0.003, decay: 0.5, pan: (i - 2.5) * 0.25 });
      });
      k.tone(t + 0.2, { freq: 98, to: 65, level: 0.16, attack: 0.02, decay: 0.7 });
    },
    'femc-off'(k) {
      const t = k.ctx.currentTime + 0.02;
      [2349.3, 1975.5, 1568, 1318.5].forEach((f, i) => k.tone(t + i * 0.06, { freq: f, type: 'triangle', level: 0.03, attack: 0.003, decay: 0.4, pan: (1.5 - i) * 0.3 }));
      k.tone(t + 0.2, { freq: 130, to: 60, level: 0.12, attack: 0.01, decay: 0.4 });
    },
    // Advancing a line of dialogue: a short, bright page-turn tick.
    'femc-advance'(k) {
      const t = k.ctx.currentTime + 0.005;
      k.burst(t, { freq: 4200, q: 2.5, level: 0.05, decay: 0.012 });
      k.tone(t, { freq: 1975.5, type: 'triangle', level: 0.018, attack: 0.002, decay: 0.06 });
      k.tone(t + 0.035, { freq: 2637, type: 'triangle', level: 0.012, attack: 0.002, decay: 0.08 });
    },
    // A phone vibrating on a desk: two short buzzes.
    'femc-buzz'(k) {
      const { ctx, out } = k, t0 = ctx.currentTime + 0.02;
      [0, 0.24].forEach(d => {
        const t = t0 + d, o = ctx.createOscillator(), g = k.gain(0);
        o.type = 'square'; o.frequency.value = 160;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.02); g.gain.setValueAtTime(0.05, t + 0.14); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.17);
        k.chain(o, k.filter('lowpass', 420, 1), g, out); o.start(t); o.stop(t + 0.2);
      });
      k.tone(t0 + 0.5, { freq: 1568, type: 'triangle', level: 0.03, attack: 0.003, decay: 0.25 });
      k.tone(t0 + 0.58, { freq: 2093, type: 'triangle', level: 0.03, attack: 0.003, decay: 0.35 });
    },
    'femc-note'(k) {
      const t = k.ctx.currentTime + 0.01;
      [1568, 2093, 2637].forEach((f, i) => k.tone(t + i * 0.06, { freq: f, type: 'triangle', level: 0.035, attack: 0.003, decay: 0.35, pan: (i - 1) * 0.3 }));
    },
    'femc-register'(k) {
      const t = k.ctx.currentTime + 0.02;
      k.burst(t, { freq: 3000, q: 1.2, level: 0.08, decay: 0.03 });
      [880, 1318.5, 1760, 2637].forEach((f, i) => { k.tone(t + 0.05 + i * 0.05, { freq: f, type: 'triangle', level: 0.03, attack: 0.003, decay: 0.7 }); });
      k.tone(t + 0.3, { freq: 3520, level: 0.008, attack: 0.05, decay: 1 });
    },
    'femc-text'(k) { k.tone(k.ctx.currentTime + 0.005, { freq: rand(1480, 1620), type: 'square', level: 0.006, attack: 0.002, decay: 0.03 }); },
    'femc-rankup'(k) {
      const t = k.ctx.currentTime + 0.02;
      [783.99, 1046.5, 1318.5, 1568, 2093, 2637].forEach((f, i) => {
        k.tone(t + i * 0.08, { freq: f, type: 'triangle', level: 0.04, attack: 0.003, decay: 1.1, pan: (i - 2.5) * 0.25 });
        k.tone(t + i * 0.08, { freq: f * 2.01, level: 0.01, attack: 0.003, decay: 0.7, pan: (i - 2.5) * 0.25 });
      });
      k.tone(t + 0.55, { freq: 1568, type: 'triangle', level: 0.03, attack: 0.01, decay: 1.6 });
      k.tone(t + 0.55, { freq: 2093, type: 'triangle', level: 0.025, attack: 0.01, decay: 1.6 });
      k.tone(t, { freq: 110, to: 70, level: 0.12, attack: 0.02, decay: 0.6 });
    },
    'femc-protein'(k) {
      const t = k.ctx.currentTime + 0.02;
      for (let i = 0; i < 8; i++) k.burst(t + i * 0.07, { freq: rand(1800, 2600), q: 1.4, level: 0.12, decay: 0.035, pan: i % 2 ? 0.3 : -0.3 });
      k.tone(t + 0.65, { freq: 220, to: 330, glide: 0.12, level: 0.08, attack: 0.01, decay: 0.15 });
      k.tone(t + 0.8, { freq: 220, to: 330, glide: 0.12, level: 0.08, attack: 0.01, decay: 0.15 });
      [1046.5, 1318.5, 1568, 2093].forEach((f, i) => k.tone(t + 1.05 + i * 0.07, { freq: f, type: 'triangle', level: 0.04, attack: 0.003, decay: 0.5 }));
    },
    'femc-darkhour'(k) {
      const { ctx, out } = k, t = ctx.currentTime + 0.02;
      [0, 0.5, 1, 1.5].forEach((d, i) => k.burst(t + d, { freq: 2400, q: 6, level: 0.16 - i * 0.03, decay: 0.03 }));
      const drone = ctx.createOscillator(), dg = k.gain(0);
      drone.type = 'sawtooth'; drone.frequency.value = 55;
      dg.gain.setValueAtTime(0.0001, t + 1.9); dg.gain.exponentialRampToValueAtTime(0.05, t + 3); dg.gain.exponentialRampToValueAtTime(0.0001, t + 7);
      k.chain(drone, k.filter('lowpass', 260, 2), dg, out); drone.start(t + 1.9); drone.stop(t + 7.2);
      k.tone(t + 2, { freq: 82.4, level: 0.12, attack: 0.6, decay: 4 });
      k.tone(t + 2, { freq: 123.5, level: 0.05, attack: 0.9, decay: 3.5 });
      k.tone(t + 2.1, { freq: 2960, level: 0.006, attack: 1, decay: 3 });
    },
    'femc-moon'(k) {
      const t = k.ctx.currentTime + 0.02;
      k.tone(t, { freq: 65.4, level: 0.14, attack: 0.5, decay: 2.5 });
      k.tone(t + 0.1, { freq: 98, level: 0.06, attack: 0.6, decay: 2.2 });
      [[0.4, 1567.98], [0.9, 1396.9], [1.4, 1174.7]].forEach(([d, f]) => { k.tone(t + d, { freq: f, level: 0.035, attack: 0.004, decay: 1.6 }); k.tone(t + d, { freq: f * 2.76, level: 0.008, attack: 0.004, decay: 0.8 }); });
    },
    /* An old camera flash: the capacitor whine, then the pop. */
    flash(k) {
      const t = k.ctx.currentTime + 0.02;
      k.tone(t, { freq: 1800, to: 9000, glide: 0.5, level: 0.012, attack: 0.3, decay: 0.25 });
      k.burst(t + 0.55, { freq: 1400, type: 'lowpass', level: 0.4, decay: 0.08 });
      k.burst(t + 0.55, { freq: 4200, q: 1.2, level: 0.18, decay: 0.05 });
      k.tone(t + 0.55, { freq: 160, to: 60, level: 0.2, decay: 0.2 });
    },
    /* Two strips sliding in, one from each side. */
    'booth-slide'(k) {
      const { ctx, out } = k, t0 = ctx.currentTime + 0.02;
      [[-0.85, 0], [0.85, 0.16]].forEach(([pan, d]) => {
        const t = t0 + d, src = k.loop(k.noise('pink', 4)), g = k.gain(0), bp = k.filter('bandpass', 500, 0.9);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.4, t + 0.35); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.8);
        bp.frequency.setValueAtTime(350, t); bp.frequency.exponentialRampToValueAtTime(2200, t + 0.4); bp.frequency.exponentialRampToValueAtTime(600, t + 0.8);
        const p = k.pan(pan); p.pan?.linearRampToValueAtTime(pan * 0.2, t + 0.75);
        k.chain(src, bp, g, p, out); src.stop(t + 0.9);
        k.burst(t + 0.72, { freq: 900, type: 'lowpass', level: 0.18, decay: 0.05, pan: pan * 0.2 });
      });
    },
    nana(k) {
      const t = k.ctx.currentTime + 0.02;
      [0, 0.32, 0.64, 0.96].forEach((d, i) => k.tone(t + d, { freq: 420 + i * 40, to: 760 + i * 60, glide: 0.12, level: 0.06, attack: 0.01, decay: 0.16 }));
      k.tone(t + 1.35, { freq: 1046.5, level: 0.05, decay: 0.5 }); k.tone(t + 1.45, { freq: 1568, level: 0.04, decay: 0.6 });
    },
    deadair(k) {
      const t = k.ctx.currentTime + 0.01;
      k.burst(t, { freq: 2600, q: 6, level: 0.2, decay: 0.012 });
      k.tone(t + 0.05, { freq: 7800, level: 0.004, attack: 0.3, decay: 3 });
    }
  };
  function home(name, { force = false } = {}) {
    const play = HOME[name];
    if (!play || !AC || (!force && !previewsAllowed())) return;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;
    warm(true);
    const go = () => { const k = Object.create(previewKit); k.out = previewMaster; try { play(k); } catch (e) {} };
    if (previewCtx.state === 'running') go(); else previewCtx.resume().then(go).catch(() => {});
  }
  const soundOn = previewsAllowed;

  return { create, preview, warm, home, soundOn };
})();

