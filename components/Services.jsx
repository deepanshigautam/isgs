import React from 'react';

import CallToAction from './services/CallToAction';
import WhyChoose from './services/WhyChoose';
import Industries from './services/Industries';
import Process from './services/Process';
import Offer from './services/Offer';
import HeroCard from './services/HeroCard';
import Header from './services/Header';

function Services() {
  return (
    <div id='services' className="min-h-screen bg-isgs-black pt-24 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px] opacity-40"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-isgs-dark opacity-60 rotate-45 transform-gpu animate-float"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <Header />

        {/* Custom Software Development */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="relative">
            {/* Hero Card */}
            <HeroCard />


            {/* What We Offer Section - with hoverable cards */}
            <Offer />

            {/* Our Process */}
            <Process />

            {/* Industries We Serve*/}
            <Industries />

            {/* Why Choose ISGS */}
            <WhyChoose />

            {/* Call to Action */}
            <CallToAction />
          </div>
        </div>
      </div>



    </div>
  );
}




export default Services;


