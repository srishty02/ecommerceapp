import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const JoinUs = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate(); // Hook to navigate
  const email = 'support@atdoorz.com';
  const whatsappNumber = '919876543210';

  const handleShareByEmail = () => {
    const fullPhoneNumber = countryCode + phoneNumber;
    if (!phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    const mailBody = `Hi, I would like to join as a service provider.\nMy Phone Number: ${fullPhoneNumber}`;
    window.open(`mailto:${email}?subject=Join Request&body=${encodeURIComponent(mailBody)}`, '_blank');
  };

  const handleShareByWhatsApp = () => {
    const fullPhoneNumber = countryCode + phoneNumber;
    if (!phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    const whatsappMsg = `Hi, I want to join as a service provider. My phone number is ${fullPhoneNumber}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  const handleJoinUsClick = () => {
    if (!phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes borderWave {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-200 p-6">
      <div
        className="relative p-1 rounded-3xl"
        style={{
          backgroundImage: 'linear-gradient(270deg, #a855f7, #ec4899, #facc15)',
          backgroundSize: '600% 600%',
          animation: 'borderWave 6s ease infinite',
        }}
      >
        <div className="bg-white rounded-[22px] p-8 md:p-10 shadow-2xl w-full max-w-2xl">
          
          {/* Admin Button */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => navigate('/admin')}
              className="relative bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 opacity-30 blur-sm"></span>
              <span className="relative z-10">Admin</span>
            </button>
          </div>

          <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center animate-pulse">Join Us Now!</h1>

          <p className="text-center text-gray-800 text-md font-medium mb-6">
            Share your WhatsApp number with us, and we'll reach out via our WhatsApp Business Account to connect you with more opportunities!
          </p>

          <div className="flex flex-col sm:flex-row items-center border-2 border-purple-300 rounded-xl overflow-hidden shadow-md mb-6">
            <div className="flex items-center border-r-2 border-purple-300">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="px-4 py-3 text-lg text-gray-800 outline-none"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
              </select>
            </div>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 text-lg outline-none text-gray-800"
            />
            <button
              onClick={handleJoinUsClick}
              className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold px-6 py-3 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Join Us
            </button>
          </div>

          <div className="mt-8 p-6 bg-purple-50 border-l-4 border-purple-400 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">📤 Share by Email or Phone</h2>
            <p className="text-gray-700">You can also reach out to us directly via email or WhatsApp.</p>
            <p className="mt-2 text-md font-semibold text-gray-800">
              📞 WhatsApp: <span className="text-purple-700 font-bold">+91 98765 43210</span>
            </p>
            <p className="text-md font-semibold text-gray-800 mt-1">
              📧 Email: <span className="text-purple-700 font-bold">{email}</span>
            </p>

            <div className="flex justify-center mt-4 gap-4">
              <button
                onClick={handleShareByEmail}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
              >
                Share by Email
              </button>
              <button
                onClick={handleShareByWhatsApp}
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
              >
                Share via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Pop-up */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-gradient-to-br from-pink-400 via-yellow-400 to-purple-600 p-6 rounded-lg shadow-xl transform transition-all duration-500 scale-110 opacity-100">
            <p className="text-lg font-semibold text-center text-white">
              🎉 Thank you for joining us! We will connect with you soon via WhatsApp. 🌟
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinUs;
