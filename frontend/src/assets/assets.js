import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'
import p_img24 from './p_img24.png'
import p_img25 from './p_img25.png'
import p_img26 from './p_img26.png'
import p_img27 from './p_img27.png'
import p_img28 from './p_img28.png'
import p_img29 from './p_img29.png'
import p_img30 from './p_img30.png'
import p_img31 from './p_img31.png'
import p_img32 from './p_img32.png'
import p_img33 from './p_img33.png'
import p_img34 from './p_img34.png'
import p_img35 from './p_img35.png'
import p_img36 from './p_img36.png'
import p_img37 from './p_img37.png'
import p_img38 from './p_img38.png'
import p_img39 from './p_img39.png'
import p_img40 from './p_img40.png'
import p_img41 from './p_img41.png'
import p_img42 from './p_img42.png'
import p_img43 from './p_img43.png'
import p_img44 from './p_img44.png'
import p_img45 from './p_img45.png'
import p_img46 from './p_img46.png'
import p_img47 from './p_img47.png'
import p_img48 from './p_img48.png'
import p_img49 from './p_img49.png'
import p_img50 from './p_img50.png'
import p_img51 from './p_img51.png'
import p_img52 from './p_img52.png'


import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png';
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

import cleaning from './cleaning.mp4'
import repair from './repair.mp4'
import moving from './moving.mp4'

import appliances from './appliances.jpg'
import cleanings  from './cleanings.jpg'
import decor from './decor.jpg'
import  moversdrivers from './moversdrivers.jpg'
import  repairs from './repairs.png'
import homehelp from './homehelp.jpg'

import { subCategorySlugs } from '../data//subCategorySlugs';

import { extractAllServices } from "../utils/getAllServices";




