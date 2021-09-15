import React, { useEffect, useState } from "react";
import { ReactComponent as FavoriteIcon } from "../../assets/favorite-filled.svg";
import { MovieDetailsContainer, MovieContentWrapper, MovieImage, MovieImageContainer, MovieTextContentWrapper, MovieTitle, TitleWrapper, IconWrapper, FavoriteIconImg, OverviewWrapper, Overview } from "./style";
// import Loader from "react-loaders";
const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const MovieDetails = ({ match }) => {
  const [movieDetails, setMovieDetails] = useState();

  const params = match.params.id;
  const { id, poster_path, original_title, overview } = movieDetails || {};
  const url = `https://api.themoviedb.org/3/movie/${params}?api_key=${KEY}`;

  useEffect(() => {
    const getDetails = async () => {
      try {
        const fetchMovieDetails = await fetch(url);
        const MovieData = await fetchMovieDetails.json();

        setMovieDetails(MovieData);
      } catch (error) {
        console.log(`error ${error}`);
      }
    };

    getDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log();
  return (
    <MovieDetailsContainer>
      <MovieContentWrapper>
        <MovieImageContainer>
          <MovieImage src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
        </MovieImageContainer>
        <MovieTextContentWrapper>
          <TitleWrapper>
            <MovieTitle>{original_title}</MovieTitle>

            <IconWrapper>
              <h4>Add to favorites</h4>
              <FavoriteIconImg>
                <FavoriteIcon className="favorite-icon" />
              </FavoriteIconImg>
            </IconWrapper>
          </TitleWrapper>

          <OverviewWrapper>
            <Overview>{overview}</Overview>
          </OverviewWrapper>
        </MovieTextContentWrapper>
      </MovieContentWrapper>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
