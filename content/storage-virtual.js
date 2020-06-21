// name storage.virtual
// default true
// title Virtual storage
// desc Replace localStorage with a virtual one, clear on page exit

let storages = {};
storages.ls = {};
storages.ss = {};

Storage.prototype.getItem = function (name) {
  console.log(`Getting ${name}...`);

  let storage;
  if (this == window.localStorage) {
    storage = storages.ls;
  } else {
    storage = storages.ss;
  }

  return storage[name];
};

Storage.prototype.setItem = function (name, value) {
  console.log(`Setting ${name}...`);

  let storage;
  if (this == window.localStorage) {
    storage = storages.ls;
  } else {
    storage = storages.ss;
  }

  return (storage[name] = value);
};
