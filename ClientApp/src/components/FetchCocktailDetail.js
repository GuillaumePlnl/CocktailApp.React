/*import * as React from 'react';*/
import React, {} from 'react'

export function FetchCocktailDetail(props) {
  let contents = (
    <React.Fragment>
      <div>
        <table className="table table-striped" aria-labelledby="tableLabel">
          <tbody>
            {console.log(props.cocktail)}
            
              <React.Fragment>
                <tr key={props.cocktail.pkId}>
                  <td>Name : {props.cocktail.drinkName}</td>
                  <td>
                    <img alt="" src={props.cocktail.urlPicture} style={{ width: 5 + 'rem' }} />
                  </td>
                  <td>Instructions : {props.cocktail.instruction}</td>
                  <td>Glass name : {props.cocktail.glassName}</td>
                  <td>Alcoholic : {props.cocktail.alcoholicName}</td>
                  <td>Cocktail category : {props.cocktail.categoryName}</td>
                </tr>
              </React.Fragment>
          </tbody>
        </table>
        <table className="table table-striped" aria-labelledby="tableLabel">
          <tbody>
            
              <React.Fragment>
                Ingredients : {props.cocktail.ingredientsList} <br />
                Measures : {props.cocktail.measureList} <br />
              </React.Fragment>
            
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
