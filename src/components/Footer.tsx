import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-2">SoddisfAuto</h3>
            <p className="text-gray-400 italic text-lg">La realtà di guidare un sogno</p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/soddisfauto/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100065570436154&ref=_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://wa.me/393792538068" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <span>© 2025 SoddisfAuto</span>
            <span className="hidden sm:block">•</span>
            <a href="#" className="hover:text-white transition-colors">Privacy & Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;