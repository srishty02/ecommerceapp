import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

// Dummy data for centers (optional, can be removed if not needed)
const centers = [
  { id: 1, name: 'Center A', position: { top: '20%', left: '15%' }, directions: ['Head north, then turn left at the main intersection.', 'Continue for 200 meters, and it will be on your right.'] },
  { id: 2, name: 'Center B', position: { top: '40%', left: '60%' }, directions: ['Head east, cross the river, and take a right turn.'] },
  { id: 3, name: 'Center C', position: { top: '70%', left: '30%' }, directions: ['Go straight for 1km, then take a left at the traffic lights.'] },
  { id: 4, name: 'Center D', position: { top: '50%', left: '20%' }, directions: ['Head south, then take the first right at the roundabout.'] },
  { id: 5, name: 'Center E', position: { top: '30%', left: '80%' }, directions: ['Take the highway and exit at the first junction.'] },
];

const Contact = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search and check for special locations
  const handleSearch = () => {
    const noCenterCities = ['bareilly', 'lucknow', 'delhi', 'kanpur'];

    if (noCenterCities.includes(searchTerm.toLowerCase())) {
      setShowPopup(true);
      setPopupMessage(`Sorry, we don't have any centers in ${searchTerm} 😔`);
    } else if (searchTerm.toLowerCase() === 'jaipur') {
      setShowPopup(true);
      setPopupMessage('Here we are, WHOOOO! 🎉');
    } else {
      setShowPopup(false);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  

  // Filter centers based on search term
  const filteredCenters = centers.filter(center =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-gradient-to-r from-teal-900 via-blue-800 to-indigo-900 text-white min-h-screen">
      <div className="text-center text-5xl pt-20 pb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Info Section */}
      <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16">
        <div className="md:w-1/2 flex flex-col items-start gap-6">
          <p className="font-semibold text-2xl text-yellow-300">Our Center</p>
          <p className="text-gray-300">
            Banasthali Vidyapith<br />
            Banasthali Vidyapith Newai, Tonk, 304022
          </p>
          <p className="text-gray-300">
            Tel: <span className="text-blue-400">+91-9467238765</span><br />
            Email: <span className="text-blue-400 hover:underline">admin@thedoorz.com</span>
          </p>
          <p className="font-semibold text-2xl text-yellow-300">Careers at THEDOORZ</p>
          <p className="text-gray-300">Learn more about our teams and job openings.</p>

          {/* Explore Jobs Button */}
          <button className="border border-yellow-500 px-8 py-4 text-sm font-medium text-yellow-300 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Explore Jobs
          </button>
        </div>

        <img className="w-full md:max-w-[480px] rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-lg" src={assets.contact_img} alt="Contact Us" />
      </div>

      {/* Search Bar for Locations */}
      <div className="flex justify-center py-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="  🔍 Search for a location... "
            value={searchTerm}
            onChange={handleInputChange}
            className="px-4 py-2 rounded-lg text-black w-full pl-8"
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display popup when searching specific cities */}
      {showPopup && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-xl font-semibold">{popupMessage}</h2>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Map and Location Section */}
      <div className="relative flex flex-col items-center py-12 bg-gray-800 rounded-xl shadow-lg mx-4 md:mx-16 mb-16">
        <p className="text-xl font-semibold text-yellow-300 mb-4">Visit Us</p>
        {/* Google Maps iframe */}
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109243.34024382269!2d75.7430115!3d26.8965664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3969c2bb265bc23b%3A0x3f01c4245ef431a9!2sBanasthali%20Vidyapith%2C%20Banasthali%20Vidyapith%20Newai%2C%20Tonk%2C%20304022!5e0!3m2!1sen!2sin!4v1675727756361!5m2!1sen!2sin"
          className="w-full h-[400px] rounded-lg border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* Newsletter Box Section */}
      <div className="mt-16 bg-gradient-to-r from-teal-700 via-blue-900 to-indigo-700 rounded-xl p-8">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;

