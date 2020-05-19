// name history.privacy
// default true
// title History privacy
// desc Plug data leaks from the History API

Object.defineProperty(History.prototype, "length", {
  get: () => 1,
});
