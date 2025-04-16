import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ArrowButton from "./ArrowButton";

const HorizontalScrollRow = ({ title, items }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const updateArrowVisibility = () => {
    const container = scrollRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  useEffect(() => {
    updateArrowVisibility();
    const container = scrollRef.current;

    const handleScroll = () => updateArrowVisibility();
    container?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateArrowVisibility);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateArrowVisibility);
    };
  }, []);

  const scrollLeft = (e) => {
    e.stopPropagation();
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (e) => {
    e.stopPropagation();
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative px-2 py-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 pr-10"
        >
          {items.map((service) => (
            <motion.div
              key={service.id || service._id}
              whileHover={{ scale: 1.05 }}
              className="min-w-[200px] flex-shrink-0"
            >
              {/* ProductCard must not include any navigation logic */}
              <ProductCard product={service} />
            </motion.div>
          ))}
        </div>

        {/* Left Arrow */}
        {showLeftArrow && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 rotate-180"
              onClick={scrollLeft}
            >
              <ArrowButton />
            </div>
          </>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <>
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20"
              onClick={scrollRight}
            >
              <ArrowButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HorizontalScrollRow;
