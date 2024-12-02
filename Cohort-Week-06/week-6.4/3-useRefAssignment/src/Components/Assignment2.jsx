import { useRef } from "react";
import { useState } from "react";

export function Assignment2() {
    const [count, setCount] = useState(0);

    const numberOfTimesRendered = useRef(0);

    const handleReRender = () => {
        setCount(count + 1);
    };

    numberOfTimesRendered.current = numberOfTimesRendered.current + 1;

    return (
        <div> 
            <p>This component has rendered {numberOfTimesRendered.current} times.</p>
            <button onClick={handleReRender}>Focus Re-Render</button>
        </div>
    )
}