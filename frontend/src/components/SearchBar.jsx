import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location.pathname]);

  if (!showSearch || !visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="relative bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-full flex items-center w-[90%] sm:w-[50%] p-3 border border-gray-300 hover:border-blue-400 transition-all">
        
        {/* Search Icon */}
        {assets?.search_icon && (
          <img 
            className="w-6 h-6 mr-2 cursor-pointer transition-transform duration-300 hover:scale-110" 
            src={assets.search_icon} 
            alt="Search"
          />
        )}

        {/* Search Input */}
        <input
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-gray-700 text-sm px-2 placeholder-gray-400"
          type="text"
          placeholder="Search for services..."
          autoFocus
        />
        

        {/* Close Button */}
        {assets?.cross_icon && (
          <img
            onClick={() => setShowSearch(false)}
            className="absolute right-3 w-5 h-5 cursor-pointer transition-transform duration-300 hover:rotate-90"
            src={assets.cross_icon}
            alt="Close"
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;


