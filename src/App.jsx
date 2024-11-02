import { useState, useEffect } from "react";

import "./styles/App.css";
import useData from "./hooks/useData";
import Scores from "./components/Scores";
import Card from "./components/Card";

function App({ limit = 8 }) {
  const pokemonArray = useData(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  );

  const [score, getScore] = useState(0);
  const [highScore, getHighScore] = useState(0);

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
          />
        ))}
      </main>

      <footer>
        <p>&copy; 2024 Battleship Game. All rights reserved.</p>
        <p>
          Made with ❤️ by
          <a href="https://github.com/tauqirkhan/battleship" target="_blank">
            Tauqir Khan
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
