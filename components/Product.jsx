import React from 'react';

import Header from './product/Header';
import HeroSection from './product/HeroSection';

export default function Product() {
  return (
    <div id='products' className="min-h-screen bg-isgs-black pt-24 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-blue-500/5 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-isgs-charcoal rounded-full opacity-20 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <Header />

        {/* Qodee Hero Section */}
        <HeroSection />
        
      </div>


    </div>
  );
}