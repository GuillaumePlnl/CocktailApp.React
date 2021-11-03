import React, { Component } from 'react';

import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchCocktailDetail } from './components/FetchCocktailDetail';
import { DrinksFromIngredients } from './components/DrinksFromIngredients';
import { HeaderSelectIngredients } from './components/SelectIngredients';
import { EveryCocktail } from './components/EveryCocktail';

import './App.css'

// DEPLACEE DANS UN STATELESS APPELE A LA PLACE DU COMPOSANT STATEFULL POUR
// PERMETTRE L'UTILISATION DU HOOK useTranslation

// export function HeaderSelectIngredients()
// {
//     const {t, i18n} = useTranslation('common');
//     return(
//         <SelectIngredients t={t}/>
//     )
// }

export default class App extends Component {
    static displayName = App.name;

    render() {

        return (
            <Layout className="App">
                {/* <HeaderSelectIngredients/> */}
                <Route exact path='/' component={Home} />
                <Route path='/fetch-cocktail-detail' component={FetchCocktailDetail} />
                <Route path='/from-ingredients' component={DrinksFromIngredients} />
                <Route path='/select-ingredients' component={HeaderSelectIngredients} />
                <Route path='/every-cocktail' component={EveryCocktail} />
            </Layout>
        );
    }
}
