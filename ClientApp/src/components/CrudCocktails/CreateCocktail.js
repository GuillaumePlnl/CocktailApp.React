import React, { } from 'react'

export function Createcocktail(props) {




    return(
        <React.Fragment>
            <h1 className="beauty">Create a New Cocktail</h1>
            <br/>
            <form>
            <div class="form-group beauty">
                <label for="exampleFormControlInput1">Cocktail Title</label>
                <input type="input" class="form-control" id="cocktailTitle" placeholder="Bazooka"/>
            </div>
                <div  class="form-group beauty">
                    <label for="">Select the category</label>
                    <select class="form-control" id="cocktailCategory">
                    <option>1</option>
                    <option>2</option>
                    </select>
                </div> 
                <div class="form-group beauty">
                    <label for="">Select the alcoholic type</label>
                    <select class="form-control" id="cocktailAlcoholic">
                    <option>1</option>
                    <option>2</option>
                    </select>
                </div>
                <div class="form-group beauty">
                    <label for="">Select the glass</label>
                    <select class="form-control" id="cocktailGlass">
                    <option>1</option>
                    <option>2</option>
                    </select>
                </div> 
                <div class="form-group beauty">
                    <label for="exampleFormControlInput1">Url</label>
                    <input type="url" class="form-control" id="cocktailUrl" placeholder="http://"/>
                </div>
                <input type="submit" value="Submit" class="btn btn-success btn-lg btn-block" />

            </form>
        </React.Fragment>
    );
}
