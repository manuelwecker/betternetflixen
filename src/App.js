import React from "react";
import GlobalStyles from "./GlobalStyles";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import NewMovieFunctional from "./components/NewMovie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import SubmitMovie from "./components/pages/SubmitMovie";
import Footer from "./components/Footer";

function App() {
  const [movieSearchValue, setMovieSearchValue] = React.useState("");

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header
          searchValue={movieSearchValue}
          onSearchValueChange={searchValue => setMovieSearchValue(searchValue)}
        />
        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/submitmovie" component={SubmitMovie} />
          </Switch>
          <MovieList searchValue={movieSearchValue} />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
