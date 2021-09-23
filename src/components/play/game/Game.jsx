import React, { useEffect, useState } from "react";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import "./game.scss";

function Game({ name, questions, score, setScore, setQuestions }) {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const [selected, setSelected] = useState()


  const [questionNumber, setQuestionNumber] = useState(3);


  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions]);

  console.log(options);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

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
        <h1 className="subtitle">Welcome, {name}, your score: {score}</h1>
        <div className="gameMode">
          Category: {questions[currQues].category}:
        </div>
        <div className="gameTimer">30s</div>
        <div className="gameQuestion btn-grad2">
          <h3> {questions[currQues].question}</h3>
        </div>
      </div>
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
      <div className="gameAnswers">
       
        {options && options.map((i) => <button className="btn-grad3" onClick={() => {}}>{i}</button>)}
      </div>
    </div>
  );
}

export default Game;
