import React from "react";
import Logo from "../src/Images/logo udemy.svg";
import { NavLink } from "react-router-dom";
import globe from "../src/Images/globe.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './index.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar yo navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="50" height="40" />
          </NavLink>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Action
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Another action
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex">
            <div className="search">
              <input
                className="form-controlsearch me-2"
                type="search"
                placeholder="Search for anything"
                aria-label="Search"
              />
              
            </div>
            
          </form>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/udemybusiness"
                >
                  Udemy Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/teachonudemy"
                >
                  Teach on Udemy
                </NavLink>
              </li>
              <div className="btn1">
                <button type="button"  className="btnlogin">
                  Log In
                </button>
              </div>
              <div className="btn2">
                <button type="button" className="btnsignup btn-dark">
                  Sign Up
                </button>
              </div>
              <button>
                {" "}
                <img src={globe} alt="globe" />{" "}
              </button>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
