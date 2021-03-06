import React, {useState, useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import {Step} from "./Step";
import { v4 } from "uuid";

export const StepsInput = ({onChangeSteps = f => f}) => {
    const [stepsData, setStepsData] = useState([{id: v4(), data: ""}]);
    const appendStepInput = () => {
        setStepsData(
            [
                ...stepsData,
                {id: v4(),
                data: ""}
            ]
        );
    }

    const updateSteps = ({value}) => {
        setStepsData(
            stepsData.map(item =>
                item.id === value.id
                    ? {...item, data : value.data}
                    : item
            ));
        onChangeSteps(stepsData);
    }
    useEffect(() => {
            onChangeSteps(stepsData);
        }
        ,[stepsData])
    return [
        <Form.Group >
            <Form.Label>Steps</Form.Label>
            {
                stepsData.map(input =>
                    <Step
                        key = {input.id}
                        initialValue = ""
                        id = {input.id}
                        onChange={updateSteps}
                    />
                )
            }
            <Button
                variant="primary"
                onClick={ () => appendStepInput() }>
                Add Step
            </Button>
        </Form.Group>
    ]
}
