import React from 'react';
import TMDB from "./TMDB.js";

const FilmPoster = (props) => {
  const filmImage = 'https://image.tmdb.org/t/p/w780/' + props.poster;
  return (
    <div>
      <img src={filmImage} alt='' />
    </div>
  );
}

export default FilmPoster;