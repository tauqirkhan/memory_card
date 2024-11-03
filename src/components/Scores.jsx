import "../styles/scores.css";

export default function Scores({ score, highScore }) {
  return (
    <div className="scores">
      <h3>Score: {score}</h3>
      <h3>High Score: {highScore}</h3>
    </div>
  );
}
