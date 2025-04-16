import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 text-white py-16 px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-32 opacity-20 animate-pulse">
        <svg
          className="w-[300px] h-[300px] text-blue-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
        </svg>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-8">
        {/* About Section */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300 animate__animated animate__fadeIn animate__delay-1s">
            About Us
          </h2>
          <p className="text-gray-300">
            We are committed to delivering exceptional products and services. Our team is dedicated to creating the best experiences for our users. Let's make the future brighter together!
          </p>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300 animate__animated animate__fadeIn animate__delay-2s">
            Contact Us
          </h2>
          <p className="text-gray-300">
            Reach out to us anytime! We're here to assist you with any questions or concerns. Our support team is always ready to help.
          </p>
          <div className="space-y-2 mt-6 animate__animated animate__fadeIn animate__delay-3s">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-gray-300">📞</span>
              <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-gray-300">📧</span>
              <a href="mailto:support@example.com" className="text-blue-400 hover:text-blue-300">
                support@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-blue-300 animate__animated animate__fadeIn animate__delay-4s">
            Quick Links
          </h2>
          <div className="space-y-2 mt-6 animate__animated animate__fadeIn animate__delay-5s">
            <a href="#home" className="block text-gray-400 hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#services" className="block text-gray-400 hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">
              About Us
            </a>
            <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-gray-400 mt-12 pt-8 border-t border-gray-700 animate__animated animate__fadeIn animate__delay-6s">
        <p>&copy; 2025 All Rights Reserved by YourCompany</p>
        <p className="text-sm">Built with ❤️ and dedication</p>
      </div>
    </footer>
  );
};

export default Footer;
