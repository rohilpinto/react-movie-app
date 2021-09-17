import React, { useState } from "react";

import Rating from "react-rating";
import { Link } from "react-router-dom";
import { MovieTitle } from "./style";

// import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import starUnfilled from "../../assets/star-unfilled.svg";
import starFilled from "../../assets/star-filled.svg";

const MovieCard = ({ movie, isLoading }) => {
  const { id, poster_path, original_title, vote_average } = movie;
  const [imgLoaded, setImgLoaded] = useState(false);

  const vote = Math.ceil(vote_average) / 2;
  // console.log(imgLoaded);
  // console.log(original_title);
  return (
    <>
      <div className="img-wrapper">
        {!imgLoaded ? <ClipLoader></ClipLoader> : null}
        <Link to={`/movie/  ${id}`}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="name" onLoad={() => setImgLoaded(true)} />
        </Link>
      </div>
      <Rating initialRating={vote} start={0} readonly fullSymbol={<img src={starUnfilled} className="icon" alt={id} />} emptySymbol={<img src={starFilled} className="icon" alt={id} />} placeholderRating={<img src={starFilled} alt={id} className="icon" />} />

      <div className="text-wrapper">
        <MovieTitle>{original_title}</MovieTitle>
        {/* <h3>rating goes here</h3> */}
      </div>
      {/* <Route path="/Movie-content" component={MovieContent} /> */}
    </>
  );
};

export default MovieCard;
