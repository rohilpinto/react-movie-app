import { useState } from "react";
import { Helmet } from "react-helmet";
import { ContentContainer } from "./style";
import { Link } from "react-router-dom";
const Favorites = () => {
  const [, setImgLoaded] = useState(false);

  const favoriteMovies = JSON.parse(localStorage.getItem("MovieCollection"));

  return (
    <ContentContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favorites</title>
      </Helmet>
      {favoriteMovies?.map(({ id, original_title, poster_path }) => {
        return (
          <div>
            <Link to={`/movie/${id}`}>
              <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="name" onLoad={() => setImgLoaded(true)} />
            </Link>
            <h1>{original_title}</h1>
          </div>
        );
      })}
    </ContentContainer>
  );
};

export default Favorites;
