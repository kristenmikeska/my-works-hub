#!/usr/bin/env python3
"""Epilogue polaroids (FEMC-ART-TODO 30, Kat's pictures from Nov 5 2026) -> assets/femc/game/art/polaroids/.

    python3 tools/femc-polaroids.py [SRC_DIR]     (default: Femc Mode Images/WIP, then New Adds)

  polaroid-<world>-<slug>.png -> polaroids/<world>-<slug>.webp (900 px square, q88) with its caption written in
  handwriting on the blank bottom strip (CAPTIONS; the strip is found as the white rows under the photo).
  Writes polaroids/index.js: window.FEMC_POLAROIDS (ids with a picture) and FEMC_POLAROIDS_V, and bumps its ?v= in
  femc-game.html. epilogue.js POLAROIDS maps each id to the hangout that unlocks it. Sources are only read.
"""
import hashlib, json, os, re, sys
from PIL import Image, ImageDraw, ImageFont
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMGS = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')
OUT = os.path.join(ROOT, 'assets/femc/game/art/polaroids')
FONT = '/System/Library/Fonts/Supplemental/Bradley Hand Bold.ttf'
CAPTIONS = {
    'runners-snow-day-at-the-valley': 'snow day at the valley',
    'runners-napkin-math': 'napkin math',
    'runners-four-seconds': 'four seconds',
    'runners-two-chairs': 'two chairs',
    'strangers-hot-floor': 'hot floor',
    'strangers-the-chair-by-the-window': 'the chair by the window',
    'strangers-good-cards': 'good cards',
    'hoax-backwards': 'backwards',
    'hoax-swings': 'swings',
}


def strip_box(im):
    """The photo's bottom edge: the lowest row (above the frame's bottom) that isn't near-white across the middle."""
    a = np.asarray(im.convert('RGB')).astype(int); H, W = a.shape[:2]
    mid = a[:, W // 5: 4 * W // 5]
    busy = (mid < 225).any(2).mean(1) > .25
    rows = np.where(busy[: int(H * .95)])[0]
    bottom = rows.max() + 1 if len(rows) else int(H * .8)
    return bottom, H


def main():
    dirs = [sys.argv[1]] if len(sys.argv) > 1 else [os.path.join(IMGS, 'WIP'), os.path.join(IMGS, 'New Adds')]
    os.makedirs(OUT, exist_ok=True)
    for d in dirs:
        for f in sorted(os.listdir(d)) if os.path.isdir(d) else []:
            m = re.match(r'polaroid-([a-z]+-[a-z0-9-]+)\.png$', f)
            if not m: continue
            pid = m.group(1); cap = CAPTIONS.get(pid)
            im = Image.open(os.path.join(d, f)).convert('RGB')
            if cap:
                top, H = strip_box(im); W = im.size[0]; dr = ImageDraw.Draw(im)
                size = int((H - top) * .34)
                font = ImageFont.truetype(FONT, size)
                while dr.textlength(cap, font=font) > W * .78: size -= 2; font = ImageFont.truetype(FONT, size)
                tw = dr.textlength(cap, font=font); y = top + (H - top) * .5
                dr.text(((W - tw) / 2, y), cap, font=font, fill=(52, 40, 58), anchor='lm')  # 'lm': left edge, vertical middle
            im = im.resize((900, 900), Image.LANCZOS)
            im.save(os.path.join(OUT, f'{pid}.webp'), quality=88, method=6)
            print(f, '->', f'polaroids/{pid}.webp', f'({cap!r})')
    ids = sorted(f[:-5] for f in os.listdir(OUT) if f.endswith('.webp'))
    sig = hashlib.sha1(b''.join(open(os.path.join(OUT, i + '.webp'), 'rb').read() for i in ids)).hexdigest()[:8]
    with open(os.path.join(OUT, 'index.js'), 'w') as fh:
        fh.write('// Written by tools/femc-polaroids.py: the epilogue polaroids that have a picture (epilogue.js POLAROIDS).\n')
        fh.write(f'window.FEMC_POLAROIDS = {json.dumps(ids)};\nwindow.FEMC_POLAROIDS_V = {json.dumps(sig)};\n')
    html = os.path.join(ROOT, 'femc-game.html'); s = open(html).read()
    s2 = re.sub(r'(art/polaroids/index\.js\?v=)(\d+)', lambda m: m.group(1) + str(int(m.group(2)) + 1), s)
    if s2 != s: open(html, 'w').write(s2); print('femc-game.html: polaroids/index.js ?v= bumped')
    print(len(ids), 'polaroids')


if __name__ == '__main__':
    main()
