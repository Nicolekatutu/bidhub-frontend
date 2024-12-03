import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Nav2 from '../Nav2/Nav2';
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://localhost:7071/api/Auth/login", {
        userName: username,
        password: password,
      });

      const { token } = response.data;
      setSuccessMessage("Login successful!");
      setErrorMessage("");

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Redirect or perform other actions after successful login
      //console.log("Token:", token);
      navigate("/")
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed. Please check your credentials.");
      setSuccessMessage("");
    }
  };

  return (
    <div className='bg-white'>
      <Navbar />
      <div><Nav2 /></div>
      <div className="flex flex-col items-center justify-center mt-6 mx-auto px-6 py-4 md:px-10 space-y-4 bg-white">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 w-full max-w-md flex flex-col space-y-4 w-[461px] h-[484px]"
        >
          <h2 className="text-2xl font-medium text-gray-900 font-poppins">Hello there,</h2>
          <h5 className="text-sm text-gray-900 font-poppins">Sign in now for great values at Agile BidHub</h5>

          <div className="relative mt-4 mb-4 w-full">
            <label className="absolute top-6 left-2 text-gray-600 text-xs mb-2">Username</label>
            <input
              type="text"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-[343px] h-14 px-2 py-2 mt-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="relative mb-6 w-full">
            <label className="absolute top-6 left-2 text-gray-600 text-xs ">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[343px] h-14 px-2 py-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-gray-600">Stay signed in</label>
          </div>

          <button 
            type="submit" 
            className="bg-customBlue text-white w-full h-14 mt-4 text-lg font-light hover:bg-blue-700 transition-all"
          >
            Sign In
          </button>

          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}

          <h6 className="text-right text-gray-700 text-sm mt-2 ">
            Forgot your <a href="#" className="text-blue-500 hover:underline">Username</a> or <a href="#" className="text-blue-500 hover:underline">Password?</a>
          </h6>
        </form>

        <div className="w-full max-w-md text-center mt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Don't have an account?</h2>
          <Link to="/register">
          <button className="w-full h-10 border border-gray-400 text-blue-600 hover:bg-gray-200 transition-all mb-20">
            Register
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
