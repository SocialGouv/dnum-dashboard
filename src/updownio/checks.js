const { default: fetch } = require("node-fetch");
const { getIncubator } = require("../utils");
const process = require('process');

const INTERVAL = 10000;
const MAX_TRIES = 1;
const API_HTTP = "https://updown.io/api";

/**
 * Returns api-key (updown.io account) related do an url
 *
 * @param {string} url The url checked
 *
 * @returns {string}
 */
const getApiKey = (url) => {
  const incubator = getIncubator(url);
  if (incubator.length <= 0)
    throw Error(`no incubator found associated to ${url}`);

  const envApiKey = `REACT_APP_UPDOWNIO_${incubator.toUpperCase()}_API_KEY`;
  if (process.env[envApiKey] === undefined)
    throw Error(`no environment variable ${envApiKey} found`);

  return process.env[`REACT_APP_UPDOWNIO_${incubator}_API_KEY`];
};

class HTTPResponseError extends Error {
  constructor(response, ...args) {
    super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
  }
}

const checkStatus = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new HTTPResponseError(response);
  }
}

/**
 * Returns checks for a given url related to an api-key (updown.io account)
 *
 * @param {string} url The url checked
 *
 * @returns {Promise<HttpScanResult>}
 */
const checks = (url) => {
  console.warn(`fetch updown.io checks for ${url}`);
  const apiKey = getApiKey(url);
  const apiUrl = encodeURI(`${API_HTTP}/checks?api-key=${apiKey}`);
  return fetch(apiUrl)
    .then(checkStatus)
    .then((json) => {
      if (json && json.error)
        console.error(json.error);

      return json;
    }).then(json => { if (json.error) { return json; } else { return json.filter(item => item.url === url)[0]; } });
};

if (require.main === module) {
  const url = process.argv[process.argv.length - 1];
  (async function () {
    try {
      return await checks(url);
    } catch (e) {
      return { error: e.message };
    }
  }()).then(r => console.log(JSON.stringify(r)));
}

module.exports = checks;