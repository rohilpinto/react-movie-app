import React, { useEffect, useState } from "react";

import { MovieDetailsContainer, MovieContentWrapper, MovieImage, MovieImageContainer, MovieTextContentWrapper, MovieTitle, TitleWrapper, IconWrapper, FavoriteIconImg, OverviewWrapper, Overview } from "./style";
// import Loader from "react-loaders";

import { ReactComponent as FavoriteIconFilled } from "../../assets/favorite-filled.svg";
import { ReactComponent as FavoriteIconUnFilled } from "../../assets/favorite-unfilled.svg";

import { useParams } from "react-router";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieDetailsID } = useParams();
  const [favorite, setFavorite] = useState(false);

  const { id, poster_path, original_title, overview } = movieDetails || {};
  const url = `https://api.themoviedb.org/3/movie/${movieDetailsID}?api_key=${KEY}`;

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
  }, [movieDetailsID]);


  

  const AddToFavorites = () => {
    setFavorite(true);

    const oldMovieCollection = JSON.parse(localStorage.getItem("MovieCollection"));

    oldMovieCollection?.push({ id, poster_path, original_title });

    localStorage.setItem("MovieCollection", JSON.stringify(oldMovieCollection));
  };

  const RemoveFromFavorites = () => {
    const allMovieCollection = JSON.parse(localStorage.getItem("MovieCollection"));

    const filteredMovieCollection = allMovieCollection.filter((arr) => arr.id !== id);

    localStorage.setItem("MovieCollection", JSON.stringify(filteredMovieCollection));

    setFavorite(false);
  };

  const checkFavorite = () => {
    const MovieCollection = JSON.parse(localStorage.getItem("MovieCollection"));

    const mapMovieCollection = MovieCollection.map((obj) => {
      if (obj.id === id) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    });
  };

  useEffect(() => {
    checkFavorite();
  });

  useEffect(() => {
    if (localStorage.getItem("MovieCollection") == null) {
      localStorage.setItem("MovieCollection", "[]");
    }
  }, []);

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

              {favorite ? <FavoriteIconFilled className="favorite-icon" onClick={RemoveFromFavorites} /> : <FavoriteIconUnFilled onClick={AddToFavorites} />}
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
