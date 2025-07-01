import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import login from '../../public/assets/loginpage.png'; 

export default function Product() {
  return (
    <div className="py-32 px-4 bg-gradient-to-b from-isgs-dark via-isgs-black to-isgs-dark relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-isgs-silver/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-isgs-silver/20 to-transparent"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-isgs-blue-500/5 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-isgs-charcoal/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Enhanced Product Showcase */}
          <div className="lg:w-1/2 relative">
            {/* Main container with depth */}
            <div className="relative group">
              {/* Shadow layers for depth */}
              <div className="absolute -inset-4 bg-gradient-to-r from-isgs-blue-500/10 via-transparent to-isgs-blue-500/10 rounded-3xl blur-xl opacity-60"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-isgs-charcoal/50 to-transparent rounded-2xl blur-lg"></div>
              
              {/* Main browser mockup */}
              <div className="relative bg-gradient-to-br from-isgs-charcoal/80 to-isgs-dark/80 rounded-2xl shadow-2xl backdrop-blur-sm border border-isgs-charcoal/50 overflow-hidden">
                {/* Enhanced browser frame */}
                <div className="bg-gradient-to-r from-isgs-graphite to-isgs-charcoal p-4 flex items-center border-b border-isgs-black/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors duration-200"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors duration-200"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors duration-200"></div>
                  </div>
                  <div className="ml-6 bg-isgs-dark/60 rounded-lg px-4 py-1.5 flex-1 max-w-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-isgs-blue-500/40"></div>
                      <span className="text-isgs-silver/60 text-sm font-mono">qodee.isgstech.com</span>
                    </div>
                  </div>
                </div>
                
                {/* Image container with enhanced styling */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video w-full">
                    <Image
                      src={login}
                      alt="Qodee Platform - Learn. Code. Grow."
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-isgs-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Floating feature badges with improved design */}
              <div className="absolute -bottom-6 -right-6 group/badge">
                <div className="bg-gradient-to-r from-isgs-blue-600 to-isgs-blue-500 text-white px-5 py-2.5 rounded-full shadow-lg border border-isgs-blue-400/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">AI-Powered</span>
                    <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 group/badge">
                <div className="bg-gradient-to-r from-isgs-white to-isgs-smoke text-isgs-black px-5 py-2.5 rounded-full shadow-lg border border-isgs-silver/20 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Live Coding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Content Section */}
          <div className="lg:w-1/2 space-y-8">
            {/* Product badge */}
            <div className="inline-flex items-center">
              <div className="bg-gradient-to-r from-isgs-blue-500/10 to-isgs-blue-600/10 backdrop-blur-sm border border-isgs-blue-500/20 rounded-full px-5 py-2.5">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✨</span>
                  <span className="text-isgs-blue-300 font-medium tracking-wide">Flagship Product</span>
                </div>
              </div>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold text-isgs-white leading-tight">
                <span className="block">Qodee</span>
                <span className="block text-isgs-silver/40 text-lg font-normal tracking-widest uppercase mt-2">
                  Learn • Code • Grow
                </span>
              </h2>
              
              {/* Decorative line */}
              <div className="w-20 h-1 bg-gradient-to-r from-isgs-blue-500 to-transparent rounded-full"></div>
            </div>
            
            {/* Enhanced description */}
            <div className="space-y-6">
              <p className="text-isgs-silver text-lg leading-relaxed">
                Qodee is our flagship coding and development platform designed for the next generation of learners and educators.
              </p>
              
              <p className="text-isgs-silver/80 leading-relaxed">
                Transform traditional programming education with{' '}
                <span className="text-isgs-white font-medium relative group">
                  real-time coding environments
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>, {' '}
                <span className="text-isgs-white font-medium relative group">
                  intelligent feedback
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>, and{' '}
                <span className="text-isgs-white font-medium relative group">
                  powerful analytics
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-isgs-blue-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>.
              </p>
            </div>
            
            {/* Enhanced CTA button */}
            <div className="pt-4">
              <Link href="/products" className="group inline-block">
                <div className="relative overflow-hidden">
                  <div className="bg-gradient-to-r from-isgs-white to-isgs-smoke text-isgs-black px-8 py-4 rounded-xl font-medium transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-isgs-white/10">
                    <div className="flex items-center space-x-3">
                      <span>Explore Qodee</span>
                      <svg 
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-isgs-white/20 to-isgs-smoke/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </div>
              </Link>
            </div>
            
            {/* Enhanced feature tags */}
            <div className="pt-6">
              <div className="flex flex-wrap gap-3">
                {/*
                  Consider using a map function to render these tags for better scalability
                */}
                { [
                  { name: "Real-time Coding", icon: "⚡" },
                  { name: "AI Assistance", icon: "🤖" },
                  { name: "Advanced Analytics", icon: "📊" },
                  { name: "Personalized Learning", icon: "🎯" }
                ].map((feature, index) => (
                  <div 
                    key={feature.name}
                    className="group bg-gradient-to-r from-isgs-charcoal/50 to-isgs-charcoal/30 backdrop-blur-sm border border-isgs-charcoal hover:border-isgs-silver/30 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{feature.icon}</span>
                      <span className="text-isgs-smoke text-sm font-medium group-hover:text-isgs-white transition-colors duration-200">
                        {feature.name}
                      </span>
                    </div>
                  </div>
                )) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
