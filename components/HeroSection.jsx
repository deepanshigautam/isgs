import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className="bg-isgs-black">
      {/* Main Hero Section - with parallax effect */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-isgs-black via-isgs-dark to-isgs-charcoal opacity-90"></div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-isgs-dark opacity-40 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-isgs-charcoal opacity-30 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-4xl text-center z-10">
          {/* Animated reveal for heading */}
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-extrabold text-isgs-white mb-6 tracking-tight transform transition-all duration-700 ease-out animate-fadeInUp">
              ISGS
            </h1>
          </div>
          
          {/* Tagline with gradient text */}
          <p className="text-2xl md:text-3xl font-light mb-8 bg-gradient-to-r from-isgs-white to-isgs-smoke bg-clip-text text-transparent animate-fadeIn" style={{animationDelay: '0.3s'}}>
            Building the Future of Education Tech
          </p>
          
          {/* Stylized divider */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-isgs-smoke to-transparent"></div>
          </div>
          
          {/* Subheading with better typography */}
          <p className="text-lg text-isgs-silver mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fadeIn" style={{animationDelay: '0.6s'}}>
            Innovative products. Smart services. <span className="text-isgs-white">One purpose</span> – transforming
            learning through technology.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-wrap justify-center gap-6 animate-fadeIn" style={{animationDelay: '0.9s'}}>
            <button className="px-8 py-4 bg-isgs-white text-isgs-black font-medium rounded-full hover:bg-isgs-smoke transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center group">
              <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300">🔹</span>
              <span>Explore Qodee</span>
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray hover:border-isgs-white hover:bg-isgs-dark/50 transition-all duration-300 flex items-center group">
              <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300">🔹</span>
              <span>Request a Service</span>
            </button>
          </div>
          
         
        </div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-isgs-black via-isgs-black/90 to-transparent"></div>
      </div>

      {/* Introduction Section - with hover effects */}
      <div className="py-28 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-isgs-dark rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-isgs-charcoal rounded-full opacity-20 blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Text Content with better typography */}
            <div className="md:w-1/2">
              <div className="flex items-center mb-6 group">
                <span className="text-blue-500 mr-3 text-xl group-hover:rotate-12 transition-transform duration-300">🔹</span>
                <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase">Introduction</h2>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-isgs-white mb-8 leading-tight">
                Welcome to <span className="relative inline-block">
                  <span className="relative z-10">ISGS Tech</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/20 -z-0"></span>
                </span> Private Limited
              </h2>
              
              <p className="text-isgs-silver text-lg leading-relaxed mb-10">
                At ISGS, we <span className="text-isgs-white">imagine</span>, <span className="text-isgs-white">design</span>, and <span className="text-isgs-white">develop</span> technology-driven solutions that
                empower learners, educators, and institutions alike. As an EdTech company, we
                believe that meaningful innovation starts with strong foundations—and we're
                building those every day through cutting-edge platforms and personalized
                development services.
              </p>
              
              {/* Stylized stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="border border-isgs-charcoal p-5 rounded-lg hover:border-isgs-gray transition-colors duration-300">
                  <div className="text-3xl font-bold text-isgs-white mb-1">2024</div>
                  <div className="text-isgs-smoke text-sm">Founded</div>
                </div>
                <div className="border border-isgs-charcoal p-5 rounded-lg hover:border-isgs-gray transition-colors duration-300">
                  <div className="text-3xl font-bold text-isgs-white mb-1">24/7</div>
                  <div className="text-isgs-smoke text-sm">Support</div>
                </div>
              </div>
            </div>
            
            {/* Visual with enhanced styling */}
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl"></div>
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 hover:shadow-blue-900/20">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                
                <Image
                  src="/images/digital-learning.jpg" // Replace with actual image
                  alt="Students using laptops in a digital learning environment"
                  width={650}
                  height={450}
                  className="w-full h-auto"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-isgs-black to-transparent p-6">
                  <p className="text-sm text-isgs-smoke">Modern digital learning environments powered by ISGS tech</p>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -bottom-12 -right-12 grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-isgs-charcoal"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Preview - with 3D card effect */}
      <div className="py-28 px-4 bg-gradient-to-b from-isgs-dark to-isgs-black relative">
        {/* Decorative lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-isgs-gray to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-isgs-gray to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Product screenshot with 3D effect */}
            <div className="md:w-1/2 perspective">
              <div className="bg-isgs-charcoal rounded-xl shadow-xl transform transition-transform duration-700 hover:rotate-y-10 group">
                {/* Browser frame styling */}
                <div className="bg-isgs-graphite rounded-t-xl p-3 flex items-center space-x-2 border-b border-isgs-black">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 bg-isgs-dark rounded-md flex-1 h-6"></div>
                </div>
                
                <div className="p-5">
                  <div className="aspect-w-16 aspect-h-9 w-full rounded-md overflow-hidden">
                    <Image
                      src="/images/qodee-screenshot.jpg" // Replace with actual screenshot
                      alt="Qodee coding platform interface"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating features badges */}
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-full shadow-lg transform transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
                  AI-Powered
                </div>
                <div className="absolute -top-4 -left-4 bg-isgs-white text-isgs-black text-sm px-4 py-2 rounded-full shadow-lg transform transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                  Real-time Coding
                </div>
              </div>
            </div>
            
            {/* Text content with enhanced typography */}
            <div className="md:w-1/2">
              <div className="inline-flex items-center py-2 px-4 rounded-full bg-blue-500/10 mb-6">
                <span className="text-isgs-white mr-3 text-2xl">💡</span>
                <span className="text-blue-300 font-medium">Our Flagship Product</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-isgs-white mb-6 leading-tight">
                Qodee <span className="text-blue-400">–</span> Learn. Code. Grow.
              </h2>
              
              <p className="text-isgs-silver text-lg leading-relaxed mb-10">
                Qodee is our flagship coding and development platform built for students and
                educators. With <span className="text-isgs-white">real-time coding environments</span>, <span className="text-isgs-white">intelligent feedback</span>, and <span className="text-isgs-white">powerful
                learning analytics</span>, Qodee transforms traditional programming education into an
                engaging, personalized journey.
              </p>
              
              {/* Animated arrow button */}
              <Link href="/products" className="group">
                <div className="inline-flex items-center px-8 py-3 bg-isgs-white text-isgs-black rounded-md hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="mr-1">Explore Qodee</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
              
              {/* Feature tags */}
              <div className="flex flex-wrap mt-10 gap-3">
                <span className="px-3 py-1 bg-isgs-charcoal text-isgs-smoke rounded-full text-sm">Real-time Coding</span>
                <span className="px-3 py-1 bg-isgs-charcoal text-isgs-smoke rounded-full text-sm">AI Assistance</span>
                <span className="px-3 py-1 bg-isgs-charcoal text-isgs-smoke rounded-full text-sm">Advanced Analytics</span>
                <span className="px-3 py-1 bg-isgs-charcoal text-isgs-smoke rounded-full text-sm">Personalized Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision Section - with card flip effect */}
      <div className="py-28 px-4 relative">
        {/* Decorative background */}
        <div className="absolute top-10 left-0 w-full h-full">
          <div className="max-w-6xl h-full mx-auto">
            <div className="absolute left-10 top-10 text-[150px] font-bold text-isgs-dark/20 select-none">ISGS</div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <span className="text-blue-500 mr-2 text-xl">🔹</span>
              <h2 className="text-isgs-white text-lg font-medium tracking-widest uppercase">Our Purpose</h2>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-isgs-white">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission card with hover effect */}
            <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-isgs-charcoal hover:border-isgs-graphite group">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-isgs-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Our Mission</h3>
              
              <div className="w-12 h-1 bg-blue-500/50 mb-6 group-hover:w-20 transition-all duration-300"></div>
              
              <p className="text-isgs-silver text-lg leading-relaxed">
                To deliver <span className="text-isgs-white">intelligent</span>, <span className="text-isgs-white">scalable</span>, and <span className="text-isgs-white">accessible</span> technology solutions that enrich
                education and foster innovation in every corner of the world.
              </p>
            </div>
            
            {/* Vision card with hover effect */}
            <div className="bg-gradient-to-br from-isgs-dark to-isgs-charcoal p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-isgs-charcoal hover:border-isgs-graphite group">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-isgs-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Our Vision</h3>
              
              <div className="w-12 h-1 bg-blue-500/50 mb-6 group-hover:w-20 transition-all duration-300"></div>
              
              <p className="text-isgs-silver text-lg leading-relaxed">
                To become a <span className="text-isgs-white">global leader</span> in educational technology by building <span className="text-isgs-white">sustainable</span>,
                <span className="text-isgs-white"> inclusive</span>, and <span className="text-isgs-white">impactful</span> digital platforms for the next generation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Values Section - with interactive cards */}
      <div className="py-28 px-4 bg-gradient-to-b from-isgs-black to-isgs-dark relative">
        {/* Decorative dots */}
        <div className="absolute top-0 right-0 w-32 h-32 grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-isgs-smoke opacity-20"></div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 w-32 h-32 grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-isgs-smoke opacity-20"></div>
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
            {/* Imaginative card */}
            <div className="bg-gradient-to-br from-isgs-charcoal to-isgs-dark p-8 rounded-xl border border-isgs-charcoal group hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <span className="text-3xl">💭</span>
              </div>
              
              <h3 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Imaginative</h3>
              
              <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                We believe that every great solution begins with imagination. Our creativity
                fuels our innovation.
              </p>
            </div>
            
            {/* Strong card */}
            <div className="bg-gradient-to-br from-isgs-charcoal to-isgs-dark p-8 rounded-xl border border-isgs-charcoal group hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <span className="text-3xl">💪</span>
              </div>
              
              <h3 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Strong</h3>
              
              <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                We are united by purpose and driven by commitment. Our strength lies in
                our people and our passion.
              </p>
            </div>
            
            {/* Global card */}
            <div className="bg-gradient-to-br from-isgs-charcoal to-isgs-dark p-8 rounded-xl border border-isgs-charcoal group hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <span className="text-3xl">🌍</span>
              </div>
              
              <h3 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Global</h3>
              
              <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                Our ambition knows no boundaries. We build for a connected,
                tech-forward world.
              </p>
            </div>
            
            {/* Sustainable card */}
            <div className="bg-gradient-to-br from-isgs-charcoal to-isgs-dark p-8 rounded-xl border border-isgs-charcoal group hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <span className="text-3xl">♻️</span>
              </div>
              
              <h3 className="text-xl font-bold text-isgs-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Sustainable</h3>
              
              <p className="text-isgs-silver group-hover:text-isgs-smoke transition-colors duration-300">
                We innovate with responsibility, ensuring our growth benefits both people
                and the planet.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section - with glass morphism */}
      <div className="py-28 px-4 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-isgs-dark/60 p-12 rounded-3xl border border-isgs-charcoal shadow-xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-isgs-white mb-6 leading-tight">
              Start Your Journey with ISGS
            </h2>
            
            <p className="text-isgs-silver text-lg mb-0 mx-auto">
              Whether you're an educator seeking tools, a student eager to learn, or a company
              looking for reliable tech partners—we're ready to build with you.
            </p>
            
            {/* Decorative divider */}
            <div className="h-0.5 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto my-10"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/products">
              <button className="group px-8 py-4 bg-isgs-white text-isgs-black font-medium rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1 flex items-center">
                <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300">🔹</span>
                <span>Explore Qodee</span>
              </button>
            </Link>
            
            <Link href="/services">
              <button className="group px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 flex items-center">
                <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300">🔹</span>
                <span>Request a Service</span>
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="group px-8 py-4 bg-transparent text-isgs-white font-medium rounded-full border-2 border-isgs-gray hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 flex items-center">
                <span className="mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300">🔹</span>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Add some custom styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-scrollDown {
          animation: scrollDown 2s infinite;
        }
        
        .perspective {
          perspective: 1000px;
        }
        
        .hover\:rotate-y-10:hover {
          transform: rotateY(10deg);
        }
      `}</style>
    </div>
  );
}

export default HeroSection;