import styled from "styled-components";

export const SearchResultsWrapper = styled.div`
  width: 100%;
  /* height: fit-content; */
  box-sizing: border-box;
  /* min-height: ; */
  background-color: lightblue;
  position: absolute;
  display: none;
  top: 50px;
  left: 0px;
  padding: 5px;
  /* padding: 20px; */
  z-index: 5;
`;

export const ResultCard = styled.div`
  width: 100%;
  height: 80px;

  background: red;
  margin: 5px 0;
`;
