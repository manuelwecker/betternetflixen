import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Search from "./Search";
import Button from "./Button";

const AppBar = styled.header`
  display: flex;
  width: 100%;
  height: 48px;
  /* justify-content: stretch;
  flex-wrap: wrap; */
  background-color: #777777;
  margin: 0 0 10px 0;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo text="BETTER BINGEN" />
      <Search input="jdn" />
      <Button />
    </AppBar>
  );
}
