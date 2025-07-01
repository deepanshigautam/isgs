import React from 'react'
import { FaShieldAlt, FaGraduationCap, FaRocket, FaLock } from 'react-icons/fa';

export default function WhyChoose() {
  return (
   <div className="mb-32">
              <div className="flex items-center mb-10">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 text-blue-400">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">Why Choose ISGS?</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Reason 1 */}
                <div className="group">
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-10 group-hover:opacity-50 transition duration-700"></div>
                    <div className="relative bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 h-full flex">
                      <div className="mr-6">
                        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-green-300 transition-colors">
                          We Practice What We Build
                        </h4>
                        <p className="text-isgs-silver leading-relaxed group-hover:text-isgs-smoke transition-colors">
                          Our flagship product <span className="text-isgs-white">Qodee</span> reflects our in-house capability to build scalable, intelligent, and
                          user-friendly platforms for learners and institutions.
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-isgs-charcoal/50">
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400 mr-2">Proven Track Record</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">Dogfooding</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reason 2 */}
                <div className="group">
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-10 group-hover:opacity-50 transition duration-700"></div>
                    <div className="relative bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 h-full flex">
                      <div className="mr-6">
                        <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          <FaGraduationCap className="text-xl" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">
                          EdTech Expertise
                        </h4>
                        <p className="text-isgs-silver leading-relaxed group-hover:text-isgs-smoke transition-colors">
                          We understand the challenges of modern education and are uniquely positioned to solve them
                          with the right blend of technology and pedagogy.
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-isgs-charcoal/50">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 mr-2">Domain Knowledge</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">Educational Focus</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reason 3 */}
                <div className="group">
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-10 group-hover:opacity-50 transition duration-700"></div>
                    <div className="relative bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 h-full flex">
                      <div className="mr-6">
                        <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                          <FaRocket className="text-xl" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-purple-300 transition-colors">
                          Flexible & Open-Ended
                        </h4>
                        <p className="text-isgs-silver leading-relaxed group-hover:text-isgs-smoke transition-colors">
                          From basic websites to AI-powered engines—we're open to developing any application that
                          promotes education and learning.
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-isgs-charcoal/50">
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 mr-2">Adaptable Solutions</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">Versatile Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reason 4 */}
                <div className="group">
                  <div className="relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-10 group-hover:opacity-50 transition duration-700"></div>
                    <div className="relative bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 h-full flex">
                      <div className="mr-6">
                        <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                          <FaLock className="text-xl" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-orange-300 transition-colors">
                          Scalable & Secure
                        </h4>
                        <p className="text-isgs-silver leading-relaxed group-hover:text-isgs-smoke transition-colors">
                          We prioritize high-quality architecture, clean code, and full-stack reliability—so your product
                          grows as your user base does.
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-isgs-charcoal/50">
                          <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400 mr-2">Future-Proof</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-400">Security-Focused</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
