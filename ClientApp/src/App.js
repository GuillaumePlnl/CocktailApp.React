import React, { useState } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchCocktailDetail } from './components/FetchCocktailDetail';
import { DrinksFromIngredients } from './components/DrinksFromIngredients';
import { HeaderSelectIngredients } from './components/SelectIngredients';
import { EveryCocktail } from './components/EveryCocktail';

import {Login} from './components/Login/Login';



// DEPLACEE DANS UN STATELESS APPELE A LA PLACE DU COMPOSANT STATEFULL POUR
// PERMETTRE L'UTILISATION DU HOOK useTranslation
// export function HeaderSelectIngredients()
// {
//     const {t, i18n} = useTranslation('common');
//     return(
//         <SelectIngredients t={t}/>
//     )
// }

export function App() {

    const [token, setToken] = useState();
    
    // if(!token) {
    //     return <Login setToken={setToken} />
    //     }

        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
   
        return (
                <Layout className="App">
                    <Route exact path='/' component={Home} />
                    <Route path='/fetch-cocktail-detail' component={FetchCocktailDetail} />
                    <Route path='/from-ingredients' component={DrinksFromIngredients} />
                    <Route path='/select-ingredients' component={HeaderSelectIngredients} />
                    <Route path='/every-cocktail' component={EveryCocktail} />
                    <Route path='/login' component={Login} />
                </Layout>
        );
}
export default App;
