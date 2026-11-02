"""The photo booth (FEMC-ART-TODO 15, game/booth.js; 2026-11-01). Headless Chrome, isolated profile, its own server; no player saves.

Run: python3 tests/femc_booth.py [--only art,flow,album,gates,settings] [--screenshots DIR]

  art       Kat's eight frames cut (600 x 800, green window keyed out, transparent corners and window, border kept), nine
            stamps (200 px, no green) and seven pose sets (six per person on one canvas, bottom aligned, waist cut solid, no
            stray strip at the top), all listed in booth/index.js.
  flow      Go Out → Paulownia Mall → Photo booth through the UI: partners she has met only, eight frames (art 1-4), three shots
            (the half-heart pairs itself and unpairs), stamps (add up to three, drag with the mouse, arrows, Delete), Print:
            ¥400, the slot spent, the strip in S.album.booth with every field, one ♪ for the month's first strip with him and
            none for a second, its line plays; once a day; leaving before Print costs nothing. Desktop 1440 x 900 and phone
            390 x 844 screenshots of every step, no sideways scroll.
  album     the Album's Photo Booth row draws the strips live, the viewer opens and closes (focus back), New Game+ keeps them
            (menu.js albumCarry).
  gates     nobody met → "Nobody to squeeze in with yet"; Hanni and Hyein listed once met; Kat's pose art takes over a stand-in
            when booth/index.js lists it.
  settings  reduced motion (no countdown, still shots), Reduce flashes (the soft flash).
"""
import argparse, base64, json, pathlib, sys, time
from femc_browser import Page, REPO

ap = argparse.ArgumentParser()
ap.add_argument('--only', default='')
ap.add_argument('--screenshots', default='/private/tmp/claude-501/-Users-katarinagrande/e8f9a9d2-09eb-475d-859c-9dc4016b9da5/scratchpad/booth-shots')
args = ap.parse_args()
ONLY = set(filter(None, args.only.split(',')))
SHOTS = pathlib.Path(args.screenshots); SHOTS.mkdir(parents=True, exist_ok=True)
def want(k): return not ONLY or k in ONLY
results = {}
URL = 'femc-game.html?speed=10&seed=7'
BOOTH = pathlib.Path(REPO, 'assets/femc/game/art/booth')

SETUP = r"""(()=>{
  const G=FemcGame,D=FEMC_BATTLE_DATA,cfg=%(cfg)s;
  G.newGame(); const S=G.S; S.started=true; S.phase='play'; S.day=G.dayOf(cfg.day||'6/13'); S.slot='after';
  S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null; S.unlocked.tartarus=true; S.flags.armband=true;
  S.joined=D.party.map(m=>m.id); S.yen=50000; S.condition='good';
  S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]}; S.lateNights={seen:[],lastDay:999};
  (cfg.met||['akihiko','yukari','junpei','haechan','jungwon']).forEach(id=>{ if(!S.met.includes(id)) S.met.push(id); });
  G.save(); return true;
})()"""


def ok(cond, msg):
    if not cond: raise AssertionError(msg)


p = Page()


def setup(**cfg):
    p.goto(URL); p.eval(SETUP % {'cfg': json.dumps(cfg)})


def view(w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 600})


def motion(reduce):
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce' if reduce else 'no-preference'}]})


def click(sel, timeout=15):
    p.wait('!!document.querySelector(%s)' % json.dumps(sel), timeout)
    p.eval('document.querySelector(%s).click()' % json.dumps(sel))


def shot(name):
    p.eval("new Promise(r=>setTimeout(r,450))")
    (SHOTS / (name + '.png')).write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
    return str(SHOTS / (name + '.png'))


def fits():
    return p.eval("document.documentElement.scrollWidth <= innerWidth + 1 && (()=>{const b=document.querySelector('.g-booth');if(!b)return true;const r=b.getBoundingClientRect();return r.left>=-1&&r.right<=innerWidth+1})()")


def clean(where):
    errs = [e for e in p.console() if 'favicon' not in str(e)]
    ok(not errs, f'{where}: {errs}')


ST = "FemcBooth.state()"


