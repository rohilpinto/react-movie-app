import { useState } from "react";

import { ContentContainer } from "./style";
import { Link } from "react-router-dom";
const Favorites = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const favoriteMovies = JSON.parse(localStorage.getItem("MovieCollection"));
  // const ParseFavItemsArr = FavoritedItemsArr;

  return (
    <ContentContainer>
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
