import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="container contactContainer">
      <div>
        Creator:
        <button className="btn-grad" style={{margin: "50px"}}>
          <a
            href="https://portfolio-695c2.web.app/"
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
