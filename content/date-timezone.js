// name date.timezone
// default true
// title Date timezone
// desc Return a default timezone with Date objects

Date.prototype.getTimezoneOffset = function () {
  return 0;
};

Intl.DateTimeFormat.prototype.resolvedOptions = function () {
  return {
    timeZone: "Europe/London",
  };
};
