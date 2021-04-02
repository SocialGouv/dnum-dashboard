import * as React from "react";

import { useParams } from "react-router-dom";

import { Jumbotron } from "react-bootstrap";

import { HTTP } from "./HTTP";
import { UpdownIo } from "./UpdownIo";
import { LightHouse } from "./LightHouse";
import { Nuclei } from "./Nuclei";
import { Owasp } from "./Owasp";
import { SSL } from "./SSL";
import { Trackers } from "./Trackers";

type UrlDetailProps = { report: any };

// for some reason react-router `:url*` didnt work, use `*` only
interface ParamTypes {
  "0": string;
}

export const Url: React.FC<UrlDetailProps> = ({ report, ...props }) => {
  const params = useParams<ParamTypes>();
  const url = window.decodeURIComponent(params["0"]);
  const urlData = report.find((r: any) => r.url === url) as any;
  return (
    <div>
      <Jumbotron
        style={{ height: 50, marginTop: 10, paddingTop: 20, marginBottom: 10 }}
      >
        <h3 className="text-center">
          <a href={url} rel="noreferrer noopener" target="_blank">
            {url}
          </a>
        </h3>
      </Jumbotron>
      {(urlData.lhr && (
        <React.Fragment>
          <LightHouse
            data={urlData.lhr}
            url={`/dnum-dashboard/report/${window.btoa(url)}/lhr.html`}
          />
          <br />
        </React.Fragment>
      )) ||
        null}
      {(urlData.ssl && (
        <React.Fragment>
          <SSL data={urlData.ssl} />
          <br />
        </React.Fragment>
      )) ||
        null}
      {(urlData.http && (
        <React.Fragment>
          <HTTP data={urlData.http} />
          <br />
        </React.Fragment>
      )) ||
        null}
        {(urlData.updownio && (
          <React.Fragment>
            <UpdownIo data={urlData.updownio} url={url} />
            <br />
          </React.Fragment>
        )) ||
          null}
      {(urlData.nuclei && (
        <React.Fragment>
          <Nuclei data={urlData.nuclei} />
          <br />
        </React.Fragment>
      )) ||
        null}
      {(urlData.thirdparties && (
        <React.Fragment>
          <Trackers data={urlData.thirdparties} />
          <br />
        </React.Fragment>
      )) ||
        null}
      {(urlData.zap && (
        <React.Fragment>
          <Owasp
            data={urlData.zap}
            url={`/dnum-dashboard/report/${window.btoa(url)}/zap.html`}
          />
          <br />
        </React.Fragment>
      )) ||
        null}
    </div>
  );
};
