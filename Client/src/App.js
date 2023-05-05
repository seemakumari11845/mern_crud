import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/pages/Header';
import './App.css';
import Footer from './components/pages/Footer';
import SignUp from './components/pages/SignUp';
import AddProduct from './components/pages/AddProduct';
import Profile from './components/pages/Profile';
import About from './components/pages/About';
import PrivateCom from './components/pages/PrivateCom';
import Logout from './components/pages/Logout';
import Update from './components/pages/Update';
import Login from './components/pages/Login';
import Product from './components/pages/Product';

export default function App(){
  return(
   <div>
    <BrowserRouter>
    <Header/>
   <Routes>

    <Route element={<PrivateCom/>}>
   <Route path='/' element={<Product/>} />
   <Route path='/add' element={<AddProduct/>} />
   <Route path='/update/:id' element={<Update/>} />
   <Route path='/profile' element={<Profile/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/logout' element={<Logout/>} />
    </Route>

   <Route path='/signup' element={<SignUp/>} />
   <Route path='/login' element={<Login/>} />
   </Routes>
   <Footer/>
    </BrowserRouter>
   </div>
  )
}