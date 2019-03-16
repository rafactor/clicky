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
        message: [
            { level: 0, target: 0, message: "try to click only once in each color, without repeating"},
            { level: 1, target: 6, message: "try it again, without the labels"}
        ]
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
        let level = this.state.level
        let score = this.state.score;
        let maxScore = this.state.maxScore;
        let target = this.state.message[level].target;

        this.state.selected.push(id);
        score++

        this.setState({ score: score})
        
        if (score === target) {
            this.nextPhase()
        } else if (score > maxScore) {
            this.setState({maxScore: score})
        }

    }

    nextPhase = () => {
        let level = this.state.level
        level++

        this.setState({ level: level, selected: [], maxScore: 0 })
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
        let level = this.state.level * 1
        let message = this.state.message[level].message;

        if (this.state.level === null) {
            return <Start startGame={this.startGame}  />
        } else {
            return (
                <div>
                <div className="clicky-header">
                    <div className="clicky-header__title">Clicky Game</div>
                    <div className="clicky-header__subline row">
                        <div className="clicky-header__score clicky-center col s6"> Current Score: {this.state.score} </div>
                        <div className="clicky-header__maxScore clicky-center col s6">Max Score: {this.state.maxScore}</div>
                        <span className="clicky-header__message"><strong>{`Level: ${level}`}</strong><br/>{message}</span>
                        
                    </div>
                    
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