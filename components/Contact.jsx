'use client';
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaBuilding, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    // For now, we'll just simulate a successful submission
    
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We'll respond within 24 hours."
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      organization: '',
      message: ''
    });
  };

  return (
    <div id='contact' className="min-h-screen bg-isgs-black pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-isgs-white text-2xl mb-4">📬</div>
          <h1 className="text-4xl md:text-5xl font-bold text-isgs-white mb-4">
            Contact Us – ISGS Tech Private Limited
          </h1>
          <div className="w-24 h-1 bg-isgs-white mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-3">
            <span className="text-isgs-white text-2xl">🤝</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-isgs-white mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-isgs-silver text-lg">
            Whether you're curious about our services, want a demo of Qodee, or have a
            project in mind—we're here to help. Reach out and let's explore how we can work
            together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <div className="flex items-center mb-6">
                <span className="text-isgs-white mr-3 text-xl">📝</span>
                <h3 className="text-xl md:text-2xl font-semibold text-isgs-white">Contact Form</h3>
              </div>
              
              <div className="bg-isgs-dark p-6 md:p-8 rounded-lg">
                {formStatus.submitted && formStatus.success ? (
                  <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 mb-6">
                    <p className="text-green-400 text-center">{formStatus.message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-isgs-smoke mb-2">Name (Required)</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-isgs-smoke"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-isgs-smoke mb-2">Email (Required)</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-isgs-smoke"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="organization" className="block text-isgs-smoke mb-2">Organization (Optional)</label>
                      <input 
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-isgs-smoke"
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-isgs-smoke mb-2">Message (Required)</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-isgs-smoke resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button 
                        type="submit"
                        className="w-full py-3 bg-isgs-white text-isgs-black font-medium rounded-md hover:bg-isgs-smoke transition-colors duration-300"
                      >
                        Submit →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-2/5">
              {/* Company Contact Information */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <span className="text-isgs-white mr-3 text-xl">📍</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-isgs-white">Company Contact Information</h3>
                </div>
                
                <div className="bg-isgs-dark p-6 rounded-lg">
                  <div className="flex items-start mb-6">
                    <span className="text-isgs-white mr-4 mt-1">📧</span>
                    <div>
                      <h4 className="text-lg font-medium text-isgs-white mb-1">Email</h4>
                      <a href="mailto:isgstech.official@gmail.com" className="text-isgs-silver hover:text-isgs-white transition-colors">
                        isgstech.official@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <span className="text-isgs-white mr-4 mt-1">📞</span>
                    <div>
                      <h4 className="text-lg font-medium text-isgs-white mb-1">Phone</h4>
                      <a href="tel:+916397651800" className="text-isgs-silver hover:text-isgs-white transition-colors">
                        +91 63976 51800
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-isgs-white mr-4 mt-1">🏢</span>
                    <div>
                      <h4 className="text-lg font-medium text-isgs-white mb-1">Address</h4>
                      <p className="text-isgs-silver">
                        677, Prahalab Vatika, Budhana Gate, Meerut, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-isgs-white mr-3 text-xl">🌐</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-isgs-white">Follow Us Online</h3>
                </div>
                
                <div className="bg-isgs-dark p-6 rounded-lg">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-10 h-10 rounded-full bg-isgs-charcoal flex items-center justify-center">
                      <FaInstagram className="text-isgs-smoke" />
                    </div>
                    <p className="text-isgs-silver">Instagram: coming soon</p>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-10 h-10 rounded-full bg-isgs-charcoal flex items-center justify-center">
                      <FaLinkedin className="text-isgs-smoke" />
                    </div>
                    <p className="text-isgs-silver">LinkedIn: coming soon</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-isgs-charcoal flex items-center justify-center">
                      <FaTwitter className="text-isgs-smoke" />
                    </div>
                    <p className="text-isgs-silver">Twitter/X: coming soon</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Call to Action */}
              <div className="mt-10 p-6 border border-isgs-charcoal rounded-lg bg-gradient-to-r from-isgs-dark to-isgs-black">
                <div className="flex mb-3">
                  <span className="text-isgs-white text-xl">💡</span>
                </div>
                <p className="text-isgs-silver">
                  Want a custom solution or Qodee demo? Fill out the form or call us
                  directly—we'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;