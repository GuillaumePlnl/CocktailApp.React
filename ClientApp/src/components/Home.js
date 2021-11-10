import React, { Component } from 'react';
import {Login} from './Login/Login';

export class Home extends Component {
  static displayName = 'Bar'//Home.name;



  render () {
    return (
      <div  class="login-wrapper">
        <Login/>
      </div>
    );
  }
}
