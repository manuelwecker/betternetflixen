import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./compontents/Header";
import { MovieList } from "./compontents/MovieList";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <MovieList />
        Output
      </main>
    </>
  );
}

export default App;
