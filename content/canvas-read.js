// name canvas.read
// default true
// title Canvas read operations
// desc Return an empty white image when attempting to read the canvas

// Keep track of the original functions
const origToDataURL = HTMLCanvasElement.prototype.toDataURL;
const origToBlob = HTMLCanvasElement.prototype.toBlob;
const origGetImageData = CanvasRenderingContext2D.prototype.getImageData;

// Gets an empty white canvas that's the same size as the original one
const getWhite = function (canvas) {
  const e = document.createElement("canvas");
  e.width = canvas.width;
  e.height = canvas.height;
  const ctx = e.getContext("2d");
  ctx.fillStyle = "rgb(255,255,255)";
  ctx.fillRect(0, 0, e.width, e.height);
  return e;
};

Object.defineProperty(CanvasRenderingContext2D.prototype, "getImageData", {
  get: () =>
    function (v1, v2, v3, v4) {
      const w = getWhite(this);
      const c = w.getContext("2d");
      return origGetImageData.call(c, v1, v2, v3, v4);
    },
});

Object.defineProperty(HTMLCanvasElement.prototype, "toDataURL", {
  get: () =>
    function () {
      return origToDataURL.call(getWhite(this));
    },
});

Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
  get: () =>
    function () {
      return origToBlob.call(getWhite(this));
    },
});
