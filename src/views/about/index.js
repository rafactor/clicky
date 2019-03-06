import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <section className="about__section">
                <h2>About the Game</h2>
                <p>Game description</p>
                <hr/>
                <h2>About the Developer</h2>
                <p>Bio</p>
            </section>
        )
    }
}