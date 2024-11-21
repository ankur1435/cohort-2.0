import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
const Dashboard = React.lazy(() =>  import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing')) 

function App() {

  return (
    <div>
      <Router>
        <AppBar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
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