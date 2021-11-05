import {ThemeContext} from './theme-context';
import React, { Component } from 'react';
import { Layout } from '../components/Layout';


class ThemedButton extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
              <button
                  onClick= {() => this.context.toggleTheme()}
                  type="button" class="btn btn-dark"
                  style={{backgroundColor: this.context.theme.background}}
                  >
                    
                  <img src={require("../images/moon.jpg")} className="ico1" alt=""/>
              </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;

