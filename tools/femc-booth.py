"""The photo booth's art (FEMC-ART-TODO 15, purikura; game/booth.js). Sources are only read, never changed.

  python3 tools/femc-booth.py frames <booth-frames-N.png> <first number>
        A 2 x 2 sheet of upright 3:4 frames on flat green (#00ff00): the green outside AND the green window inside each frame
        are keyed out (tools/femc-greens.py key_outer_green: enclosed patches of the board's flat green go too), each frame is
        cut to its own box and set to exactly 600 x 800 -> assets/femc/game/art/booth/frame-<n>.webp, reading order from
        <first number> (booth-frames-1 -> 1..4, booth-frames-2 -> 5..8).
  python3 tools/femc-booth.py stamps <booth-stamps.png>
        3 x 3 green sheet -> booth/stamp-<1..9>.webp (200 px square, like the chat stickers); green left in enclosed holes goes too.
  python3 tools/femc-booth.py poses <booth-<who>-poses.png> <who>
        3 x 2 white sheet, waist up -> booth/<who>-<0..5>.webp, all six on one canvas with the bottom edge aligned
        (tools/femc-shadow-poses.py white path), so two people stand level in a shot.
        A sheet that already comes transparent (Kat cuts the background off herself) is split on its alpha instead
        (alpha_frames): rows part at the straight waist cut of the top row, columns at the emptiest line near the thirds,
        each figure keeps its own pieces, then the same one-canvas placement.
        --mirror N[,N]: flip those cells (0-5) left to right, e.g. a partner's half-heart (cell 1) drawn facing away from
        Solar, so the two halves meet in the middle.
  python3 tools/femc-booth.py scan
        Rewrites booth/index.js (window.FEMC_BOOTH_ART: frames, stamps, poses by person) from what's on disk; every command
        above runs it. booth.js uses Kat's art where it's listed and its drawn stand-ins everywhere else.
Sheets are looked up as given, then in Femc Mode Images/New Adds and Added to Game.
"""
import importlib.util, json, sys
from pathlib import Path
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'assets/femc/game/art/booth'
IMAGES = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images'


def tool(name, file):
    spec = importlib.util.spec_from_file_location(name, ROOT / 'tools' / file)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m


def find(p):
    for c in (Path(p), IMAGES / 'New Adds' / p, IMAGES / 'Added to Game' / p):
        if c.exists(): return c
    raise SystemExit('missing source: ' + p)


def frames(src, first):
    GR = tool('femc_greens', 'femc-greens.py')
    raw = np.asarray(Image.open(src).convert('RGB'))
    rgb, alpha = GR.key_outer_green(raw)
    # The frames have no green of their own (the prompt's palette), so green left in small holes (the lace) goes as well,
    # with its spill taken off.
    a = raw.astype(np.float32); green = a[..., 1] - np.maximum(a[..., 0], a[..., 2])
    alpha = np.minimum(alpha, (np.clip(1 - (green - 30) / 90, 0, 1) * 255)).astype(np.uint8)
    rgb = rgb.copy(); spill = green > 0; rgb[..., 1][spill] = np.minimum(a[..., 1], np.maximum(a[..., 0], a[..., 2]) + 6)[spill].astype(np.uint8)
    H, W = alpha.shape
    lab, n = ndi.label(ndi.binary_dilation(alpha > 40, iterations=3))
    sizes = ndi.sum(np.ones_like(lab), lab, range(1, n + 1))
    big = sorted([k + 1 for k in range(n) if sizes[k] > H * W * 0.02],
                 key=lambda k: (round(ndi.center_of_mass(lab == k)[0] / (H / 2) - 0.5), ndi.center_of_mass(lab == k)[1]))
    if len(big) != 4: raise SystemExit(f'{src.name}: expected 4 frames, found {len(big)}')
    OUT.mkdir(parents=True, exist_ok=True)
    for i, k in enumerate(big):
        ys, xs = np.nonzero(lab == k)
        box = (xs.min(), ys.min(), xs.max() + 1, ys.max() + 1)
        im = Image.fromarray(np.dstack([rgb, np.where(lab == k, alpha, 0)]).astype(np.uint8)).crop(box)
        im = im.resize((600, 800), Image.LANCZOS)
        name = f'frame-{first + i}'
        im.save(OUT / f'{name}.webp', 'WEBP', quality=90, method=6)
        print(f'  {name}: box {box} ({(box[2] - box[0]) / (box[3] - box[1]):.3f} wide:high) -> 600 x 800')


