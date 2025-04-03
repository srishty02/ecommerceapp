import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Debugging logs
  useEffect(() => {
    console.log("Current path:", location.pathname);
    setVisible(location.pathname.includes("collection"));
  }, [location.pathname]);

  console.log("showSearch:", showSearch, "visible:", visible);

  if (!showSearch || !visible) return null; // Only render if both conditions are met

  return (
    <div className="border-t border-b bg-gray-50 text-center p-3">
      <div className="inline-flex items-center justify-between border border-gray-400 px-4 py-2 my-3 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search || ""}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log("Search updated:", e.target.value);
          }}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        {assets?.search_icon && (
          <img className="w-5 cursor-pointer" src={assets.search_icon} alt="Search Icon" />
        )}
      </div>
      {assets?.cross_icon && (
        <img
          onClick={() => {
            setShowSearch(false);
            console.log("Search bar closed");
          }}
          className="inline w-4 cursor-pointer ml-2"
          src={assets.cross_icon}
          alt="Close Search"
        />
      )}
    </div>
  );
};

export default SearchBar;
