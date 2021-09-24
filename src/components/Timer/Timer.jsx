import { useEffect, useState } from "react";

export default function Timer({ setGameOver, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setGameOver(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setGameOver]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}