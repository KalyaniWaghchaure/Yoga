// components/ServicesSection.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ServicesSection = () => {
  const services = [
    {
      title: "Group Yoga Class",
      image: "./Group_yoga.jpeg", // Make sure this image exists in your public/images folder
      description: "Join our expert-led communal sessions and find your center through group yoga practices.",
    //   link: "/services/group-yoga"
    },
    {
      title: "Private Sessions",
      image: "./Private_yoga.jpg", // Make sure this image exists in your public/images folder
      description: "Get your yoga tailored to exactly what you need with personalized one-on-one sessions.",
    //   link: "/services/private-sessions"
    },
    {
      title: "Yoga Retreats",
      image: "./Yoga_R.jpeg", // Make sure this image exists in your public/images folder
      description: "Join our weekend retreats to recharge flexibility and find deeper connection with mind-body harmony.",
    //   link: "/services/retreats"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="bg-gray-300 h-60 relative">
                <Image 
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {/* <Link href={service.link}> */}
                  <a className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                    Learn more 
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                {/* </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;