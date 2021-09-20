import React from "react";
import "./game.scss";

function Game() {
  return (
    <div className="container gameContainer">
      <div className="gameQuestions">
          <div className="gameTimer">
              Timer
          </div>
          <div className="gameQuestion">
              QuestionExample
          </div>
      </div>
      <div className="progressionMap"> 
      <ul className="questionsMap">
          <li>Question 15</li>
          <li>Question 14</li>
          <li>Question 13</li>
          <li>Question 12</li>
          <li>Question 11</li>
          <li>Question 10</li>
          <li>Question 09</li>
          <li>Question 08</li>
          <li>Question 07</li>
          <li>Question 06</li>
          <li>Question 05</li>
          <li>Question 04</li>
          <li>Question 03</li>
          <li>Question 02</li>
          <li>Question 01</li>
          </ul></div>
      <div className="gameAnswers"> Answers</div>
    </div>
  );
}

export default Game;
