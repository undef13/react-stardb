import React from "react";

import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark shadow">
      <div className="container">
        <a className="navbar-brand" href="/">
          StarDB
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Planets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Starships
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
