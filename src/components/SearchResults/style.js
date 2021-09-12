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

  background: linear-gradient(269.94deg, #cfffff 0.05%, rgb(193 255 251 / 79%) 155.99%);
  backdrop-filter: blur(20px);

  a {
    text-decoration: none;
    color: #fff;
  }

  transition: all 0.5s ease;
`;
export const ResultCard = styled.div`
  /* width: 100%; */
  height: 100px;
  /* border: 1px solid black; */
  /* background: rgba(0, 0, 0, 0.5); */
  background: linear-gradient(90.47deg, rgb(0 0 0 / 26%) 0.4%, rgb(48 48 48 / 24%) 99.72%);

  border-radius: 3px;
  margin: 5px 5px;
  display: flex;
  padding: 5px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #6464648a;
    transform: scale(0.9);
  }
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
  margin: 5px 10px;
`;
export const TitleWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 120px;

  img {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
  p {
    color: #ededed;
  }
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
