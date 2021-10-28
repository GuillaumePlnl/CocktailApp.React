import React, { Component } from 'react';
import { SelectIngredient } from './Selectingredient';
import { DrinksFromIngredients } from './DrinksFromIngredients';

export class SelectIngredients extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            dict: [],
            cocktails: [],
            value: [], 
            allIngredients: [], 
            loading: true,
            AnswerIsShown : false
        };
        // this.handleChange = this.selectIngredient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    selectIngredient = (event) => {
        console.log("id : " + event.target.id + " value : " + event.target.value);
        let newDict = [...this.state.dict];
        newDict[event.target.id] = event.target.value;
        this.setState({ dict: newDict });
    }


    handleSubmit(event) {
        //TODO : supprimer les chaines vides du tableau dict

        let url = '/cocktail/Home/GetDrinkById/' + this.state.dict.join('&Ids=');
        console.log("envoi de l'url" + url);
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                this.setState({cocktails: result, AnswerIsShown: true});
            })
        event.preventDefault();
    }

    async componentDidMount() {
        const response = await fetch('/cocktail/Home/allIngredients');
        let data = await response.json();
        var sortedData = data.sort( );                          //Marche pas
        this.setState({ allIngredients: sortedData, loading: false });    
    }


    render() {
        let contents = this.state.loading ? (

            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            
        ) : (
            // this.renderIngredientsSelectTable(this.state.allIngredients);
            <form id="ingredientForm" onSubmit={this.handleSubmit}>
            <SelectIngredient id="0"    title="Choose your first ingredient : " 
                                        handleChange={this.selectIngredient} 
                                        value={this.state.dict[0]} 
                                        allIngredients={this.state.allIngredients} />

            <SelectIngredient id="1"    title="Choose the 2nd ingredient : " 
                                        handleChange={this.selectIngredient} 
                                        value={this.state.dict[1]} 
                                        allIngredients={this.state.allIngredients} />

            <SelectIngredient id="2"    title="Choose the 3rd ingredient : " 
                                        handleChange={this.selectIngredient} 
                                        value={this.state.dict[2]} 
                                        allIngredients={this.state.allIngredients} />

            <div class="mw-100"> <br/>
                <input type="submit" value="Validate" class="btn btn-success btn-lg btn-block" />
            </div>
        </form>
        );

        return (
            <div>
                <h1 id="tableLabel">Select your ingredients</h1>
                <p></p>
                {contents}

                <DrinksFromIngredients      cocktailsParam={this.state.cocktails} 
                                            AnswerIsShown={this.state.AnswerIsShown} />
            </div>
        );
    }

}
