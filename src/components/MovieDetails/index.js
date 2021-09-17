import React, { useEffect, useState } from "react";

import { MovieDetailsContainer, MovieContentWrapper, MovieImage, MovieImageContainer, MovieTextContentWrapper, MovieTitle, TitleWrapper, IconWrapper, FavoriteIconImg, OverviewWrapper, Overview } from "./style";
// import Loader from "react-loaders";

import { ReactComponent as FavoriteIconFilled } from "../../assets/favorite-filled.svg";
import { ReactComponent as FavoriteIconUnFilled } from "../../assets/favorite-unfilled.svg";
import { useSelector, useDispatch } from "react-redux";
import { setFavoritesAction, filterFavoritesAction } from "../../state/actions";
import { useParams } from "react-router";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieDetailsID } = useParams();
  const [favorite, setFavorite] = useState(false);

  const { id, poster_path, original_title, overview } = movieDetails || {};
  const url = `https://api.themoviedb.org/3/movie/${movieDetailsID}?api_key=${KEY}`;

  const favoriteList = useSelector((state) => state.setFavoriteReducer.favoriteList);
  const filteredList = useSelector((state) => state.setFavoriteReducer.filteredFavoriteList);
  const dispatchFavorite = useDispatch();

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
    dispatchFavorite(setFavoritesAction([id, original_title]));

    setFavorite(true);
  };

  const RemoveFromFavorites = () => {
    // dispatchFavorite(filterFavoritesAction(id));
    setFavorite(false);
  };

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(favoriteList));
  }, [AddToFavorites]);

  useEffect(() => {
    console.log("filter", filteredList);
  });
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
