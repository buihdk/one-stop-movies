import React from "react";
import "./Navbar.css";
import Toggle from './Toggle';
import Sort from './Sort';
import Search from './Search';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://www.buihdk.com/">
            <picture>
              <source media="(min-width: 768px)" srcSet="https://i.imgur.com/fyy54ei.png"/>
              <source media="(max-width: 767px)" srcSet="https://i.imgur.com/IvqNDix.png"/>
              <img src="https://i.imgur.com/fyy54ei.png" alt="CS-responsive" height="50px"/>
            </picture>
            <span className="title">OSM</span>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item pt-3">
                <Toggle handleToggle={this.props.handleToggle} nowPlaying={this.props.nowPlaying} />
              </li>
              <li className="nav-item pt-3">
                <Sort handleSelectChange={this.props.handleSelectChange} />
              </li>
              <li className="nav-item pt-3">
                <button className="bttn btn-refresh" onClick={() => {window.location.reload()}}>Refresh</button>
              </li>
              <li className="nav-item pt-3">
                <button className="bttn btn-upcoming" onClick={this.props.handleUpcoming}>
                  <span className="blinking-text">Coming soon</span>
                </button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item pt-3">
                <Search handleInputChange={this.props.handleInputChange} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
} 