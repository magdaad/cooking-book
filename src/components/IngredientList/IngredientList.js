import React from 'react';
import './IngredientList.scss'
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ingredients}) => {
  return(
      <ul className={"ingredients"}>
          {ingredients.map((ingredient, i) => (
              <Ingredient key={i} {...ingredient}/>
          ))}
      </ul>
  );
}

export default IngredientList;
