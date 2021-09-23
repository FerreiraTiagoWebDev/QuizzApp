import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from "./game/Game";
import "./play.scss";

function Play({ name, questions, score, setScore, setQuestions }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/play">
          <div className="container playContainer">
            <section>
              <h1 className="playTitle">Welcome, {name} to the QuizZz</h1>
              <h2 className="playTitle2">Category: </h2>
            </section>
            <section>
              <div className="playIntro">
                10 questions with 30 seconds per question, press start when you
                are ready!
              </div>
            </section>

            <Link to="/game">
              <Button
                variant="contained"
                color="primary"
                className="playButton"
                type="button"
              >
                Start
              </Button>
            </Link>
          </div>
        </Route>
        <Route exact path="/game">
          <Game
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default Play;
