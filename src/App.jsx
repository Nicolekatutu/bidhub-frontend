import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Roles from './components/Roles/Roles';
import DashboardComponents from './components/dashboardComponents/DashboardComponents';
import Users from './components/Users/Users';
import LISTINGS from './components/Listings/LISTINGS';
import Login from './components/LoginForm/Login';
import LandingPage from './components/LandingPage/landingpage';
import HouseDescription from './components/HouseDescription';
import RegisterForm from './components/RegisterForm/Register';
import OTP from './components/OTP/Otp';
import House120logged from './components/loggedbidder/house120logged';
//import LandingPage from './components/LandingPage/LandingP';

const App = () => (

  <div className='App'>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/itemDetails' element={<HouseDescription />} />
        <Route path='/dashboard' element={<DashboardComponents/>}/>
        <Route path='/roles' element={<Roles/>}/>
        <Route path='/users' element={<Users/>}/>                                   
        <Route path='/listings' element={<LISTINGS/>}/>
        {/* <Route path='/item' element={<Items/>}/> */}
        <Route path='/landin' element={<LandingPage/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route path='/logged' element={<House120logged/>}/>
        
      </Routes>
    </Router>

  </div>

)

export default App
 