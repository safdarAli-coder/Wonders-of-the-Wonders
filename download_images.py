"""
Run this ONCE on your computer (with internet) to make the site work fully offline.
    python download_images.py
It downloads every Unsplash image into the images/ folder
and changes the links in index.html and js/script.js to use the local files.
"""
import re, os, urllib.request

PATTERN = re.compile(r'https://images\.unsplash\.com/(photo-[\w-]+)[^"\'`\s)]*')
FILES = ["index.html", "js/script.js"]

os.makedirs("images", exist_ok=True)
texts = {f: open(f, encoding="utf-8").read() for f in FILES}
ids = sorted({m.group(1) for t in texts.values() for m in PATTERN.finditer(t)})
print(f"Found {len(ids)} images")

for i, pid in enumerate(ids, 1):
    path = f"images/{pid}.jpg"
    if os.path.exists(path):
        continue
    try:
        req = urllib.request.Request(
            f"https://images.unsplash.com/{pid}?w=1600&q=80",
            headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r, open(path, "wb") as out:
            out.write(r.read())
        print(f"[{i}/{len(ids)}] saved {path}")
    except Exception as e:
        print(f"[{i}/{len(ids)}] FAILED {pid}: {e}")

for f, t in texts.items():
    t = PATTERN.sub(lambda m: f"images/{m.group(1)}.jpg" if os.path.exists(f"images/{m.group(1)}.jpg") else m.group(0), t)
    # js/script.js is inside js/, but pages load it from index.html, so paths stay relative to index.html
    open(f, "w", encoding="utf-8").write(t)
print("Done. Open index.html")
