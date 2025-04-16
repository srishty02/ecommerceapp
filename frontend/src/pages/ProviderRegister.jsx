import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const categories = [
    {
      id: 1,
      name: "QUICK HOME REPAIRS",
      slug: "quick-home-repairs",
      image: assets.repairs,
      description: "Get fast, professional repairs for your home. Whether it's electrical issues, plumbing problems, or carpentry work, we have experienced professionals ready to fix it.",
      subcategories: [
        { 
          id: 201, 
          name: "Electrician", 
          slug: "electrician", 
          image: "electrician.jpg", 
          description: "Need electrical repairs or installations? Our certified electricians are ready to fix wiring, install fixtures, or troubleshoot electrical issues." 
        },
        { 
          id: 202, 
          name: "Plumber", 
          slug: "plumber", 
          image: "plumber.jpg", 
          description: "From leaky faucets to clogged drains, our expert plumbers can help with all your plumbing needs, ensuring everything is running smoothly." 
        },
        { 
          id: 203, 
          name: "Carpenter", 
          slug: "carpenter", 
          image: "carpenter.jpg", 
          description: "Our skilled carpenters offer furniture repairs, custom woodwork, door installations, and more to keep your home in top shape." 
        },
      ],
    },
    {
      id: 2,
      name: "CLEANING & PEST CONTROL",
      slug: "cleaning-pest-control",
      image: assets.cleanings,
      description: "Ensure a clean and pest-free environment in your home with our cleaning and pest control services. Our experts will sanitize and protect your home.",
      subcategories: [
        { 
          id: 204, 
          name: "Home Cleaning", 
          slug: "home-cleaning", 
          image: "home-cleaning.jpg", 
          description: "Our cleaning professionals will ensure your home is spotless. From deep cleaning to regular housekeeping, we have you covered." 
        },
        { 
          id: 205, 
          name: "Pest Control", 
          slug: "pest-control", 
          image: "pest-control.jpg", 
          description: "Get rid of pests with our effective pest control services. Whether it's rodents, insects, or termites, we offer safe and reliable solutions." 
        },
      ],
    },
    {
      id: 3,
      name: "APPLIANCE SERVICE & REPAIRS",
      slug: "appliance-service-repairs",
      image: assets.appliances,
      description: "Keep your appliances in good condition with our repair and maintenance services. We specialize in everything from ACs to washing machines.",
      subcategories: [
        { 
          id: 206, 
          name: "AC Service & Repair", 
          slug: "ac-service-repair", 
          image: "ac-service.jpg", 
          description: "Ensure your air conditioner works perfectly with our professional repair and maintenance services. We handle all types of ACs with expertise." 
        },
        { 
          id: 207, 
          name: "Washing Machine Repair", 
          slug: "washing-machine-repair", 
          image: "washing-machine.jpg", 
          description: "Our skilled technicians can repair washing machines of all brands, fixing issues like leaks, drum malfunctions, or electrical faults." 
        },
        { 
          id: 208, 
          name: "Refrigerator Repair", 
          slug: "refrigerator-repair", 
          image: "refrigerator.jpg", 
          description: "We offer expert refrigerator repair services for all brands. Whether it's cooling issues, gas refilling, or compressor problems, we've got it covered." 
        },
        { 
          id: 209, 
          name: "Water Purifier Repair", 
          slug: "water-purifier-repair", 
          image: "water-purifier.jpg", 
          description: "Ensure clean and safe drinking water with our purifier repair and servicing. We handle RO, UV, and other purifier systems efficiently." 
        },
      ],
    },
    {
      id: 4,
      name: "MOVERS & DRIVERS",
      slug: "movers-drivers",
      image: assets.moversdrivers,
      description: "Need help with moving? Our experienced drivers and movers offer efficient services to help you relocate, transport goods, and manage your logistics.",
      subcategories: [
        { 
          id: 210, 
          name: "Driver", 
          slug: "driver", 
          image: "drivers.jpg", 
          description: "Our professional drivers are available for rides, personal trips, or vehicle transportation, ensuring safe and comfortable journeys." 
        },
        { 
          id: 211, 
          name: "Movers & Packers", 
          slug: "movers-packers", 
          image: "movers-packers.jpg", 
          description: "Our movers and packers will handle your relocation with care. From packing fragile items to heavy lifting, we ensure a smooth move." 
        },
      ],
    },
    {
      id: 5,
      name: "HOME HELP & CARE",
      slug: "home-help-care",
      image: assets.homehelp,
      description: "Support your household with our home help and care services. Whether you need a maid, a cook, or a caretaker, we provide trusted assistance.",
      subcategories: [
        { 
          id: 212, 
          name: "Maid", 
          slug: "maid", 
          image: "maid.jpg", 
          description: "Our professional maids are ready to assist with cleaning, organizing, and daily chores to keep your home neat and tidy." 
        },
        { 
          id: 213, 
          name: "Cook", 
          slug: "cook", 
          image: "cook.jpg", 
          description: "Get home-cooked meals prepared by skilled cooks. From daily meals to special occasions, we offer customized cooking services." 
        },
        { 
          id: 214, 
          name: "Care Taker", 
          slug: "caretaker", 
          image: "caretaker.jpg", 
          description: "Our compassionate caretakers are available to assist with elderly care, sick patients, or family members who need extra attention and support." 
        },
      ],
    },
    {
      id: 6,
      name: "DECOR & EVENTS",
      slug: "decor-events",
      image: assets.decor,
      description: "Make your special events and home decor stand out with our expert decorators. From event planning to interior design, we create memorable experiences.",
      subcategories: [
        { 
          id: 215, 
          name: "Decorator", 
          slug: "decorator", 
          image: "decorator.jpg", 
          description: "Our decorators will transform your space for any occasion, from weddings to home makeovers, creating stunning environments that impress." 
        },
      ],
    },
  ];

  const allServices = {
    "electrician": ["Wiring & Cabling", "Light Installation",  "Switchboard Replacement", "Fan Repair"],
    "plumber": ["Leak Repair", "Tap Installation", "Toilet Repair", "Water Tank Cleaning" ],
    "carpenter": ["Furniture Assembly", "Door Repair",  "Custom Shelving", "Wood Polishing"],
   "home-cleaning":[  "1BHK Deep Cleaning","2BHK Deep Cleaning","3BHK Deep Cleaning", "4BHK/Villa Deep Cleaning",  "Independent House Cleaning",  "Kitchen Deep Cleaning", "Bathroom Deep Cleaning",  "Living Room Cleaning", "Balcony Cleaning",],
  "pest-control":[  "1BHK General Pest Control",  "2–3BHK Pest Control", "4BHK/Villa Pest Control","Office/Shop Pest Control", "Cockroach Control", "Ant Control", "Bed Bug Treatment", "Termite Control",  "Rodent/Rat Control",   "Mosquito Control", "Lizard Control", "Bee/Wasp Hive Removal", "Fumigation Service", ],
  "ac-service-repair":["AC General Service", "AC Gas Refilling","AC Installation","AC Uninstallation"  ],
  "washing-machine-repair":[ "Top Load Repair", "Front Load Repair","Dryer Repair",  ],
  "refrigerator-repair":[  "Compressor Repair", "Gas Refilling",  "Door Seal Replacement"  ],
  "water-purifier-repair":[ "RO Filter Replacement","UV/UF Service",  "Leakage Fix" ],
  "driver":[  "Hourly Driver",  "Outstation Driver", "Permanent Driver"  ],
  "movers-packers":["Home Shifting", "Office Shifting", "Local Transport", ],
  "maid":[  "Daily Maid","Part-Time Maid", "Live-in Maid"  ],
  "cook": ["North Indian Meals","South Indian Meals", "Occasional Party Cooking"],
  "caretaker": ["Elderly Care",  "Patient & Handicap Care", "Child Care", "Pet Care"],
   "decorator":[ "Birthday Decoration","Wedding Decor","Festive Home Decor"] ,
  };
  
