import React from "react";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../../../node_modules/react-rating";
// import MovieContent from "./MovieContent";

import { ContentContainer, ContentWrapper, MovieTitle } from "./style";

import starUnfilled from "../../assets/star-unfilled.svg";
import starFilled from "../../assets/star-filled.svg";
import ScrollToTop from "../ScrollToTop";

const MoviesHome = ({ popularMovies, setPopularMovies }) => {
  console.log(popularMovies);

  return (
    <>
      {/* <h3>Movies</h3> */}

      <ScrollToTop></ScrollToTop>

      <ContentContainer>
        {popularMovies?.results?.map(({ id, original_title, poster_path, backdrop_path, vote_average }) => {
          let vote = Math.ceil(vote_average) - 4;

          console.log(vote);

          return (
            <ContentWrapper key={id}>
              <div className="img-wrapper">
                <Link to={`/${id}`}>
                  <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
                </Link>
              </div>
              <Rating initialRating={vote} start={0} readonly fullSymbol={<img src={starUnfilled} className="icon" alt={id} />} emptySymbol={<img src={starFilled} className="icon" alt={id} />} placeholderRating={<img src={starFilled} alt={id} className="icon" />} />

              <div className="text-wrapper">
                <MovieTitle>{original_title}</MovieTitle>
                {/* <h3>rating goes here</h3> */}
              </div>
              {/* <Route path="/Movie-content" component={MovieContent} /> */}
            </ContentWrapper>
          );
        })}
      </ContentContainer>
    </>
  );
};

export default MoviesHome;
