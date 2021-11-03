import React, { Component } from 'react'
import { FetchCocktailDetail } from './FetchCocktailDetail'

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

  async componentDidMount() {
    document.title = EveryCocktail.name
    const response = await fetch('/cocktail/Home/GetAllCocktails')
    let data = await response.json()
    this.setState({ cocktails: data, loading: false })
  }

  handleClick = (event) => {
    // On stocke la donnée de requette dans Cocktail request
    console.log('selected cocktail : ' + event.currentTarget.id)
    this.setState({selectedCocktail: event.currentTarget.id})
    // on appelle l'url de l'API pour envoyer le détail du cocktail
    let url2 = '/cocktail/Home/getDetailledDrink/' + this.state.selectedCocktail
    console.log('getDetailledDrink, url sent : ' + url2)
    fetch(url2)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ detailCocktail: result, detailledDrinkIsShown: true })
      })

    event.preventDefault()
  }

  handleSearchCocktailChange = (event) => {
    let searchString = event.target.value;
    let url = '/cocktail/Home/GetDrinkBySearchName/' + searchString;
    console.log('Appel de GetDrinkBySearchName : ' + url);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ cocktails: result })
      })

    event.preventDefault()
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
