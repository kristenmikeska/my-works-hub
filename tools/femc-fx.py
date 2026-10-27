"""Skill-effect sprite sheets for FEMC battles (FEMC-ART-TODO.md 5F). Sources are only read, never changed.

A source is a 3 x 2 grid of six square frames (ChatGPT's 1536 x 1024 landscape), read left to right, top to bottom:
spark, build-up, impact (the peak, frame 3), spread, break-up, last wisps. Light on solid black, except the All-Out
cloud (solid art on transparent, or on flat green #00ff00).

  python3 tools/femc-fx.py all
        Build every sheet whose source exists (see SOURCES below), then rewrite the index. Re-runnable.
  python3 tools/femc-fx.py add SRC.png NAME
        Build one sheet from any file (NAME is an effect name below), then rewrite the index.
  python3 tools/femc-fx.py index
        Rewrite assets/femc/battle/art/fx/index.js from the sheets that exist (after deleting one by hand, say).
  python3 tools/femc-fx.py check OUT.png [NAME ...]
        Contact sheet of the built sheets (all of them by default) on black, field purple and white, for checking by eye.

What a build does:
  - cuts the fixed 3 x 2 grid and warns when a frame's light touches its cell edge (it bled into the next frame);
  - shifts all six frames together so the peak frame's brightness centre sits in the middle (one shared shift, so the
    effect keeps its own motion and doesn't jitter);
  - light on black: alpha = max(r, g, b) (a small floor drops dark-grey noise), colour divided back out. The frame looks
    the same drawn with `lighter` or plain blending, and soft glows keep their fade. White-hot cores stay solid.
  - allout-cloud: keeps the source's alpha, or keys out flat green (with the green spill taken off the edges);
  - scales each frame to 256 px (384 for crit, weak, theurgy-burst and allout-cloud) and writes one 3 x 2 WebP sheet
    to assets/femc/battle/art/fx/<name>.webp, plus index.js (window.FEMC_FX_ART), which fx.js reads.
"""
import os, sys, re, glob, hashlib, json, argparse
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DST = os.path.join(ROOT, 'assets/femc/battle/art/fx')
IMAGES = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')
FOLDERS = ('Added to Game', 'New Adds')

# Every effect the game can play from a sheet (5F). fx.js maps its kinds onto these names.
NAMES = ['pierce', 'slash', 'strike', 'ice', 'elec', 'fire', 'wind', 'light', 'dark', 'almighty',
         'crit', 'weak', 'shatter', 'heal', 'buff', 'debuff', 'revive', 'cure',
         'charm', 'fear', 'poison', 'distress', 'freeze', 'shock', 'bind', 'disorient', 'hama', 'mudo',
         'theurgy-burst', 'allout-cloud', 'shuffle-flip',
         # 5G variants (fx.js artFor tries <kind>-crit on a crit and <kind>-heavy when the caller passes o.heavy, then the plain sheet)
         'slash-heavy', 'slash-crit',
         # batch 50: Kat's crit and heavy sheets for the other elements (Almighty has a heavy one only)
         'almighty-heavy', 'dark-crit', 'dark-heavy', 'elec-crit', 'elec-heavy', 'fire-crit',
         'fire-heavy', 'ice-crit', 'ice-heavy', 'light-crit', 'light-heavy', 'pierce-crit',
         'pierce-heavy', 'strike-crit', 'strike-heavy', 'wind-crit', 'wind-heavy']
BIG = {'crit', 'weak', 'theurgy-burst', 'allout-cloud'}  # 384-px frames; fx.js also draws them 2.2x bigger
SOLID = {'allout-cloud'}                                  # solid art with real alpha, not light on black
TINT = {'buff'}                                           # art the game tints (the stat colour). Kat's theurgy-burst is
                                                          # gold-white and plays as drawn; the element's own hit adds colour
