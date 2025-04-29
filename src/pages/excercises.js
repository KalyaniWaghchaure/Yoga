// pages/exercises.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Exercises() {
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
        <title>Yoga Exercises | Yoga Zen</title>
        <meta name="description" content="Explore effective yoga poses and start your journey." />
      </Head>

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
            <Link href="/contact" className="text-gray-700 hover:text-purple-700">Contact Us</Link>
            <Link href="/exercises" className="text-purple-500">Exercises</Link>
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

      <main className="bg-white min-h-screen py-10 px-4">
        <section className="max-w-6xl mx-auto text-left mb-12">
          <h1 className="text-4xl font-bold mb-4">Exercise</h1>
          <h2 className="text-2xl font-semibold">Yoga Exercises</h2>
          <p className="text-gray-600 mt-2">Take a path towards natural spirits.</p>
          <div className="h-64 rounded mt-4">
            <Image 
              src="/api/placeholder/800/400" 
              alt="Yoga Zen" 
              width={800} 
              height={400}
              className="rounded"
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-6">Exercise Videos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Downward Dog', desc: 'A rejuvenating pose that stretches the entire body.' },
              { title: 'Tree Pose', desc: 'A balancing pose that improves focus and stability.' },
              { title: 'Lotus Pose', desc: 'A meditative pose that relaxes the mind and calms the soul.' }
            ].map((item, i) => (
              <div key={i} className="bg-white border p-4 rounded shadow-sm">
                <div className="h-32 bg-gray-200 rounded mb-3"></div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
                <button className="mt-2 text-sm text-blue-600 underline">Watch video</button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-purple-600 text-white text-center py-10 rounded-lg mb-16">
          <h3 className="text-2xl font-semibold">Get Started</h3>
          <p className="mt-2 mb-6">Embark on your yoga journey with a free 14-day trial.</p>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 font-bold px-4 py-2 rounded shadow">Start Free</button>
            <button className="border border-white px-4 py-2 rounded">Contact Us</button>
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
            <Link href="/" className="flex flex-col items-center justify-center w-1/4 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs">Home</span>
            </Link>
            
            <Link href="/about" className="flex flex-col items-center justify-center w-1/4 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs">About</span>
            </Link>
            
            <Link href="/contact" className="flex flex-col items-center justify-center w-1/4 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">Contact</span>
            </Link>
            
            <Link href="/exercises" className="flex flex-col items-center justify-center w-1/4 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <span className="text-xs">Exercises</span>
            </Link>
          </div>
        </div>
      )}
      
      {/* Add padding at the bottom when mobile menu is present */}
      {isMobile && <div className="h-16"></div>}
    </>
  );
}