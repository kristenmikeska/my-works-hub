const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function loadHub(stored = {}) {
  const context = vm.createContext({
    Intl, URL, Date,
    document: {querySelector: () => null, querySelectorAll: () => []},
    window: {addEventListener() {}},
    localStorage: {getItem: key => stored[key] ?? null}
  });
  vm.runInContext(fs.readFileSync(path.join(root,'worlds-data.js'),'utf8'),context);
  vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8'),context);
  return expression => vm.runInContext(expression,context);
}
test('combined discovery filters narrow results and reset restores all worlds', () => {
  const run = loadHub();
  assert.equal(run('worlds.length'),13);
  run('filterState.tag = "Arranged marriage"');
  assert.equal(run('worlds.filter(worldMatches).map(w => w.id).join(",")'),'strangers');
  run('filterState.status = "Completed"');
  assert.equal(run('worlds.filter(worldMatches).length'),0);
  run('Object.assign(filterState,{q:"",tag:"all",status:"all",universe:"all"})');
  assert.equal(run('worlds.filter(worldMatches).length'),13);
  run('filterState.q = "under revision"');
  assert.equal(run('worlds.filter(worldMatches).map(w => w.id).sort().join(",")'),'casual,havenbrook');
});
test('old bookmarks remain readable and malformed bookmarks are ignored', () => {
  const stored = {
    'kg-reading-runners': JSON.stringify({idx:12,percent:28,title:'13: saved chapter'}),
    'kg-reading-peace': '{broken',
    'kg-reading-secret': JSON.stringify({idx:-1,percent:50}),
    'kg-reading-hoax': JSON.stringify({idx:2,percent:150})
  };
  const run = loadHub(stored);
  assert.equal(run('getProgress("runners").idx'),12);
  for (const slug of ['peace','secret','hoax']) assert.equal(run(`getProgress("${slug}")`),null);
  assert.equal(run('escapeHtml("<img onerror=alert(1)>")'),'&lt;img onerror=alert(1)&gt;');
});
test('catalog images and readers resolve, with explicit recent-update metadata', () => {
  const run = loadHub();
  const worlds = JSON.parse(run('JSON.stringify(worlds)'));
  assert.equal(new Set(worlds.map(w=>w.id)).size,worlds.length);
  for (const world of worlds) {
    for (const file of [world.image, world.worldImage, ...world.readers.map(r=>r[1])].filter(Boolean)) {
      assert.ok(fs.existsSync(path.join(root,file)),`${world.id}: missing ${file}`);
    }
    assert.ok(world.tags.length > 0);
    if (world.latestUpdate) {
      assert.match(world.latestUpdate.date,/^\d{4}-\d{2}-\d{2}$/);
      assert.ok(world.latestUpdate.idx < world.chapters);
      assert.ok(world.latestUpdate.chapter);
    }
  }
});
test('paused readers still contain notices and no story prose', () => {
  for (const slug of ['havenbrook','casual']) {
    const html = fs.readFileSync(path.join(root,`readers/${slug}.html`),'utf8');
    assert.match(html,/temporarily unavailable to read/);
    assert.doesNotMatch(html,/reader-nav\.js|class="p2"/);
  }
});
