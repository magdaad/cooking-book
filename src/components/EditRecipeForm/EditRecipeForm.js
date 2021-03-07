import React, {useEffect} from 'react';
import {Form, Button} from "react-bootstrap";
import {useRecipes} from "../../context/RecipesContext";
import {useInput} from "../../hooks/useInput";


const EditRecipeForm = ({recipe}) => {
    const {editRecipe} = useRecipes();
    const [nameProps, resetName] = useInput(recipe.name);
    const [stepsProps, resetSteps]  = useInput(recipe.steps);
    const [ingredientsProps, resetIngredients]  = useInput(recipe.ingredients);

    const submit = event => {
        event.preventDefault();
        console.log(recipe.id);
        console.log(            nameProps.value,
        );
        editRecipe(
            recipe.id,
            nameProps.value,
            ingredientsProps.value,
            stepsProps.value,
        );
        resetName();
        resetSteps();
        resetIngredients();
    };

    return(
        <Form onSubmit={submit}>
            <Form.Group >
                <Form.Label>Food name</Form.Label>
                <Form.Control
                    {...nameProps}
                    type="text"
                    placeholder="Food name"
                />
            </Form.Group>
            <Form.Group >
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                    {...ingredientsProps}
                    type="text"
                    placeholder="Ingredients"
                />
            </Form.Group>
            <Form.Group >
                <Form.Label>Preparation steps</Form.Label>
                <Form.Control
                    {...stepsProps}
                    type="text"
                    placeholder="Preparation steps"
                />
            </Form.Group>

            <Button variant="success" type="primary">
                UPDATE
            </Button>
        </Form>
    );
}

export default EditRecipeForm;
