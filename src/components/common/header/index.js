import React, { Component } from "react";
import { 
  // BrowserRouter as Router, 
  // Route, 
  Link } from "react-router-dom";

import "./style.scss"

export default class Header extends Component {
    state = {
        name: "clicky",
        user: "Rafael",
        Score: 0,
        Life: 5,
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/game">Clicky</Link>
            {/* <a className="navbar-brand" href="#">Clicky</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                {/* <Link to="/about">About</Link> */}
                  {/* <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a> */}
                </li>
                <li className="nav-item">
                <Link to="/score">Score</Link>
                  {/* <a className="nav-link" href="#">Scores</a> */}
                </li>
                <li className="nav-item">
                <Link to="/profile">Profile</Link>
                  {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Profile</a> */}
                </li>
              </ul>
              <span className="navbar-text">
              <Link to="/login">Login</Link>
              </span>
            </div>
          </nav>
        )
    }
}