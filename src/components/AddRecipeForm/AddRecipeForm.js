import React from 'react';
import {Form, Button} from "react-bootstrap";
import {useRecipes} from "../../context/RecipesContext";
import {useInput} from "../../hooks/useInput";


const AddRecipeForm = () => {
    const {addRecipe} = useRecipes();
    const [nameProps, resetName] = useInput("");
    const [stepsProps, resetSteps]  = useInput("");
    const [ingredientsProps, resetIngredients]  = useInput("");


    const submit = event => {
        event.preventDefault();
        addRecipe(
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

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddRecipeForm;
