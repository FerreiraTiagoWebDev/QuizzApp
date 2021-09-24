import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Timer from "../../Timer/Timer";
import "./game.scss";

export default function Game({ name, questions, score, setScore }) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selected, setSelected] = useState();
  const [gameOver, setGameOver] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  const correct = questions[currQues].correct_answer;

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);

    setError(false);
  };
  const handleNext = () => {
    if (questionNumber === 10 && selected) {
      setQuestionNumber(questionNumber + 1);
      setGameOver(true);
    } else if (selected) {
      setCurrQues(currQues + 1);
      setQuestionNumber(questionNumber + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setScore(0);
    setQuestionNumber(1);
  };
  const handleRestart = () => {
    setCurrQues(0);
    setScore(0);
    setQuestionNumber(1);
  };

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
    { id: 11, question: "Finish" },
  ].reverse();

  function nextQuestionOnClickFire() {
    handleNext();
  }

  return (
    <div className="container gameContainer">
      {gameOver ? (
        <>
          <div className="resultsContainer">
            <h1>Thank you for playing {name}</h1>
            <h2 className="">Category: {questions[0].category} </h2>
            <h2 className="">Difficulty: {questions[0].difficulty} </h2>
            <div classname="gameOverResult">Your score: <span>{score}</span> </div>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 155 }}
              onClick={handleRestart}
              href="/mode"
              className="buttonResults"
            >
              Restart
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="gameQuestions">
            <h1 className="subtitle">
              Welcome, {name}, your score: {score}
            </h1>
            <div className="gameMode">
              Category: {questions[currQues].category}:
            </div>
            <div className="gameTimer">
              <Timer
                setGameOver={setGameOver}
                score={score}
                questionNumber={questionNumber}
                setError={setError}
              />
            </div>
            <div className="gameQuestion btn-grad2">
              <h3> {questions[currQues].question}</h3>
            </div>
          </div>
          <div className="gameButtons">
            <Button
              className="quitButton"
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 155 }}
              href="/"
              onClick={() => handleQuit()}
            >
              {" "}
              Quit{" "}
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: 185 }}
              onClick={nextQuestionOnClickFire}

              // disabled={currQues == 9}
            >
              {currQues > 8 ? "Submit" : "Next Question"}
            </Button>
          </div>

          <div className="gameAnswers">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i) => (
                <button
                  className={`singleOption btn-grad3 ${
                    selected && handleSelect(i)
                  }`}
                  key={i}
                  onClick={() => handleCheck(i)}
                  disabled={selected}
                >
                  {i}
                </button>
              ))}
          </div>
        </>
      )}
      <div className="progressionMap">
        <ul className="questionMapItem">
          {questionsMap.map((m) => (
            <li
              key={m.id}
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
    </div>
  );
}
