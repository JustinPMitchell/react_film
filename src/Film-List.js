import React, { Component } from 'react';
import TMDB from "./TMDB.js";
import FilmRow from './Film-Row.js';



class FilmList extends Component {
  render() {
    const allFilms = this.props.movies.films.map((item) => (
       <FilmRow film={item} onItemClick={this.props.onItemClick}/>
     ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}

      </div>
    );
  }
}

export default FilmList;