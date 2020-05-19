// name gamepad.disable
// default true
// title Gamepad API
// desc Disable the gamepad API

Object.defineProperty(Navigator.prototype, "getGamepads", {
  get: () => undefined,
  enumerate: false,
});
