import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount } = useContext(ShopContext);

    return (
        <div className="relative z-50">
            {/* Navbar with Animated Galaxy Background */}
            <nav className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-galaxy 
                text-white flex items-center justify-between py-5 px-8 shadow-lg">

                {/* Logo (Animated Shape-Changing Effect) */}
                <Link to="/" className="relative group">
                    {assets?.logo && (
                        <img
                            src={assets.logo}
                            className="w-20 transition-transform duration-500 transform group-hover:rotate-180 group-hover:scale-110"
                            alt="Company Logo"
                        />
                    )}
                </Link>

                {/* Navigation Links */}
                <ul className="hidden sm:flex gap-6 text-lg font-semibold items-center">
                    {['/', '/collection', '/about', '/contact'].map((path, index) => (
                        <NavLink key={index} to={path} className="relative group hover:text-yellow-300">
                            <span className="relative z-10">{path.replace('/', '').toUpperCase() || 'HOME'}</span>
                            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    ))}

                    {/* Join Us Now Button */}
                    <Link
                        to="/join"
                        className="ml-4 px-5 py-2 bg-yellow-300 text-black font-bold rounded-full shadow-md transition-all duration-300 hover:bg-yellow-400 hover:scale-105 animate-pulse"
                    >
                        Join Us Now
                    </Link>
                </ul>

                {/* Icons Section */}
                <div className="flex items-center gap-6">
                    {/* Search Icon */}
                    {assets?.search_icon && (
                        <img
                            onClick={() => setShowSearch && setShowSearch(true)}
                            src={assets.search_icon}
                            className="w-6 cursor-pointer hover:scale-110 transition-transform duration-300"
                            alt="Search"
                        />
                    )}

                    {/* Profile Dropdown */}
                    <div className="group relative">
                        {assets?.profile_icon && (
                            <Link to="/login">
                                <img className="w-6 cursor-pointer hover:scale-110 transition-transform duration-300" src={assets.profile_icon} alt="Profile" />
                            </Link>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative">
                        {assets?.cart_icon && <img src={assets.cart_icon} className="w-6 min-w-6 hover:scale-110 transition-transform duration-300" alt="Cart" />}
                        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-yellow-400 text-black rounded-full text-xs font-bold">
                            {getCartCount() || 0}
                        </p>
                    </Link>

                    {/* Mobile Menu Icon */}
                    {assets?.menu_icon && (
                        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden" alt="Menu" />
                    )}
                </div>
            </nav>

            {/* Sidebar menu for small screens */}
            <div className={`fixed top-0 right-0 bottom-0 bg-gray-800 text-white transition-all duration-500 ${visible ? 'w-full' : 'w-0'} overflow-hidden`}>
                <div className="flex flex-col">
                    <button onClick={() => setVisible(false)} className="p-4 text-lg font-bold">X</button>
                    {['/', '/collection', '/about', '/contact'].map((path, index) => (
                        <NavLink key={index} onClick={() => setVisible(false)} className="py-4 pl-6 text-lg hover:bg-gray-700" to={path}>
                            {path.replace('/', '').toUpperCase() || 'HOME'}
                        </NavLink>
                    ))}

                    {/* Join Us Now Button in Mobile View */}
                    <Link
                        to="/join"
                        onClick={() => setVisible(false)}
                        className="mx-6 my-4 py-3 text-center text-lg font-bold bg-yellow-400 text-black rounded-full shadow hover:bg-yellow-300 transition-all duration-300"
                    >
                        Join Us Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
