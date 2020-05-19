#!/usr/bin/env python3
from pathlib import Path

print(
    """
browser.storage.local.get(null).then((settings) => {
  const script = document.createElement("script");

  function toggleFeature(name, defaultValue, f) {
    const setting = settings[name];
    if (
      (setting === undefined && defaultValue === "true") ||
      setting === "true"
    ) {
      const code = "try{(" + f.toString() + ")();}catch (e) {console.log(e);}";
      script.textContent += code;
    }
  }
"""
)


for f in Path("content/").iterdir():
    with open(f) as f:
        values = {}
        code = ""
        metaDone = False
        for line in f:
            if not metaDone:
                if line.startswith("// "):
                    line = line[3:]
                    k, v = line.strip().split(" ", 1)
                    values[k] = v
                else:
                    metaDone = True
            else:
                code += line
        print(
            f"""
toggleFeature("{values["name"]}", "{values["default"]}", () => {{
{code}
}});
"""
        )

print(
    """
  const root = document.head || document.documentElement;
  root.prepend(script);
  //script.remove();
});
"""
)
