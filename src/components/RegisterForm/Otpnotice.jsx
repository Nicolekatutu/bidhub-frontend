import React from 'react';
import frame from '../../assets/Frame.svg';
import { Link } from 'react-router-dom';

const OTPNotice = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 h-48">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Popup container */}
      <div className="relative flex flex-col items-center gap-8 bg-white border border-gray-300 rounded-lg shadow-lg p-10 w-[850px] h-[590px]">
        {/* Title */}
        <h3 className="text-gray-800 text-2xl font-medium text-center">
          An OTP has been sent to your email
        </h3>
        
        {/* Image */}
        <div className="w-[419px] h-[450px]">
          <img src={frame} alt="BidHub" className="w-full h-full object-contain" />
        </div>
        
        {/* Button */}
        <Link to="/OTP">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg">
            Verify Email
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OTPNotice;
