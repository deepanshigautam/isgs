import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Intro from './about/Intro';
import Legal from './about/Legal';
import Directors from './about/Directors';
import Overview from './about/Overview';
import Mission from './about/Mission';

export default function About() {
  // Animation controls for sections
  const controlsIntro = useAnimation();
  const controlsOverview = useAnimation();
  const controlsMission = useAnimation();
  const controlsDirectors = useAnimation();
  const controlsLegal = useAnimation();

  // Intersection observers for sections
  const [introRef, introInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [directorsRef, directorsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [legalRef, legalInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) controlsIntro.start("visible");
  }, [introInView, controlsIntro]);

  useEffect(() => {
    if (overviewInView) controlsOverview.start("visible");
  }, [overviewInView, controlsOverview]);

  useEffect(() => {
    if (missionInView) controlsMission.start("visible");
  }, [missionInView, controlsMission]);

  useEffect(() => {
    if (directorsInView) controlsDirectors.start("visible");
  }, [directorsInView, controlsDirectors]);

  useEffect(() => {
    if (legalInView) controlsLegal.start("visible");
  }, [legalInView, controlsLegal]);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
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
        delayChildren: 0.1
      }
    }
  };

  return (
    <div id='about' className="min-h-screen bg-isgs-black pt-24 pb-16 overflow-hidden">
      {/* Enhanced Background elements with animations */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-isgs-blue-500/20 to-isgs-dark opacity-20 blur-3xl rounded-full"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-isgs-charcoal to-isgs-blue-500/10 opacity-10 blur-3xl rounded-full"
        />
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5
            }}
            className="absolute w-2 h-2 bg-isgs-blue-500/20 rounded-full blur-sm"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
          />
        ))}
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header with animation */}
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={controlsIntro}
          variants={fadeInUp}
        >
          <Intro />
        </motion.div>

        {/* Content Sections with staggered animations */}
        <div className="max-w-5xl mx-auto space-y-32">
          {/* Company Overview */}
          <motion.div
            ref={overviewRef}
            initial="hidden"
            animate={controlsOverview}
            variants={fadeInUp}
          >
            <Overview />
          </motion.div>

          {/* Our Mission */}
          <motion.div
            ref={missionRef}
            initial="hidden"
            animate={controlsMission}
            variants={fadeInUp}
          >
            <Mission />
          </motion.div>

          {/* Meet Our Directors */}
          <motion.div
            ref={directorsRef}
            initial="hidden"
            animate={controlsDirectors}
            variants={fadeInUp}
          >
            <Directors />
          </motion.div>

          {/* Legal Information */}
          <motion.div
            ref={legalRef}
            initial="hidden"
            animate={controlsLegal}
            variants={fadeInUp}
          >
            <Legal />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced CSS for smooth scrolling and performance */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        /* Performance optimizations */
        * {
          will-change: transform;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #1E1E1E;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3B82F6, #1D4ED8);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60A5FA, #3B82F6);
        }

        /* Smooth transitions for all elements */
        * {
          transition: transform 0.3s ease-out;
        }

        /* Performance optimizations */
        [data-scroll] {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}