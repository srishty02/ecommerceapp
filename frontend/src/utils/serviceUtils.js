import { allServices } from "../assets/assets"; // import this wherever you store it

// Flatten all services for a given providerId
export const extractServicesByProvider = (providerId) => {
  let matchedServices = [];

  if (allServices && allServices.subcategories) {
    allServices.subcategories.forEach((subcategory) => {
      if (subcategory.sections) {
        subcategory.sections.forEach((section) => {
          if (section.services) {
            section.services.forEach((service) => {
              const isProvided = service.providers.some(p => p.providerId === providerId);
              if (isProvided) {
                matchedServices.push({
                  ...service,
                  name: service.name,
                  description: service.description,
                  category: allServices.category,
                  subcategory: subcategory.name,
                  section: section.heading,
                  _id: `${providerId}-${service.name.replace(/\s+/g, "-").toLowerCase()}`, // unique
                  price: 100, // dummy price or derive dynamically
                  image: ["/placeholder.jpg"], // you can replace with real image
                });
              }
            });
          }
        });
      }
    });
  }

  return matchedServices;
};


