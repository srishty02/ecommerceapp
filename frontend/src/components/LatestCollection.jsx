import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import ArrowButton from './ArrowButton';
import { bestSellerIds } from './BestSeller'; // ✅ import bestseller IDs

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      const latest = products
        .filter(item => !bestSellerIds.includes(item._id)) // ✅ Exclude bestsellers
        .slice(0, 10);
      setLatestProducts(latest);
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
    setVisibleCount((prev) => Math.min(prev + 5, latestProducts.length));
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
        {/* Centered Title & Paragraph */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair">
            <Title text1="NEW" text2="SERVICEPROVIDERS" />
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Services at your doorstep, at the best price with perfection
          </p>
        </div>

        {/* View All Button on Top Right */}
        <div className="absolute right-4 top-8">
          <Link
            to="/collection"
            className="bg-blue-100 text-blue-600 hover:underline text-sm font-medium px-4 py-2 rounded-md shadow-sm"
          >
            View All →
          </Link>
        </div>
      </div>

      {/* Scrollable Product List with Arrows */}
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
          {latestProducts.length > 0 ? (
            latestProducts.slice(0, visibleCount).map((item, index) =>
              item.image && item.name && item.price ? (
                <div
                  key={item._id || index}
                  className="min-w-[200px] flex-shrink-0 transition-all duration-500 ease-in-out transform hover:scale-105"
                >
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    subcategory={item.subcategory}
                    
                    
                    bestseller={item.bestseller}
                  />
                </div>
              ) : null
            )
          ) : (
            <p className="text-center text-gray-500">
              No Services available Currently
            </p>
          )}
        </div>

        {/* Arrows */}
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
    </div>
  );
};

export default LatestCollection;