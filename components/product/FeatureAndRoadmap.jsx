import React from 'react'

export default function FeatureAndRoadmap() {
  return (
    <><div className="mb-32">
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
          </div></>
  )
}
