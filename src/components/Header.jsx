import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'experience', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={`fixed bottom-4 md:bottom-8 left-1/2 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'opacity-100' 
          : 'opacity-100 md:opacity-0 md:pointer-events-none pointer-events-auto'
      }`}
      style={{ transform: 'translateX(-50%)' }}
    >
      <div className="glass rounded-full px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 backdrop-blur-xl border border-white/20 bg-black/40 shadow-lg w-[calc(100vw-1rem)] sm:w-auto">
        <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2.5 sm:px-3 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm md:text-sm lg:text-base font-light transition-colors duration-300 whitespace-nowrap flex-1 sm:flex-initial text-center ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
