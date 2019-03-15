import React, { Component } from "react";
import Wrapper from "./wrapper/wrapper"
import Start from "./start/start"
import cards from "../../cards.json"

export default class Game extends Component {

    state = {
        level: null,
        deckSize: 6,
        cards,
        deck: [],
        order: [],
        selected: [],
        score: 0,
        message: ""
    }

    componentDidMount = () => {
        this.setState({ level: null, deckSize: 3})

        this.buildDeck();
    }

    clickForm = (id) => {
        const selected =  this.state.selected
        let score = this.state.score

        if (selected.indexOf(id) === -1) {
            this.state.selected.push(id)
            score++
            this.setState({ score: score })
            console.log(this.state.score)
        } else {
            console.log('you lose')
            this.setState({ score: 0, message: "you lose!", selected: [] })

        }
        
        this.sortDeck()
    }

    buildDeck = () => {
       for (let i = 0; i < this.state.deckSize; i++ ) {
           this.state.deck.push(cards[i])
       }

       this.state.deck.sort();
       
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

        this.setState({ deck: deck})
    }
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
                            clickForm={this.clickForm}
                            />
        }
    }

     
    render() {
        return (
            <div>
                <div>
                    <p>Score: {this.state.score}</p>
                </div>
                {this.renderPage()}
            </div>
        )
    }
}