import React, { useEffect, useState } from "react";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const MovieDetails = ({ match }) => {
  const [MovieDetails, setMovieDetails] = useState();

  let params = match.params.id;

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
  console.log(MovieDetails);
  return (
    <div>
      <h1>{MovieDetails?.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w200/${MovieDetails?.backdrop_path}`} alt="" />
    </div>
  );
};

export default MovieDetails;
