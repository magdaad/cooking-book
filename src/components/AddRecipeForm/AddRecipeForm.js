import React, {useRef, useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {useRecipes} from "../../context/RecipesContext";
import {useInput} from "../../hooks/useInput";
import {StepsInput} from "./StepsInput";
import {IngredientInput} from "./IngredientInput";

const AddRecipeForm = () => {
    const {addRecipe} = useRecipes();
    const [nameProps, resetName] = useInput("");
    const [steps, setSteps]  = useState([]);
    const [ingredients, setIngredients]  = useState([]);

    const updateSteps = (newSteps) => {
        setSteps(newSteps);
    }

    const updateIngredients = (newIngredients) => {
        setIngredients(newIngredients);
    }

    const submit = event => {
        event.preventDefault();
        addRecipe(
            nameProps.value,
            ingredients,
            steps.map(step => step.data)
        );
        resetName();
        setSteps([]);
        setIngredients([]);
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

            <IngredientInput onChangeIngredients={updateIngredients}/>
            <StepsInput onChangeSteps={updateSteps} />

            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddRecipeForm;
