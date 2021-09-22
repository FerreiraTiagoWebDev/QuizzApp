import { Button, MenuItem, TextField } from "@material-ui/core";
import React from "react";
import "./mode.scss";
import Categories from "../../Data/Categories";

function Mode() {
  return (
    <div className="container modeContainer">
      <h1 className="modeTitle">Mode Selection</h1>
      <div className="modeSelect">
        <TextField
          style={{ marginBottom: 25 }}
          label="Enter Your Name"
          variant="outlined"
        />
        <TextField
          select
          style={{ marginBottom: 25 }}
          label="Select Category"
          variant="outlined"
        >
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="SelectDifficulty"
          variant="outlined"
          style={{ marginBottom: 30 }}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
        </TextField>
        <Button variant="contained" color="primary" size="large">
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

export default Mode;
