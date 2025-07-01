import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CallToAction from './services/CallToAction';
import WhyChoose from './services/WhyChoose';
import Industries from './services/Industries';
import Process from './services/Process';
import Offer from './services/Offer';
import HeroCard from './services/HeroCard';
import Header from './services/Header';

function Services() {
  // Animation controls for sections
  const controlsHeader = useAnimation();
  const controlsHeroCard = useAnimation();
  const controlsOffer = useAnimation();
  const controlsProcess = useAnimation();
  const controlsIndustries = useAnimation();
  const controlsWhyChoose = useAnimation();
  const controlsCallToAction = useAnimation();

  // Intersection observers for sections
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [heroCardRef, heroCardInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [offerRef, offerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [callToActionRef, callToActionInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) controlsHeader.start("visible");
  }, [headerInView, controlsHeader]);

  useEffect(() => {
    if (heroCardInView) controlsHeroCard.start("visible");
  }, [heroCardInView, controlsHeroCard]);

  useEffect(() => {
    if (offerInView) controlsOffer.start("visible");
  }, [offerInView, controlsOffer]);

  useEffect(() => {
    if (processInView) controlsProcess.start("visible");
  }, [processInView, controlsProcess]);

  useEffect(() => {
    if (industriesInView) controlsIndustries.start("visible");
  }, [industriesInView, controlsIndustries]);

  useEffect(() => {
    if (whyChooseInView) controlsWhyChoose.start("visible");
  }, [whyChooseInView, controlsWhyChoose]);

  useEffect(() => {
    if (callToActionInView) controlsCallToAction.start("visible");
  }, [callToActionInView, controlsCallToAction]);

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

  const backgroundAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id='services' className="min-h-screen bg-isgs-black pt-24 pb-16 relative overflow-hidden">
      {/* Enhanced Background decorative elements with animations */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="absolute inset-0"
      >
        <motion.div 
          variants={backgroundAnimation}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-blue-500/15 to-blue-500/5 blur-[120px] opacity-40"
        />
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.6, x: -100 },
            visible: { 
              opacity: 0.4, 
              scale: 1, 
              x: 0,
              transition: { 
                duration: 2.5, 
                delay: 0.5,
                ease: "easeOut"
              }
            }
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/12 to-blue-500/6 blur-[150px] opacity-40"
        />
        <motion.div 
          variants={{
            hidden: { opacity: 0, rotate: 0, scale: 0.5 },
            visible: { 
              opacity: 0.6, 
              rotate: 45, 
              scale: 1,
              transition: { 
                duration: 1.5, 
                delay: 1
              }
            }
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [45, 55, 45]
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-0 w-24 h-24 bg-gradient-to-br from-isgs-blue-500/30 to-isgs-dark opacity-60 transform-gpu"
        />

        {/* Additional floating elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [-15, 15, -15],
              x: [-8, 8, -8]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-3 bg-blue-500/20 rounded-full blur-sm"
            style={{
              top: `${25 + i * 15}%`,
              right: `${10 + i * 20}%`
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header with animation */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={controlsHeader}
          variants={fadeInUp}
        >
          <Header />
        </motion.div>

        {/* Custom Software Development */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="relative space-y-24">
            {/* Hero Card with animation */}
            <motion.div
              ref={heroCardRef}
              initial="hidden"
              animate={controlsHeroCard}
              variants={fadeInUp}
            >
              <HeroCard />
            </motion.div>

            {/* What We Offer Section - with hoverable cards */}
            <motion.div
              ref={offerRef}
              initial="hidden"
              animate={controlsOffer}
              variants={fadeInUp}
            >
              <Offer />
            </motion.div>

            {/* Our Process */}
            <motion.div
              ref={processRef}
              initial="hidden"
              animate={controlsProcess}
              variants={fadeInUp}
            >
              <Process />
            </motion.div>

            {/* Industries We Serve */}
            <motion.div
              ref={industriesRef}
              initial="hidden"
              animate={controlsIndustries}
              variants={fadeInUp}
            >
              <Industries />
            </motion.div>

            {/* Why Choose ISGS */}
            <motion.div
              ref={whyChooseRef}
              initial="hidden"
              animate={controlsWhyChoose}
              variants={fadeInUp}
            >
              <WhyChoose />
            </motion.div>

            {/* Call to Action */}
            <motion.div
              ref={callToActionRef}
              initial="hidden"
              animate={controlsCallToAction}
              variants={fadeInUp}
            >
              <CallToAction />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced CSS for smooth scrolling and animations */}
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

        /* Custom float animation */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Services;


