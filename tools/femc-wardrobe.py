"""Wardrobe and capsule-series art (FEMC-ART-TODO section 8). Sources are only read, never changed.

  python3 tools/femc-wardrobe.py skin <sheet.png> <skin id> [fighter id, default solar]
        A 3 x 2 pose sheet on white (the fighters' format: idle, Evoker, attack, spell, hurt, victory), cut exactly like
        tools/femc-shadow-poses.py cuts fighters -> assets/femc/game/art/skins/<skin>/<who>-pose-0..5.webp. A sheet that
        already has a transparent background (Oct 31 2026) skips the white key and is split on its own alpha.
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
        FEMC-SKINS-BATTLE-DESIGN H: Kat's 6:1 "One More!" eye strip, centre-cropped to 6:1 -> 1800 x 300 WebP at
        assets/femc/game/art/skins/<skin>/<who>-onemore.webp (`own` = the fighter's own look: game/art/onemore/<who>.webp).
        The fighter defaults to the look's `who` in cosmetics.js (solar for `own`).
  python3 tools/femc-wardrobe.py entrance <src.png> <skin id | own> [fighter id]
        I: the 16:9 battle-start card -> 1600 x 900 at skins/<skin>/<who>-entrance.webp (own: game/art/entrance/<who>.webp).
  python3 tools/femc-wardrobe.py showtime <src.png> <set>
        J: a couple set's Showtime (16:9) -> game/art/couples/<set>-showtime.webp, 1600 x 900. <set> is the looks' `couple`
        field (cp-sunmoon, cp-drive, cp-afterhours, cp-moviedate, cp-ringside, cp-festival; `sunmoon` works too).
  python3 tools/femc-wardrobe.py frame <src.png> <theme>
        K: a theme's HUD card frame on flat green (#00ff00), keyed like tools/femc-greens.py -> game/art/frames/<theme>.webp
        (1000 x 400, the empty middle transparent). Themes: cosmetics.js THEMES.
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
        for k in ('onemore', 'entrance'):  # part 8 art, listed only when present
            got = sorted(f.name[:-len(f'-{k}.webp')] for f in d.glob(f'*-{k}.webp'))
            if got and d.name in skins: skins[d.name][k] = got
        if (d / 'weapon.webp').exists(): weapons.append(d.name)
    stems = lambda sub, cut='': sorted(f.stem[:len(f.stem) - len(cut)] if cut else f.stem for f in (ART / sub).glob(f'*{cut}.webp')) if (ART / sub).exists() else []
    own = {k: stems(k) for k in ('onemore', 'entrance')}
    data = {'keys': keys, 'goods': goods, 'skins': skins, 'weapons': weapons, 'own': own, 'couples': stems('couples', '-showtime'), 'frames': stems('frames')}
    head = (ART / 'ready.js').read_text().split('window.FEMC_ART_READY')[0]
    (ART / 'ready.js').write_text(head + 'window.FEMC_ART_READY = ' + json.dumps(data) + ';\n')
    print('ready.js:', len(keys), 'keychains,', len(goods), 'goods,', len(skins), 'outfits,', len(weapons), 'weapons,',
          sum(map(len, own.values())), 'own-look strips/cards,', len(data['couples']), 'showtimes,', len(data['frames']), 'frames')


def look_who(skin):
    """The fighter a look belongs to, read from cosmetics.js (`c('<id>', 'skin', ..., { who: '<who>'`)."""
    import re
    m = re.search(r"c\('%s', 'skin',[^\n]*?who: '([a-z]+)'" % re.escape(skin), (ROOT / 'assets/femc/game/cosmetics.js').read_text())
    if not m: raise SystemExit(f'no outfit {skin!r} in cosmetics.js')
    return m.group(1)


def fit(src, w, h):
    """Centre-crop to w:h and scale to w x h (RGB kept opaque; alpha kept if the source has it)."""
    im = Image.open(src); im = im.convert('RGBA' if 'A' in im.getbands() else 'RGB')
    W, H = im.size; r = w / h
    box = (round((W - H * r) / 2), 0, round((W + H * r) / 2), H) if W / H > r else (0, round((H - W / r) / 2), W, round((H + W / r) / 2))
    return im.crop(box).resize((w, h), Image.LANCZOS)


def part8(cmd, a):
    src = find(a[1])
    if cmd in ('onemore', 'entrance'):
        skin = a[2]; who = a[3] if len(a) > 3 else ('solar' if skin == 'own' else look_who(skin))
        size = (1800, 300) if cmd == 'onemore' else (1600, 900)
        out = ART / cmd / f'{who}.webp' if skin == 'own' else ART / 'skins' / skin / f'{who}-{cmd}.webp'
        if skin != 'own' and not (ART / 'skins' / skin).exists(): raise SystemExit(f'{skin}: no pose frames yet (cut the look first)')
        im = fit(src, *size)
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
    im.save(out, 'WEBP', quality=90, method=5)
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
    elif cmd in ('onemore', 'entrance', 'showtime', 'frame'):
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