GREY = {'buff'}                                           # made greyscale first (Kat's buff came pink), so any stat colour reads
LOOP = {'allout-cloud'}
# How the six frames are lined up. Default: one shared shift (the peak frame's brightness centre to the middle), so the
# effect keeps its own motion. 'core': every frame's hot core (the impact point) on the middle, for sheets whose frames
# drift in the source (Kat's pierce: frames 4-6 sit left while their streaks fly right). Core sheets get a padded canvas
# (PAD x the cell) so nothing clips; the index's `scale` tells fx.js to draw them that much bigger.
# 'peak': one shared shift from the peak frame's hot core rather than its brightness centre (Elec: the bolt from above
# would otherwise pull the impact down).
ALIGN = {'pierce': 'core', 'elec': 'peak',
         # batch 50: the elec variants fall from above like the base sheet. The pierce variants keep the default shared
         # shift: 'core' scattered them (their hot core jumps from the arrow tip to the burst between frames)
         'elec-crit': 'peak', 'elec-heavy': 'peak'}
PAD = 1.3

# name -> source file, under Added to Game/ or New Adds/ (whichever has it now). Without an entry, a file named
# <name>, fx-<name>, <name>-fx or <name>-sheet (.png/.jpg/.jpeg/.webp, any case; e.g. slash.png) in either folder is
# found on its own, so a new sheet only needs dropping in New Adds and `all`. Add a line here for any other file name.
SOURCES = {
    'pierce': 'Added to Game/pierce.png',  # Kat's first sheet (2026-10-23)
    # Batch 38 (2026-10-23): the rest of the set. Where Kat made two versions, the pick is here and the other is in ALTERNATES.
    'slash': 'Added to Game/slash.jpeg', 'strike': 'Added to Game/strike.jpeg', 'ice': 'Added to Game/ice.jpeg',
    'elec': 'Added to Game/elec.jpeg', 'fire': 'Added to Game/fire-v2.jpeg', 'wind': 'Added to Game/wind-v2.jpeg',
    'light': 'Added to Game/light-v2.jpeg', 'almighty': 'Added to Game/almighty.jpeg',
    'crit': 'Added to Game/critical.jpeg', 'weak': 'Added to Game/weakness.jpeg', 'shatter': 'Added to Game/shatter.jpeg',
    'heal': 'Added to Game/heal-v2.jpeg', 'buff': 'Added to Game/buff.jpeg', 'debuff': 'Added to Game/debuff.jpeg',
    'revive': 'Added to Game/revive.jpeg', 'cure': 'Added to Game/cure.jpeg',
    'charm': 'Added to Game/charm.jpeg', 'fear': 'Added to Game/fear.jpeg', 'poison': 'Added to Game/poison.jpeg',
    'distress': 'Added to Game/distress.jpeg', 'freeze': 'Added to Game/freeze-v2.jpeg', 'shock': 'Added to Game/shock.jpeg',
    'bind': 'Added to Game/bind-v2.jpeg', 'disorient': 'Added to Game/disorient-v2.jpeg',
    'hama': 'Added to Game/hama.jpeg', 'mudo': 'Added to Game/mudo-v2.jpeg',
    'theurgy-burst': 'Added to Game/theurgy-burst.jpeg', 'allout-cloud': 'Added to Game/alloutcloud.jpeg',
    'shuffle-flip': 'Added to Game/shuffle-flip.jpeg',
    # Batch 45 (2026-10-24): Kat's two new slash sheets match the 5G prompts, so they are variants and slash.jpeg stays the
    # plain one. slashv2: two crossing slashes with a shockwave ring in frame 3 (Heavy). slash.png: one razor line in
    # frame 3 that splits into a pink-white X (Crit; its widest frame is 4 by design).
    'slash-heavy': 'Added to Game/slashv2.png', 'slash-crit': 'Added to Game/slash.png',
    # Batch 50 (2026-10-26): crit and heavy sheets for every other element, named as their variant.
    'almighty-heavy': 'Added to Game/almighty-heavy.png', 'dark-crit': 'Added to Game/dark-crit.png', 'dark-heavy': 'Added to Game/dark-heavy.png',
    'elec-crit': 'Added to Game/elec-crit.png', 'elec-heavy': 'Added to Game/elec-heavy.png', 'fire-crit': 'Added to Game/fire-crit.jpeg',
    'fire-heavy': 'Added to Game/fire-heavy.jpeg', 'ice-crit': 'Added to Game/ice-crit.png', 'ice-heavy': 'Added to Game/ice-heavy.png',
    'light-crit': 'Added to Game/light-crit.png', 'light-heavy': 'Added to Game/light-heavy.png', 'pierce-crit': 'Added to Game/pierce-crit.jpeg',
    'pierce-heavy': 'Added to Game/pierce-heavy.jpeg', 'strike-crit': 'Added to Game/strike-crit.jpeg', 'strike-heavy': 'Added to Game/strike-heavy.jpeg',
    'wind-crit': 'Added to Game/wind-crit.png', 'wind-heavy': 'Added to Game/wind-heavy.png',
}
# Kat's other versions, kept in Added to Game unused (swap one into SOURCES and run `all` to try it).
ALTERNATES = {'fire': 'fire.jpeg', 'wind': 'wind.jpeg', 'light': 'light.jpeg', 'almighty': 'almighty-v2.jpeg',
              'crit': 'critica-v2.jpeg', 'heal': 'heal.jpeg', 'elec': 'elec-v2.jpeg', 'poison': 'poison-v2.jpeg',
              'freeze': 'freeze.jpeg', 'bind': 'bind.jpeg', 'disorient': 'disorient.jpeg', 'mudo': 'mudo.jpeg',
              'allout-cloud': 'alloutcloud-v2.jpeg'}
