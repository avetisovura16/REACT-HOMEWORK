import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Movies from "./Movies";
import Login from "./Login";
import SignIn from "./SignIn";
import Details from "./Details";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <h1>HomeCinema</h1>
      </header>

      

      <Routes>
        <Route
          path="/"
          element={
            <div id="mainPage">
              welcome to my website
              <div id="pagination">
                <NavLink to="/login">login</NavLink>
                <NavLink to="/signin">signIn</NavLink>
              </div>
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/main" element={<Movies />} />
        <Route path="/details/:id" element={<Details />} />
        <Route
          path="*"
          element={
            <div id="Page404">
              <h1 id="error404">404</h1>
              <p>the page doesnt exist :(</p>
              <NavLink id="comeback" to="/">
                come back
              </NavLink>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
