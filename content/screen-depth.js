// name screen.depth
// default true
// title Screen depth
// desc Report a default depth value for the screen

Object.defineProperty(Screen.prototype, "colorDepth", {
  get: () => 24,
});
