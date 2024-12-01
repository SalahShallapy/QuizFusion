import { useCallback, useState } from "react";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handeSelectAnswer = useCallback(function handeSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handeSelectAnswer(null),
    [handeSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelect={handeSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
