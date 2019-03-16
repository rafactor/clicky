import React from "react";

export default function Start(props){
        return (
            <div className="start-painel">

        <div className="start-painel__title"
        onClick={() => props.startGame()}>
            <h1>Clicky Game</h1>
            <div>
                <p>Test your memory!</p>
                <hr/>
                <p>Press to Start</p>
            </div>
        </div>
        </div>
        )
    
}