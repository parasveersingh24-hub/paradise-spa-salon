
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
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: '5 Winter Skin Care Tips',
    content: 'Keep your skin glowing even in the dry season with our expert guide. Hydration is key during the colder months in Navi Mumbai. Using a rich moisturizer and staying hydrated from within can make a massive difference in your skin texture...',
    date: '2024-11-20',
    author: 'Expert Stylist',
    imageUrl: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Trend Alert: Pastel Nails',
    content: 'Discover why pastel shades are dominating the nail art scene this season. From soft lavender to mint green, these colors offer a sophisticated yet playful look perfect for any occasion...',
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
