export default function handleClick(
  name,
  selectedArray,
  setSelectedArray,
  score,
  highScore,
  setScore,
  setHighScore,
  pokemonArray,
  shuffle
) {
  if (selectedArray.includes(name)) {
    if (score > highScore) setHighScore(score);
    setScore(0);
    setSelectedArray([]);
  } else {
    setScore((prev) => prev + 1);
    setSelectedArray((prev) => [...prev, name]);
  }

  shuffle(pokemonArray);
}
