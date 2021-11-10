import {ThemeContext} from './theme-context';
import React, { Component } from 'react';

class ThemedButton extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      // backgroundColor: this.context.theme.background 
    };
}

  componentDidMount(){
    // this.setState(backgroundColor = { backgroundColor: this.context.theme.background });
    document.body.style.backgroundColor = this.context.theme.background;
    document.body.style.color = this.context.theme.foreground;

  };
  componentDidUpdate(){
    // this.setState(backgroundColor = { backgroundColor: this.context.theme.background });
    document.body.style.backgroundColor = this.context.theme.background;
    document.body.style.color = this.context.theme.foreground;
  };

  render() {
    return (
              <button
                  onClick= {() => this.context.toggleTheme()}
                  type="button" class="btn btn-dark"
                  style={{backgroundColor: this.context.theme.background, borderRadius: "50px", height: "2.7em", width: "2.7em"}}
                  >
                    
                  <img src={require("../images/moon.png")} style={{height: "1.4em", width: "1.2em", padding:"0px"}} className="ico1" alt=""/>
              </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;

