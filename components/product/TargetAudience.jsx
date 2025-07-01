import React from 'react'

export default function TargetAudience() {
  return (
     <div className="mb-32">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">Target Audience</h3>
            </div>
            
            <div className="bg-isgs-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-isgs-charcoal/50 relative overflow-hidden">
              {/* Background decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="flex items-center bg-gradient-to-r from-isgs-charcoal/30 to-transparent p-4 rounded-xl backdrop-blur-sm group hover:from-blue-500/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-isgs-dark flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="text-isgs-smoke group-hover:text-blue-300 transition-colors duration-300">Students in schools and colleges</span>
                </div>
                
                <div className="flex items-center bg-gradient-to-r from-isgs-charcoal/30 to-transparent p-4 rounded-xl backdrop-blur-sm group hover:from-blue-500/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-isgs-dark flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-isgs-smoke group-hover:text-blue-300 transition-colors duration-300">Coaching institutes and training centers</span>
                </div>
                
                <div className="flex items-center bg-gradient-to-r from-isgs-charcoal/30 to-transparent p-4 rounded-xl backdrop-blur-sm group hover:from-blue-500/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-isgs-dark flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-isgs-smoke group-hover:text-blue-300 transition-colors duration-300">Teachers and mentors</span>
                </div>
                
                <div className="flex items-center bg-gradient-to-r from-isgs-charcoal/30 to-transparent p-4 rounded-xl backdrop-blur-sm group hover:from-blue-500/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-isgs-dark flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-isgs-smoke group-hover:text-blue-300 transition-colors duration-300">EdTech platforms and content creators</span>
                </div>
                
                <div className="flex items-center bg-gradient-to-r from-isgs-charcoal/30 to-transparent p-4 rounded-xl backdrop-blur-sm group hover:from-blue-500/10 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-isgs-dark flex items-center justify-center mr-4 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-isgs-smoke group-hover:text-blue-300 transition-colors duration-300">Universities and academic boards</span>
                </div>
              </div>
            </div>
          </div>
  )
}
