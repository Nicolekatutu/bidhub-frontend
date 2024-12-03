import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Nav2 from "../Nav2/Nav2";
import Footer from "../Footer/Footer";
import axios from "axios";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (!isNaN(element.value)) {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      if (element.nextSibling && element.value) {
        element.nextSibling.focus();
      }
    }
  };

  const handleKeyDown = (element, index) => {
    if (element.key === "Backspace" && index > 0 && !otp[index]) {
      element.target.previousSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpCode = otp.join("").trim();
    if (otpCode.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      return;
    }

    try {
      const email = localStorage.getItem("emailForOtp");
     
      if (!email) {
        setError("No email found. Please retry registration.");
        return;
      }

      const response = await axios.post(
        "https://localhost:7071/api/Auth/verify-otp",
        {
          email:email, otp: otpCode
          
        },
        {
          headers: {
            "Content-Type": "application/json"
                      },
        }
      );

      // Handle success
      if (response.status === 200) {
        console.log("Verification successful:", response.data.message);
        localStorage.removeItem("emailForOtp");
                navigate("/login"); // Redirect to login page
      } else {
        setError(response.data.message || "Verification failed. Try again.");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <Nav2 />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-lg p-6 mx-auto mb-16 mt-10 bg-white rounded-lg shadow-md md:mt-20 md:p-10"
      >
        <h3 className="mb-8 text-lg font-semibold text-gray-800 md:text-xl text-center">
          Enter 6-Digit OTP
        </h3>
        {error && (
          <div className="mb-4 text-sm text-red-600">{error}</div>
        )}
        <div className="flex justify-center gap-2 md:gap-4">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              className="w-10 h-14 text-lg font-bold text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 md:w-14 md:h-20 md:text-xl"
            />
          ))}
        </div>
        <button
          type="submit"
          className="mt-12 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:text-lg md:px-8 md:py-4"
        >
          Confirm Account
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default OTP;
