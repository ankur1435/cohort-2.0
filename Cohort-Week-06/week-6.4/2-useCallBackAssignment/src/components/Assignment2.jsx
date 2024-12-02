import { useCallback, useState } from "react";

export function Assignment2() {
    const [inputText, setInputText] = useState('');

    const showAlert = useCallback(() => {
        alert(inputText);
    }, [inputText])

    return (
        <div>
            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter some text"
            />
            <Alert showAlert={showAlert}/>
        </div>
    )
}

function Alert({showAlert}) {
    return <button onClick={showAlert}>Show Alert</button>
}