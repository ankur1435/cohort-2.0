import React, { useContext, useState } from 'react';
import './App.css'
import { set } from 'mongoose';
import { CountContext } from './context';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// const Dashboard = React.lazy(() =>  import('./components/Dashboard'))
// const Landing = React.lazy(() => import('./components/Landing')) 

// function App() {

//   return (
//     <div>
//       <Router>
//         <AppBar/>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route path="/" element={<Landing/>}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// function AppBar() {
//   const navigate = useNavigate();

//   return <div>
//     <div>
//         <button onClick={() => {
//           navigate("/");
//         }}>Landing page</button>

//         <button onClick={() => {
//           navigate("/dashboard");
//         }}>Dashboard page</button>

//       </div>
//   </div>
// }

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider  value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRender />
    <Buttons setCount={setCount} />
  </div>
}

function CountRender() {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App