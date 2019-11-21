import React from "react";
import styled from "@emotion/styled";

const Headline = styled.h1`
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  letter-spacing: 5px;
  color: #ffffff;
  line-height: -30px;
  flex-grow: 3;
  /* Hier wieder sichtbar stellen */
  /* display: none; */
`;

export default function Logo({ text }) {
  return <Headline>{text}</Headline>;
}
