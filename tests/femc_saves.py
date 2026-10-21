"""Save-slot integration checks using an isolated Chrome profile and localhost.

Run: python3 tests/femc_saves.py
Fixtures set up three distinct checkpoints; saving, loading, and entering/returning
from Tartarus use the real UI. No player saves are read or modified.
"""
import json
from femc_browser import Page

URL = 'femc-game.html?seed=42&speed=4'
BATTLE_FIELDS = ['lvl', 'exp', 'pts', 'nodes', 'known', 'party', 'mem', 'tactics',
                 'gear', 'mats', 'reached', 'memories', 'form', 'forms', 'ops', 'th']
HELPERS = r"""(()=>{
    window.saveSnapshot = s => {
        const copy=JSON.parse(JSON.stringify(s));
        for (const k of ['savedAt','playMinutes','battleAt']) delete copy[k];
        return copy;
    };
    window.saveFixture = n => {
        const G=FemcGame,S=G.S,D=FEMC_BATTLE_DATA;
        S.phase='play'; S.started=true; S.day=G.dayOf('5/'+(12+n)); S.slot='evening';
        S.events=G.D.events.map(e=>e.id); S.spent={}; S.pending=null;
        S.unlocked.tartarus=true; S.flags.armband=true;
        S.joined=['solar','yukari','junpei','akihiko'];
        S.yen=6000+n*123; S.inventory={medicine:n+2}; S.condition='good';
        S.stats.knowledge=10+n; S.stats.charm=20+n; S.stats.courage=30+n; S.stats.proficiency=40+n; S.stats.kindness=50+n;
        // Keep scheduled story scenes from interrupting these isolated save checks.
        S.dailyLife={seen:G.D.dailyLife.map(e=>e.id),lastDay:999}; S.lateNights={seen:[],lastDay:999}; S.runIns={seen:G.D.runIns.map(e=>e.id),lastDay:999,later:[]};
        for (const l of Object.values(G.LINKS)) {
            if (l.forced?.length) G.progress(l.id).rank=Math.max(...l.forced);
        }
        Object.assign(G.progress('mark'),{rank:n,bond:n*3});
        S.tartarus.maxFloor=5; S.tartarus.nights=n; S.tartarus.bosses=['priestess'];
        const b=FemcBattleSave.normalize(FemcBattleSave.fresh());
        // The story links above sit at MAX: their one-time bond gifts count as received, so a fight doesn't change the points.
        b.bondGifts=(window.FemcBuild?FemcBuild.PERKS.filter(x=>x.fx.gift).map(x=>x.id):[]);
        b.lvl=10+n; b.exp=20*n; b.pts=3*n; b.nodes=['sun1','bell1','star1'].slice(0,n);
        b.party=n===2?['junpei']:['yukari']; S.tartarus.lastParty=['solar',...b.party];
        b.mem.yukari={lvl:9+n,exp:11*n}; b.mem.junpei={lvl:8+n,exp:12*n};
        b.tactics.yukari='heal'; b.reached=D.floors.find(f=>f.bi===0).id;
        b.yen=S.yen; b.items={...S.inventory}; b.ops.cleared=[...S.tartarus.bosses];
        const armor=Object.keys(D.gear).find(k=>D.gear[k].slot==='armor'&&D.gear[k].tier===1);
        S.gear=[armor]; b.gear.owned[armor]=1;
        FemcBattleSave.equip(b,'solar','armor',armor);
        S.battleSave=FemcBattleSave.normalize(b); G.save();
        if (G.dueEvent()) throw new Error('Fixture has a scheduled scene');
        FemcGameUI.evening();
        return saveSnapshot(S);
    };
})()"""


def click(p, selector):
    p.wait('!!document.querySelector('+json.dumps(selector)+')')
    p.eval('document.querySelector('+json.dumps(selector)+').click()')


def open_saves(p):
    p.eval('FemcGameUI.openSaves()')
    p.wait("!!document.querySelector('.g-saves-ov')")


def close_saves(p):
    click(p, '.g-saves-ov [data-close]')
    p.wait("!document.querySelector('.g-saves-ov')")


def load(p, n, title=False):
    click(p, '[data-load="%d"]' % n)
    if not title:
        assert p.eval('document.querySelector(\'[data-load="%d"]\').textContent' % n) == 'Load it?'
        click(p, '[data-load="%d"]' % n)
    p.wait("!document.querySelector('.g-saves-ov')")


