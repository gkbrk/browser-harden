const optionsEl = document.querySelector("#options");

document.querySelector("#resetDefaults").addEventListener("click", async () => {
  await browser.storage.local.clear();
  window.location.reload(true);
});

(async () => {
  const savedValues = await browser.storage.local.get(null);

  for (let optEl of optionsEl.querySelectorAll(".option")) {
    const name = optEl.getAttribute("data-name");
    const defaultVal = optEl.getAttribute("data-default");
    const currentEl = optEl.querySelector(".current");

    const savedVal = savedValues[name];
    if (savedVal !== undefined) {
      currentEl.innerText = savedVal;
      currentEl.style.fontWeight = "bold";
    } else {
      currentEl.innerText = defaultVal;
    }

    optEl.querySelector(".toggle").addEventListener("click", async () => {
      const current = currentEl.innerText === "true" ? "false" : "true";
      currentEl.innerText = current;
      if (current !== defaultVal) {
        let obj = {};
        obj[name] = current;
        currentEl.style.fontWeight = "bold";
        await browser.storage.local.set(obj);
      } else {
        currentEl.style.fontWeight = "";
        await browser.storage.local.remove(name);
      }
    });
  }
})();
