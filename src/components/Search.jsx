import React from 'react';
import '../styles/Search.css';

export default class Search extends React.Component {
  render() {
    return (
      <div className="search-wrapper">
        <input type="text" placeholder="Search for a movie" className="search"
          onChange={(e) => this.props.handleInputChange(e.target.value)}/>
      </div>
    );
  }
}