Modal.setAppElement('#root');

const ProviderRegister = () => {
    const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedService, setSelectedService] = useState(''); // Store selected service
  const [otherServices, setOtherServices] = useState([]); // Store other services provider offers
  const [modalOpen, setModalOpen] = useState(false);
const [confirmationOpen, setConfirmationOpen] = useState(false);

  const [resumePreview, setResumePreview] = useState(null);

  const servicesForSelectedSubcategory = allServices[selectedSubcategory] || [];

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setModalOpen(true);
  };

  const confirmSubmit = async () => {
    const data = new FormData();
    data.append('name', watch('name'));
    data.append('email', watch('email'));
    data.append('phone', watch('phone'));
    data.append('address', watch('address'));
    data.append('category', watch('category'));
    data.append('subcategory', watch('subcategory'));
    data.append('service', selectedService); // Add selected service
    data.append('other_services', otherServices.join(',')); // Add other selected services
    data.append('resume', watch('resume')[0]);

    try {
      const response = await fetch('/api/provider-register', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        toast.success('Registration successful!');
        reset();
        setResumePreview(null);
      } else {
        toast.error('Registration failed.');
      }
    } catch (err) {
      toast.error('Error submitting form.');
    } finally {
      setModalOpen(false);
    }
  };

  
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedSubcategory(''); // Reset subcategory when category changes
    setSelectedService(''); // Reset service when category changes
    setOtherServices([]); // Reset other services
  };

  const handleSubcategoryChange = (e) => {
    const subcategory = e.target.value;
    setSelectedSubcategory(subcategory);
    setSelectedService(''); // Reset service when subcategory changes
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleOtherServiceChange = (e) => {
    const input = e.target.value;
    const servicesArray = input.split(',').map((service) => service.trim()).filter(Boolean);
    setOtherServices(servicesArray); // Update state with the array of services
  };
  

  const handleFileChange = (e) => {
    setResumePreview(e.target.files[0]?.name);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow bg-gradient-to-l from-violet-700 to-blue-500 text-gray-800">
      <h2 className="text-xl font-bold mb-4  text-white">Register as Service Provider</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('name', { required: true })} className="input" placeholder="Full Name" />
        {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}

        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
        {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}

        <input type="tel" {...register('phone', { required: true })} className="input" placeholder="Phone Number" />
        {errors.phone && <p className="text-red-500 text-sm">Phone is required.</p>}

        <textarea {...register('address', { required: true })} className="input" placeholder="Address" />
        {errors.address && <p className="text-red-500 text-sm">Address is required.</p>}

        <select
  className="block w-full border p-2 text-black"
  {...register("category", { required: true })}
  onChange={(e) => handleCategoryChange(e)}
>
  <option value="">-- Select Category --</option>
  {categories.map((cat) => (
    <option key={cat.id} value={cat.slug}>
      {cat.name}
    </option>
  ))}
</select>


        <select
  className="block w-full border p-2 mt-4 text-black"
  {...register("subcategory", { required: true })}
  onChange={(e) => {
    setSelectedSubcategory(e.target.value);
    setSelectedService('');
  }}
>
  <option value="">-- Select Subcategory --</option>
  {categories
    .find((cat) => cat.slug === selectedCategory)
    ?.subcategories.map((subcat) => (
      <option key={subcat.id} value={subcat.slug}>
        {subcat.name}
      </option>
    ))}
</select>


{servicesForSelectedSubcategory.length > 0 && (
  <div className="mt-4 text-black">
    <label>Select Service:</label>
    <select
      className="block w-full border p-2 text-black"
      value={selectedService}
      onChange={(e) => setSelectedService(e.target.value)}
    >
      <option value="">-- Select a Service --</option>
      {servicesForSelectedSubcategory.map((service, index) => (
        <option key={index} value={service}>
          {service}
        </option>
      ))}
    </select>
  </div>
)}






        <div className="space-y-2">
  <label className="block text-sm  text-black">Other Services You Offer</label>
  <textarea
    className="input p-2 border border-gray-300 rounded-md w-full"
    value={otherServices.join(', ')} // Show selected services
    onChange={handleOtherServiceChange}
    placeholder="Enter the services you offer, separated by commas"
    rows={4} // Adjust rows based on desired height
  />
</div>

        <input 
          type="file" 
          {...register('resume', { required: true })} 
          className="input" 
          onChange={handleFileChange} 
        />
        {resumePreview && <p className="text-sm text-black">Resume: {resumePreview}</p>}
        {errors.resume && <p className="text-red-500 text-sm">Resume is required.</p>}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <Toaster />

      {/* First Modal - Confirmation Prompt */}
      <Modal
  isOpen={modalOpen}
  onRequestClose={() => setModalOpen(false)}
  className="modal bg-gradient-to-br from-pink-500 via-yellow-400 to-purple-600 text-white p-6 rounded-xl shadow-2xl max-w-md mx-auto mt-20"
>

  <h3 className="modal-title">Confirmation</h3>
  <p>Your registration has been submitted. Would you like to confirm?</p>
  <div className="modal-actions">
    <button
      onClick={() => {
        setModalOpen(false);           // Close the first modal
        setConfirmationOpen(true);     // Open the second modal
      }}
      className="btn btn-confirm bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl shadow-lg"
    >
      Confirm
    </button>
    <button onClick={() => setModalOpen(false)} className="btn btn-cancel">Cancel</button>
  </div>
</Modal>

{/* Second Modal - After Confirmation */}
<Modal isOpen={confirmationOpen} onRequestClose={() => setConfirmationOpen(false)} className="modal ">
  <h3 className="modal-title">Registration Confirmed</h3>
  <p>We will let you know about any new bookings for you🎊❤️. Wishing you a wonderful journey ahead.🥰💝🥳</p>
  <div className="modal-actions">
  <button
  onClick={() => {
    setConfirmationOpen(false);
    navigate('/'); // Redirect to home page
  }}
  className="btn btn-ok bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl shadow-lg"
>
  Okay
</button>

  </div>
</Modal>

    </div>
  );
};

export default ProviderRegister;
