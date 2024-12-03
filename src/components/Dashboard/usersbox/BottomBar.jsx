import React from 'react'
import './BottomBar.css'
import vector from '../../../assets/vector.PNG'

const bottombar = () => {
  return (
    <div className='bottom-bar'>
         <p className='rows-class'>Rows per page: 10</p>
         <p className='numbers-class'>1-10 of 276</p>
         <img src={vector} alt="" className='next-icon'/>
         <img src={vector} alt="" className='next-icon2'/>

    </div>
  )
}

export default bottombar