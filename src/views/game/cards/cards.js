import React from "react";
import "./style.scss"

export default function Card(props){
        return (
        <div className={`clicky-card clicky-card--${props.color}`} 
                key={props.key} 
                onClick={() => {props.clickForm(props.id)}}>
                
                <span className="clicky-card__text">
                {(props.level === 0) ? (props.color) : null}
                </span>
        </div>
        )
    
}