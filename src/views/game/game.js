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
        maxScore: 0,
        message: ""
    }

    componentDidMount = () => {
        this.setState({ level: null, deckSize: 3})

        this.buildDeck();
    }

    clickForm = (id) => {
        const selected =  this.state.selected

        if (selected.indexOf(id) === -1) {
            this.rightClick(id)
           
        } else {
            console.log('you lose')
            this.setState({ score: 0, message: "you lose!", selected: [] })

        }
        
        this.sortDeck()
    }

    rightClick = (id) => {
        let score = this.state.score;
        let maxScore = this.state.maxScore;

        this.state.selected.push(id);
        score++

        this.setState({ score: score, message: "good move!" })
        
        if (score > maxScore) {
            this.setState({maxScore: score})
        }

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
            return (
                <div>
                <div className="header">
                    <div className="header__title">Clicky Game</div>
                    <p className="header__score">Current Score: {this.state.score} 
                    <span className="header__maxScore">Max Score: {this.state.maxScore}</span>
                    <span className="header__message">{this.state.message}</span></p>
                </div>
                     <Wrapper  
                            deck={this.state.deck}
                            level={this.state.level} 
                            sortDeck={this.sortDeck}
                            clickForm={this.clickForm}
                            />
                </div>
            )
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