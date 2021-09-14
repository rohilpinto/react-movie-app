import React, { useState } from "react";
import { SearchResultsWrapper, ResultCard, Title, MovieImage, MovieImageWrapper, MovieTextContentWrapper, TitleWrapper, TextWrapper, ContentWrapper } from "./style";
import { MovieGeneres } from "../../MovieGeneres";

import { Link } from "react-router-dom";

import rating from "../../assets/star-filled.svg";
import genre from "../../assets/genre.svg";
import yearLogo from "../../assets/year.svg";
import ClipLoader from "react-spinners/ClipLoader";

import { useSelector } from "react-redux";

const SearchResults = ({ searchResults }) => {
  const { results } = searchResults;
  const movieGenreArray = MovieGeneres.genres;
  const [imgLoaded, setImgLoaded] = useState(false);
  const movieSearchResults = useSelector((state) => state.fetchedDataReducer);

  const somefunc = () => {
    if (loading) {
      return <h1>loading</h1>;
    }
  };

  return (
    <SearchResultsWrapper>
      {movieSearchResults.results?.slice(0, 7).map(({ id, original_title, poster_path, release_date, vote_average, genre_ids }) => {
        const year = release_date?.slice(0, 4);

        let final = movieGenreArray.filter((genre) => genre.id === genre_ids[2]);

        const vote = Math.ceil(vote_average) / 2;
        return (
          <React.Fragment key={id}>
            <Link to={`/${id}`}>
              <ResultCard>
                <MovieImageWrapper>
                  <MovieImage src={`https://image.tmdb.org/t/p/w200/${poster_path}`} onLoad={() => setImgLoaded(true)} />
                </MovieImageWrapper>
                <MovieTextContentWrapper>
                  <TitleWrapper>
                    <Title>{original_title}</Title>
                  </TitleWrapper>

                  <TextWrapper>
                    <ContentWrapper>
                      <img src={yearLogo} alt={original_title} />
                      <p>{year}</p>
                    </ContentWrapper>
                    <ContentWrapper>
                      <img src={rating} alt={original_title} />
                      <p>{vote}</p>
                    </ContentWrapper>
                    <ContentWrapper>
                      <img src={genre} alt={original_title} />
                      <p>{final.map((obj) => obj.name)} </p>
                    </ContentWrapper>
                  </TextWrapper>
                </MovieTextContentWrapper>
              </ResultCard>
            </Link>
          </React.Fragment>
        );
      })}
    </SearchResultsWrapper>
  );
};

export default SearchResults;
