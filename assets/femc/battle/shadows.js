/* FEMC battle: SVG stand-ins for Shadows without art, plus element and charm icons. All drawn on a 200×200 box. */
window.FEMC_BATTLE_SVG = (() => {
  const mask = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-26 -12 Q0 -26 26 -12 L22 12 Q0 22 -22 12Z" fill="#f4eef2" stroke="#14070f" stroke-width="3"/>
    <path d="M-16 -4 l10 3 -10 3z M16 -4 l-10 3 10 3z" fill="#14070f"/><path d="M-6 10 h12" stroke="#ff4f9e" stroke-width="3"/></g>`;
  const ooze = '<path d="M30 190 Q40 150 60 170 Q80 120 100 165 Q120 120 140 170 Q160 150 170 190Z" fill="#14070f"/>';
  const wrap = body => `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs>
    <radialGradient id="sg" cx=".5" cy=".4" r=".6"><stop offset="0" stop-color="#3a0f26"/><stop offset="1" stop-color="#0b0308"/></radialGradient></defs>${body}</svg>`;
  const SHADOWS = {
    maya: wrap(`${ooze}<path d="M50 170 Q40 90 100 70 Q160 90 150 170Z" fill="url(#sg)" stroke="#ff4f9e" stroke-width="2"/>
      <path d="M58 120 q-30 10 -36 36 M142 120 q30 10 36 36" stroke="#14070f" stroke-width="10" stroke-linecap="round" fill="none"/>${mask(100, 105)}`),
    hand: wrap(`${ooze}<path d="M70 175 L72 95 Q74 80 84 82 L86 60 Q88 46 98 48 L100 40 Q104 28 114 34 L116 50 Q126 44 130 56 L128 100 Q150 90 152 104 L128 150 Q118 175 100 178Z"
      fill="url(#sg)" stroke="#ff4f9e" stroke-width="2"/>${mask(104, 118, .8)}`),
    tiara: wrap(`<path d="M40 140 L60 70 L80 110 L100 50 L120 110 L140 70 L160 140Z" fill="#14070f" stroke="#ff4f9e" stroke-width="3"/>
      <circle cx="100" cy="60" r="8" fill="#ff8cc0"/><circle cx="60" cy="76" r="5" fill="#ff8cc0"/><circle cx="140" cy="76" r="5" fill="#ff8cc0"/>
      <ellipse cx="100" cy="150" rx="64" ry="16" fill="url(#sg)" stroke="#ff4f9e" stroke-width="2"/>${mask(100, 128, .8)}`),
    eagle: wrap(`<path d="M100 90 Q60 40 10 60 Q40 80 50 110 Q70 100 100 120 Q130 100 150 110 Q160 80 190 60 Q140 40 100 90Z" fill="url(#sg)" stroke="#ff4f9e" stroke-width="2"/>
      <path d="M100 110 Q86 150 100 190 Q114 150 100 110" fill="#14070f" stroke="#ff4f9e" stroke-width="2"/>${mask(100, 100, .7)}`),
    drive: wrap(`<rect x="34" y="80" width="132" height="70" rx="12" fill="url(#sg)" stroke="#ff4f9e" stroke-width="2"/>
      <circle cx="62" cy="160" r="22" fill="#14070f" stroke="#ff4f9e" stroke-width="3"/><circle cx="138" cy="160" r="22" fill="#14070f" stroke="#ff4f9e" stroke-width="3"/>
      <path d="M166 100 l26 -8 v28 l-26 -6" fill="#14070f" stroke="#ff4f9e" stroke-width="2"/>${mask(100, 112, .9)}`),
    book: wrap(`<path d="M100 70 Q60 50 24 64 V150 Q60 136 100 156 Q140 136 176 150 V64 Q140 50 100 70Z" fill="url(#sg)" stroke="#ff4f9e" stroke-width="2"/>
      <path d="M100 70 V156" stroke="#ff4f9e" stroke-width="2"/><path d="M40 84 h40 M40 98 h36 M120 84 h40 M124 98 h36" stroke="#ff8cc0" stroke-width="2" opacity=".5"/>${mask(100, 124, .8)}`),
    snake: wrap(`<path d="M60 190 Q20 150 70 130 Q130 110 90 80 Q60 60 100 36" fill="none" stroke="#14070f" stroke-width="30" stroke-linecap="round"/>
      <path d="M60 190 Q20 150 70 130 Q130 110 90 80 Q60 60 100 36" fill="none" stroke="#ff4f9e" stroke-width="2" stroke-dasharray="6 8"/>${mask(104, 38, .9)}`),
    priestess: wrap(`<path d="M100 20 L118 50 L100 44 L82 50Z" fill="#ff8cc0"/><path d="M60 60 Q100 30 140 60 L170 196 H30Z" fill="url(#sg)" stroke="#ff4f9e" stroke-width="3"/>
      <path d="M60 60 L20 120 M140 60 L180 120" stroke="#14070f" stroke-width="12" stroke-linecap="round"/>
      <path d="M78 120 Q100 108 122 120 L116 196 H84Z" fill="#ff4f9e" opacity=".25"/>${mask(100, 72)}<circle cx="100" cy="150" r="12" fill="none" stroke="#ff8cc0" stroke-width="3"/>`),
    unknown: wrap(`${ooze}<ellipse cx="100" cy="120" rx="54" ry="60" fill="url(#sg)" stroke="#ff4f9e" stroke-width="2"/>${mask(100, 110)}`)
  };

  const ICONS = {
    slash: '<path d="M4 20 L20 4" stroke-width="3"/><path d="M14 4 h6 v6"/>',
    strike: '<circle cx="12" cy="12" r="6"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
    pierce: '<path d="M3 21 L17 7"/><path d="M13 5 l7 -2 -2 7z" fill="currentColor"/>',
    fire: '<path d="M12 22c-4 0-7-3-7-7 0-4 4-6 4-11 3 2 5 5 5 8 1-1 2-2 2-4 2 2 3 4 3 7 0 4-3 7-7 7z"/>',
    ice: '<path d="M12 2v20M3 7l18 10M21 7L3 17"/>',
    elec: '<path d="M13 2 L5 14 h6 l-2 8 8-12 h-6z" fill="currentColor"/>',
    wind: '<path d="M3 8h12a3 3 0 1 0-3-3M3 13h16a3 3 0 1 1-3 3M3 18h8"/>',
    light: '<circle cx="12" cy="12" r="4"/><path d="M12 1v4M12 19v4M1 12h4M19 12h4M4 4l3 3M17 17l3 3M4 20l3-3M17 7l3-3"/>',
    dark: '<path d="M20 15A8 8 0 1 1 9 4a7 7 0 0 0 11 11z" fill="currentColor"/>',
    almighty: '<path d="M12 2 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z"/>',
    heal: '<path d="M12 4v16M4 12h16" stroke-width="4"/>',
    bell: '<path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z"/><path d="M10 21h4"/>',
    jade: '<path d="M12 2 L20 9 L12 22 L4 9Z"/><path d="M4 9h16"/>',
    star: '<path d="M12 2 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="currentColor"/>'
  };
  const icon = (name, cls = '') => ICONS[name] ? `<svg class="bi ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>` : '';

  return { shadow: key => SHADOWS[key] || SHADOWS.unknown, icon };
})();
