// name timers.animationframe.relax
// default true
// title Animation frames
// desc Slow down the code ran by requestAnimationFrame

Object.defineProperty(window, "requestAnimationFrame", {
  get: () =>
    function (cb) {
      return setTimeout(cb, 100);
    },
});
