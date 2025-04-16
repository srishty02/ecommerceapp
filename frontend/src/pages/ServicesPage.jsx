import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import InfiniteScroll from "react-infinite-scroll-component";

const ITEMS_PER_BATCH = 6;

const ServicesPage = () => {
  const { slug, providerId } = useParams();
  const { currency, addToCart } = useContext(ShopContext);

  const provider = products.find((p) => p._id === providerId);
  if (!provider) return <p className="text-center text-xl font-bold">Provider not found.</p>;

  const providerServices = products.filter(
    (service) => service._id === providerId || service.providerId === providerId
  );

  const [visibleServices, setVisibleServices] = useState(
    providerServices.slice(0, ITEMS_PER_BATCH)
  );
  const [hasMore, setHasMore] = useState(providerServices.length > ITEMS_PER_BATCH);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState({});
  const [reviews, setReviews] = useState([
    { serviceId: "1", text: "Great service! Very professional." },
    { serviceId: "1", text: "Highly recommend. Quick and reliable." },
    { serviceId: "2", text: "Good quality work but took longer than expected." },
    { serviceId: "3", text: "Amazing experience, would definitely use again!" },
    { serviceId: "2", text: "Not satisfied with the service, would not recommend." },
  ]);

  const fetchMoreData = () => {
    const next = visibleServices.length + ITEMS_PER_BATCH;
    const newSlice = providerServices.slice(0, next);
    setVisibleServices(newSlice);
    setHasMore(newSlice.length < providerServices.length);
  };

  const filteredServices = visibleServices.filter(
    (service) =>
      (service.name || service.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddReview = (e, serviceId) => {
    e.preventDefault();
    const reviewText = e.target.review.value;
    if (!reviewText.trim()) return;
    setReviews((prev) => [...prev, { serviceId, text: reviewText }]);
    e.target.review.value = "";
  };

  return (
    <div className="p-7 max-w-5xl mx-auto space-y-6">
      {filteredServices.length > 0 ? (
        <InfiniteScroll
          dataLength={filteredServices.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p className="text-center text-lg text-gray-500">Loading more services...</p>}
          endMessage={<p className="text-center text-lg text-gray-500">All services loaded.</p>}
        >
          <div className="space-y-10">
            {filteredServices.map((service) => (
              <div key={service._id} className="flex mb-8 space-x-6">
                {/* Image Section */}
                <div className="w-1/3 pr-8">
                  <img
                    src={Array.isArray(service.image) ? service.image[0] : service.image}
                    alt={service.name || service.title}
                    className="h-72 w-full object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Text Section */}
                <div className="w-2/3">
                  <h3 className="text-2xl font-bold mb-3">{service.name || service.title}</h3>


                  <button
                    className="mt-6 bg-gradient-to-r from-violet-500 to-indigo-700 text-white py-3 px-8 rounded-lg shadow-lg"

                    onClick={() => addToCart(service._id)}
                  >
                    Add Services
                  </button>



                  {/* Tabs */}
                  <div className="flex gap-6 mt-4 border-b-2">
                    <button
                      className={`py-3 px-5 ${
                        activeTab[service._id] !== "reviews" ? "border-b-4 border-violet-600 font-bold" : ""
                      }`}
                      onClick={() => setActiveTab({ ...activeTab, [service._id]: "description" })}
                    >
                      Description
                    </button>
                    <button
                      className={`py-3 px-6 ${
                        activeTab[service._id] === "reviews"
                          ? "border-b-4 border-violet-600 font-bold"
                          : ""
                      }`}
                      onClick={() => setActiveTab({ ...activeTab, [service._id]: "reviews" })}
                    >
                      Reviews
                    </button>
                  </div>

                  {activeTab[service._id] === "reviews" ? (
                    <div className="mt-4">
                      {reviews.filter((review) => review.serviceId === service._id).length > 0 ? (
                        reviews
                          .filter((review) => review.serviceId === service._id)
                          .map((review, idx) => (
                            <p key={idx} className="text-base text-gray-700 mb-2">
                              - {review.text}
                            </p>
                          ))
                      ) : (
                        <p className="text-base text-gray-500">No reviews yet.</p>
                      )}

                      <form onSubmit={(e) => handleAddReview(e, service._id)} className="mt-4">
                        <textarea
                          name="review"
                          placeholder="Add your review..."
                          className="w-full mt-2 p-3 border rounded-lg shadow-sm"
                        />
                        <button
  type="submit"
  className="mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-lg"
>
                          Submit Review
                        </button>
                      </form>
                    </div>
                  ) : (
                    <p className="mt-6 text-gray-600">{service.description}</p>
                  )}


                  <div className="mt-6 text-sm text-gray-600 space-y-1">
                    <p>✔ 100% Satisfying Services.</p>
                    <p>✔ Verifierd service providers </p>
                    <p>✔Get all services at your convenience</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <p className="text-gray-500 text-center text-lg">No services found for this provider.</p>
      )}
    </div>
  );
};

export default ServicesPage;
