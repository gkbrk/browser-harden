// name audio.context
// default true
// title AudioContext API
// desc Disable audiocontext

AudioContext = function () {};

AudioBuffer.prototype.getChannelData = function (chan) {
  let arr = new Float32Array(this.length);
  return arr;
};
