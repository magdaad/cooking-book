import React from 'react';
import './Recipe.scss'
import IngredientList from "../IngredientList/IngredientList";
import Instruction from "../Instruction/Instruction";

const Recipe = () => {
  return(
      <>
        <h2>FOOD NAME</h2>
        <IngredientList />
        <Instruction />
      </>
  );
}

export default Recipe;
