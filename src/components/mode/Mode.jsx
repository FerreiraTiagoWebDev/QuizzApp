import React from "react";
import "./mode.scss";

function Mode() {
  return (
    <div className="container modeContainer">
      <h1 className="modeTitle">
        You can choose the subject of the questions:
      </h1>
      <h3>You can combine different topics:</h3>
      <form className="menuForm"> 
        <input type="checkbox" id="reactCB" name="reactCB" value="React" />
        <label htmlFor="reactCB">React</label>
        <input
          type="checkbox"
          id="javascriptCB"
          name="javascriptCB"
          value="Javascript"
        />
        <label htmlFor="javascriptCB">Javascript</label>
        <input type="checkbox" id="gitCB" name="gitCB" value="Git" />
        <label htmlFor="gitCB">Git</label>
        <input type="checkbox" id="cssCB" name="cssCB" value="CSS" />
        <label htmlFor="cssCB">Css</label>
        <button type="button">Save Changes</button>
      </form>
    </div>
  );
}

export default Mode;
