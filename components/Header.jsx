"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import isgs from '../public/assets/isgs_logo.png'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPath, setLoadingPath] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine if we're on the homepage
  const isHomePage = pathname === '/';
  
  // Enhanced navigation handler with loading state
  const handleNavigation = (path) => {
    // Don't navigate if we're already on that page or already loading
    if (pathname === path || isLoading) return;
    
    // Set loading state
    setIsLoading(true);
    setLoadingPath(path);
    
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Simulate loading delay (remove this setTimeout in production when using real navigation)
    setTimeout(() => {
      // Navigate using the router for programmatic navigation
      router.push(path);
      
      // Reset loading state after navigation (in real app, this might be handled by router events)
      setTimeout(() => {
        setIsLoading(false);
        setLoadingPath('');
      }, 300);
    }, 800);
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
    <>
      {/* Page transition loading indicator - Enhanced version */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md"
          >
            <motion.div 
              className="flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.19, 1.0, 0.22, 1.0] }}
            >
              <div className="relative w-24 h-24">
                {/* Outer animated ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-4 border-blue-500/10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                ></motion.div>
                
                {/* Middle animated ring */}
                <motion.div 
                  className="absolute inset-[4px] rounded-full border-2 border-blue-400/20"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                ></motion.div>
                
                {/* Inner spinning ring */}
                <motion.div 
                  className="absolute inset-[4px] rounded-full border-t-2 border-r-2 border-blue-500"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                ></motion.div>
                
                {/* Center glow */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500/20 blur-md"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                ></motion.div>
                
                {/* Logo at center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12  rounded-full flex items-center justify-center shadow-lg">
                 <Image src={isgs} alt='isgs logo'/>
                </div>
              </div>
              
              {/* Improved page name display */}
              <div className="mt-6 flex flex-col items-center">
                <motion.p 
                  className="text-xs uppercase tracking-widest text-blue-300/80 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  Navigating to
                </motion.p>
                <motion.div
                  className="relative overflow-hidden h-8 flex items-center mt-1"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <motion.p 
                    className="text-xl font-bold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {loadingPath === '/' ? 'Home' : loadingPath.replace('/', '').replace(/(^\w|\s\w)/g, m => m.toUpperCase())}
                  </motion.p>
                </motion.div>
                
                {/* Progress bar */}
                <motion.div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full mt-2 overflow-hidden w-32">
                  <motion.div 
                    className="h-full bg-blue-400"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/8 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]" 
            : "bg-transparent"
        }`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute -top-[50px] left-[10%] w-[180px] h-[80px] bg-blue-500/20 rounded-full blur-[80px] transition-opacity duration-500 ${scrolled ? 'opacity-70' : 'opacity-0'}`}></div>
          <div className={`absolute -top-[50px] right-[10%] w-[150px] h-[80px] bg-purple-500/20 rounded-full blur-[80px] transition-opacity duration-500 ${scrolled ? 'opacity-70' : 'opacity-0'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }} className="group flex items-center cursor-pointer">
                <div className="relative mr-2">
                 
                  <div className="relative w-10 h-10  rounded-full flex items-center justify-center">
                    <Image src={isgs}
                    alt='isgs logo'/>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-isgs-white text-xl font-bold tracking-wider">ISGS</span>
                  <span className="text-blue-400 text-[10px] font-medium tracking-widest -mt-1">TECHNOLOGY</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Pill style */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`hidden md:flex items-center px-3 py-1.5 rounded-full ${
                scrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-black/20 backdrop-blur-sm'
              } border border-white/10 shadow-sm`}
            >
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/products', label: 'Products' },
                { path: '/services', label: 'Services' },
              ].map((item) => (
                <div 
                  key={item.path}
                  className="relative group cursor-pointer"
                  onClick={() => handleNavigation(item.path)}
                >
                  <span className={`px-5 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full inline-block ${
                    pathname === item.path 
                      ? 'text-isgs-white' 
                      : 'text-isgs-smoke hover:text-isgs-white'
                  } ${loadingPath === item.path ? 'opacity-70' : 'opacity-100'}`}>
                    {item.label}
                    {loadingPath === item.path && (
                      <span className="ml-2 inline-block w-1.5 h-1.5">
                        <span className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></span>
                        <span className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      </span>
                    )}
                  </span>
                  {pathname === item.path && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-4/5 h-0.5 bg-blue-400/50 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                </div>
              ))}
            </motion.nav>
            
            {/* Contact button for desktop */}
            <div className="hidden md:block">
              <div 
                onClick={() => handleNavigation('/contact')}
                className="cursor-pointer"
              >
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px 2px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center px-5 py-2 overflow-hidden rounded-full group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-70"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
                  <span className="relative flex items-center text-white text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Contact Us
                    {loadingPath === '/contact' && (
                      <span className="ml-2 inline-block w-1.5 h-1.5">
                        <span className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></span>
                        <span className="absolute w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                    )}
                  </span>
                </motion.button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="relative w-10 h-10 flex items-center justify-center "
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute h-0.5 bg-isgs-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-6 -rotate-45 top-2.5' : 'w-6 rotate-0 top-0'}`}></span>
                  <span className={`absolute h-0.5 bg-isgs-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-0 opacity-0 left-3' : 'w-6 opacity-100 top-2'}`}></span>
                  <span className={`absolute h-0.5 bg-isgs-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'w-6 rotate-45 top-2.5' : 'w-6 rotate-0 top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden relative z-10 overflow-hidden"
            >
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-xl border-t border-white/10 px-5 pt-3 pb-5 space-y-2"
              >
                {[
                  { path: '/', label: 'Home' },
                  { path: '/about', label: 'About' },
                  { path: '/products', label: 'Products' },
                  { path: '/services', label: 'Services' },
                  { path: '/contact', label: 'Contact Us' }
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.15 }}
                  >
                    <div 
                      onClick={() => handleNavigation(item.path)}
                      className="block cursor-pointer"
                    >
                      <div 
                        className={`group rounded-lg px-4 py-3 flex items-center ${
                          pathname === item.path 
                            ? 'bg-white/10 text-isgs-white' 
                            : 'hover:bg-white/5 text-isgs-smoke hover:text-isgs-white'
                        }`}
                      >
                        <span className="mr-3 h-6 w-0.5 bg-blue-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top"></span>
                        <span className="text-base font-medium">{item.label}</span>
                        
                        {loadingPath === item.path && (
                          <span className="ml-auto inline-block">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping absolute"></span>
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full relative"></span>
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Social links */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 mt-4 border-t border-white/10 flex justify-center space-x-5"
                >
                  {[
                    { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", label: "Twitter" },
                    { icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.647 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.377.202 2.394.1 2.647.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z", label: "GitHub" },
                    { icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z", label: "YouTube" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-isgs-smoke hover:text-isgs-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default Header;