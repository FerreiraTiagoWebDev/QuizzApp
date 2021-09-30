import { useEffect, useState } from "react";

export default function Timer({ setGameOver, questionNumber, selected }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setGameOver(true);
    else if (selected) return timer === 5;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setGameOver, selected]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}
