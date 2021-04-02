const fs = require("fs");
jest.mock("fs");

const checks = require("./checks");

const { default: fetch } = require("node-fetch");
const { Response } = jest.requireActual("node-fetch");
jest.mock("node-fetch");
jest.useFakeTimers();

describe("should checks an URL", () => {
  test("should return checks", async () => {
    
    fs.readFileSync.mockReturnValue(`https://toto.beta.gouv.fr;MTE`);
    process.env.REACT_APP_UPDOWNIO_MTE_API_KEY="tata";
    expect(process.env.REACT_APP_UPDOWNIO_MTE_API_KEY).toEqual("tata");
    const expectedJson = [{"token":"toto","url":"https://toto.beta.gouv.fr","alias":"Toto","last_status":200,"uptime":99.889,"down":false,"down_since":null,"error":null,"period":600,"apdex_t":0.5,"string_match":"","enabled":true,"published":true,"disabled_locations":["lan","mia","bhs","sin","tok","syd"],"last_check_at":"2021-04-01T07:42:39Z","next_check_at":"2021-04-01T07:52:35Z","mute_until":null,"favicon_url":"https://toto.beta.gouv.fr/static/img/favicon.ico","custom_headers":{},"http_verb":"GET/HEAD","http_body":null,"ssl":{"tested_at":"2021-04-01T07:32:44Z","expires_at":"2021-05-25T12:51:11Z","valid":true,"error":null}}];
    fetch.mockImplementationOnce(() =>
      Promise.resolve(
        new Response(JSON.stringify(expectedJson))
      )
    );
    const result = await checks("https://toto.beta.gouv.fr");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenNthCalledWith(
      1,
      "https://updown.io/api/checks?api-key=tata"
    );
    expect(result.url).toEqual("https://toto.beta.gouv.fr");
    expect(result).toEqual(expectedJson[0]);
  });
  test("should return error invalid api key", async () => {
    
    fs.readFileSync.mockReturnValue(`https://toto.beta.gouv.fr;MTE`);
    process.env.REACT_APP_UPDOWNIO_MTE_API_KEY="tata";
    const expectedJson = {"error":"Invalid API test key"};
    fetch.mockImplementationOnce(() =>
      Promise.resolve(
        new Response(JSON.stringify(expectedJson))
      )
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenNthCalledWith(
      1,
      "https://updown.io/api/checks?api-key=tata"
    );
    const result = await checks("https://toto.beta.gouv.fr");
    expect(result.error).toEqual(expectedJson.error);
  });
  test("should return error no incubator found", async () => {
    
    fs.readFileSync.mockReturnValue(`https://toto.beta.gouv.fr`);
    const expectedError = "no incubator found associated to https://toto.beta.gouv.fr";
    expect(() => checks("https://toto.beta.gouv.fr")).toThrow(expectedError);
  });
  test("should return error no env variable found", async () => {
    
    fs.readFileSync.mockReturnValue(`https://toto.beta.gouv.fr;wrong`);
    const expectedError = "no environment variable REACT_APP_UPDOWNIO_WRONG_API_KEY found";
    expect(() => checks("https://toto.beta.gouv.fr")).toThrow(expectedError);
  });
});
