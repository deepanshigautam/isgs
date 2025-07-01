import React from 'react';

export default function CoreValues() {
  return (
    <div className="py-28 px-4 bg-gradient-to-b from-isgs-black to-isgs-dark relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-0 right-0 w-32 h-32 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div 
            key={i}
            className="w-1 h-1 rounded-full bg-isgs-smoke"
          ></div>
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 w-32 h-32 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div 
            key={i+16}
            className="w-1 h-1 rounded-full bg-isgs-smoke"
          ></div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <span className="text-blue-500 mr-2 text-xl">🔹</span>
            <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase">Who We Are</h2>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-isgs-white mb-6">
            Our Core Values
          </h2>
          
          <p className="text-isgs-silver text-lg max-w-2xl mx-auto">
            These fundamental principles guide our decisions, shape our culture, and define our identity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Core values cards */}
          {[
            { emoji: "💭", title: "Imaginative", text: "We believe that every great solution begins with imagination. Our creativity fuels our innovation." },
            { emoji: "💪", title: "Strong", text: "We are united by purpose and driven by commitment. Our strength lies in our people and our passion." },
            { emoji: "🌍", title: "Global", text: "Our ambition knows no boundaries. We build for a connected, tech-forward world." },
            { emoji: "♻️", title: "Sustainable", text: "We innovate with responsibility, ensuring our growth benefits both people and the planet." }
          ].map((value, i) => (
            <div 
              key={value.title}
              className="bg-gradient-to-br from-isgs-charcoal to-isgs-dark p-8 rounded-xl border border-isgs-charcoal group hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <span className="text-3xl">
                  {value.emoji}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{value.title}</h3>
              
              <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
