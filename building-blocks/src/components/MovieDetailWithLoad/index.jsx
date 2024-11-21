import { useState, useEffect } from 'react';

import './style.css'

const MovieDetailWithLoad = ({ id, opened }) => {
  const [movieDetail, setMovieDetail] = useState();
  useEffect(() => {
    const loadDetail = async () => {
      const response = await fetch(`http://localhost:3000/movie-details/${id}`);
      const data = await response.json();
      setMovieDetail(data);
    }
    if (opened) {
      loadDetail();
    }

  }, [opened])

  if (!opened) {
    return <></>
  }

  if (!movieDetail) {
    return <div>Loading...</div>
  }

  return (
    <div className='detail-container'>
      <img src={movieDetail.thumbnail} alt='movie image'></img>
      <span>{movieDetail.extract}</span>
    </div>
  )
}

export default MovieDetailWithLoad;