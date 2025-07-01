import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import isgs from '../public/assets/isgs_logo.png';

function Footer() {
  return (
    <footer className="bg-isgs-dark border-t border-isgs-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              {/* Replace with your actual logo */}
              <div className="w-10 h-10  rounded-md flex items-center justify-center mr-3">
                <Image
                  src={isgs}
                  alt='isgs logo' />
              </div>
              <span className="text-isgs-white text-xl font-bold">ISGS</span>
            </div>

            <p className="text-isgs-silver mb-6">
              Imaginative. Strong. Global. Sustainable. Building impactful, future-ready solutions for education and beyond.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/isgs_tech/?igsh=MW1pcWdjZGZpZDMzaQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-isgs-charcoal flex items-center justify-center hover:bg-isgs-graphite transition-colors"
              >
                <FaInstagram className="text-isgs-smoke" size={16} />
              </a>

              <a
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-isgs-charcoal flex items-center justify-center hover:bg-isgs-graphite transition-colors"
              >
                <FaLinkedin className="text-isgs-smoke" size={16} />
              </a>

              <a
                href="https://x.com/ISGS_TECH?t=o2yGn7MtSsB4q_vL4aw8wg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-isgs-charcoal flex items-center justify-center hover:bg-isgs-graphite transition-colors"
              >
                <FaTwitter className="text-isgs-smoke" size={16} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-isgs-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-isgs-smoke hover:text-isgs-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-isgs-smoke hover:text-isgs-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-isgs-smoke hover:text-isgs-white transition-colors">Products</Link></li>
              <li><Link href="/services" className="text-isgs-smoke hover:text-isgs-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-isgs-smoke hover:text-isgs-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-isgs-white font-semibold text-lg mb-5">Our Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-isgs-smoke hover:text-isgs-white transition-colors">Qodee</Link></li>
              <li><Link href="/services" className="text-isgs-smoke hover:text-isgs-white transition-colors">Custom Development</Link></li>
            </ul>

            <div className="mt-6">
              <Link href="/contact">
                <button className="px-5 py-2 bg-isgs-white text-isgs-black text-sm font-medium rounded-md hover:bg-isgs-smoke transition-colors">
                  Get a Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-isgs-white font-semibold text-lg mb-5">Contact Us</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-isgs-smoke mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:isgstech.official@gmail.com" className="text-isgs-smoke hover:text-isgs-white transition-colors">
                  isgstech.official@gmail.com
                </a>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-isgs-smoke mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+916397651800" className="text-isgs-smoke hover:text-isgs-white transition-colors">
                  +91 63976 51800
                </a>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-isgs-smoke mt-1 mr-3 flex-shrink-0" />
                <p className="text-isgs-smoke">
                  677, Prahalad Vatika, Budhana Gate, Meerut, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-isgs-charcoal">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-isgs-silver text-sm">
              © {new Date().getFullYear()} ISGS Tech Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;