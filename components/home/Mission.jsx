import React from 'react';

export default function Mission() {
  return (
    <div className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative text watermark */}
        <div className="absolute top-10 left-0 w-full h-full">
          <div className="max-w-6xl h-full mx-auto relative">
            <div className="absolute left-10 top-10 text-[150px] font-bold text-isgs-dark select-none opacity-10 animate-pulse">
              ISGS
            </div>
          </div>
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-isgs-blue-500/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-isgs-charcoal/20 rounded-full blur-2xl"></div>
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-isgs-silver/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-isgs-silver/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-8 group cursor-pointer">
            <div className="relative">
              <span className="text-isgs-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300">🎯</span>
              <div className="absolute inset-0 bg-isgs-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase group-hover:text-isgs-blue-300 transition-colors duration-300">
              Our Purpose
            </h2>
            <div className="ml-4 w-12 h-px bg-gradient-to-r from-isgs-blue-500 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-isgs-white mb-6 leading-tight">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-isgs-blue-400 to-isgs-blue-200">&</span> Vision
          </h2>
          
        
        </div>
        
        {/* Enhanced Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-12 px-10">
          {/* Enhanced Mission Card */}
          <div className="relative group">
            {/* Background glow effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-isgs-blue-500/10 via-transparent to-isgs-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-isgs-dark/90 to-isgs-charcoal/90 backdrop-blur-xl p-10 rounded-2xl border border-isgs-charcoal/50 shadow-2xl group-hover:shadow-isgs-blue-500/10 group-hover:-translate-y-2 transition-all duration-500">
              {/* Icon with enhanced styling */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-isgs-blue-500/20 to-isgs-blue-600/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border border-isgs-blue-500/30">
                  <svg className="w-10 h-10 text-isgs-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-isgs-blue-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-isgs-white mb-3 group-hover:text-isgs-blue-300 transition-colors duration-300">
                    Our Mission
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-isgs-blue-500 to-isgs-blue-300 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
                
                <p className="text-isgs-silver text-lg leading-relaxed group-hover:text-isgs-smoke transition-colors duration-300">
                  To deliver{' '}
                  <span className="text-isgs-white font-semibold relative group/word">
                    <span className="relative z-10">intelligent</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover/word:h-2 transition-all duration-300"></span>
                  </span>,{' '}
                  <span className="text-isgs-white font-semibold relative group/word">
                    <span className="relative z-10">scalable</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover/word:h-2 transition-all duration-300"></span>
                  </span>, and{' '}
                  <span className="text-isgs-white font-semibold relative group/word">
                    <span className="relative z-10">accessible</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover/word:h-2 transition-all duration-300"></span>
                  </span>{' '}
                  technology solutions that enrich education and foster innovation in every corner of the world.
                </p>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-8 h-8 text-isgs-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Enhanced Vision Card */}
          <div className="relative group">
            {/* Background glow effects */}
            <div className="absolute -inset-2 bg-gradient-to-r from-isgs-blue-500/10 via-transparent to-isgs-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-isgs-dark/90 to-isgs-charcoal/90 backdrop-blur-xl p-10 rounded-2xl border border-isgs-charcoal/50 shadow-2xl group-hover:shadow-isgs-blue-500/10 group-hover:-translate-y-2 transition-all duration-500">
              {/* Icon with enhanced styling */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-isgs-blue-500/20 to-isgs-blue-600/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border border-isgs-blue-500/30">
                  <svg className="w-10 h-10 text-isgs-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-isgs-blue-500 rounded-full animate-pulse delay-300"></div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-isgs-white mb-3 group-hover:text-isgs-blue-300 transition-colors duration-300">
                    Our Vision
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-isgs-blue-500 to-isgs-blue-300 rounded-full group-hover:w-24 transition-all duration-500"></div>
                </div>
                
                <p className="text-isgs-silver text-lg leading-relaxed group-hover:text-isgs-smoke transition-colors duration-300">
                  To become a{' '}
                  <span className="text-isgs-white font-semibold relative group/word">
                    <span className="relative z-10">global leader</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover/word:h-2 transition-all duration-300"></span>
                  </span>{' '}
                  in educational technology by building{' '}
                  <span className="text-isgs-white font-semibold relative group/word">
                    <span className="relative z-10">sustainable</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover/word:h-2 transition-all duration-300"></span>
                  </span>,{' '}
                  <span className="text-isgs-white font-semibold relative group/word">
                    <span className="relative z-10">inclusive</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover/word:h-2 transition-all duration-300"></span>
                  </span>, and{' '}
                  <span className="text-isgs-white font-semibold relative group/word">
                    <span className="relative z-10">impactful</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover/word:h-2 transition-all duration-300"></span>
                  </span>{' '}
                  digital platforms for the next generation.
                </p>
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-8 h-8 text-isgs-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  )
}