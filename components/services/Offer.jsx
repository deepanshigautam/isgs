import React from 'react'
import {  
  FaPuzzlePiece,
  FaMobile,
  FaBrain,
  FaSchool,
  FaTools,
  FaLink,
  FaChartBar,
  FaRegLightbulb
} from 'react-icons/fa';


export default function Offer() {
  return (
    <div className="mb-32">
              <div className="flex items-center mb-10">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 text-blue-400">
                  <FaRegLightbulb className="text-2xl" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">What We Offer</h3>
              </div>
              
              <p className="text-isgs-silver mb-12 text-xl max-w-3xl">
                We develop end-to-end digital solutions across platforms and technologies, with a focus on educational innovation
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Mobile Applications */}
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-700"></div>
                  <div className="relative h-full bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                    {/* Decorative overlay */}
                    <div className="absolute right-0 top-0 w-28 h-28 bg-blue-500/5 rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <FaMobile className="text-2xl" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">
                        Mobile Applications
                      </h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                        Native and cross-platform apps for students, teachers, and institutions with seamless user experiences
                      </p>
                      
                      <div className="mt-6 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                        <div className="pt-4 border-t border-isgs-charcoal">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">React Native</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">Flutter</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Native iOS/Android</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* AI-Powered Solutions */}
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-700"></div>
                  <div className="relative h-full bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                    {/* Decorative overlay */}
                    <div className="absolute right-0 top-0 w-28 h-28 bg-blue-500/5 rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <FaBrain className="text-2xl" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">
                        AI-Powered Solutions
                      </h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                        Intelligent models for learning, personalization, and analytics that adapt to user needs
                      </p>
                      
                      <div className="mt-6 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                        <div className="pt-4 border-t border-isgs-charcoal">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">ML Models</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">NLP</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Predictive Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Learning Management Systems */}
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-700"></div>
                  <div className="relative h-full bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                    {/* Decorative overlay */}
                    <div className="absolute right-0 top-0 w-28 h-28 bg-blue-500/5 rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <FaSchool className="text-2xl" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">
                        Learning Management Systems
                      </h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                        Custom or white-labeled platforms for comprehensive educational content delivery
                      </p>
                      
                      <div className="mt-6 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                        <div className="pt-4 border-t border-isgs-charcoal">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">Custom LMS</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">White-label</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Integrations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Custom Tools */}
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-700"></div>
                  <div className="relative h-full bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                    {/* Decorative overlay */}
                    <div className="absolute right-0 top-0 w-28 h-28 bg-blue-500/5 rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <FaTools className="text-2xl" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">
                        Custom Tools
                      </h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                        Specialized quizzing engines, code compilers, and interactive e-learning modules
                      </p>
                      
                      <div className="mt-6 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                        <div className="pt-4 border-t border-isgs-charcoal">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">Assessment Engines</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">Code Execution</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Interactive Content</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* API Integrations */}
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-700"></div>
                  <div className="relative h-full bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                    {/* Decorative overlay */}
                    <div className="absolute right-0 top-0 w-28 h-28 bg-blue-500/5 rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <FaLink className="text-2xl" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">
                        API Integrations & Backend
                      </h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                        Robust and scalable architectures designed for security and performance at scale
                      </p>
                      
                      <div className="mt-6 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                        <div className="pt-4 border-t border-isgs-charcoal">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">RESTful APIs</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">GraphQL</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Microservices</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Analytics & Dashboards */}
                <div className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-700"></div>
                  <div className="relative h-full bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                    {/* Decorative overlay */}
                    <div className="absolute right-0 top-0 w-28 h-28 bg-blue-500/5 rounded-bl-full"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        <FaChartBar className="text-2xl" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors">
                        Analytics & Dashboards
                      </h4>
                      
                      <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors">
                        Data visualization and insights for education metrics, performance tracking, and trends
                      </p>
                      
                      <div className="mt-6 h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500">
                        <div className="pt-4 border-t border-isgs-charcoal">
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">Data Visualization</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 mr-2">Real-time Stats</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Performance Metrics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="bg-gradient-to-r from-blue-500/20 to-transparent p-0.5 rounded-2xl">
                  <div className="bg-isgs-dark/80 backdrop-blur-sm p-6 rounded-2xl flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaPuzzlePiece className="text-2xl text-blue-400" />
                    </div>
                    <p className="text-isgs-white">
                      Our focus: Any application that helps promote education, enhance learning, or streamline academic operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}
