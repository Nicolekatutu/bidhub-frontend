import React from 'react';
import logo3 from '../../assets/logo3.jpeg';

const Footer = () => {
  return (
    <footer className="bg-customBlue text-white px-6 py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Logo and Title */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8">
          <img src={logo3} alt="BidHub" className="w-24 h-24 md:w-[106px] md:h-[109px]" />
          <div className="text-center md:text-left">
            <h2>
              <span className="text-3xl md:text-4xl font-semibold">AGILE</span>
              <br />
              <span className="text-base md:text-lg font-light">Bid Hub</span>
            </h2>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t border-white opacity-30" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Reach Us Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Reach Us</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li>+254 758 497 753</li>
              <li>info@agilebidhub.com</li>
              <li>P.O Box 28245-00100 GPO, Nairobi, Kenya.</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Services</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Downloads</a></li>
              <li><a href="#" className="hover:underline">Forum</a></li>
            </ul>
          </div>

{/* Newsletter Section */}
<div className=" p-4 border border-white rounded-lg text-center md:text-left w-[307px] h-[160px]">
            <h3 className="font-semibold text-lg mb-4">Join Our Newsletter</h3>
            <form className="flex flex-col items-center md:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-3/4 lg:w-full p-2 rounded-md text-gray-900" // Adjusted widths for larger columns
              />
              <button className="w-full md:w-auto bg-[#0b5e75] hover:bg-[#084d5f] text-white py-2 px-4 rounded-md">
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-sm text-gray-300">
              * We'll send you weekly updates for your better tool management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
