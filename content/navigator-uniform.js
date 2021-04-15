// name navigator.uniform
// default true
// title Navigator wrapper
// desc Present a uniform navigator interface

const origNav = window.navigator;

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
let nav = {};

function makeGetter(name, f) {
  try {
    Object.defineProperty(nav, name, {
      get: f,
      enumerable: true,
    });
  } catch {}
}

let plugArray = {};
Object.defineProperty(plugArray, "length", { get: () => 0 });
Object.defineProperty(plugArray, "item", { get: () => (x) => null });
Object.defineProperty(plugArray, "namedItem", { get: () => (x) => null });
Object.defineProperty(plugArray, "refresh", { get: () => () => null });

let ua = "Mozilla/5.0 (X11; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0";

makeGetter("appCodeName", () => "Mozilla");
makeGetter("appName", () => "Netscape");
makeGetter("appVersion", () => "5.0 (X11)");
makeGetter("cookieEnabled", () => true);
makeGetter("credentials", () => origNav.credentials);
makeGetter("doNotTrack", () => "1");
makeGetter("geolocation", () => {});
makeGetter("hardwareConcurrency", () => 8);
makeGetter("javaEnabled", () => () => false);
makeGetter("language", () => "en-US");
makeGetter("languages", () => ["en-US"]);
makeGetter("maxTouchPoints", () => 0);
makeGetter("mediaCapabilities", () => origNav.mediaCapabilities);
makeGetter("mediaDevices", () => origNav.mediaDevices);
makeGetter("onLine", () => true);
makeGetter("platform", () => "Linux x86_64");
makeGetter("product", () => "Gecko");
makeGetter("productSub", () => "20100101");
makeGetter("plugins", () => plugArray);
makeGetter("userAgent", () => ua);
makeGetter("vendor", () => "");
makeGetter("vendorSub", () => "");
makeGetter("webdriver", () => false);

// Set global navigator to wrapper
Object.defineProperty(window, "navigator", { get: () => nav });
