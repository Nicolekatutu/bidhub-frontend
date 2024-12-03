import React from 'react'
import './ListingsDescription.css'
import report from '../../assets/Shape/report.svg'
import dot from '../../assets/Shape/Shape/Status/dot.svg'
import active from '../../assets/Shape/Shape/Status/active.svg'
import close from '../../assets/Shape/Shape/Status/close.svg'
import suspended from '../../assets/Shape/Shape/Status/suspended.svg'
import more2 from '../../assets/Shape/Shape/Status/more2.svg'
import listhouse from '../../assets/listhouse.jpg'

const ListingsDescription = () => {
  return (
    <div className='ListingsDescription'>

        <p className="all-listings">All Listings</p>
        <div className='list-items4'>
        <button className='list-import'>
      
<img src={report} alt="" className='list-img' />  
<p className='list-reports-btn'>Reports</p>
        </button>
        <button className='list-add-user'> 
          <p className='new-listings'>+ New Listing</p>
        </button>
       </div>
       <div >
        <ul className='adcenter-list'>
          <li> All</li>
          <li> Active</li>
          <li> Pending</li>
          <li>Suspended</li>
          <li>Closed</li>
        </ul>
        <div className='list-line-four'></div>
       </div>
       <div className='list-cards-dir'>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-name'>
          <img src={dot} alt="" className='dot' />
          <p className='approval'>Pending Approval</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-active'>
          <img src={active} alt="" className='dot' />
          <p className='active'>Active</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 625.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-name'>
          <img src={dot} alt="" className='dot' />
          <p className='approval'>Pending Approval</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       </div>
       <div className='list-cards-dir'>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-suspended'>
          <img src={suspended} alt="" className='dot' />
          <p className='suspended'>Suspended</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-active'>
          <img src={active} alt="" className='dot' />
          <p className='active'>Active</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-closed'>
          <img src={close} alt="" className='dot' />
          <p className='closed'>Closed</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       </div>
       <div className='list-cards-dir'>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-active'>
          <img src={active} alt="" className='dot' />
          <p className='active'>Active</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-closed'>
          <img src={close} alt="" className='dot' />
          <p className='closed'>Closed</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       <div className='list-cards'>
        <h4 className='list-card-text'>3-Bedroom apartment</h4>
        <div className='card-1'>
          <div className='list-card-more'>
          <div className='list-card-direction'>
          <div className='list-card-suspended'>
          <img src={suspended} alt="" className='dot' />
          <p className='suspended'>Suspended</p>
          </div>
          </div>
          <img src={more2} alt=""  className='list-more'/>
          </div>
         <div className='list-line'></div>
         <div className='list-house-text'>
          <div>
         <h2 className='list-title'>3 Bedroom Apartment</h2>
         <p className='list-house-desc'>own,compound,all documents ready for transfer,property available for viewing</p>
         </div>
         <img src={listhouse} alt="" className='list-house'/>
         </div>
         <div className='list-line-two'></div>
         <div className='clicks-viewers'>
         <div>
          <p>....</p>
          <p className='list-clicks'>Ad Clicks</p>
         </div>
         <div className='interested-viewers'>
          <p>....</p>
          <p className='list-viewers'>Interested viewers</p>
         </div>
         <div>
         <p>Kes 0.0</p>
         <p className='ad-cost'>Ad cost</p>
         </div>
         </div>
        </div>
       </div>
       </div> 
    </div>
  )
}

export default ListingsDescription