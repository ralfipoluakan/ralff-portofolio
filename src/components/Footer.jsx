import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = ({ data }) => {
  console.log('Footer received:', data);
  const currentYear = new Date().getFullYear();

  // Fallback if no data
  const profile = data?.profile || {};
  const social = data?.social || {};

  const socialLinks = [
    { icon: FaInstagram, href: social.instagram || '#', label: 'Instagram' },
    { icon: FaGithub, href: social.github || '#', label: 'GitHub' },
    { icon: FaLinkedin, href: social.linkedin || '#', label: 'LinkedIn' }
  ];

  console.log('Footer: Rendering with profile data:', profile);

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800 border-t border-white/10">
      <div className="container-custom py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 animate-fade-in-up"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 animate-glow">
              {profile.name || 'Ralfi Poluakan'}
            </h3>
            <p className="text-foreground/60 max-w-md mx-auto animate-slide-in-left">
              Building scalable, real-world web systems across healthcare, e-commerce, and organizational platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                aria-label={social.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <p className="text-foreground/50 text-sm flex items-center justify-center gap-2">
              © {currentYear} {profile.name || 'Ralfi Poluakan'}. Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart size={16} color="currentColor" />
              </motion.span>
              using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
