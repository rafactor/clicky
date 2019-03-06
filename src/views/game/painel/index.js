import React from "react";
import "./style.scss"

export default function Painel(){
        return (
        <div className="clicky-card__painel">
        <h1>Clicky Game</h1>
        <div>
            <p>Press Start to Begin</p>
            <button name="start" value="start">Start</button>
        </div>
        </div>
        )
    
}