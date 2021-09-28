import React from "react";
import "./materials.scss";

function Materials() {



  return (
    <div className="container materialsContainer">
      <div>
        <h1>MATERIALS COMPONENT</h1>
        <h3> Interested in coding? Here you can find some resources!</h3>
        <ul>
          <li>
            <a
              href="https://roadmap.sh/frontend"
              target="_blank"
              rel="noreferrer"
            >
              RoadMap to Becoming a FrontEnd Developer
            </a>
          </li>
          <li>
            <a href="https://roadmap.sh/react" target="_blank" rel="noreferrer">
              RoadMap to Learning React
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Materials;
