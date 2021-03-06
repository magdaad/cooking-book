import React, {useState} from 'react';
import {Form, Button, Col} from "react-bootstrap";
import {useRecipes} from "../../context/RecipesContext";
import {useInput} from "../../hooks/useInput";
import {StepsInput} from "./StepsInput";

const AddRecipeForm = () => {
    const {addRecipe} = useRecipes();
    const [nameProps] = useInput("");
    const [steps, setSteps]  = useState([]);

    const updateSteps = (newSteps) => {
        setSteps(newSteps);
        console.log(newSteps);
    }

    const submit = event => {
        event.preventDefault();
        console.log(steps.map(step => step.data))
        addRecipe(
            nameProps.value,
            [
                {
                "quantity": "1 lb",
                "name": " asparagus",
                "type": "Produce"
                },
                {
                "quantity": "1 lb",
                "name": " asparagus",
                "type": "Produce"
                },
            ],
            steps.map(step => step.data)
        );
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
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>name</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>quantity</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>type</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary">
                    Add Ingredient
                </Button>
            </Form.Group>

            <StepsInput onChangeSteps={updateSteps} />


            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddRecipeForm;
