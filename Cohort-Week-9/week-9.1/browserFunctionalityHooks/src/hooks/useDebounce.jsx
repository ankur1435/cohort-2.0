import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timerId);
    },[value, delay]);

    return debounceValue;
}