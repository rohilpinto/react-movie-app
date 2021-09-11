import styled from "styled-components";

export const SearchResultsWrapper = styled.div`
  width: 98%;

  /* height: fit-content; */
  box-sizing: border-box;
  /* min-height: ; */

  position: absolute;
  /* display: none; */
  top: 50px;
  left: 5px;
  padding: 5px;
  margin: auto;
  /* padding: 20px; */
  z-index: 5;
  border-radius: 8px;

  background-color: #dadbdbbd;
  backdrop-filter: blur(20px);
`;
export const ResultCard = styled.div`
  /* width: 100%; */
  height: 100px;
  /* border: 1px solid black; */
  background: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  margin: 5px 5px;
  display: flex;
  padding: 5px;
`;

export const MovieImageWrapper = styled.div`
  width: 80px;
  display: flex;
  justify-content: flex-start;
`;

export const MovieTextContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
`;
export const TitleWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-size: 16px;
  color: black;
`;

export const MovieImage = styled.img`
  width: 70px;
  height: 100%;
  object-fit: cover;

  border-radius: 5px;
  backface-visibility: hidden;
`;
