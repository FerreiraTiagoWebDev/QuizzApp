import React from "react";
import "./navbar.scss";

import { Link} from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
       <Link to="/">
      <h1>Home</h1>
      </Link>
      <ul className="navlinks">
        <Link to="/mode">
          <li>Mode</li>
        </Link>
        <Link to="settings">
          <li>Settings</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
