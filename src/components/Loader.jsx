import React from 'react';
import '../styles/Loader.css';

export default class Loader extends React.Component {
  render() {
    return (
      <svg className="loader" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#E2007C" />
        <circle cx="170" cy="170" r="135" stroke="#404041" />
        <circle cx="170" cy="170" r="110" stroke="#E2007C" />
        <circle cx="170" cy="170" r="85" stroke="#404041" />
      </svg>
    );
  }
}