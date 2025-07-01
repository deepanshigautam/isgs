import React from 'react'

export default function WhoQodee() {
  return (
     <div className="mb-32">
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">Who Is Qodee For?</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Students Card */}
              <div className="group">
                <div className="h-full bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:shadow-blue-500/5">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black rounded-xl p-8 h-full relative overflow-hidden">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                        🎓
                      </div>
                      
                      <h4 className="text-2xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Students</h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                        From beginners to advanced learners—Qodee provides personalized guidance to help you code with confidence.
                      </p>
                      
                      {/* Reveal on hover */}
                      <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-300">
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">Personalized Paths</span>
                          <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">Instant Feedback</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Educators Card */}
              <div className="group">
                <div className="h-full bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:shadow-blue-500/5">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black rounded-xl p-8 h-full relative overflow-hidden">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                        👨‍🏫
                      </div>
                      
                      <h4 className="text-2xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Educators</h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                        Assign tasks, track progress, and evaluate coding skills with smart tools designed for modern teaching.
                      </p>
                      
                      {/* Reveal on hover */}
                      <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-300">
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">Batch Management</span>
                          <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">Progress Tracking</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Institutions Card */}
              <div className="group">
                <div className="h-full bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-0.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:shadow-blue-500/5">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black rounded-xl p-8 h-full relative overflow-hidden">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-3xl group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                        🏫
                      </div>
                      
                      <h4 className="text-2xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Institutions</h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                        Equip classrooms with a centralized coding platform that improves outcomes and provides meaningful analytics.
                      </p>
                      
                      {/* Reveal on hover */}
                      <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-6 transition-all duration-300">
                        <div className="flex gap-2">
                          <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">Enterprise Support</span>
                          <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300">Custom Branding</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
