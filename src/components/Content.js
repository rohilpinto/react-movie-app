import { div } from "prelude-ls";
import React from "react";
import { Card, Card as MovieCard } from "../components/Card.styled";

const Content = ({ popularMovies, setPopularMovies }) => {
  return (
    <div>
      {popularMovies.results?.map(({ id, name, poster_path, backdrop_path }) => {
        console.log(backdrop_path);
        return (
          <div key={id}>
            <Card>
              <img src={`http://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
