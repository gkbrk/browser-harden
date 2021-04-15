// name mediadevices.enumerate
// default true
// title Media device enumeration
// desc Make the enumeration of media devices time out

function getDevices() {
  let devices = [];
  devices.push({
    deviceId: "",
    kind: "audioinput",
    label: "",
    groupId: "",
  });
  devices.push({
    deviceId: "",
    kind: "videoinput",
    label: "",
    groupId: "",
  });
  devices.push({
    deviceId: "",
    kind: "audiooutput",
    label: "",
    groupId: "",
  });
  return devices;
}

Object.defineProperty(MediaDevices.prototype, "enumerateDevices", {
  get: () => () => Promise.resolve(getDevices()),
});
