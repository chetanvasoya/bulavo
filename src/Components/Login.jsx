import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config'; // Adjust the import path accordingly
import logo from "../Components/img/logo.png";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const authenticate = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;
      console.log("User signed in:", user);

      if (user.accessToken) {
        // Set authentication state in localStorage
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userToken', user.accessToken);
        
        alert('Login successful!');
        navigate('/dashbord');
      } else {
        alert('Username or Password are incorrect');
      }
    } catch (error) {
      console.error("Firebase authentication failed:", error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <div className="body">
        <div className="container container1">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2>Login</h2>
          <form id="loginForm" onSubmit={authenticate}>
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />

            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
