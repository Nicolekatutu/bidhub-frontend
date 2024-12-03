
    import React from 'react';
    import './dashboard.css';
    import logo from '../../assets/logo.jpeg';
    import bell from '../../assets/icon/jam-icons/outline & logos/bell.svg';
    import home from '../../assets/Building Blocks/icon/jam-icons/outline & logos/home.jpg';
    import roles from '../../assets/roles.jpg';
    import users from '../../assets/users.jpg';
    import listings from '../../assets/listings.jpg';
    import Reports from '../../assets/Reports.jpg';
    import settings from '../../assets/settings.jpg';
    import help from '../../assets/help.jpg';
import { Link } from 'react-router-dom';
    // import Usersbox from '../../components/Dashboard/usersbox/usersbox'
   
    
   

    const SharedBars = () => {
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
                            <span><p className='greetings'>Good Afternoon!</p></span> 
                            <h4 className='admin-tittle'>SuperAdmin</h4>
                        </button>
                    </div>
                </div>
    
                {/* Main content container for side-nav and cards-section */}
                <div className='main-content'>
                    {/* Side navigation */}
                    <div className='side-nav'>
                        <button className='home-dashboard'>
                            <img src={home} alt="home" className='homepic' />
                            <p className='home-text'>Dashboard</p>
                        </button>
                       <button className='roles-box'>
                            <img src={roles} alt="roles" className='roles-pic' />
                            <p className='roles-text'>Roles</p>
                        </button>
                        <button className='Users'>
                            <img src={users} alt="users" className='users-pic' />
                            <p className='users-text'>Users</p>
                        </button>
                        
                        <button className='listings'>
                            <img src={listings} alt="listings" className='listings-pic' />
                            <p className='listings-text'>Listings</p>
                        </button>
                        <button className='reports'>
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
                </div>
            </div>
  )
}

export default SharedBars