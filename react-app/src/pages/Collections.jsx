import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Collections.css';

const WHATSAPP_NUMBER = 918870178081

const CATEGORY_META = {
  // all:         { label: 'All',         icon: 'fas fa-th' },
  tops:        { label: 'Tops',        icon: 'fas fa-tshirt' },
  skirttop:        { label: 'Skirt & Top',        icon: 'fas fa-tshirt' },
  lehenga:        { label: 'Lehenga',        icon: 'fas fa-tshirt' },
  blouse:      { label: 'Blouse',      icon: 'fas fa-female' },
  salwar:      { label: 'Salwar',      icon: 'fas fa-spa' },
  frocks:     { label: 'Frocks',     icon: 'fas fa-star' },
  kids:        { label: 'Kids',        icon: 'fas fa-child' },
  // nightsuit: { label: 'Nightsuit', icon: 'fas fa-moon' },
  accessories: { label: 'Accessories', icon: 'fas fa-gem' },
};

const CATEGORIES = Object.keys(CATEGORY_META);
// /images/blouse
// /images/tops/
const PRODUCTS = [
  { id: 1,  src: '/images/Tops/tops1.1.JPG',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops',   isNew: true,    occasions: ['Casual'] },
  { id: 2,  src: '/images/Tops/tops1.2.JPG',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops',                   occasions: ['Casual'] },
  { id: 3,  src: '/images/Tops/tops1.3.jpg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops',                   occasions: ['Casual'] },
  { id: 4,  src: '/images/Tops/tops2.JPEG',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops',   featured: true, occasions: ['Casual'] },
  { id: 149, src: '/images/Tops/tops3.JPEG',            alt: 'Tops', title: 'Designer Blouse',   category: 'tops',                 occasions: ['Casual'] },
  { id: 20,  src: '/images/Tops/tops11.jpeg',           alt: 'Tops',   title: 'Stylish Top',       category: 'tops',                   occasions: ['Casual'] },
  



  { id: 6,  src: '/images/SkirtTop/skirt_top1.1.jpeg',           alt: 'Skirt & Top',   title: 'Stylish Top',       category: 'skirttop',                   occasions: ['Festival'] },
  { id: 7,  src: '/images/SkirtTop/skirt_top1.2.jpeg',           alt: 'Skirt & Top',   title: 'Stylish Top',       category: 'skirttop',   isNew: true,    occasions: ['Festival'] },
  { id: 15,  src: '/images/SkirtTop/skirt_top2.1.jpg',           alt: 'Skirt & Top',   title: 'Stylish Top',       category: 'skirttop',                   occasions: ['Festival'] },
  { id: 16,  src: '/images/SkirtTop/skirt_top2.2.jpg',           alt: 'Skirt & Top',   title: 'Stylish Top',       category: 'skirttop',   featured: true, occasions: ['Festival'] },
  { id: 22,  src: '/images/SkirtTop/skirt_top3.jpeg',           alt: 'Skirt & Top',   title: 'Stylish Top',       category: 'skirttop',   featured: true, occasions: ['Party'] },


  { id: 12,  src: '/images/Lehenga/lehenga1.1.jpg',           alt: 'Lehenga',   title: 'Stylish Top',       category: 'lehenga',                   occasions: ['Festival'] },
  { id: 13,  src: '/images/Lehenga/lehenga1.2.JPEG',           alt: 'Lehenga',   title: 'Stylish Top',       category: 'lehenga',   isNew: true,    occasions: ['Festival'] },
  { id: 14,  src: '/images/Lehenga/lehenga1.3.jpg',           alt: 'Lehenga',   title: 'Stylish Top',       category: 'lehenga',                   occasions: ['Festival'] },
  { id: 17,  src: '/images/Lehenga/lehenga2.1.jpg',           alt: 'Lehenga',   title: 'Stylish Top',       category: 'lehenga',                   occasions: ['Wedding'] },
  { id: 18,  src: '/images/Lehenga/lehenga2.2.jpg',           alt: 'Lehenga',   title: 'Stylish Top',       category: 'lehenga',                   occasions: ['Wedding'] },
  { id: 19,  src: '/images/Lehenga/lehenga2.3.JPG',           alt: 'Lehenga',   title: 'Stylish Top',       category: 'lehenga',   isNew: true,    occasions: ['Wedding'] },



  
  
  { id: 26,  src: '/images/Blouse/blouse1.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Festival'] },
  { id: 27,  src: '/images/Blouse/blouse1.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 28,  src: '/images/Blouse/blouse2.1.JPG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Wedding'] },
  { id: 29, src: '/images/Blouse/blouse2.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 30, src: '/images/Blouse/blouse3.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },

  { id: 31,  src: '/images/Blouse/blouse3.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Wedding'] },
  { id: 32,  src: '/images/Blouse/blouse4.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 33,  src: '/images/Blouse/blouse4.2.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Wedding'] },
  { id: 34, src: '/images/Blouse/blouse4.3.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 35, src: '/images/Blouse/blouse5.1.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },

  { id: 36,  src: '/images/Blouse/blouse5.2.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Festival'] },
  { id: 37,  src: '/images/Blouse/blouse5.3.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 38,  src: '/images/Blouse/blouse6.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Festival'] },
  { id: 39, src: '/images/Blouse/blouse6.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 40, src: '/images/Blouse/blouse6.3.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },

  { id: 41,  src: '/images/Blouse/blouse7.1.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Festival'] },
  { id: 42,  src: '/images/Blouse/blouse7.2.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 43,  src: '/images/Blouse/blouse8.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Festival'] },
  { id: 44, src: '/images/Blouse/blouse9.1.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 45, src: '/images/Blouse/blouse9.2.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 50, src: '/images/Blouse/blouse9.3.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },

  { id: 46,  src: '/images/Blouse/blouse10.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Wedding'] },
  { id: 47,  src: '/images/Blouse/blouse11.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 48,  src: '/images/Blouse/blouse12.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Festival'] },
  
  { id: 51,  src: '/images/Blouse/blouse15.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Festival'] },
  { id: 52,  src: '/images/Blouse/blouse15.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 53,  src: '/images/Blouse/blouse16.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Wedding'] },
  { id: 54, src: '/images/Blouse/blouse16.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 55, src: '/images/Blouse/blouse16.3.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },

  { id: 56,  src: '/images/Blouse/blouse17.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Festival'] },
  { id: 57,  src: '/images/Blouse/blouse17.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 58,  src: '/images/Blouse/blouse18.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Wedding'] },
  { id: 59, src: '/images/Blouse/blouse18.2.jpeg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 60, src: '/images/Blouse/blouse19.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },

  { id: 61,  src: '/images/Blouse/blouse19.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', isNew: true,    occasions: ['Wedding'] },
  { id: 62,  src: '/images/Blouse/blouse20.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 63,  src: '/images/Blouse/blouse20.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse', featured: true, occasions: ['Festival'] },
  { id: 66, src: '/images/Blouse/blouse21.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 67, src: '/images/Blouse/blouse21.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 68, src: '/images/Blouse/blouse21.3.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 69, src: '/images/Blouse/blouse22.1.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 70, src: '/images/Blouse/blouse22.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 71, src: '/images/Blouse/blouse22.3.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 72, src: '/images/Blouse/blouse23.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 73, src: '/images/Blouse/blouse24.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 74, src: '/images/Blouse/blouse25.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  
  { id: 77, src: '/images/Blouse/blouse28.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 78, src: '/images/Blouse/blouse29.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  
  

  { id: 79, src: '/images/Blouse/blouse29.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  
  
  { id: 80, src: '/images/Blouse/blouse29.3.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 81, src: '/images/Blouse/blouse30.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 82, src: '/images/Blouse/blouse30.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 84, src: '/images/Blouse/blouse32.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 85, src: '/images/Blouse/blouse33.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 86, src: '/images/Blouse/blouse33.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 88, src: '/images/Blouse/blouse35.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 89, src: '/images/Blouse/blouse36.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 90, src: '/images/Blouse/blouse37.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 91, src: '/images/Blouse/blouse38.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 92, src: '/images/Blouse/blouse38.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 93, src: '/images/Blouse/blouse38.3.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 101, src: '/images/Blouse/blouse38.4.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 94, src: '/images/Blouse/blouse39.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 95, src: '/images/Blouse/blouse40.1.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 96, src: '/images/Blouse/blouse40.2.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 97, src: '/images/Blouse/blouse40.3.jpeg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 98, src: '/images/Blouse/blouse41.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Festival'] },
  { id: 99, src: '/images/Blouse/blouse42.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 64, src: '/images/Blouse/blouse45.1.jpg',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },
  { id: 65, src: '/images/Blouse/blouse45.2.JPEG',   alt: 'Blouse', title: 'Designer Blouse',   category: 'blouse',                 occasions: ['Wedding'] },




  { id: 103, src: '/images/Salwars/salwar2.JPEG',   alt: 'Salwar', title: 'Designer Blouse',   category: 'salwar',                 occasions: ['Festival'] },
  { id: 104, src: '/images/Salwars/salwar3.JPEG',   alt: 'Salwar', title: 'Designer Blouse',   category: 'salwar',                 occasions: ['Festival', 'Casual'] },
  { id: 105, src: '/images/Salwars/salwar4.jpg',   alt: 'Salwar', title: 'Designer Blouse',   category: 'salwar',                 occasions: ['Festival'] },
  { id: 107, src: '/images/Salwars/salwar6.JPEG',   alt: 'Salwar', title: 'Designer Blouse',   category: 'salwar',                 occasions: ['Casual'] },
  { id: 5,  src: '/images/Salwars/salwar7.1.jpg',           alt: 'Salwar',   title: 'Stylish Top',       category: 'Salwar',                   occasions: ['Casual'] },
  { id: 83, src: '/images/Salwars/salwar7.2.jpg',   alt: 'Salwar', title: 'Designer Blouse',   category: 'Salwar',                 occasions: ['Casual'] },

  
  
  { id: 108, src: '/images/Frocks/frocks1.jpg',   alt: 'Frocks', title: 'Designer Blouse',   category: 'frocks',                 occasions: ['Casual'] },
  { id: 109, src: '/images/Frocks/frocks2.jpg',   alt: 'Frocks', title: 'Designer Blouse',   category: 'frocks',                 occasions: ['Party'] },
  { id: 110, src: '/images/Frocks/frocks3.JPEG',   alt: 'Frocks', title: 'Designer Blouse',   category: 'frocks',                 occasions: ['Party', 'Casual'] },
  { id: 111, src: '/images/Frocks/frocks4.1.jpg',   alt: 'Frocks', title: 'Designer Blouse',   category: 'frocks',                 occasions: ['Festival'] },
  { id: 112, src: '/images/Frocks/frocks4.2.jpg',   alt: 'Frocks', title: 'Designer Blouse',   category: 'frocks',                 occasions: ['Festival'] },
  { id: 102, src: '/images/Frocks/frocks5.jpg',   alt: 'Frocks', title: 'Designer Blouse',   category: 'frocks',                 occasions: ['Festival'] },
  { id: 106, src: '/images/Frocks/frocks6.jpg',   alt: 'Frocks', title: 'Designer Blouse',   category: 'frocks',                 occasions: ['Casual'] },

  { id: 113, src: '/images/Kids/kids1.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual', 'Party'] },
  { id: 114, src: '/images/Kids/kids2.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual', 'Party'] },
  { id: 115, src: '/images/Kids/kids3.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual', 'Party'] },
  { id: 116, src: '/images/Kids/kids4.1.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 117, src: '/images/Kids/kids4.2.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 118, src: '/images/Kids/kids5.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 119, src: '/images/Kids/kids6.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual'] },
  { id: 120, src: '/images/Kids/kids7.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual', 'Party'] },
  { id: 121, src: '/images/Kids/kids8.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 122, src: '/images/Kids/kids9.1.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 123, src: '/images/Kids/kids9.2.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 124, src: '/images/Kids/kids10.1.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 125, src: '/images/Kids/kids10.2.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 126, src: '/images/Kids/kids10.3.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 127, src: '/images/Kids/kids11.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 128, src: '/images/Kids/kids12.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 129, src: '/images/Kids/kids13.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 130, src: '/images/Kids/kids14.1.jpeg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual'] },
  
  
  
  
  
  { id: 131, src: '/images/Kids/kids14.2.jpeg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual'] },
  { id: 132, src: '/images/Kids/kids15.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual'] },
  { id: 133, src: '/images/Kids/kids16.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 134, src: '/images/Kids/kids17.1.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party', 'Casual'] },
  { id: 135, src: '/images/Kids/kids17.2.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party', 'Casual'] },
  { id: 136, src: '/images/Kids/kids17.3.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party', 'Casual'] },
  { id: 137, src: '/images/Kids/kids17.4.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party', 'Casual'] },
  { id: 138, src: '/images/Kids/kids20.1.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 139, src: '/images/Kids/kids20.2.png',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 140, src: '/images/Kids/kids21.jpeg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 141, src: '/images/Kids/kids22.1.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 142, src: '/images/Kids/kids22.2.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  { id: 143, src: '/images/Kids/kids23.1.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 144, src: '/images/Kids/kids23.2.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 145, src: '/images/Kids/kids24.1.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 146, src: '/images/Kids/kids24.2.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 147, src: '/images/Kids/kids24.3.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 148, src: '/images/Kids/kids25.JPEG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Party'] },
  { id: 11,  src: '/images/Kids/kids27.JPEG',           alt: 'Kids',   title: 'Stylish Top',       category: 'kids',                   occasions: ['Party'] },
  { id: 21,  src: '/images/Kids/kids28.jpeg',           alt: 'Kids',   title: 'Stylish Top',       category: 'kids',                   occasions: ['Casual', 'Party'] },


  { id: 23,  src: '/images/Kids/kids29.jpeg',           alt: 'Kids',   title: 'Stylish Top',       category: 'kids',                   occasions: ['Casual'] },
  { id: 49, src: '/images/Kids/kids31.JPG',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Festival'] },
  

  { id: 8,  src: '/images/Kids/kids32.1.JPEG',           alt: 'Kids',   title: 'Stylish Top',       category: 'kids',                   occasions: ['Casual'] },
  { id: 9,  src: '/images/Kids/kids32.2.JPEG',           alt: 'Kids',   title: 'Stylish Top',       category: 'kids',                   occasions: ['Casual'] },
  { id: 10,  src: '/images/Kids/kids33.JPEG',           alt: 'Kids',   title: 'Stylish Top',       category: 'kids',   featured: true, occasions: ['Party'] },
  
  
  { id: 150, src: '/images/Nightsuit/nightsuit1.jpg',   alt: 'Kids', title: 'Designer Blouse',   category: 'kids',                 occasions: ['Casual'] },

];


// Helper to extract base product name (e.g., "tops1" from "tops1.1.JPG")
const getBaseProductName = (src) => {
  const filename = src.split('/').pop();
  const withoutExt = filename.replace(/\.[a-zA-Z0-9]+$/, '');
  return withoutExt.replace(/\.\d+$/, '');
};

// Group products by variation
const groupProductsByVariation = (products) => {
  const grouped = {};
  products.forEach(product => {
    const base = getBaseProductName(product.src);
    if (!grouped[base]) {
      grouped[base] = [];
    }
    grouped[base].push(product);
  });
  return Object.values(grouped).map(variations => ({
    id: variations[0].id,
    baseProduct: variations[0],
    variations: variations.sort((a, b) => a.id - b.id)
  }));
};

function Collections() {
  const [searchParams, setSearchParams]   = useSearchParams();
  const [activeFilter, setActiveFilter]   = useState('all');
  const [activeOccasion, setActiveOccasion] = useState(() => searchParams.get('occasion') || '');
  const [search, setSearch]               = useState('');
  const [modalGroupIndex, setModalGroupIndex]     = useState(null);
  const [modalVariationIndex, setModalVariationIndex] = useState(0);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [gridColumns, setGridColumns] = useState(1);

  useEffect(() => {
    const occ = searchParams.get('occasion') || '';
    const cat = searchParams.get('category') || 'all';
    setActiveOccasion(occ);
    setActiveFilter(cat);
  }, [searchParams]);

  const clearOccasion = () => {
    setActiveOccasion('');
    setSearchParams({});
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat      = activeFilter === 'all' || p.category === activeFilter;
    const matchOccasion = !activeOccasion || (p.occasions && p.occasions.includes(activeOccasion));
    const matchSearch   = p.title.toLowerCase().includes(search.toLowerCase()) ||
                          p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchOccasion && matchSearch;
  });

  const grouped = groupProductsByVariation(filteredProducts);

  useEffect(() => {
    if (modalGroupIndex === null) return;
    const currentGroup = grouped[modalGroupIndex];

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'ArrowRight') setModalVariationIndex(i => Math.min(i + 1, currentGroup.variations.length - 1));
      if (e.key === 'ArrowLeft')  setModalVariationIndex(i => Math.max(i - 1, 0));
      if (e.key === 'Escape')     setModalGroupIndex(null);
    };

    let touchStartX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (!touchStartX) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      const threshold = 30;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Swiped left - go to next
          setModalVariationIndex(i => Math.min(i + 1, currentGroup.variations.length - 1));
        } else {
          // Swiped right - go to previous
          setModalVariationIndex(i => Math.max(i - 1, 0));
        }
      }
      touchStartX = 0;
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [modalGroupIndex, grouped]);

  const orderOnWhatsApp = (product) => {
    const imageUrl = `${window.location.origin}${product.src}`;
    const msg = encodeURIComponent(`Hi Nila Instyle! I'm interested in ordering: ${product.title} (${product.category}).\nImage: ${imageUrl}\nPlease let me know the price and availability.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <>
      <div
        className="page-title"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
      >
        <h1>Our Collections</h1>
        <p>Discover your perfect style</p>
      </div>

      {/* Toolbar */}
      <div className="coll-toolbar">
        <div className="coll-search-wrap">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="coll-search-clear" onClick={() => setSearch('')}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
        <div className="coll-toolbar-right">
          <span className="coll-count">{grouped.length} item{grouped.length !== 1 ? 's' : ''}</span>
          <div className="coll-view-toggles">
            <button
              className={`view-toggle${gridColumns === 1 ? ' active' : ''}`}
              onClick={() => setGridColumns(1)}
              title="Single column"
            >
              <i className="fas fa-list"></i>
            </button>
            <button
              className={`view-toggle${gridColumns === 2 ? ' active' : ''}`}
              onClick={() => setGridColumns(2)}
              title="Double column"
            >
              <i className="fas fa-columns"></i>
            </button>
            <button
              className={`view-toggle${gridColumns === 3 ? ' active' : ''}`}
              onClick={() => setGridColumns(3)}
              title="Triple column"
            >
              <i className="fas fa-th"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Occasion banner */}
      {activeOccasion && (
        <div className="coll-occasion-banner">
          Showing: <strong>{activeOccasion}</strong> occasion
          <button className="coll-occasion-clear" onClick={clearOccasion}>
            <i className="fas fa-times"></i> Clear
          </button>
        </div>
      )}

      {/* Filters - Desktop */}
      <div className="coll-filters coll-filters-desktop">
        <div className="coll-filters-inner">
          {CATEGORIES.map(cat => {
            const meta = CATEGORY_META[cat];
            return (
              <button
                key={cat}
                className={`coll-filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                <i className={meta.icon}></i>
                <span>{meta.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters - Mobile */}
      <div className="coll-filters-mobile">
        <button className="coll-category-toggle" onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
          {/* <i className="fas fa-filter"></i> */}
          <span>{CATEGORY_META[activeFilter]?.label || 'Categories'}</span>
          <i className={`fas fa-chevron-${showCategoryMenu ? 'up' : 'down'}`}></i>
        </button>

        {showCategoryMenu && (
          <div className="coll-category-menu">
            {CATEGORIES.map(cat => {
              const meta = CATEGORY_META[cat];
              return (
                <button
                  key={cat}
                  className={`coll-category-item${activeFilter === cat ? ' active' : ''}`}
                  onClick={() => {
                    setActiveFilter(cat);
                    setShowCategoryMenu(false);
                  }}
                >
                  <i className={meta.icon}></i>
                  <span>{meta.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Products */}
      {grouped.length === 0 ? (
        <div className="coll-empty">
          <div className="coll-empty-icon"><i className="fas fa-search"></i></div>
          <h3>No products found</h3>
          <p>We couldn't find anything matching "<strong>{search}</strong>"</p>
          <button onClick={() => { setSearch(''); setActiveFilter('all'); }}>
            <i className="fas fa-redo"></i> Clear Filters
          </button>
        </div>
      ) : (
        <div className="coll-grid" style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
          {grouped.map((group, groupIdx) => {
            const product = group.baseProduct;
            return (
              <div key={group.id} className="coll-card">
                {/* {product.isNew    && <span className="coll-badge new">New</span>}
                {product.featured && <span className="coll-badge featured"><i className="fas fa-star"></i> Featured</span>} */}
                {/* {group.variations.length > 1 && <span className="coll-badge variations">{group.variations.length} views</span>} */}
                {group.variations.length > 1 && <span className="coll-badge new">{group.variations.length} views</span>}

                <div
                  className="coll-img-wrap"
                  onClick={() => { setModalGroupIndex(groupIdx); setModalVariationIndex(0); }}
                >
                  <img src={product.src} alt={product.alt} />
                  <div className="coll-overlay">
                    <button
                      className="coll-overlay-btn wa"
                      onClick={(e) => { e.stopPropagation(); orderOnWhatsApp(product); }}
                      title="Order via WhatsApp"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </button>
                  </div>
                  <div className="coll-cat-tag">
                    <i className={CATEGORY_META[product.category]?.icon}></i>
                    {CATEGORY_META[product.category]?.label || product.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Image Lightbox */}
      {modalGroupIndex !== null && grouped[modalGroupIndex] && (
        <div className="coll-lightbox" onClick={() => setModalGroupIndex(null)}>
          <button className="coll-lb-close" onClick={(e) => { e.stopPropagation(); setModalGroupIndex(null); }}>
            <i className="fas fa-times"></i>
          </button>
          {modalVariationIndex > 0 && (
            <button className="coll-lb-prev" onClick={e => { e.stopPropagation(); setModalVariationIndex(i => i - 1); }}>
              <i className="fas fa-chevron-left"></i>
            </button>
          )}
          <img src={grouped[modalGroupIndex].variations[modalVariationIndex].src} alt="Preview" onClick={e => e.stopPropagation()} />
          {modalVariationIndex < grouped[modalGroupIndex].variations.length - 1 && (
            <button className="coll-lb-next" onClick={e => { e.stopPropagation(); setModalVariationIndex(i => i + 1); }}>
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
          <div className="coll-lb-counter" onClick={e => e.stopPropagation()}>
            {modalVariationIndex + 1} / {grouped[modalGroupIndex].variations.length}
          </div>
        </div>
      )}

    </>
  );
}

export default Collections;
