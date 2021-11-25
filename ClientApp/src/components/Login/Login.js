import React, { Component } from 'react'
import { ThemeContext } from '../../ThemeContext/theme-context'
import './Login.css'

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      answerJson: null,
      loading: true,
      AuthIsOk: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    document.body.classList.add('loginBk')
    document.body.style = { backgroundColor: 'black' }
  }

  componentWillUnmount() {
    document.body.classList.remove('loginBk')
  }

  async handleSubmit(event) {
    let AuthenticateRequestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    }
    console.log(
      "envoi de l'url. POST Authenticate user : /Users/authenticate/",
    )
    console.log('fichier json : ' + AuthenticateRequestOptions)

    fetch('/Users/authenticate/', AuthenticateRequestOptions)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ answerJson: result })
      })
      // console.log(this.state.answerJson);
      .then(() => {
        if (!localStorage.getItem('AuthenticationToken')) {
          localStorage.setItem(
            'AuthenticationToken',
            this.state.answerJson.token)
          this.setState({ AuthIsOk: 'Sucessfully logged in' })
          setTimeout(1500)
        }

        // Save token to React context in Layout (base display component of the site)
        this.context.setAuthToken(localStorage.getItem('AuthenticationToken'))
        console.log(
          'New token : ' + localStorage.getItem('AuthenticationToken'),
        )

        this.setState({
          AuthIsOk: this.state.answerJson.message
            ? this.state.answerJson.message
            : 'Succes, welcome',
        })
        setTimeout(1500);

        // reload page to display content
        window.location.reload(true)
      })
    event.preventDefault()
  }

  updateValueUsername = (evt) => {
    this.setState({ username: evt.target.value })
  }
  updateValuePassword = (evt) => {
    this.setState({ password: evt.target.value })
  }

  render() {
    return (
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form class="form-group" onSubmit={this.handleSubmit}>
          <label>
            <p>Username</p>
            <input
              value={this.state.username}
              type="text"
              placeholder="username"
              onChange={this.updateValueUsername}
              class="form-control"
            />
          </label>
          <br />
          <label>
            <p>Password</p>
            <input
              value={this.state.password}
              type="password"
              placeholder="password"
              onChange={this.updateValuePassword}
              class="form-control"
            />
          </label>
          <div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            {this.state.AuthIsOk !== '' ? (
              <div style={{ color: 'red', paddingTop: '0.5em' }}>
                {this.state.AuthIsOk}
              </div>
            ) : (
              ''
            )}
          </div>
        </form>
      </div>
    )
  }
}
Login.contextType = ThemeContext
