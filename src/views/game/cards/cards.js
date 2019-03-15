import React from "react";
import "./style.scss"

export default function Card(props){
        return (
        // <div className={`clicky-card__wrapper clicky-card__wrapper--${props.color} order-3`} 
        <div className={`clicky-card clicky-card--${props.color}`} 
                key={props.key} 
                onClick={() => {props.clickForm(props.id)}}>
                <span className="clicky-card__text">{props.color}</span></div>
        // </div>
        )
    
}