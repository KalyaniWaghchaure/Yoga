// components/Navbar.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links used in both desktop nav and mobile bottom nav
  const navLinks = [
    { name: "Find Balance", href: "#", icon: "🧘" },
    { name: "Nutrition Tips", href: "#", icon: "🥗" },
    { name: "Stay Healthy", href: "#", icon: "💪" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-center py-1 sm:py-2 text-xs sm:text-sm font-medium">
        Start your yoga journey today
      </div>

      {/* Main Navbar */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1 sm:py-2' : 'bg-white py-2 sm:py-4'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Left: Logo and Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Hamburger - only visible on mobile */}
            <button 
              className="text-gray-800 focus:outline-none md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-2">  
                <Image 
                  src="/Green-leaves-logo-1.webp" 
                  alt="Yoga Zen Logo" 
                  fill
                  sizes="(max-width: 640px) 2rem, 2.5rem"
                  className="object-contain"
                />
              </div>
              <span className="text-gray-800 font-semibold text-base sm:text-lg">Yoga Zen</span>
            </div>
          </div>

          {/* Center: Nav Links - hidden on mobile */}
          <nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-purple-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Buttons - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link href="#" className="text-gray-800 hover:text-purple-600 transition-colors text-sm lg:text-base">
              Sign Up
            </Link>
            <Link href="#" className="bg-purple-600 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded text-sm lg:text-base hover:bg-purple-700 transition-colors">
              Explore for free
            </Link>
          </div>
          
          {/* Mobile sign up button - only visible on mobile */}
          <div className="md:hidden">
            <Link href="#" className="bg-purple-600 text-white px-3 py-1.5 rounded text-xs sm:text-sm hover:bg-purple-700 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="flex flex-col items-center py-2 px-1 text-gray-700 hover:text-purple-600"
            >
              <span className="text-lg mb-1">{link.icon}</span>
              <span className="text-xs font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Add bottom padding to main content on mobile to account for fixed bottom navigation */}
      <div className="md:hidden h-16"></div>
    </>
  );
}