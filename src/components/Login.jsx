/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://book-listing-backend-s0dh.onrender.com/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      onLogin(res.data.user);
      toast.success("Logged in successfully!");
      setTimeout(() => {
        navigate("/completePage");
      }, 3000);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Login
          </button>
        </form>

        <span className="text-blue-600 mb-6 mt-6 text-right">
          Dont have an account?{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={handleRegisterRedirect}
          >
            Register Now
          </span>
        </span>
      </div>
    </div>
  );
}

export default Login;
