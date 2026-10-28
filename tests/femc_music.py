"""Music in the FEMC game, in an isolated Chrome profile (never the player's saves).
Checks: every mapped file exists and loads; mood pools rotate without back-to-back repeats (and a pooled track hands over
to the next one before it ends); world songs fade in softly and back out to the P3 track in a memory scene, a searcher's
arrival and a fragment found mid-scene; the battle rotation carries over from fight to fight (each fight is a new frame);
strong / boss / finale keys; the volume setting and mute; no browser errors.
Run: python3 tests/femc_music.py
"""
import json, os, time
from femc_browser import Page, REPO

FRAME = "document.querySelector('.g-dh-iframe').contentWindow"
NEW_SONGS = ['basement', 'beneath-the-mask', 'blooming-villain', 'break-out-of', 'burn-my-dread-last-battle', 'calamity', 'danger-zone',
             'deep-breath-reincarnation', 'deep-breath-reload', 'disconnected', 'dont', 'last-surprise', 'like-a-dream-come-true',
             'living-with-determination', 'my-homie', 'new-days', 'nyx', 'period', 'shadow-world', 'signs-of-love', 'meaning-of-armbands',
             'time-to-make-history', 'wiping-all-out', 'skys-the-limit', 'specialist', 'its-alright-this-way', 'whos-there', 'boring',
             'memories-of-you', 'mementos', 'bad-feeling', 'school-memories', 'power-of-the-heart', 'hall-of-doors', 'deep-mentality',
             'exam-in-progress']
# Kat's epilogue song picks (FEMC-SONGS-TO-GATHER.md), wired in data/epi/<world>/world.js; the spares are copied, not wired.
EPI_SONGS = ['novocaine', 'ring-ring', 'not-enough', 'grey-rain', 'miss-the-rage', 'cashy', 'dollar-bratz', 'we-r-who-we-r', 'lights-out',
             'heaven-and-back', 'twenty-three', 'yummy', 'self-destruct', 'bad-idea', 'that-way', 'tia-tamera', 'kill-the-lights', 'wantchu',
             'shut-me-up', 'cyber-sex', 'pretty-girls', 'lonely-at-the-top', 'affection', 'boyfriend', 'you-chase-atlantic', 'past-life',
             'you-nct-dream', 'nowhere-nobody', 'nothing-could-break-me', 'tip-toe',
             'cardigan', 'everybody-talks', 'tongue-tied', 'touch-tank', 'colorblind', 'crazy-kids', 'brooklynbloodpop', 'cha-ching',
             'cigarette-daydreams', 'i-like-you', 'impatient', 'moonlight', 'anthems-for-a-seventeen-year-old-girl', 'teenage-losers', 'nail', 'evergreen',
             'soft-spot', 'staying', 'sidelines', 'nice-dream', 'every-breath-you-take', 'linger', 'somebody', 'forever', 'help-im-alive',
             'dont-touch', 'demons', 'in-this-darkness', 'nothings-gonna-hurt-you-baby', 'i-think-my-hearts-gone-rotten',
             'everything-is-romantic', 'picture-you', 'what-if-i-miss-you', 'ghost-of-you', 'did-i-tell-u-that-i-miss-u', 'tower-of-memories',
             'black-out-days', 'i-know-the-end', 'sparks', 'ivy', 'semi-charmed-life', 'me-and-the-birds']
EPI_SPARES = ['wyn', 'egirls-are-ruining-my-life', 'white-tee', 'bodybag', 'hot', 'misery']

# Drives an open scene one step: title card, choices (first option), the summon card, an act card, otherwise the next line.
SSTEP = r"""(()=>{
  const gs = document.querySelector('.gs:not(.out)'); if (!gs) return 'none';
  const t = gs.querySelector('.gs-title'); if (t) { t.click(); return 'title'; }
  const c = gs.querySelector('.gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
  const s = gs.querySelector('.gs-summon.ready'); if (s) { s.click(); return 'summon'; }
  const a = document.querySelector('.g-ac'); if (a) { a.click(); return 'act'; }
  gs.click(); return 'line';
})()"""
M = 'FemcScene.Music.state()'


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


