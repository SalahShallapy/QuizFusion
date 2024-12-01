import HeaderImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={HeaderImage} alt="QUIZ LOGO IMAGE" />
      <h1>QuizFusion</h1>
    </header>
  );
}
