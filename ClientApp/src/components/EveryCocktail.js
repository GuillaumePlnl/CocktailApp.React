import React, { Component, Container } from 'react'
import { FetchCocktailDetail } from './FetchCocktailDetail'
import { ThemeContext } from '../ThemeContext/theme-context'
import { NavMenu } from './NavMenu'
import { Login } from './Login/Login'

export class EveryCocktail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      detailledDrinkIsShown: false,
      selectedCocktail: '',
      cocktails: [],
      detailCocktail: [],
    }
  }

  // AUTH CHECK
  componentWillMount() {
    this.context.checkAuthToken();
  }
  async componentDidMount() {

    //  if(user == null){
      
    // }
    // else{
      let HeaderOptions = this.GenerateAuthorizedHeader()

      // let actualToken = localStorage.getItem('AuthenticationToken');
      const response = await fetch('/cocktail/GetAllCocktails', HeaderOptions)
      let data = await response.json()
      this.setState({ cocktails: data, loading: false })
    //}
  }

  handleClick = (event) => {
    // On stocke la donnée de requette dans Cocktail request
    console.log('selected cocktail : ' + event.currentTarget.id)
    this.setState({selectedCocktail: event.currentTarget.id})
    // on appelle l'url de l'API pour envoyer le détail du cocktail
    let url2 = '/cocktail/getDetailledDrink/' + this.state.selectedCocktail
    console.log('getDetailledDrink, url sent : ' + url2)
    fetch(url2, this.GenerateAuthorizedHeader())
      .then((res) => res.json())
      .then((result) => {
        this.setState({ detailCocktail: result, detailledDrinkIsShown: true })
      })

    event.preventDefault()
  }

  handleSearchCocktailChange = (event) => {
    let searchString = event.target.value;
    let url = '/cocktail/GetDrinkBySearchName/' + searchString;
    console.log('Appel de GetDrinkBySearchName : ' + url);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ cocktails: result })
      })

    event.preventDefault()
  }

  GenerateAuthorizedHeader() {
    let tokenString = (localStorage.getItem('AuthenticationToken'))
    let HeaderOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': tokenString
      },
      // body: JSON.stringify({ username: this.state.username, password: this.state.password })
    }
    return HeaderOptions
  }

  setShown = (value) => {
    this.setState({ detailledDrinkIsShown: value })
  }
  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    if (this.state.loading) {
      return (
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      )
    }

    if(!this.context.authToken) {
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

    let contents = this.state.detailledDrinkIsShown ? (
      <React.Fragment>
        <FetchCocktailDetail
          cocktail={this.state.detailCocktail}
          setShown={this.setShown}
        />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1 id="tableLabel">10 random cocktails </h1>
          <button onClick={this.refreshPage} type="button" class="btn btn-outline-dark btn-block">Click to reload!
          </button><br/>
          <div> Or, look for a precise one ....</div>
          <input  onChange={this.handleSearchCocktailChange} class="form-control" type="text" 
                  placeholder="Try a name..."></input>
          <br/>
        <div id="cards" >
          {this.state.cocktails.map((e) => (
            <div
              onClick={this.handleClick}
              id={e.pkId}
              class="card"
              style={{ height: 20 + 'rem' }}
            >
              <img src={e.urlPicture} class="card-img-top" alt="..." 
                    />
              <div class="card-body">
                <h6 class="card-title">{e.drinkName}</h6>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
    return <div>{contents}</div>
  }
}
EveryCocktail.contextType = ThemeContext
