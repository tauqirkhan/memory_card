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
  pokemonArray,
  shuffle,
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
          setHighScore,
          pokemonArray,
          shuffle
        )
      }
    >
      <img src={imageUrl} alt={name} className="image" />
      <p>{name}</p>
    </div>
  );
}
