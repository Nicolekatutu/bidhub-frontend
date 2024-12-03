import React from 'react';

const Nav2 = () => {
  return (
    <div className="bg-white flex justify-center py-4">
      <ul className="flex gap-2 md:gap-4 lg:gap-8 px-8 text-base md:text-lg list-none">
        <li className="text-center">All</li>
        <li className="text-center">Categories</li>
        <li className="text-center">Location search</li>
        <li className="text-center">New listing</li>
        <li className="text-center">Closing today</li>
      </ul>
    </div>
  );
};

export default Nav2;
