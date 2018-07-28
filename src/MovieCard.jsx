import React from 'react';
import './MovieCard.css';

export default class MovieCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFront: true
    }
  }
  render() {
    return (
      <div>
        <div className={`movie-card flip-container ${this.state.isFront ? '' : 'clicked'}`} onClick={() => this.setState({isFront: !this.state.isFront})}>
          <div className="front">
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w342${this.props.poster_path}`} alt="movie-img" />
            <div className="gradient"/>
            <h1 className="rating">{this.props.vote_average.toFixed(1)}</h1>
          </div>          
          <div className="back">
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w342${this.props.backdrop_path}`} alt="movie-img" />
            <div className="content-wrapper">
              <p className="movie-title">{this.props.title}</p>   
              <div className="fig-wrapper">
                <p className="popularity">{this.props.popularity.toFixed(1)}</p>
                <p className="release-date">{this.props.release_date}</p>
              </div>
              <p>{this.props.overview.substring(0, 200)}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
