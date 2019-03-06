import React, { Component } from "react";
import Wrapper from "./wrapper"
import Painel from "./painel"
import Card from "./cards"
import cards from "../../cards.json"

export default class Game extends Component {

    state = {
        cards,
        order: [],
        selected: []
    }

    componentDidMount = () => {
        console.log(this.state.cards)
    }
  
    
    render() {
        return (
            <Wrapper>
                <Painel />
                {this.state.cards.map(card => (
                    <Card  
                    color={card.color} 
                    id={card.id}
                    // image={card.image}
                    />
                )
                   

                )}
            </Wrapper>
        )
    }
}