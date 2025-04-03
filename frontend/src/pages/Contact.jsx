import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row items-center justify-center gap-10 mb-28 px-4 md:px-16'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />
        <div className='flex flex-col justify-center items-start gap-6 md:w-1/2'>
          <p className='font-semibold text-xl text-gray-600'>Our Center</p>
          <p className='text-gray-500'>Banasthali Vidyapith<br/> Banasthali Vidyapith Newai , Tonk , 304022</p>
          <p className='text-gray-500'>Tel:+91-9467238765<br/> Email: admin@thedoorz.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at THEDOORZ</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default Contact;