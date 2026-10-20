"""Shared party/equipment menu integration test in a disposable browser profile.
Run: python3 tests/femc_menu.py
"""
import base64
import json
import pathlib
from femc_browser import Page
from femc_saves import URL, HELPERS, click, open_saves, close_saves, load


def open_menu(p, tab):
    p.eval('FemcMenu.open('+json.dumps(tab)+')')
    p.wait("!!document.querySelector('.g-fm-ov')")


def close_menu(p):
    click(p,'.g-fm-ov [data-close]')
    p.wait("!document.querySelector('.g-fm-ov')")


def equip(p, member, slot, item):
    click(p,'[data-eq="%s"]' % member)
    click(p,'[data-slot="%s"]' % slot)
    click(p,'[data-pick="%s"]' % item)
    assert p.eval('FemcBattleSave.eqOf(FemcGame.S.battleSave,'+json.dumps(member)+')['+json.dumps(slot)+']') == (item or None)


def enter(p):
    click(p,'[data-n=tartarus]')
    click(p,'.g-tt-ov [data-go]')
    p.wait("!!document.querySelector('.g-dh.live')")


def leave(p):
    p.eval("document.querySelector('.g-dh-iframe').contentDocument.querySelector('[data-go=dorm]').click()")
    p.wait("!document.querySelector('.g-dh') && !!document.querySelector('.g-results-ov')")
    click(p,'.g-results-ov [data-close]')
    p.wait("!document.querySelector('.g-results-ov') && FemcGame.S.slot==='late'")


