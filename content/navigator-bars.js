// name navigator.bars
// default true
// title Navigator bars
// desc Do not report the visibiliy of menu bar, location bar, etc.

Object.defineProperty(BarProp.prototype, "visible", {
  get: () => true,
});
