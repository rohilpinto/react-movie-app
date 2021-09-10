import styled from "styled-components";

export const SearchResultsWrapper = styled.div`
  width: 98%;

  /* height: fit-content; */
  box-sizing: border-box;
  /* min-height: ; */
  background-color: lightblue;
  position: absolute;
  /* display: none; */
  top: 50px;
  left: 5px;
  padding: 5px;
  margin: auto;
  /* padding: 20px; */
  z-index: 5;
  border-radius: 8px;
`;

export const ResultCard = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid black;
  background: lightblue;
  margin: 5px 0;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: black;
`;

export const MovieImage = styled.img``;
