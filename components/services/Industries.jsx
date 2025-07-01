import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';

export default function Industries() {
  return (
    <div className="mb-32">
              <div className="flex items-center mb-10">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 text-blue-400">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">Industries We Serve</h3>
              </div>
              
              <p className="text-isgs-silver text-xl mb-14 max-w-3xl">
                While our core strength lies in EdTech, our solutions power a variety of industries focused on learning and development:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Industry 1 */}
                <div className="group hover:z-10">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black border border-isgs-charcoal rounded-xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px] h-full">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      📚
                    </div>
                    <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">Educational Institutions</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                      Schools, colleges, and universities seeking digital transformation
                    </p>
                  </div>
                </div>
                
                {/* Industry 2 */}
                <div className="group hover:z-10">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black border border-isgs-charcoal rounded-xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px] h-full">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      🚀
                    </div>
                    <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">Startups & Founders</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                      Early-stage ventures with innovative education concepts
                    </p>
                  </div>
                </div>
                
                {/* Industry 3 */}
                <div className="group hover:z-10">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black border border-isgs-charcoal rounded-xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px] h-full">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      🏢
                    </div>
                    <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">NGOs & Non-Profits</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                      Organizations with educational and social impact missions
                    </p>
                  </div>
                </div>
                
                {/* Industry 4 */}
                <div className="group hover:z-10">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black border border-isgs-charcoal rounded-xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px] h-full">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      🧪
                    </div>
                    <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">Training Platforms</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                      Skills development and professional upskilling services
                    </p>
                  </div>
                </div>
                
                {/* Industry 5 */}
                <div className="group hover:z-10">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black border border-isgs-charcoal rounded-xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px] h-full">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      📖
                    </div>
                    <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">Online Coaching</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                      Content creators and online educators seeking custom platforms
                    </p>
                  </div>
                </div>
                
                {/* Industry 6 */}
                <div className="group hover:z-10">
                  <div className="bg-gradient-to-br from-isgs-dark to-isgs-black border border-isgs-charcoal rounded-xl p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px] h-full">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                      💼
                    </div>
                    <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">Corporate L&D</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                      Enterprise learning and development initiatives
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}
