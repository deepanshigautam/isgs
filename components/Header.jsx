"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine if we're on the homepage
  const isHomePage = pathname === '/';
  
  // Simplified navigation handler
  const handleNavigation = (path) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Navigate using the router for programmatic navigation
    router.push(path);
  };

  // Handle scroll events to change header styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-isgs-black/90 backdrop-blur-md border-b border-isgs-charcoal shadow-lg" 
          : "bg-isgs-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-isgs-white text-2xl font-bold">ISGS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/"
              className={`text-isgs-smoke hover:text-isgs-white px-3 py-2 text-sm font-medium transition-colors hover:scale-105 transform ${pathname === '/' ? 'text-isgs-white' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`text-isgs-smoke hover:text-isgs-white px-3 py-2 text-sm font-medium transition-colors hover:scale-105 transform ${pathname === '/about' ? 'text-isgs-white' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/products"
              className={`text-isgs-smoke hover:text-isgs-white px-3 py-2 text-sm font-medium transition-colors hover:scale-105 transform ${pathname === '/products' ? 'text-isgs-white' : ''}`}
            >
              Products
            </Link>
            <Link 
              href="/services"
              className={`text-isgs-smoke hover:text-isgs-white px-3 py-2 text-sm font-medium transition-colors hover:scale-105 transform ${pathname === '/services' ? 'text-isgs-white' : ''}`}
            >
              Services
            </Link>
          </nav>
          
          {/* Contact button for desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-blue-500/30 rounded-md text-sm font-medium text-blue-400 bg-transparent hover:bg-blue-500/10 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-isgs-smoke hover:text-isgs-white p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-isgs-dark/80 backdrop-blur-md border-t border-isgs-charcoal">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium ${pathname === '/' ? 'text-isgs-white' : 'text-isgs-smoke hover:text-isgs-white'}`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium ${pathname === '/about' ? 'text-isgs-white' : 'text-isgs-smoke hover:text-isgs-white'}`}
            >
              About
            </Link>
            <Link 
              href="/products"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium ${pathname === '/products' ? 'text-isgs-white' : 'text-isgs-smoke hover:text-isgs-white'}`}
            >
              Products
            </Link>
            <Link 
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium ${pathname === '/services' ? 'text-isgs-white' : 'text-isgs-smoke hover:text-isgs-white'}`}
            >
              Services
            </Link>
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium ${pathname === '/contact' ? 'text-isgs-white' : 'text-isgs-smoke hover:text-isgs-white'}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;