// name webxr.disable
// default true
// title WebXR API
// desc Disable the WebXR API

Object.defineProperty(Navigator.prototype, "xr", {
  get: () => undefined,
  enumerate: false,
});
