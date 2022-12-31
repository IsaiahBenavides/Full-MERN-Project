import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-service.js'
import { useDispatch } from "react-redux";


import AuthPage from "../AuthPage/AuthPage.js";
import HomePage from "../HomePage/HomePage.js";
import NavBar from "../../components/NavBar.js";
import NewPost from "../NewPost.js/NewPost.js";

function App() {
  const [user, setUser] = useState(getUser());





  return (
    <div className="App">
      {user ? (
        <>
        <NavBar name={user.name} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/newpost" element={<NewPost />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
