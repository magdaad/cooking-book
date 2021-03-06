import React, {useState, useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import {SingleIngredient} from "./SingleIngredient";
import { v4 } from "uuid";

export const IngredientInput = ({onChangeIngredients = f => f}) => {
    const [ingredientsData, setIngredientsData] = useState([
        {
            id: v4(),
            quantity: "",
            name: "",
            type: ""
        }]);
    const appendIngredientsInput = () => {
        setIngredientsData(
            [
                ...ingredientsData,
                {
                    id: v4(),
                    quantity: "",
                    name: "",
                    type: ""
                }
            ]
        );
    }

    const updateIngredients = ({value}) => {
        setIngredientsData(
            ingredientsData.map(item =>
                item.id === value.id
                    ? {...item,
                        quantity: value.quantity,
                        name: value.name,
                        type: value.type}
                    : item
            ));
        onChangeIngredients(ingredientsData);
    }
    useEffect(() => {
            onChangeIngredients(ingredientsData);
        }
        ,[ingredientsData])
    return [
        <Form.Group >
            <Form.Label>Ingredients</Form.Label>
            {
                ingredientsData.map(input =>
                    <SingleIngredient
                        key = {input.id}
                        initialValue = ""
                        id = {input.id}
                        onChange={updateIngredients}
                    />
                )
            }
            <Button
                variant="primary"
                onClick={ () => appendIngredientsInput() }>
                Add Ingredient
            </Button>
        </Form.Group>
    ]
}
