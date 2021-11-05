import React from 'react';
import {useTranslation} from "react-i18next";



export function SelectIngredient ({id, title , handleChange, allIngredients, value}) {
    const {t} = useTranslation('common');

    return (
            <div className="">
            <label > {title} </label>
            <select id={id} onChange={handleChange} value={value} className="custom-select" name="ingredient">
                <option key="" value="">- {t('Ingredients.no')} -</option>
                {allIngredients.map(x => (
                        <option key={x.pkId} value={x.pkId}>{x.ingredientName}</option>
                    ))} 
            </select>
            </div>
    );
}

// Composant Stateless
