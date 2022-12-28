import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar";

function App() {
  const [user, setUser] = useState(null);
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
