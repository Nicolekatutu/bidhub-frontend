import React from 'react'
import Navbar from './Navbar/Navbar'
import House120 from './house120/house120'
import Nav2 from './Nav2/Nav2'
import Footer from './Footer/Footer'

const HouseDescription = () => {
  return (
    <div>
    <Navbar />
    <Nav2/>
    <div className='flex items-center justify-center min-h-screen px-10'>

     <House120/>
      
      </div>
      <Footer/>
    </div>
  )
}

export default HouseDescription
