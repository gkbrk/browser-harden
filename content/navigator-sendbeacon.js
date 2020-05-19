// name navigator.sendbeacon
// default true
// title sendBeacon API
// desc Replace the sendBeacon function with a no-op

Object.defineProperty(Navigator.prototype, "sendBeacon", {
  get: () => (url) => {
    console.log(`Sending a beacon to ${url}`);
    return true;
  },
});
