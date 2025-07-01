import React from 'react'
import Image from 'next/image'
import login from '../../public/assets/loginpage.png' 

export default function QodeeIntro() {
  return (
    <div className="relative">
            {/* 3D Floating Product Card */}
            <div className="bg-gradient-to-br from-isgs-dark to-isgs-black p-0.5 rounded-2xl shadow-2xl mb-16 transform hover:-rotate-1 transition-transform duration-500 group">
              <div className="bg-gradient-to-br from-isgs-dark/90 to-isgs-black rounded-2xl p-12 overflow-hidden relative backdrop-blur-sm">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg text-blue-400">Q</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-isgs-white to-blue-300 text-transparent bg-clip-text">Qodee</h2>
                    </div>
                    
                    <div className="mb-8">
                      <span className="text-xl text-blue-400">The Next-Gen Coding Platform</span>
                    </div>
                    
                    <p className="text-isgs-silver text-lg leading-relaxed mb-8">
                      An <span className="text-isgs-white">AI-enabled</span> coding and development platform built for 
                      learners and educators. Designed to simplify programming education with an 
                      <span className="text-isgs-white"> interactive and personalized</span> environment where users can learn, code, debug, and grow.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-blue-500 text-isgs-white font-medium rounded-md hover:bg-blue-600 transition duration-300 shadow-lg group-hover:shadow-blue-500/20 group-hover:shadow-xl flex items-center gap-2 transform group-hover:translate-y-[-2px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Watch Demo
                      </button>
                      <button className="px-6 py-3 bg-transparent border border-blue-500/30 text-blue-400 font-medium rounded-md hover:bg-blue-500/10 transition duration-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                      <div className="relative aspect-w-16 aspect-h-9 bg-isgs-dark rounded-lg overflow-hidden shadow-2xl border border-isgs-charcoal">
                        {/* Replace with actual product image */}
                        <div className="bg-isgs-charcoal w-full h-full flex items-center justify-center">
                          <span className="text-isgs-smoke text-lg">Qodee Interface</span>
                        </div>
                        
                        {/* Browser-like top bar to make it look like an application */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-isgs-black/90 border-b border-isgs-charcoal flex items-center px-3">
                          <div className="flex gap-1.5 mr-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-1 h-3 bg-isgs-charcoal rounded-sm"></div>
                          
                        </div>
                        <Image
                          src={login}
                          alt='Qodee image'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech feature pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Real-time Coding
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                AI-Powered
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Multi-language Support
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Analytics Dashboard
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Cloud-Based
              </div>
            </div>
          </div>
  )
}