def enter():
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut(FemcGame.S.slot,'mall');true")
    click('[data-act=booth]')
    ok(p.eval("document.querySelector('.g-activity-preview:not(.out) [data-confirm]').textContent.trim()") == 'Step inside', 'the review says Step inside')
    click('.g-activity-preview:not(.out) [data-confirm]')
    p.wait("!!document.querySelector('.g-booth-ov:not(.out) .bs-body[data-step=who]')")


def snap(s, q):
    if p.eval(ST)['pose'][0] != s: click(f'[data-ps="{s}"]')
    if p.eval(ST)['pose'][1] != q: click(f'[data-pq="{q}"]')
    n = len(p.eval(ST)['shots'])
    click('[data-bs=snap]')
    p.wait(f"(FemcBooth.state()?.shots.length||0)>{n}", 10)


def strip(who, frame=1, shots=((0, 0), (1, 1), (2, 3)), stamps=(2,), go=True):
    enter(); click(f'[data-who={who}]'); click(f'[data-fr="{frame}"]'); click('[data-bs=frame-ok]')
    for s, q in shots: snap(s, q)
    p.wait("FemcBooth.state()?.step==='stamps'")
    for k in stamps: click(f'[data-sa="{k}"]')
    click('[data-bs=print]')
    p.wait("FemcBooth.state()?.printed===true")
    r = p.eval(ST)['result']
    if go:
        click('.bs-body[data-step=printed] [data-bs=go]')
        p.wait("!document.querySelector('.g-booth-ov')", 5)
    return r


