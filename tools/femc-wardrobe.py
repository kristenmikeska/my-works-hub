"""Wardrobe and capsule-series art (FEMC-ART-TODO section 8). Sources are only read, never changed.

  python3 tools/femc-wardrobe.py skin <sheet.png> <skin id> [fighter id, default solar]
        A 3 x 2 pose sheet on white (the fighters' format: idle, Evoker, attack, spell, hurt, victory), cut exactly like
        tools/femc-shadow-poses.py cuts fighters -> assets/femc/game/art/skins/<skin>/<who>-pose-0..5.webp. A sheet that
        already has a transparent background (Oct 31 2026) skips the white key and is split on its own alpha.
  python3 tools/femc-wardrobe.py skin2 <sheet.png> <skin id | own> [fighter id]
        FEMC-SKINS-BATTLE-DESIGN D (Nov 1 2026): a SECOND 3 x 2 pose sheet (support cast, guard, dodge, knocked down, badly
        hurt, dash-in), transparent (or white), cut onto sheet 1's exact canvas: same canvas size, the body mass on sheet 1's
        centre line, the lowest solid row on sheet 1's baseline, and scaled so the standing support pose (cell 1) matches
        sheet 1's standing cast pose (frame 3), so the figure never jumps between the two sheets. Writes
        <who>-pose2-0..5.webp next to sheet 1: battle/art/poses/ for `own` (the fighter's own look; the fighter defaults to
        solar), game/art/skins/<skin>/ for an outfit (scan lists it as the skin's `poses2`).
        `--alt` (Nov 1 2026, Alpha Phi's two versions) writes an ALTERNATE sheet 2 as <who>-pose2b-0..5.webp (scan: `poses2b`);
        battle.js flips a coin per fight between the two.
  python3 tools/femc-wardrobe.py portraits <skin id> <who> <folder of face PNGs>
        Copies already-cut portrait PNGs (named <face>.png, e.g. from tools/femc-portraits.py) to
        assets/femc/game/art/skins/<skin>/portraits/<who>/<face>.webp.
  python3 tools/femc-wardrobe.py weapon <image.png> <skin id>
        A weapon skin on white -> assets/femc/game/art/skins/<skin>/weapon.webp (cut like the weapon cards).
  python3 tools/femc-wardrobe.py keys <sheet.png> <id1> ... <id6>
        A 3 x 2 green-screen keychain sheet (the batch 45 format), cut like tools/femc-keys.py ->
        assets/femc/game/art/keys/series/<id>.webp. Ids are gacha.js SERIES item ids, in reading order.
  python3 tools/femc-wardrobe.py goods <sheet.png> <id1> ... <id6>
        The same green-screen sheet with capsule goods (sticker sheets, acrylic stands, mini plush, photo cards) ->
        assets/femc/game/art/goods/<id>.webp. Ids are gacha.js GOODS ids, in reading order.
  python3 tools/femc-wardrobe.py onemore <src.png> <skin id | own> [fighter id]
        FEMC-SKINS-BATTLE-DESIGN H: Kat's "One More!" eye strip (she draws them ~3:1, often with black or white letterbox
        bands): the flat bands are cut off, then the art is centre-cropped to 5:1 -> 1800 x 360 WebP at
        assets/femc/game/art/skins/<skin>/<who>-onemore.webp (`own` = the fighter's own look: game/art/onemore/<who>.webp).
        The fighter defaults to the look's `who` in cosmetics.js (solar for `own`).
  python3 tools/femc-wardrobe.py onemore2 <src.png> <skin id | own> [fighter id]
        The strip's second beat (Nov 1 2026, Kat's two-stage strip: v1 the sideways glance, v2 looking front with the sun in
        her eyes), cut the same way -> <who>-onemore-v2.webp (own: game/art/onemore/<who>-v2.webp). With both, the strip
        plays v1 then flashes to v2; with one, it plays alone. scan finds the two irises on every v2 (om_eyes) and lists them
        in ready.js as `eyes2` (x1, y1, x2, y2 in % of the strip) so the glints land on her eyes; cached by file hash in
        tools/femc-onemore-eyes.json (edit an entry's `eyes` there by hand to override; `null` = the fixed 40% / 65% spot).
  python3 tools/femc-wardrobe.py theurgy <src.png> <skin id> [fighter id]
        E: the look's own Theurgy cut-in (16:9, framing kept, like femc-theurgy.py cutin) -> skins/<skin>/<who>-theurgy.webp,
        1600 x 900. battle.js uses it in place of the fighter's cut-in while the look is worn.
  python3 tools/femc-wardrobe.py finish <src.png> <skin id> [fighter id]
        G: the look's All-Out finish card (16:9, like femc-cards.py finish) -> skins/<skin>/<who>-finish.webp, 1600 x 900.
  python3 tools/femc-wardrobe.py evoker <src.png> <skin id> [fighter id]
        M: the look's Evoker close-up for the summon cut-in (16:9 like art/summon/solar-evoker.webp, background kept)
        -> skins/<skin>/<who>-evoker.webp, 1600 x 900. Without it battle.js shows the look's pose-1 frame instead.
  python3 tools/femc-wardrobe.py entrance <src.png> <skin id | own> [fighter id]
        I: the 16:9 battle-start card -> 1600 x 900 at skins/<skin>/<who>-entrance.webp (own: game/art/entrance/<who>.webp).
  python3 tools/femc-wardrobe.py showtime <src.png> <set>
        J: a couple set's Showtime (16:9) -> game/art/couples/<set>-showtime.webp, 1600 x 900. <set> is the looks' `couple`
        field (cp-sunmoon, cp-drive, cp-afterhours, cp-moviedate, cp-ringside, cp-festival; `sunmoon` works too).
  python3 tools/femc-wardrobe.py frame <src.png> <theme>
        K: a theme's HUD card frame on flat green (#00ff00), keyed like tools/femc-greens.py -> game/art/frames/<theme>.webp
        (1000 x 400, the empty middle transparent). Themes: cosmetics.js THEMES.
  (A look's own effect sheet, skin-<id>-fx.png, is cut by tools/femc-fx.py skin <id> -> skins/<id>/fx.webp; scan lists it.)
  python3 tools/femc-wardrobe.py scan
        Rewrites assets/femc/game/art/ready.js from what's on disk (every command above runs it too). An outfit counts for
        a fighter once all six pose frames exist; the game picks it up with no other change (bump ready.js's ?v= in
        femc-game.html).
Sheets are looked up as given, then in Femc Mode Images/New Adds and Added to Game.
"""
import importlib.util, json, os, sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
ART = ROOT / 'assets/femc/game/art'
IMAGES = Path.home() / 'Documents/UniverseHub-Images/Femc Mode Images'


