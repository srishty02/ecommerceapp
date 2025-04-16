import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(index);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      
      {/* Custom CSS for Moving Line */}
      <style>
        {`
          @keyframes movingLine {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .moving-underline {
            position: relative;
            padding-bottom: 10px;
            display: inline-block;
          }

          .moving-underline::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, #6b6f82, #d4af7f, #6b6f82); /* Gradient for underline */
            animation: movingLine 2s ease-in-out infinite;
          }

          .animated-text {
            background-image: linear-gradient(to right, #ff007f, #ff7f00, #ff0000);
            -webkit-background-clip: text;
            background-clip: text;
            animation: textAnimation 2s ease-in-out infinite;
            font-weight: bold;
          }

          @keyframes textAnimation {
            0% {
              color: transparent;
            }
            50% {
              color: #fff;
            }
            100% {
              color: transparent;
            }
          }
        `}
      </style>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-6xl p-8 bg-black/40 backdrop-blur-lg rounded-2xl shadow-2xl mt-10">
        
        {/* About Us Section */}
        <div className="text-4xl text-center pt-12 border-t border-gray-500 animate-textChange">
          <div className="moving-underline">
            <Title text1={'ABOUT'} text2={'US'} />
          </div>
        </div>

        <div className="my-12 flex flex-col md:flex-row gap-16 px-6 md:px-20 items-center">
          <img 
            className="w-full md:max-w-[450px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50" 
            src={assets.about_img} 
            alt="About Us" 
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-300 text-lg">
            {[ 
              { title: "Trust and Reliability:", desc: "AtTheDoorz ensures trust through strict background checks and skill tests before professionals offer services." },
              { title: "Convenience:", desc: "No more searching for service providers. Our seamless booking system makes home services accessible for everyone." }
            ].map((item, index) => (
              <p 
                key={index} 
                className={`leading-relaxed transition-all duration-300 cursor-pointer 
                ${clicked === index ? "text-clicked" : "hover:text-gray-100 hover:text-xl"}`}
                onClick={() => handleClick(index)}
              >
                <span className="font-bold text-gray-100">{item.title}</span> {item.desc}
              </p>
            ))}
            <b className="text-2xl text-gray-100 animate-pulse">🚀 Our Mission</b>
            <p 
              className={`leading-relaxed transition-all duration-300 cursor-pointer 
              ${clicked === "mission" ? "text-clicked" : "hover:text-gray-100 hover:text-xl"}`}
              onClick={() => handleClick("mission")}
            >
              AtTheDoorz is shaping the future of home services with technology, skilled professionals, and a customer-centric approach.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center text-2xl py-6 font-bold text-gray-100">
          <div className="moving-underline">
            <Title text1={'WHY'} text2={'CHOOSE US'} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20 px-6 md:px-20 gap-6">
          {[ 
            { title: "🔥 Quality Assurance", desc: "We invest in upskilling professionals to ensure top-quality service." },
            { title: "⚡ Convenience", desc: "Booking and scheduling are seamless with AtTheDoorz." },
            { title: "💡 Exceptional Service", desc: "We provide a hassle-free, reliable experience for customers." }
          ].map((item, index) => (
            <div key={index} className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-xl shadow-lg bg-white/30 backdrop-blur-lg hover:shadow-xl hover:bg-white/40 transition-all duration-300 cursor-pointer">
              <b 
                className="text-xl text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text cursor-pointer hover:text-white transition-all duration-300"
              >
                {item.title}
              </b>
              <p className="text-gray-400">{item.desc}</p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;

