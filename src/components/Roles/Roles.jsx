import React, { useState } from 'react'
import './Roles.css'
import RolesDescription from '../../components/Roles/RolesDescription'
import Dashboard from '../Dashboard/dashboard'
import AddRole from './AddRole'

const Roles = () => {

  const [openAssignRole, setOpenAssignRole] = useState(false)
  return (
    <div>
      <Dashboard>
       {
        openAssignRole === false ? (<RolesDescription openAssignRole={openAssignRole} setOpenAssignRole={setOpenAssignRole}/>) : ( <AddRole openAssignRole={openAssignRole} setOpenAssignRole={setOpenAssignRole}/>)
       }
      
    </Dashboard>
    </div>
   
  )
}

export default Roles