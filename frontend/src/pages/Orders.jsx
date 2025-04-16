import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'; // Ensure Title is correctly imported
import ArrowButton from '../components/ArrowButton';
import { Link } from 'react-router-dom';


const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  if (!products || products.length === 0) {
    return <p className='text-center text-gray-500'>No orders found.</p>;
  }

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {products.slice(0, 3).map((item, index) => (
          <div 
            key={index} 
            className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            <div className='flex items-start gap-6 text-sm'>
              {item.image && item.image.length > 0 ? (
                <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name || 'Product'} />
              ) : (
                <div className='w-16 sm:w-20 h-16 sm:h-20 bg-gray-200 flex items-center justify-center text-gray-500'>
                  No Image
                </div>
              )}
              
              <div>
                <p className='sm:text-base font-medium'>{item.name || 'Unnamed Product'}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price || 'N/A'}</p>
                  <p>TIME : {item.time || 'FULL TIME'}</p>
                  
                </div>
                <p className='mt-2'>Date: <span className='text-gray-400'>{new Date().toLocaleDateString()}</span></p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500 '></p>
                
                 <div className="text-sm md:text-base">
                          <Link
                            to="/place-order"
                            className="bg-blue-100 text-blue-600 hover:underline text-sm font-medium px-4 py-2 rounded-md shadow-sm"
                          >
                            Checkout →
                          </Link>
                        </div>

              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
