// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-0">
      <div className="container mx-auto px-8">
        {/* Main Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-20">
          {/* Download App Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/5">
            <div className="mb-6">
              <div className="flex items-center">
                <Image 
                  src="/Green-leaves-logo-1.webp" 
                  alt="Yoga Zen Logo" 
                  width={40} 
                  height={40}
                />
                <span className="text-gray-800 font-semibold text-xl ml-2">Yoga Zen</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-base mb-4">Download our app</h4>
              <div className="flex flex-col space-y-3">
                <a href="#" className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-medium w-36 text-center">
                  App Store
                </a>
                <a href="#" className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-medium w-36 text-center">
                  Play Store
                </a>
              </div>
            </div>
          </div>

          {/* Main Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-3/5">
            {/* Learn about our mission */}
            <div>
              <h4 className="font-medium text-base mb-4">Learn about our mission</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Our Story</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Explore job opportunities</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Media assets and news</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Manage your subscriptions</Link></li>
              </ul>
            </div>

            {/* Get assistance */}
            <div>
              <h4 className="font-medium text-base mb-4">Get assistance</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Need help? Reach out to us</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Questions answered here</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Get support</Link></li>
              </ul>
            </div>

            {/* Join our yoga family */}
            <div>
              <h4 className="font-medium text-base mb-4">Join our yoga family</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Connect with us on Facebook</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Stay updated on Twitter</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Join our community on Discord</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Follow Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-8 lg:mb-0 lg:w-1/5">
              <h3 className="text-2xl font-bold mb-4">Follow</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-3/5">
              {/* Follow Column 1 */}
              <div>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Stay connected with us</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Discover new poses</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Learn about our journey</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Check out our latest posts</Link></li>
                </ul>
              </div>
              
              {/* Follow Column 2 */}
              <div>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Community updates</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Wellness inspiration</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Follow us for updates</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Connect with us on LinkedIn</Link></li>
                </ul>
              </div>
              
              {/* Follow Column 3 */}
              <div>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Read our guidelines</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-900 py-3 text-center">
        <p className="text-white text-sm">Copyright @2025</p>
      </div>
    </footer>
  );
}