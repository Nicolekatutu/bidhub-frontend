import React, { useState } from 'react';
import './dashboard.css';
import logo from '../../assets/logo.jpeg';
import bell from '../../assets/icon/jam-icons/outline & logos/bell.svg';
import home from '../../assets/icon/jam-icons/outline & logos/home.svg';
import roles from '../../assets/roles.svg';
import users12 from '../../assets/users12.svg';
import listings from '../../assets/listings.svg';
import Reports from '../../assets/Reports.jpg';
import settings from '../../assets/settings.jpg';
import help from '../../assets/help.jpg';
import Cards from '../../components/Dashboard/Cards/cards'; // Ensure correct import for the Cards component
import Usersbox from '../../components/Dashboard/usersbox/usersbox';
import ExTable from './ExTable/ExTable';
import HeaderTable from '../HeaderTable/headertable';
import { Link } from 'react-router-dom';
import BottomBar from '../Dashboard/usersbox/BottomBar';
import downarrow from '../../assets/Building Blocks/icon/jam-icons/outline & logos/downarrow.svg';
import pic2 from '../../assets/Building Blocks/icon/jam-icons/outline & logos/pic2.jpg';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ExpandMore, ExpandLess } from '@mui/icons-material';  // Corrected imports
import Collapse from '@mui/material/Collapse';
import manage from '../../assets/manage.svg'
import password from '../../assets/password.svg'
import activity from '../../assets/activity.svg'
import logout from '../../assets/logout.svg'

const Dashboard = ({ children }) => {
  const [selected, setSelected] = useState('dashboard'); // Default selection
  const [openPreclaims, setOpenPreclaims] = useState(false);

  const handleClick = (buttonName) => {
    setSelected(buttonName); // Set the clicked button as selected
  };

  const togglePreclaims = () => {
    setOpenPreclaims(!openPreclaims);
  };
  

  return (
    <div className='dashboard'>
      {/* Top navigation */}
      <div className='top-nav'>
        <div className='dashboard-container'>
          <img src={logo} alt="logo" className='logo' />
          <div className='nation-container'>
            <span><p className='nation-name'>Nation Media</p></span>
            <p className='date'>Friday, 4th Oct 2024</p>
          </div>
        </div>
        <div className='superadmin'>
          <div className='notification-container'>
            <img src={bell} alt="bell" />
          </div>
          <button className='superadmin-btn'>
            <div className='superadmin-direction'>
              <img src={pic2} alt="" className='shaddiepic' />
              <div>
                <span><p className='greetings'>Good Afternoon!</p></span>
                <h4 className='admin-title'>SuperAdmin</h4>
              </div>
              {/* Dropdown trigger */}
              <ListItem button onClick={togglePreclaims}>
                {openPreclaims ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </div>
            <div className='admin-actions'>
            {/* Dropdown list */}
            <Collapse in={openPreclaims} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <img src={manage} alt=""  className='admin-action-pic'/>
                  <ListItemText primary="Manage Account"  />
                </ListItem>
                <ListItem button> <img src={password} alt=""  className='admin-action-pic' />
                  <ListItemText primary="Change Password" />
                </ListItem>
                <ListItem button> <img src={activity} alt=""  className='admin-action-pic'/>
                  <ListItemText primary="Activity Log" />
                </ListItem>
                <ListItem button> <img src={logout} alt="" className='admin-action-pic' />
                  <ListItemText primary="Log out" />
                </ListItem>
              </List>
            </Collapse>
            </div>
          </button>
        </div>
      </div>

      {/* Main content container for side-nav and cards-section */}
      <div className='main-content'>
        {/* Side navigation */}
        <div className='side-nav'>
          <Link to='/dashboard'>
            <button
              className={`home-dashboard ${selected === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleClick('dashboard')}
            >
              <img src={home} alt="home" className='homepic' />
              <p className='home-text'>Dashboard</p>
            </button>
          </Link>
          
          <Link to='/roles'>
            <button
              className={`roles-box ${selected === 'roles' ? 'active' : ''}`}
              onClick={() => handleClick('roles')}
            >
              <img src={roles} alt="roles" className='roles-pic' />
              <p className='roles-textt'>Roles</p>
            </button>
          </Link>

          <Link to='/users'>
            <button
              className={`Users12-box ${selected === 'users' ? 'active' : ''}`}
              onClick={() => handleClick('users')}
            >
              <img src={users12} alt="users" className='users-pic' />
              <p className='users-text'>Users</p>
            </button>
          </Link>

          <Link to='/listings'>
            <button
              className={`listings-box ${selected === 'listings' ? 'active' : ''}`}
              onClick={() => handleClick('listings')}
            >
              <img src={listings} alt="listings" className='listings-pic' />
              <p className='listings-text'>Listings</p>
            </button>
          </Link>

          <button
            className={`reports ${selected === 'reports' ? 'active' : ''}`}
            onClick={() => handleClick('reports')}
          > 
            <img src={Reports} alt="Reports" className='report-pic' />
            <p className='reports-text'>Reports</p>
          </button>

          <div className='settings-help'>
            <div className='settings'>
              <img src={settings} alt="settings" className='settings-pic' />
              <p className='settings-text'>Settings</p>
            </div>
            <div className='help'>
              <img src={help} alt="help" className='help-pic' />
              <p className='help-text'>Help</p>
            </div>
          </div>
        </div>

        <div className="content-area" style={{ overflowY: 'auto', maxHeight: '600px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
