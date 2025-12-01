import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import CTA from './home/CTA';
import Intro from './home/Intro';
import Product from './home/Product';
import Mission from './home/Mission';
import CoreValues from './home/CoreValues';

function HeroSection() {
  // Animation controls for sections
  const controlsIntro = useAnimation();
  const controlsProduct = useAnimation();
  const controlsMission = useAnimation();
  const controlsValues = useAnimation();
  const controlsCTA = useAnimation();

  // Intersection observers for sections
  const [introRef, introInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [productRef, productInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) controlsIntro.start("visible");
  }, [introInView, controlsIntro]);

  useEffect(() => {
    if (productInView) controlsProduct.start("visible");
  }, [productInView, controlsProduct]);

  useEffect(() => {
    if (missionInView) controlsMission.start("visible");
  }, [missionInView, controlsMission]);

  useEffect(() => {
    if (valuesInView) controlsValues.start("visible");
  }, [valuesInView, controlsValues]);

  useEffect(() => {
    if (ctaInView) controlsCTA.start("visible");
  }, [ctaInView, controlsCTA]);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Simple animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInUpSection = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
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
    <div className="bg-isgs-black overflow-hidden w-full ">
      {/* Main Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden ">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 ">
          {/* Animated gradient background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-br from-isgs-black via-isgs-dark to-isgs-charcoal"
          />

          {/* Background ISGS full form text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-[8vw] md:text-[5vw] font-bold text-isgs-white/20 text-center leading-tight tracking-wider select-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >IMAGINATIVE</motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >STRONG</motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >GLOBAL</motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >SUSTAINABLE</motion.div>
            </div>
          </motion.div>

          {/* Enhanced floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-isgs-blue-500/10 to-isgs-dark blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 10,
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-isgs-charcoal to-isgs-blue-500/5 blur-3xl"
            />
          </div>

          {/* Grid pattern overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-center"
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-4xl text-center z-10 px-4"
        >
          {/* Main heading - keeping original size */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden mb-6  lg:mt-0 md:mt-0 mt-12"
          >
            <h1 className="text-6xl md:text-8xl font-extrabold text-isgs-white tracking-tight">
              ISGS
            </h1>
          </motion.div>

          {/* Enhanced full form with better styling */}
          <motion.div
            variants={fadeInUp}
            className="overflow-hidden mb-8"
          >
            <p className="text-lg md:text-xl font-medium text-isgs-silver">
              <span className="text-isgs-blue-400">I</span>maginative{' '}
              <span className="text-isgs-blue-400">S</span>trong{' '}
              <span className="text-isgs-blue-400">G</span>lobal{' '}
              <span className="text-isgs-blue-400">S</span>ustainable
            </p>
          </motion.div>

          {/* Enhanced tagline - keeping original size */}
          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-isgs-white to-isgs-smoke"
          >
            Building the Future of Education Tech
          </motion.p>

          {/* Enhanced stylized divider */}
          <motion.div
            variants={fadeIn}
            className="flex justify-center mb-8"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-isgs-blue-500/50 to-transparent"
            />
          </motion.div>

          {/* Subheading - keeping original size */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-isgs-silver mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Innovative products. Smart services. <span className="text-isgs-white">One purpose</span> – transforming
            learning through technology.
          </motion.p>

          {/* Enhanced CTA buttons with proper links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* Explore Qodee Button */}
            <motion.a
              href="https://qodeefront-sxuy.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-isgs-white text-isgs-black font-medium rounded-full hover:bg-isgs-smoke transition-all duration-300 shadow-xl flex items-center group"
            >
              <motion.span
                whileHover={{ scale: 1.2, rotate: 20 }}
                className="mr-3 text-isgs-blue-500 transition-all duration-300"
              >🚀</motion.span>
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
            </motion.a>

            {/* Request Service Button */}
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.03, borderColor: "#fff" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray hover:bg-isgs-dark/50 transition-all duration-300 flex items-center group cursor-pointer"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: -20 }}
                  className="mr-3 text-isgs-blue-500 transition-all duration-300"
                >💼</motion.span>
                <span>Request a Service</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-auto"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-isgs-silver cursor-pointer"
              onClick={() => {
                document.querySelector('#intro-section')?.scrollIntoView({ 
                  behavior: 'smooth'
                });
              }}
            >
              <span className="text-xs uppercase tracking-widest mb-2">Scroll down</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-isgs-black via-isgs-black/90 to-transparent" />
      </div>

      {/* Sections with simple scroll animations */}
      <motion.div
        id="intro-section"
        ref={introRef}
        initial="hidden"
        animate={controlsIntro}
        variants={fadeInUpSection}
      >
        <Intro />
      </motion.div>

      <motion.div
        ref={productRef}
        initial="hidden"
        animate={controlsProduct}
        variants={fadeInUpSection}
      >
        <Product />
      </motion.div>

      <motion.div
        ref={missionRef}
        initial="hidden"
        animate={controlsMission}
        variants={fadeInUpSection}
      >
        <Mission />
      </motion.div>

      <motion.div
        ref={valuesRef}
        initial="hidden"
        animate={controlsValues}
        variants={fadeInUpSection}
      >
        <CoreValues />
      </motion.div>

      <motion.div
        ref={ctaRef}
        initial="hidden"
        animate={controlsCTA}
        variants={fadeInUpSection}
      >
        <CTA />
      </motion.div>

      {/* Simple CSS for smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1E1E1E;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #3B82F6;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #60A5FA;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;