import React from "react";
import styled from "@emotion/styled";
import movie from "../assets/movie.svg";
import close from "../assets/close.svg";
// import { keyframes } from "emotion/core";

const Btn = styled.button`
  border: none;
  padding: 10px;
  margin: 0px;
  background-color: transparent;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 100%;
  margin: 4px;
`;

// const AnimatedIcon = styled(Icon)`
//   animation ${spin} 1s ease 1;
// `;

export default function Button({ active, onClick }) {
  return (
    <Btn onClick={onClick}>
      <Icon active={active} src={active ? close : movie} />
    </Btn>
  );
}
