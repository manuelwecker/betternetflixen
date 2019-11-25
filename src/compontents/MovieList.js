import React from "react";
import { getDiscoverMovies } from "../api/movies";

export function MovieList() {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  console.log(movies);

  async function refreshMovies() {
    setLoading(true);
    const discoveredMovies = await getDiscoverMovies();
    setLoading(false);
    setMovies(discoveredMovies);
  }
  // Komponente wird aufgerufen einmalig, oder wenn sich die Property des Arrays
  React.useEffect(() => {
    refreshMovies();
  }, []);

  // <button onClick={refreshMovies}></button>

  return (
    <div>
      {loading && <div>Loading</div>}
      {movies.map(movie => (
        <div key={movie.id}>
          {movie.title}
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}
