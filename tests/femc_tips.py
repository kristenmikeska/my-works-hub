"""Tips for new players (tips.js), the grouped menu, the Boutique entry and hover that follows the mouse (Nov 3 2026).
Run: python3 tests/femc_tips.py [--screenshots DIR]
Real mouse moves and clicks (Input.dispatchMouseEvent) on the menu screen's list and the Links cards: the entry that
lights up is always the row under the pointer, a row is never re-picked by a mouse that hasn't moved, and a click lands on it.
"""
import base64
import pathlib
import sys
import tempfile
import time
from femc_browser import Page
from femc_saves import URL, HELPERS, click

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-tips-'))
OUT.mkdir(parents=True, exist_ok=True)
N = [0]


def ok(c, msg):
    N[0] += 1
    if not c: raise AssertionError(msg)
    print('ok', msg, flush=True)


def size(p, w, h):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': w < 700})


def shot(p, name):
    p.eval('new Promise(r=>setTimeout(r,350))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def move(p, x, y):
    p.ws.call('Input.dispatchMouseEvent', {'type': 'mouseMoved', 'x': x, 'y': y, 'pointerType': 'mouse'})


def mclick(p, x, y):
    move(p, x, y)
    for t in ('mousePressed', 'mouseReleased'):
        p.ws.call('Input.dispatchMouseEvent', {'type': t, 'x': x, 'y': y, 'button': 'left', 'clickCount': 1, 'pointerType': 'mouse'})


UNDER = """((x,y,rows,sel)=>{const e=document.elementFromPoint(x,y),li=e&&e.closest(rows);
  const all=[...document.querySelectorAll(rows)];return {at:li?all.indexOf(li):-1,sel:all.findIndex(l=>l.classList.contains('sel'))}})"""


def scan(p, rows, label):
    """Sweep the pointer down (and back up) through every row at three x positions, then jitter on each row boundary."""
    boxes = p.eval(f"[...document.querySelectorAll('{rows}')].map(l=>{{const r=l.getBoundingClientRect();return [r.left,r.top,r.right,r.bottom]}})")
    top, bot = min(b[1] for b in boxes), max(b[3] for b in boxes)
    xs = sorted({int(b[0] + 30) for b in boxes})[:1] + [int(sum(b[0] for b in boxes) / len(boxes) + 80), int(min(b[2] for b in boxes) - 20)]
    bad, prev = [], None
    for x in xs:
        for y in list(range(int(top) + 2, int(bot) - 2, 3)) + list(range(int(bot) - 3, int(top) + 2, -5)):
            move(p, x, y)
            r = p.eval(f"{UNDER}({x},{y},'{rows}')")
            if r['at'] >= 0 and r['at'] != r['sel']: bad.append((x, y, r))
            if r['at'] < 0 and prev is not None and r['sel'] != prev: bad.append(('moved off a row', x, y, r))
            prev = r['sel']
    # Jitter: one pixel either side of each boundary between two rows, ten times
    for a, b in zip(boxes, boxes[1:]):
        y, x = int((a[3] + b[1]) / 2), int(max(a[0], b[0]) + 40)
        for k in range(10):
            yy = y + (1 if k % 2 else -1)
            move(p, x, yy)
            r = p.eval(f"{UNDER}({x},{yy},'{rows}')")
            if r['at'] >= 0 and r['at'] != r['sel']: bad.append(('jitter', x, yy, r))
    ok(not bad, f'{label}: the highlighted row is always the one under the mouse ({len(bad)} misses) {bad[:3]}')


def main():
    p = Page()
    try:
        size(p, 1440, 900)
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
        p.goto(URL); p.eval(HELPERS)

        # ── Defaults: a new game has tips on; a save past the prologue without a record reads off and isn't written to ──
        p.eval('FemcGame.newGame();true')
        ok(p.eval('FemcGame.S.phase')=='prologue' and p.eval('FemcTips.on()') is True and p.eval('!!FemcGame.S.tips'), 'a new game starts with tips on (kept in the save)')
        p.eval("(()=>{const S=FemcGame.S;delete S.tips;S.phase='play';return true})()")
        ok(p.eval('FemcTips.on()') is False and p.eval('!FemcGame.S.tips'), 'a save past the prologue without a record: tips off, the save untouched')

        # A playable day with the party in.
        p.eval("""(()=>{const G=FemcGame,S=G.S,D=FEMC_BATTLE_DATA;S.tips={on:true,seen:[]};S.day=G.dayOf('6/15');S.slot='after';S.joined=D.party.map(m=>m.id);
          S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999};
          Object.values(G.LINKS).filter(l=>!l.secret&&!l.hidden&&!l.storyOnly).slice(0,9).forEach(l=>{if(!S.met.includes(l.id))S.met.push(l.id);G.progress(l.id).rank=Math.max(1,G.progress(l.id).rank||0)});
          G.save();FemcGameUI.evening();return true})()""")
        p.eval("document.querySelectorAll('.g-tip').forEach(t=>t.remove());FemcGame.S.tips.seen=['evening'];true")

        # ── The menu screen: nine groups, the Boutique plate, the menu tip ──
        click(p, '[data-ui=menu]')
        p.wait("!!document.querySelector('.g-fm-ov.is-home')")
        homes = p.eval("[...document.querySelectorAll('.g-fmh [data-home]')].map(b=>b.dataset.home)")
        ok(homes == ['party', 'personas', 'skills', 'equip', 'items', 'wardrobe', 'links', 'status', 'journal'], f'the menu screen lists nine groups: {homes}')
        ok(p.eval("document.querySelector('.g-fmh [data-home=journal] span').textContent")=='Records' and 'Cards' in p.eval("document.querySelector('.g-fmh [data-home=equip]').textContent"), 'Records names its group; Equipment shows Cards beside it')
        ok(p.eval("!!document.querySelector('.g-fmh [data-home-boutique]')"), 'the Boutique has its own plate on the menu screen')
        p.wait("!!document.querySelector('.g-tip[data-tip=menu]')", 5)
        ok(p.eval("document.querySelectorAll('.g-tip').length")==1 and p.eval("FemcGame.S.tips.seen.includes('menu')"), 'the menu tip shows once and is marked seen')
        shot(p, 'menu-tip-1440')
        # The tip never takes the keys: arrows still move the list under it.
        p.eval("document.querySelector('.g-fmh [data-home=party]').focus();true")
        p.ws.call('Input.dispatchKeyEvent', {'type': 'keyDown', 'key': 'ArrowDown', 'code': 'ArrowDown', 'windowsVirtualKeyCode': 40})
        p.ws.call('Input.dispatchKeyEvent', {'type': 'keyUp', 'key': 'ArrowDown', 'code': 'ArrowDown', 'windowsVirtualKeyCode': 40})
        ok(p.eval("document.querySelector('.g-fmh-list li.sel [data-home]').dataset.home")=='personas', 'keys still drive the list with a tip up')
        click(p, '.g-tip [data-tip-ok]'); p.wait("!document.querySelector('.g-tip')", 3)
        ok(True, 'Got it dismisses the tip')

        # ── Hover: a real mouse swept over the slanted list ──
        scan(p, '.g-fmh-list li', 'menu screen at 1440x900')
        # Keyboard moves the slash; a mouse that hasn't moved doesn't take it back.
        before = p.eval("document.querySelector('.g-fmh-list li.sel [data-home]').dataset.home")
        p.ws.call('Input.dispatchKeyEvent', {'type': 'keyDown', 'key': 'ArrowDown', 'code': 'ArrowDown', 'windowsVirtualKeyCode': 40})
        p.ws.call('Input.dispatchKeyEvent', {'type': 'keyUp', 'key': 'ArrowDown', 'code': 'ArrowDown', 'windowsVirtualKeyCode': 40})
        p.eval('new Promise(r=>setTimeout(r,200))')
        after = p.eval("document.querySelector('.g-fmh-list li.sel [data-home]').dataset.home")
        ok(after != before, f'a key press moves the slash and the resting mouse leaves it there ({before} → {after})')
        # A real click on a row (the right end of the strip, past the text) opens that group.
        r = p.eval("(()=>{const r=document.querySelector('.g-fmh [data-home=equip]').parentElement.getBoundingClientRect();return [r.left+r.width*.5,r.top+r.height*.5]})()")
        mclick(p, *r)
        p.wait("!document.querySelector('.g-fm-ov.is-home') && document.querySelector('.g-fm-ov [data-tab].on')?.dataset.tab==='equip'", 5)
        ok(p.eval("document.querySelector('[data-grp=equip]').classList.contains('in') && [...document.querySelectorAll('.g-fm-sub [data-tab]')].map(b=>b.dataset.tab).join()==='equip,cards'"), 'a click on the row opens Equipment; its strip has Equipment and Cards')
        click(p, '.g-fm-sub [data-tab=cards]')
        ok(p.eval("document.querySelector('.g-fm-ov [data-tab].on').dataset.tab")=='cards' and p.eval("document.querySelector('[data-grp=equip]').classList.contains('in')"), 'Cards opens from the second strip, its group stays lit')
        p.ws.call('Input.dispatchKeyEvent', {'type': 'keyDown', 'key': ']', 'code': 'BracketRight', 'text': ']', 'windowsVirtualKeyCode': 221})
        p.ws.call('Input.dispatchKeyEvent', {'type': 'keyUp', 'key': ']', 'code': 'BracketRight', 'windowsVirtualKeyCode': 221})
        ok(p.eval("document.querySelector('.g-fm-ov [data-tab].on').dataset.tab")=='items', '] steps on from Cards to Items (every tab, group order)')
        p.wait("!!document.querySelector('.g-tip[data-tip=cards]') || true")
        p.eval("document.querySelectorAll('.g-tip [data-tip-ok]').forEach(b=>b.click());true")
        click(p, '.g-fm-ov [data-fm-back]'); p.wait("!!document.querySelector('.g-fm-ov.is-home')")
        ok(p.eval("document.querySelector('.g-fmh-list li.sel [data-home]').dataset.home")=='items', 'Back lands on the open page\'s group')

        # ── The Boutique plate → the Wardrobe on its Boutique view; the Boutique tip ──
        click(p, '.g-fmh [data-home-boutique]')
        p.wait("document.querySelector('.g-fm-ov [data-tab].on')?.dataset.tab==='wardrobe' && !!document.querySelector('[data-wd-view=banner].on')", 5)
        ok(True, 'the Boutique plate opens the Wardrobe page on the Boutique')
        p.wait("!!document.querySelector('.g-tip[data-tip=boutique]')", 5)
        ok(True, 'the Boutique tip shows there')
        shot(p, 'boutique-1440')
        p.eval("document.querySelectorAll('.g-tip [data-tip-ok]').forEach(b=>b.click());true")
        click(p, '[data-wd-view=wardrobe]')
        p.wait("!!document.querySelector('.g-tip[data-tip=wardrobe]')", 5)
        ok(True, 'the Wardrobe tip shows on the Wardrobe view')
        p.eval("document.querySelectorAll('.g-tip [data-tip-ok]').forEach(b=>b.click());true")
        click(p, '.g-fm-ov [data-fm-back]'); p.wait("!!document.querySelector('.g-fm-ov.is-home')")

        # ── Links: the cards under a real mouse, and Bond perks from the Links page ──
        click(p, '.g-fmh [data-home=links]')
        p.wait("!!document.querySelector('.g-fm-ov.is-links .g-sl-cards li')")
        p.eval("document.querySelectorAll('.g-tip [data-tip-ok]').forEach(b=>b.click());true")
        top0 = p.eval("document.querySelector('.g-sl-cards').scrollTop")
        scan(p, '.g-sl-cards li', 'Links cards at 1440x900')
        ok(p.eval("document.querySelector('.g-sl-cards').scrollTop")==top0, 'hovering never scrolls the Links list')
        click(p, '[data-sl-bonds]')
        ok(p.eval("document.querySelector('.g-fm-ov [data-tab].on').dataset.tab")=='bonds' and p.eval("document.querySelector('[data-grp=links]').classList.contains('in')"), 'Bond perks opens from the Links page, in the Links group')
        p.eval("FemcMenu.close();new Promise(r=>setTimeout(r,300))")

        # ── Never mid-dialogue or over a fight: a tip waits until the screen is clear ──
        for blocker in ('gs', 'g-dh'):
            p.eval(f"(()=>{{const d=document.createElement('div');d.className='{blocker}';d.id='tip-block';document.body.appendChild(d);return true}})()")
            if blocker == 'gs': p.eval("FemcGameUI.openPhone();true")
            else: p.eval("FemcGame.S.tips.seen=FemcGame.S.tips.seen.filter(x=>x!=='phone');FemcGameUI.openPhone();true")
            p.eval('new Promise(r=>setTimeout(r,1200))')
            ok(p.eval("!document.querySelector('.g-tip')"), f'no tip while a {"scene" if blocker=="gs" else "fight"} is up')
            p.eval("document.getElementById('tip-block').remove();true")
            p.wait("!!document.querySelector('.g-tip[data-tip=phone]')", 5)
            ok(True, f'the phone tip shows once the {"scene" if blocker=="gs" else "fight"} is gone')
            p.eval("document.querySelectorAll('.g-tip [data-tip-ok]').forEach(b=>b.click());document.querySelectorAll('.g-phone-ov [data-close]').forEach(b=>b.click());new Promise(r=>setTimeout(r,400))")
        # A tip whose screen goes away goes with it.
        p.eval("FemcGame.S.tips.seen=FemcGame.S.tips.seen.filter(x=>x!=='phone');FemcGameUI.openPhone();true")
        p.wait("!!document.querySelector('.g-tip[data-tip=phone]')", 5)
        p.eval("document.querySelectorAll('.g-phone-ov [data-close]').forEach(b=>b.click());true")
        p.wait("!document.querySelector('.g-tip')", 5)
        ok(True, 'a tip leaves with its screen')

        # ── The Tips page and Settings → Tips ──
        p.eval("FemcMenu.open('tips');true"); p.wait("!!document.querySelector('.g-tips-page')")
        seen = p.eval("FemcGame.S.tips.seen.length")
        ok(p.eval("document.querySelectorAll('.g-tips-list li').length")>=seen>=5 and p.eval("document.querySelector('[data-grp=journal]').classList.contains('in')"), f'the Tips page (Records) lists the {seen} tips seen')
        shot(p, 'tips-page-1440')
        click(p, '[data-tips-toggle]')
        ok(p.eval('FemcTips.on()') is False and p.eval('FemcGame.S.tips.on') is False, 'the Tips page turns tips off')
        click(p, '[data-tips-toggle]')
        ok(p.eval('FemcTips.on()') is True, '… and back on')
        p.eval("FemcMenu.close();new Promise(r=>setTimeout(r,300))")
        p.eval("FemcGameUI.openSettings();true"); p.wait("!!document.querySelector('.g-settings-ov [data-k=gameTips]')")
        ok(p.eval("document.querySelector('[data-k=gameTips] b').textContent")=='On', 'Settings has Tips, showing On')
        click(p, '[data-k=gameTips] [data-d="1"]')
        ok(p.eval('FemcTips.on()') is False and p.eval("document.querySelector('[data-k=gameTips] b').textContent")=='Off', 'Settings turns tips off')
        click(p, '.g-settings-ov [data-close]'); p.wait("!document.querySelector('.g-settings-ov')")
        p.eval("FemcGame.S.tips.seen=FemcGame.S.tips.seen.filter(x=>x!=='shop');true")
        p.eval("FemcGameUI.openPhone();new Promise(r=>setTimeout(r,1000))")
        ok(p.eval("!document.querySelector('.g-tip')"), 'with tips off nothing shows')
        p.eval("document.querySelectorAll('.g-phone-ov [data-close]').forEach(b=>b.click());FemcTips.set(true);new Promise(r=>setTimeout(r,400))")
        # Turn tips off from the card itself
        p.eval("FemcGame.S.tips.seen=FemcGame.S.tips.seen.filter(x=>x!=='phone');FemcGameUI.openPhone();true")
        p.wait("!!document.querySelector('.g-tip[data-tip=phone]')", 5)
        click(p, '.g-tip [data-tip-off]')
        ok(p.eval('FemcTips.on()') is False, "the card's Turn tips off works")
        p.eval("document.querySelectorAll('.g-phone-ov [data-close]').forEach(b=>b.click());FemcTips.set(true);new Promise(r=>setTimeout(r,400))")

        # ── Phone size: the menu screen, the hover sweep, a tip ──
        size(p, 390, 844)
        p.eval("FemcGame.S.tips.seen=FemcGame.S.tips.seen.filter(x=>x!=='menu');FemcGame.S.phase='play';FemcGameUI.evening();true")
        p.eval("document.querySelectorAll('.g-tip').forEach(t=>t.remove());true")
        p.wait("!!document.querySelector('[data-ui=menu]')")
        click(p, '[data-ui=menu]'); p.wait("!!document.querySelector('.g-fm-ov.is-home')")
        p.wait("!!document.querySelector('.g-tip[data-tip=menu]')", 5)
        ok(p.eval('document.documentElement.scrollWidth<=innerWidth'), 'no sideways scroll on a phone')
        shot(p, 'menu-tip-390')
        p.eval("document.querySelectorAll('.g-tip [data-tip-ok]').forEach(b=>b.click());new Promise(r=>setTimeout(r,300))")
        scan(p, '.g-fmh-list li', 'menu screen at 390x844')
        p.eval("FemcMenu.close();new Promise(r=>setTimeout(r,300))")
        p.eval("FemcMenu.open('cards');true"); p.wait("!!document.querySelector('.g-fm-sub [data-tab=cards].on')")
        p.eval("document.querySelectorAll('.g-tip [data-tip-ok]').forEach(b=>b.click());true")
        ok(p.eval('document.documentElement.scrollWidth<=innerWidth'), 'a grouped page fits a phone')
        shot(p, 'cards-390')
        p.eval("FemcMenu.close();new Promise(r=>setTimeout(r,300))")

        # ── Without reduced motion (the entry slide and the slash animate) the sweep still holds ──
        size(p, 1440, 900)
        p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'no-preference'}]})
        click(p, '[data-ui=menu]'); p.wait("!!document.querySelector('.g-fm-ov.is-home')")
        p.eval('new Promise(r=>setTimeout(r,900))')
        scan(p, '.g-fmh-list li', 'menu screen with motion on')
        errors = p.console(); ok(not errors, f'no browser errors {errors[:3]}')
        # The record survives a save and load
        p.eval("FemcMenu.close();FemcGame.save();new Promise(r=>setTimeout(r,300))"); p.goto(URL)
        ok(p.eval("FemcGame.S.tips && FemcGame.S.tips.on===true && FemcGame.S.tips.seen.includes('menu')"), 'tips on/off and the seen list survive a reload')
        print(f'{N[0]} checks; screenshots in {OUT}', flush=True)
    except Exception:
        print('Browser errors:', p.console(), flush=True)
        raise
    finally:
        p.close()


if __name__ == '__main__': main()
