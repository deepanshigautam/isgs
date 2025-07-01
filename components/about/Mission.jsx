import React from 'react'

export default function Mission() {
  return (
    <>
     <section className="relative">
            <div className="flex items-center mb-10">
              <span className="text-blue-500 mr-3 text-xl">🔹</span>
              <h2 className="text-3xl md:text-4xl font-bold text-isgs-white">Our Mission</h2>
            </div>

            {/* Large quote mark */}
            <div className="absolute text-[200px] font-serif text-isgs-charcoal opacity-20 top-20 -left-14 select-none">"</div>

            <div className="bg-gradient-to-br from-isgs-dark to-isgs-black p-12 rounded-2xl shadow-lg border border-isgs-charcoal relative">
              <p className="text-isgs-white text-2xl md:text-3xl font-light leading-relaxed italic relative z-10">
                To deliver <span className="text-blue-400 font-normal">intelligent</span>, <span className="text-blue-400 font-normal">scalable</span>, and <span className="text-blue-400 font-normal">accessible</span> technology solutions that enrich
                education and foster innovation in every corner of the world.
              </p>

              {/* Gradient ornament */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-blue-400/40 to-blue-500/20"></div>
            </div>
          </section>

          {/* Why the Name "ISGS" - with hover effects */}
          <section>
            <div className="flex items-center mb-10">
              <span className="text-blue-500 mr-3 text-xl">🔹</span>
              <h2 className="text-3xl md:text-4xl font-bold text-isgs-white">Why the Name "ISGS"?</h2>
            </div>

            <p className="text-isgs-silver text-lg mb-8 max-w-3xl">
              The name ISGS represents the core values that drive everything we do. Each letter stands for a principle that guides our vision and operations:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Imaginative card */}
              <div className="group">
                <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-8 rounded-xl border border-isgs-charcoal hover:border-blue-500/30 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <span className="text-2xl">I</span>
                    </div>
                    <h3 className="text-2xl font-bold text-isgs-white group-hover:text-blue-300 transition-colors duration-300">Imaginative</h3>
                  </div>

                  <div className="w-16 h-0.5 bg-blue-500/20 mb-6 group-hover:w-24 transition-all duration-300"></div>

                  <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                    We believe that what we imagine, we can create. Innovation begins with bold ideas.
                  </p>
                </div>
              </div>

              {/* Strong card */}
              <div className="group">
                <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-8 rounded-xl border border-isgs-charcoal hover:border-blue-500/30 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <span className="text-2xl">S</span>
                    </div>
                    <h3 className="text-2xl font-bold text-isgs-white group-hover:text-blue-300 transition-colors duration-300">Strong</h3>
                  </div>

                  <div className="w-16 h-0.5 bg-blue-500/20 mb-6 group-hover:w-24 transition-all duration-300"></div>

                  <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                    Our strength lies in unity and a committed team that delivers with purpose.
                  </p>
                </div>
              </div>

              {/* Global card */}
              <div className="group">
                <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-8 rounded-xl border border-isgs-charcoal hover:border-blue-500/30 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <span className="text-2xl">G</span>
                    </div>
                    <h3 className="text-2xl font-bold text-isgs-white group-hover:text-blue-300 transition-colors duration-300">Global</h3>
                  </div>

                  <div className="w-16 h-0.5 bg-blue-500/20 mb-6 group-hover:w-24 transition-all duration-300"></div>

                  <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                    Our vision goes beyond borders; we aim to build solutions for the world.
                  </p>
                </div>
              </div>

              {/* Sustainable card */}
              <div className="group">
                <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-8 rounded-xl border border-isgs-charcoal hover:border-blue-500/30 hover:shadow-lg transition-all duration-500 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <span className="text-2xl">S</span>
                    </div>
                    <h3 className="text-2xl font-bold text-isgs-white group-hover:text-blue-300 transition-colors duration-300">Sustainable</h3>
                  </div>

                  <div className="w-16 h-0.5 bg-blue-500/20 mb-6 group-hover:w-24 transition-all duration-300"></div>

                  <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                    We are committed to long-term growth that is environmentally and socially responsible.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-isgs-silver text-lg mt-8 text-center font-light italic">
              These four pillars guide every product we build and every solution we offer.
            </p>
          </section></>
  )
}
