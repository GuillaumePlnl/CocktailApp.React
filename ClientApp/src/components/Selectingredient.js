import React from 'react';

export function SelectIngredient ({id, handleChange, value, allIngredients, title}) {
    return (
            <div>
            <label > {title} </label>
            <select id={id} onChange={handleChange} value={value} class="custom-select" name="ingredient">
                <option key="" value="">- no ingredient -</option>
                {allIngredients.map(x => (
                        <option key={x.pkId} value={x.pkId}>{x.ingredientName}</option>
                    ))} 
            </select>
            </div>
    );
}

// Composant Stateless
