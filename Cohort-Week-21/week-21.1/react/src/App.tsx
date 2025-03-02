import { Turnstile } from '@marsidev/react-turnstile';
import './App.css'
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState<String>("");

  return (
    <>
      <input placeholder='OTP'></input>
      <input placeholder='New Password'></input>

      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey='0x4AAAAAAA_QNd7v1eXwM550'/>


      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password", {
          email: "rohitpithani13@gmail.com",
          otp: "123456",
          token: token,
        })
      }}>Update Password</button>
    </>
  )
}

export default App
