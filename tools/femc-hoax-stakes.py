"""HOAX epilogue stakes check (Nov 11 2026; data/epi/hoax/stakes.js documents the scores). No browser: jsc loads the
HOAX world files, then this script checks
  1. every flag on R.stakes.heat / .trust / .sus is set somewhere in the world (a choice's flag or a { flag } line);
  2. R.stakesVerdict sets exactly one of epi-h-out-turns / -split / -falls for every heat x trust (x lies, the Jihoon
     thread's score, Nov 11 2026) count;
  3. on each route (jungwon, jihoon, council) every verdict is reachable: the choice blocks are walked by route
     (event flag gates, ifEpiRoute branches, hangout route / noRoute), each block is one pick (or skipped, since hangouts,
     mingle rooms and conditional beats can be missed), and the reachable (heat, trust) pairs are collected;
  4. every flag the outcomes read (epi-h-out-*, epi-h-mom-hearing, epi-h-party-backed-*, ...) is set somewhere.
Usage: python3 tools/femc-hoax-stakes.py"""
import json, pathlib, subprocess, sys, tempfile
ROOT = pathlib.Path(__file__).resolve().parent.parent / 'assets/femc/game/data/epi/hoax'
JSC = '/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc'
files = sorted(ROOT.glob('*.js'), key=lambda p: (0 if p.name == 'calendar.js' else 1, p.name))
js = 'var window=this;\n' + ''.join(f'try{{load({json.dumps(str(f))});}}catch(e){{print("LOADERR {f.name}: "+e)}}\n' for f in files)
js += 'print("JSON:"+JSON.stringify(window.FEMC_EPI_WORLDS.hoax));'
t = tempfile.NamedTemporaryFile('w', suffix='.js', delete=False); t.write(js); t.close()
out = subprocess.run([JSC, t.name], capture_output=True, text=True).stdout.splitlines()
errs = [l for l in out if l.startswith('LOADERR')]
if errs: print('\n'.join(errs)); sys.exit(1)
R = json.loads(next(l for l in out if l.startswith('JSON:'))[5:])
ST = R['stakes']; fails = []
ROUTES = ['jungwon', 'jihoon', 'council']

def flags_of(v):
    if isinstance(v, str): return [v]
    if isinstance(v, list): return [x for x in v if isinstance(x, str)]
    if isinstance(v, dict): return [k for k, x in v.items() if x]
    return []

# Every scene with its route gate.
scenes = []
for e in R['events']:
    g = e.get('flag')
    r = [g[len('epi-route-'):]] if isinstance(g, str) and g.startswith('epi-route-') else ROUTES
    scenes.append((e['id'], r, e['scene']))
for e in R['routines']:
    fl = [f for f in (e.get('flags') or []) if f.startswith('epi-route-')]
    scenes.append((e['id'], [f[len('epi-route-'):] for f in fl] or ROUTES, e['scene']))
for b in R['bonds'].values():
    for h in b['hangouts']:
        r = ROUTES
        if h.get('route'): r = [x for x in ROUTES if x in ([h['route']] if isinstance(h['route'], str) else h['route'])]
        if h.get('noRoute'): r = [x for x in r if x not in ([h['noRoute']] if isinstance(h['noRoute'], str) else h['noRoute'])]
        scenes.append((h['id'], r, h['scene']))

set_anywhere = set()
groups = {r: [] for r in ROUTES}  # per route: list of choice blocks, each a list of option flag-sets
def walk(lines, route, sid):
    for l in lines or []:
        if not isinstance(l, dict): continue
        set_anywhere.update(flags_of(l.get('flag')))
        if l.get('ifEpiRoute'):
            want = [l['ifEpiRoute']] if isinstance(l['ifEpiRoute'], str) else l['ifEpiRoute']
            if route in want: walk(l.get('then'), route, sid)
            else: walk(l.get('else'), route, sid)
            continue
        if 'choose' in l:
            opts = []
            for o in l['choose']:
                f = set(flags_of(o.get('flag')))
                set_anywhere.update(f)
                acc = set()
                def collect(xs):  # flags set inside the option's own lines count for that pick
                    for x in xs or []:
                        if isinstance(x, dict):
                            acc.update(flags_of(x.get('flag')))
                            for k in ('then', 'else'): collect(x.get(k))
                collect(o.get('then'))
                opts.append(f | acc)
                walk(o.get('then'), route, sid)
            groups[route].append((sid, opts))
        for k in ('then', 'else'):
            walk(l.get(k), route, sid)
