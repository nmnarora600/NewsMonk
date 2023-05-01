import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-body-tertiary navbar-fixed-top navbar-default"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/general"
            style={{ color: "rgb(60, 209, 60)" }}
          >
            News<span style={{ color: "yellow" }}>Monk</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <Link className="nav-link mx-1 " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-1" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
