import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchCocktailDetail } from './components/FetchCocktailDetail';
import { DrinksFromIngredients } from './components/DrinksFromIngredients';
import { SelectIngredients } from './components/SelectIngredients';
import { EveryCocktail } from './components/EveryCocktail';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/fetch-cocktail-detail' component={FetchCocktailDetail} />
                <Route path='/from-ingredients' component={DrinksFromIngredients} />
                <Route path='/select-ingredients' component={SelectIngredients} />
                <Route path='/every-cocktail' component={EveryCocktail} />
            </Layout>
        );
    }
}
