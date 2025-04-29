// components/sidebar.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeSection, setActiveSection] = useState('mission');
  
  const menuItems = [
    { id: 'about', label: 'About Us', icon: 'home' },
    { id: 'schedule', label: 'Schedule', icon: 'calendar' },
    { id: 'excercises', label: 'Exercises', icon: 'dumbbell' },
    { id: 'blogs', label: 'Blog', icon: 'document' },
    { id: 'contact', label: 'Help & Contact', icon: 'question' },
    { id: 'settings', label: 'Settings', icon: 'gear' }
  ];
  
  const yogaClasses = [
    { id: 'beginner', title: 'Beginner Routines', description: 'Get started with yoga', hasPlus: true },
    { id: 'mindfulness', title: 'Mindfulness Practice', description: 'Calm your mind and body', hasPlus: true },
    { id: 'advanced', title: 'Advance Poses', description: 'Challenge yourself with advanced poses', hasPlus: true },
    { id: 'wellness', title: 'Wellness Tips', description: 'Stay healthy and balanced', hasPlus: true },
    { id: 'morning', title: 'Morning Energizers', description: 'Start your day with energy and focus', hasPlus: true },
    { id: 'evening', title: 'Evening Relaxation', description: 'Unwind and sleep better', hasPlus: true }
  ];
  
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'home':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      case 'dumbbell':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 2C3.567 2 2 3.567 2 5.5S3.567 9 5.5 9h9c1.933 0 3.5-1.567 3.5-3.5S16.433 2 14.5 2h-9zM5.5 7C4.672 7 4 6.328 4 5.5S4.672 4 5.5 4h9c.828 0 1.5.672 1.5 1.5S15.328 7 14.5 7h-9z" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case 'question':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        );
      case 'gear':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  // If sidebar is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-0 z-50 flex w-full md:w-auto">
      {/* Main sidebar container */}
      <div className="flex flex-row w-full md:w-auto">
        {/* Left sidebar with menu */}
        <div className="bg-purple-600 text-white w-64 p-4 flex flex-col h-screen">
          {/* Logo section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <span className="text-xl font-semibold">Yoga Zen</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu items */}
          <nav className="flex-grow">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link href={`/${item.id}`}>
                    <div className="flex items-center px-4 py-3 text-white hover:bg-purple-700 rounded-lg">
                      <span className="mr-3">
                        {getIcon(item.icon)}
                      </span>
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Bottom section */}
          <div className="mt-auto">
            <button className="w-full bg-purple-800 text-white py-2 rounded-lg">
              Join class
            </button>
            <div className="flex justify-between mt-4 text-sm text-white/70">
              <button>Log out</button>
            </div>
          </div>
        </div>
        
        {/* Right content area */}
        <div className="bg-white flex-grow p-6 h-screen overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">Mission & Values</h2>
          <p className="text-sm text-gray-500 mb-8">Learn wisdom to cleanse your mind</p>
          
          {/* Yoga classes/routines */}
          <div className="space-y-4">
            {yogaClasses.map((yogaClass) => (
              <div key={yogaClass.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
                  <div>
                    <h3 className="font-medium">{yogaClass.title}</h3>
                    <p className="text-sm text-gray-500">{yogaClass.description}</p>
                  </div>
                </div>
                {yogaClass.hasPlus && (
                  <button className="text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;