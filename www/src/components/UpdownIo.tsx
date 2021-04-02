import * as React from "react";
import { Row, Col, Alert, Card } from "react-bootstrap";

import { Panel } from "./Panel";
import { Gauge } from "./Gauge";

type UpdownIoProps = { data: any, url: any };

export const UpdownIo: React.FC<UpdownIoProps> = ({ data, url }) => {
  const urlUpdownio =
    (data && `https://updown.io/${data.token}`) ||
    null;

  return (
    urlUpdownio
    && data.url === url 
    && (
      <Panel
        title="Temps de réponse"
        info="Informations collectées par updown.io"
        url={urlUpdownio}
      >
        <Row>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="text-center mb-3">
            <Card>
              <Gauge
                width={100}
                height={60}
                value={data.uptime * 100}
                minValue={0}
                maxValue={100}
                animationSpeed={32}
              />
              <Card.Body>
                <Card.Title>Taux de disponibilité sur un mois glissant</Card.Title>
                <Card.Title
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  {(data.uptime) + "%"}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="text-center mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Certificat TLS {data.ssl.valid ? 'valide' : 'expiré'}</Card.Title>
                <Card.Title
                  style={{ fontSize: "2rem", fontWeight: "bold" }}
                >
                  expire le {new Date(data.ssl.expires_at).toLocaleDateString()}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Panel>
    ) || (
      <Panel
        title="Temps de réponse"
        info="Informations collectées par updown.io"
      >
        <Alert variant="success">Aucune donnée updown.io associée</Alert>
      </Panel>
    ));
};
