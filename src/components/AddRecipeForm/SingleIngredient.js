import React, {useEffect, useState} from "react";
import {Col, Form} from "react-bootstrap";

export const SingleIngredient = ({initialValue, id, onChange = f => f}) => {
    const [value, setValue] = useState({
        id: id,
        name: initialValue,
        quantity: initialValue,
        type: initialValue
    });
    const handleNameChange = (e) => {
        setValue({
            ...value,
            name: e.target.value,
        });
    }
    const handleQuantityChange = (e) => {
        setValue({
            ...value,
            quantity: e.target.value,
        });
    }
    const handleTypeChange = (e) => {
        setValue({
            ...value,
            type: e.target.value,
        });
    }
    useEffect(() => {
            onChange({value})}
        ,[value])


    return (
        <Form.Group >
            <Form.Row>
                <Form.Group as={Col} >
                    <Form.Label>name</Form.Label>
                    <Form.Control onChange = {handleNameChange} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>quantity</Form.Label>
                    <Form.Control onChange = {handleQuantityChange} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>type</Form.Label>
                    <Form.Control onChange = {handleTypeChange} />
                </Form.Group>
            </Form.Row>
        </Form.Group>
    )
}

