import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from "./game/Game";
import "./play.scss";
import { useHistory } from "react-router-dom";

function Play({
  name,
  questions,
  score,
  setScore,
  setQuestions,
  difficulty,
  category,
}) {
  const history = useHistory();

  return (
    <Router>
      <Switch>
        <Route exact path="/play">
          <div className="container playContainer">
            <section className="title1">
              <h1 className="playTitle">Welcome, <span>{name}</span> to QuizZz</h1>
            </section>
            <section className="description1">
              <div className="playIntro">
                <p> 10 Questions with 30 Seconds per Question!</p>
                <p> Press <span>Start</span> when you are Ready!</p>
              </div>
            </section>

            <Link to="/game">
              <Button
                variant="contained"
                color="secondary"
                className="playButton"
                type="button"
                id="playStartButton"
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
