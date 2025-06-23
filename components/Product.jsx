import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Product() {
  return (
    <div id='products' className="min-h-screen bg-isgs-black pt-24 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-blue-500/5 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-isgs-charcoal rounded-full opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center mb-6 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-blue-400 text-sm font-medium tracking-wider">SOLUTIONS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-isgs-white mb-8 tracking-tight">
            Our <span className="relative">
              <span className="relative z-10">Products</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 -z-0"></span>
            </span>
          </h1>
          
          <p className="text-isgs-silver text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Cutting-edge technology solutions designed to transform education and development
          </p>
        </div>

        {/* Qodee Hero Section */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="relative">
            {/* 3D Floating Product Card */}
            <div className="bg-gradient-to-br from-isgs-dark to-isgs-black p-0.5 rounded-2xl shadow-2xl mb-16 transform hover:-rotate-1 transition-transform duration-500 group">
              <div className="bg-gradient-to-br from-isgs-dark/90 to-isgs-black rounded-2xl p-12 overflow-hidden relative backdrop-blur-sm">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                  <div className="md:w-1/2">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-lg text-blue-400">Q</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-isgs-white to-blue-300 text-transparent bg-clip-text">Qodee</h2>
                    </div>
                    
                    <div className="mb-8">
                      <span className="text-xl text-blue-400">The Next-Gen Coding Platform</span>
                    </div>
                    
                    <p className="text-isgs-silver text-lg leading-relaxed mb-8">
                      An <span className="text-isgs-white">AI-enabled</span> coding and development platform built for 
                      learners and educators. Designed to simplify programming education with an 
                      <span className="text-isgs-white"> interactive and personalized</span> environment where users can learn, code, debug, and grow.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-blue-500 text-isgs-white font-medium rounded-md hover:bg-blue-600 transition duration-300 shadow-lg group-hover:shadow-blue-500/20 group-hover:shadow-xl flex items-center gap-2 transform group-hover:translate-y-[-2px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Watch Demo
                      </button>
                      <button className="px-6 py-3 bg-transparent border border-blue-500/30 text-blue-400 font-medium rounded-md hover:bg-blue-500/10 transition duration-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                      <div className="relative aspect-w-16 aspect-h-9 bg-isgs-dark rounded-lg overflow-hidden shadow-2xl border border-isgs-charcoal">
                        {/* Replace with actual product image */}
                        <div className="bg-isgs-charcoal w-full h-full flex items-center justify-center">
                          <span className="text-isgs-smoke text-lg">Qodee Interface</span>
                        </div>
                        
                        {/* Browser-like top bar to make it look like an application */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-isgs-black/90 border-b border-isgs-charcoal flex items-center px-3">
                          <div className="flex gap-1.5 mr-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                          </div>
                          <div className="flex-1 h-3 bg-isgs-charcoal rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech feature pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Real-time Coding
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                AI-Powered
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Multi-language Support
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Analytics Dashboard
              </div>
              <div className="px-4 py-1.5 rounded-full bg-isgs-dark text-sm text-blue-400 border border-blue-500/20 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                Cloud-Based
              </div>
            </div>
          </div>
          
          {/* Who Is Qodee For - with animated hover cards */}
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
          
          {/* Key Features - with animated icons */}
          <div className="mb-32">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">Key Features of Qodee</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex p-6 bg-isgs-dark/40 rounded-xl border border-isgs-charcoal/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="mr-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🖥</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Hands-On Coding Environment</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                      A browser-based code editor that supports real-time coding with multiple languages. No setup needed—just open and start coding.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex p-6 bg-isgs-dark/40 rounded-xl border border-isgs-charcoal/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="mr-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🤖</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-3 group-hover:text-blue-300 transition-colors duration-300">AI-Powered Assistance</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                      Get intelligent suggestions, fix errors, and receive contextual hints while coding. Qodee acts like a mentor, not just a tool.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex p-6 bg-isgs-dark/40 rounded-xl border border-isgs-charcoal/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="mr-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📊</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Learning Analytics</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                      Deep insights into coding patterns, performance trends, and areas for improvement—accessible to both students and instructors.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 4 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex p-6 bg-isgs-dark/40 rounded-xl border border-isgs-charcoal/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="mr-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📋</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Educator Dashboard</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                      Manage batches, assign tasks, and monitor progress from one central dashboard. See student growth in real time.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 5 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex p-6 bg-isgs-dark/40 rounded-xl border border-isgs-charcoal/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="mr-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">⚙️</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Automated Feedback</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                      Code evaluations are instant and based on both correctness and logic. Students get meaningful feedback—faster.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Feature 6 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative flex p-6 bg-isgs-dark/40 rounded-xl border border-isgs-charcoal/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="mr-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🔐</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Secure, Scalable & Cloud-Based</h4>
                    <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                      Accessible from anywhere, Qodee ensures data privacy and scalable access for institutions of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Roadmap - with floating cards */}
          <div className="mb-32">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">AI-Enabled Future Roadmap</h3>
            </div>
            <p className="text-isgs-silver text-lg mb-10 max-w-3xl">
              We're building Qodee to become smarter every day. Our AI-powered roadmap will continually enhance the learning experience through these upcoming features:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Roadmap item 1 */}
              <div className="p-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-xl">
                <div className="bg-isgs-dark rounded-xl p-6 h-full hover:bg-isgs-dark/80 transition-colors duration-300 flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-2">AI Mentor Bots</h4>
                    <p className="text-isgs-silver">
                      24/7 learning support with personalized virtual mentors that adapt to your coding style and learning pace
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Roadmap item 2 */}
              <div className="p-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-xl">
                <div className="bg-isgs-dark rounded-xl p-6 h-full hover:bg-isgs-dark/80 transition-colors duration-300 flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📋</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-2">Auto-Generated Quizzes</h4>
                    <p className="text-isgs-silver">
                      Smart assessments that adapt to your learning patterns and automatically generate custom practice materials
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Roadmap item 3 */}
              <div className="p-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-xl">
                <div className="bg-isgs-dark rounded-xl p-6 h-full hover:bg-isgs-dark/80 transition-colors duration-300 flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-2">Personalized Learning Paths</h4>
                    <p className="text-isgs-silver">
                      Custom curriculum sequences built using performance data to optimize your coding skill development
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Roadmap item 4 */}
              <div className="p-0.5 bg-gradient-to-r from-blue-500/30 to-transparent rounded-xl">
                <div className="bg-isgs-dark rounded-xl p-6 h-full hover:bg-isgs-dark/80 transition-colors duration-300 flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📚</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-isgs-white mb-2">Curriculum Mapping</h4>
                    <p className="text-isgs-silver">
                      Intelligent course adaptation that aligns with institutional standards while personalizing the learning experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Target Audience - visually enhanced */}
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
          
          {/* Screenshots - with immersive display */}
          <div className="mb-32">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                <span className="text-2xl">🖼</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-isgs-white">Screenshots & Demo</h3>
            </div>
            
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-transparent to-blue-500/30 rounded-2xl blur-xl opacity-50"></div>
              
              <div className="relative bg-gradient-to-br from-isgs-dark to-isgs-black p-4 md:p-8 rounded-2xl border border-isgs-charcoal shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* Main large screenshot */}
                  <div className="md:col-span-2 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-isgs-charcoal relative group">
                    {/* Replace with actual screenshot */}
                    <div className="w-full h-full flex items-center justify-center text-isgs-silver">
                      Main Dashboard View
                    </div>
                    
                    {/* Overlay with play button */}
                    <div className="absolute inset-0 bg-isgs-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Side screenshots */}
                  <div className="space-y-4 md:space-y-6">
                    {/* Screenshot 1 */}
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-isgs-charcoal relative hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-[1.02]">
                      <div className="w-full h-full flex items-center justify-center text-isgs-silver">
                        Code Editor View
                      </div>
                    </div>
                    
                    {/* Screenshot 2 */}
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-isgs-charcoal relative hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-[1.02]">
                      <div className="w-full h-full flex items-center justify-center text-isgs-silver">
                        Analytics Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <div className="text-center mt-4 text-isgs-smoke text-sm">
                Click on screenshots to view larger version or play demo video
              </div>
            </div>
          </div>
          
          {/* Call To Action */}
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
                  <Link href="/contact" className="group">
                    <button className="px-8 py-4 bg-blue-500 text-isgs-white font-medium rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-3 transform hover:-translate-y-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      Get a Demo
                    </button>
                  </Link>
                  
                  <Link href="/contact" className="group">
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
        </div>
      </div>
      
      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}