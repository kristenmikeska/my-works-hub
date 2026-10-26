"""Theurgy art for FEMC battles: Kat's cut-ins, layered cut-ins and 3-panel strike sheets.
Sources are only read, never changed. Outputs go to assets/femc/battle/art/theurgy/ (or --dst).

  python3 tools/femc-theurgy.py cutin SRC.png SLUG
        A full-screen still -> SLUG.webp (1600x900, the source's framing kept).
  python3 tools/femc-theurgy.py layers CHAR.png PERSONA.png BG.png SLUG
        Separate pieces on white -> SLUG-bg.webp (opaque), SLUG-persona.webp, SLUG-char.webp (white keyed out).
        All three keep the full 16:9 canvas, so they line up the way the artist framed them.
  python3 tools/femc-theurgy.py sheet SHEET.png SLUG [--panels 3] [--max-h 1000]
        A sheet of N poses on white (wind-up, strike, follow-through) -> SLUG-0.webp .. SLUG-<N-1>.webp.
        Figures are found as connected pieces (a blade can cross into the next panel's column, so there is no fixed
        grid); stray bits (hair ends, sparks) join the nearest figure. Every frame gets the same canvas with the
        figure's mass centred and its lowest point on one baseline, so swapping frames never makes the body jump.
        Prints the data.js line to paste (theurgy.sheet).
  python3 tools/femc-theurgy.py all
        Rebuild every piece in BUILD below from New Adds/ or Added to Game/ (wherever each source is now).
  python3 tools/femc-theurgy.py check OUT.png FILE.webp [FILE.webp ...]
        Contact sheet of cut-outs on pink, purple and white, for checking edges by eye.

White removal (key()): macOS Vision's subject mask (tools/femc-lift.swift, via femc-artclean.load) keeps white
shirts, socks and blades solid, and an un-mix from white (alpha = how far a pixel is from white; colour divided back
out) gives clean anti-aliased edges and keeps glows (the Evoker's blue wind) see-through instead of pale blobs.
"""
import os, sys, json, argparse, importlib.util
import numpy as np
from PIL import Image
from scipy import ndimage

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DST = os.path.join(ROOT, 'assets/femc/battle/art/theurgy')
_spec = importlib.util.spec_from_file_location('femc_artclean', os.path.join(HERE, 'femc-artclean.py'))
AC = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(AC)


def save(im, path, q=88):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, 'WEBP', quality=q, method=6)
    print('  wrote', os.path.relpath(path, ROOT), im.size)


def vision_alpha(src):
    """Vision's subject mask as 0..1 (all subjects; several figures on one sheet are fine). None if it finds nothing."""
    im = AC.load(src)
    if not im.info.get('lifted'):
        return None
    return np.asarray(im.getchannel('A'), np.float32) / 255.0


def white_holes(minc, area=120, ring_max=0.62):
    """Vision fills the paper showing between hair strands, ribbons and wind swirls. Find flat pure-white patches
    that are ringed by darker art (hair, cloth, glow) and mark them as background (0..1, soft edge). White shirts and
    socks are left alone: their whites are shaded and ringed by light grey, so the ring test fails for them."""
    cand = ndimage.binary_opening(minc > 0.955, iterations=1)
    lab, n = ndimage.label(cand)
    hole = np.zeros(minc.shape, bool)
    if n:
        sizes = ndimage.sum(cand, lab, np.arange(1, n + 1))
        for i in np.nonzero(sizes >= area)[0] + 1:
            sl = ndimage.find_objects((lab == i).astype(int))[0]
            y0, y1 = max(0, sl[0].start - 6), sl[0].stop + 6
            x0, x1 = max(0, sl[1].start - 6), sl[1].stop + 6
            mm = lab[y0:y1, x0:x1] == i
            ring = ndimage.binary_dilation(mm, iterations=4) & ~mm
            if minc[y0:y1, x0:x1][ring].mean() < ring_max:
                hole[y0:y1, x0:x1] |= mm
    return ndimage.gaussian_filter(ndimage.binary_dilation(hole, iterations=1).astype(np.float32), 0.7)


