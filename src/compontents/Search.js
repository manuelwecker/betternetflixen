import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  flex-grow: 1;
  &::placeholder {
    color: #ff0033;
  }
`;

export default function Search() {
  return (
    <Input
      autoFocus
      type="text"
      placeholder="search for movie and series"
    ></Input>
  );
}
