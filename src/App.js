import React from "react";
import GlobalStyles from "./GlobalStyles";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import NewMovieFunctional from "./components/NewMovie";

function App() {
  const [movieSearchValue, setMovieSearchValue] = React.useState("");

  return (
    <>
      <GlobalStyles />
      <Header
        searchValue={movieSearchValue}
        onSearchValueChange={searchValue => setMovieSearchValue(searchValue)}
      />
      <main>
        <MovieList searchValue={movieSearchValue} />
        <NewMovieFunctional />
      </main>
    </>
  );
}

export default App;
