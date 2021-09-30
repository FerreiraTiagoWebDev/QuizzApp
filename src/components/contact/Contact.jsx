
import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="container contactContainer">
      <div className="buttonContainer3">
        Creator:
        <a
          href="https://ferreira-tiago.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "50px" }}
        >
          <button id="contactButton" style={{ cursor: "pointer" }}>
            Tiago Ferreira
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
