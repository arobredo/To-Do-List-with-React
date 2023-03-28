import "../App.css";
import React, { useState } from "react";

const Login = () => {

  const [user, setUser] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswdChange = (e) => {
    setPasswd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };


  return (
    <div className="LoginPage">
      <h1>Login to your To-Do-List</h1>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div>
        <input 
            className="todo-input" 
            type="text" 
            id="username"
            name="username"
            placeholder="Username"
            value={user}
            onChange={handleUserChange}
        ></input>
        </div>
        <div>
        <input 
            className="todo-input" 
            type="password"
            id="password" 
            name="password"
            placeholder="Password"
            value={passwd}
            onChange={handlePasswdChange}
        ></input>
        </div>
        <button className="todo-btn" type="submit">
        Enter
      </button>
      </form>
    </div>
  );
};

export default Login;
