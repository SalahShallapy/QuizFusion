import quizFinishImage from "../assets/quiz-complete.png";

import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizFinishImage} alt="TROPHY IMAGE" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Correct Answers</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">Incorrect Answers</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let CssClass = "user-answer";

          if (answer === null) {
            CssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            CssClass += " correct";
          } else {
            CssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={CssClass}>{answer ?? "Question Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}