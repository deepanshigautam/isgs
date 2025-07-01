import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function CallToAction() {
  return (
     <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-10 bg-blue-500/5 rounded-3xl blur-2xl"></div>
              
              <div className="bg-gradient-to-br from-isgs-dark/90 via-isgs-dark/70 to-isgs-black/90 rounded-3xl p-12 md:p-16 border border-isgs-charcoal/50 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl opacity-70"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border border-blue-500/20 opacity-40"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-blue-500/30 to-blue-400/10 flex items-center justify-center mb-6">
                    <FaPhone className="text-3xl text-blue-400" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-isgs-white mb-6">
                    Let's Build Something Great Together
                  </h3>
                  
                  <p className="text-isgs-silver text-xl mb-8">
                    Ready to turn your educational vision into reality? Let us partner with you in building
                    powerful digital solutions.
                  </p>
                  
                  <div className="bg-isgs-charcoal/30 inline-flex items-center py-3 px-8 rounded-xl backdrop-blur-sm mb-10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                      <FaPhone className="text-blue-400" />
                    </div>
                    <p className="text-isgs-white font-medium text-lg">Contact us: 6397651800</p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-8 py-4 bg-blue-500 text-isgs-white font-medium rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-3 transform hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      Request a Quote
                    </button>
                    
                    <button className="px-8 py-4 bg-transparent border border-blue-500/50 text-blue-400 font-medium rounded-xl hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      Let's Build Together
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}
