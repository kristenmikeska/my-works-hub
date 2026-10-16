"""Normalizes Kat's FEMC portraits into the site and writes a manifest of who has what.

Portraits come from different sources, so the same character can be drawn at different sizes and
crops. For each character, every expression is matched to a reference (the neutral one) by sliding
and scaling its silhouette until the head and hair line up best, then everything is placed on one
shared canvas. Swapping expressions in a scene then never makes the character jump or change size.

Run: python3 tools/femc-portraits.py [name ...]   (no names = everyone; takes a minute or two)
Source: ~/Documents/UniverseHub-Images/Femc Mode Images/Character Portraits/<Name>/<Name>-<Emotion>[-N].png|webp
        (the name prefix is optional: plain <emotion>.png works too, e.g. Kiriko/smiling.png)
Output: assets/femc/portraits/<id>/<emotion>.webp and assets/femc/portraits/index.js
"""
import os, re, sys, json
from PIL import Image, ImageChops, ImageFilter, ImageStat

SRC = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images/Character Portraits')
DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets/femc/portraits')
EMO = {'mad': 'serious', 'angry': 'serious', 'embarrassed': 'flustered', 'smiling': 'happy', 'smile': 'happy'}
TARGET_H = 860      # height of the reference portrait on the canvas
WORK_H = 140        # matching happens on small silhouettes this tall
HEAD = 0.55         # only the top part of the reference (head and hair) is compared


def trimmed(path):
    im = Image.open(path).convert('RGBA')
    box = im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    return im.crop(box) if box else im


def mask(im, h):
    w = max(1, round(im.width * h / im.height))
    return im.getchannel('A').resize((w, h), Image.BILINEAR).point(lambda a: 255 if a > 100 else 0)


def count(m):
    return m.histogram()[255]


def body_bottom(im):
    """The lowest row where the figure is still wide (ignores a tie tip or a stray strand hanging lower)."""
    a = im.getchannel('A').point(lambda v: 255 if v > 128 else 0)
    widths = []
    for y in range(im.height):
        box = a.crop((0, y, im.width, y + 1)).getbbox()
        widths.append(box[2] - box[0] if box else 0)
    widest = max(widths) or 1
    rows = [y for y, w in enumerate(widths) if w >= widest * 0.4]
    return (rows[-1] + 1) if rows else im.height


def match(ref_m, cand, region):
    """Best (score, scale, dx, dy) placing cand's silhouette over the reference silhouette."""
    rw, rh = ref_m.size
    ref_region = ref_m.crop(region)
    ref_n = count(ref_region)
    best = (-1, 1, 0, 0)

    def score(scale, dx, dy):
        h = max(4, round(rh * scale))
        m = mask(cand, h)
        canvas = Image.new('L', (rw, rh), 0)
        canvas.paste(m, (dx, dy))
        c = canvas.crop(region)
        inter = count(ImageChops.multiply(c, ref_region))
        union = ref_n + count(c) - inter
        return inter / union if union else 0

    def search(scales, dxs, dys):
        nonlocal best
        for s in scales:
            # Center the candidate horizontally on the reference before shifting.
            w = round(cand.width * round(rh * s) / cand.height)
            base = (rw - w) // 2
            for dx in dxs:
                for dy in dys:
                    sc = score(s, base + dx, dy)
                    if sc > best[0]:
                        best = (sc, s, base + dx, dy)

    search([0.7 + 0.04 * i for i in range(17)], range(-24, 25, 6), range(-20, 21, 5))
    s0, x0, y0 = best[1], best[2], best[3]
    w0 = round(cand.width * round(rh * s0) / cand.height)
    base0 = (rw - w0) // 2
    search([s0 + 0.01 * i for i in range(-4, 5)], range(x0 - base0 - 5, x0 - base0 + 6), range(y0 - 5, y0 + 6))
    return best


def entries(folder):
    for f in sorted(os.listdir(folder)):
        stem, ext = os.path.splitext(f)
        if ext.lower() not in ('.png', '.webp', '.jpg', '.jpeg'):
            continue
        # "Aki-Mad-3", "Kiriko-Happy" or just "smiling": drop a leading name if there is one.
        parts = stem.lower().split('-')
        known = set(EMO) | {'neutral', 'happy', 'sad', 'surprised', 'blushing', 'serious', 'flustered'}
        if len(parts) > 1 and not any(x in known for x in re.split(r'[:/_]', parts[0])):
            parts = parts[1:]
        rest = '-'.join(parts)
        variant = ''
        m = re.match(r'(.+?)-(\d+)$', rest)
        if m:
            rest, variant = m.group(1), m.group(2)
        emotions = [EMO.get(x, x) for x in re.split(r'[:/_]', rest)]
        yield os.path.join(folder, f), [e + (f'-{variant}' if variant and variant != '1' else '') for e in emotions]


