"""Minimal CDP client (pure Python, no deps): launches headless Chrome, serves the repo, evaluates JS in femc-game.html."""
import base64, json, os, socket, struct, subprocess, sys, time, urllib.request, http.server, threading, functools, pathlib, tempfile

REPO = str(pathlib.Path(__file__).resolve().parents[1])
HTTP_PORT = 0
CDP_PORT = 0
CHROME = os.environ.get("CHROME", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")
PROFILE = None


class WS:
    def __init__(self, url):
        _, rest = url.split("://", 1)
        hostport, path = rest.split("/", 1)
        host, port = hostport.split(":")
        self.s = socket.create_connection((host, int(port)))
        key = base64.b64encode(os.urandom(16)).decode()
        req = (f"GET /{path} HTTP/1.1\r\nHost: {hostport}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\n"
               f"Sec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n")
        self.s.sendall(req.encode())
        buf = b""
        while b"\r\n\r\n" not in buf:
            buf += self.s.recv(4096)
        head, _, self.rest = buf.partition(b"\r\n\r\n")
        assert b" 101 " in head.split(b"\r\n")[0], head
        self.id = 0
        self.pending = {}
        self.events = []

    def _recv(self, n):
        out = b""
        if self.rest:
            take = self.rest[:n]; self.rest = self.rest[n:]; out += take
        while len(out) < n:
            chunk = self.s.recv(n - len(out))
            if not chunk:
                raise ConnectionError("closed")
            out += chunk
        return out

    def send(self, text):
        data = text.encode()
        mask = os.urandom(4)
        head = bytes([0x81])
        n = len(data)
        if n < 126: head += bytes([0x80 | n])
        elif n < 65536: head += bytes([0x80 | 126]) + struct.pack(">H", n)
        else: head += bytes([0x80 | 127]) + struct.pack(">Q", n)
        masked = bytes(b ^ mask[i % 4] for i, b in enumerate(data))
        self.s.sendall(head + mask + masked)

    def recv(self):
        msg = b""
        while True:
            b1, b2 = self._recv(2)
            fin = b1 & 0x80; op = b1 & 0x0F
            n = b2 & 0x7F
            if n == 126: n = struct.unpack(">H", self._recv(2))[0]
            elif n == 127: n = struct.unpack(">Q", self._recv(8))[0]
            if b2 & 0x80: self._recv(4)
            payload = self._recv(n)
            if op == 8: raise ConnectionError("ws close")
            if op == 9: continue  # ping; ignore
            msg += payload
            if fin: return msg.decode()

    def call(self, method, params=None, timeout=60):
        self.id += 1
        mid = self.id
        self.send(json.dumps({"id": mid, "method": method, "params": params or {}}))
        t0 = time.time()
        while True:
            m = json.loads(self.recv())
            if m.get("id") == mid:
                if "error" in m: raise RuntimeError(m["error"])
                return m.get("result", {})
            if "method" in m: self.events.append(m)
            if time.time() - t0 > timeout: raise TimeoutError(method)

    def drain(self, secs=0.3):
        self.s.settimeout(secs)
        try:
            while True:
                m = json.loads(self.recv())
                if "method" in m: self.events.append(m)
        except (socket.timeout, TimeoutError):
            pass
        finally:
            self.s.settimeout(None)


def serve():
    class QuietHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args): pass
        def handle(self):
            try: super().handle()
            except (BrokenPipeError, ConnectionResetError): pass
    handler = functools.partial(QuietHandler, directory=REPO)
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", HTTP_PORT), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


def launch(profile):
    os.makedirs(profile, exist_ok=True)
    p = subprocess.Popen([CHROME, "--headless=new", f"--remote-debugging-port={CDP_PORT}", f"--user-data-dir={profile}", "--remote-debugging-address=127.0.0.1", "--disable-background-networking",
                          "--no-first-run", "--mute-audio", "--autoplay-policy=no-user-gesture-required", "about:blank"],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(100):
        try:
            port = pathlib.Path(profile, "DevToolsActivePort").read_text().splitlines()[0]
            tabs = json.load(urllib.request.urlopen(f"http://127.0.0.1:{port}/json"))
            page = next(t for t in tabs if t["type"] == "page")
            return p, page["webSocketDebuggerUrl"]
        except Exception:
            time.sleep(0.2)
    raise RuntimeError("chrome did not start")


class Page:
    def __init__(self):
        self.srv = serve()
        self.profile = tempfile.TemporaryDirectory(prefix="femc-link-test-")
        self.proc, url = launch(self.profile.name)
        self.ws = WS(url)
        self.ws.call("Runtime.enable"); self.ws.call("Log.enable"); self.ws.call("Page.enable"); self.ws.call("Network.enable"); self.ws.call("Network.setCacheDisabled", {"cacheDisabled": True})

    def goto(self, path):
        self.ws.call("Page.navigate", {"url": f"http://127.0.0.1:{self.srv.server_port}/{path}"})
        self.wait("document.readyState === 'complete' && !!window.FemcGame && !!window.FemcScene")

    def wait(self, cond, timeout=30):
        t0 = time.time()
        while time.time() - t0 < timeout:
            if self.eval(cond): return True
            time.sleep(0.1)
        raise TimeoutError(cond)

    def eval(self, expr, timeout=120):
        r = self.ws.call("Runtime.evaluate", {"expression": expr, "awaitPromise": True, "returnByValue": True, "timeout": timeout * 1000}, timeout=timeout + 5)
        if "exceptionDetails" in r:
            raise RuntimeError(json.dumps(r["exceptionDetails"])[:2000])
        return r.get("result", {}).get("value")

    def console(self):
        self.ws.drain()
        out = []
        for e in self.ws.events:
            m = e["method"]
            if m == "Runtime.exceptionThrown":
                d = e["params"]["exceptionDetails"]
                out.append(("exception", d.get("text"), (d.get("exception") or {}).get("description")))
            elif m == "Runtime.consoleAPICalled" and e["params"]["type"] in ("error", "warning", "assert"):
                out.append((e["params"]["type"], " ".join(str(a.get("value", a.get("description"))) for a in e["params"]["args"])))
            elif m == "Log.entryAdded" and e["params"]["entry"]["level"] in ("error", "warning"):
                en = e["params"]["entry"]
                out.append(("log-" + en["level"], en.get("text"), en.get("url")))
        self.ws.events.clear()
        return out

    def close(self):
        try: self.ws.call("Browser.close", timeout=5)
        except Exception: pass
        if self.proc.poll() is None: self.proc.terminate()
        self.proc.wait(timeout=10)
        self.srv.shutdown(); self.srv.server_close(); self.profile.cleanup()
