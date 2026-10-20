"""Embedded-battle smoke test, using an isolated Chrome profile and local server.
Run: python3 tests/femc_merge.py (no third-party packages).
"""
import json, time
from femc_browser import Page

STEP = r"""(()=>{
  if (document.querySelector('.g-dh')) return 'battle';
  const c = document.querySelector('.gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
  const o = document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard'); if (o) { o.click(); return 'card'; }
  const ov = document.querySelector('.g-overlay:not(.out)'); if (ov) { const b = ov.querySelector('[data-close], .g-btn.pink, button'); if (b) { b.click(); return 'overlay:' + (b.textContent||'').trim().slice(0,20); } }
  const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
  return 'idle';
})()"""
BSTEP = r"""(()=>{
  const f = document.querySelector('.g-dh-iframe'); if (!f || !f.contentWindow || !f.contentWindow.FemcBattle) return 'no-frame';
  const W = f.contentWindow, F = W.FemcBattle, d = W.document;
  const tip = d.querySelector('.bt-tip [data-ok]'); if (tip) { tip.click(); return 'tip'; }
  const ctl = F.ctl;
  if (ctl) {
    if (ctl.kind === 'menu' && ctl.items) {
      const want = ['attack', 'guard'].find(v => ctl.items.some(it => it.v === v && !it.off));
      if (want && ctl.items.some(it => it.v === 'attack' || it.v === 'skill')) { ctl.pickValue(want); return 'cmd:' + want; }
      const ok = ctl.items.find(it => !it.off); if (ok) { ctl.pickValue(ok.v); return 'pick:' + ok.v; }
      return 'menu-stuck';
    }
    if (ctl.kind === 'map') { ctl.pick(); return 'map'; }
    if (ctl.kind === 'buttons') { const sel = d.querySelector('.bt-btn.on') || d.querySelector('.bt-btn:not(:disabled)'); if (sel) { sel.click(); return 'btn:' + (sel.textContent||'').trim().slice(0,24); } }
    ctl.pick(); return 'pick:' + ctl.kind;
  }
  const b = d.querySelector('.bt-btn.pink:not(:disabled), .bt-btn:not(:disabled)'); if (b) { b.click(); return 'click:' + (b.textContent||'').trim().slice(0,24); }
  return 'wait:' + F.screen();
})()"""


def drive(p, step, until, limit=1200):
    for i in range(limit):
        if p.eval(until): return
        p.eval(step)
        time.sleep(.10)
    raise AssertionError('Timed out: ' + until)


def main():
    p = Page()
    try:
        p.ws.call('Emulation.setEmulatedMedia', {'features':[{'name':'prefers-reduced-motion','value':'reduce'}]})
        p.goto('femc-game.html?seed=42&speed=4')
        p.eval("window.__pageToken='unchanged'; document.querySelector('[data-t=new]').click()")
        p.eval("window.__returns=[]; const originalFinish=FemcBridge.finish; FemcBridge.finish=r=>{__returns.push(r.outcome); return originalFinish(r)}")
        for segment in (1,2):
            drive(p, STEP, "!!document.querySelector('.g-dh')")
            p.wait("!!document.querySelector('.g-dh.live')")
            assert p.eval('FemcGame.S.handoff.request.segment') == segment
            assert p.eval("!!document.querySelector('.gs:not(.out)') && FemcGame.S.pending.snap.queue.length > 0")
            p.eval("""window.__expectedLine=(()=>{const line=FemcGame.S.pending.snap.queue.find(l=>l.n!==undefined||l.t!==undefined); const el=document.createElement('div'); el.innerHTML=FemcGame.sub(line.n??line.t); return el.textContent})()""")
            drive(p, BSTEP, "!document.querySelector('.g-dh')")
            p.wait("document.querySelector('.gs-text')?.textContent === window.__expectedLine")
            assert p.eval("!!document.querySelector('.gs:not(.out)') && !FemcGame.S.handoff && !document.documentElement.classList.contains('g-in-battle')")
            assert p.eval('window.__pageToken') == 'unchanged'
            print('Embedded battle %s returned to the scene without navigation.' % segment, flush=True)
        assert p.eval('window.__returns') == ['interrupt','win']
        drive(p, STEP, "FemcGame.S.phase === 'play'")
        assert p.eval('!!FemcGame.S.battleSave && !FemcGame.S.pending')
        print('Reached the first playable day.', flush=True)

        # Reproduce a reload after rewards are saved but before the handoff is cleared.
        # A controlled result tests accounting independently of randomized combat rewards.
        check = p.eval("""(()=>{
            const G=FemcGame, h=G.makeHandoff('tartarus',{});
            const r={outcome:'win',yenDelta:73,exp:{solar:19},items:{medicine:2},fatigue:'tired'};
            G.finishHandoff(r);
            const before={yen:G.S.yen,exp:G.S.battle.exp.solar||0,items:G.S.inventory.medicine||0,nights:G.S.tartarus.nights};
            const first=G.applyResult(h,r);
            const saved=localStorage.getItem(G.KEY);
            G.importCode(saved);
            const again=G.applyResult(G.S.handoff,G.S.handoff.result);
            const after={yen:G.S.yen,exp:G.S.battle.exp.solar||0,items:G.S.inventory.medicine||0,nights:G.S.tartarus.nights};
            return {before,after,first,again};
        })()""")
        for key, delta in [('yen',73),('exp',19),('items',2),('nights',1)]:
            assert check['after'][key]-check['before'][key] == delta, (key,check)
        assert check['first']==check['again']
        # Also reload the real page and let Continue consume the saved result through the UI.
        p.goto('femc-game.html?seed=42&speed=4')
        p.eval("document.querySelector('[data-t=continue]').click()")
        p.wait("!FemcGame.S.handoff && !!document.querySelector('.g-results')")
        restored=p.eval("({yen:FemcGame.S.yen,exp:FemcGame.S.battle.exp.solar,items:FemcGame.S.inventory.medicine,nights:FemcGame.S.tartarus.nights})")
        assert restored == check['after'], (restored,check['after'])
        p.eval("document.querySelector('.g-results-ov [data-close]').click()")
        p.wait("!document.querySelector('.g-results-ov')")
        print('Recovered rewards apply exactly once, including after page reload and Continue.', flush=True)
        for key in ['kg-femc-game','kg-femc-battle-proto','kg-femc-handoff','kg-femc-revamp-battle']:
            assert p.eval('localStorage.getItem('+json.dumps(key)+')') is None, key
        errors=p.console()
        assert not errors, errors
        print('Legacy/practice saves untouched; no browser errors.', flush=True)
    finally:
        p.close()

if __name__ == '__main__': main()
