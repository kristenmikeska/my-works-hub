"""Write assets/femc/portraits/place.js: where each portrait stands in a dialogue scene.

Inputs: the face centres measured for the placement review (mockups/solstice-ui/placements-data.js, SOLSTICE_FACES)
and Kat's nudges from that review (mockups/solstice-ui/placements-kat.json). Re-run after either changes:
    python3 tools/femc-placements.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK = os.path.join(ROOT, 'mockups', 'solstice-ui')
src = open(os.path.join(MOCK, 'placements-data.js')).read()
faces = json.loads(re.search(r'SOLSTICE_FACES\s*=\s*(\{.*?\});', src, re.S).group(1))
kat = json.load(open(os.path.join(MOCK, 'placements-kat.json')))

num = lambda v: ('%g' % round(v, 3))
rows = []
for pid in sorted(faces):
    cx = faces[pid][1]
    a = kat.get(pid, {})
    rows.append('  %s: [%s, %s, %s, %s, %d]' % (json.dumps(pid), num(cx), num(a.get('x', 0)), num(a.get('y', 0)), num(a.get('s', 1)), 1 if a.get('m') else 0))

out = os.path.join(ROOT, 'assets', 'femc', 'portraits', 'place.js')
with open(out, 'w') as f:
    f.write('/* Where each portrait stands in a dialogue scene (written by tools/femc-placements.py; edit the inputs, not this).\n'
            '   [cx, x, y, s, m]: cx = the face centre as a share of the picture\'s width; x, y = Kat\'s nudge in % of the screen\n'
            '   (y down); s = size on top of scale.js; m = 1 when the picture is drawn mirrored. From the placement review, Oct 31 2026. */\n'
            'window.FEMC_PORTRAIT_PLACE = {\n' + ',\n'.join(rows) + '\n};\n')
print('wrote', out, len(rows), 'portraits,', sum(1 for p in faces if p in kat), 'with nudges')
