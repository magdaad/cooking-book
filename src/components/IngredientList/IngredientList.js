import React from 'react';
import './IngredientList.scss'
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = () => {
  return(
      <ul className={"ingredients"}>
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </ul>
  );
}

export default IngredientList;
