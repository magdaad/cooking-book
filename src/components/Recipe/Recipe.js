import React from 'react';
import './Recipe.scss'
import IngredientList from "../IngredientList/IngredientList";
import Instruction from "../Instruction/Instruction";

const Recipe = ({
                    name,
                    ingredients,
                    steps,
                }) => {
  return(
      <>
        <h2>{name}</h2>
        <IngredientList ingredients = {ingredients}/>
        <Instruction steps={steps}/>
      </>
  );
}

export default Recipe;
