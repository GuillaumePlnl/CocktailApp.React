import { returnStatement } from '@babel/types';
import React, { Component } from 'react'

import './Login.css'

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            username: '',
            password: '',
            answerJson : '',
            loading: true,
            AuthIsOk: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        document.body.classList.add('loginBk');
        document.body.style=({backgroundColor : "black"})
    };
    componentWillUnmount() {
        document.body.classList.remove('loginBk');
    };

    handleSubmit(event) {
      let AuthenticateRequestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };
      console.log("envoi de l'url. POST Authenticate user : " + '/Users/authenticate/');
      console.log("fichier json : " + AuthenticateRequestOptions);
      fetch('/Users/authenticate/', AuthenticateRequestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ answerJson: data })
        })
        if(! localStorage.getItem('AuthenticationToken')) 
          {
            localStorage.setItem("AuthenticationToken", this.state.answerJson.token)
          }
      this.setState({AuthIsOk : this.state.answerJson.message})
      event.preventDefault()
    }

    updateValueUsername = (evt) => {
      this.setState({ username: evt.target.value })}

    updateValuePassword = (evt) => {
      this.setState({ password: evt.target.value })}

  render() {
      return (
        <div>
          <h1>Please Log In</h1>
          <form class="form-group" onSubmit={this.handleSubmit}>
            <label>
              <p>Username</p>
              <input value={this.state.username} type="text" onChange={this.updateValueUsername} class="form-control" />
            </label>
            <br />
            <label>
              <p>Password</p>
              <input value={this.state.password} type="password" onChange={this.updateValuePassword} class="form-control" />
            </label>
            <div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              {(this.state.AuthIsOk != '') ? (<div style={{color: "red", paddingTop: "0.5em"}}>{this.state.AuthIsOk}</div>) : ""}
            </div>
          </form>
        </div>
    )}
}
