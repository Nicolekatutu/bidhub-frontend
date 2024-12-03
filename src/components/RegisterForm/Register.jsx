import React, { useState } from "react";
import OTPNotice from "./Otpnotice";
import Navbar from "../Navbar/Navbar";
import Nav2 from "../Nav2/Nav2";
import Footer from "../Footer/Footer";
import Flag from "../../assets/arrow/Kenya (KE).svg";
import DropDown from "../../assets/Building Blocks/icon/jam-icons/outline & logos/downarrow.svg";
import axios from "axios";


const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [physicalAddress, setPhysicalAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [otpMessage, setOtpMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAgreeClick = async (e) => {
    e.preventDefault();

    // **Password Match Validation**
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const data = {
      FirstName: firstName,
      LastName: lastName,
      UserName: userName,
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
      PhysicalAddress: physicalAddress,
      CompanyUrl: company,
      PhoneNumber: phoneNumber
    };

    try {
      setIsLoading(true); // Show loading state

      const response = await axios.post(
        "https://localhost:7071/api/Auth/register-bidder",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {

        // Store email in localStorage
      localStorage.setItem("emailForOtp", email);
      
        setOtpMessage(response.data.message || "OTP sent successfully!");
        setPopupVisible(true);
        document.body.style.overflow = "hidden";
      } else {
        alert(response.data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="bg-white">
      <Navbar />
      <Nav2 />
      <div className="mx-auto mt-10 mb-10 p-6 bg-white border border-gray-200 rounded-lg max-w-screen-md">
        <form onSubmit={handleAgreeClick} className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Complete Account Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <InputField
                label="First Name"
                type="text"
                value={firstName}
                onChange={setFirstName}
                placeholder="Your First Name"
                required
              />
              <InputField
                label="Username"
                type="text"
                value={userName}
                onChange={setUserName}
                placeholder="Your Username"
                required
              />
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Your Email"
                required
              />
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={setPassword}
                placeholder="Enter Password"
                required
              />
              <InputField
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={setConfirmPassword}
                placeholder="Confirm Password"
                required
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <InputField
                label="Last Name"
                type="text"
                value={lastName}
                onChange={setLastName}
                placeholder="Your Last Name"
                required
              />
              <InputField
                label="Physical Address"
                type="text"
                value={physicalAddress}
                onChange={setPhysicalAddress}
                placeholder="Your Address"
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex items-center">
                  <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md p-2">
                    <img src={Flag} alt="Flag" className="w-5 h-5 mr-2" />
                    <input
                      type="text"
                      placeholder="+254"
                      className="outline-none bg-transparent text-gray-700 w-12"
                      readOnly
                    />
                    <img src={DropDown} alt="Drop-Down" className="w-4 h-4 ml-2" />
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="723456789"
                    className="block w-full border border-l-0 border-gray-300 rounded-r-md shadow-sm py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <InputField
                label="Company"
                type="text"
                value={company}
                onChange={setCompany}
                placeholder="Company (Optional)"
              />
            </div>
          </div>

          {/* Agreement Section */}
          <div className="p-4 bg-gray-300 rounded-md shadow w-full">
            <h5 className="text-sm text-gray-600">
              By clicking "I Agree to the User Agreement," you are bound to the{" "}
              <u>User Agreement</u>. If you disagree with the terms, you may not
              complete your account registration, gain access, or otherwise use the
              Sites or the Services.
            </h5>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                type="button"
                className="bg-gray-300 border-2 border-customBlue text-customBlue px-4 py-2 shadow hover:bg-red-600"
              >
                I Disagree
              </button>
              <button
                type="submit"
                className="bg-customBlue text-white px-4 py-2 shadow hover:bg-blue-600"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Submitting..." : "I Agree to the User Agreement"}
              </button>
            </div>
          </div>
        </form>
        {isPopupVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-lg">
              <OTPNotice />
              <p>{otpMessage}</p>
              <button
                onClick={closePopup}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

// Reusable InputField Component
const InputField = ({ label, type, value, onChange, placeholder, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-1 block w-full bg-gray-100 rounded-md shadow-sm py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
      required={required}
    />
  </div>
);

export default RegisterForm;

