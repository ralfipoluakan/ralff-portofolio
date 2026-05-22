import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      const sections = [
        'hero',
        'about',
        'impact',
        'featured',
        'projects',
        'skills',
        'leadership',
        'experience',
        'achievements',
        'certificates',
        'contact',
      ];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'achievements', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`fixed bottom-4 md:bottom-6 left-1/2 z-[100] -translate-x-1/2 transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-100 md:opacity-95'
      }`}
      aria-label="Main navigation"
    >
      <div className="glass rounded-full px-2 sm:px-4 py-2 backdrop-blur-xl border border-white/15 bg-black/50 shadow-2xl max-w-[calc(100vw-1.5rem)]">
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-light whitespace-nowrap transition-colors ${
                activeSection === item.id ? 'text-white' : 'text-white/55 hover:text-white/85'
              }`}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-px bg-white"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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
