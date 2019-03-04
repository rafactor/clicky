import React from "react";
import "./style.scss"

export default function Card(props){
        return (
        <div className="card__wrapper order-3" onClick={() => {
            alert(props.id)
        }}>
            <img src={props.image} alt={props.name} className="card__image" />
        </div>
        )
    
}