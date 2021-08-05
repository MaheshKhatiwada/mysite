import React, { Fragment } from "react";
import {Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
              Mahesh
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to ="/" className="nav-link">
                    Home
                </Link>
              </li>
              <li className="nav-item">
              <Link to ="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link to ="/resume" className="nav-link">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
              <Link to ="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
              <Link to ="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
