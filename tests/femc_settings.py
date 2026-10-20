"""Shared settings UI and scene/battle integration, in an isolated Chrome profile.
Run: python3 tests/femc_settings.py
"""
import json
from femc_browser import Page
from femc_saves import HELPERS, click, open_saves, close_saves, load
from femc_menu import enter, leave
from femc_merge import drive, BSTEP

URL='femc-game.html?seed=42'  # No speed override: exercise the actual setting.
FIRST=dict(text='fast',auto='slow',dateCard=False,quickClass=True,difficulty='hard',
           battleSpeed=3,cutins='off',rushWhere='all',rushStop=50,remember=False,
           numbers=False,tips=False,shake=False,calm=True,perf=True,pad='ps',
           music=35,sfx=False,sfxVol=25)
SECOND=dict(text='instant',auto='off',dateCard=True,quickClass=False,difficulty='story',
            battleSpeed=2,cutins='always',rushWhere='strong',rushStop=30,remember=True,
            numbers=True,tips=True,shake=True,calm=False,perf=False,pad='auto',
            music=0,sfx=True,sfxVol=80)
FRAME="document.querySelector('.g-dh-iframe').contentWindow"


def settings(p, values):
    for key,value in values.items():
        row='[data-k="%s"]' % key
        slider=row+' input[type=range]'
        if p.eval('!!document.querySelector('+json.dumps(slider)+')'):
            p.eval('(()=>{const el=document.querySelector('+json.dumps(slider)+');el.value='+json.dumps(value)+';el.dispatchEvent(new Event("input",{bubbles:true}))})()')
        else:
            for _ in range(5):
                if p.eval('FemcGame.settings()['+json.dumps(key)+']')==value: break
                click(p,row+' [data-d="1"]')
        assert p.eval('FemcGame.settings()['+json.dumps(key)+']')==value,key


def close_settings(p):
    click(p,'.g-settings-ov [data-close]')
    p.wait("!document.querySelector('.g-settings-ov')")


def assert_shared(p, expected):
    stored=p.eval("JSON.parse(localStorage.getItem('kg-femc-revamp-settings'))")
    for key,value in expected.items():
        assert p.eval('FemcGame.settings()['+json.dumps(key)+']')==value,key
        assert stored[key]==value,key


def assert_battle(p,expected):
    b=p.eval('JSON.parse(JSON.stringify('+FRAME+'.FemcBattle.save))')
    for key in ('difficulty','rushWhere','rushStop','remember','numbers','tips','shake','calm','pad','sfxVol'):
        assert b['settings'][key]==expected[key],key
    assert b['settings']['textSpeed']==expected['text']
    assert b['speed']==expected['battleSpeed']
    for key in ('cutins','perf','sfx'): assert b[key]==expected[key],key
    assert b['music']==(expected['music']>0)
    assert b['settings']['musicVol']==(expected['music'] or 35)
    css=p.eval(FRAME+".document.documentElement.className")
    assert ('bt-perf' in css)==expected['perf']
    assert ('bt-calm' in css)==expected['calm']
    assert ('bt-noshake' in css)==(not expected['shake'])


