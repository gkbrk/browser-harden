// name mediadevices.enumerate
// default true
// title Media device enumeration
// desc Make the enumeration of media devices time out

Object.defineProperty(MediaDevices.prototype, "enumerateDevices", {
  get: () => () => new Promise(() => {}),
});
