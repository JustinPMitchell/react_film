import React from 'react';
import FilmPoster from './FilmPoster';
import TMDB from "./TMDB.js";

const FilmRow = (props) => {
    var d = new Date(props.film.release_date);
    var n = d.getFullYear();
    return (
      <div className='film-row' onClick={(e) => { props.onItemClick(props.film.id, e) }}>
        <FilmPoster poster={props.film.poster_path} />
        <div className='film-tilte-date'>
          <h1>{props.film.title}</h1>
          <p>{n}</p>
        </div>
      </div>
  );
}

// class FilmRow extends Component {
//   render() {
//     var d = new Date(this.props.film.release_date);
//     var n = d.getFullYear();
//     return (
//       <div className='film-row' onClick={(e) => { this.props.onItemClick(this.props.film.id, e) }}>
//         <FilmPoster poster={this.props.film.poster_path} />
//         <div className='film-tilte-date'>
//           <h1>{this.props.film.title}</h1>
//           <p>{n}</p>
//         </div>
//       </div>
//   );
//   }
// }

export default FilmRow;