import React, { Component } from 'react';
import FilmList from "./Film-List.js";
import FilmDetails from "./Film-Details.js"
import TMDB from "./TMDB.js";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: ''
    }
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleDetailsClick(id, event) {
    // key is "result.id"
    console.log('yay: ', id);

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data);
        this.setState({film: data});
      })
    })
  }

  render() {
    return (
      <div className="film-library">
        <FilmList movies={TMDB} onItemClick={this.handleDetailsClick} />

        <FilmDetails film={this.state.film} />
      </div>
    );
  }
}

export default App;
