import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-service.js'
// import { useDispatch } from "react-redux";


import AuthPage from "../AuthPage/AuthPage.js";
import HomePage from "../HomePage/HomePage.js";
import NavBar from "../../components/NavBar.js";
import CreatePost from "../CreatePost/CreatePost.js";

function App() {
  const [user, setUser] = useState(getUser());
  const [currentId, setCurrentId] = useState(null);
  const [currentPosts, setCurrentPosts] = useState([])

  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(postAction.getPosts());
  // }, [dispatch])


  return (
    <div className="App">
      {user ? (
        <>
        <NavBar name={user.name} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<HomePage setCurrentId={setCurrentId} currentPosts={currentPosts} setCurrentPosts={setCurrentPosts} />} />
            <Route path="/createpost" element={<CreatePost currentId={currentId} setCurrentId={setCurrentId} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
