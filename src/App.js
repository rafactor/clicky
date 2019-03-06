import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Cards from "./components/pages/game/cards"
import Header from "./components/common/header"
import About from "./views/about";
import Game from "./views/game";
import Login from "./views/login";
import Profile from "./views/profile";
import Score from "./views/score";

// import Painel from "./components/common/painel"
// import Wrapper from "./components/game/wrapper"
import cards from "./cards.json"

import './App.scss';


export default class App extends Component {

  state = {
    cards,
    cardsOrder: []
  }

  componentDidMount = () => {

  }

  buildArray = () => {
    var n = cards.length
    this.state.cardsOrder.push(n)

    cards.map(card => (
      this.state.cardsOrder.push(n - 1)
      
      
    ));

  }

  
  render() {
    return (
      <Router>
      <div>
        <Header />
        {/* <NavTabs /> */}
        <Route exact path="/" component={Game} />
        <Route exact path="/about" component={About} />
        <Route exact path="/score" component={Score} />
        <Route exact path="/game" component={Game} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
    );
  }
}

