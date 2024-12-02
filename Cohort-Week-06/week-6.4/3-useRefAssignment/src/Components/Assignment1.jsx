import { useRef } from "react";
import { useEffect } from "react";

export function Assignment1() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef]);

    const handleButtonClick = () => {
        inputRef.current.focus()
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here"/>
            <button onClick={handleButtonClick}>Focus input</button>
        </div>
    )
}