import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [showThankYou, setShowThankYou] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const messages = [
    "🎉 WOHOOO! Thank you for choosing us! 🚀",
    "🎊 Hope you enjoy our services! 😊"
  ];

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  // 🔁 Checkout for all
  const handleCheckout = () => {
    if (cartData.length === 0) return;
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      navigate('/placeorder', { state: { items: cartData } });
    }, 2500);
  };

  // ✅ Checkout for single item
  const handleSingleCheckout = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const confirmSingleCheckout = () => {
    setShowModal(false);
    navigate('/placeorder', { state: { items: [selectedItem] } });
  };

  return (
    <div className='border-t pt-14 relative'>
      <div className='text-2xl mb-6'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {cartData.length > 0 ? (
        <div>
          {cartData.map((item, index) => {
            const product = products.find((p) => p._id === item._id);
            if (!product) return null;

            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
              >
                <div className='flex items-start gap-6 text-sm sm:text-base'>
                  <img className='w-16 sm:w-20' src={product.image?.[0]} alt={product.name} />
                  <div>
                    <p className='font-medium'>{product.name}</p>
                    <div className='flex items-center gap-4 mt-2'>
                      <p>{currency}{product.price}</p>
                      <p className='px-2 sm:px-3 py-1 border bg-slate-50 text-xs'>{item.size}</p>
                    </div>
                    <p className='mt-2'>Date: <span className='text-gray-400'>{new Date().toLocaleDateString()}</span></p>
                    <p>Time: {product.time || 'FULL TIME'}</p>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 items-start sm:items-center justify-between md:w-1/2'>
                  <div className='flex items-center gap-3'>
                    <input
                      className='border max-w-14 px-2 py-1'
                      type='number'
                      min={1}
                      defaultValue={item.quantity}
                      onBlur={(e) =>
                        e.target.value && e.target.value !== '0' &&
                        updateQuantity(item._id, item.size, Number(e.target.value))
                      }
                    />
                    <img
                      className='w-5 cursor-pointer'
                      src={assets.bin_icon}
                      alt='Remove Item'
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                    />
                  </div>
                  <div
                    onClick={() => handleSingleCheckout(item)}
                    className='flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform'
                  >
                    <span className='min-w-2 h-2 rounded-full bg-green-500'></span>
                    <p className='text-sm underline text-blue-600'>Ready to Checkout</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Cart Total + Checkout */}
          <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <CartTotal />
              <div className='text-end'>
                <button
                  onClick={handleCheckout}
                  className="bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 text-white text-sm my-8 px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                  Checkout
                </button>
                {showThankYou && (
  <div className='fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center'>
    <div className='bg-white p-8 rounded-xl shadow-xl text-center max-w-md'>
      <h2 className='text-xl font-bold text-green-600 mb-4'>{messages[messageIndex]}</h2>
      <p className='text-gray-600'>Redirecting you to the final step...</p>
    </div>
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center text-gray-500 text-lg'>Your cart is currently empty.</p>
      )}

      {/* Confirmation Popup Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center'>
          <div className='bg-white p-8 rounded-xl shadow-xl text-center max-w-md'>
            <h2 className='text-xl font-semibold mb-4'>Proceed to checkout?</h2>
            <p className='mb-6 text-gray-600'>You’re about to checkout a service. Want to continue?</p>
            <div className='flex gap-4 justify-center'>
              <button
                onClick={() => setShowModal(false)}
                className='px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100'
              >
                Cancel
              </button>
              <button
                onClick={confirmSingleCheckout}
                className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
              >
                Yes, Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