export const assets = {
    appliances,
    cleanings,
    decor,
    moversdrivers,
    repairs,
    homehelp,
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    cleaning,
    repair,
    moving
}
export const allServices = [
  {
    category: "QUICK HOME REPAIRS",
    categorySlug: "quick-home-repairs",
    subcategories: [
      {
        name: "Electrician",
        slug: "electrician",
        icon: "🔌",
        sections: [
          {
            heading: "Electrician Services",
            services: [
              { name: "Fan Repair", description: "Fix ceiling or wall fans",
                providers: [
                  { providerId:"aaaah" , name: "Prathamesh"},
                  { providerId: "aaaak", name:"Manoj Kumar" },
                  { providerId: "aaaaq", name: "Shrikant"},
                  { providerId: "aaaar", name:"Hrishikesh" },
                  { providerId: "aaaau", name: "Swapnil"},
                  { providerId: "aaaav", name:"Pratim" }
                ]
               },
              { name: "Switchboard Replacement", description: "Install or replace boards",
                providers: [
                  { providerId:"aaabk" , name: "Omkar"},
                  { providerId:"aaabp",  name:"Nilesh" },
                  { providerId:"aaabq" , name: "Amey"},
                  { providerId: "aaaaq", name: "Shrikant"},
                  { providerId: "aaaar", name:"Hrishikesh" },
                  { providerId: "aaaau", name: "Swapnil"},
                  { providerId: "aaaav", name:"Pratim" }
                ]
              },
              { name: "Light Installation", description: "LED, bulbs, tubes & holders" ,
                providers: [
                  { providerId:"aaabk" , name: "Omkar"},
                  { providerId:"aaabp",  name:"Nilesh" },
                  { providerId:"aaabq" , name: "Amey"},
                  { providerId: "aaaaq", name: "Shrikant"},
                  { providerId:"aaaah" , name: "Prathamesh"},
                  { providerId: "aaaar", name:"Hrishikesh" },
                  { providerId: "aaaau", name: "Swapnil"},
                  { providerId: "aaaav", name:"Pratim" }
                ]
              },
              { name: "Wiring & Cabling", description: "Internal wiring and LAN setup",
                providers: [
                  { providerId:"aaabk" , name: "Omkar"},
                  { providerId:"aaabp",  name:"Nilesh" },
                  { providerId:"aaabq" , name: "Amey"},
                  { providerId: "aaaar", name:"Hrishikesh" },
                  { providerId: "aaaau", name: "Swapnil"},
                  { providerId: "aaaav", name:"Pratim" }
                ]
               }
            ]
          }
        ]
      },
      {
        name: "Plumber",
        slug: "plumber",
        icon: "🚰",
        sections: [
          {
            heading: "Plumbing Services",
            services: [
              { name: "Leak Repair", description: "Fix leaks in pipes and taps",
                providers:[
                  { providerId:"aaabd" , name: "John" },
                  { providerId:"aaabj" , name: "Saif" },
                  { providerId:"aaabn" , name: "Tejinder" },
                  { providerId:"aaabs" , name: "Manis" },
                ]
             },
              { name: "Tap Installation", description: "Replace or install new taps",
                providers:[
                  { providerId:"aaabb" , name: "Anirudh" },
                  { providerId:"aaabj" , name: "Saif" },
                  { providerId:"aaabn" , name: "Tejinder" },
                  { providerId:"aaabs" , name: "Manis" },
                ]
               },
              { name: "Toilet Repair", description: "Unclogging, flushing issues" ,
                providers:[
                  { providerId:"aaabd" , name: "John" },
                  { providerId:"aaabj" , name: "Saif" },
                  { providerId:"aaabn" , name: "Tejinder" }
                ]
              },
              { name: "Water Tank Cleaning", description: "Clean underground or rooftop tanks",
                providers:[
                  { providerId:"aaabd" , name: "John" },
                  { providerId:"aaabj" , name: "Saif" },
                  { providerId:"aaabn" , name: "Tejinder" },
                  { providerId:"aaabs" , name: "Manis" },
                  { providerId:"aaabb" , name: "Anirudh"  }
                ]
               }
            ]
          }
        ]
      },
      {
        name: "Carpenter",
        slug: "carpenter",
        icon: "🪚",
        sections: [
          {
            heading: "Carpentry Services",
            services: [
              { name: "Door Repair", description: "Fix or replace door hinges & handles" ,
                providers:[
                  { providerId:"aaaaf" , name: "Faizan"},
                  { providerId:"aaaat" , name: "Samuel"}
                ]
              },
              { name: "Furniture Assembly", description: "Assemble beds, tables, wardrobes",
                providers:[
                  { providerId:"aaabg" , name: "Salman"},
                  { providerId:"aaabh" , name: "Reuben"},
                  { providerId:"aaaat" , name: "Samuel"}
                ]
               },
              { name: "Wood Polishing", description: "Polish wood surfaces & furniture" ,
                providers:[
                  { providerId:"aaaaf" , name: "Faizan"},
                  { providerId:"aaaat" , name: "Samuel"},
                  { providerId:"aaabg" , name: "Salman"},
                  { providerId:"aaabh" , name: "Reuben"}
                ]
              },
              { name: "Custom Shelving", description: "Build and install wall shelves",
                providers:[
                  { providerId:"aaaaf" , name: "Faizan"},

                  { providerId:"aaabu" , name: "Ritwik"},
                  { providerId:"aaabg" , name: "Salman"},
                  { providerId:"aaabh" , name: "Reuben"},
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "CLEANING & PEST CONTROL",
    categorySlug: "cleaning-pest-control",
    subcategories: [
      {
        name: "Home Cleaning Services",
        slug: "home-cleaning",
        icon: "🧹",
        sections: [
          {
            heading: "Full Home Cleaning (Based on Size)",
            services: [
              { name: "1BHK Deep Cleaning", description: "Full cleaning incl. all rooms", idealFor: "Small flats",
                providers:
                [
                  { providerId: "aaadd", name: "Arindamya" },
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadf", name: "Indrani" },
                  { providerId: "aaadh", name: "Shri" },
                  { providerId: "aaadi" ,name: "Ameya"}
                ]
               },
              { name: "2BHK Deep Cleaning", description: "Comprehensive cleaning of home", idealFor: "Medium flats" ,
                providers:
                [
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadf", name: "Indrani" },
                  { providerId: "aaadh", name: "Shri" }
                ]
              },
              { name: "3BHK Deep Cleaning", description: "Includes all rooms + extras", idealFor: "Large homes",
                providers:
                [
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadf", name: "Indrani" },
                  { providerId: "aaadh", name: "Shri" },
                  { providerId: "aaadi" ,name: "Ameya"}
                ]
               },
              { name: "4BHK or Villa Deep Cleaning", description: "Extra staff & hours included", idealFor: "Villas" ,
                providers:
                [
                  { providerId: "aaadd", name: "Arindamya" },
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadf", name: "Indrani" }
                ]
              },
              { name: "Independent House Cleaning", description: "Custom quote for full house", idealFor: "Standalone",
                providers:
                [
                  { providerId: "aaadd", name: "Arindamya" },
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadh", name: "Shri" },
                  { providerId: "aaadi" ,name: "Ameya"}
                ]
               }
            ]
          },
          {
            heading: "Room-Specific Cleaning",
            services: [
              { name: "Kitchen Deep Cleaning", description: "Chimney, counters, appliances" ,
                providers:
                [
                  { providerId: "aaadd", name: "Arindamya" },
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadh", name: "Shri" },
                  { providerId: "aaadi" ,name: "Ameya"}
                ]
              },
              { name: "Bathroom Deep Cleaning", description: "Tiles, fittings, mirrors, floor" ,
                providers:
                [
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadf", name: "Indrani" },
                  { providerId: "aaadh", name: "Shri" },
                  { providerId: "aaadi" ,name: "Ameya"}
                ]
              },
              { name: "Living Room Cleaning", description: "Furniture, shelves, electronics" ,
                providers:
                [
                  { providerId: "aaadd", name: "Arindamya" },
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadh", name: "Shri" },
                  { providerId: "aaadi" ,name: "Ameya"}
                ]
              },
              { name: "Balcony Cleaning", description: "Floor, railings, cobweb removal" ,
                providers:
                [
                  { providerId: "aaadd", name: "Arindamya" },
                  { providerId: "aaade" ,name: "Sanya"},
                  { providerId: "aaadf", name: "Indrani" },
                  { providerId: "aaadh", name: "Shri" },
                  { providerId: "aaadi" ,name: "Ameya"}
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Pest Control Services",
        slug: "pest-control",
        icon: "🐜",
        sections: [
          {
            heading: "General Pest Control (By Size)",
            services: [
              { name: "1BHK General Pest Control", description: "Basic all-in-one pest treatment" ,
                providers:
                [
                  { providerId: "aaaga", name: "Hiren" },
                  { providerId: "aaagb" ,name: "Jignesh"},
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" },
                  { providerId: "aaagf" ,name: "Moumit"},
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"},
                  { providerId: "aaagh" ,name: "Pratim"}
                ]
              },
              { name: "2–3BHK Pest Control", description: "Extended coverage for more rooms" ,
                providers:
                [
                  { providerId: "aaaga", name: "Hiren" },
                  { providerId: "aaagb" ,name: "Jignesh"},
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" }
                ]
              },
              { name: "4BHK or Villa Pest Control", description: "Premium multi-zone treatment" ,
                providers:
                [
                  { providerId: "aaaga", name: "Hiren" },
                  { providerId: "aaagb" ,name: "Jignesh"},
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" },
                  { providerId: "aaagh" ,name: "Pratim"}
                ]
              },
              { name: "Office or Shop Pest Control", description: "For commercial spaces" ,
                providers:
                [
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" },
                  { providerId: "aaagf" ,name: "Moumit"},
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"}
                ]
              }
            ]
          },
          {
            heading: "Pest-Specific Treatments",
            columns: ["Service Name", "Target Pests", "Description"],
            services: [
              { name: "Cockroach Control", target: "Cockroaches", description: "Gel-based + spray combo" ,
                providers:
                [
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" },
                  { providerId: "aaagf" ,name: "Moumit"},
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"}
                ]
              },
              { name: "Ant Control", target: "Ants", description: "Wall + floor perimeter treatments" ,
                providers:
                [
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" },
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"}
                ]
              },
              { name: "Bed Bug Treatment", target: "Bed Bugs", description: "2 sessions with mattress treatment"  ,
                providers:
                [
                  { providerId: "aaagb" ,name: "Jignesh"},
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" },
                  { providerId: "aaagh" ,name: "Pratim"}
                ]
             },
              { name: "Termite Control", target: "Termites", description: "Pre/Post construction drilling + spray" ,
                providers:
                [
                  { providerId: "aaaga", name: "Hiren" },
                  { providerId: "aaagb" ,name: "Jignesh"},
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" },
                  { providerId: "aaagf" ,name: "Moumit"},
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"},
                  { providerId: "aaagh" ,name: "Pratim"}
                ]
              },
              { name: "Rodent & Rat Control", target: "Rats/Mice", description: "Bait stations and traps" ,
                providers:
                [
                  { providerId: "aaaga", name: "Hiren" },
                  { providerId: "aaagb" ,name: "Jignesh"},
                  { providerId: "aaagc", name: "Rajesh" },
                  { providerId: "aaagd", name: "Maulik" }
                ]
              },
              { name: "Mosquito Control", target: "Mosquitoes", description: "Fogging + larvicidal treatment"  ,
                providers:
                [
                  { providerId: "aaagf" ,name: "Moumit"},
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"},
                  { providerId: "aaagh" ,name: "Pratim"}
                ]
             },
              { name: "Lizard Control", target: "Lizards", description: "Herbal spray + habitat control"  ,
                providers:
                [
                  { providerId: "aaagf" ,name: "Moumit"},
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"},
                  { providerId: "aaagh" ,name: "Pratim"},
                  { providerId: "aaagd", name: "Maulik" }
                ]
             },
              { name: "Bee & Wasp Hive Removal", target: "Bees/Wasps", description: "Safe removal by experts" ,
                providers:
                [
                  { providerId: "aaagg" ,name: "Rim"},
                  { providerId: "aaagh" ,name: "Pratim"},
                  { providerId: "aaagd", name: "Maulik" }
                ]
              },
              { name: "Fumigation Service", target: "Multiple pests", description: "Entire area fumigation for infestation" ,
                providers:
                [
                  { providerId: "aaagf" ,name: "Moumit"},
                  { providerId: "aaage", name: "Ipsit" },
                  { providerId: "aaagg" ,name: "Rim"},
                  { providerId: "aaagh" ,name: "Pratim"}
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "APPLIANCE SERVICE & REPAIRS",
    categorySlug: "appliance-service-repairs",
    subcategories: [
      {
        name: "AC Service & Repair",
        slug: "ac-service-repair",
        icon: "❄️",
        sections: [
          {
            heading: "AC Services",
            services: [
              { name: "AC General Service", description: "Cleaning & basic maintenance" ,
                providers:
                [
                  { providerId: "aaacv", name: "Aarav" },
                  { providerId: "aaacw" ,name: "Kunal" }
                ]
              },
              { name: "AC Gas Refilling", description: "Refill R22, R32, R410 gases" ,
                providers:
                [
                  { providerId: "aaacx", name: "Siddharth" },
                  { providerId: "aaacy" ,name:  "Manish" }
                ]
              },
              { name: "AC Installation", description: "Wall-mount and window installation"  ,
                providers:
                [
                  { providerId: "aaacz", name: "Varun" },
                  { providerId: "aaada" ,name: "Abhishek" }
                ]
             },
              { name: "AC Uninstallation", description: "Disassembling AC from wall/window" ,
                providers:
                [
                  { providerId: "aaadb", name: "Shubham" },
                  { providerId: "aaadc" ,name: "Tarun" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Washing Machine Repair",
        slug: "washing-machine-repair",
        icon: "🧺",
        sections: [
          {
            heading: "Washing Machine Services",
            services: [
              { name: "Top Load Repair", description: "Motor, panel, drum repair"  ,
                providers:
                [
                 { providerId: "aaadb", name: "Shubham" },
                  { providerId: "aaadc" ,name: "Tarun" },
                  { providerId: "aaacz", name: "Varun" },
                  { providerId: "aaada" ,name: "Abhishek" }
                ]
             },
              { name: "Front Load Repair", description: "Water leakage, error codes" ,
                providers:
                [
                  { providerId: "aaacz", name: "Varun" },
                  { providerId: "aaada" ,name: "Abhishek" }
                ]
              },
              { name: "Dryer Repair", description: "Not spinning or drying"  ,
                providers:
                [
                  { providerId: "aaacx", name: "Siddharth" },
                  { providerId: "aaacy" ,name:  "Manish" } ,
                  { providerId: "aaacv", name: "Aarav" },
                  { providerId: "aaacw" ,name: "Kunal" }               ]
             }
            ]
          }
        ]
      },
      {
        name: "Refrigerator Repair",
        slug: "refrigerator-repair",
        icon: "🧊",
        sections: [
          {
            heading: "Refrigerator Services",
            services: [
              { name: "Compressor Repair", description: "Cooling issues or compressor fault" ,
                providers:
                [
                  { providerId: "aaacx", name: "Siddharth" },
                  { providerId: "aaacy" ,name:  "Manish" },
                  { providerId: "aaacz", name: "Varun" },
                  { providerId: "aaada" ,name: "Abhishek" }
                ]
              },
              { name: "Gas Refilling", description: "For non-cooling issues"  ,
                providers:
                [
                  { providerId: "aaacz", name: "Varun" },
                  { providerId: "aaada" ,name: "Abhishek" }
                ]
             },
              { name: "Door Seal Replacement", description: "Fix loose or broken seals"  ,
                providers:
                [
                  { providerId: "aaadb", name: "Shubham" },
                  { providerId: "aaadc" ,name: "Tarun" },
                  { providerId: "aaacv", name: "Aarav" },
                  { providerId: "aaacw" ,name: "Kunal" }
                ]
             }
            ]
          }
        ]
      },
      {
        name: "Water Purifier Repair",
        slug: "water-purifier-repair",
        icon: "🚿",
        sections: [
          {
            heading: "Water Purifier Services",
            services: [
              { name: "RO Filter Replacement", description: "Replace worn-out filters"  ,
                providers:
                [
                  { providerId: "aaadb", name: "Shubham" },
                  { providerId: "aaadc" ,name: "Tarun" },
                  { providerId: "aaacv", name: "Aarav" },
                  { providerId: "aaacw" ,name: "Kunal" }
            ]
          },
              { name: "UV/UF Service", description: "Check lamp and flow system"  ,
                providers:
                [
                  { providerId: "aaacx", name: "Siddharth" },
                  { providerId: "aaacy" ,name:  "Manish" },
                  { providerId: "aaacz", name: "Varun" },
                  { providerId: "aaada" ,name: "Abhishek" }
            ]
           },
              { name: "Leakage Fix", description: "Fix joints and pipe leaks" ,
                providers:
                [
                  { providerId: "aaadc" ,name: "Tarun" },
                  { providerId: "aaacv", name: "Aarav" },
                  { providerId: "aaacz", name: "Varun" },
                  { providerId: "aaada" ,name: "Abhishek" }
            ]
           }
            ]
          }
        ]
      }
    ]
  },

  {
    category: "MOVERS & DRIVERS",
    categorySlug: "movers-drivers",
    subcategories: [
      {
        name: "Driver",
        slug: "driver",
        icon: "🚗",
        sections: [
          {
            heading: "Driver Services",
            services: [
              { name: "Hourly Driver", description: "Hire drivers on hourly basis"  ,
                providers:
                [{ providerId:"aaaaj" , name: "Lucky"},
                  { providerId:"aaaba",  name: "Dhruv"},
                  { providerId:"aaabf" , name: "Dinesh"},
                  { providerId:"aaabr",  name: "Rajesh"},
                  { providerId:"aaabv" , name: "Rakul"},
                  { providerId:"aaabx",  name: "Hitesh"}
                ]
             },
              { name: "Outstation Driver", description: "Long-distance travel assistance" ,
                providers:
                [{ providerId:"aaaaj" , name: "Lucky"},
                  { providerId:"aaaba",  name: "Dhruv"},
                  { providerId:"aaabf" , name: "Dinesh"}]
              },
              { name: "Permanent Driver", description: "Full-time driver recruitment" ,
                providers:
                [
                  { providerId:"aaabf" , name: "Dinesh"},
                  { providerId:"aaabr",  name: "Rajesh"},
                  { providerId:"aaabv" , name: "Rakul"},
                  { providerId:"aaabx",  name: "Hitesh"}
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Movers & Packers",
        slug: "movers-packers",
        icon: "📦",
        sections: [
          {
            heading: "Relocation Services",
            services: [
              { name: "Home Shifting", description: "Packing, loading, moving, unloading" ,
               providers:
              [
                { providerId:"aaaaa" , name: "Mayank"},
                { providerId:"aaaab" , name: "Mohan"},
                { providerId:"aaaac" , name: "Mukesh"},
                { providerId:"aaaag" , name: "Manoj"}
              ]
              },
              { name: "Office Shifting", description: "IT equipment, documents, furniture"  ,
                providers:
                [{ providerId:"aaaaa" , name: "Mayank"},
                  { providerId:"aaaab" , name: "Mohan"},
                  { providerId:"aaaag" , name: "Manoj"},
                  { providerId:"aaabt" , name: "Chirag"}
                ]
             },
              { name: "Local Transport", description: "Mini truck or tempo services" ,
                providers:
                [
                  { providerId:"aaaaa" , name: "Mayank"},
                { providerId:"aaaab" , name: "Mohan"},
                { providerId:"aaaac" , name: "Mukesh"},
                { providerId:"aaaag" , name: "Manoj"},
                 
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "HOME HELP & CARE",
    categorySlug: "home-help-care",
    subcategories: [
      {
        name: "Maid",
        slug: "maid",
        icon: "🧽",
        sections: [
          {
            heading: "Maid Services",
            services: [
              { name: "Daily Maid", description: "Regular household cleaning help"  ,
                providers:
                [
                  { providerId:"aaaax",  name: "Maya"},
                { providerId: "aaabm", name: "Rupal"}
                ]
             },
              { name: "Part-Time Maid", description: "Few hours a day/week" ,
                providers:
                [
                  { providerId:"aaaaz",  name: "Surbhi"},
                  { providerId:"aaaax",  name: "Maya"},
                { providerId: "aaabm", name: "Rupal"}
                ]
              },
              { name: "Live-in Maid", description: "Stay-in cleaning and assistance"  ,
                providers:
                [
                  { providerId:"aaaay",  name: "Kayami"}
                ]
             }
            ]
          }
        ]
      },
      {
        name: "Cook",
        slug: "cook",
        icon: "🍳",
        sections: [
          {
            heading: "Cooking Services",
            services: [
              { name: "North Indian Meals", description: "Daily meal preparation"  ,
                providers:
                [
                  { providerId:"aaaaw",  name: "Abhaya"}
                ]
             },
              { name: "South Indian Meals", description: "Dosa, Idli, Sambhar & more"  ,
                providers:
                [
                  { providerId: "aaaca", name: "Kalyani"},
                { providerId: "aaacb" ,name: "Charul"}
                ]
             },
              { name: "Occasional Party Cooking", description: "For parties or guests" ,
                providers:
                [
                  { providerId: "aaacc" ,name: "Kiran"}
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Care Taker",
        slug: "caretaker",
        icon: "👵",
        sections: [
          {
            heading: "Caretaker Services",
            services: [
              { name: "Elderly Care", description: "Assistance with daily needs"  ,
                providers:[
                  { providerId: "aaabl", name: "Nehal"}
               ]
             },
              { name: "Patient & Handicap Care", description: "Medical & personal support"  ,
                providers:[
                  { providerId: "aaaao", name: "Meghal"}
              ]
             },
              { name: "Child Care", description: "Day-time babysitting" ,
                providers:[
                  { providerId: "aaaae", name: "Suhani"},
                { providerId: "aaaam",  name: "Kripa"},
                { providerId: "aaaap", name: "Dhyati"},
                { providerId: "aaabe", name: "Kalpana"}
              ]
              },
              { name: "Pet Care", description: "Pet Care & Support" ,
                providers:[
                  { providerId: "aaabi", name: "Kimji"}
              ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "DECOR & EVENTS",
    categorySlug: "decor-events",
    subcategories: [
      {
        name: "Decorator",
        slug: "decorator",
        icon: "🎉",
        sections: [
          {
            heading: "Decoration Services",
            services: [
              { name: "Birthday Decoration", description: "Balloon, LED, photo booth" ,
                providers:[
                { providerId:"aaaad",  name: "Danush" },
                { providerId:"aaaai",  name: "Dinesh" },
                { providerId:"aaaal",  name: "Dharmendhra" },
                { providerId:"aaaan",  name: "Dhruv" },
                { providerId:"aaaas",  name: "Dajohn" },
                { providerId:"aaabc",  name: "Subhank" },
                { providerId:"aaabo",  name: "Khyatam" },
                { providerId:"aaabw",  name: "Rupesh" },
                { providerId:"aaaby",  name: "Der" },
                { providerId:"aaabz",  name: "Tripal" }
                ]
              },
              { name: "Wedding Decor", description: "Mandap, lighting, flower decor"  ,
                providers:[
                  { providerId:"aaaas",  name: "Dajohn" },
                { providerId:"aaabc",  name: "Subhank" },
                { providerId:"aaabo",  name: "Khyatam" },
                { providerId:"aaabw",  name: "Rupesh" },
                { providerId:"aaaby",  name: "Der" },
                { providerId:"aaabz",  name: "Tripal" }
                ]
             },
              { name: "Festive Home Decor", description: "Diwali, Christmas, etc." ,
                providers:[
                  { providerId:"aaaad",  name: "Danush" },
                { providerId:"aaaai",  name: "Dinesh" },
                { providerId:"aaaal",  name: "Dharmendhra" },
                { providerId:"aaaan",  name: "Dhruv" },
                { providerId:"aaaas",  name: "Dajohn" },
                { providerId:"aaabc",  name: "Subhank" },
                { providerId:"aaabo",  name: "Khyatam" }
                ]
               }
            ]
          }
        ]
      }
    ]
  }
];

export const products = [
    {
        _id: "aaaaa",
        name: "Mayank",
        description: "Safe, fast, and affordable packing & moving services.",
        price: 100,
        image: [p_img1],
        category:   "MOVERS & DRIVERS",
        subCategory: "Movers & Packers",
        Location: "Ajmer Road",
        sizes: ["Full time", "Part time", "Custom"],
        date:  Date.now(),
        rating: [4.2],
        bestseller: true
    },
    {
        _id: "aaaab",
        name:  "Mohan",
        description: "Safe, fast, and affordable packing & moving services.",
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category:   "MOVERS & DRIVERS",
        subCategory: "Movers & Packers",
        Location: "Vaishali Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [4.8],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: "aaaac",
        name:  "Mukesh",
        description: "Safe, fast, and affordable packing & moving services.",
        price: 220,
        image: [p_img3],
        category:   "MOVERS & DRIVERS",
        subCategory: "Movers & Packers",
        Location: "Shankar Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [3.5],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: "aaaad",
         name: "Danush",
        description: "decoration for kitty party, functions and many more",
       price: 110,
        image: [p_img4],
        category: "DECOR & EVENTS",
        subCategory: "Decorator",
        Location:  "Shankar Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [2.5],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Suhani",
        description: "personalized assistance and support for the elderly ,kids , disabled or patients ",
        price: 130,
        image: [p_img5],
        category: "HOME HELP & CARE",
        subCategory: "Care Taker",
        Location:  "Shankar Nagar",
        time: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Faizan",
        description: "specializes in crafting, repairing and installing woodeb structures , furnitures and fixtures with precision and skill",
        price: 140,
        image: [p_img6],
        category: "QUICK HOME REPAIRS",
        subCategory: "Carpenter",
        Location:  "Shankar Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: true
    },
    {
        _id: "aaaag",
        name:  "Manoj",
        description: "Safe, fast, and affordable packing & moving services.",
        price: 190,
        image: [p_img7],
        category: "MOVERS & DRIVERS",
        subCategory: "Movers & Packers",
        Location:  "Raja Park",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Prathamesh",
        description: "Provides installation,repair, and maintainance of electrical systems ",
        price: 140,
        image: [p_img8],
        category: "QUICK HOME REPAIRS",
        subCategory: "Eletrician",
        Location: "Raja Park",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Dinesh",
        description: "decoration for kitty party, functions and many more",
        price: 100,
        image: [p_img9],
        category: "DECOR & EVENTS",
        subCategory:"Decorator",
        Location: "Raja Park",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Lucky",
        description: "drive you to you destination whenever and whereever",
        price: 110,
        image: [p_img10],
        category: "MOVERS & DRIVERS",
        subCategory: "Driver",
        Location: "Jawahar Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Manoj Kumar",
        description: "Provides installation,repair, and maintainance of electrical systems ",
        price: 120,
        image: [p_img11],
        category: "QUICK HOME REPAIRS",
        subCategory:  "Eletrician",
        Location:  "Jawahar Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Dharmedhra",
        description: "decoration for kitty party, functions and many more",
        price: 150,
        image: [p_img12],
        category: "DECOR & EVENTS",
        subCategory: "Decorator",
        Location:   "Jawahar Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Kripa",
        description: "personalized assistance and support for the elderly ,kids , disabled or patients ",
        price: 130,
        image: [p_img13],
        category:  "HOME HELP & CARE",
        subCategory: "Care Taker",
        Location:  "Jawahar Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Dhruv",
        description: "decoration for kitty party, functions , interior designing and  many more",
         price: 160,
        image: [p_img14],
        category: "DECOR & EVENTS",
        subCategory: "Decorator",
        Location:  "Chowki Dhani theme village",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Meghal",
        description: "personalized assistance and support for the elderly ,kids , disabled or patients ",
        price: 140,
        image: [p_img15],
        category: "HOME HELP & CARE",
        subCategory:"Care Taker",
        Location: "Chowki Dhani theme village",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "dhyati",
        description: "personalized assistance and support for the elderly ,kids , disabled or patients ",
        price: 170,
        image: [p_img16],
        category: "HOME HELP & CARE",
        subCategory: "Care Taker",
        Location:  "Mansarovar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "ShriKant",
        description: "Provides installation,repair, and maintainance of electrical systems ",
          price: 150,
        image: [p_img17],
        category: "QUICK HOME REPAIRS",
        subCategory: "Eletrician",
        Location:  "Mansarovar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Hrishikesh",
        description: "Provides installation,repair, and maintainance of electrical systems ",
        price: 180,
        image: [p_img18],
        category:"QUICK HOME REPAIRS",
        subCategory: "Eletrician",
        Location: "Chowki Dhani theme village",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaas",
        name:  "Dajohn",
        description: "decoration for kitty party, functions , interior designing and  many more",
        price: 160,
        image: [p_img19],
        category: "DECOR & EVENTS",
        subCategory: "Decorator",
        Location: "Chowki Dhani theme village",
        sizes: ["Full time", "Part time", "Custom"],
        bestseller: false,
        rating: [],
        date: Date.now(),
    },
    {
        _id: "aaaat",
        name: "Samuel",
        description: "specializes in crafting, repairing and installing woodeb structures , furnitures and fixtures with precision and skill",
        price: 170,
        image: [p_img20],
        category: "QUICK HOME REPAIRS",
        subCategory: "Carpenter",
        Location: "Chowki Dhani theme village",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaau",
        name: "Swapnil",
        description: "Provides installation,repair, and maintainance of electrical systems ",
         price: 170,
        image: [p_img21],
        category: "QUICK HOME REPAIRS",
        subCategory: "Eletrician",
        Location:  "Jhotwara",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaav",
        name: "Pratim",
        description: "Provides installation,repair, and maintainance of electrical systems ",
        price: 200,
        image: [p_img22],
        category: "QUICK HOME REPAIRS",
        subCategory: "Eletrician",
        Location:  "Ajmer Road",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaaw",
        name: "Abhaya",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img23],
        category:   "HOME HELP & CARE",
        subCategory:"Cook",
        Location:  "Jhotwara",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaax",
        name: "Maya",
        description: "Household chores at any given time",
        price: 210,
        image: [p_img24],
        category: "HOME HELP & CARE",
        subCategory: "Maid",
        Location: "Jhotwara",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaay",
        name: "Kayami",
        description: "Household chores at any given time",
          price: 190,
        image: [p_img25],
        category: "HOME HELP & CARE",
        subCategory: "Maid",
        Location: "Ajmer Road",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaaz",
        name: "Surbhi",
        description: "Household chores at any given time",price: 220,

        image: [p_img26],
        category: "HOME HELP & CARE",
        subCategory: "Maid",
        Location: "Malviya Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaaba",
        name: "Dhruv",
        description: "drive you to you destination whenever and whereever",
        price: 200,
        image: [p_img27],
        category: "MOVERS & DRIVERS",
        subCategory:  "Driver",
        Location: "Malviya Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabb",
        name: "Anirudh",
        description: "fixes pipes and other pipelines ",
           price: 230,
        image: [p_img28],
        category:"QUICK HOME REPAIRS",
        subCategory: "Plumber",
        Location: "Malviya Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabc",
        name: "Subhank",
        description: "decoration for kitty party, functions , interior designing and  many more",
          price: 210,
        image: [p_img29],
        category:  "DECOR & EVENTS",
        subCategory: "Decorator",
        Location: "Malviya Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabd",
        name: "John",
        description: "fixes pipes and other pipelines ",
          price: 240,
        image: [p_img30],
        category:  "QUICK HOME REPAIRS",
        subCategory: "Plumber",
        Location: "Malviya Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabe",
        name: "Kalpana",
        description: "personalized assistance and support for the elderly ,kids , disabled or patients ",
         price: 220,
        image: [p_img31],
        category: "HOME HELP & CARE",
        subCategory: "Care Taker",
        Location: "Malviya Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabf",
        name: "Dinesh",
        description: "drive you to you destination whenever and whereever",
        price: 250,
        image: [p_img32],
        category:  "MOVERS & DRIVERS",
        subCategory:  "Driver",
        Location: "Bapu Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabg",
        name: "Salman",
        description: "specializes in crafting, repairing and installing woodeb structures , furnitures and fixtures with precision and skill",
         price: 230,
        image: [p_img33],
        category: "QUICK HOME REPAIRS",
        subCategory:  "Carpenter",
        Location:   "Bapu Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabh",
        name: "Reuben",
        description: "specializes in crafting, repairing and installing woodeb structures , furnitures and fixtures with precision and skill",
         price: 260,
        image: [p_img34],
        category:  "QUICK HOME REPAIRS",
        subCategory:  "Carpenter",
        Location:  "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabi",
        name: "Kimji",
        description: "personalized assistance and support for the elderly ,kids , disabled, patients or pets  ",
         image: [p_img35],
        category:"HOME HELP & CARE",      
        subCategory:  "Care Taker",
        Location:  "Bapu Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabj",
        name: "Saif",
        description: "fixes pipes and other pipelines ",
         image: [p_img36],
        category: "QUICK HOME REPAIRS",
        subCategory:  "Plumber",
        Location:  "Bapu Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabk",
        name: "Omkar",
        description: "Provides installation,repair, and maintainance of electrical systems ",
         price: 250,
        image: [p_img37],
        category:  "QUICK HOME REPAIRS",
        subCategory:"Eletrician",
        Location:  "Bapu Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabl",
        name: "Nehal",
        description: "personalized assistance and support for the elderly ,kids , disabled or patients ",
         price: 280,
        image: [p_img38],
        category: "HOME HELP & CARE",
        subCategory: "Care Taker",
        Location:  "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabm",
          name: "Rupal",
        description: "Household chores at any given time",
         price: 260,
        image: [p_img39],
        category:"HOME HELP & CARE",
        subCategory: "Maid",
        Location:  "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabn",
        name: "Tejnder",
        description: "fixes pipes and other pipelines ",
         price: 290,
        image: [p_img40],
        category: "QUICK HOME REPAIRS",
        subCategory: "Plumber",
        Location: "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabo",
        name: "Khyatam",
        description: "decoration for kitty party, functions , interior designing and  many more",
         price: 270,
        image: [p_img41],
        category:  "DECOR & EVENTS",
        subCategory:  "Decorator",
        Location: "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabp",
        name: "Nilesh",
        description: "Provides installation,repair, and maintainance of electrical systems ",
        price: 300,
        image: [p_img42],
        category:"QUICK HOME REPAIRS",
        subCategory:  "Eletrician",
        Location: "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabq",
        name: "Amey",
        description: "Provides installation,repair, and maintainance of electrical systems ",
         price: 280,
        image: [p_img43],
        category: "QUICK HOME REPAIRS",
        subCategory: "Eletrician",
        Location: "Tonk Road",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabr",
        name: "Rajesh",
        description: "drive you to you destination whenever and whereever",
        price: 310,
        image: [p_img44],
        category:  "MOVERS & DRIVERS",
        subCategory: "Driver",
        Location: "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabs",
        name: "Manis",
        description: "fixes pipes and other pipelines ",
                price: 290,
        image: [p_img45],
        category:"QUICK HOME REPAIRS",
        subCategory:  "Plumber",
        Location: "Tonk Road",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabt",
        name: "Chirag",
        description: "Safe, fast, and affordable packing & moving services.",
        price: 320,
        image: [p_img46],
        category: "MOVERS & DRIVERS",
        subCategory: "Movers & Packers",
        Location:  "Tonk Road",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabu",
        name: "Ritwik",
        description: "specializes in crafting, repairing and installing woodeb structures , furnitures and fixtures with precision and skill",
         price: 300,
        image: [p_img47],
        category: "QUICK HOME REPAIRS",
        subCategory: "Carpenter",
        Location:  "Jagatpura",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabv",
        name: "Rakul",
        description: "drive you to you destination whenever and whereever",
        price: 330,
        image: [p_img48],
        category:  "MOVERS & DRIVERS",
        subCategory: "Driver",
        Location: "C-Scheme",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabw",
        name: "Rupesh",
        description: "decoration for kitty party, functions , interior designing and  many more",
         price: 310,
        image: [p_img49],
        category:  "DECOR & EVENTS",
        subCategory:  "Decorator",
        Location: "Tonk Road",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabx",
        name: "Hitesh",
        description: "drive you to you destination whenever and whereever",
         price: 340,
        image: [p_img50],
        category:"MOVERS & DRIVERS",
        subCategory: "Driver",
        Location: "Raja Park",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
         bestseller: false
    },
    {
        _id: "aaaby",
        name: "Der",
        description: "decoration for kitty party, functions , interior designing and  many more",
        price: 320,
        image: [p_img51],
        category: "DECOR & EVENTS",
        subCategory:"Decorator",
        Location:  "Raja Park",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    {
        _id: "aaabz",
        name: "Tripal",
        description: "decoration for kitty party, functions , interior designing and  many more",
        price: 350,
        image: [p_img52],
        category: "DECOR & EVENTS",
        subCategory:"Decorator",
        Location: "Lal Bahadur Nagar",
        sizes: ["Full time", "Part time", "Custom"],
        rating: [],
        date: Date.now(),
        bestseller: false
    },
    // AC Service & Repair
    {
      _id: "aaacv",
      name: "Aarav",
      description: "Cleaning & basic maintenance",
      price: 260,
      image: [p_img11],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacw",
      name: "Kunal",
      description: "Cleaning & basic maintenance",
      price: 260,
      image: [p_img12],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacx",
      name: "Siddharth",
      description: "Refill R22, R32, R410 gases",
      price: 260,
      image: [p_img13],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacy",
      name: "Manish",
      description: "Refill R22, R32, R410 gases",
      price: 260,
      image: [p_img14],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacz",
      name: "Varun",
      description: "Wall-mount and window installation",
      price: 260,
      image: [p_img15],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaada",
      name: "Abhishek",
      description: "Wall-mount and window installation",
      price: 260,
      image: [p_img16],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaadb",
      name: "Shubham",
      description: "Disassembling AC from wall/window",
      price: 260,
      image: [p_img17],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaadc",
      name: "Tarun",
      description: "Disassembling AC from wall/window",
      price: 260,
      image: [p_img18],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "AC Service & Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
 
    // Washing Machine Repair
    {
      _id: "aaacp",
      name: "Abhay",
      description: "Motor, panel, drum repair",
      price: 260,
      image: [p_img19],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Washing Machine Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacq",
      name: "Yash",
      description: "Motor, panel, drum repair",
      price: 260,
      image: [p_img20],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Washing Machine Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacr",
      name: "Faakir",
      description: "Water leakage, error codes",
      price: 260,
      image: [p_img21],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Washing Machine Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacs",
      name: "Pranav",
      description: "Water leakage, error codes",
      price: 260,
      image: [p_img22],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Washing Machine Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaact",
      name: "Mayank",
      description: "Not spinning or drying",
      price: 260,
      image: [p_img23],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Washing Machine Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacu",
      name: "Dhruv",
      description: "Not spinning or drying",
      price: 260,
      image: [p_img24],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Washing Machine Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
 
    // Refrigerator Repair
    {
      _id: "aaacj",
      name: "Sameer",
      description: "Cooling issues or compressor fault",
      price: 260,
      image: [p_img25],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Refrigerator Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaack",
      name: "Sneham",
      description: "Cooling issues or compressor fault",
      price: 260,
      image: [p_img26],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Refrigerator Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacl",
      name: "Gourav",
      description: "For non-cooling issues",
      price: 260,
      image: [p_img27],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Refrigerator Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacm",
      name: "Gagan",
      description: "For non-cooling issues",
      price: 260,
      image: [p_img28],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Refrigerator Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacn",
      name: "Dushyant",
      description: "Fix loose or broken seals",
      price: 260,
      image: [p_img29],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Refrigerator Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaaco",
      name: "Rajat",
      description: "Fix loose or broken seals",
      price: 260,
      image: [p_img30],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Refrigerator Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
 
    // Water Purifier Repair
    {
      _id: "aaacd",
      name: "Nikhil",
      description: "Replace worn-out filters",
      price: 260,
      image: [p_img31],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Water Purifier Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaace",
      name: "Raj",
      description: "Replace worn-out filters",
      price: 260,
      image: [p_img32],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Water Purifier Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacf",
      name: "Uday",
      description: "Check lamp and flow system",
      price: 260,
      image: [p_img33],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Water Purifier Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
    {
      _id: "aaacg",
      name: "Udit",
      description: "Check lamp and flow system",
      price: 260,
      image: [p_img34],
      category: "APPLIANCE SERVICE & REPAIRS",
      subCategory: "Water Purifier Repair",
      Location: "Lal Bahadur Nagar",
      sizes: ["Full time", "Part time", "Custom"],
      rating: [],
      date: Date.now(),
      bestseller: false
    },
      {
        _id: "aaagd",
        name: "Maulik",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 499,
        image: [p_img1],
        category: "CLEANING & PEST CONTROL",
        subCategory:  "Pest Control Services",
        Location:"Lal Bahadur Nagar",
        sizes: ["1BHK", "Custom"],
        date: Date.now(),
        rating: [4.3],
        bestseller: true
      },
      {
        _id: "aaagf",
        name: "Moumit",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 699,
        image: [p_img12],
        category: "CLEANING & PEST CONTROL",
        subCategory:  "Pest Control Services",
        Location: "Jaipur",
        sizes: ["2BHK", "Custom"],
        date: Date.now(),
        rating: [4.5],
        bestseller: true
      },
      {
        _id: "aaagh",
        name: "Pratim",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 899,
        image: [p_img3],
        category: "CLEANING & PEST CONTROL",
        subCategory:  "Pest Control Services",
        Location: "Jaipur",
        sizes: ["3BHK", "Custom"],
        date: Date.now(),
        rating: [4.6],
        bestseller: false
      },
      {
        _id: "aaage",
        name: "Ipsit",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 1199,
        image: [p_img4],
        category: "CLEANING & PEST CONTROL",
        subCategory:  "Pest Control Services",
        Location: "Jaipur",
        sizes: ["4BHK", "Villa", "Custom"],
        date: Date.now(),
        rating: [4.7],
        bestseller: false
      },
      {
        _id: "aaagg",
        name: "Rim",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 349,
        image: [p_img5],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Pest Control Services",
        Location: "Jaipur",
        sizes: ["Kitchen"],
        date: Date.now(),
        rating: [4.4],
        bestseller: false
      },
      {
        _id: "aaaga",
        name: "Hiren",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 399,
        image: [p_img6],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Pest Control Services",
        Location: "Jaipur",
        sizes: ["1BHK", "General"],
        date: Date.now(),
        rating: [4.3],
        bestseller: true
      },
      {
        _id: "aaagb",
        name: "Jignesh",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 599,
        image: [p_img7],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Pest Control Services",
        Location: "Jaipur",
        sizes: ["2BHK", "3BHK", "General"],
        date: Date.now(),
        rating: [4.6],
        bestseller: false
      },
      {
        _id: "aaagc",
        name: "Rajesh",
        description: "Keep your home safe from pests with our expert service.\nWe eliminate cockroaches, termites, rodents, and more.\nEco-friendly solutions for a healthier living space.",
        price: 299,
        image: [p_img8],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Pest Control Services",
        Location: "Jaipur",
        sizes: ["Pest-Specific"],
        date: Date.now(),
        rating: [4.5],
        bestseller: true
      },
      {
        _id: "aaadd",
        name: "Arindamya",
        description: "Comprehensive deep cleaning for a healthier home. Includes kitchen, bathroom, and living space sanitization.",
        price: 349,
        image: [p_img9],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Home Cleaning Services",
        Location: "Jaipur - Vaishali Nagar",
        sizes: ["Standard"],
        date: Date.now(),
        rating: [4.7],
        bestseller: true
      },
      {
        _id: "aaade",
        name: "Sanya",
        description: "Top-to-bottom home cleaning with eco-friendly products. Ideal for monthly maintenance or moving in/out.",
        price: 319,
        image: [p_img11],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Home Cleaning Services",
        Location: "Jaipur - Bapu Nagar",
        sizes: ["Full Home"],
        date: Date.now(),
        rating: [4.6],
        bestseller: false
      },
      {
        _id: "aaadf",
        name: "Indrani",
        description: "Detailed home cleaning focused on hygiene and sanitation. Flexible packages available.",
        price: 299,
        image: [p_img12],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Home Cleaning Services",
        Location: "Jaipur - Tonk Road",
        sizes: ["Custom"],
        date: Date.now(),
        rating: [4.4],
        bestseller: true
      },
      {
        _id: "aaadh",
        name: "Shri",
        description: "One-time or regular deep cleaning for spotless kitchens, bathrooms, and living spaces.",
        price: 289,
        image: [p_img13],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Home Cleaning Services",
        Location: "Jaipur - Vaishali Nagar",
        sizes: ["Compact"],
        date: Date.now(),
        rating: [4.3],
        bestseller: false
      },
      {
        _id: "aaadi",
        name: "Ameya",
        description: "Quick and efficient home deep cleaning with a focus on allergen removal and sanitation.",
        price: 359,
        image: [p_img14],
        category: "CLEANING & PEST CONTROL",
        subCategory: "Home Cleaning Services",
        Location: "Jaipur - Bapu Nagar",
        sizes: ["Pest-Specific"],
        date: Date.now(),
        rating: [4.8],
        bestseller: true
      }
]


export const Products = products.map(product => {
    const mappedSlug = subCategorySlugs[product.name];
    return {
      ...product,
      subcategorySlug: mappedSlug || "others",
    };
  });
 
  const servicesAsProducts = extractAllServices(allServices);

  export const productS = servicesAsProducts.slice(0, 5).map((service, index) => ({
    _id: `service-${index}`,
    name: service.name,
    description: service.description,
    category: service.category,
    subcategory: service.subcategory,
    tags: [service.heading],
  }));