# Per-source hole-punch settings. A white shirt ringed by a black jacket looks like a hair gap to white_holes, so
# Haechan's sheet skips it; Minji's long hair leaves gaps ringed by lighter strands, so her ring test is looser (her
# sheet has no blades, whose bright highlights a loose test would punch). Layers never use it.
HOLES = {'haechan-strikesheet.png': None, 'minji-strikesheet.png': 0.8}
# Vision can miss a small piece that's apart from the body (Junpei's cap flying off), which then only gets the un-mix
# alpha and shows through a little. For these sources, art that's clearly darker than the paper is made solid.
SOLID = {'junpei-strikesheet.png'}


# Strike sheets with long hair whose strand gaps key() leaves white: (dark-ring limit, ring saturation limit).
# Same rules as the fighter pose sheets (femc-shadow-poses.py STRANDS); red hair needs the saturation test off.
# Brown hair with bright highlights (Solar's strike sheets) rings its gaps lighter, so the limit is looser and the ring
# must be warm brown (third value: least mean red-minus-blue), which keeps the grey blade's highlights solid.
STRANDS = {'solar-strikesheet-1.png': (0.72, 1.0, 0.07), 'solar-strikesheet-2.png': (0.72, 1.0, 0.07),
           'minji-strikesheet.png': (0.68, 1.0), 'mitsuru-strikesheet.png': (0.55, 1.0),
           'solar-evoker-animation.png': (0.55, 0.25)}


def strands(src, a, ring_max=0.55, sat_max=0.25, warm_min=None):
    """Clear the hair gaps key() and white_holes leave (see STRANDS here and in femc-shadow-poses.py), in place.
    Pixels found take the un-mix alpha and colour (how far from white), so paper goes clear and strand edges stay soft."""
    rgb = np.asarray(Image.open(src).convert('RGB'), np.float32) / 255
    minc = rgb.min(2); sat = rgb.max(2) - minc
    # skin: warm, light and broad (a hand, a face); opening drops the thin warm highlights on brown hair
    skin = ndimage.binary_opening(((rgb[..., 0] - rgb[..., 2]) > 0.1) & (minc > 0.45), iterations=3)
    # open gaps: pale pixels joined to the background paper through pale pixels (a strand tip). The art they touch must
    # be dark hair, not a grey blade whose bright edge also runs out to the paper.
    lab, _ = ndimage.label(minc > 0.88)
    ext = np.isin(lab, np.unique(lab[(a[..., 3] < 0.05) & (minc > 0.88)])) & (lab > 0)
    hole = np.zeros(minc.shape, bool)
    warm = rgb[..., 0] - rgb[..., 2]

    def hairy(art, y0, y1, x0, x1, open_gap):
        v = minc[y0:y1, x0:x1][art]
        return (art.sum() > 0 and v.mean() < ring_max and np.percentile(sat[y0:y1, x0:x1][art], 90) < sat_max
                and (open_gap or warm_min is None or warm[y0:y1, x0:x1][art].mean() > warm_min))
    for open_gap in (True, False):
        # enclosed gaps also need to be wide enough (not white piping) and have no skin near (not cuffs or collars)
        cand = (a[..., 3] > 0.5) & (minc > 0.93) & (ext if open_gap else ~ext)
        l2, _ = ndimage.label(cand)
        for k, sl in enumerate(ndimage.find_objects(l2), 1):
            if sl is None:
                continue
            y0, y1 = max(0, sl[0].start - 12), sl[0].stop + 12
            x0, x1 = max(0, sl[1].start - 12), sl[1].stop + 12
            m = l2[y0:y1, x0:x1] == k
            ring = ndimage.binary_dilation(m, iterations=3) & ~m
            art = ring & (minc[y0:y1, x0:x1] < 0.88) & (a[y0:y1, x0:x1, 3] > 0.5)  # the art around it, past its pale edge
            if not open_gap and (skin[y0:y1, x0:x1][ndimage.binary_dilation(m, iterations=10)].sum() > 8
                                 or ndimage.distance_transform_edt(m).max() < 2.2):
                continue
            if hairy(art, y0, y1, x0, x1, open_gap):
                hole[y0:y1, x0:x1] |= m
    hole = ndimage.binary_dilation(hole, iterations=2) & (minc > 0.75)  # and their pale anti-aliased edge
    aw = np.clip((1.0 - minc - 0.02) / 0.98, 0, 1); aw[aw < 0.05] = 0
    unmixed = np.clip((rgb - (1 - aw[..., None])) / np.maximum(aw, 1e-3)[..., None], 0, 1)
    a[..., 3] = np.where(hole, np.minimum(a[..., 3], aw), a[..., 3])
    a[..., :3] = np.where(hole[..., None], unmixed, a[..., :3])
    return hole


