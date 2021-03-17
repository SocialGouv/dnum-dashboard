const fs = require("fs");
const path = require("path");

const toHostname = (url) =>
  url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
    .replace(/^([^/]+)\/.+$/, "$1");

const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "..", "urls.txt"))
    .toString()
    .split("\n")
    .map(toHostname)
    .filter(Boolean);

module.exports = { toHostname, getUrls };
