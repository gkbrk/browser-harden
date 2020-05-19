const ua =
  "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0";

function fixHeaders(e) {
  for (let header of e.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    } else if (header.name.toLowerCase() === "accept-language") {
      header.value = "en-US,en;q=0.9";
    }
  }
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  fixHeaders,
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);

browser.webRequest.onHeadersReceived.addListener(
  (e) => {
    for (let header of e.responseHeaders) {
      if (header.name.toLowerCase() === "set-cookie") {
        // Cookie header
        header.value = header.value
          .split("\n")
          .map((c) => {
            c = c
              .split(";")
              .filter((x) => x.split("=")[0].trim().toLowerCase() !== "max-age")
              .filter((x) => x.split("=")[0].trim().toLowerCase() !== "expires")
              .join(";");
            c += `; Max-Age=${60 * 60}`;
            return c;
          })
          .join("\n");
      }
    }

    return { responseHeaders: e.responseHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);
