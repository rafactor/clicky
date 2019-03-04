import React, { Component } from "react";
import "./style.scss"

export default class Header extends Component {
    state = {
        name: "clicky",
        user: "Rafael",
        Score: 0,
        Life: 5,
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/home">
                  <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                  Clicky
                  </a>

                  <span class="text-light">
                        Score <span className="header__score">{this.state.Score} </span> |
                        Life <span className="header__life">{this.state.Life}</span>
                        
                 </span>
                 <span className="text-light header__icon"><i class="far fa-user-circle h4 navbar-text"></i>Login</span>
            </nav>
        )
    }
}