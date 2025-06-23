import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div id='about' className="min-h-screen bg-isgs-black pt-24 pb-16">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-isgs-dark opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-isgs-dark opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold text-isgs-white mb-6 tracking-tight">
            About <span className="relative inline-block">
              <span className="relative z-10">ISGS</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/20 -z-0"></span>
            </span>
          </h1>
          <p className="text-xl text-isgs-silver max-w-3xl mx-auto font-light">
            We're on a mission to transform education through innovative technology solutions
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto space-y-32">

          {/* Company Overview - with image */}
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
                  <span className="text-isgs-smoke">Company Image</span>
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

          {/* Our Mission - stylized quote */}
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
          </section>

          {/* Meet Our Directors - stylized profiles */}
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
                        src="/assets/anumika.jpg"
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

          {/* Legal Information - styled as a modern business card */}
          <section>
            <div className="flex items-center mb-10">
              <span className="text-blue-500 mr-3 text-xl">🔹</span>
              <h2 className="text-3xl md:text-4xl font-bold text-isgs-white">Legal Information</h2>
            </div>

            <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-1 rounded-xl shadow-xl">
              <div className="bg-isgs-dark rounded-lg p-8 h-full relative overflow-hidden">
                {/* Decorative logo watermark */}
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-5 text-9xl font-bold">
                  ISGS
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-6">
                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Company Name</p>
                      <p className="text-isgs-white font-medium text-lg">ISGS Tech Private Limited</p>
                    </div>

                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Incorporation</p>
                      <p className="text-isgs-white font-medium">Registered under the Companies Act, 2013</p>
                    </div>

                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">CIN (if available)</p>
                      <p className="text-isgs-white font-medium">[Insert Here]</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Type</p>
                      <p className="text-isgs-white font-medium">Private Limited Company</p>
                    </div>

                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Directors</p>
                      <p className="text-isgs-white font-medium">Ms. Anshu Jindal & Ms. Anumika Kumari</p>
                    </div>

                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Address</p>
                      <p className="text-isgs-white font-medium">677, Prahalab Vatika, Budhana Gate, Meerut</p>
                    </div>
                  </div>
                </div>

                {/* Bottom line decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}