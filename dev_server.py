from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import time


ROOT = Path(__file__).parent


def latest_change():
    return max(
        (path.stat().st_mtime_ns for path in ROOT.rglob("*") if path.is_file()),
        default=0,
    )


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/__changes":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(json.dumps({"version": latest_change()}).encode())
            return
        super().do_GET()


ThreadingHTTPServer(("0.0.0.0", 8000), Handler).serve_forever()
