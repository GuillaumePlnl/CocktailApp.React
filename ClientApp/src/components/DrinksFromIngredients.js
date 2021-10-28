import React, { Component } from 'react'
import { FetchCocktailDetail } from './FetchCocktailDetail'
import './DrinksFromIngredients.css'

export class DrinksFromIngredients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailledDrinkIsShown: false,
      selectedCocktail: '',
      cocktail: [],
      ingredients: [],
    }
  }

  handleClick = (event) => {
    // On stocke la donnée de requette dans Cocktail request
    console.log('selected cocktail : ' + event.currentTarget.id)
    this.state.selectedCocktail = event.currentTarget.id

    // on appelle l'url de l'API pour envoyer le détail du cocktail
    const url2 =
      '/cocktail/Home/getDetailledDrink/' + this.state.selectedCocktail
    console.log('getDetailledDrink, url sent : ' + url2)
    fetch(url2)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ cocktail: result, detailledDrinkIsShown: true })
      })

    event.preventDefault()
  }

  setShown = (value) => {
    this.setState({ detailledDrinkIsShown: value })
  }
  
  render() {
    return this.props.AnswerIsShown ? (
      this.state.detailledDrinkIsShown ? (
        <React.Fragment>
          <FetchCocktailDetail
            cocktail={this.state.cocktail}
            ingredients={this.state.ingredients}
            setShown={this.setShown}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 id="tableLabel">Cocktails from your ingredients : </h1>

          <div id="cards">
            {this.props.cocktailsParam.map((e) => (
              <div
                onClick={this.handleClick}
                id={e.pkId}
                class="card" /*style={{width: 16 + 'rem'}}*/
              >
                <img src={e.urlPicture} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{e.drinkName}</h5>
                  <p class="card-text">{e.instruction}...</p>
                  {/* <a  id={e.pkId} class="btn btn-primary">{e.idSource}</a> */}
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )
    ) : (
      <p> (Ctr DrinksFromIngredients.) </p>
    )
  }
}
