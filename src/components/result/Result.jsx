import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./result.scss";

const Result = ({ name, score }) => {
  // const history = useHistory();

  // useEffect(() => {
  //   if (!name) {
  //     history.push("/");
  //   }
  // }, [name, history]);

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
