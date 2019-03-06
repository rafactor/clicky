import React from "react";
import "./style.scss"

export default function Start(props){
        return (
        <div className="clicky-card__painel">
        <h1>Clicky Game</h1>
        <div>
            <p>Press Start to Begin</p>
            <button name="start" value="start" onClick={() => props.startGame()}>Start</button>
        </div>
        </div>
        )
    
}