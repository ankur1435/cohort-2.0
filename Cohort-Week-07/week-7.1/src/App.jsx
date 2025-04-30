import React, {Suspense} from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
const Dashboard = React.lazy(() =>  import('./components/Dashboard'))// React.lazy(...): Tells React to load these components only when needed (lazy load)
const Landing = React.lazy(() => import('./components/Landing')) 

function App() {

  return (
    <div>
      <Router>
        <AppBar/>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate();
 
  return <div>
    <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard page</button>

      </div>
  </div>
}

export default App