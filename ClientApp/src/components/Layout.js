import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

import { ThemeContext, themes } from '../ThemeContext/theme-context';
// import { ThemedButton } from './ThemeContext/themed-button';


export class Layout extends Component {
  static displayName = Layout.name;

  state = {
    context: {
      themeName: "light",
      theme: themes.light,
      toggleTheme: () => {
        console.log("toggleTheme called")
        const context = {...this.state.context}
        context.themeName = this.state.context.themeName === "dark" ? "light" : "dark"
        context.theme = this.state.context.themeName === "dark" ? themes.light : themes.dark
        this.setState({context})
      }

    }

  }

  render () {
    console.log("Layout : state avant : " + this.state.context.theme.background);
    return (
      <div>
        <ThemeContext.Provider value={this.state.context}>

          <NavMenu/>

          <Container>
            {this.props.children}
          </Container>
        </ThemeContext.Provider>
      </div>
    );
  } 
}
Layout.contextType = ThemeContext;
