import React from "react";
import "./navbar.scss";
import logo from "./logo.svg";
import "./logo.css";
import { BrowserRouter as Router, } from "react-router-dom";


function NavBar() {
  return (
    <Router>
      <div className="navbar">
        <div className="logo">
          <section className="App-header">
            <button>
              <a href="/">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
            </button>
          </section>
        </div>
        {/* <ul className="navlinks">
          <li>Rules</li>
          <li>Team</li>
          <li>Contact</li>
        </ul> */}
      </div>
    </Router>
  );
}

export default NavBar;
