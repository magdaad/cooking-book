import React, { createContext, useContext, useState } from "react";
import recipesData from "../data/recipes.json";

export const RecipesContext = createContext('defaultValue');
export const useRecipes = () => useContext(RecipesContext);

export default function RecipesProvider({children}) {
    const [recipes, setRecipes] = useState(recipesData);

    const removeRecipe = id => setRecipes(recipes.filter(recipe => recipe.id !== id));
    return (
        <RecipesContext.Provider value={{ recipes, removeRecipe }}>
            {children}
        </RecipesContext.Provider>
    );
};
