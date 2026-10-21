"""Native keyboard regression: scene title, focused launchers, repeat keys and one-time completion."""
import json,time
from femc_browser import Page
p=Page()
def key(value='Enter',repeat=False):
 code='Space' if value==' ' else value;vk=32 if value==' ' else 13
 p.ws.call('Input.dispatchKeyEvent',{'type':'keyDown','key':value,'code':code,'windowsVirtualKeyCode':vk,'text':value if value==' ' else '\r','unmodifiedText':value if value==' ' else '\r','autoRepeat':repeat})
 if not repeat:p.ws.call('Input.dispatchKeyEvent',{'type':'keyUp','key':value,'code':code,'windowsVirtualKeyCode':vk})
def fixture(reduced=False):
 p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'reduce' if reduced else 'no-preference'}]})
 p.goto('femc-game.html?debug=1')
 # A fresh page load opens on the title's "Press any key" splash (947a461), which takes the first key as a player would.
 # Press start first, then focus the fixture launcher once the title menu has taken its own focus.
 p.wait('!!document.querySelector(".g-title.is-splash")');key()
 p.wait('!document.querySelector(".g-title.is-splash")&&document.activeElement?.matches?.(".g-title-menu button")')
 p.eval('''FemcGame.setSetting('text','instant');FemcGame.setSetting('auto','off');FemcGame.setSetting('music',0);window.starts=0;window.ends=[];window.effects=0;
 const b=document.createElement('button');b.id='key-launcher';b.textContent='Open test scene';document.body.append(b);b.addEventListener('click',()=>{starts++;window.handle=FemcScene.play({title:'Keyboard fixture',scene:[{n:'First line.'},{n:'Second line.'},{choose:[{t:'First option',notes:2,then:[{n:'First branch.'}]},{t:'Second option',notes:3,then:[{n:'Second branch.'}]}]},{n:'Last line.'}],onDone:r=>{ends.push(r);effects+=r.gained}})});b.focus();''')
def state():return p.eval('({starts,ends,effects,scenes:document.querySelectorAll(".gs:not(.out)").length,title:!!document.querySelector(".gs-title:not(.out)"),line:document.querySelector(".gs-text")?.textContent})')
def finish_fixture():
 for _ in range(15):
  if not state()['scenes']:break
  key()
 assert state()['ends']==[{'finished':True,'gained':2}],state()
 assert state()['effects']==2 and state()['starts']==1,state()
try:
 fixture();key();assert state()['title'] and state()['scenes']==1,state()
 assert p.eval('document.activeElement===document.querySelector(".gs")')
 for _ in range(8):key(repeat=True)
 assert state()['title'] and state()['starts']==1,state()
 key();assert not state()['title'] and state()['line']=='First line.',state()
 for _ in range(8):key(repeat=True)
 assert state()['line']=='First line.' and state()['starts']==1,state()
 # Even if focus is forced back underneath the modal, Enter cannot reactivate that button.
 p.eval('document.querySelector("#key-launcher").focus()');key();assert state()['starts']==1 and state()['line']=='Second line.',state()
 key();assert p.eval('document.activeElement===document.querySelector(".gs-choices button")')
 # Native button activation must still select exactly one choice.
 key();assert state()['line']=='First option',state();key();assert state()['line']=='First branch.',state()
 finish_fixture();p.eval('handle.close();handle.close()');assert len(state()['ends'])==1,state()
 time.sleep(2.5);assert state()['starts']==1 and len(state()['ends'])==1,state()
 fixture();key();key(' ');assert state()['line']=='First line.' and not state()['title'],state();finish_fixture()
 fixture();key();p.eval('document.querySelector(".gs-title").click()');assert state()['line']=='First line.',state();finish_fixture()
 fixture();key();p.wait('document.querySelector(".gs-text")?.textContent==="First line."');assert state()['starts']==1,state();finish_fixture()
 fixture(True);key();assert not state()['title'] and state()['line']=='First line.',state();finish_fixture()
 # Actual Social Link launch, all choices, rank-up and calendar return through real keyboard events.
 p.ws.call('Emulation.setEmulatedMedia',{'features':[{'name':'prefers-reduced-motion','value':'no-preference'}]});p.goto('femc-game.html?debug=1')
 p.eval('''FemcGame.newGame();FemcGame.S.phase='play';FemcGame.S.day=FemcGame.dayOf('9/16');FemcGame.S.slot='after';FemcGame.S.route.frags={R:9,S:9,H:9};FemcGame.setSetting('text','instant');FemcGame.setSetting('auto','off');FemcGame.setSetting('music',0);window.linkOpens=0;window.linkEnds=0;window.finishes=0;const play=FemcScene.play,finish=FemcGame.finishLink;FemcGame.finishLink=(...a)=>{finishes++;return finish(...a)};FemcScene.play=o=>{if(o.link==='hanni'){linkOpens++;const done=o.onDone;o={...o,onDone:r=>{linkEnds++;done(r)}}}return play(o)};FemcGameUI.goOut('after','mall');document.querySelector('[data-link=hanni]').focus();''')
 key();p.wait('!!document.querySelector(".gs-title")');key()
 for _ in range(200):
  active=p.eval('({scene:!!document.querySelector(".gs:not(.out)"),opens:linkOpens})');assert active['opens']==1,active
  if not active['scene']:break
  key()
 else:raise AssertionError('Actual link stuck')
 assert p.eval('FemcGame.progress("hanni").rank===1&&linkEnds===1&&finishes===1')
 time.sleep(1.8);key()
 assert p.eval('FemcGame.S.slot==="evening"&&FemcGame.progress("hanni").rank===1&&linkOpens===1&&linkEnds===1&&finishes===1')
 errors=p.console();assert not errors,errors
 print(json.dumps({'titleMethods':['Enter','Space','mouse','automatic timeout','reduced motion bypass'],'focusedLauncherProtected':True,'heldKeyProtected':True,'choiceKeyboardWorks':True,'completionAndRewardsOnce':True,'realHanniRankAndCalendarReturn':True,'browserErrors':errors}))
finally:p.close()
