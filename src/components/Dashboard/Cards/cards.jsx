import React from 'react'
import './cards.css'
import line1 from '../../../assets/line1.jpg'
import line2 from '../../../assets/line2.jpg'
import line3 from '../../../assets/line3.jpg'
import line4 from '../../../assets/line4.jpg'
import users2 from '../../../assets/users2.svg'
import mouse from '../../../assets/mouse.png'
import cartfull from '../../../assets/cartfull.svg'
import uparrow from '../../../assets/Building Blocks/icon/jam-icons/outline & logos/uparrow.svg'
import downvector from '../../../assets/Building Blocks/icon/jam-icons/outline & logos/downvector.svg'

const cards = () => {
  return (
    <div className='cards-2'>
     <card className='cards-btn'>
      <cards className='cards'>
      <div className='icon-box'>
        <box className='box1'></box>
         <p className='card-text'> All users
        <p className='card-text2'>This month</p></p>
        </div>
        <p className='numbers'><b>68</b> <p className='perc'><b>0.43%</b><img src={uparrow} alt="" className='uparrow' /> </p></p>
        <img src={line1} alt="" className='lines-pics'/>
      </cards>
      </card>

      <card className='cards-btn'>
      <cards className='cards'>
        <div className='icon-box'>
      <button className='box2'><img src={users2} alt="" className='users1' /> </button>
     <p className='card-text'> All Companies
      <p className='card-text2'>This month</p></p>
     </div>
        <p className='numbers'><b>75</b> <p className='perc'><b> 0.39%</b><img src={uparrow} alt="" className='uparrow'/></p></p>
        <img src={line2} alt="" className='lines-pics'/>
      </cards>
      </card>

      
      <card className='cards-btn'>
      <cards className='cards'>
      <div className='icon-box'>
      <button className='box3'><img src={mouse} alt="" className='users21' /> </button>
     <p className='card-text'> Running Adds
      <p className='card-text2'>This month</p></p>
     </div>
        <p className='numbers'><b>655</b> <p className='perc-dec'> <b>1.39%</b><img src={downvector} alt="" className='downvector' /></p></p>
        <img src={line3} alt="" className='lines-pics'/>
      </cards>
      </card>

      <card className='cards-btn'>
      <cards className='cards'>
        <div className='icon-box'>
      <box className='box4'> <img src={cartfull} alt="" className='users3' /></box>
     <p className='card-text'> Total Revenue
     <p className='card-text2'>This month</p></p>
     </div>
        <p className='numbers'><b>573k</b> <p className='perc'> <b>2.69%</b><img src={uparrow} alt="" className='uparrow' /></p></p>
        <img src={line4} alt="" className='lines-pics'/>
      </cards>
      </card>,
    </div>

  )
}

export default cards