def main():
    p=Page()
    try:
        p.ws.call('Emulation.setDeviceMetricsOverride',{'width':1280,'height':850,'deviceScaleFactor':1,'mobile':False})
        p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
        p.goto(URL); p.eval(HELPERS)
        p.eval('FemcGame.newGame(); saveFixture(1)')
        # Keep an earlier checkpoint for the selected-member fallback check.
        open_saves(p); click(p,'[data-save="2"]'); close_saves(p)
        gear=p.eval("""(()=>{
            const G=FemcGame,S=G.S,D=FEMC_BATTLE_DATA;
            S.day=G.dayOf('6/15'); S.joined=D.party.map(m=>m.id);
            const member=id=>D.party.find(m=>m.id===id);
            const weapon=id=>Object.keys(D.gear).find(k=>D.gear[k].slot==='weapon'&&D.gear[k].tier===1&&D.gear[k].wtype===member(id).wtype);
            const armor=Object.keys(D.gear).find(k=>D.gear[k].slot==='armor'&&D.gear[k].tier===1);
            const acc=Object.keys(D.gear).find(k=>D.gear[k].slot==='acc'&&D.gear[k].tier===1);
            const gear={solar:weapon('solar'),yukari:weapon('yukari'),armor,acc};
            S.gear=[...new Set(Object.values(gear))];
            G.save(); FemcGameUI.evening(); return gear;
        })()""")
        assert all(gear.values())
        p.eval('window.previousParty=FemcGame.S.tartarus.lastParty; FemcGame.S.tartarus.lastParty=null')
        click(p,'[data-n=tartarus]')
        assert p.eval("[...document.querySelectorAll('.g-tt-ov [data-m].on')].map(b=>b.dataset.m)")==p.eval("FemcGame.available().filter(id=>id!=='solar').slice(0,3)")
        click(p,'.g-tt-ov [data-close]'); p.wait("!document.querySelector('.g-tt-ov')")
        p.eval('FemcGame.S.tartarus.lastParty=window.previousParty')
        open_menu(p,'party')
        roster=p.eval("[...document.querySelectorAll('[data-pm]')].map(b=>b.dataset.pm)")
        assert len(roster)>=5, roster
        # Leader cannot be benched; four companions cannot join at once.
        initial=p.eval('FemcGame.S.battleSave.party')
        click(p,'[data-pm="solar"]')
        assert p.eval('FemcGame.S.battleSave.party')==initial
        for member in roster[1:]:
            if member not in p.eval('FemcGame.S.battleSave.party'):
                click(p,'[data-pm="%s"]' % member)
        assert len(p.eval('FemcGame.S.battleSave.party'))==3
        # Select a specific two-person team via real buttons.
        for member in list(p.eval('FemcGame.S.battleSave.party')):
            click(p,'[data-pm="%s"]' % member)
        click(p,'[data-pm="yukari"]'); click(p,'[data-pm="junpei"]')
        assert p.eval('FemcGame.S.tartarus.lastParty')==['solar','yukari','junpei']
        print('Party controls preserve the leader, enforce capacity, and save the chosen team.',flush=True)

        click(p,'[data-tab="equip"]')
        equip(p,'solar','weapon',gear['solar'])
        equip(p,'solar','acc',gear['acc'])
        equip(p,'solar','acc','')
        equip(p,'yukari','weapon',gear['yukari'])
        # One copy cannot be worn by two members. Unequipping makes it available.
        click(p,'[data-eq="yukari"]'); click(p,'[data-slot="armor"]')
        assert not p.eval('!!document.querySelector(\'[data-pick="'+gear['armor']+'"]\')')
        starter=p.eval("FEMC_BATTLE_DATA.startGear.solar.armor")
        equip(p,'solar','armor',starter)
        equip(p,'yukari','armor',gear['armor'])
        # A member should never be offered another weapon type.
        click(p,'[data-eq="junpei"]'); click(p,'[data-slot="weapon"]')
        assert p.eval("[...document.querySelectorAll('[data-pick]')].every(b=>FEMC_BATTLE_DATA.gear[b.dataset.pick].wtype===FEMC_BATTLE_DATA.party.find(m=>m.id==='junpei').wtype)")
        close_menu(p)
        chosen=p.eval('JSON.parse(JSON.stringify({party:FemcGame.S.battleSave.party,eq:FemcGame.S.battleSave.gear.eq}))')
        open_saves(p); click(p,'[data-save="1"]'); close_saves(p)
        p.goto(URL)
        click(p,'[data-t=load]'); load(p,1,title=True)
        assert p.eval('({party:FemcGame.S.battleSave.party,eq:FemcGame.S.battleSave.gear.eq})')==chosen
        enter(p)
        actual=p.eval("(()=>{const b=document.querySelector('.g-dh-iframe').contentWindow.FemcBattle.save;return {party:b.party,eq:b.gear.eq}})()")
        assert actual==chosen, (actual,chosen)
        leave(p)
        print('Equipment respects ownership and weapon types; party/equipment survive save, reload, and battle entry.',flush=True)

        # Earlier saves can have a smaller roster than the last menu selection.
        open_menu(p,'equip'); click(p,'[data-eq="mitsuru"]'); close_menu(p)
        open_saves(p); load(p,2)
        open_menu(p,'equip')
        assert p.eval("document.querySelector('[data-eq].on').dataset.eq")=='solar'
        click(p,'[data-slot="armor"]')
        click(p,'[data-pick="%s"]' % starter)
        assert p.eval("FemcBattleSave.eqOf(FemcGame.S.battleSave,'solar').armor")==starter, 'Equipment changed a stale member instead of the displayed one'
        close_menu(p)
        print('Loading an earlier roster equips the character currently displayed.',flush=True)

        # An intentionally solo party must not silently fill itself at the entrance.
        open_menu(p,'party')
        for member in list(p.eval('FemcGame.S.battleSave.party')):
            click(p,'[data-pm="%s"]' % member)
        close_menu(p)
        click(p,'[data-n=tartarus]')
        assert p.eval("[...document.querySelectorAll('.g-tt-ov [data-m].on')].length")==0, 'Solo selection was replaced at the entrance'
        click(p,'.g-tt-ov [data-go]'); p.wait("!!document.querySelector('.g-dh.live')")
        assert p.eval("document.querySelector('.g-dh-iframe').contentWindow.FemcBattle.save.party")==[]
        leave(p)
        print('Solo party selection reaches battle unchanged.',flush=True)

        # Visual/layout check without exposing any story content.
        shots=pathlib.Path('/private/tmp/femc-menu-check'); shots.mkdir(exist_ok=True)
        for width,height,name in [(1280,850,'desktop'),(390,844,'mobile')]:
            p.ws.call('Emulation.setDeviceMetricsOverride',{'width':width,'height':height,'deviceScaleFactor':1,'mobile':name=='mobile'})
            open_menu(p,'equip')
            assert p.eval('document.documentElement.scrollWidth <= innerWidth')
            p.wait("[...document.querySelectorAll('.g-fm-ov img')].every(img=>img.complete)")
            p.eval('new Promise(resolve=>setTimeout(resolve,300))')
            shot=p.ws.call('Page.captureScreenshot',{'format':'png'})
            (shots/(name+'.png')).write_bytes(base64.b64decode(shot['data']))
            close_menu(p)
        errors=p.console(); assert not errors,errors
        print('Desktop/mobile fit checked; no browser errors.',flush=True)
    except Exception:
        print('Browser errors:',p.console(),flush=True)
        raise
    finally:
        p.close()


if __name__=='__main__': main()
