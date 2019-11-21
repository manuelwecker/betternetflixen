import React from "react";
import styled from "@emotion/styled";
import movie from "../assets/movie.svg";
import close from "../assets/close.svg";

const Btn = styled.button`
  border: none;
  padding: 10px;
  margin: 0px;
  background-color: #ffffff;
`;

const Icon = styled.img`
  height: 100%;
`;

export default function Button() {
  return (
    <Btn>
      <Icon src={movie} />
    </Btn>
  );
}
