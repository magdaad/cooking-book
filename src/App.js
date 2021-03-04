import './App.scss';
import React, {useContext} from "react";
import Recipe from "./components/Recipe/Recipe";
import {RecipesContext} from "./context/RecipesContext";

function App() {
    const {recipesData}  = useContext(RecipesContext);
    return (
    <div className="App">
        {
            recipesData.map(recipe =>
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
