// name media.canplaytype
// default true
// title Media type support
// desc Hide the media types that the browser can play

Object.defineProperty(HTMLMediaElement.prototype, "canPlayType", {
  get: () => "",
});
