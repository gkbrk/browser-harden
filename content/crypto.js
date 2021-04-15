// name crypto.disable
// default true
// title Crypto API
// desc Disable the Crypto API

Crypto.prototype.getRandomValues = function (arr) {
  for (let i = 0; i < arr.length; i++) arr[i] = Math.random();
  return arr;
};
