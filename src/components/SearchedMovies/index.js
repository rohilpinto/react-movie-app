import React, { useEffect, useState } from "react";

import Rating from "react-rating";
import { Link } from "react-router-dom";
import { MovieTitle } from "../MovieCard/style";
import { ContentContainer, ContentWrapper } from "../MoviesHome/style";
import { Helmet } from "react-helmet";

import ClipLoader from "react-spinners/ClipLoader";
import starUnfilled from "../../assets/star-unfilled.svg";
import starFilled from "../../assets/star-filled.svg";
import { useParams } from "react-router-dom";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

const SearchedMovies = () => {
  const [data, setData] = useState([]);

  let { id } = useParams();
  console.log(id);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${id}&include_adult=false`;

  useEffect(() => {
    const fetchSearched = async () => {
      const resp = await fetch(url);
      const finalResp = await resp.json();

      setData(finalResp);
    };

    fetchSearched();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <ContentContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Searched Movies</title>
        </Helmet>
        {data?.results?.map((obj) => {
          const { id, poster_path, original_title, vote_average } = obj;
          console.log(obj);
          const vote = Math.ceil(vote_average) / 2;
          return (
            <>
              <ContentWrapper>
                <div className="img-wrapper">
                  {!imgLoaded ? <ClipLoader></ClipLoader> : null}
                  <Link to={`/movie/${id}`}>
                    <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="name" onLoad={() => setImgLoaded(true)} />
                  </Link>
                </div>
                <Rating initialRating={vote} start={0} readonly fullSymbol={<img src={starUnfilled} className="icon" alt={id} />} emptySymbol={<img src={starFilled} className="icon" alt={id} />} placeholderRating={<img src={starFilled} alt={id} className="icon" />} />

                <div className="text-wrapper">
                  <MovieTitle>{original_title}</MovieTitle>
                </div>
              </ContentWrapper>
            </>
          );
        })}
      </ContentContainer>
    </>
  );

  // return <h1>hello</h1>;
};

export default SearchedMovies;
