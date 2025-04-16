import { assets } from '../assets/assets'; // Assuming the file where images are stored

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

export default categories;
