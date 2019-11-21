import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          background-color: #ff4400;
          color: #333333;
          text-align: center;
          margin: 0px;
          padding: 0px;
          font-family: -apple-system, BlinkMacSystemFont, "Alata", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
