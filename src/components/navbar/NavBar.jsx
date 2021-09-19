import React from "react";
import "./navbar.scss";
import logo from "./logo.svg";
import "./logo.css";
import { useHistory } from "react-router-dom";

function NavBar() {
  let history = useHistory();
  return (
    <div className="navbar">
      <div className="logo">
        <section className="App-header">
          <button
            onClick={() => {
              history.push("/play");
            }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </button>
        </section>
      </div>
      <ul className="navlinks">
        <li>Rules</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
