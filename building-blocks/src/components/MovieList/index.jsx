import { useState, useEffect } from "react";

import MovieListItem from '../MovieListItem'

const MovieList = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const loadMovies = async () => {
      const response = await fetch('http://localhost:3000/movies');
      const data = await response.json();
      setMovies(data);
    };
    loadMovies();
  }, [])

  if(!movies) return <div>Loading...</div>

  return (
    movies.map(movie => <MovieListItem movie={movie} key={movie.id}></MovieListItem>)
  )


}

export default MovieList;