def key(src, holes=True):
    """RGBA float array with the white background removed (see the module docstring)."""
    rgb = np.asarray(Image.open(src).convert('RGB'), np.float32) / 255.0
    minc = rgb.min(2)
    # Un-mix from white: the least opacity that explains the pixel over white, and the colour that would need.
    aw = np.clip((1.0 - minc - 0.02) / 0.98, 0, 1)
    aw[aw < 0.05] = 0
    safe = np.maximum(aw, 1e-3)[..., None]
    unmixed = np.clip((rgb - (1 - aw[..., None])) / safe, 0, 1)
    av = vision_alpha(src)
    if av is None or av.shape != aw.shape:
        av = np.zeros_like(aw)
    # Vision's edge is soft and still carries white: only trust it where it is fairly sure.
    av = np.clip((av - 0.35) / 0.5, 0, 1)
    ring = HOLES.get(os.path.basename(src), 0.62)
    if holes and ring:
        av = np.minimum(av, 1 - white_holes(minc, ring_max=ring))
    if os.path.basename(src) in SOLID:
        av = np.maximum(av, ndimage.binary_erosion(aw > 0.35, iterations=2).astype(np.float32))
    A = np.maximum(av, aw)
    col = np.where((aw >= av)[..., None], unmixed, rgb)
    a = np.dstack([col, A]).astype(np.float32)
    a = AC.despeckle(a)
    a = AC.defringe(a)
    return a


def to_img(a):
    out = AC.img(a)
    return Image.composite(out, Image.new('RGBA', out.size, (0, 0, 0, 0)), out.getchannel('A'))


def cutin(src, slug, dst):
    im = Image.open(src).convert('RGB').resize((1600, 900), Image.LANCZOS)
    save(im, os.path.join(dst, slug + '.webp'), q=86)


def layers(char, persona, bg, slug, dst):
    save(Image.open(bg).convert('RGB').resize((1600, 900), Image.LANCZOS), os.path.join(dst, slug + '-bg.webp'), q=84)
    for name, src in (('persona', persona), ('char', char)):
        im = to_img(AC.bleed(key(src, holes=False))).resize((1600, 900), Image.LANCZOS)
        save(im, os.path.join(dst, f'{slug}-{name}.webp'))


def figures(a, n):
    """Split a keyed sheet into n figures: label the art, take the n biggest pieces (left to right) as figures and give
    every other piece to the nearest figure box. Returns n boolean masks."""
    m = a[..., 3] > 0.06
    lab, count = ndimage.label(ndimage.binary_dilation(m, iterations=2))
    lab = lab * m
    ids = np.arange(1, count + 1)
    sizes = ndimage.sum(m, lab, ids)
    if count < n:
        raise SystemExit(f'found {count} pieces, expected at least {n} figures')
    big = sorted(ids[np.argsort(sizes)[::-1][:n]], key=lambda k: ndimage.center_of_mass(m, lab, k)[1])
    boxes = [ndimage.find_objects((lab == k).astype(int))[0] for k in big]
    owner = {k: i for i, k in enumerate(big)}
    centres = ndimage.center_of_mass(m, lab, ids)
    for k, (cy, cx) in zip(ids, centres):
        if k in owner or not sizes[k - 1]:
            continue
        owner[k] = int(np.argmin([np.hypot(max(b[1].start - cx, 0, cx - b[1].stop), max(b[0].start - cy, 0, cy - b[0].stop)) for b in boxes]))
    out = []
    for i in range(n):
        keep = [k for k, o in owner.items() if o == i]
        out.append(np.isin(lab, keep))
    return out


