import React from 'react'

export default function Legal() {
  return (
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
                      <p className="text-isgs-smoke text-sm mb-1">CIN </p>
                      <p className="text-isgs-white font-medium">U62013UP2025PTC226481</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Type</p>
                      <p className="text-isgs-white font-medium">Private Limited Company</p>
                    </div>

                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Directors</p>
                      <p className="text-isgs-white font-medium">Mrs. Anshu Jindal </p>
                    </div>

                    <div>
                      <p className="text-isgs-smoke text-sm mb-1">Address</p>
                      <p className="text-isgs-white font-medium">677, Prahalad Vatika, Budhana Gate, Meerut</p>
                    </div>
                  </div>
                </div>

                {/* Bottom line decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              </div>
            </div>
          </section>
  )
}
