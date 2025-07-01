import React from 'react'
import Link from 'next/link';
import CallToAction from './CallToAction';
import FeatureAndRoadmap from './FeatureAndRoadmap';
import TargetAudience from './TargetAudience';
import ProductDemo from './ProductDemo';
import WhoQodee from './WhoQodee';
import QodeeIntro from './QodeeIntro';

export default function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto mb-32">
         <QodeeIntro/>
          
          {/* Who Is Qodee For - with animated hover cards */}
         <WhoQodee/>
          
          {/* Key Features and Roadmap */}
          <FeatureAndRoadmap/>
          
          
          {/* Target Audience */}
         <TargetAudience/>
          
          {/* Screenshots - with immersive display */}
         <ProductDemo/>
          
          {/* Call To Action */}
          <CallToAction/>
        </div>
  )
}
