import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <HomePage setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
