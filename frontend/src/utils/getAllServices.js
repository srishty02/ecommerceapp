// src/utils/getAllServices.js
import { allServices } from "../assets/assets";

export const extractAllServices = () => {
  const services = [];

  allServices.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.sections.forEach((section) => {
        section.services.forEach((service) => {
          services.push({
            ...service,
            category: category.category,
            categorySlug: category.categorySlug,
            subcategory: subcategory.name,
            subcategorySlug: subcategory.slug,
            heading: section.heading,
          });
        });
      });
    });
  });

  return services;
};
