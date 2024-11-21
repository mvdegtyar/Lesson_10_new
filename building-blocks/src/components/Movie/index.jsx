import { useState, useEffect } from 'react';

import MovieDetail from '../MovieDetail';
import MovieDetailWithLoad from '../MovieDetailWithLoad';

import './style.css'

const Movie = () => {
  const [movie, setMovie] = useState();

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const loadMoovie = async () => {
      const res = await fetch('http://localhost:3000/movies/1');
      const data = await res.json()
      setMovie(data);
    };

    loadMoovie();
  }, [])

  if (!movie) {
    return (<div>Loading...</div>)
  }
  return (
    <div className='movie-container'>
      <span className="movie-title">{movie.title}</span>
      <span className="movie-yeare">{movie.year}</span>
      <div className='movie-genres'>
        {movie.genres.map(genre => (<span className='movie-genre' key={genre}>{genre}</span>))}
      </div>
      <button onClick={_ => setOpened(!opened)}> {opened ? 'Hide details' : 'Show details'}</button>
      {/* <MovieDetail description ={movie.extract} image={movie.thumbnail} opened={opened}></MovieDetail> */}
      <MovieDetailWithLoad opened={opened} id={movie.id}></MovieDetailWithLoad>
    </div>
  )
}

export default Movie;