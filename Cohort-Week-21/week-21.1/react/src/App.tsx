import { Turnstile } from '@marsidev/react-turnstile';
import './App.css'
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState<String>("");

  return (
    <>
      <input
        placeholder='OTP'
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <input
        placeholder='New Password'
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY} />


      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password", {
          email: "rohitpithani13@gmail.com",
          otp: otp,
          newPassword: newPassword, 
          token: token,
        })
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
      }}>
        Update Password
      </button>
    </>
  )
}

export default App
