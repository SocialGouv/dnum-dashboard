const fs = require("fs");
const path = require("path");

/**
 * Get hostname of a given URL
 *
 * @param {string} url The full URL
 *
 * @returns {string|null}
 */
const toHostname = (url) =>
  (url &&
    // exclude relative urls
    !url.match(/^\//) &&
    url
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")
      .replace(/^([^/]+)\/.+$/, "$1")
      .toLowerCase()) ||
  null;

/**
 * Get list of urls from a text file
 *
 *
 * @returns {string[]} a list of urls
 */
const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "urls.txt"))
    .toString()
    .split("\n")
    .filter((r) => !r.match(/^\s*#/))
    .filter(Boolean).
    map((item) => {return item.indexOf(';') > 0 ? item.substring(0, item.indexOf(';') - 1) : item;});

    /**
     * Get incubator related to an url from urls.txt text file
     *
     * @param {string} url The full URL
     *
     * @returns {string} an incubator
     */
    const getIncubator = (url) => 
    fs
      .readFileSync(path.join(__dirname, "..", "urls.txt"))
      .toString()
      .split("\n")
      .filter((r) => !r.match(/^\s*#/))
      .filter(Boolean)
      .filter((r) => r.includes(url))
      .filter(item => {return item.indexOf(';') > 0;})
      .map((item) => {return item.substring(item.indexOf(';') + 1);})
      .toString();

/**
 * uniquify some array
 *
 * @param {any[]} input array
 *
 * @returns {any[]} output array
 */
const uniqify = (input) => Array.from(new Set(input));

/**
 * get root domain of some url
 *
 * @param {string} url The full URL
 *
 * @returns {string} root domain name
 */
const rootDomain = (url) =>
  url
    .replace(/(?:https?:\/\/)?(?:[^/])*?([^./]+\.[^./]+)(?:\/.*)?$/i, "$1")
    .toLowerCase();

module.exports = { toHostname, getUrls, uniqify, rootDomain, getIncubator };
