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
        <title>Blog | YogaZen</title>
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
                  src="./Green-leaves-logo-1.webp" 
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

  

      <main className="bg-white min-h-screen py-8 px-4">
        <section className="text-center my-10">
          <h1 className="text-4xl font-bold">Yoga Blog</h1>
          <p className="text-gray-600 mt-2">Discover our latest insights and tips on yoga and wellness.</p>
        </section>

        <section className="max-w-5xl mx-auto grid gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-4 rounded">
              <div className="h-48 bg-gray-300 rounded mb-4"></div>
              <h2 className="text-xl font-semibold">Mindful Breathing Techniques</h2>
              <p className="text-sm text-gray-500 mt-1">Learn the importance of breathwork and how it enhances your yoga practice.</p>
              <p className="text-xs mt-2 text-gray-400">John Smith | Yoga Coach</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Wellness Trends</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className="bg-white border p-3 rounded shadow-sm">
                  <div className="h-32 bg-gray-200 rounded mb-2"></div>
                  <h4 className="text-sm font-bold">Morning Yoga Routine</h4>
                  <p className="text-xs text-gray-500">Start your day with these practices to energize your mind.</p>
                  <p className="text-xs mt-1 text-gray-400">Jane Smith | Wellness Guide</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* New Footer */}
      <footer className="border-t py-12">
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