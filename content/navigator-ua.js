// name navigator.ua
// default true
// title Navigator User-Agent
// desc Report a default User-Agent for JS

const ua =
  "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0";

Object.defineProperty(Navigator.prototype, "userAgent", {
  get: () => ua,
});

Object.defineProperty(Navigator.prototype, "platform", {
  get: () => "Linux x86_64",
});
