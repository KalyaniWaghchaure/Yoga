// pages/about.js
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {
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

  return (
    <>
      <Head>
        <title>About Us | YogaZen</title>
        <meta name="description" content="Learn about YogaZen's mission and values" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header/Navigation Bar - Hide on mobile */}
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
              <Link href="/" className="text-purple-500 hover:text-purple-700">Home</Link>
              <Link href="/about" className="text-gray-700">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-700">Contact Us</Link>
            </nav>
            
            {/* Mobile Menu Button - Shows only on mobile */}
            <div className="md:hidden">
              {/* This is just a placeholder - the actual navigation is at the bottom */}
              <span className="sr-only">Menu at bottom</span>
            </div>
            
            {/* Auth Buttons */}
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
          <h1 className="text-3xl font-bold mb-12 text-center">About Us</h1>

          {/* Welcome Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Welcome to YogaZen</h2>
              <p className="text-gray-700 mb-4 text-center md:text-left">
                Discover the path to inner peace and wellness.
              </p>
            </div>
            <div className="bg-gray-500 h-48 md:h-64 rounded-lg overflow-hidden">
              {/* Placeholder for image */}
              <div className="w-full h-full relative">
                <Image 
                  src="/peace.jpg" 
                  alt="Peaceful yoga pose" 
                  fill
                  style={{ objectFit: "cover" }} 
                />
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Dedicate to spreading the benefits of yoga and mindfulness to enhance well-being and harmony in people&apos;s lives.
            </p>
            
            <div className="bg-gray-500 h-64 rounded-lg overflow-hidden max-w-4xl mx-auto">
              {/* Placeholder for image */}
              <div className="w-full h-full relative">
                <Image 
                  src="/api/placeholder/800/400" 
                  alt="Yoga class in session" 
                  fill
                  style={{ objectFit: "cover" }} 
                />
              </div>
            </div>
          </div>

          {/* Key Status */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-8">Key Status</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">2020</span>
                <span className="text-gray-600">Established Year</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">1M+</span>
                <span className="text-gray-600">YogaZen Users</span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">$ 100M</span>
                <span className="text-gray-600">Support Received</span>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Meet the dedicated individuals shaping the YogaZen experience
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">John Smith</h3>
                <p className="text-sm text-gray-600">Founder</p>
              </div>
              
              {/* Team Member 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">Riya</h3>
                <p className="text-sm text-gray-600">CEO</p>
              </div>
              
              {/* Team Member 3 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">Sunny</h3>
                <p className="text-sm text-gray-600">Instructor</p>
              </div>
              
              {/* Team Member 4 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">John Smith</h3>
                <p className="text-sm text-gray-600">Designer / Dev</p>
              </div>
            </div>
            
            {/* Additional Team Members */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 max-w-5xl mx-auto">
              {/* Team Member 5 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">Team Member</h3>
                <p className="text-sm text-gray-600">Role</p>
              </div>
              
              {/* Team Member 6 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">Team Member</h3>
                <p className="text-sm text-gray-600">Role</p>
              </div>
              
              {/* Team Member 7 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">Team Member</h3>
                <p className="text-sm text-gray-600">Role</p>
              </div>
              
              {/* Team Member 8 */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-500 w-full aspect-square rounded-lg mb-4">
                  {/* Team member image placeholder */}
                </div>
                <h3 className="font-medium">Team Member</h3>
                <p className="text-sm text-gray-600">Role</p>
              </div>
            </div>
          </div>


          <div className="mb-16 bg-purple-400 text-white rounded-lg py-12 px-6 ">
            <h2 className="text-2xl font-semibold mb-4">Supporters and<br/> advisors</h2>

            <div className="flex justify-center gap-4">
            </div>
          </div>

          {/* New Opportunities Section */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">New opportunities</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our team and inspire others through yoga and wellness!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Position 1 */}
              <div className="border rounded-lg p-6 flex flex-col items-center">
                <h3 className="font-medium text-lg mb-2">Creative Artist</h3>
                <p className="text-gray-600 text-center text-sm mb-6">
                  Crafting engaging and harmonious user experiences.
                </p>
                <button className="mt-auto border border-gray-300 px-6 py-2 rounded text-gray-700 hover:bg-gray-50 text-sm">
                  Discover
                </button>
              </div>
              
              {/* Position 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center">
                <h3 className="font-medium text-lg mb-2">Tech Expert</h3>
                <p className="text-gray-600 text-center text-sm mb-6">
                  Enhance digital platform with mindful coding
                </p>
                <button className="mt-auto border border-gray-300 px-6 py-2 rounded text-gray-700 hover:bg-gray-50 text-sm">
                  Discover
                </button>
              </div>
              
              {/* Position 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center">
                <h3 className="font-medium text-lg mb-2">Class Coordinator</h3>
                <p className="text-gray-600 text-center text-sm mb-6">
                  Organizing and managing yoga sessions effectively
                </p>
                <button className="mt-auto border border-gray-300 px-6 py-2 rounded text-gray-700 hover:bg-gray-50 text-sm">
                  Discover
                </button>
              </div>
            </div>
          </div>

          {/* Our Space Section */}
          <div className="mb-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Space</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Connect with us online or visit our serene space for a class!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Location 1 */}
              <div className="border rounded-lg p-6 flex flex-col items-center">
                <h3 className="font-medium text-lg mb-2">India</h3>
                <p className="text-gray-600 text-center">
                  123 Chandigarh, 160001
                </p>
              </div>
              
              {/* Location 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center">
                <h3 className="font-medium text-lg mb-2">U.S.A</h3>
                <p className="text-gray-600 text-center">
                  123 xxxxxx 160001
                </p>
              </div>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="mb-16 bg-purple-600 text-white rounded-lg py-12 px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
            <p className="mb-8 max-w-3xl mx-auto">
              Begin your yoga journey with a free 14-day trial.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-purple-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100">
                Sign up
              </button>
              <button className="border border-white px-6 py-2 rounded-md font-medium hover:bg-purple-700">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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