def main():
    p=Page()
    try:
        # Observe real audio elements without changing playback behavior.
        p.ws.call('Page.addScriptToEvaluateOnNewDocument',{'source':"window.__settingsAudio=[];window.Audio=class extends window.Audio {constructor(...args){super(...args);window.__settingsAudio.push(this)}}"})
        p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
        p.goto(URL);p.eval(HELPERS)
        p.eval('FemcGame.newGame();saveFixture(1)')
        open_saves(p);click(p,'[data-save="1"]');close_saves(p)
        p.eval('FemcGameUI.openSettings()');settings(p,FIRST);close_settings(p)
        assert_shared(p,FIRST)
        assert p.eval('FemcGame.textDelay()')==10
        p.wait("__settingsAudio.some(a=>a.loop&&!a.paused&&Math.abs(a.volume-.175)<.001)")
        enter(p);assert_battle(p,FIRST)
        p.wait("__settingsAudio.filter(a=>a.loop&&!a.paused).every(a=>a.volume===0)")
        print('All 19 settings save through the UI and carry from the story into battle.',flush=True)

        # Battle opens the same parent panel and restores its previous controls afterward.
        p.eval(FRAME+".document.querySelector('[data-tool=settings]').click()")
        p.wait("!!document.querySelector('.g-settings-ov.g-over-battle')")
        assert p.eval(FRAME+'.FemcBattle.paused')==1
        assert p.eval(FRAME+'.FemcBattle.ctl.kind')=='settings'
        assert p.eval("document.querySelectorAll('.g-settings-ov').length")==1
        settings(p,SECOND);close_settings(p)
        assert p.eval(FRAME+'.FemcBattle.paused')==0
        assert p.eval(FRAME+'.FemcBattle.ctl.kind')!='settings'
        assert_shared(p,SECOND);assert_battle(p,SECOND)
        p.wait(FRAME+'.__settingsAudio.filter(a=>a.loop&&!a.paused).every(a=>a.muted||a.volume===0)')

        # Battle toolbar toggles must update the shared preferences too.
        for enabled in (True,False):
            p.eval(FRAME+".document.querySelector('[data-tool=music]').click()")
            assert p.eval('FemcGame.settings().music')==(35 if enabled else 0)
        for enabled in (False,True):
            p.eval(FRAME+".document.querySelector('[data-tool=sfx]').click()")
            assert p.eval('FemcGame.settings().sfx')==enabled
            assert p.eval("localStorage.getItem('kg-femc-sound')")== (None if enabled else 'off')
        leave(p);assert_shared(p,SECOND)
        p.wait("__settingsAudio.filter(a=>a.loop&&!a.paused).every(a=>a.volume===0)")
        print('Battle settings pause/resume correctly; audio toggles and preferences return to the story.',flush=True)

        open_saves(p);load(p,1);assert_shared(p,SECOND)
        p.goto(URL);click(p,'[data-t=continue]');assert_shared(p,SECOND)
        enter(p);assert_battle(p,SECOND);leave(p)
        print('Current preferences survive loading an older slot, page reload, and the next battle.',flush=True)

        # Use an existing protected battle to test a live command menu without story spoilers.
        p.eval("FemcGame.makeHandoff('scripted',{script:'prologue-1',segment:2,forced:true});FemcGameUI.run()")
        p.wait("!!document.querySelector('.g-dh.live')")
        drive(p,BSTEP,FRAME+".FemcBattle.screen()==='battle' && "+FRAME+".FemcBattle.ctl?.kind==='menu'")
        p.eval(FRAME+".__previousSettingsCtl="+FRAME+".FemcBattle.ctl;"+FRAME+".document.querySelector('[data-tool=settings]').click()")
        p.wait("!!document.querySelector('.g-settings-ov.g-over-battle')")
        assert p.eval(FRAME+'.FemcBattle.paused')==1
        before=p.eval('JSON.stringify('+FRAME+'.FemcBattle.B)')
        p.eval('new Promise(resolve=>setTimeout(resolve,500))')
        assert p.eval('JSON.stringify('+FRAME+'.FemcBattle.B)')==before
        settings(p,{'battleSpeed':3});close_settings(p)
        assert p.eval(FRAME+'.FemcBattle.paused')==0
        assert p.eval(FRAME+'.FemcBattle.ctl === '+FRAME+'.__previousSettingsCtl')
        assert p.eval(FRAME+".document.querySelector('[data-tool=speed]').textContent.includes('3x')")
        drive(p,BSTEP,"!document.querySelector('.g-dh')")
        assert p.eval('!FemcGame.S.handoff')
        print('An active fight pauses, restores its command menu, applies speed changes, and finishes normally.',flush=True)

        # An already-open scene must observe Auto changed through the shared settings.
        p.eval("window.__settingsSceneDone=false;FemcScene.play({scene:[{n:'Settings check.'},{n:'Second test line.'}],onDone:()=>{window.__settingsSceneDone=true}})")
        p.eval('FemcGameUI.openSettings()');settings(p,{'auto':'fast'});close_settings(p)
        p.wait("document.querySelector('.gs [data-t=auto]')?.getAttribute('aria-pressed')==='true'",timeout=3)
        p.wait('window.__settingsSceneDone',timeout=10)
        p.wait("!document.querySelector('.gs')")
        # Disabling Auto must stop the current scene as well.
        p.eval("FemcScene.play({scene:[{n:'This test line should wait.'},{n:'Final test line.'}]});FemcGameUI.openSettings()")
        settings(p,{'auto':'off'});close_settings(p)
        p.wait("document.querySelector('.gs [data-t=auto]')?.getAttribute('aria-pressed')==='false'",timeout=3)
        p.eval('new Promise(resolve=>setTimeout(resolve,1800))')
        assert p.eval("document.querySelector('.gs-text').textContent")=='This test line should wait.'
        print('Changing Auto in settings updates the currently open scene in both directions.',flush=True)
        errors=p.console();assert not errors,errors
        print('No browser errors.',flush=True)
    except Exception:
        print('Browser errors:',p.console(),flush=True)
        raise
    finally:
        p.close()


if __name__=='__main__': main()
