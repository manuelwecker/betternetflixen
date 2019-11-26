import React from "react";
import styled from "@emotion/styled";
import { timeout } from "q";

const Input = styled.input`
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  flex-grow: 1;
  &::placeholder {
    color: #ff0033;
  }
`;

const Form = styled.form`
  flex-grow: 1;
`;

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Search({ value, onChange }) {
  const [movieName, setMovieName] = React.useState(value);
  function HandleSubmit(event) {
    event.preventDefault();
    onChange(movieName);
  }
  // throttle debounce
  React.useEffect(() => {
    const timoutId = setTimeout(() => {
      console.log("Submit now");
    }, 500);

    return () => {
      console.log("clear timeout");
      clearTimeout(timoutId);
    };
  }, [movieName]);

  return (
    <form onSubmit={HandleSubmit}>
      <Input
        autoFocus
        placeholder="Search..."
        value={value}
        name="movieName"
        onChange={event => {
          const newSearchValue = upperCaseFirstChar(event.target.value);
          onChange(newSearchValue);
        }}
      />
      <button>SUB</button>
    </form>
  );
}
