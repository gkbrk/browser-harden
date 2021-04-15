// name old.stuff
// default true
// title Old fixes
// desc Old fixes that haven't been migrated yet

// Canvas fixes

const origGetContext = HTMLCanvasElement.prototype.getContext;

Object.defineProperties(HTMLCanvasElement.prototype, {
  getContext: {
    get: () =>
      function (name) {
        if (name == "2d") {
          return origGetContext.call(this, name);
        }
        return null;
      },
  },
});

const idb = new (function () {
  this.open = () => new Promise(() => {});
})();

const origFetch = window.fetch;

Object.defineProperties(window, {
  indexedDB: {
    get: () => idb,
  },
  fetch: {
    value: function (url, params = undefined) {
      console.log(`Fetch to ${url} with params ${params}`);
      return origFetch.call(this, url, params);
    },
  },
});
