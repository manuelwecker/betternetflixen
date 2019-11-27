import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <p>
        <Link to="/home">Home</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;
        <Link to="/submitmovie">Submit</Link>
      </p>
    </>
  );
}
