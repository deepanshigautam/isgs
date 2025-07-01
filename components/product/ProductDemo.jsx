import React, { useState } from 'react'
import Image from 'next/image'
import admin from '../../public/assets/admin_dash.png'
import codeArena from '../../public/assets/codearena.png'
import studentDash from '../../public/assets/student_dash.png'
import facultyDash from '../../public/assets/facultydash.png'
import orgDash from '../../public/assets/org_dash.png'
import testArena from '../../public/assets/testarena.png'

export default function ProductDemo() {
  const [selectedImage, setSelectedImage] = useState(0)
  
  const screenshots = [
    {
      src: studentDash,
      title: "Student Dashboard",
      description: "Comprehensive learning analytics and progress tracking",
      category: "Student Portal"
    },
    {
      src: testArena,
      title: "Test Arena",
      description: "Interactive coding environment with real-time feedback",
      category: "Assessment"
    },
    {
      src: admin,
      title: "Admin Dashboard",
      description: "Powerful analytics and management interface",
      category: "Administration"
    },
    {
      src: codeArena,
      title: "Code Arena",
      description: "Collaborative coding environment with live collaboration",
      category: "Development"
    },
    {
      src: facultyDash,
      title: "Faculty Dashboard",
      description: "Course management and student progress tracking",
      category: "Teaching"
    },
    {
      src: orgDash,
      title: "Organization Dashboard",
      description: "Institution-wide analytics and insights",
      category: "Management"
    }
  ]

 
  return (
    <div className="mb-32">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        
        <h3 className="text-4xl md:text-5xl font-bold text-isgs-white mb-4">
          Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-800">Showcase</span>
        </h3>
        <p className="text-isgs-silver text-lg max-w-2xl mx-auto">
          Explore our comprehensive learning platform through interactive screenshots and live demos
        </p>
      </div>

      {/* Main Showcase Area */}
      <div className="relative mb-12">
        {/* Enhanced Glow Effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-60"></div>
        <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/30 rounded-2xl blur-xl"></div>
        
        <div className="relative bg-gradient-to-br from-isgs-dark/90 to-isgs-black/90 backdrop-blur-xl p-8 rounded-2xl border border-isgs-charcoal/50 shadow-2xl">
          {/* Featured Screenshot */}
          <div className="relative mb-8">
            <div className="relative rounded-xl overflow-hidden bg-isgs-charcoal group">
              <div className="relative w-full aspect-video">
                <Image
                  key={selectedImage} // Force re-render when image changes
                  src={screenshots[selectedImage].src}
                  alt={screenshots[selectedImage].title}
                  fill
                  className="object-contain transition-all duration-500 group-hover:scale-105"
                  priority
                  unoptimized // Add this to prevent Next.js optimization issues
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Enhanced Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full mb-2 border border-blue-500/30">
                        {screenshots[selectedImage].category}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-1">{screenshots[selectedImage].title}</h4>
                      <p className="text-isgs-smoke text-sm">{screenshots[selectedImage].description}</p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                onClick={() => {
                  console.log(`Clicked on image ${index}: ${screenshot.title}`); // Debug log
                  setSelectedImage(index);
                }}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedImage === index 
                    ? 'ring-2 ring-blue-500 scale-105 shadow-lg shadow-blue-500/25' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <div className="relative w-full aspect-video bg-isgs-charcoal">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    selectedImage === index ? 'bg-blue-500/20' : 'bg-black/40 hover:bg-black/20'
                  }`}></div>
                  
                  {/* Thumbnail Label */}
                  <div className="absolute bottom-1 left-1 right-1">
                    <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded text-center truncate">
                      {screenshot.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  )
}
