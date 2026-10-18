/* FEMC battle prototype: item, equipment, material and map-room icons as small inline SVGs (32×32, P3R-style: flat fills,
   a heavy ink outline, a white glint). FemcIcons.of(id) picks the right icon for any item/gear/material id from data.js;
   FemcIcons.svg(name, color) draws one by name. Colors default per icon; pass color to tint (e.g. a block's color). */
window.FemcIcons = (() => {
  const INK = '#14070f';
  const o = `stroke="${INK}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
  const glint = (d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>`;
  const I = {
    // ── Weapons
    naginata: c => `<path d="M4 29L17 16" ${o} stroke-width="5.5"/><path d="M4 29L17 16" stroke="#8a4a2a" stroke-width="3" stroke-linecap="round"/><path d="M15 18C19 11 24 6 30 2c-1 7-5 12-11 18z" fill="${c || '#e8eef8'}" ${o}/><path d="M13 16l5 5" ${o} stroke-width="3"/><path d="M13 16l5 5" stroke="#ffd36b" stroke-width="1.4"/>${glint('M20 13c2-3 4-5 7-8')}`,
    gloves: c => `<path d="M7 14c0-3 2-5 5-5h9c3 0 5 2 5 5v6c0 4-3 7-7 7h-5c-4 0-7-3-7-7z" fill="${c || '#ff9a3d'}" ${o}/><path d="M11 9v6M15.5 9v6M20 9v6" ${o} stroke-width="1.6"/><rect x="8" y="22" width="16" height="4" rx="1" fill="#fff3e0" ${o} stroke-width="1.6"/>${glint('M10 12c1-1 2-1.5 3-1.5')}`,
    bow: c => `<path d="M10 4c9 4 9 20 0 24" fill="none" ${o} stroke-width="5"/><path d="M10 4c9 4 9 20 0 24" fill="none" stroke="${c || '#ff8cc0'}" stroke-width="2.6" stroke-linecap="round"/><path d="M10 4v24" stroke="#fff" stroke-width="1.2"/><path d="M5 16h21l-3-2.5M26 16l-3 2.5" fill="none" ${o}/><path d="M5 16h20" stroke="#ffd36b" stroke-width="1.2"/>`,
    greatsword: c => `<path d="M7 25L24 8l3-3-1 4L9 27z" fill="${c || '#dfe6f2'}" ${o}/><path d="M5 23l4 4" ${o} stroke-width="4"/><path d="M5 23l4 4" stroke="#7fb6ff" stroke-width="2"/><path d="M3 29l3-3" ${o} stroke-width="3"/>${glint('M12 19l9-9')}`,
    rapier: c => `<path d="M6 26L27 5" ${o} stroke-width="3"/><path d="M6 26L27 5" stroke="${c || '#e8eef8'}" stroke-width="1.4"/><path d="M9 19c-3 1-4 4-2 6s5 1 6-2" fill="#ff5b5b" ${o}/><path d="M4 28l3-3" ${o} stroke-width="3"/>`,
    gun: c => `<path d="M4 12h20l3 2v4H14l-2 9H6l2-9H4z" fill="${c || '#c9d0dc'}" ${o}/><path d="M24 14h3" stroke="${INK}" stroke-width="2"/><rect x="8" y="13.5" width="10" height="2" fill="#ffd36b"/>${glint('M6 13h12')}`,
    spear: c => `<path d="M4 29L18 15" ${o} stroke-width="5"/><path d="M4 29L18 15" stroke="#8a5a2a" stroke-width="2.6" stroke-linecap="round"/><path d="M16 17c1-6 6-11 14-15-3 8-8 13-14 15z" fill="${c || '#e8eef8'}" ${o}/><path d="M13 15l5 5" ${o} stroke-width="3"/><path d="M13 15l5 5" stroke="#ffb36b" stroke-width="1.4"/>${glint('M20 13c2-3 4-6 7-8')}`,
    knife: c => `<path d="M14 18L26 6l1 3-9 13z" fill="${c || '#e8eef8'}" ${o}/><path d="M7 25l7-7 3 3-7 7z" fill="#5a3a2a" ${o}/><path d="M12 16l6 6" ${o} stroke-width="2.4"/>${glint('M19 13l5-5')}`,
    axe: c => `<path d="M6 28L21 9" ${o} stroke-width="4"/><path d="M6 28L21 9" stroke="#6b3a24" stroke-width="2" stroke-linecap="round"/><path d="M17 6c4-3 10-1 11 4-4 0-7 2-8 5z" fill="${c || '#c43b3b'}" ${o}/><path d="M18 6l-3 4 5 5" fill="#9aa3b5" ${o}/>`,
    // ── Armor and accessories
    armor: c => `<path d="M9 5l7 3 7-3 5 4-3 6v12H7V15L4 9z" fill="${c || '#4b9bff'}" ${o}/><path d="M16 8v19" ${o} stroke-width="1.6"/><path d="M12 13h8" stroke="#fff" stroke-width="1.6" opacity=".6"/>${glint('M8 9l3 2')}`,
    ring: c => `<ellipse cx="16" cy="19" rx="9" ry="8" fill="none" ${o} stroke-width="6"/><ellipse cx="16" cy="19" rx="9" ry="8" fill="none" stroke="${c || '#ffd36b'}" stroke-width="3.2"/><path d="M12 9l4-5 4 5-4 3z" fill="#ff4f9e" ${o}/>${glint('M9 15c1-2 2-3 4-3.5')}`,
    charm: c => `<path d="M16 4v6" ${o}/><path d="M16 9c6 0 9 4 9 9 0 6-5 10-9 10s-9-4-9-10c0-5 3-9 9-9z" fill="${c || '#ff8cc0'}" ${o}/><path d="M12 18h8M16 14v8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,
    barrette: c => `<path d="M5 20l22-6" ${o} stroke-width="4"/><path d="M5 20l22-6" stroke="#c9d0dc" stroke-width="2"/><circle cx="12" cy="15" r="6" fill="${c || '#ff4f9e'}" ${o}/><circle cx="12" cy="15" r="2.4" fill="#ffd6e8"/><path d="M8 11c2-2 4-2 6-1" fill="none" stroke="#fff" stroke-width="1.4"/>`,
    amulet: c => `<path d="M8 4c0 6 3 9 8 9s8-3 8-9" fill="none" ${o}/><path d="M16 12l7 7-7 9-7-9z" fill="${c || '#9fe8ff'}" ${o}/><path d="M16 15v9M12 19h8" stroke="#fff" stroke-width="1.6"/>`,
    earring: c => `<circle cx="16" cy="7" r="3" fill="none" ${o}/><path d="M16 10v4" ${o}/><path d="M16 14c5 0 7 4 7 8a7 7 0 0 1-14 0c0-4 2-8 7-8z" fill="${c || '#3a2a4a'}" ${o}/>${glint('M12 19c1-2 2-2.6 3-2.8')}`,
    bangle: c => `<ellipse cx="16" cy="16" rx="11" ry="7" fill="none" ${o} stroke-width="7"/><ellipse cx="16" cy="16" rx="11" ry="7" fill="none" stroke="${c || '#7dffc0'}" stroke-width="4"/>${glint('M7 14c2-3 5-4 8-4')}`,
    scope: c => `<circle cx="16" cy="16" r="10" fill="${c || '#14070f'}" ${o}/><circle cx="16" cy="16" r="6" fill="none" stroke="#ff4f9e" stroke-width="2"/><path d="M16 4v8M16 20v8M4 16h8M20 16h8" stroke="#fff" stroke-width="1.6"/>`,
    belt: c => `<rect x="3" y="12" width="26" height="9" rx="2" fill="${c || '#8a5a2a'}" ${o}/><rect x="12" y="10" width="9" height="13" rx="2" fill="#ffd36b" ${o}/><rect x="15" y="14" width="3" height="5" fill="${INK}"/>`,
    sun: c => `<circle cx="16" cy="16" r="6.5" fill="${c || '#ffd36b'}" ${o}/><path d="M16 2v5M16 25v5M2 16h5M25 16h5M6 6l3.5 3.5M22.5 22.5L26 26M6 26l3.5-3.5M22.5 9.5L26 6" ${o} stroke-width="3"/><path d="M16 2v5M16 25v5M2 16h5M25 16h5M6 6l3.5 3.5M22.5 22.5L26 26M6 26l3.5-3.5M22.5 9.5L26 6" stroke="#fff2b0" stroke-width="1.4" stroke-linecap="round"/>`,
    star: c => `<path d="M16 3l3.8 8.4 9.2 1-6.9 6.2 2 9L16 23l-8.1 4.6 2-9L3 12.4l9.2-1z" fill="${c || '#ff8cc0'}" ${o}/><circle cx="16" cy="15" r="2.6" fill="#fff"/>`,
    // ── Consumables
    medicine: c => `<rect x="10" y="4" width="12" height="5" rx="1" fill="#fff" ${o}/><path d="M9 9h14l2 4v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V13z" fill="${c || '#7dffc0'}" ${o}/><path d="M16 15v8M12 19h8" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`,
    bead: c => `<circle cx="16" cy="17" r="10" fill="${c || '#ff8cc0'}" ${o}/><circle cx="16" cy="17" r="5" fill="#fff" opacity=".35"/>${glint('M10 13c1.5-2.5 3.5-3.5 6-3.5')}<path d="M16 3v4" ${o}/>`,
    soul: c => `<path d="M11 4h10v4l3 3v15a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V11l3-3z" fill="${c || '#ff4f9e'}" ${o}/><rect x="10" y="14" width="12" height="8" fill="#fff" ${o} stroke-width="1.4"/><path d="M14 18h4" stroke="${c || '#ff4f9e'}" stroke-width="2"/>`,
    soma: c => `<path d="M12 3h8v6c4 2 6 6 6 10a10 10 0 0 1-20 0c0-4 2-8 6-10z" fill="${c || '#ffd36b'}" ${o}/><path d="M8 19h16" stroke="#fff" stroke-width="1.6" opacity=".7"/>${glint('M10 15c1-2 2-3 3-3.5')}`,
    revive: c => `<path d="M16 5c6 0 10 4 10 10 0 7-10 13-10 13S6 22 6 15C6 9 10 5 16 5z" fill="${c || '#ffd36b'}" ${o}/><path d="M16 10v10M11 15h10" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`,
    gem: c => `<path d="M8 6h16l5 7-13 15L3 13z" fill="${c || '#9fe8ff'}" ${o}/><path d="M3 13h26M12 6l-2 7 6 15 6-15-2-7" fill="none" stroke="${INK}" stroke-width="1.2"/>${glint('M9 9l2-2')}`,
    antidote: c => `<path d="M12 4h8v6l5 6v9a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-9l5-6z" fill="${c || '#b36bff'}" ${o}/><path d="M11 20l3 3 6-7" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`,
    key: c => `<circle cx="10" cy="11" r="6" fill="none" ${o} stroke-width="5"/><circle cx="10" cy="11" r="6" fill="none" stroke="${c || '#ffd36b'}" stroke-width="2.6"/><path d="M14 15l13 13M21 22l3-3M24 25l3-3" ${o} stroke-width="4"/><path d="M14 15l13 13M21 22l3-3M24 25l3-3" stroke="${c || '#ffd36b'}" stroke-width="2"/>`,
    yen: c => `<circle cx="16" cy="16" r="12" fill="${c || '#ffd36b'}" ${o}/><path d="M11 9l5 7 5-7M16 16v9M12 17h8M12 21h8" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
    memory: c => `<rect x="7" y="4" width="18" height="24" rx="2" fill="${c || '#fff4f9'}" ${o} transform="rotate(-8 16 16)"/><path d="M16 11l1.6 3.4 3.7.4-2.8 2.4.9 3.6-3.4-2-3.4 2 .9-3.6-2.8-2.4 3.7-.4z" fill="#ff4f9e" transform="rotate(-8 16 16)"/>`,
    // ── Materials
    'mat-ash': c => `<path d="M6 24c2-6 6-6 8-11 2 4 3 6 7 6 2 0 4 2 5 5z" fill="${c || '#3a2f40'}" ${o}/><circle cx="10" cy="10" r="1.6" fill="#8a7a9a"/><circle cx="21" cy="9" r="1.2" fill="#8a7a9a"/>`,
    'mat-mask': c => `<path d="M6 8c3-3 17-3 20 0 2 7 0 14-5 18-3 2-7 2-10 0-5-4-7-11-5-18z" fill="${c || '#4b9bff'}" ${o}/><path d="M10 13l5 2-1 2-4-1zM22 13l-5 2 1 2 4-1z" fill="${INK}"/><path d="M19 4l-3 9 4 4" fill="none" stroke="${INK}" stroke-width="1.6"/>`,
    'mat-lacquer': c => `<path d="M8 6h16l3 20H5z" fill="${c || '#b3203b'}" ${o}/><path d="M9 11h14M8 16h16" stroke="#ffd36b" stroke-width="1.4"/>${glint('M10 8h4')}`,
    'mat-mirror': c => `<path d="M6 26L11 4l15 7-6 17z" fill="${c || '#c9d6ff'}" ${o}/><path d="M11 10l9 5M9 18l7 4" stroke="#fff" stroke-width="1.6" opacity=".8"/>`,
    'mat-cog': c => `<path d="M16 4l2.4 3.2 3.9-1 .6 4 3.8 1.3-1.6 3.6 2.4 3.2-3.5 2 .2 4-4-.4-2 3.5-3.2-2.4-3.6 1.6-1.3-3.8-4-.6 1-3.9L4 16l3.2-2.4-1-3.9 4-.6 1.3-3.8 3.6 1.6z" fill="${c || '#b0703a'}" ${o}/><circle cx="16" cy="16" r="4" fill="${INK}"/>`,
    'mat-stone': c => `<path d="M7 12l6-7 10 2 5 9-4 10H10L4 20z" fill="${c || '#6a6a7a'}" ${o}/><path d="M16 13c3-3 6 0 4 3l-4 4-4-4c-2-3 1-6 4-3z" fill="#ff4f9e" ${o} stroke-width="1.4"/>`,
    'mat-feather': c => `<path d="M7 27C9 15 15 6 26 4c-1 11-8 18-19 23z" fill="${c || '#e8f2ff'}" ${o}/><path d="M7 27L22 9" stroke="${INK}" stroke-width="1.4"/><path d="M13 19l4 1M16 15l4 1" stroke="#9fd3ff" stroke-width="1.4"/>`,
    'mat-arcana': c => `<rect x="8" y="3" width="16" height="26" rx="2" fill="${c || '#14070f'}" ${o} transform="rotate(10 16 16)"/><circle cx="16" cy="16" r="5" fill="none" stroke="#7dffc0" stroke-width="2" transform="rotate(10 16 16)"/><path d="M16 8v4M16 20v4" stroke="#7dffc0" stroke-width="1.6" transform="rotate(10 16 16)"/>`,
    // ── Map rooms
    'room-shadow': c => `<path d="M6 9c3-4 17-4 20 0 2 8 0 14-4 17-4 3-8 3-12 0-4-3-6-9-4-17z" fill="${c || '#4b9bff'}" ${o}/><path d="M9 14l6 2-1 3-5-2zM23 14l-6 2 1 3 5-2z" fill="${INK}"/><path d="M13 23h6" stroke="${INK}" stroke-width="2"/>`,
    'room-chest': c => `<path d="M5 13c0-5 4-7 11-7s11 2 11 7z" fill="${c || '#ffd36b'}" ${o}/><rect x="5" y="13" width="22" height="13" rx="1.5" fill="${c || '#ffd36b'}" ${o}/><rect x="13.5" y="12" width="5" height="6" rx="1" fill="#fff" ${o} stroke-width="1.4"/><path d="M5 13h22" stroke="${INK}" stroke-width="2"/>`,
    'room-locked': c => `<rect x="5" y="13" width="22" height="13" rx="1.5" fill="${c || '#b07bff'}" ${o}/><path d="M5 13c0-5 4-7 11-7s11 2 11 7z" fill="${c || '#b07bff'}" ${o}/><path d="M12 16v-2a4 4 0 0 1 8 0v2" fill="none" stroke="#fff" stroke-width="2"/><rect x="11" y="16" width="10" height="7" rx="1" fill="#fff" ${o} stroke-width="1.4"/>`,
    'room-clock': c => `<circle cx="16" cy="16" r="12" fill="${c || '#7dffc0'}" ${o}/><circle cx="16" cy="16" r="8.5" fill="#fff" ${o} stroke-width="1.4"/><path d="M16 10v6l4 3" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>`,
    'room-access': c => `<rect x="9" y="4" width="14" height="24" rx="3" fill="${c || '#5fe0b0'}" ${o}/><rect x="12" y="8" width="8" height="12" rx="1" fill="#eafff6" ${o} stroke-width="1.4"/><path d="M16 22v3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,
    'room-stairs': c => `<path d="M4 28V22h6v-6h6v-6h6V4h6v24z" fill="${c || '#ff4f9e'}" ${o}/><path d="M10 22h18M16 16h12M22 10h6" stroke="#fff" stroke-width="1.4" opacity=".6"/>`,
    'room-event': c => `<path d="M16 3c7 0 12 5 12 11 0 7-6 11-12 11l-7 4 1-6c-4-2-6-5-6-9C4 8 9 3 16 3z" fill="${c || '#ff8cc0'}" ${o}/><circle cx="11" cy="14" r="1.8" fill="${INK}"/><circle cx="16" cy="14" r="1.8" fill="${INK}"/><circle cx="21" cy="14" r="1.8" fill="${INK}"/>`,
    'room-empty': c => `<circle cx="16" cy="16" r="5" fill="${c || '#5a4a6a'}" ${o}/>`,
    'room-start': c => `<path d="M16 3l10 13-10 13L6 16z" fill="${c || '#fff4f9'}" ${o}/><path d="M16 9v14" stroke="${INK}" stroke-width="1.4"/>`,
    'room-reaper': c => `<path d="M16 3c-6 0-9 5-9 11v14l4-3 2 3 3-3 3 3 2-3 4 3V14c0-6-3-11-9-11z" fill="${c || '#2a0a14'}" ${o}/><path d="M10 13l4 2-1 2-3-1zM22 13l-4 2 1 2 3-1z" fill="#ff3b3b"/><path d="M4 30l6-8M28 30l-6-8" stroke="#c9d0dc" stroke-width="1.6" stroke-dasharray="2 1.5"/>`,
    'room-unknown': c => `<circle cx="16" cy="16" r="10" fill="${c || '#1c0d18'}" ${o}/><path d="M12.5 12.5a3.5 3.5 0 1 1 5 3.2c-1 .5-1.5 1.3-1.5 2.3M16 21.5v.5" fill="none" stroke="#d9a9c0" stroke-width="2.2" stroke-linecap="round"/>`
  };
  const svg = (name, color, cls = '') => `<svg class="bt-icon ${cls}" viewBox="0 0 32 32" aria-hidden="true">${(I[name] || I['room-empty'])(color)}</svg>`;
  /* Icon for any id from data.js: an item, a piece of gear, or a material. */
  function of(id, cls = '') {
    const D = window.FEMC_BATTLE_DATA;
    if (D.items[id]) return svg(D.items[id].icon || 'medicine', null, cls);
    if (D.materials[id]) return svg(D.materials[id].icon || 'mat-ash', null, cls);
    const g = D.gear[id];
    if (g) {
      if (g.slot === 'weapon') return svg(g.wtype, g.el ? D.elements[g.el].color : null, cls);
      if (g.slot === 'armor') return svg('armor', g.aff ? D.elements[Object.keys(g.aff)[0]].color : null, cls);
      return svg(g.icon || 'ring', null, cls);
    }
    if (id === 'yen') return svg('yen', null, cls);
    return svg('room-unknown', null, cls);
  }
  return { svg, of, names: Object.keys(I) };
})();
