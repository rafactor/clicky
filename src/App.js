import React, { Component } from 'react';
import Cards from "./Components/Cards"
import Header from "./Components/Header"
import Painel from "./Components/Painel"
import Wrapper from "./Components/Wrapper"
import cards from "./cards.json"

import './App.scss';


class App extends Component {

  state = {
    cards,
    cardsOrder: []
  }

  reorder = () => {
    console.log('reorder')
  }

  buildArray = () => {
    var n = cards.length
    this.state.cardsOrder.push(n)

    cards.map(card => (
      this.state.cardsOrder.push(n - 1)
      
      
    ));

      console.log(this.state.cardsOrder)
  }

  
  render() {
    return (
      <div className="container-fluid">
       <Header />
       <Painel />
      <Wrapper>
        {this.state.cards.map(card => (
          <Cards 
          id = {card.id}
          name = {card.name}
          image = {card.image}
          />
        ))}
      </Wrapper>
      {  this.buildArray() }
      </div>
    );
  }
}

console.log(cards)
export default App;
