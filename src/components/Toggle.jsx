import React from 'react';
import '../styles/Toggle.css';

export default class Toggle extends React.Component {
  render() {
    return (
      <div className="toggle-wrapper">
        <input type="checkbox" id="cb5" className="tgl tgl-flip"
          onChange={() => this.props.handleToggle(this.props.nowPlaying)} />
        <label className="tgl-btn" data-tg-off="Now Playing" data-tg-on="Top Rated" htmlFor="cb5" />
      </div>
    );
  }
}
