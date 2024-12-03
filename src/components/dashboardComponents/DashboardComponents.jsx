import React from 'react'
import Cards from '../../components/Dashboard/Cards/cards'; // Ensure correct import for the Cards component
import Usersbox from '../../components/Dashboard/usersbox/usersbox'

import HeaderTable from '../HeaderTable/headertable';
import ExTable from '../Dashboard/ExTable/ExTable';
import BottomBar from '../Dashboard/usersbox/BottomBar'
import Dashboard from '../Dashboard/dashboard';
import '../Dashboard/dashboard.css';

function DashboardComponents() {
  return (
    <div>
      <Dashboard>
      <div className='cards-section' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px'}}>
      <Cards />
                     <div className='usersbox'
                     style={{  marginLeft: '-2px', paddingTop: '30px'}}>
                
                        <HeaderTable/>
                  
                    <ExTable/>
                  
                    <BottomBar  />  <div>
                </div>
                </div>
                </div>
               
      </Dashboard>
    </div>
  )
}

export default DashboardComponents
