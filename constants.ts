
import { ServiceCategory, Service, BlogPost, Review } from './types';

export const BUSINESS_INFO = {
  name: 'Paradise Spa & Salon',
  address: 'Sector 3, Near Kharghar Railway Station, Kharghar, Navi Mumbai, Maharashtra 410210',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@paradisespa.in',
  hours: '10:00 AM - 08:00 PM (Monday - Sunday)',
  locationUrl: 'https://maps.google.com/?q=Paradise+Spa+Kharghar+Sector+3'
};

export const INITIAL_SERVICES: Service[] = [
  {
    id: '1',
    name: 'Luxury Haircut & Styling',
    category: ServiceCategory.HAIR,
    description: 'Expert haircut tailored to your face shape and hair texture, including wash and blow-dry.',
    duration: '60 mins',
    price: '₹800',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Advanced Hydrating Facial',
    category: ServiceCategory.SKIN,
    description: 'Deep cleansing and intense hydration using premium botanical extracts.',
    duration: '75 mins',
    price: '₹2,500',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Aromatherapy Full Body Massage',
    category: ServiceCategory.SPA,
    description: 'Relaxing Swedish massage with therapeutic essential oils for ultimate stress relief.',
    duration: '90 mins',
    price: '₹3,500',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '4',
    name: 'Gel Manicure & Pedicure',
    category: ServiceCategory.NAILS,
    description: 'Long-lasting gel polish application with nail shaping and cuticle care.',
    duration: '90 mins',
    price: '₹1,200',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Laser Hair Removal',
    category: ServiceCategory.HAIR_REMOVAL,
    description: 'Safe and effective laser hair removal for smooth, hair-free skin.',
    duration: '45 mins',
    price: '₹2,000',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Bridal Makeup Package',
    category: ServiceCategory.MAKEUP,
    description: 'Complete bridal makeup with trial session and touch-up kit included.',
    duration: '120 mins',
    price: '₹5,000',
    imageUrl: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: '5 Winter Skin Care Tips',
    content: 'Winter can be harsh on your skin, leading to dryness, flakiness, and irritation. To keep your skin glowing even in the dry season, hydration is key. We recommend switching to a heavier, cream-based moisturizer that locks in hydration for longer periods. Additionally, try to avoid taking extremely hot showers as they strip your skin of its natural oils. \n\nExfoliation is also crucial during winter, but be gentle. Over-exfoliating can damage the moisture barrier. Aim for a mild chemical exfoliant once or twice a week to slough off dead skin cells and allow your serums to penetrate deeper. Don\'t forget sunscreen! The winter sun can still cause damage, so apply a broad-spectrum SPF 30 every morning.',
    date: '2024-11-20',
    author: 'Expert Stylist',
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Trend Alert: Pastel Nails',
    content: 'Pastel shades are dominating the nail art scene this season, offering a fresh and sophisticated look that suits every occasion. From soft lavender and mint green to baby blue and butter yellow, these colors are perfect for those who want a pop of color without being too loud. They look exceptionally good on all nail lengths and shapes, particularly almond and squoval. \n\nFor a modern twist, try combining different pastel shades for a rainbow manicure or adding subtle nail art like micro-flowers or geometric lines. The key to rocking pastels is a glossy top coat that enhances the shine and makes the color appear more vibrant. Book your appointment today to try out these trending shades!',
    date: '2024-12-05',
    author: 'Senior Nail Artist',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Anjali Sharma',
    rating: 5,
    comment: 'Best spa experience near Kharghar station. Very professional staff!',
    date: '2 weeks ago'
  },
  {
    id: '2',
    name: 'Rahul Varma',
    rating: 5,
    comment: 'Excellent haircut. They really understand what the customer wants.',
    date: '1 month ago'
  }
];