def tool(name, file):
    spec = importlib.util.spec_from_file_location(name, ROOT / 'tools' / file)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m


def find(p):
    for c in (Path(p), IMAGES / 'New Adds' / p, IMAGES / 'Added to Game' / p):
        if c.exists(): return c
    raise SystemExit('missing source: ' + p)


def stray_top(f):
    """Kat's outfit sheets sit tighter than the fighters' (sk-emo, 2026-10-25): the top of a bottom-row head can poke into
    the frame above it. A small detached piece lying wholly below the figure's feet is that, not the figure; it goes."""
    import numpy as np
    from scipy import ndimage
    px = np.array(f.convert('RGBA'))
    lab, n = ndimage.label(px[..., 3] > 8)
    if n < 2: return f
    sz = ndimage.sum(np.ones_like(lab), lab, range(1, n + 1))
    objs = ndimage.find_objects(lab)
    feet = objs[int(sz.argmax())][0].stop
    for k, sl in enumerate(objs):
        if sz[k] < sz.max() * 0.05 and sl[0].start >= feet:
            px[..., 3][lab == k + 1] = 0
    return Image.fromarray(px)


def transparent(src):
    """True for a sheet that already has a transparent background (Kat's Oct 31 2026 outfit sheets): over a fifth of it
    is clear. Opaque white sheets (every earlier outfit) don't pass and keep the white key."""
    import numpy as np
    im = Image.open(src)
    if 'A' not in im.getbands(): return False
    return float((np.asarray(im.getchannel('A')) < 8).mean()) > 0.2


