import { Suspense, lazy } from 'react';
import '../Items.css';

import house15 from '../../assets/house15.jpg';
import house16 from '../../assets/house16.jpg';
import house17 from '../../assets/house17.jpg';
import house18 from '../../assets/house18.jpg';

import Agl from '../../assets/bhl.png';
import HandModel from '../../assets/hand-presenting-model-house.png';

const LazyAuctionItems = lazy(() => import('../shared/AuctionItems.Component'));

const auctionItems = [
  {
    img: house15,
    daysLeft: '3 Days left',
    descr: '4 Bedroom Bungalow, own compound, all ensuite',
    location: 'Kitisuru, Nairobi, Kenya',
    start: '3rd Oct, 2024',
    end: '5th Oct, 2024',
  },
  {
    img: house16,
    daysLeft: '3 Days left',
    descr: '4 Bedroom Bungalow, own compound, all ensuite',
    location: 'Kitisuru, Nairobi, Kenya',
    start: '3rd Oct, 2024',
    end: '5th Oct, 2024',
  },
  {
    img: house17,
    daysLeft: '2 Days left',
    descr: '4 Bedroom Bungalow, own compound, all ensuite',
    location: 'Kitisuru, Nairobi, Kenya',
    start: '3rd Oct, 2024',
    end: '5th Oct, 2024',
  },
  {
    img: house18,
    daysLeft: '2 Days left',
    descr: '4 Bedroom Bungalow, own compound, all ensuite',
    location: 'Kitisuru, Nairobi, Kenya',
    start: '3rd Oct, 2024',
    end: '5th Oct, 2024',
  },
];

const Items2 = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-16">
        <div className="bg-gradient-to-r from-[#1478A3] to-white h-[300px] md:h-[350px] flex flex-col md:flex-row items-center justify-between px-8 md:px-12 ">
          {/* Left Section */}
          <div className="flex flex-col gap-4 ">
            <img className="absolute top-2 w-20" src={Agl} alt="Logo" />
            
            <p className="absolute bottom-2 text-gray-800 text-sm">*Terms & Conditions Apply</p>
          </div>

          <div className="flex flex-col items-center  md:items-start ml-[100px] ">
          <p className="text-white font-ribeye font-bold text-5xl md:text-6xl leading-tight -rotate-6">
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
              className="w-[425px] h-[266px] md:w-[350px] lg:w-[425px] h-auto"
              src={HandModel}
              alt="House model"
            />
          </div>
        </div>

        {/* Website Link */}
        <p className="absolute top-2 right-4 text-gray-700 text-sm">www.agilebidhub.co.ke</p>
      </div>

      {/* Auction Items Section */}
      <Suspense fallback={<div>Loading please wait...</div>}>
        <LazyAuctionItems title="Upcoming auction" items={auctionItems} />
      </Suspense>
    </div>
  );
};

export default Items2;
