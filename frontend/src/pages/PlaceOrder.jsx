import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showRazorpayPopup, setShowRazorpayPopup] = useState(false); // New state for popup visibility

  const location = useLocation();
  const navigate = useNavigate();
  const itemsToCheckout = location.state?.items || [];

  useEffect(() => {
    if (itemsToCheckout.length === 0) {
      navigate('/cart');
    }
  }, [itemsToCheckout, navigate]);

  const handlePlaceOrder = () => {
    if (!serviceDate || !serviceTime) {
      alert("Please select both service date and time.");
      return;
    }

    const orderDetails = {
      paymentMethod: method,
      serviceDate,
      serviceTime,
      items: itemsToCheckout,
    };

    localStorage.setItem('placedOrder', JSON.stringify(orderDetails));

    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      navigate('/thankyou');
    }, 4000);
  };

  return (
    <>
      {orderPlaced && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-xl p-8 shadow-2xl border border-gray-200 animate-scaleIn z-50">
            <div className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-transparent bg-clip-text">
              🎉 WOHOOO! Thank you for choosing us! 🚀
              <br />
              🎊 Hope you enjoy our services! 😊
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="fixed inset-0 bg-black opacity-40"></div>
        </div>
      )}

      {/* Razorpay Popup */}
      {showRazorpayPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-xl p-8 shadow-2xl border border-gray-200 animate-scaleIn z-50">
            <div className="text-2xl sm:text-3xl font-bold text-center">
              🚀 Razorpay Information
            </div>
            <div className="flex justify-center mt-4">
              <img src={assets?.razorpay_popup_image} alt="Razorpay" className="w-64 h-64" />
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowRazorpayPopup(false)}
                className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-40"
            onClick={() => setShowRazorpayPopup(false)}
          ></div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* Left side - Delivery Info Block */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px] animate-fadeSlideIn">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 border border-gray-200 shadow-xl rounded-xl p-6 transition-transform duration-300 hover:scale-[1.01]">
            <div className="text-xl sm:text-2xl font-semibold mb-4 text-white border-b-2 border-white pb-1 inline-block">
              DELIVERY INFORMATION 🚚
            </div>
            <div className="flex gap-3 mb-3 text-black">
              <input className="input-box fancy-input" type="text" placeholder="First name" />
              <input className="input-box fancy-input" type="text" placeholder="Last name" />
            </div>
            <input className="input-box fancy-input mb-3" type="email" placeholder="Email address" />
            <input className="input-box fancy-input mb-3" type="text" placeholder="Street" />
            <div className="flex gap-3 mb-3">
              <input className="input-box fancy-input" type="text" placeholder="City" />
              <input className="input-box fancy-input" type="text" placeholder="State" />
            </div>
            <div className="flex gap-3 mb-3">
              <input className="input-box fancy-input" type="text" placeholder="Zipcode" />
              <input className="input-box fancy-input" type="text" placeholder="Country" />
            </div>
            <input className="input-box fancy-input mb-4" type="number" placeholder="Phone number" />

            {/* Date and Time Inputs */}
            <div className="mb-4">
              <p className="font-semibold text-white mb-1 animate-pulse">📅 Select Service Date</p>
              <input
                type="date"
                className="input-box fancy-input-date shadow-lg border-2 border-yellow-300 bg-white text-black"
                value={serviceDate}
                onChange={(e) => setServiceDate(e.target.value)}
              />
            </div>

            <div>
              <p className="font-semibold text-white mb-1 animate-pulse">⏰ Select Service Time</p>
              <input
                type="time"
                className="input-box fancy-input-date shadow-lg border-2 border-yellow-300 bg-white text-black animate-wiggle"
                value={serviceTime}
                onChange={(e) => setServiceTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal items={itemsToCheckout} />
          </div>

          <div className="mt-12">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="flex gap-3 flex-col lg:flex-row">
              <label className="payment-option cursor-pointer">
                <input
                  type="checkbox"
                  checked={method === "stripe"}
                  onChange={() => setMethod("stripe")}
                  className="accent-green-500 mr-2"
                />
                <img className="h-5 mx-2" src={assets?.stripe_logo} alt="Stripe" />
              </label>
              <label className="payment-option cursor-pointer">
                <input
                  type="checkbox"
                  checked={method === "razorpay"}
                  onChange={() => {
                    setMethod("razorpay");
                    setShowRazorpayPopup(true); // Show popup when Razorpay is selected
                  }}
                  className="accent-green-500 mr-2"
                />
                <img className="h-5 mx-2" src={assets?.razorpay_logo} alt="Razorpay" />
              </label>
              <label className="payment-option cursor-pointer">
                <input
                  type="checkbox"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                  className="accent-green-500 mr-2"
                />
                <span className="text-gray-500 text-sm font-medium">CASH ON DELIVERY</span>
              </label>
            </div>

            <div className="w-full text-end mt-8">
              <button
                onClick={handlePlaceOrder}
                className="bg-black text-white px-16 py-3 text-sm rounded-md hover:opacity-90 transition-all duration-200"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input-box {
          @apply border rounded py-2 px-4 w-full transition-all duration-300;
        }

        .fancy-input {
          @apply bg-white text-gray-800 shadow-md focus:ring-2 focus:ring-pink-300 border-2 border-white;
        }

        .fancy-input-date {
          @apply bg-white text-gray-800 py-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-300;
        }

        .payment-option {
          @apply flex items-center gap-3 border p-2 px-3;
        }

        @keyframes scaleIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
        }

        .confetti {
          position: absolute;
          top: 0;
          width: 8px;
          height: 16px;
          border-radius: 2px;
          animation: confettiFall 2s ease-out forwards;
        }

        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.6s ease-out;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        .animate-wiggle {
          animation: wiggle 0.8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default PlaceOrder;
