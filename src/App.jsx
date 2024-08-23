import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import CompletePage from "./components/CompletePage";
import axios from "axios";
import BookListing from "./components/BookListing";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is logged in when the app loads
    const token = localStorage.getItem("token");
    if (token) {
      // Fetch the user data from the backend using the token
      axios
        .get("https://book-listing-backend-s0dh.onrender.com/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.user))
        .catch((err) => console.error(err));
    }
  }, []);

  const handleRegister = (user) => {
    setUser(user);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

 

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/completePage" element={<CompletePage />} />
          <Route path="/listing" element={<BookListing />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register onRegister={handleRegister} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
