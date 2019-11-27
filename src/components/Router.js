import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SubmitMovie from "./pages/SubmitMovie";

export default function Router() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/moviedetail">
        <MovieDetail />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/submitmovie">
        <SubmitMovie />
      </Route>
    </>
  );
}
