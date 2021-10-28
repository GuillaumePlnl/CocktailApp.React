/*import * as React from 'react';*/
import React, { Component } from 'react'

export function FetchCocktailDetail(props) {
  let contents = (
    <React.Fragment>
      <div>
        <table className="table table-striped" aria-labelledby="tableLabel">
          <tbody>
            {props.cocktail.map((c) => (
              <React.Fragment>
                <tr key={c.pkId}>
                  <td>Name : {c.drinkName}</td>
                  <td>
                    <img src={c.urlPicture} style={{ width: 5 + 'rem' }} />
                  </td>
                  <td>Instructions : {c.instruction}</td>
                  <td>Glass name : {c.glassName}</td>
                  <td>Alcoholic : {c.alcoholicName}</td>
                  <td>Cocktail category : {c.categoryName}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <table className="table table-striped" aria-labelledby="tableLabel">
          <tbody>
            {props.cocktail.map((c) => (
              <React.Fragment>
                Ingredients : {c.ingredientsList} <br />
                Measures : {c.measureList} <br />
              </React.Fragment>
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
