
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const navigate = useNavigate();
  const {
    name,
    title,
    description,
    image,
    price = 0,
    discount = 0,
    isPopular,
    rating,
    duration,
    slug,
  } = product;

  const finalSlug = slug || (name || title || "untitled").toLowerCase().replace(/\s+/g, "-");
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <motion.div
      className="relative bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition w-60 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/services/category/${finalSlug}`)}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Popular
        </div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {discount}% OFF
        </div>
      )}

      {/* Image */}
      <img
        src={image || "/placeholder.jpg"}
        alt={name || title || "Service Image"}
        className="rounded-lg mb-3 w-full h-36 object-cover"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1">
        {name || title || "Untitled Service"}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 line-clamp-2">
        {description || "No description available."}
      </p>

      {/* Rating */}
      {rating !== undefined && rating !== null && (
        <div className="flex items-center gap-1 text-yellow-500 mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar
              key={i}
              className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({rating})</span>
        </div>
      )}

      {/* Duration */}
      {duration && (
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <BiTime className="mr-1" /> {duration}
        </div>
      )}

      {/* Pricing */}
      <div className="mt-2">
        {discount > 0 ? (
          <div className="text-sm font-semibold text-green-600">
            ₹{discountedPrice.toFixed(0)}
            <span className="line-through text-gray-400 text-xs ml-2">₹{price}</span>
          </div>
        ) : (
          <p className="text-sm font-bold text-green-600">₹{price}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;