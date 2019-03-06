import React, { Component } from "react";
import API from "../../utils/API"



export default class Login extends Component {



    componentDidMount() {
       
      }
    
      handleInputChange = event => {
      };
    
      authGoogle = event => {
        event.preventDefault();
        console.log("google auth")
        API.route()
            .then(res => {
                console.log(res)
            })
        
        
        // .getDogsOfBreed(this.state.search)
        //   .then(res => {
        //     if (res.data.status === "error") {
        //       throw new Error(res.data.message);
        //     }
        //     this.setState({ results: res.data.message, error: "" });
        //   })
        //   .catch(err => this.setState({ error: err.message }));
      };

    render() {
        return (
            <div>
                <h2>Login</h2>
                <button type="button" name="google" className="btn btn-lg btn-danger rba-btn rba-btn__sign-in--google"
                onClick={this.authGoogle}>Google+</button>

            </div>
        )
    }
}