EXTS = ('.png', '.jpg', '.jpeg', '.webp')


def find_source(name):
    rel = SOURCES.get(name)
    if rel:
        base = os.path.basename(rel)
        for d in (os.path.dirname(rel),) + FOLDERS:
            p = os.path.join(IMAGES, d, base)
            if os.path.exists(p):
                return p
        print(f'  {name}: missing source {rel}')
        return None
    want = {name, f'fx-{name}', f'{name}-fx', f'{name}-sheet', f'fx_{name}', f'{name}_fx'}
    for d in FOLDERS:
        for p in sorted(glob.glob(os.path.join(IMAGES, d, '*'))):
            stem, ext = os.path.splitext(os.path.basename(p))
            if ext.lower() in EXTS and stem.lower() in want:
                return p
    return None


def cells(im):
    """The six grid cells of the source as square arrays (centre-cropped if the grid isn't exactly 3:2)."""
    W, H = im.size
    if abs(W / H - 1.5) > 0.08:
        print(f'  warning: source is {W}x{H}, not 3:2; cutting a 3 x 2 grid anyway')
    cw, ch = W / 3, H / 2
    side = int(min(cw, ch))
    out = []
    for r in range(2):
        for c in range(3):
            x0, y0 = c * cw + (cw - side) / 2, r * ch + (ch - side) / 2
            out.append(np.asarray(im.crop((round(x0), round(y0), round(x0) + side, round(y0) + side)), np.float32) / 255)
    return out


def strip_lines(rgb, band=0.1):
    """Clear grid seams and the frame boxes ChatGPT sometimes draws: straight bright bars (up to ~3% of the cell thick)
    running most of a cell's length in its outer band. Effects never run a straight bar along a cell's edge."""
    m = rgb.max(2)
    n = m.shape[0]
    b, thick = int(n * band), max(4, int(n * 0.03))
    out = rgb.copy()
    hit = 0
    for axis in (0, 1):
        frac = (m > 0.35).mean(axis=1 - axis)  # per row (axis 0) / per column (axis 1): bright share of its length
        on = frac > 0.45
        i = 0
        while i < n:
            if on[i] and (i < b or i >= n - b):
                j = i
                while j < n and on[j]: j += 1
                if j - i <= thick:  # a bar, not a big shape
                    lo, hi = max(0, i - 4), min(n, j + 4)
                    if axis == 0: out[lo:hi] = 0
                    else: out[:, lo:hi] = 0
                    hit += 1
                i = j
            else:
                i += 1
    return out, hit


