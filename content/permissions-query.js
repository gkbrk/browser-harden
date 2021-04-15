// name permissions.query
// default true
// title Permissions
// desc Never pop up permission dialogs and disable querying permissions

// Make permissions time out

const prompt = ["geolocation", "notifications", "push", "persistent-storage"];

Permissions.prototype.query = function (o) {
  if (prompt.indexOf(o.name) !== -1)
    return Promise.resolve({ state: "prompt", onchange: null });

  return Promise.reject(new TypeError());
};
