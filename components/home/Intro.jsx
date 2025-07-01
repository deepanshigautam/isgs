import React from 'react';
import Image from 'next/image';
import vector from '../../public/assets/vector3.jpg';

export default function Intro() {
  return (
    <div className="py-28 px-4 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-isgs-dark rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-15 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-isgs-charcoal rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-isgs-blue-500/10 rounded-full blur-2xl opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Enhanced Text Content */}
          <div className="md:w-1/2 space-y-6">
            {/* Introduction Badge */}
            <div className="flex items-center mb-8 group cursor-pointer">
              <div className="relative">
                <span className="text-isgs-blue-500 mr-3 text-xl group-hover:scale-110 transition-transform duration-300">🔹</span>
                <div className="absolute inset-0 bg-isgs-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase group-hover:text-isgs-blue-300 transition-colors duration-300">
                Introduction
              </h2>
              <div className="ml-4 w-12 h-px bg-gradient-to-r from-isgs-blue-500 to-transparent"></div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-isgs-white mb-8 leading-tight">
              Welcome to{' '}
              <span className="relative inline-block group">
                <span className="relative z-10 text-isgs-blue-gradient">
                  ISGS Tech
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-isgs-blue-500/20 -z-0 group-hover:h-4 transition-all duration-300"></span>
                <span className="absolute -inset-1 bg-isgs-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              </span>{' '}
              <span className="block md:inline text-isgs-white">Private Limited</span>
            </h1>
            
            {/* Enhanced Description */}
            <div className="relative">
              <p className="text-isgs-silver text-lg leading-relaxed mb-10 relative z-10">
                At ISGS, we{' '}
                <span className="text-isgs-white font-semibold relative group">
                  <span className="relative z-10">imagine</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover:h-2 transition-all duration-300"></span>
                </span>,{' '}
                <span className="text-isgs-white font-semibold relative group">
                  <span className="relative z-10">design</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover:h-2 transition-all duration-300"></span>
                </span>, and{' '}
                <span className="text-isgs-white font-semibold relative group">
                  <span className="relative z-10">develop</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 group-hover:h-2 transition-all duration-300"></span>
                </span>{' '}
                technology-driven solutions that empower learners, educators, and institutions alike. 
                As an EdTech company, we believe that meaningful innovation starts with strong 
                foundations—and we're building those every day through cutting-edge platforms and 
                personalized development services.
              </p>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-isgs-blue-500/50 to-transparent"></div>
            </div>
            
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="relative group">
                <div className="border border-isgs-charcoal p-6 rounded-xl hover:border-gray-500 transition-all duration-300 bg-gradient-to-br from-isgs-charcoal/20 to-transparent backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-isgs-blue-500/10">
                  <div className="text-3xl font-bold text-isgs-white mb-2 group-hover:text-isgs-blue-300 transition-colors duration-300">
                    2024
                  </div>
                  <div className="text-isgs-smoke text-sm uppercase tracking-wide">Founded</div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-isgs-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="border border-isgs-charcoal p-6 rounded-xl hover:border-gray-500 transition-all duration-300 bg-gradient-to-br from-isgs-charcoal/20 to-transparent backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-isgs-blue-500/10">
                  <div className="text-3xl font-bold text-isgs-white mb-2 group-hover:text-isgs-blue-300 transition-colors duration-300">
                    24/7
                  </div>
                  <div className="text-isgs-smoke text-sm uppercase tracking-wide">Support</div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Visual Section */}
          <div className="md:w-1/2 relative w-full">
           
            
            {/* Image Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl border border-isgs-charcoal/50 bg-gradient-to-br from-isgs-charcoal/30 to-isgs-dark/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-isgs-blue-500/20 transition-all duration-500">
                <Image
                  src={vector}
                  alt='ISGS Tech - Modern Learning Solutions'
                  width={500}
                  height={500}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-isgs-dark/20 via-transparent to-transparent group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Image Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-isgs-dark/80 backdrop-blur-md rounded-lg p-3 border border-isgs-charcoal/50">
                    <p className="text-isgs-white text-sm font-medium">Modern Learning Ecosystem</p>
                    <p className="text-isgs-silver text-xs">Powered by ISGS Technology</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-isgs-blue-500/10 rounded-full blur-sm animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-isgs-blue-500/10 rounded-full blur-sm animate-bounce delay-700"></div>
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute bottom-0 right-0 max-w-full overflow-hidden">
              <div className="relative -bottom-8 -right-8 grid grid-cols-4 gap-2 w-auto h-auto">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-isgs-charcoal hover:bg-isgs-blue-500/50 transition-colors duration-300 hover:scale-125"
                    style={{ 
                      animationDelay: `${i * 100}ms`,
                      animation: 'pulse 2s infinite'
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Technical Stack Indicators */}
            <div className="absolute top-4 left-4 space-y-2">
              <div className="bg-isgs-dark/80 backdrop-blur-md rounded-full px-3 py-1 border border-isgs-charcoal/50">
                <span className="text-xs text-isgs-silver">EdTech Solutions</span>
              </div>
              <div className="bg-isgs-dark/80 backdrop-blur-md rounded-full px-3 py-1 border border-isgs-charcoal/50">
                <span className="text-xs text-isgs-silver">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
