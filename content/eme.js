// name eme.disable
// default true
// title Encrypted Media Extensions (EME)
// desc Disable Encrypted Media Extensions

Object.defineProperty(Navigator.prototype, "requestMediaKeySystemAccess", {
  get: () => undefined,
  enumerate: false,
});
