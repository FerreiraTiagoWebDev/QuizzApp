import React from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <p>QuizZz</p>
      </Link>
      <div >
        <ul className="navlinks">
          <Link to="/mode">
            <li>Mode</li>
          </Link>
          <Link to="materials">
            <li>Materials</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
