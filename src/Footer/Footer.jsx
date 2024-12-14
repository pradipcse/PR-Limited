import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Company Information */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-extrabold text-yellow-400">PR-Limited</h2>
          <p className="text-lg mt-2">Leading the software revolution with innovation, excellence, and dedication.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2">Email: <a href="mailto:contact@pr-limited.com" className="text-yellow-400">contact@pr-limited.com</a></p>
          <p className="mt-1">Phone: <span className="text-yellow-400">(123) 456-7890</span></p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-700 text-center py-4 mt-6">
        <p className="text-sm">© {new Date().getFullYear()} PR-Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
