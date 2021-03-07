import React, { createContext, useContext, useState } from "react";
import recipesData from "../data/recipes.json";
import {v4} from "uuid";

export const RecipesContext = createContext('defaultValue');
export const useRecipes = () => useContext(RecipesContext);

export default function RecipesProvider({children}) {
    const [recipes, setRecipes] = useState(recipesData);
    const [editMode, setEditMode] = useState(false);
    const startEdit = () => setEditMode(true);
    const stopEdit = () => setEditMode(false);
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

    const editRecipe = (id, recipeName, ingredients, steps) =>{
        console.log(id, recipeName, ingredients, steps)
        setRecipes(
            recipes.map(recipe =>
                recipe.id === id
                    ? {...recipe,
                        name: recipeName,
                        ingredients: ingredients,
                        steps: steps}
                    : recipe
            )
        );
        stopEdit();
    }

    const getRecipe = id => {
        return recipes.find(recipe =>
            recipe.id === id ? recipe : null
        )
    }



    return (
        <RecipesContext.Provider value={{ recipes, removeRecipe, addRecipe, getRecipe, editRecipe, editMode, startEdit, stopEdit }}>
            {children}
        </RecipesContext.Provider>
    );
};
