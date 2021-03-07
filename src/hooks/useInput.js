import {useEffect, useState} from "react";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
    })
    return [
        { value, onChange: e => setValue(e.target.value)},
        () => setValue(initialValue)
    ]
}

