#!/usr/bin/env python3
"""Builds data.js for the fitting-room mockup from the game's own cosmetics.js and art folders (read only)."""
import re, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
F = ROOT / 'assets/femc'
src = (F / 'game/cosmetics.js').read_text()
items = []
for m in re.finditer(r"c\('([a-z0-9-]+)', '(\w+)', '((?:[^'\\]|\\.)*)', '([A-Z]+)', '((?:[^'\\]|\\.)*)'(?:, (\{.*?\}))?\)", src):
    id_, kind, name, r, desc, more = m.groups()
    more = more or ''
    if 'retired' in src[m.start():src.find('\n', m.end())] or 'retired: true' in more: continue
    who = re.search(r"who: '(\w+)'", more)
    it = dict(id=id_, kind=kind, name=name.replace("\\'", "'"), r=r, desc=desc.replace("\\'", "'"), who=who.group(1) if who else 'solar')
    for k in ('filter', 'pal'):
        v = re.search(k + r": '([^']+)'", more)
        if v: it[k] = v.group(1)
    t = re.search(r"title: \['(#\w+)', '(#\w+)'\]", more)
    if t: it['title'] = list(t.groups())
    b = re.search(r"bg: BG\('([^']+)'\)", more)
    if b: it['bg'] = f'bg/{b.group(1)}.webp'
    b = re.search(r"bg: 'assets/femc/([^']+)'", more)
    if b: it['bg'] = b.group(1)
    cp = re.search(r"couple: '([\w-]+)'", more)
    if cp: it['couple'] = cp.group(1)
    if it['kind'] == 'skin':
        d = F / 'game/art/skins' / id_
        it['pose'] = (d / f"{it['who']}-pose-0.webp").exists()
        it['fx'] = (d / 'fx.webp').exists()
        hd = d / 'hd' / 'fig.json'
        if hd.exists():
            fig = json.loads(hd.read_text())
            it['hd'] = {p: dict(hx=v['hx'], ht=v['ht'], ar=v['ar']) for p, v in fig.items() if (d / 'hd' / f'{p}.webp').exists()}
        fd = d / 'portraits' / it['who']
        if fd.exists(): it['faces'] = sorted(p.stem for p in fd.glob('*.webp'))
    if it['kind'] == 'weapon':
        it['art'] = (F / 'game/art/skins' / id_ / 'weapon.webp').exists()
    items.append(it)
PAL = dict(re.findall(r"(\w+): (\['#\w+', '#\w+', '#\w+', '#\w+'\])", src[src.find('const PAL'):src.find('};', src.find('const PAL'))]))
PAL = {k: json.loads(v.replace("'", '"')) for k, v in PAL.items()}
menu = (F / 'game/menu.js').read_text()
own = {}
for who in sorted({i['who'] for i in items}):
    o = dict(faces=sorted(p.stem for p in (F / 'portraits' / who).glob('*.webp')), pose=(F / f'battle/art/poses/{who}-pose-0.webp').exists())
    if who == 'solar':
        o['hdDir'] = 'profile/solar-poses/'
        from PIL import Image
        o['hd'] = {}
        for p in sorted((F / 'profile/solar-poses').glob('*.webp')):
            im = Image.open(p); a = im.split()[-1]; bb = a.getbbox()
            # head centre ~ the column mass in the top 12% of the figure
            top = a.crop((0, bb[1], im.width, bb[1] + int(im.height * .1)))
            xs = [x for x in range(im.width) if top.crop((x, 0, x + 1, top.height)).getbbox()]
            o['hd'][p.stem] = dict(hx=round((sum(xs) / len(xs)) / im.width, 3) if xs else .5, ht=round(bb[1] / im.height, 3), ar=round(im.width / im.height, 3))
    lf = re.search(r"\b%s: \['([^']+)', ([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\]" % who, menu)
    if lf and who != 'solar':
        from PIL import Image
        f = F / lf.group(1); im = Image.open(f)
        # Full-body Social Link art: sharp enough for the booth when it's at least ~900 px tall and standing (not a wide action pose).
        if im.height >= 900 and float(lf.group(2)) < 1:
            o['fig'] = dict(src=lf.group(1), ar=float(lf.group(2)), ht=float(lf.group(3)), hx=float(lf.group(5)))
    o['booth'] = sorted(p.stem for p in (F / 'game/art/booth').glob(f'{who}-[0-9].webp'))
    own[who] = o
out = 'window.WD = ' + json.dumps(dict(items=items, own=own, pal=PAL), ensure_ascii=False) + ';\n'
(pathlib.Path(__file__).parent / 'data.js').write_text(out)
print(len(items), 'items;', {w: sum(1 for i in items if i['who'] == w and i['kind'] == 'skin') for w in own})
