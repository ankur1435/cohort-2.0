import { useState } from 'react';
import './App.css'
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';
import { useDebounce } from './hooks/useDebounce';

function App() {

  // useIsOnline Hook
  const isOnline = useIsOnline();
  if(isOnline) {
    return "You are online yay!"
  }

  return "You are offline, please connect to the internet"

  // useMousePointer Hook
  const mousePointer = useMousePointer();

  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  )

  // useInterval Hook
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )

  // useDebounce Hook
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      Debounced Value is {debouncedValue}
      <br/> 
      <input
        type='text'
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search...'
      />
    </>
  )
}

export default App