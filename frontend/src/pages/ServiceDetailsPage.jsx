import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allServices, products } from "../assets/assets";

const getServiceDetails = (categorySlug, subcategorySlug, serviceName) => {
  const category = allServices.find(cat => cat.categorySlug === categorySlug);
  if (!category) return null;

  const subcategory = category.subcategories.find(sub => sub.slug === subcategorySlug);
  if (!subcategory) return null;

  const service = subcategory.sections.flatMap(section => section.services)
    .find(s => s.name.toLowerCase() === serviceName.toLowerCase());

  if (!service) return null;

  let providers = [];

  if (service.providers && service.providers.length > 0) {
    providers = service.providers
      .map(provider => products.find(p => p._id === provider.providerId))
      .filter(Boolean);
  } else {
    providers = products.filter(
      (product) =>
        product.category?.toLowerCase() === category.name?.toLowerCase() &&
        product.subCategory?.toLowerCase() === subcategory.name?.toLowerCase()
    );
  }

  return {
    serviceName: service.name,
    description: service.description,
    providers
  };
};

const ServiceDetailsPage = () => {
  const { categorySlug, subcategorySlug, serviceName } = useParams();
  const decodedServiceName = decodeURIComponent(serviceName).replace(/-/g, " ");

  const serviceDetails = getServiceDetails(categorySlug, subcategorySlug, decodedServiceName);
  const [selectedLocation, setSelectedLocation] = useState("All");

  if (!serviceDetails) {
    return <p className="p-6 text-red-500">Service not found.</p>;
  }

  const uniqueLocations = [
    "All",
    ...new Set(products.map(p => p.Location || "Unknown"))
  ];
  

  const filteredProviders =
    selectedLocation === "All"
      ? serviceDetails.providers
      : serviceDetails.providers.filter(p => p.Location === selectedLocation);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{serviceDetails.serviceName}</h1>
      <p className="mb-4 text-gray-600">{serviceDetails.description}</p>

      <div className="mb-6 max-w-sm">
  <label className="block mb-2 font-medium text-violet-700">
    Filter by Location:
  </label>
  <select
    className="w-full border border-violet-500 text-violet-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500"
    value={selectedLocation}
    onChange={(e) => setSelectedLocation(e.target.value)}
  >
    {uniqueLocations.map((location, index) => (
      <option key={index} value={location}>
        {location}
      </option>
    ))}
  </select>
</div>


      {filteredProviders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProviders.map((provider) => (
            <Link
              key={provider._id}
              to={`/provider/${provider._id}`}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition-all block"
            >
              <img
                src={provider.image?.[0] || "/default.jpg"}
                alt={provider.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-semibold">{provider.name}</h2>
              <p className="text-sm text-gray-600">{provider.subCategory}</p>
              <p className="mt-2 text-sm">{provider.description}</p>
              
              {provider.Location && (
                <p className="text-xs text-gray-500">📍 {provider.Location}</p>
              )}
              {provider.contact && (
                <p className="text-xs text-gray-500">📞 {provider.contact}</p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p>No providers found for this location.</p>
      )}
    </div>
  );
};

export default ServiceDetailsPage;