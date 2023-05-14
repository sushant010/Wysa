import React, { useState } from "react";
import './login.css'
import {  useNavigate } from "react-router-dom";




function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login for demonstration purposes
    if (username === "Sushant" && password === "Sushant") {
      // Clear the form inputs
      setUsername("");
      setPassword("");
      // Navigate to the chat screen
      navigate("/ChatPage");
    }
  };

 

  return (
    <div className="container">
      <h1>Welcome to Wysa !!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;