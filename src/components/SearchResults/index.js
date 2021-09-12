import React from "react";
import { SearchResultsWrapper, ResultCard, Title, MovieImage, MovieImageWrapper, MovieTextContentWrapper, TitleWrapper, TextWrapper, ContentWrapper } from "./style";
import { MovieGeneres } from "../../MovieGeneres";

import { Link } from "react-router-dom";

import rating from "../../assets/star-filled.svg";
import genre from "../../assets/genre.svg";
import yearLogo from "../../assets/year.svg";

const SearchResults = ({ searchResults }) => {
  // console.log("logging from search results", searchResults);

  const { results } = searchResults;
  const movieGenreArray = MovieGeneres.genres;

  // console.log(genres, results);

  return (
    <SearchResultsWrapper>
      {results?.slice(0, 7).map(({ id, original_title, poster_path, release_date, vote_average, genre_ids }) => {
        const year = release_date?.slice(0, 4);

        let final = movieGenreArray.filter((genre) => genre.id == genre_ids[0]);
        console.log(final);
        return (
          <Link to={`/${id}`}>
            <ResultCard>
              <MovieImageWrapper>
                <MovieImage src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
              </MovieImageWrapper>
              <MovieTextContentWrapper>
                <TitleWrapper>
                  <Title>{original_title}</Title>
                </TitleWrapper>

                <TextWrapper>
                  <ContentWrapper>
                    <img src={yearLogo} alt="" />
                    <p>{year}</p>
                  </ContentWrapper>
                  <ContentWrapper>
                    <img src={rating} alt="" />
                    <p>{vote_average}</p>
                  </ContentWrapper>
                  <ContentWrapper>
                    <img src={genre} alt="" />
                    <p>{final.map((obj) => obj.name)}</p>
                  </ContentWrapper>
                </TextWrapper>
              </MovieTextContentWrapper>
            </ResultCard>
          </Link>
        );
      })}
    </SearchResultsWrapper>
  );
};

export default SearchResults;
