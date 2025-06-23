import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HeroSection() {
  // Animation controls for different sections
  const controlsIntro = useAnimation();
  const controlsProduct = useAnimation();
  const controlsMission = useAnimation();
  const controlsValues = useAnimation();
  const controlsCTA = useAnimation();

  // Refs for sections to track when they are in view
  const [introRef, introInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [productRef, productInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) controlsIntro.start("visible");
    if (productInView) controlsProduct.start("visible");
    if (missionInView) controlsMission.start("visible");
    if (valuesInView) controlsValues.start("visible");
    if (ctaInView) controlsCTA.start("visible");
  }, [introInView, productInView, missionInView, valuesInView, ctaInView]);

  // Animation variants for different elements
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-isgs-black">
      {/* Main Hero Section - with parallax effect */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-br from-isgs-black via-isgs-dark to-isgs-charcoal"
          ></motion.div>
          
          {/* Background ISGS full form text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-[8vw] md:text-[5vw] font-bold text-isgs-white/20 text-center leading-tight tracking-wider select-none">
              <motion.div 
                initial={{ x: -50 }} 
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >IMAGINATIVE</motion.div>
              <motion.div 
                initial={{ x: 50 }} 
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >STRONG</motion.div>
              <motion.div 
                initial={{ x: -50 }} 
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >GLOBAL</motion.div>
              <motion.div 
                initial={{ x: 50 }} 
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >SUSTAINABLE</motion.div>
            </div>
          </motion.div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-isgs-dark blur-3xl"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 10, 
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-isgs-charcoal blur-3xl"
          ></motion.div>
          
          {/* Grid pattern overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('/images/grid-pattern.png')]"
          ></motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-4xl text-center z-10"
        >
          {/* Animated reveal for heading */}
          <motion.div 
            variants={fadeInUp}
            className="overflow-hidden mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold text-isgs-white tracking-tight">
              ISGS
            </h1>
          </motion.div>
          
          {/* Full form of ISGS with gradient */}
          <motion.div 
            variants={fadeInUp}
            className="overflow-hidden mb-8"
          >
            <p className="text-lg md:text-xl font-medium text-isgs-silver">
              <span className="text-blue-300">I</span>maginative 
              <span className="text-blue-300"> S</span>trong 
              <span className="text-blue-300"> G</span>lobal 
              <span className="text-blue-300"> S</span>ustainable
            </p>
          </motion.div>
          
          {/* Tagline with gradient text */}
          <motion.p 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light mb-8 bg-gradient-to-r from-isgs-white to-isgs-smoke bg-clip-text text-transparent"
          >
            Building the Future of Education Tech
          </motion.p>
          
          {/* Stylized divider */}
          <motion.div 
            variants={fadeIn}
            className="flex justify-center mb-8"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-isgs-smoke to-transparent"
            ></motion.div>
          </motion.div>
          
          {/* Subheading with better typography */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-isgs-silver mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Innovative products. Smart services. <span className="text-isgs-white">One purpose</span> – transforming
            learning through technology.
          </motion.p>
          
          {/* Enhanced CTA buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button 
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-isgs-white text-isgs-black font-medium rounded-full hover:bg-isgs-smoke transition-all duration-300 shadow-xl flex items-center group"
            >
              <motion.span 
                whileHover={{ scale: 1.2, rotate: 20 }}
                className="mr-3 text-blue-500 transition-all duration-300"
              >🔹</motion.span>
              <span>Explore Qodee</span>
              <motion.svg 
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-4 h-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.03, borderColor: "#fff" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray hover:bg-isgs-dark/50 transition-all duration-300 flex items-center group"
            >
              <motion.span 
                whileHover={{ scale: 1.2, rotate: -20 }}
                className="mr-3 text-blue-500 transition-all duration-300"
              >🔹</motion.span>
              <span>Request a Service</span>
            </motion.button>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-isgs-silver"
            >
              <span className="text-xs uppercase tracking-widest mb-2">Scroll down</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-isgs-black via-isgs-black/90 to-transparent"></div>
      </div>
      
      {/* Introduction Section - with hover effects */}
      <motion.div 
        ref={introRef}
        initial="hidden"
        animate={controlsIntro}
        variants={fadeIn}
        className="py-28 px-4 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-isgs-dark rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-isgs-charcoal rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
        ></motion.div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            {/* Text Content with better typography */}
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center mb-6 group"
              >
                <motion.span 
                  whileHover={{ rotate: 45 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-blue-500 mr-3 text-xl"
                >🔹</motion.span>
                <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase">Introduction</h2>
              </motion.div>
              
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-isgs-white mb-8 leading-tight"
              >
                Welcome to <span className="relative inline-block">
                  <span className="relative z-10">ISGS Tech</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-500/20 -z-0"
                  ></motion.span>
                </span> Private Limited
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-isgs-silver text-lg leading-relaxed mb-10"
              >
                At ISGS, we <span className="text-isgs-white">imagine</span>, <span className="text-isgs-white">design</span>, and <span className="text-isgs-white">develop</span> technology-driven solutions that
                empower learners, educators, and institutions alike. As an EdTech company, we
                believe that meaningful innovation starts with strong foundations—and we're
                building those every day through cutting-edge platforms and personalized
                development services.
              </motion.p>
              
              {/* Stylized stats */}
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-2 gap-6 mt-12"
              >
                <motion.div 
                  variants={scaleUp}
                  whileHover={{ y: -5, borderColor: "#6B7280" }}
                  className="border border-isgs-charcoal p-5 rounded-lg transition-colors duration-300"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-isgs-white mb-1"
                  >2024</motion.div>
                  <div className="text-isgs-smoke text-sm">Founded</div>
                </motion.div>
                
                <motion.div 
                  variants={scaleUp}
                  whileHover={{ y: -5, borderColor: "#6B7280" }}
                  className="border border-isgs-charcoal p-5 rounded-lg transition-colors duration-300"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-isgs-white mb-1"
                  >24/7</motion.div>
                  <div className="text-isgs-smoke text-sm">Support</div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Visual with enhanced styling */}
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2 relative"
            >
              <motion.div 
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl"
              ></motion.div>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  rotate: -1,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Decorative elements */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300"
                ></motion.div>
                
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute top-0 right-0 w-1 bg-gradient-to-b from-blue-500 to-transparent"
                ></motion.div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-isgs-black to-transparent p-6">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-sm text-isgs-smoke"
                  >
                    Modern digital learning environments powered by ISGS tech
                  </motion.p>
                </div>
              </motion.div>
              
              {/* Decorative dots */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute -bottom-12 -right-12 grid grid-cols-4 gap-2"
              >
                {[...Array(16)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 + (i * 0.05) }}
                    className="w-2 h-2 rounded-full bg-isgs-charcoal"
                  ></motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Product Preview - with 3D card effect */}
      <motion.div 
        ref={productRef}
        initial="hidden"
        animate={controlsProduct}
        variants={fadeIn}
        className="py-28 px-4 bg-gradient-to-b from-isgs-dark to-isgs-black relative"
      >
        {/* Decorative lines */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-isgs-gray to-transparent"
          ></motion.div>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-isgs-gray to-transparent"
          ></motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            {/* Product screenshot with 3D effect */}
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2 perspective"
            >
              <motion.div 
                whileHover={{ rotateY: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-isgs-charcoal rounded-xl shadow-xl group"
              >
                {/* Browser frame styling */}
                <div className="bg-isgs-graphite rounded-t-xl p-3 flex items-center space-x-2 border-b border-isgs-black">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 bg-isgs-dark rounded-md flex-1 h-6"></div>
                </div>
                
                <div className="p-5">
                  <div className="aspect-w-16 aspect-h-9 w-full rounded-md overflow-hidden">
                    {/* Content would go here */}
                  </div>
                </div>
                
                {/* Floating features badges */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  initial={{ x: 10, y: 10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg"
                >
                  AI-Powered
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  initial={{ x: -10, y: -10, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-4 -left-4 bg-isgs-white text-isgs-black text-sm px-4 py-2 rounded-full shadow-lg"
                >
                  Real-time Coding
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Text content with enhanced typography */}
            <motion.div 
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center py-2 px-4 rounded-full bg-blue-500/10 mb-6"
              >
                <motion.span 
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  className="text-isgs-white mr-3 text-2xl"
                >💡</motion.span>
                <span className="text-blue-300 font-medium">Our Flagship Product</span>
              </motion.div>
              
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-bold text-isgs-white mb-6 leading-tight"
              >
                Qodee <span className="text-blue-400">–</span> Learn. Code. Grow.
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                className="text-isgs-silver text-lg leading-relaxed mb-10"
              >
                Qodee is our flagship coding and development platform built for students and
                educators. With <span className="text-isgs-white">real-time coding environments</span>, <span className="text-isgs-white">intelligent feedback</span>, and <span className="text-isgs-white">powerful
                learning analytics</span>, Qodee transforms traditional programming education into an
                engaging, personalized journey.
              </motion.p>
              
              {/* Animated arrow button */}
              <Link href="/products">
                <motion.div 
                  whileHover={{ y: -5, x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center px-8 py-3 bg-isgs-white text-isgs-black rounded-md hover:bg-blue-50 transition-all duration-300"
                >
                  <span className="mr-1">Explore Qodee</span>
                  <motion.svg 
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.div>
              </Link>
              
              {/* Feature tags */}
              <motion.div 
                variants={staggerContainer}
                className="flex flex-wrap mt-10 gap-3"
              >
                {["Real-time Coding", "AI Assistance", "Advanced Analytics", "Personalized Learning"].map((tag, index) => (
                  <motion.span 
                    key={tag}
                    variants={scaleUp}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(55, 65, 81, 1)" }}
                    className="px-3 py-1 bg-isgs-charcoal text-isgs-smoke rounded-full text-sm"
                    style={{ originX: 0 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Mission & Vision Section - with card flip effect */}
      <motion.div 
        ref={missionRef}
        initial="hidden"
        animate={controlsMission}
        variants={fadeIn}
        className="py-28 px-4 relative"
      >
        {/* Decorative background */}
        <div className="absolute top-10 left-0 w-full h-full">
          <div className="max-w-6xl h-full mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.2, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-10 top-10 text-[150px] font-bold text-isgs-dark select-none"
            >
              ISGS
            </motion.div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div 
              whileHover={{ x: 5 }}
              className="inline-flex items-center mb-4"
            >
              <motion.span 
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-blue-500 mr-2 text-xl"
              >🔹</motion.span>
              <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase">Our Purpose</h2>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-isgs-white"
            >
              Mission & Vision
            </motion.h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-16"
          >
            {/* Mission card with hover effect */}
            <motion.div 
              variants={scaleUp}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)" }}
              className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-10 rounded-2xl shadow-xl border border-isgs-charcoal hover:border-isgs-graphite group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6"
              >
                <svg className="w-8 h-8 text-isgs-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Our Mission</h3>
              
              <motion.div 
                initial={{ width: "3rem" }}
                whileHover={{ width: "5rem" }}
                className="h-1 bg-blue-500/50 mb-6"
              ></motion.div>
              
              <p className="text-isgs-silver text-lg leading-relaxed">
                To deliver <span className="text-isgs-white">intelligent</span>, <span className="text-isgs-white">scalable</span>, and <span className="text-isgs-white">accessible</span> technology solutions that enrich
                education and foster innovation in every corner of the world.
              </p>
            </motion.div>
            
            {/* Vision card with hover effect */}
            <motion.div 
              variants={scaleUp}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)" }}
              className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-10 rounded-2xl shadow-xl border border-isgs-charcoal hover:border-isgs-graphite group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6"
              >
                <svg className="w-8 h-8 text-isgs-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Our Vision</h3>
              
              <motion.div 
                initial={{ width: "3rem" }}
                whileHover={{ width: "5rem" }}
                className="h-1 bg-blue-500/50 mb-6"
              ></motion.div>
              
              <p className="text-isgs-silver text-lg leading-relaxed">
                To become a <span className="text-isgs-white">global leader</span> in educational technology by building <span className="text-isgs-white">sustainable</span>,
                <span className="text-isgs-white"> inclusive</span>, and <span className="text-isgs-white">impactful</span> digital platforms for the next generation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Core Values Section - with interactive cards */}
      <motion.div 
        ref={valuesRef}
        initial="hidden"
        animate={controlsValues}
        variants={fadeIn}
        className="py-28 px-4 bg-gradient-to-b from-isgs-black to-isgs-dark relative"
      >
        {/* Decorative dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 right-0 w-32 h-32 grid grid-cols-4 gap-2"
        >
          {[...Array(16)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.6 + (i * 0.03) }}
              className="w-1 h-1 rounded-full bg-isgs-smoke"
            ></motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-32 h-32 grid grid-cols-4 gap-2"
        >
          {[...Array(16)].map((_, i) => (
            <motion.div 
              key={i+16}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.6 + (i * 0.03) }}
              className="w-1 h-1 rounded-full bg-isgs-smoke"
            ></motion.div>
          ))}
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div 
              whileHover={{ x: 5 }}
              className="inline-flex items-center mb-4"
            >
              <motion.span 
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-blue-500 mr-2 text-xl"
              >🔹</motion.span>
              <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase">Who We Are</h2>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-isgs-white mb-6"
            >
              Our Core Values
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-isgs-silver text-lg max-w-2xl mx-auto"
            >
              These fundamental principles guide our decisions, shape our culture, and define our identity.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Core values cards */}
            {[
              { emoji: "💭", title: "Imaginative", text: "We believe that every great solution begins with imagination. Our creativity fuels our innovation." },
              { emoji: "💪", title: "Strong", text: "We are united by purpose and driven by commitment. Our strength lies in our people and our passion." },
              { emoji: "🌍", title: "Global", text: "Our ambition knows no boundaries. We build for a connected, tech-forward world." },
              { emoji: "♻️", title: "Sustainable", text: "We innovate with responsibility, ensuring our growth benefits both people and the planet." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                variants={scaleUp}
                whileHover={{ 
                  y: -10, 
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" 
                }}
                className="bg-gradient-to-br from-isgs-charcoal to-isgs-dark p-8 rounded-xl border border-isgs-charcoal group"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: i % 2 === 0 ? 15 : -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300"
                >
                  <motion.span 
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, delay: i, repeat: Infinity, repeatDelay: 5 }}
                    className="text-3xl"
                  >
                    {value.emoji}
                  </motion.span>
                </motion.div>
                
                <h3 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{value.title}</h3>
                
                <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Call to Action Section - with glass morphism */}
      <motion.div 
        ref={ctaRef}
        initial="hidden"
        animate={controlsCTA}
        variants={fadeIn}
        className="py-28 px-4 relative overflow-hidden"
      >
        {/* Decorative circles */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500 blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 18, delay: 2, repeat: Infinity }}
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500 blur-3xl"
        ></motion.div>
        
        <motion.div 
          variants={scaleUp}
          className="max-w-4xl mx-auto backdrop-blur-sm bg-isgs-dark/60 p-12 rounded-3xl border border-isgs-charcoal shadow-xl relative z-10"
        >
          <motion.div 
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-isgs-white mb-6 leading-tight"
            >
              Start Your Journey with ISGS
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-isgs-silver text-lg mb-0 mx-auto"
            >
              Whether you're an educator seeking tools, a student eager to learn, or a company
              looking for reliable tech partners—we're ready to build with you.
            </motion.p>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto my-10"
            ></motion.div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="/products">
              <motion.button 
                variants={scaleUp}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-isgs-white text-isgs-black font-medium rounded-full shadow-lg flex items-center"
              >
                <motion.span 
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  className="mr-3 text-blue-500"
                >🔹</motion.span>
                <span>Explore Qodee</span>
              </motion.button>
            </Link>
            
            <Link href="/services">
              <motion.button 
                variants={scaleUp}
                whileHover={{ 
                  borderColor: "rgba(96, 165, 250, 0.5)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray flex items-center"
              >
                <motion.span 
                  whileHover={{ scale: 1.2, rotate: -20 }}
                  className="mr-3 text-blue-500"
                >🔹</motion.span>
                <span>Request a Service</span>
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button 
                variants={scaleUp}
                whileHover={{ 
                  borderColor: "rgba(96, 165, 250, 0.5)",
                  backgroundColor: "rgba(59, 130, 246, 0.1)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray flex items-center"
              >
                <motion.span 
                  whileHover={{ scale: 1.2 }}
                  className="mr-3 text-blue-500"
                >🔹</motion.span>
                <span>Contact Us</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;