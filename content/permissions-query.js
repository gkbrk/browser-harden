// name permissions.query
// default true
// title JS Cookies
// desc Disable the creation and modification of cookies using JS

// Make permissions time out
Object.defineProperty(Permissions.prototype, "query", {
  get: () => () => new Promise(() => {}),
});
