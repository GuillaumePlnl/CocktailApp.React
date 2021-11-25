import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'
import { Login } from './Login/Login'
import { ThemeContext, themes } from '../ThemeContext/theme-context'

export class Layout extends Component {
  static displayName = Layout.name

  state = {

    context: {
      themeName: 'light',
      theme: themes.light,
      toggleTheme: () => {
        console.log('toggleTheme context function called')
        const context = { ...this.state.context }
        context.themeName =
          this.state.context.themeName === 'dark' ? 'light' : 'dark'
        context.theme =
          this.state.context.themeName === 'dark' ? themes.light : themes.dark
        this.setState({ context })
      },

      authToken: null,
      // () => (localStorage.getItem('AuthenticationToken')),
      setAuthToken: (token) => {
        console.log('contextAuthToken context function called with : ' + token)
        const context = { ...this.state.context }
        context.authToken = token
        this.setState({context})
      },
      
      // Si le token est supprimé ou ajouté, fait la modif dans le context
      checkAuthToken: () => {
        if((localStorage.getItem('AuthenticationToken')))
        {
          this.state.context.setAuthToken((localStorage.getItem('AuthenticationToken')));
        }
      }
    },

  }

  checkAuthToken() {
    if((localStorage.getItem('AuthenticationToken')))
    {
      this.state.context.setAuthToken((localStorage.getItem('AuthenticationToken')));
    }
  }

  componentWillMount() {
    this.checkAuthToken();
  }

  render() {
    //  const [authToken] = useContext(ThemeContext);

    if(!this.state.context.authToken) {
      return(
        <ThemeContext.Provider value={this.state.context}>
            <NavMenu />
            <div>
              <Container>
                <Login/>  
              </Container>
            </div>
        </ThemeContext.Provider>

      )};
    // console.log('Layout : state avant : ' + this.state.context.theme.background);
    if(this.state.context.authToken) {
      return (
        <ThemeContext.Provider value={this.state.context}>
            <NavMenu token={this.state.context.authToken} />
            <div>
              <Container>
                {this.props.children}
              </Container>
            </div>
        </ThemeContext.Provider>
      )
    }
  }
}
Layout.contextType = ThemeContext
