import React from 'react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="py-28 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-5"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-3"></div>
      
      <div className="max-w-4xl mx-auto backdrop-blur-sm bg-isgs-dark/60 p-12 rounded-3xl border border-isgs-charcoal shadow-xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-isgs-white mb-6 leading-tight">
            Start Your Journey with ISGS
          </h2>
          
          <p className="text-isgs-silver text-lg mb-0 mx-auto">
            Whether you're an educator seeking tools, a student eager to learn, or a company
            looking for reliable tech partners—we're ready to build with you.
          </p>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto my-10"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="https://qodeefront-sxuy.onrender.com/" target='_blank'>
            <button className="group px-8 py-4 bg-isgs-white text-isgs-black font-medium rounded-full shadow-lg flex items-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <span className="mr-3 text-blue-500">🔹</span>
              <span>Explore Qodee</span>
            </button>
          </Link>
          
          <Link href="/services">
            <button className="group px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray flex items-center hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300">
              <span className="mr-3 text-blue-500">🔹</span>
              <span>Request a Service</span>
            </button>
          </Link>
          
          <Link href="/contact">
            <button className="group px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray flex items-center hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300">
              <span className="mr-3 text-blue-500">🔹</span>
              <span>Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
