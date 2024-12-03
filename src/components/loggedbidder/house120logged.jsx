import React from 'react';
import { Link } from 'react-router-dom';
import house9 from '../../assets/House9.jpg';
import printicon from '../../assets/print icon.png';
import shareicon from '../../assets/share icon.png';
import house14 from '../../assets/house14.jpg';
import house12 from '../../assets/house12.jpg';
import house11 from '../../assets/house11.jpg';
import house13 from '../../assets/house13.jpg'; 
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const House120logged = () => (
<div>
  <Navbar/>
  <div className="mt-12 mx-auto px-12 md:px-16 lg:px-20 ml-24 mr-20 font-roboto">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img className="w-full h-72 md:h-80 object-cover" src={house9} alt="Main House" />
        <div className="flex gap-2 mt-4 overflow-x-auto">
          <img className="w-20 h-12 object-cover" src={house9} alt="Thumbnail" />
          <img className="w-20 h-12 object-cover" src={house9} alt="Thumbnail" />
          <img className="w-20 h-12 object-cover" src={house9} alt="Thumbnail" />
          <img className="w-20 h-12 object-cover" src={house9} alt="Thumbnail" />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold font-roboto">Property Documents</h2>
          <hr className="my-2" />
          <p className="flex justify-between items-center">
            Land Reg
            <span className="text-blue-500 underline cursor-pointer">view</span>
          </p>
        </div>
      </div>
      <div className="md:w-2/3 mt-0 pl-8">
        <div className="text-3xl font-normal font-roboto">
          <p>3 Bedroom Bungalow: Fully furnished, all ensuite. (House 045-010045)</p>
        </div>
        <div className="text-lg font-semibold font-roboto">
          <p>Reserved Price</p>
          <div className="flex items-center">
            <h4 className="text-2xl font-bold font-roboto">Kes. 13M</h4>
            <p className="ml-2 text-blue-500 font-roboto">(12 bids)</p>
          </div>
          <div className="font-normal mt-2">
            <p className='font-roboto'>Closes:</p>
            <p className='text-red-700 font-roboto '>8h 13min, Sept 04, 2024, 02:15 PM EAT</p>
          </div>
          <div className="pt-2">
            <p className='font-roboto font-normal'>Viewing</p>
            <p className="text-s font-roboto font-medium">ON-THUR: 08h00-16h00 | FRI: 08h00-12h00</p>
          </div>
        </div>

        <div>
          <p>Location</p>
          <p className="text-blue-500 underline text-sm cursor-pointer font-roboto mb-6">Sign in to view</p>
        </div>
        <Link to="/register">
        <button className="bg-blue-600 text-white py-2 w-full mt-2 font-roboto">Online Auction</button>
        
        </Link>
      </div>
    </div>

    <div className="mt-8">
      <h2 className="text-2xl font-semibold font-roboto">Description</h2>
      <hr className="my-2" />
      <p className="flex justify-between">
        Asset ID <span className=" font-roboto mr-40">House 125-0985</span>
      </p>
      <hr className="my-2" />
      <p className="flex justify-between font-roboto">
        Condition <span className=" font-roboto mr-40">7 years</span>
      </p>
      <hr className="my-2" />
      <p className="flex justify-between font-roboto">
        Auction ID <span className="font-roboto mr-40">GAF876F</span>
      </p>
      <hr className="my-2" />
      <p className="text-gray-700 leading-relaxed mt-4 font-roboto mr-30">
        Friendly blind fate free earn gradual party cloth approve note pack compete summer every welcome grave steady
        committee sound roast please attend separation leaf face modest kiss corn whiten bring drink waste bright fine bless
        burst loyalty morning conscience bend sit ton commerce railroad cowardice than attractive what band title frighten we
        descend proof interest king sudden bit aloud baggage aloud loose finger lay efficient saddle hear dine fix sentence disgust
        court weave mark provide extension allowance flag left same bottom fence inside thorough importance coast hollow thirst attack
        apology no must represent friendship pour spade nowadays disgust shock department
      </p>
    </div>
    <div className="flex items-center gap-4 mt-6">
      <p>Print</p>
      <img className="w-6 h-6" src={printicon} alt="Print icon" />
      <p>Share</p>
      <img className="w-6 h-6" src={shareicon} alt="Share icon" />
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-semibold font-roboto">Q & A</h2>
      <hr className="my-2" />
      <p>Have any questions or looking to schedule an appointment?</p>
      <button className="text-blue-500 py-2 mt-4">Ask your question</button>
    </div>
    <div className="mt-8">
      <h2 className="text-2xl font-semibold font-roboto">Seller Information</h2>
      <div className="space-y-2 mt-2">
        <p className="flex justify-between">
          Seller <span className=" font-roboto">James Kinuthia</span>
        </p>
        <hr />
        <p className="flex justify-between font-roboto">
          Item Location <span className=" font-roboto">Peponi road, Westlands, Nairobi</span>
        </p>
        <hr />
        <p className="flex justify-between font-roboto">
          Contact <span className="font-roboto">+254785434789</span>
        </p>
      </div>
    </div>
    <div className="mt-8">
      <h2 className="text-xl font-semibold font-roboto">Payment</h2>
      <hr className="my-2" />
      <p className="text-gray-700 font-roboto">
        PAYMENT: If you are the winning bidder, facilitate payment by referring to the <a href="#" className="text-blue-500 underline">My bids</a> section...
      </p>
    </div>
    <div className="mt-8">
      <h2 className="text-xl font-semibold font-roboto">Additional Information</h2>
      <hr className="my-2" />
      <p className='font-roboto'>First time bidding? Please review our <a href="#" className="text-blue-500 underline font-roboto">Terms and conditions</a>.</p>
      <p>For further assistance, please review our <a href="#" className="text-blue-500 underline">Frequently asked questions</a>.</p>
    </div>
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Similar Items to View</h2>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[house12, house13, house14, house11].map((image, index) => (
        <div key={index} className="border rounded-lg p-4">
          <img className="w-full h-40 object-cover mb-4 font-roboto" src={image} alt={`Similar item ${index + 1}`} />
          <p>3 Bedroom Bungalow</p>
          <p>Thika, Kiambu, Kenya</p>
          <p>Start: 3rd Oct 2024</p>
          <p>End: 5th Oct 2024</p>
          <button className="mt-4 text-blue-500 underline">More Details</button>
        </div>
      ))}
    </div>
  </div>
  <Footer/>
  </div>
);

export default House120logged;
