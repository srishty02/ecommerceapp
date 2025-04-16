import React, { useContext } from "react"; 
import { ProductContext } from "../context/ProductContext";
import { products as fallbackProducts } from "../assets/assets";

// Helper to group products by category
const groupByCategory = (items) => {
  const grouped = {};
  items.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = {
        category: item.category,
        slug: item.categorySlug,
        services: [],
      };
    }
    grouped[item.category].services.push(item);
  });

  return Object.values(grouped);
};

const CollectionComponent = ({ onSectionClick, openPopup, categories }) => {
  const { products = [] } = useContext(ProductContext) || {};
  const productList = products.length > 0 ? products : fallbackProducts;

  const serviceSections = groupByCategory(productList);

  return (
    <div className="space-y-16 mt-10">
      {categories.map((category, index) => {
        const serviceSection = serviceSections.find(
          (section) => section.category === category.name
        );

        return (
          <div
            key={index}
            onClick={() => {
              if (category.subcategories?.length > 0) {
                openPopup(category); // Open the popup for subcategories
              } else {
                onSectionClick(category.slug); // Navigate to the main category page
              }
            }}
            className="cursor-pointer mb-8"
          >
            {/* Category layout using flex */}
            <div className="p-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white shadow-xl rounded-2xl flex items-center gap-8 hover:scale-105 transition-transform duration-3">
              {/* Category image on the left */}
              <div className="flex-shrink-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>

              {/* Category name and description on the right */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-black-600">{category.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CollectionComponent;
