// name screen.size
// default true
// title Screen size
// desc Report a standard size for the screen

Object.defineProperties(Screen.prototype, {
  width: {
    get: () => 1280,
  },
  height: {
    get: () => 720,
  },
  availTop: {
    get: () => 0,
  },
  availLeft: {
    get: () => 0,
  },
  availWidth: {
    get: () => 1280,
  },
  availHeight: {
    get: () => 720,
  },
});
