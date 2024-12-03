import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {
  return (
    <div className="bg-white py-5 shadow-[0_4px_6px_rgba(0,0,0,0.1)]"> 
      <div className="flex justify-between items-center mx-auto px-4 max-w-6xl">
        <Link to="/">
        {/* Logo Section */}
        <img src={logo} alt="Hero" className="h-16 w-auto mr-8" />
        </Link>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-4">
          <input
            type="text"
            placeholder="Search items"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        
        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li className="text-base">Online Auctions</li>
          <li className="text-base">Live Auctions</li>
          
          <li className="flex flex-col items-center">
            <span className="text-base">Tenders</span>
            <Link to="/login">
            <button className="w-16 h-9 mt-1 border-2 border-blue-700 text-blue-700 font-medium text-sm rounded">Log in</button>
            </Link>
          </li>
          
          <li className="flex flex-col items-center">
            <span className="text-base">Contact Us</span>
            <Link to="/register">
            <button className="bg-blue-700 text-white font-medium text-sm rounded px-4 py-2 mt-1 hover:bg-blue-900 transition ease-in-out duration-300">Register</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