def regroup(masks, a):
    """Two fixes to alpha_figures for weapons that reach across the cell line (sk-jungwon-heir, Oct 31 2026: a rapier tip
    resting on the next figure's coat). A run of bright, grey metal shared by two figures goes wholly to the one that holds
    most of it (where the touching pieces were parted, the neighbour had claimed the tip). A loose piece goes to the figure
    whose own art is nearest, pixel to pixel, not the nearest bounding box."""
    import numpy as np
    from scipy import ndimage
    art = a[..., 3] > 0.06
    rgb = a[..., :3]; mx, mn = rgb.max(2), rgb.min(2)
    metal = art & (mx > 0.45) & (mx - mn < 0.12)
    ml, mn_ = ndimage.label(metal, structure=np.ones((3, 3)))
    masks = [m.copy() for m in masks]
    for k, sl in enumerate(ndimage.find_objects(ml), 1):
        if sl is None: continue
        run = ml[sl] == k
        run = ndimage.binary_dilation(run, iterations=3) & art[sl] & (mx[sl] > 0.3)  # its soft edge and the faint tip
        counts = [int((m[sl] & run).sum()) for m in masks]
        if sum(c > 0 for c in counts) < 2: continue
        best = int(np.argmax(counts))
        for i, m in enumerate(masks):
            if i == best: m[sl] |= run
            else: m[sl] &= ~run
    lab, n = ndimage.label(ndimage.binary_dilation(art, iterations=2)); lab = lab * art
    sz = np.bincount(lab.ravel()); sz[0] = 0
    def body(m):
        ks = [k for k in np.unique(lab[m]) if k]
        return (lab == max(ks, key=lambda k: sz[k])) & m if ks else m
    main = [body(m) for m in masks]
    dist = [ndimage.distance_transform_edt(~mb) for mb in main]
    out = [m.copy() for m in masks]
    for k in range(1, n + 1):
        piece = lab == k
        if not sz[k] or any((piece & mb).any() for mb in main): continue
        best = int(np.argmin([d[piece].min() for d in dist]))
        for i in range(len(out)): out[i] &= ~piece
        out[best] |= piece
    return out


def alpha_frames(SP, src):
    """A transparent 3 x 2 pose sheet: no keying. Split into the six figures as the transparent Shadow sheets are
    (femc-shadow-poses.py alpha_figures: touching figures are parted between their solid bodies, specks join the nearest
    figure) and placed on one canvas like the white sheets (place: body mass centred, feet on one baseline)."""
    import numpy as np
    from scipy import ndimage
    a = np.asarray(Image.open(src).convert('RGBA'), np.float32) / 255
    a[..., 3] *= a[..., 3] > 0.03  # near-invisible haze around the figures
    masks = regroup(SP.alpha_figures(a, 3, 2), a)
    return SP.place(SP.theurgy_tool(), [a[..., 3] * ndimage.binary_dilation(mk, iterations=2) for mk in masks], [a] * 6)