def feather(a, frac=0.05):
    """Fade alpha to zero over the outer `frac` of the cell, so light that ran off the source cell (a beam from above,
    a flare to the corner) ends softly instead of on a hard cut."""
    n = a.shape[0]
    f = max(2, int(n * frac))
    r = np.clip(np.minimum(np.arange(n), np.arange(n)[::-1]) / f, 0, 1)
    return a * np.minimum.outer(r, r)


def light_alpha(rgb):
    """Light on black -> unpremultiplied RGBA: alpha = brightest channel (minus a noise floor), colour divided back out."""
    m = rgb.max(2)
    a = np.clip((m - 0.035) / 0.965, 0, 1)
    col = np.clip(rgb / np.maximum(m, 1e-4)[..., None], 0, 1)
    return np.dstack([col, a])


def solid_alpha(rgba, name):
    """The All-Out cloud: its own alpha if it has one, else flat green keyed out."""
    if rgba[..., 3].min() < 0.9:
        return rgba
    rgb = rgba[..., :3]
    corners = np.concatenate([rgb[:8, :8].reshape(-1, 3), rgb[-8:, -8:].reshape(-1, 3), rgb[:8, -8:].reshape(-1, 3), rgb[-8:, :8].reshape(-1, 3)])
    bg = corners.mean(0)
    if not (bg[1] > 0.35 and bg[1] > 2 * max(bg[0], bg[2])):
        raise SystemExit(f'{name}: no transparency and the background is not flat green {np.round(bg * 255)}; '
                         'ask for a transparent PNG (or a flat #00ff00 background)')
    g = rgb[..., 1] - np.maximum(rgb[..., 0], rgb[..., 2])  # how green a pixel is beyond its other channels
    a = np.clip(1 - (g - 0.12) / 0.5, 0, 1)
    out = rgb.copy()
    out[..., 1] = np.minimum(rgb[..., 1], np.maximum(rgb[..., 0], rgb[..., 2]))  # despill the edges
    return np.dstack([out, a])


def centroid_shift(a, side):
    tot = a.sum()
    if tot <= 0:
        return (0, 0)
    ys, xs = np.indices(a.shape)
    lim = side // 8  # never more than an eighth (a lopsided effect is meant to be lopsided)
    dx = int(round(side / 2 - (a * xs).sum() / tot)); dy = int(round(side / 2 - (a * ys).sum() / tot))
    return (max(-lim, min(lim, dx)), max(-lim, min(lim, dy)))


