import React from 'react'

export default function Header() {
  return (
     <div className="text-center mb-24">
              <div className="inline-flex items-center mb-6 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-sm font-medium tracking-wider">OUR EXPERTISE</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-isgs-white mb-8 tracking-tight">
                <span className="relative inline-block">
                  <span className="relative z-10">Services</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 -z-0"></span>
                </span>
              </h1>
              
              <p className="text-isgs-silver text-xl max-w-3xl mx-auto font-light">
                Custom technology solutions designed to transform education and empower learners
              </p>
              
              <div className="flex justify-center gap-3 mt-10">
                <span className="w-3 h-3 rounded-full bg-blue-500/60"></span>
                <span className="w-3 h-3 rounded-full bg-isgs-charcoal"></span>
                <span className="w-3 h-3 rounded-full bg-isgs-charcoal"></span>
              </div>
            </div>
  )
}
