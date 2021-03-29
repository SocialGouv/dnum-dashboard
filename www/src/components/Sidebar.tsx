import * as React from "react";

import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Home, BarChart, Search } from "react-feather";

import { smallUrl, sortByKey } from "../utils";

type SidebarProps = {
  report: any;
};

export const Sidebar: React.FC<SidebarProps> = ({ report }) => {
  const sortedReport = report.sort(sortByKey("url"));
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              exact={true}
            >
              <Home size={16} style={{ marginTop: -5, marginRight: 5 }} />
              Accueil
            </NavLink>
            <NavLink
              to="/dashboard"
              className="nav-link"
              activeClassName="active"
              exact={true}
            >
              <BarChart size={16} style={{ marginTop: -5, marginRight: 5 }} />
              Tableau de bord
            </NavLink>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Urls</span>
        </h6>

        <ul className="nav flex-column">
          {sortedReport.map((url: any) => (
            <li
              className="nav-item"
              key={url.url}
              style={{
                whiteSpace: "pre",
              }}
            >
              <NavLink
                className="nav-link"
                to={`/url/${url.url}`}
                activeClassName="active"
                exact={true}
              >
                <Search size={16} style={{ marginTop: -5, marginRight: 5 }} />
                {smallUrl(url.url)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
};
