// components/SliderArrow.js
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </div>
);

export const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    <ChevronLeft size={24} />
  </div>
);
