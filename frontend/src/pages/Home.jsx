import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import NewsletterBox from '../components/NewsletterBox';
import Chatbot from '../components/Chatbot'; // Import the chatbot component

const Home = () => {
  return (
    <div>
      <Hero />
      
      <LatestCollection />
      <BestSeller />
      <NewsletterBox />
      <Chatbot /> {/* Add the chatbot at the bottom */}
    </div>
  );
};

export default Home;