FINE_H = 300       # the second pass compares the actual drawing (eyes, face outline) at this height


def flat(im, h):
    """The drawing as blurred grayscale on mid-gray, h pixels tall."""
    w = max(1, round(im.width * h / im.height))
    bg = Image.new('RGBA', (w, h), (128, 128, 128, 255))
    bg.alpha_composite(im.resize((w, h), Image.BILINEAR))
    return bg.convert('L').filter(ImageFilter.GaussianBlur(1.5))


def refine(ref, cand, s0, x0, y0):
    """Silhouettes line up hair, which moves between expressions. Nudge scale and position until the
    faces themselves line up. Starts from the silhouette match (work pixels) and returns it in work pixels."""
    f = FINE_H / WORK_H
    ref_f = flat(ref, FINE_H)
    region = (0, 0, ref_f.width, round(FINE_H * HEAD))
    ref_r = ref_f.crop(region)
    best = (1e9, s0, x0 * f, y0 * f)

    def search(scales, xs, ys):
        nonlocal best
        for s in scales:
            c = flat(cand, round(FINE_H * s))
            for x in xs:
                for y in ys:
                    canvas = Image.new('L', ref_f.size, 128)
                    canvas.paste(c, (round(x), round(y)))
                    d = ImageStat.Stat(ImageChops.difference(canvas.crop(region), ref_r)).mean[0]
                    if d < best[0]:
                        best = (d, s, x, y)

    _, s1, x1, y1 = best
    search([s0 * (1 + 0.015 * i) for i in range(-6, 7)], [x1 + 3 * i for i in range(-5, 6)], [y1 + 3 * i for i in range(-5, 6)])
    _, s1, x1, y1 = best
    search([s1 * (1 + 0.005 * i) for i in range(-2, 3)], [x1 + i for i in range(-2, 3)], [y1 + i for i in range(-2, 3)])
    return best[1], best[2] / f, best[3] / f


def process(folder, cid):
    items = [(trimmed(p), names) for p, names in entries(folder)]
    if not items:
        return None
    ref_i = next((i for i, (_, n) in enumerate(items) if 'neutral' in n), 0)
    ref = items[ref_i][0]
    ref_m = mask(ref, WORK_H)
    region = (0, 0, ref_m.width, round(WORK_H * HEAD))
    k = TARGET_H / WORK_H           # work pixels -> output pixels
    placed = []
    for i, (im, names) in enumerate(items):
        if i == ref_i:
            sc, s, dx, dy = 1, 1, 0, 0
        else:
            sc, s, dx, dy = match(ref_m, im, region)
            s, dx, dy = refine(ref, im, s, dx, dy)
        h = round(TARGET_H * s)
        out = im.resize((round(im.width * h / im.height), h), Image.LANCZOS)
        placed.append((out, round(dx * k), round(dy * k), names, sc))
    x0 = min(x for _, x, _, _, _ in placed)
    y0 = min(y for _, _, y, _, _ in placed)
    W = max(x + im.width for im, x, _, _, _ in placed) - x0
    # Every expression must reach the bottom edge, or it floats in a scene: cut the shared canvas
    # at the highest place any expression's body ends.
    H = min(y + body_bottom(im) for im, _, y, _, _ in placed) - y0
    out_dir = os.path.join(DST, cid)
    os.makedirs(out_dir, exist_ok=True)
    for old in os.listdir(out_dir):
        os.remove(os.path.join(out_dir, old))
    have = []
    for im, x, y, names, sc in placed:
        canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        canvas.alpha_composite(im, (x - x0, y - y0))
        for name in names:
            canvas.save(os.path.join(out_dir, name + '.webp'), 'WEBP', quality=86, method=4)
            have.append(name)
        print(f'  {cid:12} {"/".join(names):18} match {sc:.2f}')
    return sorted(set(have))


manifest_path = os.path.join(DST, 'index.js')
manifest = {}
if os.path.exists(manifest_path):
    m = re.search(r'=\s*(\{.*\});', open(manifest_path).read(), re.S)
    if m:
        manifest = json.loads(m.group(1))
only = {a.lower() for a in sys.argv[1:]}
for folder in sorted(os.listdir(SRC)):
    path = os.path.join(SRC, folder)
    cid = folder.lower()
    if not os.path.isdir(path) or (only and cid not in only):
        continue
    have = process(path, cid)
    if have:
        manifest[cid] = have
with open(manifest_path, 'w') as fh:
    fh.write('/* Generated by tools/femc-portraits.py: which expressions exist for each character (assets/femc/portraits/<id>/<emotion>.webp). */\n')
    fh.write('window.FEMC_PORTRAITS = ' + json.dumps(manifest, indent=1) + ';\n')
