import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import CallToAction from './CallToAction';
import FeatureAndRoadmap from './FeatureAndRoadmap';
import TargetAudience from './TargetAudience';
import ProductDemo from './ProductDemo';
import WhoQodee from './WhoQodee';
import QodeeIntro from './QodeeIntro';

export default function HeroSection() {
  // Animation controls for sections
  const controlsIntro = useAnimation();
  const controlsWhoQodee = useAnimation();
  const controlsFeatures = useAnimation();
  const controlsTargetAudience = useAnimation();
  const controlsProductDemo = useAnimation();
  const controlsCallToAction = useAnimation();

  // Intersection observers for sections
  const [introRef, introInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [whoQodeeRef, whoQodeeInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [targetAudienceRef, targetAudienceInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [productDemoRef, productDemoInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [callToActionRef, callToActionInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) controlsIntro.start("visible");
  }, [introInView, controlsIntro]);

  useEffect(() => {
    if (whoQodeeInView) controlsWhoQodee.start("visible");
  }, [whoQodeeInView, controlsWhoQodee]);

  useEffect(() => {
    if (featuresInView) controlsFeatures.start("visible");
  }, [featuresInView, controlsFeatures]);

  useEffect(() => {
    if (targetAudienceInView) controlsTargetAudience.start("visible");
  }, [targetAudienceInView, controlsTargetAudience]);

  useEffect(() => {
    if (productDemoInView) controlsProductDemo.start("visible");
  }, [productDemoInView, controlsProductDemo]);

  useEffect(() => {
    if (callToActionInView) controlsCallToAction.start("visible");
  }, [callToActionInView, controlsCallToAction]);

  // Simple animation variant
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50,
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

  return (
    <div className="max-w-6xl mx-auto mb-32 space-y-24">
      {/* QodeeIntro with animation */}
      <motion.div
        ref={introRef}
        initial="hidden"
        animate={controlsIntro}
        variants={fadeInUp}
      >
        <QodeeIntro />
      </motion.div>
      
      {/* Who Is Qodee For - with animated hover cards */}
      <motion.div
        ref={whoQodeeRef}
        initial="hidden"
        animate={controlsWhoQodee}
        variants={fadeInUp}
      >
        <WhoQodee />
      </motion.div>
      
      {/* Key Features and Roadmap */}
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={controlsFeatures}
        variants={fadeInUp}
      >
        <FeatureAndRoadmap />
      </motion.div>
      
      {/* Target Audience */}
      <motion.div
        ref={targetAudienceRef}
        initial="hidden"
        animate={controlsTargetAudience}
        variants={fadeInUp}
      >
        <TargetAudience />
      </motion.div>
      
      {/* Screenshots - with immersive display */}
      <motion.div
        ref={productDemoRef}
        initial="hidden"
        animate={controlsProductDemo}
        variants={fadeInUp}
      >
        <ProductDemo />
      </motion.div>
      
      {/* Call To Action */}
      <motion.div
        ref={callToActionRef}
        initial="hidden"
        animate={controlsCallToAction}
        variants={fadeInUp}
      >
        <CallToAction />
      </motion.div>
    </div>
  );
}
