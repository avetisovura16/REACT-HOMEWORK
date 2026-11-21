import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState(``);
  const [userMail, setMail] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://6aff066e3a0e70bc8d547789.mockapi.io/api/login/users");
      const users = await response.json();

      if (response.ok) {
        const foundUser = users.find(
          (user) => user.email === userMail && user.password === password
        );

        if (foundUser) {
          console.log("succsess : ", foundUser);
          localStorage.setItem("user", JSON.stringify(foundUser));
          navigate("/main");
        } else {
          alert("error: incorrect username or password");
        }
      } else {
        console.error("error:", users);
        alert("error: server error");
      }
    } catch (error) {
      console.error("eroor :", error);
    }
  };



  return (
    <form className='menus' onSubmit={handleSubmit}>
      <h1>Login</h1>

      <label htmlFor="email">Email</label>
      <input 
        value={userMail} 
        onChange={(e) => setMail(e.target.value)} 
        type='email' 
        id='email' 
        placeholder='you@example.com' 
        required 
      />

      <label htmlFor="password">Password</label>
      <input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        type='password' 
        id='password' 
        placeholder='Enter Your Password' 
        required 
      />

      <button type="submit">Submit</button>

      <div id="loginText"> 
        <p>dont have an Account?</p>
        <NavLink className="links" to="/signin">signin</NavLink>
      </div>
    </form>
  );
};

export default Login;
