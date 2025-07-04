import React, { useState, useEffect, useContext } from 'react'; // ✅ Imported missing hooks
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'; // ✅ Imported assets

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState([
    { user: 'User1', comment: 'Great service! Totally satisfied.' },
    { user: 'User2', comment: 'Excellent sense of duty, would book the service again.' },
    
  ]);
  const [newReview, setNewReview] = useState('');
  useEffect(() => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
      setImage(selectedProduct.image?.[0] || ''); // ✅ Prevents crash if `image` is missing
    }
  }, [productId, products]); // ✅ Added `products` dependency to re-run when products update
  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([...reviews, { user: 'Anonymous', comment: newReview }]);
      setNewReview('');
    }
  };
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image?.map((item, index) => (
              <img 
                onClick={() => setImage(item)} 
                src={item} 
                key={index} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                alt={`Product Image ${index + 1}`} 
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="Selected Product" />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1> {/* ✅ Fixed `text-2x1` */}
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="Star Rating" className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} alt="Star Rating" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>

          
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

         

          <button 
            onClick={() => addToCart(productData._id, size)} 
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            Book the service
          </button>
          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>✔ 100% Best Services.</p>
            <p>✔ Verified Professional.</p>
            
          </div>
        </div>
      </div>

      
      {/* Description & Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <button 
            className={`border px-5 py-3 text-sm ${activeTab === 'description' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`border px-5 py-3 text-sm ${activeTab === 'reviews' ? 'font-bold' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({reviews.length})
          </button>
        </div>
        {activeTab === 'description' ? (
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Compassionate Care, Right at Your Doorstep!</p>
            <p>

Our trained and verified caretakers provide personalized assistance for the elderly, patients, or anyone in need of day-to-day support. From administering medications to helping with mobility, hygiene, and companionship — we ensure comfort, safety, and dignity at every step.

Whether it's short-term recovery or long-term care, trust our caretakers to treat your loved ones like family.

</p>
          </div>
        ) : (
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            {reviews.map((review, index) => (
              <p key={index}><strong>{review.user}:</strong> {review.comment}</p>
            ))}
            <div className='mt-4'>
              <input 
                type='text' 
                value={newReview} 
                onChange={(e) => setNewReview(e.target.value)} 
                placeholder='Write a review...' 
                className='border px-4 py-2 w-full'
              />
              <button 
                onClick={handleReviewSubmit} 
                className='bg-black text-white px-4 py-2 mt-2'
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : <div className='opacity-0'></div>;
};

export default Product;