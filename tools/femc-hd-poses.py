#!/usr/bin/env python3
"""Solar's high-resolution single-figure poses (FEMC-ART-TODO top section, Nov 3 2026).

One figure per image (Kat's ChatGPT pictures, already transparent or on plain white), cut onto one canvas rule so she
never jumps when the pose changes:
  * no rescale: the output keeps the source's own pixels (full resolution, WebP q92), so Kat's later Photoshop 200 %
    upscale goes in by re-running this with the same names (everything is measured in shares of the source height);
  * canvas height = the source height, width = the figure's width plus a small margin;
  * feet on the bottom edge (the lowest opaque row lands on the last row), except AIR poses (jump), which keep the
    picture's own air under her;
  * stray specks (rows / columns with only a few opaque pixels) don't count towards the figure's box.

  python3 tools/femc-hd-poses.py own            Solar's own look: New Adds/solar-<pose>.png -> assets/femc/profile/solar-poses/<name>.webp
  python3 tools/femc-hd-poses.py look <look id> Wardrobe look: its folder in LOOKS below -> assets/femc/game/art/skins/<look>/hd/<name>.webp
  python3 tools/femc-hd-poses.py all            both of the above for every set below (the re-run after the upscale)

Afterwards it runs `femc-wardrobe.py scan`, which lists each look's hd poses in ready.js (skins[<look>].hd, with hdv = a
content hash for ?v= and hdfig = the arms-crossed pose's menu metrics) and the own set (own.hd / own.hdv / own.hdfig).
The metrics (fig.json next to the poses): ar = width / height, ht = head top, hf = head-to-chin (estimated as 0.14 of the
standing figure's height), hx = head centre x, all shares of the image; menu.js HOME_FIG places her by them.
Kat's files are only read, never changed.
"""
import hashlib, json, subprocess, sys
from pathlib import Path
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
NEW = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images/New Adds'
OWN_OUT = ROOT / 'assets/femc/profile/solar-poses'
SKINS = ROOT / 'assets/femc/game/art/skins'
# Kat's pose words -> the game's pose names (ui.js HOME_POSES / HOME_REACT, menu.js HOME_FIG, battle.js win hero)
NAMES = {'armscrossed': 'arms-crossed', 'evoker': 'evoker', 'fistpump': 'cheer', 'handinhair': 'hair', 'handsonhip': 'tease',
         'hiphands': 'tease', 'hearthands': 'heart', 'jump': 'jump', 'peacesign': 'peace', 'phone': 'phone', 'ramen': 'ramen',
         'reading': 'study', 'sewing': 'sewing', 'shoulderlook': 'lookback', 'overshoulder': 'lookback', 'shy': 'shy',
         'thinking': 'thinking', 'watering': 'watering', 'wave': 'wave', 'yawn': 'stretch'}
AIR = {'jump'}
# Wardrobe looks with an HD set: look id -> (folder in New Adds, file prefix). Kat names a folder after the outfit.
LOOKS = {'sk-cp-afterhours': ('Solar-After Hours-Menu Poses', 'afterhr-')}
QUALITY, ALPHA_MIN, SPECK = 92, 16, 3


def box(a):
    """Figure box (x0, y0, x1, y1) ignoring rows / columns with fewer than SPECK opaque pixels (stray specks)."""
    m = np.asarray(a) > ALPHA_MIN
    xs = np.nonzero(m.sum(0) >= SPECK)[0]; ys = np.nonzero(m.sum(1) >= SPECK)[0]
    return int(xs[0]), int(ys[0]), int(xs[-1]) + 1, int(ys[-1]) + 1


def rgba(src):
    im = Image.open(src).convert('RGBA')
    if im.getchannel('A').getextrema()[0] == 255:  # plain white background: key it out (soft edge)
        px = np.asarray(im).copy(); d = px[..., :3].min(2).astype(int)
        px[..., 3] = np.where(d > 235, np.clip((255 - d) * 12, 0, 255), 255).astype(np.uint8)
        im = Image.fromarray(px, 'RGBA')
    return im


def cut(src, out, name):
    im = rgba(src); W, H = im.size
    x0, y0, x1, y1 = box(im.getchannel('A'))
    pad = round(H * 0.006)
    x0, x1 = max(0, x0 - pad), min(W, x1 + pad)
    foot = H if name in AIR else y1  # this row lands on the bottom edge
    canvas = Image.new('RGBA', (x1 - x0, H), (0, 0, 0, 0))
    canvas.paste(im.crop((x0, 0, x1, foot)), (0, H - foot))
    out.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(out, 'WEBP', quality=QUALITY, method=6, alpha_quality=100)
    a = canvas.getchannel('A')
    _, t, _, b = box(a)
    band = a.crop((0, t, canvas.width, t + round(H * 0.07)))
    bx0, _, bx1, _ = box(band)
    return {'ar': round(canvas.width / H, 3), 'ht': round(t / H, 3), 'hf': round(0.14 * (b - t) / H, 3),
            'hx': round((bx0 + bx1) / 2 / canvas.width, 3), 'src': src.name, 'size': list(canvas.size)}


def run_set(srcs, outdir):
    fig = {}
    for name, src in srcs.items():
        fig[name] = cut(src, outdir / f'{name}.webp', name)
        print(f'  {src.name} -> {name}.webp {fig[name]["size"]}')
    (outdir / 'fig.json').write_text(json.dumps(fig, indent=1, sort_keys=True) + '\n')
    return fig


def sources(folder, prefix, quiet=False):
    """<prefix><pose>.png, or the art list's <prefix>hd-<pose>.png (which wins when both are there)."""
    got, hd = {}, set()
    for f in sorted(folder.glob(f'{prefix}*.png')):
        word = f.stem[len(prefix):].lower().replace('-', '').replace('_', '')
        is_hd = word.startswith('hd') and word[2:] in NAMES
        if is_hd: word = word[2:]
        if word not in NAMES:
            if not quiet: print(f'  skipped {f.name}: unknown pose word "{word}"')
            continue
        n = NAMES[word]
        if n in hd and not is_hd: continue
        got[n] = f
        if is_hd: hd.add(n)
    return got


def own():
    srcs = sources(NEW, 'solar-', quiet=True)  # New Adds also holds her sheets (solar-*-battlesheet ...)
    missing = sorted(set(NAMES.values()) - set(srcs))
    if missing: print('  own look: no HD picture yet for', ', '.join(missing))
    return run_set(srcs, OWN_OUT)


def look(lid):
    folder, prefix = LOOKS[lid]
    if not (SKINS / lid).exists(): raise SystemExit(f'{lid}: no skins folder (cut the look first)')
    srcs = sources(NEW / folder, prefix)
    missing = sorted(set(NAMES.values()) - set(srcs))
    if missing: print(f'  {lid}: missing', ', '.join(missing), '(the evening screen falls back to the own-look pose for those)')
    return run_set(srcs, SKINS / lid / 'hd')


def digest(d):
    h = hashlib.sha1()
    for f in sorted(d.glob('*.webp')): h.update(f.read_bytes())
    return h.hexdigest()[:8]


if __name__ == '__main__':
    a = sys.argv[1:]
    if not a or a[0] not in ('own', 'look', 'all'): raise SystemExit(__doc__)
    if a[0] in ('own', 'all'): print('own look'); own()
    if a[0] == 'look': print(a[1]); look(a[1])
    if a[0] == 'all':
        for lid in LOOKS: print(lid); look(lid)
    subprocess.run([sys.executable, str(ROOT / 'tools/femc-wardrobe.py'), 'scan'], check=True)
