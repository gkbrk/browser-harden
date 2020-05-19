#!/usr/bin/env python3
from pathlib import Path

print(
    """
<!DOCTYPE html>
<html>
<head>
<title>Options - Browser Harden</title>
</head>
<body>
<div>
<h3>Preferences</h3>
<p>You can tweak all the options here.</p>
<button id="resetDefaults">Reset defaults</button>
<hr />
</div>
<div id="options">
"""
)

for f in Path("content/").iterdir():
    with open(f) as f:
        values = {}
        for line in f:
            line = line.strip()
            if line.startswith("// "):
                line = line[3:]
                k, v = line.split(" ", 1)
                values[k] = v
            else:
                break
        print(
            f"""
<div class="option" data-name="{values["name"]}" data-default="{values["default"]}">
<p><b>{values["title"]}</b>
<span style="color: gray; font-size: 0.8em;">({values["name"]})</span></p>
<p>{values["desc"]}</p>
<p>Current value: <span class="current"></span>
<button class="toggle">Toggle</button>
</p>
<hr>
</div>
"""
        )


print(
    """
</div>
<script src="options.js"></script>
</body>
</html>
"""
)
