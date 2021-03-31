import * as React from "react";

import { Container, Row } from "react-bootstrap";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import report from "./report.json";

import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Dashboard } from "./components/Dashboard";
import { Url } from "./components/Url";
import { Intro } from "./components/Intro";

const App = () => {
  return (
    <Router>
      <div>
        <Topbar />
        <Container fluid>
          <Row>
            <Sidebar report={report} />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/url/*">
                  <Url report={report} />
                </Route>
                <Route path="/dashboard">
                  <Dashboard report={report} />
                </Route>
                <Route path="/">
                  <Intro />
                </Route>
              </Switch>
            </main>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
