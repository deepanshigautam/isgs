import React from 'react'
import Image from 'next/image'

export default function Directors() {
  return (
    <section className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 border border-isgs-charcoal rounded-full opacity-20"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 border border-isgs-charcoal rounded-full opacity-10"></div>

            <div className="flex items-center mb-16">
              <span className="text-blue-500 mr-3 text-xl">🔹</span>
              <h2 className="text-3xl md:text-4xl font-bold text-isgs-white">Meet Our Directors</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-20">
              {/* Director 1 */}
              <div className="relative group">
                {/* Decorative background */}
                <div className="absolute -z-10 top-10 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl"></div>

                {/* Profile card */}
                <div className="flex flex-col items-center relative z-10">
                  {/* Image with highlight effect */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-isgs-charcoal">
                      {/* Director image */}
                      <Image
                        src="/assets/anshu_jindal.jpg"
                        alt="Mrs. Anshu Jindal"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-isgs-white mb-1">Mrs. Anshu Jindal</h3>
                  <div className="px-4 py-1 bg-isgs-dark/80 rounded-full text-isgs-smoke text-sm mb-6">Co-founder and Director</div>

                  <p className="text-isgs-silver text-center max-w-sm leading-relaxed">
                    A visionary leader passionate about education and innovation, Ms. Anshu brings
                    extensive organizational experience and a strong belief in inclusive learning. As a
                    founding director of ISGS, she plays a crucial role in shaping the strategic direction
                    of the company.
                  </p>
                </div>
              </div>

              {/* Director 2 */}
              <div className="relative group">
                {/* Decorative background */}
                <div className="absolute -z-10 top-10 left-0 right-0 bottom-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-3xl"></div>

                {/* Profile card */}
                <div className="flex flex-col items-center relative z-10">
                  {/* Image with highlight effect */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500/30 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-isgs-charcoal">
                      {/* Director image */}
                      <Image
                        src="/assets/anumika_new.png"
                        alt="Mrs. Anumika Kumari"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-isgs-white mb-1">Mrs. Anumika Kumari</h3>
                  <div className="px-4 py-1 bg-isgs-dark/80 rounded-full text-isgs-smoke text-sm mb-6">Co-founder and Director</div>

                  <p className="text-isgs-silver text-center max-w-sm leading-relaxed">
                    With a strong background in nurturing growth-oriented initiatives, Ms. Anumika
                    drives ISGS's mission toward scalable and sustainable impact. Her leadership
                    ensures that technology remains human-centered and education-focused.
                  </p>
                </div>
              </div>
            </div>
          </section>
  )
}
