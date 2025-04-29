// pages/index.js

"use client";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Layout Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '@/components/sidebar';
import TestimonialSlider from '@/components/TestimonialSlider';
import ServicesSection from '@/components/services';

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Animation for yoga image
const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile based on window width
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Yoga Zen - Enhance Your Well-being</title>
        <meta name="description" content="Enhance your well-being through yoga and meditation with Yoga Zen" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Sidebar */}
      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <main>
        {/* Hero Section */}
        <section className="py-6 md:py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col md:flex-row items-center justify-between"
            >
              <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Enhance your well-being through yoga and meditation
                </h1>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Join our community of yoga enthusiasts and transform your mind, body, and spirit.
                </p>
                <button className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-all">
                  Get started
                </button>
              </div>
              
              <div className="w-full md:w-1/2">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={floatAnimation}
                  className="flex justify-center"
                >
                  <Image 
                    src="./yoga.png" 
                    alt="Yoga Zen Logo" 
                    width={isMobile ? 300 : 500} 
                    height={isMobile ? 300 : 500}
                    className="max-w-full"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-purple-600 text-white py-12 md:py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {/* Benefit 1 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="text-3xl">😊</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Find your Zen</h3>
                  <p>Discover inner peace and serenity through yoga practice.</p>
                </div>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="text-3xl">🌙</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Restful Sleep</h3>
                  <p>Improve sleep quality and wake up feeling rejuvenated.</p>
                </div>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="text-3xl">🔥</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stress Relief</h3>
                  <p>Embrace tranquility and reduce stress through yoga practice.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <div className="text-center mt-12">
          <h2 className="text-xl font-medium mb-8">
            Join YogaZen community and connect with yoga enthusiasts worldwide
          </h2>
        </div>
        
        <TestimonialSlider/>
        <ServicesSection/>

       

        {/* Membership Plans */}
        <section className="py-12 md:py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12">Choose your membership plan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                  className="border border-gray-200 rounded-lg p-4 md:p-6"
                >
                  <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-4">{plan.name}</h3>
                  <p className="text-xl md:text-2xl font-bold mb-4 md:mb-6">${plan.price}/ month</p>
                  
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? (
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                        <span className="text-sm md:text-base">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-2 px-4 rounded transition-colors ${
                    index === 1 ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white border border-gray-300 hover:bg-gray-50'
                  }`}>
                    {plan.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}

const plans = [
  {
    name: "Basic",
    price: "19",
    features: [
      { text: "Access to group classes", included: true },
      { text: "Private coaching sessions", included: false },
      { text: "Meditation workshops", included: false },
    ],
    buttonText: "Choose Basic"
  },
  {
    name: "Premium",
    price: "39",
    features: [
      { text: "Access to group classes", included: true },
      { text: "Private coaching sessions", included: true },
      { text: "Meditation workshops", included: true },
    ],
    buttonText: "Choose Premium"
  },
  {
    name: "Elite",
    price: "59",
    features: [
      { text: "Unlimited group classes", included: true },
      { text: "Unlimited private sessions", included: true },
      { text: "Exclusive meditation retreats", included: true },
    ],
    buttonText: "Choose Elite"
  }
];