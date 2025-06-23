import React from 'react';
import { 
  FaPhone, 
  FaRocket, 
  FaLock, 
  FaGraduationCap, 
  FaPuzzlePiece,
  FaMobile,
  FaBrain,
  FaSchool,
  FaTools,
  FaLink,
  FaChartBar,
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaShieldAlt,
  FaRegLightbulb
} from 'react-icons/fa';

 function Services() {
  return (
    <div id='services' className="min-h-screen bg-isgs-black pt-24 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px] opacity-40"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-isgs-dark opacity-60 rotate-45 transform-gpu animate-float"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center mb-6 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-blue-400 text-sm font-medium tracking-wider">OUR EXPERTISE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-isgs-white mb-8 tracking-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Services</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 -z-0"></span>
            </span>
          </h1>
          
          <p className="text-isgs-silver text-xl max-w-3xl mx-auto font-light">
            Custom technology solutions designed to transform education and empower learners
          </p>
          
          <div className="flex justify-center gap-3 mt-10">
            <span className="w-3 h-3 rounded-full bg-blue-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-isgs-charcoal"></span>
            <span className="w-3 h-3 rounded-full bg-isgs-charcoal"></span>
          </div>
        </div>

        {/* Custom Software Development */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="relative">
            {/* Hero Card */}
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
            
            {/* What We Offer Section - with hoverable cards */}
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
            
            {/* Our Process - with interactive timeline */}
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
            
            {/* Industries We Serve - with hexagon grid */}
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
            
            {/* Why Choose ISGS - with card flip effect */}
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
            
            {/* Call to Action */}
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
          </div>
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
          `}</style>

          </div>
    );
}


        

          export default Services;
        
   
