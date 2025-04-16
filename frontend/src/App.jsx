import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ServicePage from './pages/ServicePage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import ServicesPage from './pages/ServicesPage';
import Register from './pages/Register';
import ProviderRegister from './pages/ProviderRegister';
import JoinUs from './pages/JoinUs';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin'; // ✅ Renamed admin login

import { Toaster } from 'react-hot-toast';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const location = useLocation();

  // Don't show Navbar and Footer on admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Toaster position="top-center" reverseOrder={false} />
      
      {!isAdminRoute && <Navbar />}
      {!isAdminRoute && <SearchBar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/register' element={<Register />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/register/provider-register" element={<ProviderRegister />} />
        <Route path="/services/category/:categorySlug" element={<ServicePage />} />
        <Route path="/services/category/:categorySlug/:subCategorySlug" element={<ServicePage />} />
        <Route path="/services/:categorySlug/:subcategorySlug/:serviceName" element={<ServiceDetailsPage />} />
        <Route path="/provider/:providerId" element={<ServicesPage />} />

        {/* Admin Login & Panel */}
        <Route
          path='/admin'
          element={
            isAdminLoggedIn ? (
              <AdminPanel />
            ) : (
              <AdminLogin onLogin={handleAdminLogin} />
            )
          }
        />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
