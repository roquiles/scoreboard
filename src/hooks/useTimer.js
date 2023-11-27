import { useCallback, useEffect, useState } from "react";

export default function useTimer() {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startTimer = () => setIsTimerRunning(true);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimer(0);
  };

  const count = useCallback(
    () => (isTimerRunning ? setTimer(timer + 1) : undefined),
    [isTimerRunning, timer],
  );

  useEffect(() => {
    const id = setInterval(count, 1000);

    return () => {
      clearInterval(id);
    };
  }, [count]);

  return { startTimer, resetTimer, timer };
}
