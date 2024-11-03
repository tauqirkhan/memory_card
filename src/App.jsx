import { useState, useEffect } from "react";

import "./styles/App.css";
import useData from "./hooks/useData";
import Scores from "./components/Scores";
import Card from "./components/Card";

function App({ limit = 8 }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedArray, setSelectedArray] = useState([]);

  const pokemonArray = useData(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  );

  console.log("Real length: ", selectedArray.length);

  return (
    <>
      <header>
        <h1>Pika Pair</h1>
        <Scores score={score} highScore={highScore} />
      </header>
      <main>
        {pokemonArray.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            imageUrl={pokemon.image}
            handleClick={handleClick}
            selectedArray={selectedArray}
            setSelectedArray={setSelectedArray}
            score={score}
            highScore={highScore}
            setScore={setScore}
            setHighScore={setHighScore}
          />
        ))}
      </main>

      <footer>
        <p>&copy; 2024 Battleship Game. All rights reserved.</p>
        <p>
          Made with ❤️ by
          <a href="https://github.com/tauqirkhan/memory_card" target="_blank">
            Tauqir Khan
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;

function handleClick(
  name,
  selectedArray,
  setSelectedArray,
  score,
  highScore,
  setScore,
  setHighScore
) {
  if (selectedArray.includes(name)) {
    if (score > highScore) setHighScore(score);
    setScore(0);
    setSelectedArray([]);
  } else {
    setScore((prev) => prev + 1);
    setSelectedArray((prev) => [...prev, name]);
  }
}
