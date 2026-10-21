/* FEMC battle art: Shadows drawn as SVG (P3 blue masks, black goo, hands), plus element and charm icons.
   Each Shadow is a function returning { vb, w, h, svg } where w/h are its base size in px at scale 1.
   Idle animations are CSS classes (sh-*) defined in battle.css. Shared gradients live in defs(), added once per page. */
window.FemcBattleArt = (() => {
  const defs = () => `<svg class="bt-defs" width="0" height="0" aria-hidden="true" focusable="false"><defs>
    <linearGradient id="shMask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a6dcff"/><stop offset=".38" stop-color="#4b9bff"/><stop offset="1" stop-color="#1d3fc4"/></linearGradient>
    <linearGradient id="shMaskSide" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0a1a5c" stop-opacity=".55"/><stop offset=".3" stop-color="#0a1a5c" stop-opacity="0"/><stop offset=".7" stop-color="#0a1a5c" stop-opacity="0"/><stop offset="1" stop-color="#0a1a5c" stop-opacity=".55"/></linearGradient>
    <radialGradient id="shGoo" cx=".42" cy=".3" r=".85"><stop offset="0" stop-color="#3d2d5c"/><stop offset=".5" stop-color="#160d24"/><stop offset="1" stop-color="#040107"/></radialGradient>
    <linearGradient id="shGooV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c2045"/><stop offset="1" stop-color="#050208"/></linearGradient>
    <linearGradient id="shIce" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#bfeaff"/><stop offset="1" stop-color="#5ab4ff"/></linearGradient>
    <radialGradient id="shMirror" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#bfe6ff"/><stop offset="1" stop-color="#3a6ad8"/></radialGradient>
    <radialGradient id="shHalo" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e8fbff" stop-opacity=".55"/><stop offset=".55" stop-color="#9fe0ff" stop-opacity=".16"/><stop offset="1" stop-color="#9fe0ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="shOrb" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#d9ffe8"/><stop offset="1" stop-color="#6dffa8"/></radialGradient>
    <linearGradient id="shGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1b8"/><stop offset=".5" stop-color="#ffd36b"/><stop offset="1" stop-color="#c78a1e"/></linearGradient>
  </defs></svg>`;

  /* The blue mask every P3 Shadow wears. face: stern | cry | grin | blank | crack | sly */
  function mask(x, y, s, face = 'stern', rot = 0) {
    const eyes = {
      stern: '<path d="M-24,-9 L-5,-2 L-7,5 L-23,1Z M24,-9 L5,-2 L7,5 L23,1Z"/>',
      cry: '<path d="M-23,-2 Q-14,-12 -5,-3 Q-14,2 -23,-2Z M23,-2 Q14,-12 5,-3 Q14,2 23,-2Z"/>',
      grin: '<path d="M-23,-6 Q-14,2 -5,-6 Q-14,-1 -23,-6Z M23,-6 Q14,2 5,-6 Q14,-1 23,-6Z"/>',
      blank: '<ellipse cx="-12" cy="-4" rx="5" ry="6.5"/><ellipse cx="12" cy="-4" rx="5" ry="6.5"/>',
      crack: '<path d="M-21,-6 L-5,-6 L-9,1 L-19,1Z M21,-6 L5,-6 L9,1 L19,1Z"/>',
      sly: '<path d="M-24,-4 L-4,-8 L-8,0 Z M24,-4 L4,-8 L8,0Z"/>'
    }[face];
    const mouth = {
      stern: '<path d="M-11,18 L11,18 L7,24 L-7,24Z"/>',
      cry: '<path d="M-10,24 Q0,15 10,24 Q0,20 -10,24Z"/>',
      grin: '<path d="M-17,13 Q0,30 17,13 Q0,22 -17,13Z"/><path d="M-10,17 L-8,21 M-3,19 L-2,23 M4,19 L3,23 M10,17 L8,21" stroke="#4b9bff" stroke-width="1.6"/>',
      blank: '<path d="M-3,20 L3,20" stroke="#06102a" stroke-width="2" stroke-linecap="round"/>',
      crack: '<path d="M-6,20 L6,20 L4,23 L-4,23Z"/>',
      sly: '<path d="M-14,18 Q2,26 14,14 Q0,20 -14,18Z"/>'
    }[face];
    const extra = face === 'cry' ? '<path d="M-14,2 L-15,20 M14,2 L15,20" stroke="#1d3fc4" stroke-width="2.4" stroke-linecap="round"/>'
      : face === 'crack' ? '<path d="M6,-36 L2,-22 L9,-12 L3,0" fill="none" stroke="#06102a" stroke-width="2"/>'
      : face === 'blank' ? '<path d="M0,-30 L4,-24 L0,-18 L-4,-24Z" fill="#06102a"/>' : '';
    return `<g class="sh-mask" transform="translate(${x} ${y}) rotate(${rot}) scale(${s})">
      <path d="M-30,-31 C-22,-42 22,-42 30,-31 C37,-10 33,14 21,30 C12,41 -12,41 -21,30 C-33,14 -37,-10 -30,-31Z" fill="url(#shMask)" stroke="#0b1a5a" stroke-width="2.2"/>
      <path d="M-30,-31 C-22,-42 22,-42 30,-31 C37,-10 33,14 21,30 C12,41 -12,41 -21,30 C-33,14 -37,-10 -30,-31Z" fill="url(#shMaskSide)"/>
      <path d="M-22,-31 C-10,-38 10,-38 22,-31 C12,-33 -12,-33 -22,-31Z" fill="#fff" opacity=".55"/>
      <path d="M0,-38 L0,-16" stroke="#1d3fc4" stroke-width="1.6" opacity=".7"/>
      <g fill="#06102a">${eyes}${mouth}</g>${extra}
    </g>`;
  }
  const rim = d => `<path d="${d}" fill="none" stroke="#7d6ac8" stroke-opacity=".45" stroke-width="2"/>`;
  const ground = (cx, cy, rx) => `<ellipse class="sh-ground" cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.13}" fill="#000" opacity=".55"/>`;

  const shadows = {
    maya() {
      const body = 'M38,186 C26,150 34,96 72,76 C88,66 112,66 128,76 C166,96 174,150 162,186 C150,180 144,194 132,188 C120,182 112,197 100,190 C88,197 80,182 68,188 C56,194 50,180 38,186Z';
      return { vb: '0 0 200 200', w: 200, h: 200, svg: `${ground(100, 192, 66)}
        <g class="sh-squash">
          <path class="sh-wave" d="M46,128 C22,124 12,106 22,92" stroke="#08050d" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path class="sh-wave sh-wave-r" d="M154,128 C178,124 188,106 178,92" stroke="#08050d" stroke-width="11" stroke-linecap="round" fill="none"/>
          <path d="${body}" fill="url(#shGoo)"/>${rim(body)}
          <path d="M90,74 C80,54 94,42 86,24 C104,38 108,56 104,72Z M110,74 C114,60 126,56 124,42 C134,54 130,68 120,78Z" fill="url(#shGooV)"/>
          <ellipse cx="74" cy="100" rx="10" ry="5" fill="#8a7ad8" opacity=".22" transform="rotate(-30 74 100)"/>
          ${mask(100, 124, 0.86, 'stern')}
          <path d="M60,190 q-2,8 2,10 q4,-2 2,-10Z M140,190 q-2,8 2,10 q4,-2 2,-10Z" fill="#050208" class="sh-drip"/>
        </g>` };
    },
    hand() {
      return { vb: '0 0 200 262', w: 180, h: 236, svg: `${ground(100, 248, 74)}
        <ellipse cx="100" cy="246" rx="64" ry="11" fill="url(#shGoo)"/>
        <g class="sh-sway">
          <path d="M80,248 C82,214 84,196 82,170 L120,170 C118,196 120,214 122,248Z" fill="url(#shGooV)"/>
          <path d="M66,170 C58,140 60,112 72,98 L130,98 C142,112 144,140 134,170 Q100,184 66,170Z" fill="url(#shGoo)"/>
          <g fill="url(#shGoo)">
            <path class="sh-finger" d="M72,106 C66,80 63,54 69,41 C75,32 84,36 85,46 C86,64 87,84 89,102Z"/>
            <path class="sh-finger" d="M89,102 C88,72 88,40 94,26 C100,17 109,23 107,36 C105,60 105,80 105,102Z"/>
            <path class="sh-finger" d="M105,102 C107,78 110,52 118,41 C124,34 133,40 129,51 C123,70 121,86 119,104Z"/>
            <path class="sh-finger" d="M119,106 C123,90 130,72 139,65 C145,60 152,68 146,77 C139,89 135,101 131,112Z"/>
            <path d="M70,142 C53,133 41,119 36,105 C33,96 42,91 49,98 C57,108 65,118 74,122Z"/>
          </g>
          <g fill="#4b9bff" opacity=".9"><ellipse cx="71" cy="42" rx="4" ry="3"/><ellipse cx="99" cy="25" rx="4" ry="3"/><ellipse cx="125" cy="42" rx="4" ry="3"/><ellipse cx="146" cy="68" rx="3.5" ry="3"/><ellipse cx="40" cy="98" rx="3.5" ry="3"/></g>
          <path d="M80,174 Q101,184 121,174 L121,184 Q101,194 80,184Z" fill="url(#shMask)" stroke="#0b1a5a" stroke-width="1.5"/>
          ${rim('M66,170 C58,140 60,112 72,98 L130,98 C142,112 144,140 134,170')}
          ${mask(101, 136, 0.66, 'grin')}
        </g>` };
    },
    beetle() {
      const shell = 'M40,130 C40,72 80,42 120,42 C160,42 200,72 200,130 C200,148 160,158 120,158 C80,158 40,148 40,130Z';
      return { vb: '0 0 240 200', w: 230, h: 192, svg: `${ground(120, 188, 96)}
        <g class="sh-hop">
          <g class="sh-legs" stroke="#07040b" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
            <path d="M74,130 L38,140 L22,174"/><path d="M84,146 L58,164 L48,190"/><path d="M100,152 L92,172 L90,192"/>
            <path d="M166,130 L202,140 L218,174"/><path d="M156,146 L182,164 L192,190"/><path d="M140,152 L148,172 L150,192"/>
          </g>
          <path d="M120,46 C114,24 124,6 146,0 C136,14 134,30 132,48Z" fill="url(#shGooV)"/><path d="M146,0 C140,6 138,10 137,14 L143,10Z" fill="#4b9bff"/>
          <path d="${shell}" fill="url(#shGoo)"/>${rim(shell)}
          <path d="M120,44 L120,156" stroke="#7d6ac8" stroke-opacity=".5" stroke-width="2"/>
          <g stroke="#4b9bff" stroke-width="4" stroke-linecap="round" opacity=".7"><path d="M90,66 L90,104 M79,78 L101,78"/><path d="M150,66 L150,104 M139,78 L161,78"/></g>
          <ellipse cx="86" cy="64" rx="18" ry="7" fill="#9b8ae8" opacity=".18" transform="rotate(-24 86 64)"/>
          <path d="M100,156 C90,170 95,182 106,176 M140,156 C150,170 145,182 134,176" stroke="#07040b" stroke-width="6" stroke-linecap="round" fill="none"/>
          ${mask(120, 140, 0.56, 'sly')}
        </g>` };
    },
    venus() {
      const wing = 'M118,96 C92,62 52,40 6,44 C26,54 30,62 20,72 C42,74 46,82 34,92 C56,92 62,100 52,112 C76,108 92,114 98,126Z';
      return { vb: '0 0 260 236', w: 240, h: 218, svg: `${ground(130, 228, 60)}
        <g class="sh-float">
          <g class="sh-wing sh-wing-l"><path d="${wing}" fill="url(#shGoo)"/><path d="M110,96 C84,72 56,58 28,58 M104,106 C80,90 60,84 40,84 M100,116 C84,106 70,102 58,104" stroke="#4b9bff" stroke-opacity=".5" stroke-width="2" fill="none"/>${rim(wing)}</g>
          <g class="sh-wing sh-wing-r"><g transform="translate(260 0) scale(-1 1)"><path d="${wing}" fill="url(#shGoo)"/><path d="M110,96 C84,72 56,58 28,58 M104,106 C80,90 60,84 40,84 M100,116 C84,106 70,102 58,104" stroke="#4b9bff" stroke-opacity=".5" stroke-width="2" fill="none"/>${rim(wing)}</g></g>
          <path d="M118,186 L104,224 L124,206 L130,232 L136,206 L156,224 L142,186Z" fill="url(#shGooV)"/>
          <path d="M130,70 C150,70 160,96 156,128 C152,160 140,180 130,196 C120,180 108,160 104,128 C100,96 110,70 130,70Z" fill="url(#shGoo)"/>
          <path d="M116,192 l-6,14 l8,-6 M144,192 l6,14 l-8,-6" stroke="#4b9bff" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M112,70 L100,42 L122,60 L130,30 L138,60 L160,42 L148,70Z" fill="url(#shGooV)"/>
          ${mask(130, 92, 0.6, 'stern')}
          <path d="M120,104 L140,104 L130,130Z" fill="url(#shMask)" stroke="#0b1a5a" stroke-width="1.6"/>
        </g>` };
    },
    table() {
      return { vb: '0 0 240 214', w: 230, h: 205, svg: `${ground(120, 204, 100)}
        <g class="sh-tilt">
          <g stroke="#07040b" stroke-width="10" stroke-linecap="round" fill="none"><path d="M58,120 C56,150 50,176 40,200"/><path d="M92,130 C92,158 90,180 86,202"/><path d="M148,130 C148,158 150,180 154,202"/><path d="M182,120 C184,150 190,176 200,200"/></g>
          <path d="M44,78 L196,78 L218,96 L22,96Z" fill="#2a1f40"/>
          <path d="M22,96 L218,96 L198,120 L42,120Z" fill="url(#shGoo)"/>
          <path d="M42,120 L198,120 L190,138 L50,138Z" fill="url(#shGooV)"/>
          <path d="M42,120 q-6,18 2,26 q6,-10 4,-26Z M198,120 q6,18 -2,26 q-6,-10 -4,-26Z M78,138 q-2,12 4,16 q4,-8 2,-16Z M168,138 q-2,14 4,18 q4,-8 2,-18Z" fill="#06030a"/>
          ${rim('M22,96 L218,96 L198,120 L42,120Z')}
          <g class="sh-candles"><rect x="64" y="58" width="9" height="24" fill="#e9e2ff"/><rect x="164" y="54" width="9" height="28" fill="#e9e2ff"/><ellipse class="sh-flame" cx="68.5" cy="52" rx="5" ry="9" fill="#7fd0ff"/><ellipse class="sh-flame" cx="168.5" cy="48" rx="5" ry="9" fill="#7fd0ff"/></g>
          ${mask(120, 110, 0.68, 'cry')}
          <g class="sh-tears" fill="#7fd0ff"><path class="sh-tear" d="M110,126 q-4,7 0,9 q4,-2 0,-9Z"/><path class="sh-tear sh-tear-2" d="M130,126 q-4,7 0,9 q4,-2 0,-9Z"/></g>
        </g>` };
    },
    maiden() {
      const dress = 'M80,72 C100,74 112,110 118,150 C124,190 136,212 132,234 C118,224 110,238 100,228 C92,240 80,230 72,238 C62,228 52,238 46,226 C40,212 40,190 44,160 C50,120 60,76 80,72Z';
      return { vb: '0 0 160 246', w: 150, h: 230, svg: `${ground(84, 240, 44)}
        <g class="sh-float">
          <path d="M80,26 C46,28 34,72 36,118 C38,148 28,172 32,198 C44,184 50,164 54,140 C58,110 62,70 80,26Z M80,26 C114,28 126,72 124,118 C122,148 132,172 128,198 C116,184 110,164 106,140 C102,110 98,70 80,26Z" fill="url(#shGooV)" opacity=".9"/>
          <path d="${dress}" fill="url(#shGoo)"/>${rim(dress)}
          <path d="M70,110 C64,140 58,180 56,220 M92,112 C98,142 104,182 108,222" stroke="#4b9bff" stroke-opacity=".45" stroke-width="2" fill="none"/>
          <path d="M98,100 C112,108 118,100 120,90" stroke="#07040b" stroke-width="7" stroke-linecap="round" fill="none"/>
          <path d="M62,100 C48,116 46,132 52,144" stroke="#07040b" stroke-width="7" stroke-linecap="round" fill="none"/>
          <line x1="122" y1="108" x2="120" y2="92" stroke="url(#shGold)" stroke-width="4"/>
          <circle class="sh-mirror" cx="124" cy="80" r="15" fill="url(#shMirror)" stroke="url(#shGold)" stroke-width="3"/>
          <path d="M60,36 L64,16 L72,32 L80,8 L88,32 L96,16 L100,36Z" fill="url(#shIce)"/>
          ${mask(80, 54, 0.5, 'crack')}
        </g>` };
    },
    priestess() {
      const gown = 'M170,122 C214,126 238,190 256,250 C270,300 300,320 312,352 C288,342 276,358 254,348 C234,360 216,344 198,354 C182,344 162,358 146,348 C128,358 110,342 92,352 C72,358 60,342 34,350 C46,320 72,300 86,250 C104,190 126,126 170,122Z';
      const veil = 'M118,58 C140,26 200,26 222,58 C244,122 254,184 238,234 C218,218 204,236 188,224 C178,238 162,238 152,224 C136,236 122,218 102,234 C86,184 96,122 118,58Z';
      return { vb: '0 0 340 362', w: 300, h: 320, svg: `${ground(170, 352, 130)}
        <circle class="sh-halo" cx="170" cy="104" r="104" fill="url(#shHalo)"/>
        <circle cx="170" cy="104" r="88" fill="none" stroke="#bfe8ff" stroke-opacity=".35" stroke-width="2.5" stroke-dasharray="4 10" class="sh-spin"/>
        <g class="sh-float sh-slow">
          <path d="${gown}" fill="url(#shGoo)"/>${rim(gown)}
          <g stroke="#9fe0ff" stroke-opacity=".5" stroke-width="2.5" fill="none"><path d="M150,170 C136,230 116,290 96,340"/><path d="M190,170 C204,230 224,290 244,340"/><path d="M170,176 L170,346"/></g>
          <path d="M126,134 C140,112 200,112 214,134 L198,174 L142,174Z" fill="url(#shGooV)"/>
          <g class="sh-veil"><path d="${veil}" style="fill: var(--veil, #ff6b3d)" opacity=".34"/><path d="${veil}" fill="none" style="stroke: var(--veil, #ff6b3d)" stroke-width="2.5" opacity=".9"/></g>
          ${mask(170, 88, 0.92, 'blank')}
          <path d="M128,62 L136,28 L148,56 L158,14 L170,50 L182,14 L192,56 L204,28 L212,62Z" fill="url(#shIce)" stroke="#5ab4ff" stroke-width="1.2"/>
          <circle cx="170" cy="30" r="5" style="fill: var(--veil, #ff6b3d)"/>
        </g>
        <g class="sh-hand-l">
          <path d="M58,178 C40,170 32,150 38,136 L46,110 C48,104 56,106 55,113 L52,132 L60,104 C62,97 71,99 69,106 L64,130 L74,106 C76,100 84,102 82,109 L74,134 L84,118 C88,112 95,117 91,123 L80,150 C78,168 72,180 58,178Z" fill="url(#shGoo)"/>
          ${rim('M58,178 C40,170 32,150 38,136 L46,110')}
        </g>
        <g class="sh-hand-r">
          <circle class="sh-orb" cx="292" cy="128" r="18" fill="url(#shOrb)"/>
          <path d="M282,182 C300,176 312,160 308,146 L300,148 C298,156 290,160 280,158 C270,150 272,140 276,132 L270,130 C262,142 262,166 282,182Z" fill="url(#shGoo)"/>
        </g>` };
    }
  };

  function shadow(kind) { return (shadows[kind] || shadows.maya)(); }

  /* Element / command icons (24×24, currentColor). */
  const ICONS = {
    slash: '<path d="M3 21L18 4l2.5.5.5 2.5L4 22z" fill="currentColor"/><path d="M15 9l-2-2" stroke="#000" stroke-opacity=".35" stroke-width="1.4"/>',
    strike: '<path d="M6 10h11a3 3 0 0 1 3 3v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-6a1.5 1.5 0 0 1 1-1zM6.5 5h3v4.5h-3zM10.5 4h3v5.5h-3zM14.5 5h3v4.5h-3z" fill="currentColor"/>',
    pierce: '<path d="M2 22l11-11-2.5-2.5L21 3l-5.5 10.5L13 11z" fill="currentColor"/>',
    fire: '<path d="M12 2c1 4 6.5 6 6.5 12a6.5 6.5 0 0 1-13 0c0-3 1.8-5.2 3.2-7 .2 2 1.2 3.2 2.3 3.4C11 8 10 5 12 2z" fill="currentColor"/>',
    ice: '<path d="M12 2v20M3.3 7l17.4 10M20.7 7L3.3 17" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
    elec: '<path d="M13.5 1.5L4 14h6.5L9 22.5 19.5 9.5H13z" fill="currentColor"/>',
    wind: '<path d="M3 8.5h11.5a3 3 0 1 0-3-3M3 12.5h15.5a3 3 0 1 1-3 3M3 16.5h7" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/>',
    light: '<circle cx="12" cy="12" r="4.5" fill="currentColor"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4M4.6 4.6l2.8 2.8M16.6 16.6l2.8 2.8M4.6 19.4l2.8-2.8M16.6 7.4l2.8-2.8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    dark: '<path d="M15 2.5a9.5 9.5 0 1 0 6.5 13.5A7.5 7.5 0 0 1 15 2.5z" fill="currentColor"/>',
    almighty: '<path d="M12 1l2.8 8.2L23 12l-8.2 2.8L12 23l-2.8-8.2L1 12l8.2-2.8z" fill="currentColor"/>',
    heal: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor"/>',
    support: '<path d="M12 2l8.5 8.5h-5.2V22H8.7V10.5H3.5z" fill="currentColor"/>',
    item: '<rect x="3" y="8" width="18" height="8" rx="4" fill="currentColor" transform="rotate(-35 12 12)"/>',
    none: '<circle cx="12" cy="12" r="4" fill="currentColor"/>',
    skill: '<path fill-rule="evenodd" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 5l1.5 3.4 3.7.4-2.8 2.4.9 3.6-3.3-1.9-3.3 1.9.9-3.6-2.8-2.4 3.7-.4z" fill="currentColor"/>',
    guard: '<path d="M12 2l8.5 3.2v6.3c0 5.4-3.6 9.3-8.5 10.9-4.9-1.6-8.5-5.5-8.5-10.9V5.2z" fill="currentColor"/>',
    analyze: '<path fill-rule="evenodd" d="M1 12s4-7.5 11-7.5S23 12 23 12s-4 7.5-11 7.5S1 12 1 12zm11-4.2a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4z" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/>',
    escape: '<path d="M3 12h14M12 5.5l7 6.5-7 6.5" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    shift: '<path d="M3 8.5h15l-4-4M21 15.5H6l4 4" stroke="currentColor" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    charm: '<path d="M12 21s-8.5-5.3-8.5-11.3A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 3.1C20.5 15.7 12 21 12 21z" fill="currentColor"/><path d="M7 9.2a2.4 2.4 0 0 1 2.2-1.7" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
    fear: '<path d="M12 2a8 8 0 0 0-8 8v11.5l2.7-2 2.6 2 2.7-2 2.7 2 2.6-2 2.7 2V10a8 8 0 0 0-8-8z" fill="currentColor"/><ellipse cx="9" cy="10" rx="1.7" ry="2.2" fill="#14070f"/><ellipse cx="15" cy="10" rx="1.7" ry="2.2" fill="#14070f"/><ellipse cx="12" cy="15" rx="1.5" ry="2" fill="#14070f"/>',
    freeze: '<path d="M12 1.5l9 5.2v10.6l-9 5.2-9-5.2V6.7z" fill="currentColor" opacity=".35"/><path d="M12 4v16M5.1 8l13.8 8M18.9 8L5.1 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M10 5.5l2 1.8 2-1.8M10 18.5l2-1.8 2 1.8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>',
    shock: '<circle cx="12" cy="12" r="10.5" fill="currentColor" opacity=".3"/><path d="M13.4 2.5L6.2 13.2h4.9l-1.4 8.3 8-11.1h-5.1z" fill="currentColor"/>',
    poison: '<path d="M12 2.5S5 10.2 5 14.8a7 7 0 0 0 14 0C19 10.2 12 2.5 12 2.5z" fill="currentColor"/><circle cx="9.6" cy="15.4" r="1.9" fill="#14070f" opacity=".45"/><circle cx="14" cy="12" r="1.2" fill="#14070f" opacity=".45"/><circle cx="13.6" cy="17.6" r=".9" fill="#14070f" opacity=".45"/>',
    distress: '<path d="M12.6 12.2a1.4 1.4 0 1 1-1.9-1.9 3.4 3.4 0 0 1 4.6 4.6 5.6 5.6 0 0 1-7.7-7.7 7.8 7.8 0 0 1 10.9 10.9" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round"/>',
    bind: '<ellipse cx="12" cy="12" rx="9.5" ry="4.2" fill="none" stroke="currentColor" stroke-width="2.4" transform="rotate(-22 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="4.2" fill="none" stroke="currentColor" stroke-width="2.4" transform="rotate(28 12 12)"/><circle cx="12" cy="12" r="2.7" fill="currentColor"/>',
    tactics: '<path d="M5.5 2v20" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M6.5 3h12.5l-3.2 4.6 3.2 4.6H6.5z" fill="currentColor"/>',
    party: '<circle cx="8.5" cy="7.5" r="3.6" fill="currentColor"/><circle cx="16.8" cy="8.6" r="3" fill="currentColor" opacity=".7"/><path d="M1.8 20.5c0-4.2 3-6.8 6.7-6.8s6.7 2.6 6.7 6.8z" fill="currentColor"/><path d="M15 13.4c.6-.3 1.2-.4 1.8-.4 3 0 5.4 2.4 5.4 6.2h-5.6" fill="currentColor" opacity=".7"/>',
    allout: '<path d="M12 1l2.2 6.3L21 5l-3.4 5.6L23 14l-6.6.7L17 21l-5-4.2L7 21l.6-6.3L1 14l5.4-3.4L3 5l6.8 2.3z" fill="currentColor"/>',
    // Bond skills: two linked rings (Solar and a partner).
    bond: '<circle cx="8.6" cy="12" r="5.8" fill="none" stroke="currentColor" stroke-width="2.8"/><circle cx="15.4" cy="12" r="5.8" fill="none" stroke="currentColor" stroke-width="2.8" opacity=".75"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>'
  };
  const icon = (el, cls = '') => `<svg class="bt-ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[el] || ICONS.none}</svg>`;

  /* Haenim's charms for the skill tree. */
  const CHARMS = {
    bell: '<path d="M32 8a4 4 0 0 1 4 4v2.4C45 16.6 50 25 50 36v8l5 7H9l5-7v-8c0-11 5-19.4 14-21.6V12a4 4 0 0 1 4-4z" fill="url(#shGold)" stroke="#7a4e0a" stroke-width="2"/><circle cx="32" cy="55" r="5" fill="url(#shGold)" stroke="#7a4e0a" stroke-width="2"/><path d="M20 30c2-6 6-9 10-10" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7" fill="none"/>',
    jade: '<path d="M32 4c-3 6-3 10 0 14" stroke="#d8323f" stroke-width="3" fill="none"/><circle cx="32" cy="38" r="18" fill="none" stroke="#5fe0b0" stroke-width="9"/><circle cx="32" cy="38" r="18" fill="none" stroke="#0f6b4c" stroke-width="2" stroke-dasharray="3 7" opacity=".6"/><path d="M20 28a14 14 0 0 1 10-6" stroke="#eafff6" stroke-width="3" stroke-linecap="round" fill="none"/>',
    star: '<path d="M32 4l7.6 17.4L58 23l-14 12.4L48 54 32 44.6 16 54l4-18.6L6 23l18.4-1.6z" fill="#ff8cc0" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/><circle cx="32" cy="31" r="5" fill="#fff"/>'
  };
  const charm = id => `<svg class="bt-charm" viewBox="0 0 64 64" aria-hidden="true">${CHARMS[id] || ''}</svg>`;

  return { defs, shadow, icon, charm, mask };
})();
