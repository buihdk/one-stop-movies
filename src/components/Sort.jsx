import React from 'react';
import '../styles/Sort.css';

export default class Sort extends React.Component {
  render() {
    return (
      <select className="form-control" id="sortSelect" onChange={(e) => {this.props.handleSelectChange(e.target.value);}}>
        <option>Sort by...</option> 
        <option value="rating">Rating</option>
        <option value="popularity">Popularity</option>
        <option value="release-date">Release date</option>
      </select>
    );
  }
}
