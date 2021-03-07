import './App.scss';
import React from "react";
import Recipe from "./components/Recipe/Recipe";
import {useRecipes} from "./context/RecipesContext";
import AddRecipeForm from "./components/AddRecipeForm/AddRecipeForm";

function App() {
    const {recipes}  = useRecipes();
    return (
    <div className="App">
        <AddRecipeForm />
        {
            recipes.map(recipe =>
                <Recipe
                    key={recipe.id}
                    {...recipe}
                />
            )
        }
    </div>
  );
}

export default App;
