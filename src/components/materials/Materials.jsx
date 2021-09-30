import React from "react";
import "./materials.scss";

function Materials() {
  return (
    <div className="container materialsContainer">
      <div>
        <div className="titleMaterials">
          {" "}
          <h1>MATERIALS</h1>
        </div>
        <ul className="linksMaterials">
          <h2> Interested in <span>coding</span>?</h2>
          <h3>Here you can find some resources:</h3>
          <li>
            <a
              href="https://roadmap.sh/frontend"
              target="_blank"
              rel="noreferrer"
            >
              <button> RoadMap to Becoming a FrontEnd Developer</button>
            </a>
          </li>
          <li>
            <a href="https://roadmap.sh/react" target="_blank" rel="noreferrer">
              <button>RoadMap to Learning React</button>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=VfGW0Qiy2I0"
              target="_blank"
              rel="noreferrer"
            >
              <button> Web Development in 2021 - Video by Traversy Media</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Materials;