def alpha_frames(src, mirror=()):
    """Six RGBA figures from a transparent 3 x 2 sheet, on one canvas, bottom aligned (femc-shadow-poses place)."""
    SP = tool('femc_shadow_poses', 'femc-shadow-poses.py')
    a = np.asarray(Image.open(src).convert('RGBA')).astype(np.float32) / 255
    H, W = a.shape[:2]; m = a[..., 3] > 0.06
    # Row line per column third: the top row is cut straight at the waist, so its bottom is the sharpest drop in solid width.
    ycut = []
    for b in range(3):
        rs = (a[:, b * W // 3:(b + 1) * W // 3, 3] > 0.06).sum(1).astype(int)
        lo, hi = int(H * .42), int(H * .58)
        ycut.append(max(range(lo, hi), key=lambda y: rs[y - 1] - rs[y]))
    row = (np.arange(H)[:, None] >= np.asarray(ycut)[np.arange(W) * 3 // W][None, :]).astype(int)
    # Column lines per row: the emptiest column near each third.
    col = np.zeros((H, W), int)
    for r in range(2):
        band = (row == r)
        cs = (m & band).sum(0)
        xs = [min(range(int(W * k / 3) - W // 14, int(W * k / 3) + W // 14), key=lambda x: cs[x]) for k in (1, 2)]
        c = (np.arange(W)[None, :] >= xs[0]).astype(int) + (np.arange(W)[None, :] >= xs[1])
        col[band] = np.broadcast_to(c, (H, W))[band]
    cell = row * 3 + col
    lab, count = ndi.label(ndi.binary_dilation(m, iterations=2)); lab = lab * m
    piece = np.zeros_like(lab); n = 0
    for k, sl in enumerate(ndi.find_objects(lab), 1):
        if sl is None: continue
        mk = lab[sl] == k; counts = np.bincount(cell[sl][mk], minlength=6); total = counts.sum()
        if len([c for c in range(6) if counts[c] > max(4000, 0.12 * total)]) > 1:
            for c in range(6):
                if counts[c]: n += 1; piece[sl][mk & (cell[sl] == c)] = n
        else: n += 1; piece[sl][mk] = n
    ids = np.arange(1, n + 1); sizes = np.asarray(ndi.sum(m, piece, ids))
    home = [np.bincount(cell[piece == i], minlength=6).argmax() for i in ids]
    figs = []
    for c in range(6):
        cand = [i for i in range(n) if home[i] == c]
        if not cand: raise SystemExit(f'{src.name}: no figure in cell {c}')
        figs.append(max(cand, key=lambda i: sizes[i]))
    masks = []
    for c in range(6):
        own = np.isin(piece, [i + 1 for i in range(n) if home[i] == c and (i == figs[c] or sizes[i] >= 300)])
        masks.append(ndi.binary_dilation(own, iterations=2) & (cell == c) | own)
    alphas, arrays = [], []
    for c, mk in enumerate(masks):
        al, arr = a[..., 3] * mk, a.copy()
        if c in mirror: al, arr = al[:, ::-1].copy(), arr[:, ::-1].copy()
        alphas.append(al); arrays.append(arr)
    return SP.place(SP.theurgy_tool(), alphas, arrays)[0]


def scan():
    have = sorted(f.stem for f in OUT.glob('*.webp')) if OUT.exists() else []
    num = lambda pre: sorted(int(s[len(pre):]) for s in have if s.startswith(pre) and s[len(pre):].isdigit())
    poses = {}
    for s in have:
        who, _, i = s.rpartition('-')
        if who and not who.startswith(('frame', 'stamp')) and i.isdigit(): poses.setdefault(who, []).append(int(i))
    poses = {w: sorted(v) for w, v in poses.items() if sorted(v) == list(range(6))}
    data = {'frames': num('frame-'), 'stamps': num('stamp-'), 'poses': sorted(poses)}
    (OUT / 'index.js').write_text('/* Generated by tools/femc-booth.py scan: the photo booth art that exists (booth.js draws stand-ins for the rest). */\n'
                                  'window.FEMC_BOOTH_ART = ' + json.dumps(data) + ';\n')
    print('booth/index.js:', data)


def main(a):
    if not a or a[0] == 'scan': return scan()
    if a[0] == 'frames': frames(find(a[1]), int(a[2]))
    elif a[0] == 'stamps':
        GR = tool('femc_greens', 'femc-greens.py')
        GR.cut(str(find(a[1])), str(OUT.relative_to(ROOT)), 3, 3, [f'stamp-{i}' for i in range(1, 10)], 200, True)
        # Green caught inside a stamp (between the moon's bead strings) is not the outer board, so the cut keeps it: the stamps
        # have no green of their own, so take it out the way the frames' lace holes go.
        for i in range(1, 10):
            f = OUT / f'stamp-{i}.webp'; a_ = np.asarray(Image.open(f).convert('RGBA')).astype(np.float32)
            green = a_[..., 1] - np.maximum(a_[..., 0], a_[..., 2])
            a_[..., 3] = np.minimum(a_[..., 3], np.clip(1 - (green - 30) / 90, 0, 1) * 255)
            sp = green > 0; a_[..., 1][sp] = np.minimum(a_[..., 1], np.maximum(a_[..., 0], a_[..., 2]) + 6)[sp]
            Image.fromarray(a_.astype(np.uint8)).save(f, 'WEBP', quality=90, method=6)
    elif a[0] == 'poses':
        src = find(a[1]); mirror = ()
        if '--mirror' in a: mirror = tuple(int(x) for x in a[a.index('--mirror') + 1].split(','))
        if Image.open(src).mode == 'RGBA' and np.asarray(Image.open(src))[..., 3].min() < 10: fr = alpha_frames(src, mirror)
        else:
            SP = tool('femc_shadow_poses', 'femc-shadow-poses.py')
            fr, _ = SP.white_frames(src)
        OUT.mkdir(parents=True, exist_ok=True)
        for i, f in enumerate(fr): f.save(OUT / f'{a[2]}-{i}.webp', 'WEBP', quality=90, method=5)
        print(a[1], '->', a[2], fr[0].size)
    else: raise SystemExit(__doc__)
    scan()


if __name__ == '__main__':
    main(sys.argv[1:])
