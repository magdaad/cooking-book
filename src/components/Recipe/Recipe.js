import React from 'react';
import './Recipe.scss'
import IngredientList from "../IngredientList/IngredientList";
import Instruction from "../Instruction/Instruction";
import {FaTrash} from "react-icons/fa"
import { useRecipes } from "../../context/RecipesContext"

const Recipe = ({
                    id,
                    name,
                    ingredients,
                    steps,
                }) => {
    const { removeRecipe } = useRecipes();
    return(
      <>
        <hr/>
        <h2>{name}</h2>
          <button onClick={() => removeRecipe(id)}>
              <FaTrash/>
          </button>
        <IngredientList ingredients = {ingredients}/>
        <Instruction steps={steps}/>
      </>
    );
}

export default Recipe;
