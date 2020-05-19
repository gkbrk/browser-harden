// name navigator.vibrate
// default true
// title Vibration API
// desc Disable vibration API

Object.defineProperty(Navigator.prototype, "vibrate", {
  get: () => undefined,
  enumerate: false,
});
