import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  // withRouter
} from "react-router-dom";

// import Cards from "./components/pages/game/cards"
import Header from "./components/common/header"
import About from "./views/about/about";
import Game from "./views/game/game";
import Login from "./views/login/login";
// import PrivateRoute from "./components/auth/PrivateRoute"
// import Profile from "./views/profile";
import Score from "./views/score/score";

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
    // var n = cards.length
    // this.state.cardsOrder.push(n)

    // cards.map(card => (
    //   this.state.cardsOrder.push(n - 1)
      
      
    // ));
  }

  
  render() {
    return (
      <Router>
      <div>
        {/* <Header /> */}
        {/* <NavTabs /> */}
        <Route path="/game" component={Game} />
        <Route path="/" component={Game} />
        {/* <Route path="/score" component={Score} />
        <Route path="/login" component={Login} /> */}
      
      </div>
    </Router>
    );
  }
}

