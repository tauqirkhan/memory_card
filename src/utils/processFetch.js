export default async function processFetch(data) {
  const results = data.results;

  try {
    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);

        if (!response.ok)
          throw new Error(`Failed to fetch details for ${pokemon.name}`);

        const details = await response.json();
        return {
          name: pokemon.name,
          image: details.sprites.other.dream_world.front_default,
        };
      })
    );
    return pokemons;
  } catch (error) {
    console.log("Error fetching Pokemon details", error);
  }
}
