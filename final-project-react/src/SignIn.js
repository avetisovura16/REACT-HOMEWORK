import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);
  const [userMail, setMail] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://6aff066e3a0e70bc8d547789.mockapi.io/api/login/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: userMail,
          password: password,
          avatar: "https://picsum.photos",
        }),
      });

      const data = await response.json();

      

      if (response.ok) {
        console.log("succsess : ", data);
        localStorage.setItem("user", JSON.stringify(data))
        navigate("/main");
      } else {
        console.error("error:", data);
        alert("Ошибка: " + (data.message || "Проверьте данные"));
      }
    } catch (error) {
      console.error("eroor :", error);
    }
  };

  

  return (
    <form className="menus" onSubmit={handleSubmit}>
      <h1>Signin</h1>
      <div className="text">
        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          required
          id="username"
          placeholder="Enter Your Username"
        ></input>
      </div>

      <div  className="text">
        <label htmlFor="email">Email</label>
        <input
          value={userMail}
          onChange={(e) => setMail(e.target.value)}
          type="email"
          id="email"
          placeholder="you@example.com"
        ></input>
      </div>

      <div  className="text">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Enter Your Password"
          required
        ></input>
        <button id="submitButton" type="submit">Submit</button>
      </div>

      <div id="loginText"> 
        <p>Already have an Account?</p>
      <NavLink className="links" to="/login">login</NavLink>
      </div>
    </form>
  );
};

export default SignIn;
