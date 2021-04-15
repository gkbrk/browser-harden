// name screen.size
// default true
// title Screen size
// desc Report a standard size for the screen

Object.defineProperties(Screen.prototype, {
  width: {
    get: () => 1920,
  },
  height: {
    get: () => 1080,
  },
  availTop: {
    get: () => 0,
  },
  availLeft: {
    get: () => 0,
  },
  availWidth: {
    get: () => 1920,
  },
  availHeight: {
    get: () => 1080,
  },
});
