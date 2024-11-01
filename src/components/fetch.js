export default async function fetch(limit = 8) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
