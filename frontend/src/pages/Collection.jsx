import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import categories from "../data/categories";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import CollectionComponent from "../components/CollectionComponent";
import { PrevArrow, NextArrow } from "../components/SliderArrow";
import CuratedVideos from "../components/CuratedVideos";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate();

  const openPopup = (category) => {
   setSelectedCategory(category);
  };

  const closePopup = () => setSelectedCategory(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const curatedVideos = [
    {
      id: 1,
      src: assets.video1,
      title: "Home Cleaning",
      description: "Sparkling clean homes by our professionals",
    },
    {
      id: 2,
      src: assets.video2,
      title: "AC Service",
      description: "Stay cool with expert AC maintenance",
    },
    {
      id: 3,
      src: assets.video3,
      title: "Salon at Home",
      description: "Pamper yourself with salon services at home",
    },
  ];

  return (
    <div className="px-4 md:px-10 py-6">
      <h1 className="text-3xl font-bold mb-6">Explore Our Services</h1>

      {/* Category Slider */}
      <div className="my-10">
        <Slider {...settings}>
          {categories.map((category) => (
            <motion.div key={category.id} whileHover={{ scale: 1.05 }} className="p-2">
             <div className="rounded-2xl shadow-lg p-4 bg-gradient-to-r from-violet-500 via-indigo-400 to-blue-500 cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[160px] object-cover rounded-xl mb-3"
                />
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Curated Videos */}
      <CuratedVideos videos={curatedVideos} />

      {/* Grid Cards */}
      <CollectionComponent
  categories={categories}
  onSectionClick={(slug) => {
    const matched = categories.find((cat) => cat.slug === slug);
    if (matched) {
      if (matched.subcategories?.length > 0) {
        setSelectedCategory(matched);
      } else {
        navigate(`/services/category/${slug}`);
      }
    } else {
      console.warn("No category found for slug:", slug);
    }
  }}
  openPopup={openPopup}
/>





      {/* Subcategory Popup */}
      {selectedCategory?.subcategories?.length > 0 && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="relative bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 p-6 rounded-lg w-11/12 sm:w-1/2 max-h-[80vh] overflow-y-auto">
      
      {/* Close Button */}
      <button
        onClick={closePopup}
        className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
        aria-label="Close"
      >
        &times;
      </button>

      <ul className="grid grid-cols-2 gap-4">
        {selectedCategory.subcategories.map((sub) => {
          const slug = sub.slug || sub.name.toLowerCase().replace(/\s+/g, "-");
          return (
            <li key={sub.id}>
              <div
                className="text-center cursor-pointer hover:bg-white/40 backdrop-blur-sm rounded-lg p-3 font-semibold"
                onClick={() => {
                  navigate(`/services/category/${selectedCategory.slug}/${slug}`);
                  closePopup();
                }}
              >
                {sub.name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
)}




      {/* Why Choose Us Section */}
      <div className="mt-20">
        <Title heading="Why Choose Us?" />
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-gray-600">
          <li>✓ Trained & Verified Professionals</li>
          <li>✓ On-Time Service Guarantee</li>
          <li>✓ Transparent Pricing</li>
          <li>✓ 100% Satisfaction</li>
          <li>✓ Easy Rebooking</li>
          <li>✓ Available 7 Days a Week</li>
        </ul>
      </div>
    </div>
  );
};

export default Collection;