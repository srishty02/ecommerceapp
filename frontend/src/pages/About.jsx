import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Trust and Reliability: Trust was one of the major problems in the home services business. Customers would frequently have doubt on the quality and reliability of service providers. Urban Company addressed the problem by implementing a strong background check for the professionals providing the services. All professionals are obliged to undergo background checks and skill tests before becoming eligible to be able to provide any services via the platform.

Convenience: Consumers no more had to look for trustworthy service providers. AtTheDoorz made booking a service, selecting a professional, and scheduling time intrusively easy with a few clicks. Making home-services more accessible was the focus and the model of on-demand operation generated interest among busy people and working families.


</p>
          
           <b className='text-gray-800'>Our Mission</b>
           <p>Supported by technology, upskilled labour, and a customer orientated approach, The remains at the forefront of shaping the home services landscape. As it develops and expands, it's evident that Urban Company is not only transforming the perceptions of Indian people regarding home services, but also shaping the future of the industry in terms of standards.</p>
        </div>
      </div>
      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Among the company's more secret activities was its work in professional upskilling. In interviews, the founders have mentioned that the company invested heavily in training its workforce—be it beauticians, electricians, or plumbers.</p>
         </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'> Although most of the other players on the market based their operations on unskilled labor, Urban Company based its operations on the development and upskilling of its staff by means of training schemes. This would instill confidence in customers that the service they receive is of good quality</p>
         </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We empower businesses to thrive in the digital marketplace. With a passion for innovation and a commitment to excellence, we provide end-to-end eCommerce solutions tailored to your needs.</p>
         </div>

      </div>

      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About