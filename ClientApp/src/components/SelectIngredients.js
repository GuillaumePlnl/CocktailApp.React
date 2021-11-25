import React, { Component } from 'react';
import { SelectIngredient } from './Selectingredient';
import { DrinksFromIngredients } from './DrinksFromIngredients';
import {useTranslation} from "react-i18next";
import { Login } from './Login/Login';

export function HeaderSelectIngredients()
{
    const {t} = useTranslation('common');
    return(
        <SelectIngredients t={t}/>
    )
}

// ComponentWillMount() {
//     if(localStorage.getItem('AuthenticationToken'))
// }

export class SelectIngredients extends Component {

    constructor(props) {

        super(props);
        this.state = {  
            dict: [],
            cocktails: [],
            value: [],
            allIngredients: [],
            loading: true,
            AnswerIsShown : false,
            renderCompo: true,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    selectIngredient = (event) => {
        console.log("id : " + event.target.id + " value : " + event.target.value);
        let newDict = [...this.state.dict];
        newDict[event.target.id] = event.target.value;
        this.setState({ dict: newDict });
    }

    async handleSubmit(event) {
        //TODO : supprimer les chaines vides du tableau dict
        let tokenString = (localStorage.getItem('AuthenticationToken'));
        let HeaderOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
                      'Authorization' : tokenString },
          // body: JSON.stringify({ username: this.state.username, password: this.state.password })
        };

        let url = '/cocktail/GetDrinkByIngredientsId/' + this.state.dict.join('&Ids=');
        console.log("envoi de l'url" + url);
        await fetch(url, HeaderOptions)
            .then((res) => res.json())
            .then((result) => {
                this.setState({cocktails: result, AnswerIsShown: true})})
            .then(event.preventDefault());
    }

    async componentDidMount() {
        document.title = SelectIngredients.name
        const response = await fetch('/cocktail/allIngredients');
        let data = await response.json();
        // var sortedData = data.sort( );                          //Marche pas
        this.setState({ allIngredients: data, loading: false });    
    }

    render() {
        let contents = this.state.loading ? (
            <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
            </div>

        ) : (

            // this.renderIngredientsSelectTable(this.state.allIngredients);
        <form id="ingredientForm" onSubmit={this.handleSubmit}>
            <SelectIngredient id="0"    title={this.props.t('SelectYourIngredients.title1')} 
                                        handleChange={this.selectIngredient} 
                                        value={this.state.dict[0]} 
                                        allIngredients={this.state.allIngredients} />

            <SelectIngredient id="1"    title={this.props.t('SelectYourIngredients.title2')} 
                                        handleChange={this.selectIngredient} 
                                        value={this.state.dict[1]} 
                                        allIngredients={this.state.allIngredients} />

            <SelectIngredient id="2"    title={this.props.t('SelectYourIngredients.title3')} 
                                        handleChange={this.selectIngredient} 
                                        value={this.state.dict[2]} 
                                        allIngredients={this.state.allIngredients} />

            <div class="mw-100"> <br/>
                <input type="submit" value={this.props.t('Validate.v1')} class="btn btn-success btn-lg btn-block" />
            </div>
        </form> 
        );

        // const HighOrderComponentTranslated = withTranslation('common')(SelectIngredients)
        if(localStorage.getItem('AuthenticationToken')) {
            return (
                <div>
                    <h1 id="tableLable">{this.props.t('Title.title1')}</h1>
                    <p></p>
                    {contents}
                    <DrinksFromIngredients      cocktailsParam={this.state.cocktails} 
                                                AnswerIsShown={this.state.AnswerIsShown} />
                </div> 
            );
        }
        else {
            return (
            <div>
                <h1 id="tableLable">{this.props.t('Title.title1')}</h1>
                <p></p>
                <Login/>
                <DrinksFromIngredients      cocktailsParam={this.state.cocktails} 
                                            AnswerIsShown={this.state.AnswerIsShown} />
            </div> )    

        }
    }
}
