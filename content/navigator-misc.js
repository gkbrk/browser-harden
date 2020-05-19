// name navigator.misc
// default true
// title Miscellaneous navigator properties
// desc Replace various navigator properties with common defaults

Object.defineProperties(Navigator.prototype, {
  hardwareConcurrency: {
    get: () => 8,
  },
  language: {
    get: () => "en-US",
  },
  languages: {
    get: () => ["en-US", "en"],
  },
  getBattery: {
    get: () => undefined,
    enumerate: false,
  },
  doNotTrack: {
    get: () => "1",
  },
  connection: {
    get: () => undefined,
    enumerate: false,
  },
  // Cookies look enabled even if they are disabled
  cookieEnabled: {
    get: () => true,
  },
  // Hopefully it isn't enabled, but just in case
  javaEnabled: {
    get: () => () => false,
  },
  deviceMemory: {
    get: () => undefined,
    enumerate: false,
  },
});