def core_shift(a, side):
    """Shift that puts the frame's hottest spot (brightness squared, blurred so a thin streak doesn't win) in the middle."""
    from scipy import ndimage
    b = ndimage.gaussian_filter(a ** 2, side / 80)
    if b.max() <= 0:
        return (0, 0)
    y, x = np.unravel_index(np.argmax(b), b.shape)
    lim = side // 4
    return (max(-lim, min(lim, side // 2 - int(x))), max(-lim, min(lim, side // 2 - int(y))))


def place(f, P, ox, oy):
    """f on a transparent P x P canvas at (ox, oy), clipped at the edges."""
    out = np.zeros((P, P, 4), np.float32)
    h, w = f.shape[:2]
    x0, y0, x1, y1 = max(0, ox), max(0, oy), min(P, ox + w), min(P, oy + h)
    if x1 > x0 and y1 > y0:
        out[y0:y1, x0:x1] = f[y0 - oy:y1 - oy, x0 - ox:x1 - ox]
    return out


def build(src, name, dst=DST):
    if name not in NAMES:
        raise SystemExit(f'unknown effect name {name!r}; one of: {", ".join(NAMES)}')
    im = Image.open(src)
    im = im.convert('RGBA')
    cs = cells(im)
    side = cs[0].shape[0]
    if name in SOLID:
        frames = [solid_alpha(c, name) for c in cs]
        for f in frames:  # the grid seams between the cells (not green, so they'd stay solid): the outer 3% is margin
            e = int(side * 0.03); f[:e, :, 3] = 0; f[-e:, :, 3] = 0; f[:, :e, 3] = 0; f[:, -e:, 3] = 0
    else:
        lines = 0
        frames = []
        for c in cs:
            rgb, h = strip_lines(c[..., :3]); lines += h
            frames.append(light_alpha(rgb))
        if lines:
            print(f'  {name}: cleared {lines} grid / box line(s) along cell edges')
        if name in GREY:
            # Drawn for tinting: keep each pixel's brightness, drop its hue (the game multiplies in the stat colour).
            for f in frames:
                lum = f[..., 0] * 0.3 + f[..., 1] * 0.59 + f[..., 2] * 0.11
                f[..., :3] = np.clip(lum / np.maximum(f[..., :3].max(2), 1e-4), 0, 1)[..., None] ** 0.6
    # Bled frames: light touching a cell's border probably crossed into its neighbour.
    for i, f in enumerate(frames):
        edge = np.concatenate([f[:3, :, 3].ravel(), f[-3:, :, 3].ravel(), f[:, :3, 3].ravel(), f[:, -3:, 3].ravel()])
        if (edge > 0.3).mean() > 0.01:
            print(f'  warning: {name} frame {i + 1} touches its cell edge (bled into the next frame?)')
    if ALIGN.get(name) == 'core':
        # Each frame's hot core (the impact point) on the centre, on a padded canvas so streaks that fly off it fit.
        shifts = [core_shift(f[..., 3], side) for f in frames]
        pad = PAD
    else:
        # One shared shift: the peak frame's (frame 3) brightness centre (or its hot core, ALIGN 'peak') to the middle,
        # but never so far that any frame's light would leave the cell (a falling or rising effect keeps its room).
        dx, dy = (core_shift if ALIGN.get(name) == 'peak' else centroid_shift)(frames[2][..., 3], side)
        ys, xs = np.nonzero(np.max([f[..., 3] for f in frames], 0) > 0.08)
        if len(xs):
            mg = int(side * 0.04)
            dx = max(mg - xs.min(), min(side - mg - 1 - xs.max(), dx)) if xs.max() - xs.min() < side - 2 * mg else 0
            dy = max(mg - ys.min(), min(side - mg - 1 - ys.max(), dy)) if ys.max() - ys.min() < side - 2 * mg else 0
        shifts = [(int(dx), int(dy))] * 6
        pad = 1.0
    P = int(round(side * pad))
    out = 384 if name in BIG else 256
    sheet = Image.new('RGBA', (out * 3, out * 2), (0, 0, 0, 0))
    for i, (f, (dx, dy)) in enumerate(zip(frames, shifts)):
        f = place(f, P, (P - side) // 2 + dx, (P - side) // 2 + dy)
        if name not in SOLID:
            f[..., 3] = feather(f[..., 3])
        # Premultiply for the resize (no dark fringes from colour under zero alpha), then divide back out.
        pm = np.dstack([f[..., :3] * f[..., 3:], f[..., 3]])
        cell = Image.fromarray((pm * 255 + 0.5).astype(np.uint8)).resize((out, out), Image.LANCZOS)
        c = np.asarray(cell, np.float32) / 255
        al = c[..., 3:]
        c = np.dstack([np.clip(c[..., :3] / np.maximum(al, 1 / 255), 0, 1), al[..., 0]])
        c[c[..., 3] < 2 / 255] = 0
        sheet.paste(Image.fromarray((c * 255 + 0.5).astype(np.uint8)), ((i % 3) * out, (i // 3) * out))
    os.makedirs(dst, exist_ok=True)
    path = os.path.join(dst, name + '.webp')
    sheet.save(path, 'WEBP', quality=90, alpha_quality=100, method=6)
    sh = shifts[0] if len(set(shifts)) == 1 else ' '.join(f'{x},{y}' for x, y in shifts)
    print(f'  wrote {os.path.relpath(path, ROOT)} {sheet.size} (shift {sh}{f", padded x{pad}" if pad != 1 else ""}) from {os.path.basename(src)}')
    return path


def index(dst=DST):
    os.makedirs(dst, exist_ok=True)
    art = {}
    for p in sorted(glob.glob(os.path.join(dst, '*.webp'))):
        name = os.path.basename(p)[:-5]
        if name not in NAMES:
            continue
        w, h = Image.open(p).size
        e = {'cell': w // 3, 'frames': 6, 'peak': 2, 'blend': 'source-over' if name in SOLID else 'lighter',
             'v': hashlib.sha1(open(p, 'rb').read()).hexdigest()[:8]}
        if name in LOOP: e['loop'] = True
        if name in TINT: e['tint'] = True
        if ALIGN.get(name) == 'core': e['scale'] = PAD
        art[name] = e
    with open(os.path.join(dst, 'index.js'), 'w') as fh:
        fh.write('/* Generated by tools/femc-fx.py: skill-effect sheets in assets/femc/battle/art/fx/<name>.webp\n'
                 '   (3 x 2 frames, peak = frame index of the impact, v = content hash for the cache). fx.js plays a sheet\n'
                 '   when its name is here and the image has loaded, and its code effect otherwise. */\n')
        fh.write('window.FEMC_FX_ART = ' + json.dumps(art, indent=1, sort_keys=True) + ';\n')
    print(f'  index: {len(art)} sheet(s){": " + ", ".join(art) if art else ""}')
    if os.path.abspath(dst) == os.path.abspath(DST):
        bump_pages(hashlib.sha1(json.dumps(art, sort_keys=True).encode()).hexdigest()[:8])
    return art


def bump_pages(v):
    """Point the pages' `art/fx/index.js?v=` at this index's hash, so a browser never keeps an old sheet list."""
    for page in ('femc-battle.html', 'femc-game.html'):
        path = os.path.join(ROOT, page)
        html = open(path).read()
        new = re.sub(r'(art/fx/index\.js\?v=)[0-9a-z]+', lambda m: m.group(1) + v, html)
        if new != html:
            open(path, 'w').write(new)
            print(f'  {page}: fx/index.js?v={v}')


def build_all(dst=DST):
    n = 0
    for name in NAMES:
        src = find_source(name)
        if src:
            build(src, name, dst); n += 1
            if os.path.dirname(src).endswith('New Adds'):
                print(f'    (source still in New Adds: move it to Added to Game/ and add it to tools/femc-new-adds.json when wired)')
    if not n:
        print('  no sheet sources found (<name>.png in New Adds/ or Added to Game/)')
    index(dst)


def check(out, names, dst=DST):
    files = [os.path.join(dst, n + '.webp') for n in names] if names else sorted(glob.glob(os.path.join(dst, '*.webp')))
    rows = []
    for f in files:
        im = Image.open(f).convert('RGBA')
        im.thumbnail((720, 480))
        row = Image.new('RGB', (im.width * 3 + 40, im.height + 20), (20, 20, 20))
        for j, c in enumerate([(0, 0, 0), (34, 16, 52), (255, 255, 255)]):
            tile = Image.new('RGBA', im.size, c + (255,))
            tile.alpha_composite(im)
            row.paste(tile.convert('RGB'), (10 + j * (im.width + 10), 10))
        rows.append(row)
    if not rows:
        raise SystemExit('no sheets to check')
    sheet = Image.new('RGB', (max(r.width for r in rows), sum(r.height for r in rows)), (20, 20, 20))
    y = 0
    for r in rows:
        sheet.paste(r, (0, y)); y += r.height
    sheet.save(out)
    print('  wrote', out)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    sub = ap.add_subparsers(dest='cmd', required=True)
    sub.add_parser('all')
    p = sub.add_parser('add'); p.add_argument('src'); p.add_argument('name')
    sub.add_parser('index')
    p = sub.add_parser('check'); p.add_argument('out'); p.add_argument('names', nargs='*')
    for s in sub.choices.values():
        s.add_argument('--dst', default=DST)
    a = ap.parse_args()
    if a.cmd == 'all': build_all(a.dst)
    elif a.cmd == 'add': build(a.src, a.name, a.dst); index(a.dst)
    elif a.cmd == 'index': index(a.dst)
    else: check(a.out, a.names, a.dst)


if __name__ == '__main__':
    main()
