import React from "react";
import { searchMovies } from "../api/movies";

export default function MovieList({ searchValue }) {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  console.log(movies);

  async function refreshMovies() {
    setLoading(true);
    const discoveredMovies = await searchMovies(searchValue);
    setLoading(false);
    setMovies(discoveredMovies || []);
  }

  React.useEffect(() => {
    refreshMovies();
  }, [searchValue]);

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
