import './App.scss';
import React, {useEffect, useState} from "react";
import Recipe from "./components/Recipe/Recipe";
import {useRecipes} from "./context/RecipesContext";
import AddRecipeForm from "./components/AddRecipeForm/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm/EditRecipeForm";

function App() {
    const {recipes, editMode, startEdit}  = useRecipes();
    const [editRecipe, setEditRecipe] = useState(null);
    const handleEdit = (recipe) => {
        setEditRecipe(recipe);
        startEdit();
    }

    return (
    <div className="App">
        <AddRecipeForm />
        {editMode ? <EditRecipeForm recipe={editRecipe}/> : null}
        {
            recipes.map(recipe =>
                <Recipe
                    key={recipe.id}
                    {...recipe}
                    edit = {handleEdit}
                />
            )
        }
    </div>
  );
}

export default App;
