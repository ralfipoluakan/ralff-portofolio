import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Github, Linkedin } from 'lucide-react';

const Hero = ({ data }) => {
  console.log('Hero received:', data);

  // Fallback if no data
  const profile = data?.profile || {};
  const social = data?.social || {};
  const contact = data?.contact || {};

  console.log('Hero: Rendering with profile:', profile);

  // Split name for typography effect
  const nameParts = profile.name?.split(' ') || ['Ralfi', 'Poluakan'];
  const firstName = nameParts[0] || 'Ralfi';
  const lastName = nameParts.slice(1).join(' ') || 'Poluakan';

  // Contact icons data (only email, phone, instagram)
  const contactIcons = [
    { icon: Mail, href: `mailto:${contact.email || 'ralffpoluakan@gmail.com'}`, label: 'Email' },
    { icon: Phone, href: `tel:${contact.phone?.replace(/\s/g, '') || '+6281241988202'}`, label: 'Phone' },
    { icon: Instagram, href: social.instagram || '#', label: 'Instagram' }
  ].filter(item => item.href !== '#');

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={profile.photo || '/profile-photo.jpg'}
          alt={profile.name}
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'blur(2px)',
            transform: 'scale(1.1)',
            objectPosition: 'center center'
          }}
        />
        {/* Dark Overlay (75% black) */}
        <div className="absolute inset-0 bg-black/75"></div>
        {/* Grain Effect */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container-custom px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white/80 text-sm font-light tracking-wider uppercase">OPEN TO WORK</span>
          </motion.div>

          {/* Role/Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 font-light mb-6 tracking-wide"
          >
            {profile.role || 'Full Stack Developer & Information Systems Student'}
          </motion.h2>

          {/* Name Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-8 leading-tight"
          >
            <span className="text-white">{firstName}</span>
            <br />
            <span className="text-white/40">{lastName}</span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed mb-6 md:mb-8"
          >
            {profile.bio}
          </motion.p>

          {/* Contact Icons - Below Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 md:gap-6"
          >
            {contactIcons.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300"
                aria-label={item.label}
              >
                <item.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
