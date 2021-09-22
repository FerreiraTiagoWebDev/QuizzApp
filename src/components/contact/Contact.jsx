import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="container contactContainer">
      <div>
        Creator:
        <button style={{margin: "50px"}}>
          <a
            href="https://github.com/FerreiraTiagoWebDev"
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiago Ferreira
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
