import React, { Component } from 'react'
import { Login } from './Login/Login'

export class Home extends Component {
  static displayName = 'Bar' //Home.name;

  componentWillUnmount() {
    document.body.classList.remove('loginBk')
  }

  render() {
    if (localStorage.getItem('AuthenticationToken')) {
      document.body.classList.add('loginBk')
      document.body.style = { backgroundColor: 'black' }

      return (
        <div class="login-wrapper">
          <span style={{ fontSize: '2em' }} className="beauty">
            Welcome back !
          </span>
          {/* <HeaderSelectIngredients/> */}
        </div>
      )
    }

    if (!localStorage.getItem('AuthenticationToken')) {
      return (
        <div class="login-wrapper">
          <Login />
          {/* <HeaderSelectIngredients/> */}
        </div>
      )
    }
  }
}
