import { useEffect } from "react";

export function useInterval(fn, timeout) {
    useEffect(() => {
        const id = setInterval(() => {
            fn()
        }, timeout);

        return() => {
            clearInterval(id);
        }
    }, [])
}