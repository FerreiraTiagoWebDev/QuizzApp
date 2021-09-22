import React, { useState } from "react";
import "./game.scss";

function Game() {
  const [questionNumber, setQuestionNumber] = useState(2);

  const data = [
    {
      id: 1,
    },
  ];

  const questionsMap = [
    { id: 1, question: "Question 1" },
    { id: 2, question: "Question 2" },
    { id: 3, question: "Question 3" },
    { id: 4, question: "Question 4" },
    { id: 5, question: "Question 5" },
    { id: 6, question: "Question 6" },
    { id: 7, question: "Question 7" },
    { id: 8, question: "Question 8" },
    { id: 9, question: "Question 9" },
    { id: 10, question: "Question 10" },
    { id: 11, question: "Question 11" },
    { id: 12, question: "Question 12" },
    { id: 13, question: "Question 13" },
    { id: 14, question: "Question 14" },
    { id: 15, question: "Question 15" },
  ].reverse();

  return (
    <div className="container gameContainer">
      <div className="gameQuestions">
        <div className="gameMode">Mode: React</div>
        <div className="gameTimer">Timer</div>
        <div className="gameQuestion">
          Which of the following is the correct answer?
        </div>
      </div>
      <div className="progressionMap">
        <ul className="questionMapItem">
          {questionsMap.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "questionMapItem active"
                  : "questionMapItem"
              }
            >
              {m.question}
            </li>
          ))}
        </ul>
      </div>
      <div className="gameAnswers">
        <button className="gameAnswerA">Example1</button>
        <button className="gameAnswerB">Example2</button>
        <button className="gameAnswerC">Example3</button>
        <button className="gameAnswerD">Example4</button>
      </div>
    </div>
  );
}

export default Game;
