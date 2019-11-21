import React from "react";
import { getDiscoverMovies } from "../api/movies";

export function MovieList() {
  const [movies, setMovies] = React.useState([]);

  console.log(movies);

  async function refreshMovies() {
    const discoveredMovies = await getDiscoverMovies();
    setMovies(discoveredMovies);
  }
  // Komponente wird aufgerufen einmalig, oder wenn sich die Property des Arrays
  React.useEffect(() => {
    refreshMovies();
  }, []);

  return <div>MovieList</div>;
}
