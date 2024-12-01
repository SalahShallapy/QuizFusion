import { useEffect, useState } from "react";

export default function QuestionTimer({ onTimeout, timeout, mode }) {
  const [remaningTime, setRemaningTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaningTime((prevRemainingTime) => prevRemainingTime - 50);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="quesion-time"
      max={timeout}
      value={remaningTime}
      className={mode}
    />
  );
}
