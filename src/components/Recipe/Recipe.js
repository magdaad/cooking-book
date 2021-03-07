import React from 'react';
import './Recipe.scss'
import IngredientList from "../IngredientList/IngredientList";
import Instruction from "../Instruction/Instruction";
import {FaTrash, FaPen} from "react-icons/fa"
import { useRecipes } from "../../context/RecipesContext"

const Recipe = ({
                    id,
                    name,
                    ingredients,
                    steps,
                    edit = f => f
                }) => {
    const { removeRecipe, getRecipe } = useRecipes();
    return(
      <>
        <hr/>
        <h2>{name}</h2>
          <button onClick={() => removeRecipe(id)}>
              <FaTrash/>
          </button>
          <button onClick={() => edit(getRecipe(id))}>
              <FaPen/>
          </button>
        <IngredientList ingredients = {ingredients}/>
        <Instruction steps={steps}/>
      </>
    );
}

export default Recipe;
