import "../styles/card.css";

export default function Card({
  name,
  imageUrl,
  handleClick,
  selectedArray,
  setSelectedArray,
  score,
  highScore,
  setScore,
  setHighScore,
}) {
  return (
    <div
      className="card"
      onClick={() =>
        handleClick(
          name,
          selectedArray,
          setSelectedArray,
          score,
          highScore,
          setScore,
          setHighScore
        )
      }
    >
      <img src={imageUrl} alt={name} className="image" />
      <p>{name}</p>
    </div>
  );
}
