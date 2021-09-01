import styled from "styled-components";
import React from "react";

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  justify-items: center;
  align-items: center;
  grid-row-gap: 30px;
  grid-column-gap: 5px;
  justify-content: center;
  justify-items: center;
`;

const ContentWrapper = styled.div`
  width: 250px;
  height: 400px;
  /* height: 400px; */
  background: rgba(102, 219, 91, 0.6);
  /* margin: 1px; */
  border: 1px solid #000;
  padding: 0px;
  text-align: center;
`;

const Content = ({ popularMovies, setPopularMovies }) => {
  return (
    <ContentContainer>
      {popularMovies?.results?.map(({ id, name, poster_path, backdrop_path }) => {
        console.log(backdrop_path);
        return (
          <ContentWrapper key={id}>
            <img src={`http://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
            <h3>{name}</h3>
          </ContentWrapper>
        );
      })}
    </ContentContainer>
  );
};

export default Content;
