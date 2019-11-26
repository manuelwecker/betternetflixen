import React from "react";
import styled from "@emotion/styled";
import Search from "./Search";
import Button from "./Button";

const AppBar = styled.header`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: stretch;
  background-color: ${props => (props.active ? "#ffffff" : "#777777")};
  margin: 0 0 10px 0;
`;

export default function Header({ searchValue, onSearchValueChange }) {
  const [showSearch, setShowSearch] = React.useState(false);

  // let content;
  // if (!showSearch) {
  //   content = "<Logo text="BETTER BINGEN" />";
  // } else {
  //   content = "<Search />";
  // }

  return (
    <AppBar active={showSearch}>
      {showSearch && (
        <Search value={searchValue} onChange={onSearchValueChange} />
      )}
      {/* oder */}
      {/* {!showSearch ? <Logo text="BETTER BINGEN" /> : <Search />} */}
      <Button active={showSearch} onClick={() => setShowSearch(!showSearch)} />
    </AppBar>
  );
}
