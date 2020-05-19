// name js.cookie
// default true
// title JS Cookies
// desc Disable the creation and modification of cookies using JS

// Keep track of the original cookie prototype
const cookie = Object.getOwnPropertyDescriptor(Document.prototype, "cookie");
const cookieGet = cookie.get;
const cookieSet = cookie.set;

Object.defineProperty(Document.prototype, "cookie", {
  set: (v) => {
    console.log(`Creating cookie ${v}`);
    v = v
      .split(";")
      .filter((x) => x.split("=")[0].trim().toLowerCase() !== "max-age")
      .filter((x) => x.split("=")[0].trim().toLowerCase() !== "expires")
      .join(";");
    v += `; Max-Age=${60 * 60}`;
    console.log(`Creating modified cookie ${v}`);
    return cookieSet.call(document, v);
  },
  get: () => {
    return cookieGet.call(document);
  },
});