def main():
    p=Page()
    try:
        p.ws.call('Emulation.setEmulatedMedia', {'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
        p.goto(URL)
        p.eval(HELPERS)
        # Sentinel saves belong only to this disposable test profile.
        legacy={'kg-femc-game':'{"test":"v1 untouched"}',
                'kg-femc-battle-proto':'{"v":4,"lvl":77,"test":"practice untouched"}'}
        for k,v in legacy.items():
            p.eval('localStorage.setItem('+json.dumps(k)+','+json.dumps(v)+')')
        p.eval('FemcGame.newGame()')
        expected={}
        for n in (1,2,3):
            expected[n]=p.eval('saveFixture(%d)' % n)
            open_saves(p)
            click(p, '[data-save="%d"]' % n)
            assert p.eval('saveSnapshot(FemcGame.readSlot(%d).state)' % n)==expected[n]
            label=p.eval('document.querySelector(\'[data-load="%d"]\').closest(".g-slot").textContent' % n)
            assert '5/%d' % (12+n) in label and 'Solar Lv %d' % (10+n) in label
            close_saves(p)
        print('All three UI save slots contain the complete story and battle state.', flush=True)

        # Merely arming an overwrite or load, then cancelling, must change nothing.
        open_saves(p)
        click(p,'[data-save="1"]')
        assert p.eval('saveSnapshot(FemcGame.readSlot(1).state)')==expected[1]
        close_saves(p)
        open_saves(p)
        click(p,'[data-load="1"]')
        assert p.eval('saveSnapshot(FemcGame.S)')==expected[3]
        close_saves(p)

        for n in (1,3,2):
            open_saves(p); load(p,n)
            assert p.eval('saveSnapshot(FemcGame.S)')==expected[n], ('load',n)
            assert p.eval('saveSnapshot(JSON.parse(localStorage.getItem(FemcGame.KEY)))')==expected[n]
        print('Switching slots restores both halves and updates the autosave; cancelled actions preserve them.', flush=True)

        # Actual page reload and title-menu loading, with newer progress in the autosave.
        p.goto(URL); p.eval(HELPERS)
        click(p,'[data-t=continue]')
        assert p.eval('saveSnapshot(FemcGame.S)')==expected[2]
        p.goto(URL); p.eval(HELPERS)
        click(p,'[data-t=load]'); load(p,1,title=True)
        assert p.eval('saveSnapshot(FemcGame.S)')==expected[1]

        # Enter the embedded battle from each loaded checkpoint. It must use that
        # slot's party, tree, equipment, level, money and inventory, not the last run.
        for n in (1,2,3):
            if n!=1:
                open_saves(p); load(p,n)
            click(p,'[data-n=tartarus]'); click(p,'.g-tt-ov [data-go]')
            p.wait("!!document.querySelector('.g-dh.live')")
            battle=p.eval("JSON.parse(JSON.stringify(document.querySelector('.g-dh-iframe').contentWindow.FemcBattle.save))")
            for key in BATTLE_FIELDS:
                assert battle[key]==expected[n]['battleSave'][key], ('battle',n,key)
            assert battle['yen']==expected[n]['yen'] and battle['items']==expected[n]['inventory']
            p.eval("document.querySelector('.g-dh-iframe').contentDocument.querySelector('[data-go=dorm]').click()")
            p.wait("!document.querySelector('.g-dh') && !!document.querySelector('.g-results-ov')")
            click(p,'.g-results-ov [data-close]')
            p.wait("!document.querySelector('.g-results-ov') && FemcGame.S.slot==='late'")
            # Autosave changed on return, but the saved checkpoint must remain intact.
            assert p.eval('saveSnapshot(FemcGame.readSlot(%d).state)' % n)==expected[n]
            print('Slot %d supplies its own battle progress and remains intact after returning.' % n, flush=True)

        # Confirmed overwrite replaces the entire snapshot, not just one half.
        expected_overwrite=p.eval('saveSnapshot(FemcGame.S)')
        open_saves(p)
        click(p,'[data-save="1"]'); click(p,'[data-save="1"]')
        assert p.eval('saveSnapshot(FemcGame.readSlot(1).state)')==expected_overwrite
        for n in (2,3):
            assert p.eval('saveSnapshot(FemcGame.readSlot(%d).state)' % n)==expected[n]
        close_saves(p)
        for k,v in legacy.items():
            assert p.eval('localStorage.getItem('+json.dumps(k)+')')==v
        errors=p.console()
        assert not errors, errors
        print('Overwrite is isolated; legacy/practice saves unchanged; no browser errors.', flush=True)
    except Exception:
        print('Failure context:', p.eval("({phase:FemcGame.S.phase,slot:FemcGame.S.slot,day:FemcGame.S.day,main:document.querySelector('main')?.className,layers:[...document.querySelectorAll('.g-overlay,.gs,.g-dh')].map(x=>x.className)})"), flush=True)
        print('Browser errors:', p.console(), flush=True)
        raise
    finally:
        p.close()


if __name__=='__main__': main()
