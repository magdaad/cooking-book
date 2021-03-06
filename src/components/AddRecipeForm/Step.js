import React, {useState} from "react";
import {Form} from "react-bootstrap";

export const Step = ({initialValue, id, onChange = f => f}) => {
    const [value, setValue] = useState({
        id: id,
        data: initialValue
    });
    const handleChange = (e) => {
        setValue({
            ...value,
            data: e.target.value,
        });
        onChange({value});
    }

    return (
        <Form.Control
            id = {id}
            type="text"
            value = {value.data}
            placeholder="step"
            onChange = {handleChange}
        />
    )
}

