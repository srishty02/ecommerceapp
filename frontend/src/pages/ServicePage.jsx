import React from "react";
import { Link, useParams } from "react-router-dom";
import { allServices } from "../assets/assets";
import { subcategorySlugMap } from "../data/subCategorySlugs";

// Utility to slugify service names
const slugify = str => str.toLowerCase().replace(/\s+/g, '-');

const ServicePage = () => {
  const { categorySlug, subCategorySlug } = useParams();
  const subcategoryName = subcategorySlugMap[subCategorySlug];

  const filteredServices = allServices
    .flatMap(cat => cat.subcategories || [])
    .filter(sub => {
      if (subCategorySlug) {
        return sub.slug === subCategorySlug || sub.name === subcategoryName;
      } else if (categorySlug) {
        return sub.categorySlug === categorySlug;
      }
      return false;
    })
    .flatMap(sub =>
      (sub.sections || []).flatMap(section =>
        section.services.map(service => ({
          name: service.name,
          icon: sub.icon || "🛠️",
        }))
      )
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        {subcategoryName || categorySlug?.replace(/-/g, " ")}
      </h1>

      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredServices.map((service, index) => (
            <Link
              key={index}
              to={`/services/${categorySlug}/${subCategorySlug}/${slugify(service.name)}`}
              className="border rounded-xl p-4 flex flex-col items-center justify-center shadow hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-2">{service.icon}</div>
              <div className="text-center font-medium text-sm">{service.name}</div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No services found.</p>
      )}
    </div>
  );
};

export default ServicePage;
