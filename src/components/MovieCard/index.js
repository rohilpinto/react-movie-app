import React, { useState } from "react";

import Rating from "react-rating";
import { Link } from "react-router-dom";
import { MovieTitle } from "./style";
import { motion } from "framer-motion";

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
      <motion.div className="img-wrapper" initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, scale: { duration: 0.4 } }}>
        {!imgLoaded ? <ClipLoader></ClipLoader> : null}
        <Link to={`/movie/${id}`}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="name" onLoad={() => setImgLoaded(true)} />
        </Link>
      </motion.div>
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