def sheet2(src, skin, who):
    """Sheet 2 on sheet 1's canvas (see skin2 in the header). Returns the six frames and the scale used."""
    import numpy as np
    from scipy import ndimage
    SP = tool('femc_shadow_poses', 'femc-shadow-poses.py'); TH = SP.theurgy_tool()
    d = ROOT / 'assets/femc/battle/art/poses' if skin == 'own' else ART / 'skins' / skin
    if not (d / f'{who}-pose-0.webp').exists(): raise SystemExit(f'{d / who}-pose-0.webp: no sheet 1 to match')

    def body(al):  # the biggest solid piece, its lowest row (+1) and its weighted centre
        lab, _ = ndimage.label(al > 0.8); sz = np.bincount(lab.ravel()); sz[0] = 0; b = lab == sz.argmax()
        w = al * b; return np.nonzero(b.any(1))[0].max() + 1, float((w.sum(0) * np.arange(al.shape[1])).sum() / w.sum())

    def stand(al):  # the figure's height without thin things (a raised naginata): top of the opened body to its feet
        o = ndimage.binary_opening(al > 0.5, structure=np.ones((3, 3)), iterations=7)
        lab, _ = ndimage.label(o); sz = np.bincount(lab.ravel()); sz[0] = 0; ys = np.nonzero(lab == sz.argmax())[0]
        return ys.max() - ys.min()
    ref = [np.asarray(Image.open(d / f'{who}-pose-{i}.webp').convert('RGBA'), np.float32) / 255 for i in (0, 3)]
    CH, CW = ref[0].shape[:2]; base, cx0 = body(ref[0][..., 3])
    if transparent(src):
        a = np.asarray(Image.open(src).convert('RGBA'), np.float32) / 255
        a[..., 3] *= a[..., 3] > 0.03
        masks = regroup(SP.alpha_figures(a, 3, 2), a)
    else:
        a = TH.key(str(src), holes=True); masks = SP.grid_figures(a)
    alphas = [a[..., 3] * ndimage.binary_dilation(mk, iterations=2) for mk in masks]
    k = float(np.clip(stand(ref[1][..., 3]) / stand(alphas[0]), 0.8, 1.25))
    frames = []
    for al in alphas:
        b = a.copy(); b[..., 3] = al; b = TH.AC.bleed(b)
        ys, xs = np.nonzero(al > 0.02); y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
        im = TH.to_img(b[y0:y1, x0:x1])
        if abs(k - 1) > 0.005: im = im.resize((max(1, round(im.width * k)), max(1, round(im.height * k))), Image.LANCZOS)
        p = np.asarray(im, np.float32) / 255; by, cx = body(p[..., 3])
        canvas = Image.new('RGBA', (CW, CH))
        # Centre line and baseline as sheet 1; a figure wider than the canvas (a long dash) is nudged in, never shrunk.
        ox = int(round(cx0 - cx)); ox = max(min(ox, CW - im.width), 0) if im.width <= CW else (CW - im.width) // 2
        canvas.paste(im, (ox, int(round(base - by))), im)
        frames.append(canvas)
    return frames, k


