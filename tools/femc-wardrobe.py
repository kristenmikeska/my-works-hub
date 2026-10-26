"""Wardrobe and capsule-series art (FEMC-ART-TODO section 8). Sources are only read, never changed.

  python3 tools/femc-wardrobe.py skin <sheet.png> <skin id> [fighter id, default solar]
        A 3 x 2 pose sheet on white (the fighters' format: idle, Evoker, attack, spell, hurt, victory), cut exactly like
        tools/femc-shadow-poses.py cuts fighters -> assets/femc/game/art/skins/<skin>/<who>-pose-0..5.webp.
  python3 tools/femc-wardrobe.py portraits <skin id> <who> <folder of face PNGs>
        Copies already-cut portrait PNGs (named <face>.png, e.g. from tools/femc-portraits.py) to
        assets/femc/game/art/skins/<skin>/portraits/<who>/<face>.webp.
  python3 tools/femc-wardrobe.py weapon <image.png> <skin id>
        A weapon skin on white -> assets/femc/game/art/skins/<skin>/weapon.webp (cut like the weapon cards).
  python3 tools/femc-wardrobe.py keys <sheet.png> <id1> ... <id6>
        A 3 x 2 green-screen keychain sheet (the batch 45 format), cut like tools/femc-keys.py ->
        assets/femc/game/art/keys/series/<id>.webp. Ids are gacha.js SERIES item ids, in reading order.
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


def scan():
    keys = sorted(f.stem for f in (ART / 'keys/series').glob('*.webp')) if (ART / 'keys/series').exists() else []
    skins, weapons = {}, []
    for d in sorted((ART / 'skins').glob('*/')) if (ART / 'skins').exists() else []:
        poses = sorted({f.name.split('-pose-')[0] for f in d.glob('*-pose-0.webp')
                        if all((d / f'{f.name.split("-pose-")[0]}-pose-{i}.webp').exists() for i in range(6))})
        ports = {w.name: sorted(f.stem for f in w.glob('*.webp')) for w in sorted((d / 'portraits').glob('*/'))} if (d / 'portraits').exists() else {}
        ports = {k: v for k, v in ports.items() if v}
        if poses or ports: skins[d.name] = {'poses': poses, 'portraits': ports}
        if (d / 'weapon.webp').exists(): weapons.append(d.name)
    head = (ART / 'ready.js').read_text().split('window.FEMC_ART_READY')[0]
    (ART / 'ready.js').write_text(head + 'window.FEMC_ART_READY = ' + json.dumps({'keys': keys, 'skins': skins, 'weapons': weapons}) + ';\n')
    print('ready.js:', len(keys), 'keychains,', len(skins), 'outfits,', len(weapons), 'weapons')


def main(a):
    if not a or a[0] == 'scan': return scan()
    cmd = a[0]
    if cmd == 'skin':
        src, skin, who = find(a[1]), a[2], (a[3] if len(a) > 3 else 'solar')
        SP = tool('femc_shadow_poses', 'femc-shadow-poses.py')
        frames, idle_h = SP.white_frames(src)
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
    elif cmd == 'keys':
        src, ids = find(a[1]), a[2:]
        if len(ids) != 6: raise SystemExit('six ids, in reading order')
        K = tool('femc_keys', 'femc-keys.py')
        K.DST = str(ART / 'keys/series')
        K.cut(str(src), ids, '')
    else:
        raise SystemExit(__doc__)
    scan()


if __name__ == '__main__':
    main(sys.argv[1:])
