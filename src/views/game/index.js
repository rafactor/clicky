import React, { Component } from "react";
import Wrapper from "./wrapper"
import Start from "./start"
import cards from "../../cards.json"

export default class Game extends Component {

    state = {
        level: null,
        deckSize: 3,
        cards,
        deck: [],
        order: [],
        selected: []
    }

    componentDidMount = () => {
        this.setState({ level: null, deckSize: 3})

        this.buildDeck();

        
    }

    buildDeck = () => {
       for (let i = 0; i < this.state.deckSize; i++ ) {
           this.state.deck.push(cards[i])
       }

       this.state.deck.sort();
       
      console.log(this.state.deck)
    //    .sort()?.log(deck)
    }

    sortDeck = () => {
        let deck = this.state.deck
        var currentIndex = deck.length, 
        temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }

    console.log(deck)
    }

    displayDeck = () => {
        for (let i = 0; i < this.state.deck.length; i++) {

        }
    }

    startGame = () => {
        this.setState({ level: 0 })
    }

    renderPage = () => {
        if (this.state.level === null) {
            return <Start startGame={this.startGame}  />
        } else {
            return <Wrapper  
                            deck={this.state.deck}
                            level={this.state.level} 
                            sortDeck={this.sortDeck}
                            />
        }
    }

     
    render() {
        return (
            <div>
                {this.renderPage()}
            </div>
        )
    }
}