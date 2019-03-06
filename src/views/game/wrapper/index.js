import React, { Component } from "react";
import Card from "../cards"

export default class Wrapper extends Component {

  // componentDidMount = () => {
  //   console.log(this.props.state.level)
  // }
    render() {

    return (
      <div 
      className="wrapper d-flex flex-wrap justify-content-around">
      {this.props.deck.map(card => (
            <Card color={card.color} 
                  key={card.id}
                  
          />
      ))}
      
      <button name="sort" onClick={() => {this.props.sortDeck()}}>Sort</button>
      </div>
    )
      }
    
  }