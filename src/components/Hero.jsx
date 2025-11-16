import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ data }) => {
  console.log('Hero received:', data);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    scrollToSection('experience');
  };

  // Fallback if no data
  const profile = data?.profile || {};
  const social = data?.social || {};
  const contact = data?.contact || {};

  console.log('Hero: Rendering with profile:', profile);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-10 right-20 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8 animate-float"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-glow"></div>
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl animate-scale-in"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 animate-fade-in-up"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-gradient animate-glow">{profile.name?.split(' ')[0]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light">
              {profile.role}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          >
            {profile.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewProjects}
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 animate-glow"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-secondary px-8 py-4 text-lg font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: social.github || '#', label: 'GitHub' },
              { icon: Linkedin, href: social.linkedin || '#', label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${contact.email || 'ralfipoluakan@gmail.com'}`, label: 'Email' }
            ].map((socialLink, index) => (
              <motion.a
                key={socialLink.label}
                href={socialLink.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                aria-label={socialLink.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <socialLink.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown size={32} className="text-white/60 hover:text-white transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
