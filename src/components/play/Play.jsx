import React, { useState } from "react";
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
              <h1 className="playTitle">Welcome to the Coding Quizz</h1>
              <h2 className="playTitle2">Mode: React</h2>
            </section>
            <section>
              <div className="playIntro">
                15 questions with 2 minutes per question, press start when you
                are ready!
              </div>
            </section>

            <Link to="/game">
              <button className="playButton" type="button">
                Start
              </button>
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
