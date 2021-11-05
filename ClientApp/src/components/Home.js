import React, { Component } from 'react';
import Login from './Login/Login';

export class Home extends Component {
  static displayName = 'Bar'//Home.name;

  render () {
    return (
      <div>
        <h5>Welcome !</h5>
        <Login/>
      </div>
    );
  }
}
