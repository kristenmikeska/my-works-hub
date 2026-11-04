#!/usr/bin/env python3
"""data.js for the Boutique mockup: the game's real banners and items (cosmetics.js) plus which art exists. Read only."""
import re, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
F = ROOT / 'assets/femc'
src = (F / 'game/cosmetics.js').read_text()
items = {}
for m in re.finditer(r"c\('([a-z0-9-]+)', '(\w+)', '((?:[^'\\]|\\.)*)', '([A-Z]+)', '((?:[^'\\]|\\.)*)'(?:, (\{.*?\}))?\)", src):
    id_, kind, name, r, desc, more = m.groups(); more = more or ''
    if 'retired: true' in more: continue
    who = re.search(r"who: '(\w+)'", more)
    it = dict(id=id_, kind=kind, name=name, r=r, desc=desc, who=who.group(1) if who else 'solar')
    d = F / 'game/art/skins' / id_
    if kind == 'skin':
        it['pose'] = (d / f"{it['who']}-pose-0.webp").exists()
        if (d / 'hd/fig.json').exists():
            fig = json.loads((d / 'hd/fig.json').read_text())
            it['hd'] = {p: dict(hx=v['hx'], ht=v['ht'], ar=v['ar']) for p, v in fig.items() if (d / 'hd' / f'{p}.webp').exists()}
        fd = d / 'portraits' / it['who']
        if fd.exists(): it['faces'] = sorted(p.stem for p in fd.glob('*.webp'))
        it['fx'] = (d / 'fx.webp').exists()
    if kind == 'weapon': it['art'] = (d / 'weapon.webp').exists()
    f = re.search(r"filter: '([^']+)'", more)
    if f: it['filter'] = f.group(1)
    items[id_] = it
banners = []
for m in re.finditer(r"\{ id: '(\w+)', name: '((?:[^'\\]|\\.)*)'|\{ id: '(\w+)', name: \"([^\"]+)\"", src[src.find('const BANNERS'):src.find('];', src.find('const BANNERS'))]):
    pass
blk = src[src.find('const BANNERS'):src.find('\n  ];', src.find('const BANNERS'))]
for line in blk.splitlines():
    m = re.search(r"\{ id: '(\w+)', name: (['\"])(.+?)\2,(?: kind: '(\w+)',)? months: \[([\d, ]+)\], color: '(#\w+)', featured: \[([^\]]*)\]", line)
    if not m: continue
    feat = [x for x in re.findall(r"'([\w-]+)'", m.group(7)) if x in items]
    banners.append(dict(id=m.group(1), name=m.group(3), kind=m.group(4) or 'Main', months=[int(x) for x in m.group(5).split(',')], color=m.group(6), featured=feat))
used = {i for b in banners for i in b['featured']}
(pathlib.Path(__file__).parent / 'data.js').write_text('window.BQ = ' + json.dumps(dict(banners=banners, items={k: v for k, v in items.items() if k in used}), ensure_ascii=False) + ';\n')
print(len(banners), 'banners', [b['id'] for b in banners])
