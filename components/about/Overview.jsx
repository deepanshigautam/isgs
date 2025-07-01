import React from 'react'
import Image from 'next/image'
import isgsLogo from '../../public/assets/isgs_logo.png'

export default function Overview() {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center py-1 px-4 rounded-full bg-isgs-dark mb-6">
                <span className="text-blue-500 mr-2 text-xl">🔹</span>
                <span className="text-isgs-smoke text-sm font-medium uppercase tracking-wider">Who we are</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-isgs-white mb-6 leading-tight">
                Company Overview
              </h2>

              <p className="text-isgs-silver text-lg leading-relaxed">
                ISGS Tech Private Limited is a <span className="text-isgs-white font-medium">forward-thinking EdTech company</span> dedicated to
                reshaping how students, teachers, and institutions interact with technology. From
                building intelligent learning platforms to offering custom development services, we
                strive to make education smarter, scalable, and globally relevant.
              </p>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-blue-500/30"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-blue-500/30"></div>

              <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-2 rounded-xl shadow-2xl relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
                {/* Placeholder for image */}
                <div className="aspect-w-16 aspect-h-9 bg-isgs-charcoal rounded-lg flex items-center justify-center">
                  <Image
                  src={isgsLogo}
                  alt='ISGS Logo'
                  width={250}
                  height={200}
                  />
                </div>
              </div>

              <div className="absolute -z-10 inset-0 blur-2xl bg-blue-500/5 rounded-full"></div>
            </div>
          </section>

          {/* Our Journey - with timeline */}
          <section>
            <div className="flex items-center mb-6">
              <span className="text-blue-500 mr-3 text-xl">🔹</span>
              <h2 className="text-3xl md:text-4xl font-bold text-isgs-white">Our Journey</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <div className="relative">
                {/* Timeline element */}
                <div className="h-full w-1 bg-gradient-to-b from-transparent via-isgs-charcoal to-transparent absolute left-4 top-0"></div>

                <div className="pl-12 relative mb-12">
                  <div className="absolute left-2.5 w-6 h-6 rounded-full bg-isgs-dark border-2 border-blue-500 transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-bold text-isgs-white mb-2">The Idea</h3>
                  <p className="text-isgs-silver">Born from a vision to bridge traditional education and modern technology</p>
                </div>

                <div className="pl-12 relative mb-12">
                  <div className="absolute left-2.5 w-6 h-6 rounded-full bg-isgs-dark border-2 border-blue-500 transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-bold text-isgs-white mb-2">Foundation (2023)</h3>
                  <p className="text-isgs-silver">ISGS Tech was officially founded to build solutions that empower education</p>
                </div>

                <div className="pl-12 relative">
                  <div className="absolute left-2.5 w-6 h-6 rounded-full bg-isgs-dark border-2 border-blue-500 transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-bold text-isgs-white mb-2">Qodee Launch (2024)</h3>
                  <p className="text-isgs-silver">Our flagship product marks a bold step toward transforming coding education</p>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-isgs-dark/80 to-isgs-charcoal p-8 rounded-lg backdrop-blur-sm">
                  <p className="text-isgs-silver text-lg leading-relaxed">
                    ISGS was born from a shared vision—to bridge the gap between traditional
                    education and modern technology. Founded in 2024, our journey began with a
                    single goal: <span className="text-isgs-white font-medium">to empower learning through smart solutions</span>.
                  </p>

                  <div className="mt-6 pt-6 border-t border-isgs-charcoal">
                    <p className="text-isgs-silver text-lg">
                      With our flagship product Qodee, we've taken the first bold step toward transforming the way students learn
                      to code.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <div className="bg-isgs-dark/50 rounded-lg p-4 backdrop-blur-sm inline-block">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-isgs-white">2024</div>
                        <div className="text-isgs-smoke text-sm">Founded</div>
                      </div>
                      <div className="h-10 w-px bg-isgs-charcoal"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-isgs-white">1</div>
                        <div className="text-isgs-smoke text-sm">Flagship Product</div>
                      </div>
                      <div className="h-10 w-px bg-isgs-charcoal"></div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-isgs-white">∞</div>
                        <div className="text-isgs-smoke text-sm">Possibilities</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
</>
  )
}
