// name crypto.disable
// default true
// title Crypto API
// desc Disable the Crypto API

Object.defineProperty(window, "crypto", {
  get: () => undefined,
  enumerate: false,
});
