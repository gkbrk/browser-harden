// name date.accuracy
// default true
// title Date accuracy
// desc Make timestamps less accurate

// Original functions
const origGetTime = Date.prototype.getTime;
const origDateNow = Date.prototype.now;

Object.defineProperty(Date.prototype, "getTime", {
  value: function () {
    const originalResult = origGetTime.call(this);

    return Math.round(originalResult / 1000) * 1000;
  },
});

Object.defineProperty(Date.prototype, "now", {
  value: function () {
    const originalResult = origDateNow.call(this);

    return Math.round(originalResult / 1000) * 1000;
  },
});
