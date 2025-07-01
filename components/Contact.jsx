'use client';
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

  // Animation controls for sections
  const controlsHeader = useAnimation();
  const controlsIntro = useAnimation();
  const controlsForm = useAnimation();
  const controlsContactInfo = useAnimation();

  // Intersection observers for sections
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactInfoRef, contactInfoInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) controlsHeader.start("visible");
  }, [headerInView, controlsHeader]);

  useEffect(() => {
    if (introInView) controlsIntro.start("visible");
  }, [introInView, controlsIntro]);

  useEffect(() => {
    if (formInView) controlsForm.start("visible");
  }, [formInView, controlsForm]);

  useEffect(() => {
    if (contactInfoInView) controlsContactInfo.start("visible");
  }, [contactInfoInView, controlsContactInfo]);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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

  // Animation variants
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const formInputVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id='contact' className="min-h-screen bg-isgs-black pt-24 pb-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-blue-500/10 to-blue-500/5 blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.6, x: -100 }}
          animate={{ opacity: 0.08, scale: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/8 to-blue-500/4 blur-[100px]"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [-15, 15, -15],
              x: [-8, 8, -8]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full blur-sm"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animation */}
        <motion.div 
          ref={headerRef}
          initial="hidden"
          animate={controlsHeader}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-isgs-white text-2xl mb-4"
          >
            📬
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-isgs-white mb-4">
            Contact Us – ISGS Tech Private Limited
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-isgs-white mx-auto"
          />
        </motion.div>

        {/* Introduction with animation */}
        <motion.div 
          ref={introRef}
          initial="hidden"
          animate={controlsIntro}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-3"
          >
            <span className="text-isgs-white text-2xl">🤝</span>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-isgs-white mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-isgs-silver text-lg">
            Whether you're curious about our services, want a demo of Qodee, or have a
            project in mind—we're here to help. Reach out and let's explore how we can work
            together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form with animation */}
            <motion.div 
              ref={formRef}
              initial="hidden"
              animate={controlsForm}
              variants={fadeInUp}
              className="lg:w-3/5"
            >
              <div className="flex items-center mb-6">
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-isgs-white mr-3 text-xl"
                >
                  📝
                </motion.span>
                <h3 className="text-xl md:text-2xl font-semibold text-isgs-white">Contact Form</h3>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-isgs-dark p-6 md:p-8 rounded-lg"
              >
                {formStatus.submitted && formStatus.success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-900/20 border border-green-700 rounded-lg p-4 mb-6"
                  >
                    <p className="text-green-400 text-center">{formStatus.message}</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    <motion.div variants={formInputVariant} className="mb-6">
                      <label htmlFor="name" className="block text-isgs-smoke mb-2">Name (Required)</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div variants={formInputVariant} className="mb-6">
                      <label htmlFor="email" className="block text-isgs-smoke mb-2">Email (Required)</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div variants={formInputVariant} className="mb-6">
                      <label htmlFor="organization" className="block text-isgs-smoke mb-2">Organization (Optional)</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div variants={formInputVariant} className="mb-8">
                      <label htmlFor="message" className="block text-isgs-smoke mb-2">Message (Required)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full px-4 py-3 rounded-md bg-isgs-charcoal border border-isgs-graphite text-isgs-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                        required
                      ></textarea>
                    </motion.div>

                    <motion.div variants={formInputVariant}>
                      <motion.button
                        type="submit"
                        whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-isgs-white text-isgs-black font-medium rounded-md hover:bg-isgs-smoke transition-all duration-300"
                      >
                        Submit →
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </motion.div>
            </motion.div>

            {/* Contact Information with animation */}
            <motion.div 
              ref={contactInfoRef}
              initial="hidden"
              animate={controlsContactInfo}
              variants={fadeInUp}
              className="lg:w-2/5"
            >
              {/* Company Contact Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center mb-6">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-isgs-white mr-3 text-xl"
                  >
                    📍
                  </motion.span>
                  <h3 className="text-xl md:text-2xl font-semibold text-isgs-white">Company Contact Information</h3>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-isgs-dark p-6 rounded-lg space-y-6"
                >
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="text-isgs-white mr-4 mt-1">📧</span>
                    <div>
                      <h4 className="text-lg font-medium text-isgs-white mb-1">Email</h4>
                      <a href="mailto:isgstech.official@gmail.com" className="text-isgs-silver hover:text-isgs-white transition-colors">
                        isgstech.official@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="text-isgs-white mr-4 mt-1">📞</span>
                    <div>
                      <h4 className="text-lg font-medium text-isgs-white mb-1">Phone</h4>
                      <a href="tel:+916397651800" className="text-isgs-silver hover:text-isgs-white transition-colors">
                        +91 63976 51800
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="text-isgs-white mr-4 mt-1">🏢</span>
                    <div>
                      <h4 className="text-lg font-medium text-isgs-white mb-1">Address</h4>
                      <p className="text-isgs-silver">
                        677, Prahalad Vatika, Budhana Gate, Meerut, Uttar Pradesh, India
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-isgs-white mr-3 text-xl"
                  >
                    🌐
                  </motion.span>
                  <h3 className="text-xl md:text-2xl font-semibold text-isgs-white">Follow Us Online</h3>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="bg-isgs-dark p-6 rounded-lg space-y-4"
                >
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-6"
                  >
                    <motion.a
                      href="https://www.instagram.com/isgs_tech/?igsh=MW1pcWdjZGZpZDMzaQ%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-isgs-charcoal flex items-center justify-center hover:bg-isgs-graphite transition-colors"
                    >
                      <FaInstagram className="text-isgs-smoke" size={16} />
                    </motion.a>
                    <p className="text-isgs-silver">Instagram: isgs_tech</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-isgs-charcoal flex items-center justify-center">
                      <FaLinkedin className="text-isgs-smoke" />
                    </div>
                    <p className="text-isgs-silver">LinkedIn: coming soon</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-6"
                  >
                    <motion.a
                      href="https://x.com/ISGS_TECH?t=o2yGn7MtSsB4q_vL4aw8wg&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-isgs-charcoal flex items-center justify-center hover:bg-isgs-graphite transition-colors"
                    >
                      <FaTwitter className="text-isgs-smoke" size={16} />
                    </motion.a>
                    <p className="text-isgs-silver">Twitter/X: ISGS_TECH</p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Additional Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ y: -2 }}
                className="mt-10 p-6 border border-isgs-charcoal rounded-lg bg-gradient-to-r from-isgs-dark to-isgs-black"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex mb-3"
                >
                  <span className="text-isgs-white text-xl">💡</span>
                </motion.div>
                <p className="text-isgs-silver">
                  Want a custom solution or Qodee demo? Fill out the form or call us
                  directly—we'll respond within 24 hours
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for smooth scrolling and animations */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        /* Performance optimizations */
        * {
          will-change: transform;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #1E1E1E;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3B82F6, #1D4ED8);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60A5FA, #3B82F6);
        }

        /* Smooth transitions for all elements */
        * {
          transition: transform 0.3s ease-out;
        }

        /* Performance optimizations */
        [data-scroll] {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

export default Contact;