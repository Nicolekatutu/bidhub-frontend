import React, { useState, useEffect } from 'react';
import "./LandingP.css";
// import House from "../../assets/house-isolated-field.jpg";
import House1 from "../../assets/vvv.jpg";
import House2 from "../../assets/Rectangle 3.jpg";
import House3 from "../../assets/Rectangle 4.png";
import Item1 from "../../assets/Item1.png";
import Item2 from "../../assets/Item2.png";
import Item3 from "../../assets/Item3.png";
import Item4 from "../../assets/Item4.png";
import Item5 from "../../assets/Item5.png";
import Item6 from "../../assets/Item6.png";
import Item7 from "../../assets/Item7.png"; 
import Item8 from "../../assets/Item8.png";
import Heart from "../../assets/Vector.svg";
import Agl from "../../assets/bhl.png";
import property1 from '../../assets/slider/property1.jpg';
import property2 from '../../assets/slider/property2.jpg';
import property3 from '../../assets/slider/property3.jpg';
import property4 from '../../assets/slider/property4.jpg';
import HandModel from "../../assets/hand-presenting-model-house.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const images = [property1, property2, property3, property4];

const LandingPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <Navbar/>
      <article>
        {/* <!--- #SECTION 1 --> */}

        <div className="relative mx-auto overflow-hidden w-full bg-gray-200">
      <div className="flex justify-center items-center mb-12 mt-8">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-3/4 max-w-full mx-auto transition-opacity duration-500 ease-in-out"         
        />
      </div>
    </div>

        {/* <!--- #PROPERTY--> */}
        <div className="property-container">
          <h2 className="h2 section-title">Trending Items</h2>
          <div className="property-list ">
            <div className="property-card">
              <div className="card-banner">
                <img src={House1} alt="New Apartment Nice View" className="w-100" />
                <div className="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div className="card-content">
                <div className="card-days">3 Days left</div>
                <p className="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li className="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li className="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={House2} alt="New Apartment Nice View" className="w-100" />
                <div className="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div className="card-content">
                <div className="card-days">3 Days left</div>
                <p className="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li className="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li className="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={House3} alt="New Apartment Nice View" className="w-100" />
                <div className="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div className="card-content">
                <div className="card-days">3 Days left</div>
                <p className="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li className="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li className="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={House1} alt="New Apartment Nice View" className="w-100" />
                <div className="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div className="card-content">
                <div className="card-days">3 Days left</div>
                <p className="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li className="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li className="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-16 w-[1200px] h-[287px] left-[120px]">
        <div className="bg-gradient-to-r from-[#1478A3] to-white h-[300px] md:h-[350px] flex flex-col md:flex-row items-center justify-between px-8 md:px-12 ">
          {/* Left Section */}
          <div className="flex flex-col gap-4 ">
            <img className="absolute top-2 w-20" src={Agl} alt="Logo" />
            
            <p className="absolute bottom-2 text-gray-800 text-sm">*Terms & Conditions Apply</p>
          </div>

          <div className="flex flex-col items-center  md:items-start ml-[100px] ">
          <p className="text-white font-ribeye font-bold text-4xl md:text-6xl leading-tight -rotate-6 w-[417px] h-[154px]">
              Own your <br /> dream home <br /> today!
            </p>
          </div>

          {/* Center Section */}
          <div className="ml-[35px] flex flex-col items-center md:items-start gap-3">
            <p className="text-gray-800 text-center md:text-left text-base font-roboto">
              Great deals for your money.
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 w-[149px] h-[40px]">
              Register Now
            </button>
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-end w-full md:w-auto mt-4 md:mt-0">
            <img
              className="w-[425px] h-[266px] left-[774px] md:w-[350px] lg:w-[425px] h-auto"
              src={HandModel}
              alt="House model"
            />
          </div>
        </div>

        {/* Website Link */}
        <p className="absolute top-2 right-4 text-gray-700 text-sm">www.agilebidhub.co.ke</p>
      </div>

    
    </div>

        {/* Upcoming Auctions */}
        <div className="property-container">
          <h2 class="h2 section-title">Upcoming Auctions</h2>
          <div className="property-list ">
            <div className="property-card">
              <div className="card-banner">
                <img src={Item1} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item2} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item3} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item4} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ending Soon */}
        <div className="property-container">
          <h2 class="h2 section-title">Ending Soon</h2>
          <div className="property-list ">
            <div className="property-card">
              <div className="card-banner">
                <img src={Item1} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item2} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item3} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item4} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="group2">
          <div className="top-group2">
            <img className="agl" src={Agl} alt="" />
            <div className="">
              <p className="p1">Great deals for your money</p>
              <button className="reg-btn">Register Now</button>
            </div>
            <p className="p2">*Terms & Conditions Apply </p>
            <p className="p3">www.agilebidhub.co.ke</p>
            <p className="p4">Own your dream home today! </p>
            <img className="hand-model" src={HandModel} alt="" />
          </div>
        </div>

        {/* Saved For Later */}
        <div className="property-container">
          <h2 class="h2 section-title">Saved For Later</h2>
          <div className="property-list ">
            <div className="property-card">
              <div className="card-banner">
                <img src={Item5} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item6} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item7} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>

            <div className="property-card">
              <div className="card-banner">
                <img src={Item8} alt="New Apartment Nice View" class="w-100" />
                <div class="card-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <img src={Heart} alt="" />
                  </svg>
                </div>
              </div>
              <div class="card-content">
                <div class="card-days">3 Days left</div>
                <p class="card-text">
                  4 Bedroom Bungalow, own compound, all ensuite{" "}
                </p>
                <ul class="card-list">
                  <li class="card-item">
                    <span>Kitisuru,Nairobi, Kenya</span>
                  </li>
                  <li class="card-items">
                    <strong>Start: 3rd Oct,2024</strong>
                  </li>
                  <li class="card-items">
                    <strong>End: 5th Oct,2024</strong>
                  </li>
                </ul>
                <button className="more-details-btn">
                  <svg
                    className="eye-icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_12711)">
                      <path
                        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_12711">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  MORE DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer/>
    </div>
  );
};
export default LandingPage;