import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-400">
            {/* Hero Left Side */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 animate-fadeInLeft">
                <div className="text-[#414141]">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        <p className="font-medium text-sm md:text-base">OUR BEST SERVICE PROVIDERS</p>
                    </div>
                    <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                        Latest SERVICES
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm md:text-base animate-fadeInUp">BOOK NOW</p>
                        <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            {assets?.hero_img ? (
                <img 
                    className="w-full sm:w-1/2 animate-rotate infinite" 
                    src={assets.hero_img} 
                    alt="Hero Banner" 
                />
            ) : (
                <p className="text-gray-500 text-center">Image not available</p>
            )}
        </div>
    );
};

export default Hero;
