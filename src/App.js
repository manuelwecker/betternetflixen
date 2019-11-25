import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./compontents/Header";
import { MovieList } from "./compontents/MovieList";

function App() {
  const [searchValue, setSearchValue] = React.useState("franz");
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <MovieList searchValue={searchValue} />
        Output
      </main>
    </>
  );
}

export default App;
