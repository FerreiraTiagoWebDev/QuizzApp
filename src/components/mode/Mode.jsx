import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./mode.scss";
import Categories from "../../Data/Categories";
import { useHistory } from "react-router";
import ErrorMessage from "../errorMessage/ErrorMessage";

function Mode({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push("/play");

    }
  };

  return (
    <div className="container modeContainer">
      <h1 className="modeTitle">Mode Selection</h1>
      <div className="modeSelect">
        {error && <ErrorMessage/>}
        <TextField
          style={{ marginBottom: 25 }}
          label="Enter Your Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          select
          style={{ marginBottom: 25 }}
          label="Select Category"
          variant="outlined"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
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
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

export default Mode;
