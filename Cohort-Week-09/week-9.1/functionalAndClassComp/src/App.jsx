import { useEffect, useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div></div>} 
    </>
  )
}

// Functional component
// function MyComponent() {
//   useEffect(() => {
//     console.log("component mounted");

//     return () => {
//       console.log("component unmounted")
//     };
//   }, []);

//   // Render UI
//   return <div>
//     From inside my component
//   </div>
// }

// Class-based component
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("component mounted")
  }

  componentWillUnmount() {
    console.log("unmounted")
  }

  render() {
    // Render UI
    return <div>hi there</div>
  }
}

export default App