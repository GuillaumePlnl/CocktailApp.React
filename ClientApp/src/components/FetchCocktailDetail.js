/*import * as React from 'react';*/
import React, {} from 'react'

export function FetchCocktailDetail(props) {

  if(! props.cocktail.pkId) {
    return (
      <div><b>ERROR, no cocktail found in component !</b></div>
    );
  }

  let contents = (
    <React.Fragment>
      <div>
        <table className="table table-striped" aria-labelledby="tableLabel">
          <tbody>
            {props.cocktail.pkId ? console.log(props.cocktail) : console.log("Error : No cocktail found in component")}    
                <tr key={props.cocktail.pkId}>
                  <td>{props.cocktail.drinkName}</td>
                  <td>
                    <img alt="" src={props.cocktail.urlPicture} style={{ width: 5 + 'rem' }} />
                  </td>
                  <td><b> Instructions :</b> {props.cocktail.instruction}</td>
                  <td>{props.cocktail.glassName}</td>
                  <td>Alcoholic : {props.cocktail.alcoholicName}</td>
                  <td>Cocktail category : {props.cocktail.categoryName}</td>
                </tr>
          </tbody>
        </table>
        <table className="table table-striped" aria-labelledby="tableLabel">
          <tbody>          
                {props.cocktail.ingredientsQuantities.map( x => (
                  <div>
                  <b> Ingredient  :</b> {x.ingredientName} <br />
                  <b> Quantity :</b> {(x.quantity !== '') ? x.quantity : (<span className = "beauty">As pleases you</span>) } <br />
                  </div>
                ))}
          </tbody>
        </table>
        <button
          onClick={() => {
            props.setShown(false)
          }}
          class="btn btn-primary"
        >
          Back to results
        </button>
      </div>
    </React.Fragment>
  )

  return <div>{contents}</div>
}
