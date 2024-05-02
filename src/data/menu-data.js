import home_1 from "@assets/img/menu/menu-home-1.jpg";
import home_2 from "@assets/img/menu/menu-home-2.jpg";
import home_3 from "@assets/img/menu/menu-home-3.jpg";
import home_4 from "@assets/img/menu/menu-home-4.jpg";

const menu_data = [
  {
    id: 1,
    single_link: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    single_link: true,
    title: "About",
    link: "/about",
  },
  {
    id: 2,
    products: true,
    title: "Services",
    link: "/services",
    product_pages: [
      {
        title: "Handyman",
        link: "/handyman",
        mega_menus: [
          { title: "Home Maintenance", link: "/home-maintenance" },
          { title: "Emergency Home Repair", link: "/emergency-home-repair" },
          { title: "Local Handyman", link: "/local-handyman" },
          {
            title: "Tv Wall Bracket Installation",
            link: "/tv-wall-bracket-installation",
          },
          {
            title: "Floating Shelves Hanging",
            link: "/floating-shelves-hanging",
          },
          { title: "Curtains Installation", link: "/curtains-installation" },
          { title: "Cheap Handyman", link: "/Cheap Handyman" },
        ],
      },
      {
        title: "Carpenter",
        link: "/carpenter",
        mega_menus: [
          { title: "Handyman Carpenter", link: "/handyman-carpenter" },
          { title: "Partition Wall Making", link: "/partition-wall-making" },
          { title: "With Countdown Timer", link: "/product-details-countdown" },
          { title: "Furniture Assembly", link: "/furniture-assembly" },
        ],
      },
      {
        title: "Electrician",
        link: "/electrician",
        mega_menus: [
          { title: "Emergency Electrician", link: "/emergency-electrician" },
          { title: "Handyman Electrician", link: "/handyman-electrician" },
          {
            title: "Fixing Chandelier Light",
            link: "/fixing-chandelier-light",
          },
          {
            title: "Hanging Lamp Light",
            link: "/hanging-lamp-light",
          },
        ],
      },
      {
        title: "Home Appliances",
        link: "/home-appliances",
        mega_menus: [
          { title: "Washing Machine Repair", link: "/Washing Machine Repair" },
          {
            title: "AC Filter Duct Cleaning",
            link: "/ac-filter-duct-cleaning",
          },
          {
            title: "AC Repair Services",
            link: "/ac-repair-services",
          },
          {
            title: "Fridge Repair",
            link: "/fridge-repair",
          },
        ],
      },
      {
        title: "Plumber",
        link: "/plumber",
        mega_menus: [
          { title: "Emergency Plumber", link: "/emergency-plumber" },
          { title: "Blocked Drain Cleaner", link: "/blocked-drain-cleaner" },
          {
            title: "Electric Water Heater Repair",
            link: "/electric-water-heater-repair",
          },
        ],
      },
      {
        title: "Painter",
        link: "/painter",
        mega_menus: [
          { title: "Wallpaper Mixing", link: "/wallpaper-mixing" },
          { title: "Wall Painting", link: "/wall-painting" },
        ],
      },
    ],
  },
  {
    id: 3,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    single_link: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    single_link: true,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    sub_menu: true,
    title: "Handyman",
    link: "/handyman",
    sub_menus: [
      { title: "Home Maintenance", link: "/home-maintenance" },
      { title: "Emergency Home Repair", link: "/emergency-home-repair" },
      { title: "Local Handyman", link: "/local-handyman" },
      {
        title: "Tv Wall Bracket Installation",
        link: "/tv-wall-bracket-installation",
      },
      {
        title: "Floating Shelves Hanging",
        link: "/floating-shelves-hanging",
      },
      { title: "Curtains Installation", link: "/curtains-installation" },
      { title: "Cheap Handyman", link: "/Cheap Handyman" },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: "Carpenter",
    link: "/carpenter",
    sub_menus: [
      { title: "Handyman Carpenter", link: "/handyman-carpenter" },
      { title: "Partition Wall Making", link: "/partition-wall-making" },
      { title: "With Countdown Timer", link: "/product-details-countdown" },
      { title: "Furniture Assembly", link: "/furniture-assembly" },
    ],
  },
  {
    id: 5,
    sub_menu: true,

    title: "Electrician",
    link: "/electrician",
    sub_menus: [
      { title: "Emergency Electrician", link: "/emergency-electrician" },
      { title: "Handyman Electrician", link: "/handyman-electrician" },
      {
        title: "Fixing Chandelier Light",
        link: "/fixing-chandelier-light",
      },
      {
        title: "Hanging Lamp Light",
        link: "/hanging-lamp-light",
      },
    ],
  },
  {
    id: 6,
    sub_menu: true,
    title: "Home Appliances",
    link: "/home-appliances",
    sub_menus: [
      { title: "Washing Machine Repair", link: "/Washing Machine Repair" },
      {
        title: "AC Filter Duct Cleaning",
        link: "/ac-filter-duct-cleaning",
      },
      {
        title: "AC Repair Services",
        link: "/ac-repair-services",
      },
      {
        title: "Fridge Repair",
        link: "/fridge-repair",
      },
    ],
  },
  {
    id: 7,
    sub_menu: true,
    title: "Plumber",
    link: "/plumber",
    sub_menus: [
      { title: "Emergency Plumber", link: "/emergency-plumber" },
      { title: "Blocked Drain Cleaner", link: "/blocked-drain-cleaner" },
      {
        title: "Electric Water Heater Repair",
        link: "/electric-water-heater-repair",
      },
    ],
  },
  {
    id: 8,
    sub_menu: true,

    title: "Painter",
    link: "/painter",
    sub_menus: [
      { title: "Wallpaper Mixing", link: "/wallpaper-mixing" },
      { title: "Wall Painting", link: "/wall-painting" },
    ],
  },
  {
    id: 9,
    single_link: true,
    title: "Contact",
    link: "/contact",
  },
];
