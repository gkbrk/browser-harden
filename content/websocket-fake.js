// name websocket.fake
// default true
// title Fake websockets
// desc Replace websocket connections with fake ones

function fakeWs(url) {
  console.log(`Pretending to connect to ${url}`);
  this.url = url;
}

fakeWs.prototype.addEventListener = function (name, cb) {
  if (name == "open") {
    this.onopen = cb;
  }
};

fakeWs.prototype.close = function () {};

Object.defineProperty(fakeWs.prototype, "onopen", {
  set: (v) => {
    setTimeout(() => v.call(this, null), 1300);
    return v;
  },
});

fakeWs.prototype.send = function () {};

Object.defineProperty(window, "WebSocket", {
  value: fakeWs,
});
