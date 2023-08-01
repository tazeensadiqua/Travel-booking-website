import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import ThankYou from '../pages/ThankYou';
import Adminpage from '../pages/Adminpage';
import Adminlogin from '../pages/Adminlogin';
import AllBooking from '../pages/AllBooking';
import DashBoard from '../pages/DashBoard';
import AddProduct from '../pages/AddProduct';
import AllPackages from '../pages/AllPackages';





const Routers = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigate to ='/home' />} />
       <Route path='/home' element={<Home />} />
       <Route path='/about' element={<About/>} />
       <Route path='/tours' element={<Tours/>} />
       <Route path='/tours/:id' element={<TourDetails />} />
       <Route path='/login' element={<Login/>} />
       <Route path='/adminlogin' element={<Adminlogin/>} />
       <Route path='/register' element={<Register />} />
       <Route path='/thank-you' element={<ThankYou />} />
       <Route path='/tours/search' element={<SearchResultList />} />
       <Route path='/admin' element={<Adminpage />} />
       <Route path='/AllBooking' element={<AllBooking />} />
       <Route path='/AllPackages' element={<AllPackages />} />
       <Route path='/admin/DashBoard' element={<DashBoard />} />
       <Route path='/AddProduct' element={<AddProduct />} />
       



    </Routes>
  )
}

export default Routers;