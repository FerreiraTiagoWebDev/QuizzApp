import { Button } from "@material-ui/core";

import "./result.scss";

const Result = ({ name, score }) => {


  return (
    <div className="container result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
