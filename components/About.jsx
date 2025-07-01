import React from 'react';
import Image from 'next/image';
import Intro from './about/Intro';
import Legal from './about/Legal';
import Directors from './about/Directors';
import Overview from './about/Overview';
import Mission from './about/Mission';

export default function About() {
  return (
    <div id='about' className="min-h-screen bg-isgs-black pt-24 pb-16">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-isgs-dark opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-isgs-dark opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <Intro/>
        

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto space-y-32">

          {/* Company Overview */}
          <Overview/>

          {/* Our Mission */}
          <Mission/>
         

          {/* Meet Our Directors  */}
         <Directors/>

          {/* Legal Information */}
          <Legal/>

        </div>
      </div>
    </div>
  );
}