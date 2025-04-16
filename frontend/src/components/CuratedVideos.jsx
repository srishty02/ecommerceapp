import React from "react";
import { assets } from "../assets/assets.js";

const curatedVideos = [
  {
    title: "Quick Home Repairs",
    video: assets.repair,
  },
  {
    title: "Cleaning & Pest Control",
    video: assets.cleaning,
  },
  {
    title: "Movers & Packers",
    video: assets.moving,
  },
];

const CuratedVideos = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-pink-300 to-violet-400 py-10 px-4 sm:px-8 md:px-16">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Explore Our Top Services</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Watch quick previews of the most popular services offered by our experts.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {curatedVideos.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedVideos;