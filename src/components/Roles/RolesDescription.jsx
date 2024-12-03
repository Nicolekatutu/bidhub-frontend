import React from 'react'
import './RolesDescription.css'

const RolesDescription = ({openAssignRole, setOpenAssignRole}) => {
  return (
    <div>
     <div className='permission-bar'>
        <div className='roles-arrow'>
        <h6 className='roles-heading'><b> Roles and Permission</b></h6>
      <div className='buttons-position'> <p className='roles-text'>Modify what individuals on this row can do</p>
      <div className='roles-btn'>
        <button className='users-btn'>
          <p>All users</p>
        </button>
        <button className='assign-roles-btn'>
          <p className='assign-role-text' onClick={()=> setOpenAssignRole(true)}>+ Assign role</p>
        </button>
      </div>
      </div>
      </div> 
      <br/>
      <hr/>
      <div className='admin-access'>
        <h2 className='admin-heading'>Admin Access</h2>
       <div className='admin-direction'>
        <div>
          <h2 className='add-admin'>Add Admin</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
          </div>
        <div>
          <h2 className='add-admin'>Add Admin</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
        </div>
        </div>
        <div className='admin-direction'>
        <div>
          <h2 className='add-admin'>Add Admin</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
          </div>
        <div>
          <h2 className='add-admin'>Add Admin</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
        </div>
        </div>
        
     </div>
     
     <div className='auctioneer-manager2'>
     <h2 className='admin-heading'>Auctioneer Manager</h2>
     <div className='admin-direction'>
        <div>
          <h2 className='add-admin'>Send Reminders</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
          </div>
        <div>
          <h2 className='add-admin'>Renewals</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
        </div>
        </div>
        <div className='admin-direction'>
        <div>
          <h2 className='add-admin'>Add Auctioneers</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
          </div>
        <div>
          <h2 className='add-admin'>Add Auctioneers</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
        </div>
        </div>

     </div>
     <div className='auctions-manager'>
     <h2 className='admin-heading'>Auctions Manager</h2>
     <div className='admin-direction'>
        <div>
          <h2 className='add-admin'>Add Auctioneers</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
          </div>
        <div>
          <h2 className='add-admin'>Add Auctioneers</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
        </div>
        </div>
        <div className='admin-direction'>
        <div>
          <h2 className='add-admin'>Add Auctioneers</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
          </div>
        <div>
          <h2 className='add-admin'>Add Auctioneers</h2>
          <p className='admin-text2'>This allows access to create new roles for admins.</p>
        </div>
        </div> 

     </div>
     <div className='advert-supervisor'>
     <h2 className='admin-heading'>Adverts Supervisor</h2>

     </div>
     </div>
    
     </div>
    
  )
}

export default RolesDescription