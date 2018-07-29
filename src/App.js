import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieList from './MovieList';

const api_key = "14782eb910d2e42db2ba98769fe3ec58";
let trailer_id = ((Math.random()*230)+124000).toFixed(0)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      nowPlaying: true
    }
  }

  async componentDidMount() {
    
    const timeout = ms => new Promise(res => setTimeout(res, ms));
    try {
      let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`);
      let data = await response.json();
      await timeout(1500);
      this.setState({ 
        movies: data.results,
        isLoading: false
      });
    } catch(err) { alert(err) }
  }

  async handleInputChange(inputText) {
    if (inputText.length > 0) {
      try {
        let data = await (await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${inputText}`)).json();
        this.setState({ movies: data.results });
      } catch(err) { alert(err) }
    }
  }

  async handleToggle(nowPlaying) {
    try {
      let param = this.state.nowPlaying ? 'top_rated' : 'now_playing';
      let data = await (await fetch(`https://api.themoviedb.org/3/movie/${param}?api_key=${api_key}`)).json();
      this.setState({ 
        movies: data.results,
        nowPlaying: !nowPlaying
      });
    } catch(err) { alert(err) }
  }

  async handleUpcoming() {
    try {
      let data = await (await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)).json();
      this.setState({ movies: data.results.sort((mov1, mov2) => {
        if (mov1.release_date > mov2.release_date) return -1;
        if (mov1.release_date < mov2.release_date) return 1;
      }) });
    } catch(err) { alert(err) }
  }

  async handleSelectChange(inputSelect) {
    try {
      switch(inputSelect) {
        case 'rating':
          this.setState({
            movies: this.state.movies.sort((mov1, mov2) => {
              if (mov1.vote_average > mov2.vote_average) return -1;
              if (mov1.vote_average < mov2.vote_average) return 1;
            })
          });
          break;
        case 'popularity':
          this.setState({
            movies: this.state.movies.sort((mov1, mov2) => {
              if (mov1.popularity > mov2.popularity) return -1;
              if (mov1.popularity < mov2.popularity) return 1;
            })
          });
          break;
        case 'release-date':
          this.setState({
            movies: this.state.movies.sort((mov1, mov2) => {
              if (mov1.release_date > mov2.release_date) return -1;
              if (mov1.release_date < mov2.release_date) return 1;
            })
          })
          break;
        default: // do nothing
      }
    } catch(err) { alert(err) }
  }

  render() {
    return (
      <div> 
        <Navbar 
          handleInputChange = {this.handleInputChange.bind(this)}
          handleToggle = {this.handleToggle.bind(this)} 
          handleSelectChange = {this.handleSelectChange.bind(this)}
          handleUpcoming = {this.handleUpcoming.bind(this)}
          nowPlaying = {this.state.nowPlaying} />
        <div className="outer-embed-ta">
          <iframe width="100%" src={`//v.traileraddict.com/${trailer_id}`} allowFullScreen="true" 
            webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" className="embed-ta"/>
        </div>
        <p className="refresh-text">Refresh for new random trailer</p>
        <MovieList 
          isLoading = {this.state.isLoading}
          movies = {this.state.movies} />     
      </div>       
    )
  }
}

export default App;
