import React from 'react'
import './AddRole.css'
import backicon from '../../assets/Shape/Shape/Status/backicon.svg'
import num1 from '../../assets/Shape/Shape/Status/num1.svg'
import num2 from '../../assets/Shape/Shape/Status/num2.svg'
import num3 from '../../assets/Shape/Shape/Status/num3.svg'

const AddRole = ({openAssignRole, setOpenAssignRole}) => {
  return (
    <div className='create-new-role'>
        <div className='roles-back-icon' onClick={()=> setOpenAssignRole(false)}>
         
        </div>
        <div className="img-addrole-text">
        <img src={backicon} alt="" className='roles-back-icon5' />
        <p className='add-role-text'>Roles</p>
        </div>
        <h1 className='new-role-create'>Create New Role</h1>
        <div className='add-role-info'>
            <div>
            <img src={num1} alt="" className='add-role-num1'/>
            <p className='basic-info-role'>Basic Info</p>
            </div>
            <div className='addrole-line'></div>
            <div>
            <img src={num2} alt="" />
            <p className='permissions-role'>Set Permissions</p>
            </div>
            <div className='add-role-line2'></div>
            <img src={num3} alt="" />
        </div>
    </div>
  )
}

export default AddRole