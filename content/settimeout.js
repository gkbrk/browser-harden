// name timers.settimeout.relax
// default true
// title setTimeout rate limit
// desc Slow down setTimeout and setInterval

const origSetInterval = window.setInterval;
const origSetTimeout = window.setTimeout;

window.setInterval = function (cb, interval) {
  if (interval < 1000) interval = 1000;
  return origSetInterval.call(window, cb, interval);
};

window.setTimeout = function (cb, interval) {
  if (interval < 1000) interval = 1000;
  return origSetTimeout.call(window, cb, interval);
};
