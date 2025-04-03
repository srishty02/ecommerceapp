import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem'; // ✅ Ensure ProductItem is imported

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (Array.isArray(products) && products.length > 0) { // ✅ Prevents error if products is undefined
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]); // ✅ Runs when `products` updates

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'> {/* ✅ Fixed `text-3x1` */}
                <Title text1={'LATEST'} text2={'SERVICES'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                   Services at your doorstep , At best price with perfection  
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.length > 0 ? ( 
                    latestProducts.map((item, index) => (
                        item.image && item.name && item.price ? ( // ✅ Prevents rendering broken data
                            <ProductItem 
                                key={item._id || index} 
                                id={item._id} 
                                image={item.image} 
                                name={item.name} 
                                price={item.price} 
                            />
                        ) : null
                    ))
                ) : (
                    <p className="text-center col-span-5 text-gray-500">No Services available Currently</p> // ✅ Handles empty data
                )}
            </div>
        </div>
    );
};

export default LatestCollection;