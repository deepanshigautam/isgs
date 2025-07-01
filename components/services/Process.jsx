import React from 'react'
import { FaRocket, FaPuzzlePiece, FaPalette, FaLaptopCode } from 'react-icons/fa';


export default function Process() {
  return (
     <div className="mb-32">
              <div className="flex items-center mb-10">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 text-blue-400">
                  <FaRocket className="text-2xl" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">Our Process</h3>
              </div>
              
              <p className="text-isgs-silver text-xl mb-14 max-w-3xl">
                We follow a clear, collaborative approach from concept to completion to ensure your vision becomes reality:
              </p>
              
              <div className="relative">
                {/* Desktop timeline */}
                <div className="hidden md:block">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-blue-500/10"></div>
                  
                  <div className="grid grid-cols-2 gap-16">
                    {/* Consultation - left */}
                    <div className="relative flex justify-end group">
                      <div className="w-full max-w-md bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-2xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                        <h4 className="text-2xl font-bold text-isgs-white mb-4 flex items-center">
                          <span className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500/20 transition-all duration-300">
                            <FaPuzzlePiece className="text-xl" />
                          </span>
                          Consultation
                        </h4>
                        <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                          We understand your goals, audience, and desired outcomes through in-depth discovery sessions that clarify project scope and success metrics.
                        </p>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute top-1/3 -right-8 transform translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-3 bg-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="w-6 h-6 bg-isgs-black rounded-full border-4 border-blue-500 relative z-10"></div>
                          <div className="absolute top-1/2 transform -translate-y-1/2 right-8 w-8 h-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty right cell for first row */}
                    <div></div>
                    
                    {/* Empty left cell for second row */}
                    <div></div>
                    
                    {/* Design - right */}
                    <div className="relative flex justify-start group">
                      <div className="w-full max-w-md bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-2xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                        <h4 className="text-2xl font-bold text-isgs-white mb-4 flex items-center">
                          <span className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500/20 transition-all duration-300">
                            <FaPalette className="text-xl" />
                          </span>
                          Design
                        </h4>
                        <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                          Wireframes, user flows, and UI/UX tailored to your needs, focused on intuitive experiences and educational effectiveness.
                        </p>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute top-1/3 -left-8 transform -translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-3 bg-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="w-6 h-6 bg-isgs-black rounded-full border-4 border-blue-500 relative z-10"></div>
                          <div className="absolute top-1/2 transform -translate-y-1/2 left-8 w-8 h-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Development - left */}
                    <div className="relative flex justify-end group">
                      <div className="w-full max-w-md bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-2xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                        <h4 className="text-2xl font-bold text-isgs-white mb-4 flex items-center">
                          <span className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500/20 transition-all duration-300">
                            <FaLaptopCode className="text-xl" />
                          </span>
                          Development
                        </h4>
                        <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                          Agile and efficient development with continuous feedback loops ensuring your solution evolves with your requirements.
                        </p>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute top-1/3 -right-8 transform translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-3 bg-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="w-6 h-6 bg-isgs-black rounded-full border-4 border-blue-500 relative z-10"></div>
                          <div className="absolute top-1/2 transform -translate-y-1/2 right-8 w-8 h-1 bg-gradient-to-r from-transparent to-blue-500/50"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty right cell for third row */}
                    <div></div>
                    
                    {/* Empty left cell for fourth row */}
                    <div></div>
                    
                    {/* Deployment - right */}
                    <div className="relative flex justify-start group">
                      <div className="w-full max-w-md bg-gradient-to-br from-isgs-dark to-isgs-black p-8 rounded-2xl border border-isgs-charcoal group-hover:border-blue-500/30 transition-all duration-500 shadow-xl">
                        <h4 className="text-2xl font-bold text-isgs-white mb-4 flex items-center">
                          <span className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500/20 transition-all duration-300">
                            <FaRocket className="text-xl" />
                          </span>
                          Deployment
                        </h4>
                        <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                          End-to-end support in launching, scaling, and maintaining your product with ongoing optimization and support.
                        </p>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="absolute top-1/3 -left-8 transform -translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-3 bg-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="w-6 h-6 bg-isgs-black rounded-full border-4 border-blue-500 relative z-10"></div>
                          <div className="absolute top-1/2 transform -translate-y-1/2 left-8 w-8 h-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile timeline */}
                <div className="block md:hidden">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-blue-500/10"></div>
                  
                  <div className="space-y-12">
                    {/* Consultation */}
                    <div className="relative pl-16">
                      {/* Timeline dot */}
                      <div className="absolute left-4 top-4 transform -translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-30"></div>
                          <div className="w-5 h-5 bg-isgs-black rounded-full border-3 border-blue-500 relative z-10"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-isgs-dark to-isgs-black p-6 rounded-xl border border-isgs-charcoal shadow-lg">
                        <h4 className="text-xl font-bold text-isgs-white mb-3 flex items-center">
                          <span className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-3">
                            <FaPuzzlePiece className="text-lg" />
                          </span>
                          Consultation
                        </h4>
                        <p className="text-isgs-silver">
                          We understand your goals, audience, and desired outcomes through discovery sessions.
                        </p>
                      </div>
                    </div>
                    
                    {/* Design */}
                    <div className="relative pl-16">
                      {/* Timeline dot */}
                      <div className="absolute left-4 top-4 transform -translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-30"></div>
                          <div className="w-5 h-5 bg-isgs-black rounded-full border-3 border-blue-500 relative z-10"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-isgs-dark to-isgs-black p-6 rounded-xl border border-isgs-charcoal shadow-lg">
                        <h4 className="text-xl font-bold text-isgs-white mb-3 flex items-center">
                          <span className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-3">
                            <FaPalette className="text-lg" />
                          </span>
                          Design
                        </h4>
                        <p className="text-isgs-silver">
                          Wireframes, user flows, and UI/UX tailored to your educational needs.
                        </p>
                      </div>
                    </div>
                    
                    {/* Development */}
                    <div className="relative pl-16">
                      {/* Timeline dot */}
                      <div className="absolute left-4 top-4 transform -translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-30"></div>
                          <div className="w-5 h-5 bg-isgs-black rounded-full border-3 border-blue-500 relative z-10"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-isgs-dark to-isgs-black p-6 rounded-xl border border-isgs-charcoal shadow-lg">
                        <h4 className="text-xl font-bold text-isgs-white mb-3 flex items-center">
                          <span className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-3">
                            <FaLaptopCode className="text-lg" />
                          </span>
                          Development
                        </h4>
                        <p className="text-isgs-silver">
                          Agile and efficient development with continuous feedback loops.
                        </p>
                      </div>
                    </div>
                    
                    {/* Deployment */}
                    <div className="relative pl-16">
                      {/* Timeline dot */}
                      <div className="absolute left-4 top-4 transform -translate-x-1/2">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-30"></div>
                          <div className="w-5 h-5 bg-isgs-black rounded-full border-3 border-blue-500 relative z-10"></div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-isgs-dark to-isgs-black p-6 rounded-xl border border-isgs-charcoal shadow-lg">
                        <h4 className="text-xl font-bold text-isgs-white mb-3 flex items-center">
                          <span className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mr-3">
                            <FaRocket className="text-lg" />
                          </span>
                          Deployment
                        </h4>
                        <p className="text-isgs-silver">
                          End-to-end support in launching, scaling, and maintaining your product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
