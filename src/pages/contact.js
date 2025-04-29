// pages/contact.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  });
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (to handle server-side rendering)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Set initial value
      handleResize();
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
      acceptTerms: false
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us | YogaZen</title>
        <meta name="description" content="Get in touch with YogaZen" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <header className="border-b shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="mr-2">  
                <Image 
                  src="/Green-leaves-logo-1.webp" 
                  alt="Yoga Zen Logo" 
                  width={50} 
                  height={50}
                />
              </div>
              <span className="text-gray-800 font-semibold text-lg">Yoga Zen</span>
            </div>
            
            {/* Navigation Links - Desktop only */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-700">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-700">About Us</Link>
              <Link href="/contact" className="text-purple-500">Contact Us</Link>
            </nav>
            
            {/* Mobile Menu Button - Shows only on mobile */}
            <div className="md:hidden">
              {/* This is just a placeholder - the actual navigation is at the bottom */}
              <span className="sr-only">Menu at bottom</span>
            </div>
            
            {/* Auth Buttons - Desktop only */}
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/signup" className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50">
                Sign Up
              </Link>
              <Link href="/login" className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                Login
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <motion.div 
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {/* Get in touch with us */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Get in touch with us</h3>
                <div className="flex space-x-4">
                  <a href="mailto:info@yogazen.com" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600">✉️</span>
                  </a>
                  <a href="https://instagram.com/yogazen" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600">📷</span>
                  </a>
                  <a href="https://facebook.com/yogazen" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600">f</span>
                  </a>
                  <a href="https://twitter.com/yogazen" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600">🐦</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Location */}
              <div>
                <h3 className="text-lg font-medium mb-4">Location</h3>
                <p className="text-gray-600">123 Serenity Street</p>
                <p className="text-gray-600">Zen District, 10001</p>
              </div>

              {/* Phone Number */}
              <div>
                <h3 className="text-lg font-medium mb-4">Phone Number</h3>
                <p className="text-gray-600">+1 (555) 000-0000</p>
                <p className="text-gray-600">+1 (555) 000-0001</p>
              </div>
            </div>
          </div>

          {/* Support Center */}
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4">Support Center</h3>
            <p className="text-gray-600 mb-8">Have questions or need assistance? Send us a message and we will reach you!</p>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4 md:col-span-2">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                  className="mr-2"
                />
                <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                  Accept Terms & Conditions
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-8 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <Image 
                  src="/api/placeholder/800/400"
                  alt="Map location" 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
          
          <footer className="border-t py-12 mt-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stay connected section */}
                <div>
                  <button className="bg-purple-500 text-white px-6 py-2 rounded-full mb-4">
                    Follow
                  </button>
                  <h3 className="text-lg font-semibold mb-4">Stay connected with us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Discover new poses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Learn about our journey</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Check out our latest posts</span>
                    </li>
                  </ul>
                </div>

                {/* Connect with us section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Wellness inspiration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Follow us for updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Connect with us on LinkedIn</span>
                    </li>
                  </ul>
                </div>

                {/* Read our guidelines section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Read our guidelines</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Read our guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">•</span>
                      <span>Privacy Policy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Copyright section */}
            <div className="mt-10 bg-gray-100 py-4 text-center">
              <p className="text-gray-600">Copyright ©2025</p>
            </div>
          </footer>
        </motion.div>
        
        {/* Mobile Bottom Navigation - Displayed only on mobile */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="flex justify-around items-center h-16">
              <Link href="/" className="flex flex-col items-center justify-center w-1/3 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs">Home</span>
              </Link>
              
              <Link href="/about" className="flex flex-col items-center justify-center w-1/3 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs">About</span>
              </Link>
              
              <Link href="/contact" className="flex flex-col items-center justify-center w-1/3 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">Contact</span>
              </Link>
            </div>
          </div>
        )}
        
        {/* Add padding at the bottom when mobile menu is present */}
        {isMobile && <div className="h-16"></div>}
      </div>
    </>
  );
}