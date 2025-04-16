import React from 'react';

const ArrowButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-300 hover:shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="text-gray-800"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

export default ArrowButton;