def sheet(src, slug, dst, panels=3, max_h=1000):
    a = key(src)
    if os.path.basename(src) in STRANDS:
        strands(src, a, *STRANDS[os.path.basename(src)])
    masks = figures(a, panels)
    H, W = a.shape[:2]
    info = []
    for mk in masks:
        ys, xs = np.nonzero(mk)
        w = a[..., 3] * mk
        cx = float((w.sum(0) * np.arange(W)).sum() / w.sum())   # mass centre: blades are thin, the body dominates
        info.append((xs.min(), xs.max() + 1, ys.min(), ys.max() + 1, cx))
    left = max(cx - x0 for x0, x1, y0, y1, cx in info)
    right = max(x1 - cx for x0, x1, y0, y1, cx in info)
    up = max(y1 - y0 for x0, x1, y0, y1, cx in info)  # tallest figure, measured from each one's own baseline
    cw, ch = int(np.ceil(left + right)) + 8, int(up) + 8
    k = min(1.0, max_h / ch)
    files = []
    for i, (mk, (x0, x1, y0, y1, cx)) in enumerate(zip(masks, info)):
        b = a.copy()
        b[..., 3] *= ndimage.binary_dilation(mk, iterations=2)
        piece = to_img(AC.bleed(b)).crop((x0, y0, x1, y1))
        canvas = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
        canvas.alpha_composite(piece, (int(round(4 + left - (cx - x0))), int(ch - 4 - (y1 - y0))))
        if k < 1:
            canvas = canvas.resize((round(cw * k), round(ch * k)), Image.LANCZOS)
        path = os.path.join(dst, f'{slug}-{i}.webp')
        save(canvas, path)
        files.append(os.path.relpath(path, ROOT))
    print('data.js: sheet: { frames: [' + ', '.join(f"TH + '{os.path.basename(f)}'" for f in files) + '] }')
    return files


def check(out, files):
    tiles = []
    for f in files:
        im = Image.open(f).convert('RGBA')
        im.thumbnail((420, 420))
        row = Image.new('RGBA', (im.width * 3 + 40, im.height + 20), (20, 20, 20, 255))
        for j, c in enumerate([(255, 79, 158), (34, 16, 52), (255, 255, 255)]):
            tile = Image.new('RGBA', im.size, c + (255,))
            tile.alpha_composite(im)
            row.paste(tile, (10 + j * (im.width + 10), 10))
        tiles.append(row)
    sheet_im = Image.new('RGBA', (max(t.width for t in tiles), sum(t.height for t in tiles)), (20, 20, 20, 255))
    y = 0
    for t in tiles:
        sheet_im.paste(t, (0, y)); y += t.height
    sheet_im.convert('RGB').save(out)
    print('  wrote', out)


