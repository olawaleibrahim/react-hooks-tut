import React, { useState } from "react";

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("Empty");

    const increment = () => {
        setCounter(counter + 1);
    };

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            {counter} <button onClick={increment}>Increment</button>
            <div></div>
            <input onChange={onChange} placeholder="enter something..." />
            {inputValue}
        </div>
    );
};

export default StateTutorial;