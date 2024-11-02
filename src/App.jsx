import { useState, useEffect } from "react";

import "./App.css";
import fetchData from "./components/fetch";
import processFetch from "./components/processFetch";

function App({ limit = 8 }) {
  const pokemonArray = useData(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  );

  useEffect(() => {
    pokemonArray.forEach((pokemon) => {
      console.log("Pokemon name: ", pokemon.name);
      console.log("Pokemon image url: ", pokemon.image);
    });
  }, [pokemonArray]);

  return <></>;
}

function useData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchProcessData = async () => {
      try {
        const response1 = await fetchData(url);
        const response2 = await processFetch(response1);

        if (!ignore) setData(response2);
      } catch (error) {
        if (!ignore) console.log(error);
      }
    };

    fetchProcessData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}
export default App;