IMAGES = os.path.expanduser('~/Documents/UniverseHub-Images/Femc Mode Images')
SUMMON = os.path.join(ROOT, 'assets/femc/battle/art/summon')
# What's in the game (2026-10-21). New pieces: add a line here, run `all` (or the single command), then the data.js entry.
BUILD = [
    ('cutin', 'theurgy-solar-haenim.png', 'solar-haenim'), ('cutin', 'theurgy-solar-sunna.png', 'solar-sunna'),
    ('cutin', 'theurgy-solar-harbor.png', 'solar-mazu'), ('cutin', 'theurgy-solar-nike.png', 'solar-nike'),
    ('cutin', 'theurgy-solar-haenimunveiled.png', 'solar-unveiled'),
    ('cutin', 'Haechan-Theurgy-1.png', 'haechan'), ('cutin', 'theurgy-jungwon.png', 'jungwon'),
    ('cutin', 'theurgy-jihoon.png', 'jihoon'), ('cutin', 'theurgy-minji.png', 'minji'),
    ('layers', ('Theurgy-Haechan-char.png', 'Theurgy-Haechan-persona.png', 'Theurgy-haechan-bg.png'), 'haechan'),
    ('sheet', 'haechan-strikesheet.png', 'haechan-strike'), ('sheet', 'jungwon-strikesheet.png', 'jungwon-strike'),
    ('sheet', 'jihoon-strikesheet.png', 'jihoon-strike'), ('sheet', 'minji-strikesheet.png', 'minji-strike'),
    ('sheet', 'solar-strikesheet-1.png', 'solar-strike-a'), ('sheet', 'solar-strikesheet-2.png', 'solar-strike-b'),
    ('evoker', 'solar-evoker-animation.png', 'solar-evoke'),
    # S.E.E.S. (2026-10-21): a cut-in and a strike sheet each.
    ('cutin', 'theurgy-akihiko.png', 'akihiko'), ('cutin', 'theurgy-yukari.png', 'yukari'),
    ('cutin', 'theurgy-junpei.png', 'junpei'), ('cutin', 'theurgy-mitsuru.png', 'mitsuru'),
    ('cutin', 'theurgy-aigis.png', 'aigis'), ('cutin', 'theurgy-ken.png', 'ken'),
    ('cutin', 'theurgy-koromaru.png', 'koromaru'), ('cutin', 'theurgy-shinjiro.png', 'shinjiro'),
    ('sheet', 'akihiko-strikesheet.png', 'akihiko-strike'), ('sheet', 'yukari-strikesheet.png', 'yukari-strike'),
    ('sheet', 'junpei-strikesheet.png', 'junpei-strike'), ('sheet', 'mitsuru-strikesheet.png', 'mitsuru-strike'),
    ('sheet', 'aigis-strikesheet.png', 'aigis-strike'), ('sheet', 'ken-strikesheet.png', 'ken-strike'),
    ('sheet', 'koromaru-strikesheet.png', 'koromaru-strike'), ('sheet', 'shinjiro-strikesheet.png', 'shinjiro-strike'),
    # Bond cut-in stills (bonds.js; 2026-10-21). `-love` is the romance version's own still.
    ('cutin', 'solar-akihiko-bond.png', 'bond-akihiko'), ('cutin', 'solar-jihoon-bond.png', 'bond-jihoon'),
    ('cutin', 'solar-minji-bond.png', 'bond-minji'),
    ('cutin', 'solar-haechan-bond.png', 'bond-haechan'), ('cutin', 'solar-haechan-bond-ver2.png', 'bond-haechan-love'),
    ('cutin', 'solar-jungwon-bond.png', 'bond-jungwon'), ('cutin', 'solar-jungwon-bond-ver2.png', 'bond-jungwon-love'),
    # Haechan's rank-9 bond still, and his rank-15 romance bond: a 5-beat sequence (bonds.js `sequence`; 2026-10-21).
    ('cutin', 'solar-haechan-bond-ver3.png', 'bond-haechan-2'),
    ('cutin', 'solar-haechan-pt1.png', 'bond-haechan-seq-1'), ('cutin', 'solar-haechan-pt2.png', 'bond-haechan-seq-2'),
    ('cutin', 'solar-haechan-pt3.png', 'bond-haechan-seq-3'), ('cutin', 'solar-haechan-pt4.png', 'bond-haechan-seq-4'),
    ('cutin', 'solar-haechan-pt5.png', 'bond-haechan-seq-5'),
    # Bond Showtimes (FEMC-ART-TODO 5A; batch 44, 2026-10-24): one 16:9 panel each (bonds.js `sequence`). Panel 1 keeps
    # the old still where the pair had one (bond-akihiko, bond-jungwon).
    ('cutin', 'Showtime-Solar-Akihiko/panel-02.png', 'bond-akihiko-show-2'),
    ('cutin', 'Showtime-Solar-Akihiko/panel-03.png', 'bond-akihiko-show-3'),
    ('cutin', 'Showtime-Solar-Akihiko/panel-04.png', 'bond-akihiko-show-4'),
    ('cutin', 'Showtime-Solar-Akihiko/panel-05.png', 'bond-akihiko-show-5'),
    ('cutin', 'Showtime-Solar-Shinjiro/showtime-01.png', 'bond-shinjiro-show-1'),
    ('cutin', 'Showtime-Solar-Shinjiro/showtime-02.png', 'bond-shinjiro-show-2'),
    ('cutin', 'Showtime-Solar-Shinjiro/showtime-03.png', 'bond-shinjiro-show-3'),
    ('cutin', 'Showtime-Solar-Shinjiro/showtime-04.png', 'bond-shinjiro-show-4'),
    ('cutin', 'showtime-solar-jungwon-1.png', 'bond-jungwon-show-2'),
    ('cutin', 'showtime-solar-jungwon-2.png', 'bond-jungwon-show-3'),
    ('cutin', 'showtime-solar-jungwon-3.png', 'bond-jungwon-show-4'),
    ('cutin', 'showtime-solar-jungwon-4.png', 'bond-jungwon-show-5'),
    # Haechan's romance Showtime (Corona): Kat's revised take on the five beats, ending in the kiss.
    ('cutin', 'Solar-Haechan-Bond-Stills/revised-sequence/01-solar-prepares.png', 'bond-haechan-love-show-1'),
    ('cutin', 'Solar-Haechan-Bond-Stills/revised-sequence/02-haechan-shields.png', 'bond-haechan-love-show-2'),
    ('cutin', 'Solar-Haechan-Bond-Stills/revised-sequence/03-knife-throw.png', 'bond-haechan-love-show-3'),
    ('cutin', 'Solar-Haechan-Bond-Stills/revised-sequence/04-turns-to-solar.png', 'bond-haechan-love-show-4'),
    ('cutin', 'Solar-Haechan-Bond-Stills/revised-sequence/05-kiss.png', 'bond-haechan-love-show-5'),
    # Akihiko's romance Showtime (Sunrise Cadenza, panels 1-4; Five A.M. adds 5): the dawn run turns into the combo (batch 47).
    ('cutin', 'akihiko-love-show-1.png', 'bond-akihiko-love-show-1'),
    ('cutin', 'akihiko-love-show-2.png', 'bond-akihiko-love-show-2'),
    ('cutin', 'akihiko-love-show-3.png', 'bond-akihiko-love-show-3'),
    ('cutin', 'akihiko-love-show-4.png', 'bond-akihiko-love-show-4'),
    ('cutin', 'akihiko-love-show-5.png', 'bond-akihiko-love-show-5'),
]


