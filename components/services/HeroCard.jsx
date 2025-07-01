import React from 'react'
import { 
  
  FaRocket, 

  FaMobile,
  FaBrain,
  
  FaChartBar,
  FaCode,
  
  FaLaptopCode,
 
} from 'react-icons/fa';

export default function HeroCard() {
  return (
    <div className="bg-gradient-to-br from-isgs-dark/90 to-isgs-black border border-isgs-charcoal/50 p-12 rounded-3xl shadow-2xl mb-20 backdrop-blur-sm relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full opacity-70"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 border border-blue-500/20 rounded-full opacity-40"></div>
              
              <div className="flex flex-col md:flex-row gap-16 items-center relative z-10">
                <div className="md:w-3/5">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 text-blue-400">
                      <FaCode className="text-2xl" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-isgs-white">
                      Custom Software Development
                    </h2>
                  </div>
                  
                  <p className="text-isgs-silver text-xl leading-relaxed mb-8">
                    At ISGS, we don't just build products—we craft <span className="text-isgs-white">solutions tailored to your needs</span>. 
                    Whether you're a school, startup, NGO, or enterprise looking to create impactful
                    tech tools, we bring your ideas to life with <span className="text-blue-400">scalable, intelligent, and reliable</span> development services.
                  </p>
                  
                  <div className="flex gap-4">
                    <div className="px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-isgs-smoke text-sm flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                      Full-Stack Development
                    </div>
                    <div className="px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-isgs-smoke text-sm flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                      AI Integration
                    </div>
                    <div className="px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-isgs-smoke text-sm flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                      EdTech Focus
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/5 flex justify-center">
                  <div className="relative w-64 h-64">
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                        <FaMobile />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 animate-spin-slow-reverse">
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                        <FaLaptopCode />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 animate-spin-slow" style={{animationDelay: '0.5s'}}>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                        <FaBrain />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 animate-spin-slow-reverse" style={{animationDelay: '0.7s'}}>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                        <FaChartBar />
                      </div>
                    </div>
                    
                    {/* Center element */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-400/10 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-isgs-dark border border-isgs-charcoal flex items-center justify-center p-4">
                          <FaRocket className="text-5xl text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
