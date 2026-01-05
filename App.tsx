
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Scissors, 
  Sparkles, 
  BookOpen, 
  MessageSquare, 
  Settings, 
  User, 
  Clock, 
  MapPin, 
  Phone, 
  Star,
  ChevronRight,
  Menu,
  X,
  Send
} from 'lucide-react';
import { INITIAL_SERVICES, INITIAL_BLOGS, INITIAL_REVIEWS, BUSINESS_INFO } from './constants';
import { Service, ServiceCategory, BlogPost } from './types';
import Hero from './components/sections/Hero';
import ServicesList from './components/sections/ServicesList';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import AdminDashboard from './components/admin/AdminDashboard';
import BlogList from './components/sections/BlogList';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-pink-100 hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-600 tracking-tighter serif">
          PARADISE <span className="font-light text-purple-400 italic">Spa & Salon</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium text-stone-600 uppercase tracking-widest">
          <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link to="/services" className="hover:text-pink-500 transition-colors">Services</Link>
          <Link to="/about" className="hover:text-pink-500 transition-colors">About</Link>
          <Link to="/blog" className="hover:text-pink-500 transition-colors">Blogs</Link>
          <Link to="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
        </div>
        <Link to="/admin" className="p-2 bg-pink-50 rounded-full hover:bg-pink-100 transition-colors">
          <Settings className="w-5 h-5 text-pink-500" />
        </Link>
      </div>
    </nav>
  );
};

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-glass border-t border-pink-100 z-50 md:hidden pb-safe">
      <div className="flex justify-around items-center py-3">
        <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-pink-600' : 'text-stone-400'}`}>
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium uppercase tracking-tighter">Home</span>
        </Link>
        <Link to="/services" className={`flex flex-col items-center gap-1 ${isActive('/services') ? 'text-pink-600' : 'text-stone-400'}`}>
          <Scissors className="w-6 h-6" />
          <span className="text-[10px] font-medium uppercase tracking-tighter">Services</span>
        </Link>
        <Link to="/blog" className={`flex flex-col items-center gap-1 ${isActive('/blog') ? 'text-pink-600' : 'text-stone-400'}`}>
          <BookOpen className="w-6 h-6" />
          <span className="text-[10px] font-medium uppercase tracking-tighter">Blog</span>
        </Link>
        <Link to="/contact" className={`flex flex-col items-center gap-1 ${isActive('/contact') ? 'text-pink-600' : 'text-stone-400'}`}>
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px] font-medium uppercase tracking-tighter">Book</span>
        </Link>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300 py-16 px-6 mb-16 md:mb-0">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-bold text-white mb-6 serif">PARADISE <span className="italic text-pink-400 font-light">Spa & Salon</span></h2>
        <p className="text-stone-400 max-w-md leading-relaxed">
          Premium unisex beauty care and wellness services in the heart of Kharghar. 
          Experience tranquility and expert grooming under one roof.
        </p>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Quick Links</h3>
        <ul className="space-y-4 text-sm">
          <li><Link to="/services" className="hover:text-pink-400 transition-colors">All Services</Link></li>
          <li><Link to="/about" className="hover:text-pink-400 transition-colors">Our Story</Link></li>
          <li><Link to="/blog" className="hover:text-pink-400 transition-colors">Latest News</Link></li>
          <li><Link to="/contact" className="hover:text-pink-400 transition-colors">Book Appointment</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Contact</h3>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-2">
            <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
            <span>{BUSINESS_INFO.address}</span>
          </li>
          <li className="flex gap-2">
            <Phone className="w-4 h-4 text-pink-400 shrink-0" />
            <span>{BUSINESS_INFO.phone}</span>
          </li>
          <li className="flex gap-2">
            <Clock className="w-4 h-4 text-pink-400 shrink-0" />
            <span>{BUSINESS_INFO.hours}</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-500 uppercase tracking-widest">
      © {new Date().getFullYear()} Paradise Spa & Salon. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [blogs, setBlogs] = useState<BlogPost[]>(INITIAL_BLOGS);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ServicesList services={services.slice(0, 3)} />
                <About />
                <BlogList blogs={blogs.slice(0, 2)} preview />
                <Contact />
              </>
            } />
            <Route path="/services" element={<ServicesList services={services} showAll />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogList blogs={blogs} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard services={services} setServices={setServices} blogs={blogs} setBlogs={setBlogs} />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}
