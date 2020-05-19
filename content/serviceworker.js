// name serviceworker.disable
// default true
// title Service Worker API
// desc Time out Service Worker registrations

Object.defineProperty(ServiceWorkerContainer.prototype, "register", {
  get: () => () => new Promise(() => {}),
});
