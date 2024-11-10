import { memo, useCallback, useState } from "react";

export function Assignment1() {
    const [count, setCount] = useState(0);

    const handleDecrement = useCallback(() => {
        setCount(count => count - 1);
    }, [])

    const handleIncrement = useCallback(() => {
        setCount(count => count + 1);
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    )
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
))