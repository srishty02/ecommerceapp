import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const ProductItem = ({ id, image, name, rating, category, bestseller }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer block"
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-lg">
        {Array.isArray(image) && image.length > 0 ? (
          <img
            src={image[0]}
            alt={name}
            className="w-full h-40 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        ) : typeof image === 'string' ? (
          <img
            src={image}
            alt={name}
            className="w-full h-40 object-cover rounded-lg hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Text Section */}
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>

        {category && (
          <p className="text-sm text-blue-500 font-medium mt-1">{category}</p>
        )}

        {rating && (
          <div className="flex items-center gap-1 text-yellow-500 mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <AiFillStar
                key={i}
                className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">({rating})</span>
          </div>
        )}

        {bestseller && (
          <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
            Best Seller
          </span>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;

