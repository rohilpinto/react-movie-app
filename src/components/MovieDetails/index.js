import React, { useEffect, useState } from "react";

import { MovieDetailsContainer, MovieContentWrapper, MovieImage, MovieImageContainer, MovieTextContentWrapper, MovieTitle, TitleWrapper, IconWrapper, OverviewWrapper, Overview } from "./style";
// import Loader from "react-loaders";
import { motion } from "framer-motion";
import FavoriteIconFilled from "../../assets/favorite-filled.svg";
import FavoriteIconUnFilled from "../../assets/favorite-unfilled.svg";

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
    const oldMovieCollection = JSON.parse(localStorage.getItem("MovieCollection"));

    oldMovieCollection?.push({ id, poster_path, original_title });

    localStorage.setItem("MovieCollection", JSON.stringify(oldMovieCollection));

    setFavorite(true);
  };

  const RemoveFromFavorites = () => {
    setFavorite(false);
    const allMovieCollection = JSON.parse(localStorage.getItem("MovieCollection"));

    const filteredMovieCollection = allMovieCollection?.filter((arr) => arr.id !== id);

    localStorage.setItem("MovieCollection", JSON.stringify(filteredMovieCollection));
  };

  const checkFavorite = () => {
    const MovieCollection = JSON.parse(localStorage.getItem("MovieCollection"));

    MovieCollection.map((obj) => {
      if (obj.id === id) setFavorite(true);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("MovieCollection") == null) {
      localStorage.setItem("MovieCollection", "[]");
    }
  }, []);

  useEffect(() => {
    checkFavorite();
  });

  return (
    <MovieDetailsContainer as={motion.div}>
      <MovieContentWrapper>
        <MovieImageContainer>
          <MovieImage src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
        </MovieImageContainer>
        <MovieTextContentWrapper>
          <TitleWrapper>
            <MovieTitle>{original_title}</MovieTitle>

            <IconWrapper>
              <h4>Add to favorites</h4>

              {favorite ? (
                <motion.img className="favorite-icon" onClick={RemoveFromFavorites} src={FavoriteIconFilled} as={motion.img} initial={{ scale: "0", rotate: "0" }} animate={{ scale: "1.3", rotate: "360deg" }} alt="favorite-button" />
              ) : (
                <motion.img onClick={AddToFavorites} className="favorite-icon" src={FavoriteIconUnFilled} alt="favorite-button" initial={{ scale: "0", rotate: "0" }} animate={{ scale: "1", rotate: "0deg" }} />
              )}
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
