import React from 'react';
import '../styles/MovieList.css';
import Loader from './Loader';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    return (
      <div>   
        <div className='movie-list'>
          { this.props.isLoading ? <Loader/> : this.props.movies.map((movie, index) => (<MovieCard {...movie} key={index}/>)) } 
        </div>
      </div>
    );
  }
}
