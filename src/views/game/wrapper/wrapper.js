import React, { Component } from "react";
import Card from "../cards/cards"

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
                  id={card.id}
                  key={card.key}
                  clickForm={this.props.clickForm}                  
          />
      ))}
      
      </div>
    )
      }
    
  }