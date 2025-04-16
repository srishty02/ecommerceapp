// At the top after imports
import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import ArrowButton from './ArrowButton';
import { Link } from 'react-router-dom';

// Exporting bestSellerIds for use in other components
export let bestSellerIds = [];

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [hovering, setHovering] = useState(false);

  const [showDiscountBar, setShowDiscountBar] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('discountDismissed');
    if (dismissed) return;

    const storedStart = localStorage.getItem('discountStart');
    let startTime = storedStart ? parseInt(storedStart, 10) : null;

    if (!startTime) {
      startTime = Date.now();
      localStorage.setItem('discountStart', startTime.toString());
    }

    const updateTime = () => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      const remaining = 600 - elapsed;

      if (remaining <= 0) {
        clearInterval(intervalRef.current);
        setShowDiscountBar(false);
        localStorage.setItem('discountDismissed', 'true');
      } else {
        setTimeLeft(remaining);
        setShowDiscountBar(true);
      }
    };

    updateTime();
    intervalRef.current = setInterval(updateTime, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleCloseDiscount = () => {
    setShowDiscountBar(false);
    localStorage.setItem('discountDismissed', 'true');
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const best = products.filter((item) => item.bestseller);
      const slicedBest = best.slice(0, 10);
      setBestSellers(slicedBest);
      bestSellerIds = slicedBest.map(item => item._id); // Update exported array
      setTimeout(updateArrowVisibility, 100);
    }
  }, [products]);

  useEffect(() => {
    updateArrowVisibility();
    const handleResize = () => updateArrowVisibility();
    const handleScroll = () => updateArrowVisibility();

    const scrollContainer = scrollRef.current;
    scrollContainer?.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      scrollContainer?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateArrowVisibility = () => {
    const container = scrollRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  const loadMoreProducts = () => {
    setVisibleCount((prev) => Math.min(prev + 5, bestSellers.length));
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
      if (
        container.scrollLeft + container.clientWidth + 150 >= container.scrollWidth
      ) {
        loadMoreProducts();
      }
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
    <div className="my-10 px-4 relative">
      <div className="relative py-8 px-2">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair">
            <Title text1="BEST" text2="SERVICEPROVIDERS" />
          </h2>
          <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600 mt-2">
            Get the best Services at your nearest location
          </p>
        </div>

        <div className="absolute right-4 top-4">
          <Link
            to="/collection"
            className="bg-blue-100 text-blue-600 hover:underline text-sm font-medium px-4 py-2 rounded-md shadow-sm"
          >
            View All →
          </Link>
        </div>
      </div>

      <div
        className="relative group"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 pr-16"
          onScroll={updateArrowVisibility}
        >
          {bestSellers.length > 0 ? (
            bestSellers.slice(0, visibleCount).map((item, index) => (
              <div
                key={item._id || index}
                className="min-w-[200px] flex-shrink-0 transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  bestseller={item.bestseller}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No bestsellers available</p>
          )}
        </div>

        {showLeftArrow && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 rotate-180">
              <ArrowButton onClick={scrollLeft} />
            </div>
          </>
        )}

        {showRightArrow && (
          <>
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
              <ArrowButton onClick={scrollRight} />
            </div>
          </>
        )}
      </div>

      {showDiscountBar && (
        <div className="mt-6 bg-yellow-100 border border-yellow-400 text-yellow-900 px-6 py-4 rounded-md shadow-md flex items-center justify-center text-center animate-bounce">
          <span className="text-lg sm:text-xl font-extrabold">
             LIMITED TIME OFFER: <strong className="underline">20% OFF</strong> on all best services!
            &nbsp; <span className="font-mono font-black">{formatTime(timeLeft)}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default BestSeller;