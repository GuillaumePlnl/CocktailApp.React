import React, { Component } from 'react';
import { SelectIngredients } from './SelectIngredients';

export class Home extends Component {
  static displayName = 'Bar'//Home.name;

  render () {
    return (
      <div>
        <h1>My Cocktail</h1>
        <p>Choose your weapons</p>

        <SelectIngredients />
      </div>
    );
  }
}