def source(name):
    for d in ('Added to Game', 'New Adds'):
        p = os.path.join(IMAGES, d, name)
        if os.path.exists(p):
            return p
    raise SystemExit('missing source: ' + name)


def build_all(dst):
    for kind, src, slug in BUILD:
        print(kind, slug)
        if kind == 'cutin': cutin(source(src), slug, dst)
        elif kind == 'layers': layers(*[source(s) for s in src], slug, dst)
        elif kind == 'sheet': sheet(source(src), slug, dst)
        else: sheet(source(src), slug, SUMMON, max_h=1100)


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    sub = ap.add_subparsers(dest='cmd', required=True)
    p = sub.add_parser('cutin'); p.add_argument('src'); p.add_argument('slug')
    p = sub.add_parser('layers'); p.add_argument('char'); p.add_argument('persona'); p.add_argument('bg'); p.add_argument('slug')
    p = sub.add_parser('sheet'); p.add_argument('src'); p.add_argument('slug'); p.add_argument('--panels', type=int, default=3); p.add_argument('--max-h', type=int, default=1000)
    sub.add_parser('all')
    p = sub.add_parser('check'); p.add_argument('out'); p.add_argument('files', nargs='+')
    for s in sub.choices.values():
        s.add_argument('--dst', default=DST)
    a = ap.parse_args()
    if a.cmd == 'cutin': cutin(a.src, a.slug, a.dst)
    elif a.cmd == 'layers': layers(a.char, a.persona, a.bg, a.slug, a.dst)
    elif a.cmd == 'sheet': sheet(a.src, a.slug, a.dst, a.panels, a.max_h)
    elif a.cmd == 'all': build_all(a.dst)
    else: check(a.out, a.files)


if __name__ == '__main__':
    main()
