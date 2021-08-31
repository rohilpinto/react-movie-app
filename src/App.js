import "./App.scss";
import React, { useEffect, useState, useContext } from "react";
import Content from "./components/Content";

const KEY = process.env.REACT_APP_MOVIE_API_KEY;

// console.log(KEY);

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  // const url = `https://api.themoviedb.org/3/movie/550?api_key=${KEY}`;
  const url = `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const MovieList = await response.json();

      setPopularMovies(MovieList);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Content popularMovies={popularMovies} setPopularMovies={setPopularMovies}></Content>
    </div>
  );
}

export default App;
