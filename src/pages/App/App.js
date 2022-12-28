import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-service'

import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      {user ? (
        <>
        <NavBar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
