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
    setError(false);
    if (i === correct) {
      const handle = setTimeout(() => {
        setScore(score + 1);
        setError(false);
        clearTimeout(handle);
      }, 2000);
    }
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
    { id: 1, question: "1/10" },
    { id: 2, question: "2/10" },
    { id: 3, question: "3/10" },
    { id: 4, question: "4/10" },
    { id: 5, question: "5/10" },
    { id: 6, question: "6/10" },
    { id: 7, question: "7/10" },
    { id: 8, question: "8/10" },
    { id: 9, question: "9/10" },
    { id: 10, question: "10/10" },
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
            <h1>
              Thank you for playing <span>{name}</span>
            </h1>
            <h2 className="">
              Category: <span>{questions[0].category}</span>
            </h2>
            <h2 className="">
              Difficulty: <span>{questions[0].difficulty} </span>
            </h2>
            <div classname="gameOverResult">
              <p>
                Your score: <span>{score}</span>/10
              </p>
            </div>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 155 }}
              onClick={handleRestart}
              href="/mode"
              className="buttonResults"
              id="changeColor"
            >
              <p>Restart</p>
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="subtitle">
            <h1>
              Welcome, <span>{name}</span>, your score: <span>{score}</span>
            </h1>
            <p>
              Category: <span>{questions[currQues].category}</span>
            </p>
          </div>
          <div className="gameQuestions">
            <div className="gameQuestion">
              <h3> {questions[currQues].question}</h3>
            </div>
          </div>
          <div className="gameButtonNext">
            <Button
              id="gameNextQuestion1"
              variant="contained"
              color="primary"
              onClick={nextQuestionOnClickFire}

              // disabled={currQues == 9}
            >
              {currQues > 8 ? "Submit" : "Next Question"}
            </Button>
          </div>
          <div className="gameTimerContainer">
            <div className="gameTimer">
              <span>
                {" "}
                <Timer
                  setGameOver={setGameOver}
                  score={score}
                  selected={selected}
                  questionNumber={questionNumber}
                  setError={setError}
                />
              </span>
            </div>
          </div>
          <div className="gameAnswers">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i) => (
                <button
                  className={`buttonAnswer ${selected && handleSelect(i)}`}
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
      <div className="gameButtonQuit">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ width: 155 }}
          href="/"
          onClick={() => handleQuit()}
          id="gameQuitButton1"
        >
          {" "}
          Quit{" "}
        </Button>
      </div>

      <div className="progressionMap">
        <div className="questionMapItem items">
          {questionsMap.map((m) => (
            <div
              key={m.id}
              className={
                questionNumber === m.id
                  ? "questionMapItem active btn btn--stripe"
                  : "questionMapItem "
              }
            >
              {m.question}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
