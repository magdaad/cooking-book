import React, { createContext, useContext, useState } from "react";
import recipesData from "../data/recipes.json";
import {v4} from "uuid";

export const RecipesContext = createContext('defaultValue');
export const useRecipes = () => useContext(RecipesContext);

export default function RecipesProvider({children}) {
    const [recipes, setRecipes] = useState(recipesData);

    const removeRecipe = id => setRecipes(recipes.filter(recipe => recipe.id !== id));

    const addRecipe = (recipeName, ingredients, steps) =>
        setRecipes([
            {
                id: v4(),
                name: recipeName,
                ingredients,
                steps
            },
            ...recipes
        ]);

    return (
        <RecipesContext.Provider value={{ recipes, removeRecipe, addRecipe }}>
            {children}
        </RecipesContext.Provider>
    );
};