def om_eyes(path):
    """The two irises on a v2 One More strip (Nov 1 2026, so the glints land on her eyes, not at a fixed 40% / 65%): a dark
    disc with white sclera on both sides and skin below, the best one in the middle band, then the best partner level with it
    18-40% of the width away. [x1, y1, x2, y2] in % of the strip (left eye first), or None when the partner is weak."""
    import numpy as np
    from scipy import ndimage
    a = np.asarray(Image.open(path).convert('RGB')).astype(float); H, W, _ = a.shape
    lum, sat = a.mean(2), a.max(2) - a.min(2)
    white = ((a.min(2) > 185) & (sat < 45)).astype(float)
    dark = ((lum < 140) & (lum > 15)).astype(float)
    skin = ((a[..., 0] > 200) & (a[..., 1] > 150) & (a[..., 2] > 110) & (sat > 30)).astype(float)
    def box(m, x0, x1, y0, y1):  # mean of m over the box [x0, x1) x [y0, y1) relative to each pixel
        f = ndimage.uniform_filter(m, size=(y1 - y0, x1 - x0), mode='constant')
        return np.roll(np.roll(f, -((y0 + y1) // 2), 0), -((x0 + x1) // 2), 1)
    sc = box(dark, -28, 28, -22, 22) * np.sqrt(box(white, -75, -38, -14, 14) * box(white, 38, 75, -14, 14) + 1e-6) * (0.3 + box(skin, -40, 40, 60, 110))
    sc[:, :int(W * .15)] = 0; sc[:, int(W * .85):] = 0; sc[:int(H * .2)] = 0; sc[int(H * .9):] = 0
    sc = ndimage.gaussian_filter(sc, 4)
    y1, x1 = np.unravel_index(np.argmax(sc), sc.shape)
    yy, xx = np.mgrid[0:H, 0:W]
    s2 = np.where((abs(yy - y1) < H * .15) & (abs(xx - x1) > W * .18) & (abs(xx - x1) < W * .40), sc, 0)
    y2, x2 = np.unravel_index(np.argmax(s2), s2.shape)
    if s2[y2, x2] < 0.25 * sc[y1, x1]: return None
    (ax, ay), (bx, by) = sorted([(x1, y1), (x2, y2)])
    return [round(100 * ax / W, 1), round(100 * ay / H, 1), round(100 * bx / W, 1), round(100 * by / H, 1)]


def eyes_of(paths):
    """om_eyes for each v2 strip, cached by sha256 in tools/femc-onemore-eyes.json (a hand-edited `eyes` survives while the
    file is unchanged)."""
    import hashlib
    cf = ROOT / 'tools/femc-onemore-eyes.json'
    cache = json.loads(cf.read_text()) if cf.exists() else {}
    out, new = {}, {k: v for k, v in cache.items() if (ROOT / k).exists()}  # entries for deleted strips drop out
    for p in paths:
        rel = str(p.relative_to(ROOT)); h = hashlib.sha256(p.read_bytes()).hexdigest()
        c = new.get(rel)
        if not c or c.get('sha256') != h: c = {'sha256': h, 'eyes': om_eyes(p)}
        new[rel] = c; out[p] = c['eyes']
    if new != cache: cf.write_text(json.dumps(new, indent=1, sort_keys=True) + '\n')
    return out


def hd_set(d):
    """A folder of HD poses (tools/femc-hd-poses.py): hd = pose names, hdv = content hash (?v=), hdfig = arms-crossed's menu metrics."""
    import hashlib
    fs = sorted(d.glob('*.webp'))
    if not fs: return {}
    h = hashlib.sha1(); [h.update(f.read_bytes()) for f in fs]
    out = {'hd': [f.stem for f in fs], 'hdv': h.hexdigest()[:8]}
    fig = json.loads((d / 'fig.json').read_text()) if (d / 'fig.json').exists() else {}
    if 'arms-crossed' in fig: out['hdfig'] = [fig['arms-crossed'][k] for k in ('ar', 'ht', 'hf', 'hx')]
    return out


def scan():
    keys = sorted(f.stem for f in (ART / 'keys/series').glob('*.webp')) if (ART / 'keys/series').exists() else []
    goods = sorted(f.stem for f in (ART / 'goods').glob('*.webp')) if (ART / 'goods').exists() else []
    skins, weapons = {}, []
    for d in sorted((ART / 'skins').glob('*/')) if (ART / 'skins').exists() else []:
        poses = sorted({f.name.split('-pose-')[0] for f in d.glob('*-pose-0.webp')
                        if all((d / f'{f.name.split("-pose-")[0]}-pose-{i}.webp').exists() for i in range(6))})
        ports = {w.name: sorted(f.stem for f in w.glob('*.webp')) for w in sorted((d / 'portraits').glob('*/'))} if (d / 'portraits').exists() else {}
        ports = {k: v for k, v in ports.items() if v}
        if poses or ports: skins[d.name] = {'poses': poses, 'portraits': ports}
        poses2 = sorted({f.name.split('-pose2-')[0] for f in d.glob('*-pose2-0.webp')
                         if all((d / f'{f.name.split("-pose2-")[0]}-pose2-{i}.webp').exists() for i in range(6))})
        if poses2 and d.name in skins: skins[d.name]['poses2'] = poses2  # D: a second pose sheet
        poses2b = sorted({f.name.split('-pose2b-')[0] for f in d.glob('*-pose2b-0.webp')
                          if all((d / f'{f.name.split("-pose2b-")[0]}-pose2b-{i}.webp').exists() for i in range(6))})
        if poses2b and 'poses2' in skins.get(d.name, {}): skins[d.name]['poses2b'] = poses2b  # an alternate sheet 2 (skin2 --alt)
        for k, suf in (('onemore', 'onemore'), ('onemore2', 'onemore-v2'), ('entrance', 'entrance'), ('theurgy', 'theurgy'), ('finish', 'finish'), ('evoker', 'evoker')):  # part 8 / E / G / M art, listed only when present
            got = sorted(f.name[:-len(f'-{suf}.webp')] for f in d.glob(f'*-{suf}.webp'))
            if got and d.name in skins: skins[d.name][k] = got
        if (d / 'fx.webp').exists() and d.name in skins:  # N: the look's own effect sheet (tools/femc-fx.py skin); value = content hash for the cache
            import hashlib; skins[d.name]['fx'] = hashlib.sha1((d / 'fx.webp').read_bytes()).hexdigest()[:8]
        if 'onemore2' in skins.get(d.name, {}):  # where her eyes are on each v2 strip (om_eyes), for the glints
            ey = eyes_of([d / f'{w}-onemore-v2.webp' for w in skins[d.name]['onemore2']])
            e2 = {w: ey[d / f'{w}-onemore-v2.webp'] for w in skins[d.name]['onemore2'] if ey[d / f'{w}-onemore-v2.webp']}
            if e2: skins[d.name]['eyes2'] = e2
        if (d / 'hd').exists() and d.name in skins: skins[d.name].update(hd_set(d / 'hd'))  # Solar's HD single-figure poses (tools/femc-hd-poses.py)
        if (d / 'weapon.webp').exists(): weapons.append(d.name)
    stems = lambda sub, cut='': sorted(f.stem[:len(f.stem) - len(cut)] if cut else f.stem for f in (ART / sub).glob(f'*{cut}.webp')) if (ART / sub).exists() else []
    own = {k: stems(k) for k in ('onemore', 'entrance')}
    own['onemore2'] = sorted(w[:-3] for w in own['onemore'] if w.endswith('-v2'))  # the strip's second beat, <who>-v2.webp
    own['onemore'] = [w for w in own['onemore'] if not w.endswith('-v2')]
    ey = eyes_of([ART / 'onemore' / f'{w}-v2.webp' for w in own['onemore2']])
    own['eyes2'] = {w: ey[ART / 'onemore' / f'{w}-v2.webp'] for w in own['onemore2'] if ey[ART / 'onemore' / f'{w}-v2.webp']}
    P = ROOT / 'assets/femc/battle/art/poses'  # D: fighters' own second sheets (battle.js reads own.poses2)
    own['poses2'] = sorted(f.name[:-len('-pose2-0.webp')] for f in P.glob('*-pose2-0.webp') if all((P / f.name.replace('-pose2-0', f'-pose2-{i}')).exists() for i in range(6)))
    own.update(hd_set(ROOT / 'assets/femc/profile/solar-poses'))  # her own look's 18 evening poses: hd / hdv / hdfig
    FXD = ROOT / 'assets/femc/battle/art/fx'  # Kat's theme effect sheets (tools/femc-fx.py), for the Wardrobe's Try it on
    themes = sorted(f.stem[len('theme-'):] for f in FXD.glob('theme-*.webp'))
    data = {'keys': keys, 'goods': goods, 'skins': skins, 'weapons': weapons, 'own': own, 'couples': stems('couples', '-showtime'), 'frames': stems('frames'), 'themes': themes,
            # The Boutique (Nov 4 2026): banner pictures game/art/banners/<banner id>.webp (FEMC-ART-TODO 28) and card art
            # game/art/cards/<name>.webp: card-back, frame-R / -SR / -UR, art-<item id> (FEMC-ART-TODO 29). cosmetics.js uses them when listed.
            'banners': stems('banners'), 'cards': stems('cards')}
    head = (ART / 'ready.js').read_text().split('window.FEMC_ART_READY')[0]
    (ART / 'ready.js').write_text(head + 'window.FEMC_ART_READY = ' + json.dumps(data) + ';\n')
    print('ready.js:', len(keys), 'keychains,', len(goods), 'goods,', len(skins), 'outfits,', len(weapons), 'weapons,',
          sum(len(v) for k, v in own.items() if k not in ('poses2', 'eyes2')), 'own-look strips/cards,', len(own['poses2']), 'own sheet 2s,', len(data['couples']), 'showtimes,', len(data['frames']), 'frames')


def look_who(skin):
    """The fighter a look belongs to, read from cosmetics.js (`c('<id>', 'skin', ..., { who: '<who>'`)."""
    import re
    m = re.search(r"c\('%s', 'skin',[^\n]*?who: '([a-z]+)'" % re.escape(skin), (ROOT / 'assets/femc/game/cosmetics.js').read_text())
    if not m: raise SystemExit(f'no outfit {skin!r} in cosmetics.js')
    return m.group(1)


def fit(src, w, h):
    """Centre-crop to w:h and scale to w x h (RGB kept opaque; alpha kept if the source has it)."""
    im = src if isinstance(src, Image.Image) else Image.open(src); im = im.convert('RGBA' if 'A' in im.getbands() else 'RGB')
    W, H = im.size; r = w / h
    box = (round((W - H * r) / 2), 0, round((W + H * r) / 2), H) if W / H > r else (0, round((H - W / r) / 2), W, round((H + W / r) / 2))
    return im.crop(box).resize((w, h), Image.LANCZOS)


def unband(src):
    """The source without flat letterbox bands (rows that are one even black or white across the whole width) at the top
    and bottom: Kat's 3:1 One More strips often come with them, and a centre crop would otherwise land on a band."""
    import numpy as np
    im = Image.open(src).convert('RGB'); a = np.asarray(im, np.int16)
    flat = (a.std(axis=(1, 2)) < 6) & ((a.mean(axis=(1, 2)) < 28) | (a.mean(axis=(1, 2)) > 236))
    t = 0
    while t < len(flat) and flat[t]: t += 1
    b = len(flat)
    while b > t and flat[b - 1]: b -= 1
    if b - t < im.height // 4: return im  # (an all-flat picture: leave it)
    return im.crop((0, t, im.width, b))


def part8(cmd, a):
    src = find(a[1])
    if cmd in ('onemore', 'onemore2', 'entrance', 'theurgy', 'finish', 'evoker'):
        skin = a[2]; who = a[3] if len(a) > 3 else ('solar' if skin == 'own' else look_who(skin))
        size = (1800, 360) if cmd.startswith('onemore') else (1600, 900)  # 5:1 keeps the eyes clear of the edges (Nov 1 2026)
        if skin == 'own' and cmd in ('theurgy', 'finish', 'evoker'): raise SystemExit(f'{cmd}: a fighter\'s own look uses tools/femc-theurgy.py / femc-cards.py')
        name = {'onemore2': 'onemore-v2'}.get(cmd, cmd)
        out = (ART / 'onemore' / f'{who}-v2.webp' if cmd == 'onemore2' else ART / cmd / f'{who}.webp') if skin == 'own' else ART / 'skins' / skin / f'{who}-{name}.webp'
        if skin != 'own' and not (ART / 'skins' / skin).exists(): raise SystemExit(f'{skin}: no pose frames yet (cut the look first)')
        im = fit(unband(src) if cmd.startswith('onemore') else src, *size)
    elif cmd == 'showtime':
        st = a[2] if a[2].startswith('cp-') else 'cp-' + a[2]
        out, im = ART / 'couples' / f'{st}-showtime.webp', fit(src, 1600, 900)
    else:  # frame
        import numpy as np
        out = ART / 'frames' / f'{a[2]}.webp'
        raw = Image.open(src)
        # A frame that already came transparent (Nov 1: the prompts ask for it) is used as is; green still gets keyed.
        if raw.mode in ('RGBA', 'LA', 'P') and raw.convert('RGBA').getchannel('A').getextrema()[0] < 250:
            im = fit(src, 1000, 400).convert('RGBA')
        else:
            GR = tool('femc_greens', 'femc-greens.py')
            rgb, alpha = GR.key_outer_green(np.asarray(fit(src, 1000, 400).convert('RGB')))
            im = Image.fromarray(np.dstack([rgb, alpha]), 'RGBA')
    out.parent.mkdir(parents=True, exist_ok=True)
    if cmd in ('theurgy', 'finish', 'evoker'): im = im.convert('RGB')  # full-frame pictures keep their backgrounds
    im.save(out, 'WEBP', quality=86 if cmd in ('theurgy', 'finish', 'evoker') else 90, method=5)
    print(src.name, '->', out.relative_to(ROOT), im.size)


def main(a):
    if not a or a[0] == 'scan': return scan()
    cmd = a[0]
    if cmd == 'skin':
        src, skin, who = find(a[1]), a[2], (a[3] if len(a) > 3 else 'solar')
        SP = tool('femc_shadow_poses', 'femc-shadow-poses.py')
        frames, idle_h = alpha_frames(SP, src) if transparent(src) else SP.white_frames(src)
        out = ART / 'skins' / skin; out.mkdir(parents=True, exist_ok=True)
        frames = [stray_top(f) for f in frames]
        for i, f in enumerate(frames): f.save(out / f'{who}-pose-{i}.webp', 'WEBP', quality=90, method=5)
        print(src.name, '->', skin, who, frames[0].size, 'idle', idle_h)
    elif cmd == 'skin2':
        alt = '--alt' in a; a = [x for x in a if x != '--alt']
        src, skin = find(a[1]), a[2]; who = a[3] if len(a) > 3 else ('solar' if skin == 'own' else look_who(skin))
        frames, k = sheet2(src, skin, who)
        out = ROOT / 'assets/femc/battle/art/poses' if skin == 'own' else ART / 'skins' / skin
        for i, f in enumerate(frames): f.save(out / f'{who}-pose2{"b" if alt else ""}-{i}.webp', 'WEBP', quality=90, method=5)
        print(src.name, '->', skin, who, 'sheet 2' + (' (alternate)' if alt else ''), frames[0].size, 'scale', round(k, 3))
    elif cmd == 'portraits':
        skin, who, folder = a[1], a[2], Path(a[3])
        out = ART / 'skins' / skin / 'portraits' / who; out.mkdir(parents=True, exist_ok=True)
        for f in sorted(folder.glob('*.png')):
            Image.open(f).convert('RGBA').save(out / (f.stem.lower() + '.webp'), 'WEBP', quality=90, method=5); print(' ', f.stem)
    elif cmd == 'weapon':
        src, skin = find(a[1]), a[2]
        TH = tool('femc_theurgy', 'femc-theurgy.py')
        rgba = TH.to_img(TH.key(str(src), holes=False))
        out = ART / 'skins' / skin; out.mkdir(parents=True, exist_ok=True)
        rgba.crop(rgba.getbbox()).save(out / 'weapon.webp', 'WEBP', quality=90, method=5)
        print(src.name, '->', skin, 'weapon')
    elif cmd in ('onemore', 'onemore2', 'entrance', 'theurgy', 'finish', 'evoker', 'showtime', 'frame'):
        if len(a) < 3: raise SystemExit(__doc__)
        part8(cmd, a)
    elif cmd in ('keys', 'goods'):
        src, ids = find(a[1]), a[2:]
        if len(ids) != 6: raise SystemExit('six ids, in reading order')
        K = tool('femc_keys', 'femc-keys.py')
        K.DST = str(ART / ('keys/series' if cmd == 'keys' else 'goods'))
        os.makedirs(K.DST, exist_ok=True)
        K.cut(str(src), ids, '')
    else:
        raise SystemExit(__doc__)
    scan()


if __name__ == '__main__':
    main(sys.argv[1:])
