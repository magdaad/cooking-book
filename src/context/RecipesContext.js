import React, { createContext } from "react";
import recipesData from "../data/recipes.json";

export const RecipesContext = createContext('defaultValue');
// export const useColors = () => useContext(ColorContext);

export default function RecipesProvider ({ children }) {
    return (
        <RecipesContext.Provider value={{ recipesData }}>
            {children}
        </RecipesContext.Provider>
    );
};