try:
    view(1440, 900); motion(False)

    if want('art'):
        from PIL import Image
        idx = (BOOTH / 'index.js').read_text()
        data = json.loads(idx.split('window.FEMC_BOOTH_ART = ')[1].rstrip().rstrip(';'))
        ok(data == {'frames': list(range(1, 9)), 'stamps': list(range(1, 10)), 'poses': ['akihiko', 'haechan', 'hanni', 'hyein', 'jungwon', 'solar', 'yukari']}, f'index: {data}')
        for n in range(1, 10):
            im = Image.open(BOOTH / f'stamp-{n}.webp').convert('RGBA')
            ok(im.size == (200, 200) and im.getpixel((0, 0))[3] == 0, f'stamp {n}: {im.size}')
            ok(sum(1 for px in im.getdata() if px[3] > 128 and px[1] > max(px[0], px[2]) + 60) < 40, f'stamp {n}: no green')
        import numpy as np
        for who in data['poses']:
            sizes = set()
            for i in range(6):
                a = np.asarray(Image.open(BOOTH / f'{who}-{i}.webp').convert('RGBA'))[..., 3]; sizes.add(a.shape)
                rows = (a > 20).sum(1); top = np.nonzero(rows)[0][0]
                ok(rows[top + 1] > 0 and rows[top] < 120, f'{who}-{i}: no stray line at the top')
                ok((a[-30:] > 200).sum(1).max() > a.shape[1] * 0.25 and (a[-14:] > 200).any(), f'{who}-{i}: the waist cut sits on the bottom')
            ok(len(sizes) == 1, f'{who}: one canvas for all six {sizes}')
        for n in range(1, 9):
            im = Image.open(BOOTH / f'frame-{n}.webp').convert('RGBA'); a = im.getchannel('A')
            ok(im.size == (600, 800), f'frame {n} size {im.size}')
            ok(a.getpixel((300, 400)) == 0 and a.getpixel((300, 130)) == 0, f'frame {n}: the window is clear')
            ok(max(a.getpixel((x, 400)) for x in range(0, 60)) > 200 and max(a.getpixel((300, y)) for y in range(0, 60)) > 200, f'frame {n}: the border is kept')
            g = [px for px in im.getdata() if px[3] > 128 and px[1] > max(px[0], px[2]) + 60]
            ok(len(g) < 50, f'frame {n}: no green left ({len(g)} px)')
        results['art'] = 'frames 1-8: 600 x 800, window and outside clear, border kept, no green; stamps 1-9; seven pose sets on one canvas each'

    if want('flow'):
        shots = []
        for w, h in [(1440, 900), (390, 844)]:
            view(w, h); setup()
            y0 = p.eval("FemcGame.S.yen"); xp0 = p.eval("FemcGame.progress('haechan').xp||0")
            enter()
            who = p.eval("[...document.querySelectorAll('[data-who]')].map(b=>b.dataset.who)")
            ok(who == ['haechan', 'jungwon', 'akihiko', 'yukari'], f'partners met only, in order: {who}')
            ok(fits(), f'{w}: who fits'); shots.append(shot(f'booth-1-who-{w}'))
            click('[data-who=haechan]')
            fr = p.eval("[...document.querySelectorAll('.bs-fr')].map(b=>({n:+b.dataset.fr,art:!!b.querySelector('img.bs-frame'),drawn:!!b.querySelector('.bs-frame.drawn')}))")
            ok(len(fr) == 8 and all(f['art'] and not f['drawn'] for f in fr), f'eight frames, all Kat\'s: {fr}')
            p.wait("[...document.querySelectorAll('img.bs-frame')].every(i=>i.complete&&i.naturalWidth===600)", 10)
            click('[data-fr="3"]'); ok(p.eval(ST)['frame'] == 3, 'frame picked')
            ok(fits(), f'{w}: frames fit'); shots.append(shot(f'booth-2-frame-{w}'))
            click('[data-bs=frame-ok]')
            # the half-heart pairs itself, and unpairs when the other picks something else
            click('[data-ps="1"]'); ok(p.eval(ST)['pose'] == [1, 1] and p.eval("!document.querySelector('.bs-shot.live .bs-heart')"), 'heart pairs (their own hands, no drawn heart)')
            click('[data-pq="3"]'); ok(p.eval(ST)['pose'] == [0, 3], f'heart unpairs: {p.eval(ST)["pose"]}')
            click('[data-pq="1"]'); ok(p.eval(ST)['pose'] == [1, 1], 'his half brings hers')
            ok(fits(), f'{w}: shot fits'); shots.append(shot(f'booth-3-shot-{w}'))
            snap(1, 1); snap(2, 4); snap(5, 5)
            ok(p.eval(ST)['shots'] == [[1, 1], [2, 4], [5, 5]] and p.eval(ST)['step'] == 'stamps', f'three shots: {p.eval(ST)}')
            ok(p.eval("FemcGame.S.yen") == y0 and not p.eval("FemcGame.S.spent[FemcGame.S.day+'-after']"), 'nothing paid before Print')
            for k in (2, 8, 9): click(f'[data-sa="{k}"]')
            ok(p.eval("[...document.querySelectorAll('[data-sa]')].every(b=>b.disabled)"), 'three stamps at most')
            # drag the first stamp with the mouse
            r = p.eval("(()=>{const b=document.querySelector('.bs-st[data-st=\"0\"]').getBoundingClientRect(),s=document.querySelector('.bs-strip').getBoundingClientRect();return {x:b.left+b.width/2,y:b.top+b.height/2,tx:s.left+s.width*.7,ty:s.top+s.height*.12}})()")
            I = lambda t, x, y, **k: p.ws.call('Input.dispatchMouseEvent', dict(type=t, x=x, y=y, button='left', **k))
            I('mouseMoved', r['x'], r['y']); I('mousePressed', r['x'], r['y'], clickCount=1)
            for i in range(1, 6): I('mouseMoved', r['x'] + (r['tx'] - r['x']) * i / 5, r['y'] + (r['ty'] - r['y']) * i / 5, buttons=1)
            I('mouseReleased', r['tx'], r['ty'], clickCount=1)
            s0 = p.eval(ST)['stamps'][0]
            ok(abs(s0['x'] - 70) <= 3 and abs(s0['y'] - 12) <= 3, f'dragged: {s0}')
            # arrows and Delete
            p.eval("document.querySelector('.bs-st[data-st=\"1\"]').focus()")
            x1 = p.eval(ST)['stamps'][1]['x']
            p.eval("document.activeElement.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}))")
            ok(p.eval(ST)['stamps'][1]['x'] == x1 + 2, 'arrow moves a stamp')
            p.eval("document.querySelector('.bs-st[data-st=\"2\"]').focus();document.activeElement.dispatchEvent(new KeyboardEvent('keydown',{key:'Delete',bubbles:true}))")
            ok(len(p.eval(ST)['stamps']) == 2, 'Delete takes one off')
            click('[data-sa="9"]')
            ok(fits(), f'{w}: stamps fit'); shots.append(shot(f'booth-4-stamps-{w}'))
            click('[data-bs=print]'); p.wait("FemcBooth.state()?.printed===true")
            res = p.eval(ST)['result']
            S = p.eval("(()=>{const S=FemcGame.S;return {yen:S.yen,spent:S.spent[S.day+'-after'],dd:(S.doneDay||{}).booth,day:S.day,booth:S.album.booth,xp:FemcGame.progress('haechan').xp||0}})()")
            rec = S['booth'][0]
            ok(S['yen'] == y0 - 400 and S['spent'] == 'act:booth' and S['dd'] == S['day'], f'paid ¥400, slot spent, once a day: {S}')
            ok(set(rec) >= {'date', 'day', 'run', 'who', 'frame', 'shots', 'stamps'} and rec['who'] == 'haechan' and rec['frame'] == 3
               and rec['shots'] == [[1, 1], [2, 4], [5, 5]] and len(rec['stamps']) == 3 and rec['stamps'][2]['id'] == 9, f'the strip: {rec}')
            ok(res['first'] and res['pt'] == 1 and S['xp'] == xp0 + 1, f'one ♪ for the first strip this month: {res} {S["xp"]} {xp0}')
            ok(fits(), f'{w}: printed fits'); shots.append(shot(f'booth-5-printed-{w}'))
            click('.bs-body[data-step=printed] [data-bs=go]')
            p.wait("!document.querySelector('.g-booth-ov')", 5)
            p.wait("document.body.innerText.includes('Haechan')", 10)
            ok(not p.eval("FemcGame.activityOk(FemcGame.actById('booth'),'evening').ok") and p.eval("FemcGame.activityOk(FemcGame.actById('booth'),'evening').why") == 'Once a day', 'once a day')
            clean(f'flow {w}')
        # a second strip with him the same month: no ♪; with Jungwon: one
        view(1440, 900); setup()
        strip('haechan')
        p.eval("FemcGame.S.day+=1;FemcGame.S.spent={};FemcGame.S.slot='after';FemcGame.save()")
        r2 = strip('haechan', 5)
        ok(not r2['first'] and r2['pt'] == 0, f'a second strip with him this month: no ♪ {r2}')
        p.eval("FemcGame.S.day+=1;FemcGame.S.spent={};FemcGame.save()")
        r3 = strip('jungwon', 8, stamps=(1, 4, 5))
        ok(r3['first'] and r3['pt'] == 1, f'the first with Jungwon: ♪ {r3}')
        # leaving costs nothing
        p.eval("FemcGame.S.day+=1;FemcGame.S.spent={};FemcGame.save()")
        y = p.eval("FemcGame.S.yen")
        enter(); click('[data-who=akihiko]'); click('[data-bs=frame-ok]')
        key = "document.activeElement.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))"
        p.eval(key); ok(p.eval(ST)['step'] == 'frame', 'Esc steps back'); p.eval(key); ok(p.eval(ST)['step'] == 'who', 'to the partners'); p.eval(key)
        p.wait("!document.querySelector('.g-booth-ov')", 5)
        ok(p.eval("FemcGame.S.yen") == y and not p.eval("FemcGame.S.spent[FemcGame.S.day+'-after']") and p.eval("!!document.querySelector('[data-act=booth]')"), 'left without paying, back at the mall')
        clean('flow more')
        results['flow'] = {'shots': shots}

    if want('album'):
        view(1440, 900); setup()
        strip('haechan', 1, stamps=(2, 7)); p.eval("FemcGame.S.day+=1;FemcGame.S.spent={};FemcGame.save()"); strip('yukari', 6, shots=((4, 3), (1, 1), (3, 2)))
        p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcMenu.open('album')")
        p.wait("document.querySelectorAll('.bs-al-tile').length===2", 10)
        ok(p.eval("document.querySelectorAll('.bs-al-tile .bs-shot').length") == 6 and p.eval("document.querySelectorAll('.bs-al-tile .bs-st').length") == 3, 'two strips drawn live in the Album')
        p.eval("document.querySelector('.bs-al-tile').scrollIntoView({block:'center'})")
        sh = [shot('booth-album-1440')]
        click('[data-bs-al="1"]'); p.wait("!!document.querySelector('.g-booth-ov.view .bs-strip')")
        ok('Yukari' in p.eval("document.querySelector('.g-booth-ov.view').innerText"), 'viewer names her')
        sh.append(shot('booth-album-view-1440'))
        p.eval("document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))")
        p.wait("!document.querySelector('.g-booth-ov.view')", 5)
        ok(p.eval("document.activeElement?.dataset?.bsAl") == '1', 'focus back on the tile')
        view(390, 844); time.sleep(0.4); ok(fits(), 'album 390 fits'); sh.append(shot('booth-album-390'))
        click('[data-bs-al="0"]'); p.wait("!!document.querySelector('.g-booth-ov.view .bs-strip')"); ok(fits(), 'viewer 390 fits'); sh.append(shot('booth-album-view-390'))
        view(1440, 900)
        carry = p.eval("FemcMenu.albumCarry().booth")
        ok(len(carry) == 2 and carry[1]['who'] == 'yukari' and carry[1]['frame'] == 6, f'New Game+ keeps the strips: {carry}')
        clean('album')
        results['album'] = {'shots': sh}

    if want('gates'):
        setup(met=['junpei'])
        g = p.eval("FemcGame.activityOk(FemcGame.actById('booth'),'after')")
        ok(not g['ok'] and g['why'] == 'Nobody to squeeze in with yet', f'nobody met: {g}')
        p.eval("FemcGame.S.met.push('hanni','hyein');FemcGame.save()")
        ok(p.eval("FemcBooth.partners()") == ['hanni', 'hyein'], 'Hanni and Hyein once met')
        ok(p.eval("FemcGame.activityOk(FemcGame.actById('booth'),'after').ok"), 'open with a partner')
        # Kat's pose art takes over a stand-in when listed (pointed at an existing image)
        html = p.eval("(()=>{FEMC_BOOTH_ART.poses=['hanni'];return FemcBooth.stripHtml({who:'hanni',frame:2,shots:[[0,4]],stamps:[]})})()")
        ok('booth/hanni-4.webp' in html and 'img class="bs-p art r"' in html and 'bs-badge' in html, 'pose art for Hanni, stand-in for Solar')
        ok('bs-heart' in p.eval("FemcBooth.stripHtml({who:'hanni',frame:2,shots:[[1,1]],stamps:[]})"), 'drawn heart while Solar is a stand-in')
        ok('bs-heart' not in p.eval("(()=>{FEMC_BOOTH_ART.poses=['hanni','solar'];return FemcBooth.stripHtml({who:'hanni',frame:2,shots:[[1,1]],stamps:[]})})()"), 'no drawn heart when both are art')
        clean('gates')
        results['gates'] = 'nobody → closed; Hanni / Hyein; pose art switch'

    if want('settings'):
        motion(True); setup()
        enter(); click('[data-who=jungwon]'); click('[data-bs=frame-ok]')
        t0 = time.time(); click('[data-bs=snap]'); p.wait("FemcBooth.state()?.shots.length===1", 5)
        ok(p.eval("getComputedStyle(document.querySelector('.bs-strip, .bs-shot')).animationName") in ('none', ''), 'reduced motion: still')
        motion(False)
        p.eval("FemcGame.setSettings({calm:true})"); p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove());FemcBooth.close(true)")
        enter(); ok(p.eval("document.querySelector('.g-booth').classList.contains('calm')"), 'Reduce flashes: calm class')
        click('[data-who=jungwon]'); click('[data-bs=frame-ok]'); click('[data-bs=snap]')
        p.wait("document.querySelector('.bs-flash')?.classList.contains('go')", 5)
        ok(p.eval("getComputedStyle(document.querySelector('.bs-flash.go')).animationName") == 'bs-soft', 'the soft flash')
        p.eval("FemcGame.setSettings({calm:false})")
        clean('settings')
        results['settings'] = 'reduced motion, Reduce flashes'

    print(json.dumps(results, indent=1))
    print('femc_booth: all checks passed')
finally:
    p.close()
