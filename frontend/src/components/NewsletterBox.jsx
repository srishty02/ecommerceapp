import React, { useState } from 'react';

const NewsletterBox = () => {
    const [subscribed, setSubscribed] = useState(false);  // State to track subscription

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setSubscribed(true);  // Show thank-you message
    };

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 10% off</p>
            <p className='text-gray-400 mt-3'>Stay updated with our latest offers and promotions.</p>

            {!subscribed ? (
                <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 p-2 rounded-md'>
                    <input 
                        className='w-full sm:flex-1 outline-none p-2' 
                        type="email" 
                        placeholder='Enter your email' 
                        aria-label="Enter your email for subscription" 
                        required 
                    />
                    <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
                </form>
            ) : (
                <p className='text-green-600 font-semibold text-lg mt-5'>
                    ✅ Thanks for subscribing to our service! Have a nice journey. 🎉
                </p>
            )}
        </div>
    );
};

export default NewsletterBox;

