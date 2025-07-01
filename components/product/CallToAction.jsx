import React from 'react'
import Link from 'next/link'

export default function CallToAction() {
  return (
   <div className="relative">
            {/* Background glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 blur-2xl rounded-3xl -z-10"></div>
            
            <div className="bg-gradient-to-br from-isgs-dark/90 to-isgs-black/90 border border-isgs-charcoal/50 p-12 rounded-3xl backdrop-blur-sm">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-isgs-white mb-6">
                  Get Started with Qodee
                </h3>
                
                <p className="text-isgs-silver text-xl mb-10">
                  Ready to transform your classroom, program, or platform with powerful coding tools?
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center">
                  <Link href="./contact" className="group">
                    <button className="px-8 py-4 bg-blue-500 text-isgs-white font-medium rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-3 transform hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      Get a Demo
                    </button>
                  </Link>
                  
                  <Link href="./contact" className="group">
                    <button className="px-8 py-4 bg-transparent border border-blue-500/50 text-blue-400 font-medium rounded-xl hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Talk to Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  )
}