for sid, routes, sc in scenes:
    for r in routes: walk(sc, r, sid)
# (R.partyMingle and R.partyCoda are spliced into epi-h-party by story-w2.js, so the event walk already covers them.)

# 1. every list flag is set somewhere
for score, lst in ST.items():
    for f in lst:
        if f not in set_anywhere: fails.append(f'{score}: {f} is never set')

# 2. the verdict
OUT = ['epi-h-out-turns', 'epi-h-out-split', 'epi-h-out-falls']
def run(lines, flags):
    for l in lines:
        if 'ifCount' in l:
            n = sum(1 for f in l['ifCount']['of'] if f in flags)
            ok = n >= l['ifCount'].get('min', 0) and n <= l['ifCount'].get('max', 10 ** 9)
            run(l['then'] if ok else l.get('else') or [], flags)
        elif 'flag' in l:
            flags.update(flags_of(l['flag']))
table = {}
LIES = ST.get('lies', [])
for h in range(len(ST['heat']) + 1):
    for tr in range(len(ST['trust']) + 1):
        for li in range(len(LIES) + 1):
            fl = set(ST['heat'][:h]) | set(ST['trust'][:tr]) | set(LIES[:li]); before = set(fl)
            run(R['stakesVerdict'], fl)
            got = [o for o in OUT if o in fl and o not in before]
            if len(got) != 1: fails.append(f'verdict heat {h} trust {tr} lies {li}: {got}')
            table[(h, tr, li)] = got[0] if got else None

# 3. reachability per route: the pick per block (or none), counting heat / trust (capped)
CAP = 12
for r in ROUTES:
    blocks = groups[r]
    states = {(0, 0, 0)}
    LCAP = len(LIES)
    for sid, opts in blocks:
        nxt = set(states)
        for (h, t, l) in states:
            for f in opts:
                nxt.add((min(CAP, h + len(f & set(ST['heat']))), min(CAP, t + len(f & set(ST['trust']))), min(LCAP, l + len(f & set(LIES)))))
        states = nxt
    reach = {table.get((h, t, l)) for (h, t, l) in states}
    mh = max(s[0] for s in states); mt = max(s[1] for s in states); ml = max(s[2] for s in states)
    print(f'{r:8s} max heat {mh}  max trust {mt}  max lies {ml}  verdicts reachable: {sorted(x for x in reach if x)}')
    for o in OUT:
        if o not in reach: fails.append(f'{r}: {o} unreachable')

# 4. flags the outcomes read are set somewhere
reads = set()
def reads_of(lines):
    for l in lines or []:
        if isinstance(l, dict):
            if l.get('ifFlag'): reads.update(flags_of(l['ifFlag']))
            for k in ('then', 'else', 'choose'): reads_of(l.get(k))
for _, _, sc in scenes: reads_of(sc)
reads_of(R.get('partyMingle'))
for r in ROUTES: reads_of((R.get('partyCoda') or {}).get(r))
new = [f for f in reads if f.startswith(('epi-h-out-', 'epi-h-mom-', 'epi-h-party-', 'epi-h-falls-', 'epi-h-hayoon-', 'epi-h-removed', 'epi-h-heat-', 'epi-h-trust-', 'epi-h-sus-', 'epi-h-lie-', 'epi-h-jh-'))]
engine = {'epi-h-mom-hearing'}  # set inside an IF in the hearing (counted above via walk)
for f in sorted(new):
    if f not in set_anywhere and f not in engine: fails.append(f'read but never set: {f}')
print(f"lists: heat {len(ST['heat'])}, trust {len(ST['trust'])}, sus {len(ST['sus'])}, lies {len(LIES)}; choice blocks walked: " + ', '.join(f'{r} {len(groups[r])}' for r in ROUTES))
print('FAIL\n  ' + '\n  '.join(fails) if fails else 'OK: stakes check passed')
sys.exit(1 if fails else 0)