def wait_for(p, cond, timeout=20, step=0.15):
    t0 = time.time()
    while time.time() - t0 < timeout:
        if p.eval(cond): return True
        time.sleep(step)
    raise AssertionError('Timed out: ' + cond)


def drive_scene(p, until=None, limit=600):
    for _ in range(limit):
        if until and p.eval(until): return True
        if p.eval(SSTEP) == 'none': return False
        time.sleep(0.03)
    raise AssertionError('scene did not finish')


def play_event(p, eid):
    p.eval("(()=>{const e=FemcGame.D.events.find(x=>x.id===%s);window.__done=false;FemcScene.play({scene:e.scene,place:e.place,time:e.time,onDone:()=>{window.__done=true}})})()" % json.dumps(eid))


def close(a, b, tol=0.02): return a is not None and abs(a - b) <= tol


def main():
    p = Page()
    try:
        # Count real audio elements without changing playback.
        p.ws.call('Page.addScriptToEvaluateOnNewDocument', {'source': "window.__audio=[];window.Audio=class extends window.Audio{constructor(...a){super(...a);window.__audio.push(this)}}"})
        p.goto('femc-game.html?seed=42')
        p.eval("FemcGame.newGame();FemcGame.S.phase='play';FemcGame.setSetting('text','instant');FemcGame.setSetting('auto','off');FemcGame.setSetting('dateCard',false);FemcGame.setSetting('music',60)")

        # 1. Every mapped file exists on disk, loads in the browser and has a duration; every new song is mapped.
        files = p.eval("""(()=>{const out=new Set();const add=v=>[].concat(v||[]).forEach(f=>{if(typeof f==='string')out.add(f.includes('/')?f:'assets/femc/music/'+f+'.mp3')});
          Object.values(FEMC_GAME_PLACES.music).forEach(add);const B=FemcGame.D.battle.music;Object.entries(B).forEach(([k,v])=>{if(v&&typeof v==='object'&&!Array.isArray(v))Object.values(v).forEach(add);else add(v)});return [...out]})()""")
        missing = [f for f in files if not os.path.isfile(os.path.join(REPO, f))]
        ok(not missing, f'missing files: {missing}')
        loaded = p.eval("""Promise.all(%s.map(f=>new Promise(r=>{const a=new window.Audio();a.preload='metadata';const t=setTimeout(()=>r([f,0]),15000);
          a.onloadedmetadata=()=>{clearTimeout(t);r([f,a.duration])};a.onerror=()=>{clearTimeout(t);r([f,-1])};a.src=f})))""" % json.dumps(files), timeout=120)
        bad = [f for f, d in loaded if not d or d < 20]
        ok(not bad, f'files that did not load: {bad}')
        unmapped = [s for s in NEW_SONGS if f'assets/femc/music/{s}.mp3' not in files]
        ok(not unmapped, f'new songs not mapped: {unmapped}')
        for s in NEW_SONGS: ok(os.path.getsize(os.path.join(REPO, 'assets/femc/music', s + '.mp3')) < 15 * 1024 * 1024, s + ' is over 15 MB')
        print(f'{len(files)} mapped files exist and load ({len(NEW_SONGS)} new songs, every one mapped, all under 15 MB).', flush=True)

        # 1b. The epilogue worlds' moods (Kat's song picks, revision 1): every value resolves to a file that loads; every
        # gathered song is wired except the spares; the moods with no pick yet keep a P3 stand-in.
        epi = p.eval("""Promise.all(['runners','hoax','strangers','stay','true'].map(w=>new Promise(r=>{const s=document.createElement('script');
          s.src='assets/femc/game/data/epi/'+w+'/world.js?t='+Date.now();s.onload=s.onerror=r;document.head.appendChild(s)}))).then(()=>{
          const out={};Object.entries(FEMC_EPI_WORLDS).forEach(([w,R])=>Object.entries(R.places?.music||{}).forEach(([k,v])=>{out[k]=[].concat(v).map(f=>f.includes('/')?f:'assets/femc/music/'+f+'.mp3')}));return out})""", timeout=60)
        ok(len([k for k in epi if k.startswith(('epi-r-', 'epi-h-', 'epi-s-', 'epi-st-', 'epi-tr-'))]) == 66, f'epilogue moods: {len(epi)}')
        efiles = sorted({f for v in epi.values() for f in v})
        missing = [f for f in efiles if not os.path.isfile(os.path.join(REPO, f))]
        ok(not missing, f'epilogue moods with missing files: {missing}')
        loaded = p.eval("""Promise.all(%s.map(f=>new Promise(r=>{const a=new window.Audio();a.preload='metadata';const t=setTimeout(()=>r([f,0]),15000);
          a.onloadedmetadata=()=>{clearTimeout(t);r([f,a.duration])};a.onerror=()=>{clearTimeout(t);r([f,-1])};a.src=f})))""" % json.dumps(efiles), timeout=180)
        bad = [f for f, d in loaded if not d or d < 20]
        ok(not bad, f'epilogue files that did not load: {bad}')
        unwired = [s for s in EPI_SONGS if f'assets/femc/music/{s}.mp3' not in efiles]
        ok(not unwired, f'gathered epilogue songs not wired: {unwired}')
        for s in EPI_SONGS + EPI_SPARES:
            ok(os.path.getsize(os.path.join(REPO, 'assets/femc/music', s + '.mp3')) < 7.5 * 1024 * 1024, s + ' is over ~7 MB')
        stand = {k for k, v in epi.items() if all(f.startswith('assets/femc/music/') and f[18:-4] in NEW_SONGS + ['tender-feeling', 'tranquility', 'iwatodai-dorm'] for f in v)}
        ok(stand == {'epi-r-team', 'epi-r-moon', 'epi-st-home', 'epi-st-held'}, f'moods still on a P3 track: {sorted(stand)}')
        pools = {k: v for k, v in epi.items() if len(v) > 1}
        ok(set(pools) == {'epi-r-party', 'epi-r-regionals', 'epi-r-match', 'epi-r-romance', 'epi-r-holiday', 'epi-r-faceoff', 'epi-r-spice', 'epi-h-party', 'epi-h-newyear', 'epi-s-danger'}, f'epilogue pools: {sorted(pools)}')
        print(f'{len(epi)} epilogue moods: {len(efiles)} files exist and load, {len(pools)} pools, {len(EPI_SONGS)} gathered songs wired ({len(EPI_SPARES)} spares copied).', flush=True)

        # 2. Rotation: every pool, left and re-entered, starts a different file; a sequence of moods never starts the same file twice
        # in a row; a pooled track hands over to the next file before it ends.
        pools = p.eval("Object.entries(FEMC_GAME_PLACES.music).filter(([k,v])=>Array.isArray(v)&&new Set(v).size>1&&!k.startsWith('world-')).map(([k])=>k)")
        for mood in pools:
            first = p.eval(f"(FemcScene.Music.set('fullmoon'),FemcScene.Music.set({json.dumps(mood)}),{M}.file)")
            second = p.eval(f"(FemcScene.Music.set('fullmoon'),FemcScene.Music.set({json.dumps(mood)}),{M}.file)")
            ok(first != second, f'{mood}: the same file twice in a row ({first})')
        seq, prev = [], None
        for mood in ['joy', 'city', 'joy', 'tender', 'night', 'tender', 'mystery', 'dorm', 'night', 'date', 'date', 'velvet', 'joy', 'city', 'day', 'class', 'school', 'tender']:
            p.eval(f"FemcScene.Music.set({json.dumps(mood)})")
            f = p.eval(M + '.file')
            if f != prev: seq.append(f)
            prev = f
        ok(all(a != b for a, b in zip(seq, seq[1:])), f'back-to-back repeat in {seq}')
        p.eval("FemcScene.Music.set('fullmoon');FemcScene.Music.set('tender')")
        wait_for(p, M + ".curPaused===false")
        before = p.eval(M + '.file')
        wait_for(p, "(__audio.filter(x=>x.src===FemcScene.Music.state().curSrc&&!x.paused).pop()?.duration||0)>0")
        # The test server can't seek (no range requests), so the element reports a time 1.6 s from its end instead.
        p.eval("(()=>{const s=FemcScene.Music.state().curSrc;const a=__audio.filter(x=>x.src===s&&!x.paused).pop();const d=a.duration;Object.defineProperty(a,'currentTime',{configurable:true,get:()=>d-1.6,set:()=>{}});a.dispatchEvent(new Event('timeupdate'))})()")
        wait_for(p, f"{M}.file!=={json.dumps(before)}", timeout=10)
        ok(p.eval(M + '.mood') == 'tender' and p.eval(M + '.file') in p.eval("FEMC_GAME_PLACES.music.tender"), 'hand-over left the tender pool')
        wait_for(p, f"__audio.filter(a=>a.src.endsWith('/{before}.mp3')).every(a=>a.paused)", timeout=6)
        p.eval("FemcScene.Music.set('fullmoon')")
        wait_for(p, M + ".curPaused===false")
        ok(p.eval(M + '.curLoop') is True, 'a single-file mood should loop')
        print(f'{len(pools)} pools rotate without repeats; {len(seq)} mood changes never started the same file twice in a row; a pooled track hands over before it ends.', flush=True)

        # 3. World songs: a memory scene (a fragment's world), a searcher's arrival, and a fragment found mid-scene.
        p.eval("FemcScene.Music.set('tender')")
        for eid, world in [('a2-pier', 'world-strangers'), ('a4-mall', 'world-runners')]:
            play_event(p, eid)
            drive_scene(p, until=f"{M}.world==={json.dumps(world)}")
            time.sleep(3.0)  # the 2.5 s fade-in
            st = p.eval(M)
            ok(st['world'] == world and st['worldPaused'] is False, f'{eid}: world song not playing {st}')
            ok('assets/audio/' in p.eval(f"__audio.find(a=>!a.paused&&!a.loop&&a.src.includes('assets/audio/'))?.src||''"), f'{eid}: world song file')
            ok(close(st['worldVol'], st['target'] * st['soft']), f'{eid}: world song not soft ({st["worldVol"]} vs {st["target"] * st["soft"]})')
            ok(st['curPaused'] in (True, None), f'{eid}: the P3 track should wait under the world song {st}')
            drive_scene(p)
            wait_for(p, 'window.__done')
            time.sleep(2.6)  # the 2.2 s fade-out
            st = p.eval(M)
            ok(st['world'] is None and st['curPaused'] is False and close(st['curVol'], st['target']), f'{eid}: did not fade back to the P3 track {st}')
            ok(p.eval("__audio.filter(a=>a.src.includes('assets/audio/')).every(a=>a.paused)"), f'{eid}: a world song is still running')
            print(f'{eid}: {world} faded in softly ({st["target"] * st["soft"]:.2f}) and back out to the P3 track.', flush=True)
        p.eval("window.__done=false;FemcScene.play({scene:[{music:'night'},{n:'One.'},{fragment:'hoax-croissant'},{n:'Two.'},{n:'Three.'},{music:'tender'},{n:'Four.'}],onDone:()=>{window.__done=true}})")
        drive_scene(p, until=f"{M}.world==='world-hoax'")
        ok(p.eval(M + ".lastMood") == 'night', 'fragment world song: under the wrong mood')
        drive_scene(p, until=f"{M}.lastMood==='tender'")
        ok(p.eval(M + '.world') is None, 'an explicit mood should end the world song')
        drive_scene(p); wait_for(p, 'window.__done')
        print('A fragment found mid-scene plays its world song; the next mood in the scene fades it back out.', flush=True)

        # 4. Volume and mute (the shared Music setting), with and without a world song.
        p.eval("FemcGame.setSetting('music',30)")
        time.sleep(0.2)
        st = p.eval(M); ok(close(st['curVol'], 0.15, 0.005) and st['target'] == 0.15, f'volume 30: {st}')
        p.eval("FemcScene.Music.set('world-runners')"); time.sleep(2.9)
        st = p.eval(M); ok(close(st['worldVol'], 0.09, 0.01), f'world volume 30: {st}')
        p.eval("FemcGame.setSetting('music',0)"); time.sleep(0.2)
        st = p.eval(M); ok(st['worldVol'] == 0 and st['worldPaused'] is False, f'mute with a world song: {st}')
        p.eval("FemcScene.Music.set('night')"); time.sleep(1.8)
        st = p.eval(M); ok(st['curVol'] == 0 and st['curPaused'] is False and st['world'] is None, f'mute: {st}')
        ok(p.eval("__audio.filter(a=>!a.paused).every(a=>a.volume===0)"), 'something is audible with music off')
        p.eval("FemcGame.setSetting('music',60)"); time.sleep(0.2)
        ok(close(p.eval(M + '.curVol'), 0.3, 0.005), 'volume did not come back')
        print('Volume and mute apply to the P3 track and the world songs; a muted track keeps running silently.', flush=True)

        # 5. Battle: the rotation carries over from frame to frame; strong / boss / finale keys; world song; volume; ducking.
        D = 'assets/femc/music/'
        srcs = []
        for i in range(4):
            p.eval("document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGame.makeHandoff('scripted',{script:'prologue-1',segment:2,forced:true});FemcGameUI.run()")
            wait_for(p, f"!!document.querySelector('.g-dh.live') && {FRAME}.FemcBattle?.screen()==='battle'", timeout=40)
            wait_for(p, f"{FRAME}.FemcBattle.music.state().paused===false", timeout=10)
            ok(p.eval(M + '.ducked') is True, 'the story music should duck under the battle')
            srcs.append(p.eval(f"{FRAME}.FemcBattle.music.state().src"))
            if i == 0:
                F = FRAME + '.FemcBattle.music'
                for key, want in [('danger', 'danger-zone'), ('boss', 'calamity'), ('villain', 'blooming-villain'), ('mementos', 'mementos'),
                                  ('finale-call', 'nyx'), ('finale-train', 'period'), ('finale-last', 'burn-my-dread-last-battle'), ('title', 'basement')]:
                    p.eval(f"{F}.play({json.dumps(key)})")
                    ok(p.eval(f"{F}.state().src") == D + want + '.mp3', f'battle key {key}')
                p.eval(f"{F}.play('battle',{{restart:true}})")
                srcs[-1] = None  # the extra play above took a turn of the rotation itself
                p.eval(f"{F}.world('Runners')"); time.sleep(2.6)
                st = p.eval(f"{F}.state()")
                ok(st['world'] == 'runners' and 'assets/audio/' in st['worldSrc'] and close(st['worldVol'], st['target'] * st['soft']) and st['paused'] is True, f'battle world song: {st}')
                p.eval(f"{F}.endWorld()"); time.sleep(2.2)
                st = p.eval(f"{F}.state()")
                ok(st['world'] is None and st['paused'] is False and close(st['vol'], st['target']), f'battle world song did not fade back: {st}')
                p.eval(f"{FRAME}.document.querySelector('[data-tool=music]')?.click()")
                p.eval(f"{FRAME}.FemcBattle.music.play('floor')")
                if p.eval(f"!!{FRAME}.document.querySelector('[data-tool=music]')"):
                    ok(p.eval(f"{F}.state().muted") is True, 'battle mute')
                    p.eval(f"{FRAME}.document.querySelector('[data-tool=music]').click()")
                    ok(p.eval(f"{F}.state().muted") is False, 'battle unmute')
            p.eval(f"{FRAME}.FemcBattle.hoFinish('win')")
            wait_for(p, "!document.querySelector('.g-dh')", timeout=20)
            wait_for(p, M + '.ducked===false', timeout=5)
        fights = [s for s in srcs if s]
        ok(all(a != b for a, b in zip(fights, fights[1:])), f'battle rotation repeated: {fights}')
        battle_pool = p.eval("FemcGame.D.battle.music.battle")
        ok(all(s in battle_pool for s in fights) and len(set(fights)) >= 2, f'battle rotation: {fights}')
        ok(fights.count(D + 'wiping-all-out.mp3') >= 1, 'Wiping All Out never played')
        ok(p.eval("FemcGame.settings().music") == 60, 'battle toggles left music off')
        print('Battle: ' + ' → '.join(os.path.basename(s)[:-4] for s in fights) + '; strong, boss, rival, Mementos and finale keys; a soft world song; mute; story music ducks.', flush=True)

        errors = p.console(); ok(not errors, errors)
        print('No browser errors.', flush=True)
    finally:
        p.close()


if __name__ == '__main__':
    main()
