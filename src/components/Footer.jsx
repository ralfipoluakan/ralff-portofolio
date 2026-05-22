import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Footer = ({ data }) => {
  const profile = data?.profile || {};
  const social = data?.social || {};
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        <p className="text-white font-light text-lg mb-2">{profile.name || 'Marcelo Ralfi Poluakan'}</p>
        <p className="text-white/45 text-sm font-light max-w-lg mx-auto mb-6">
          {profile.headline ||
            'Building technology-driven solutions through software development, leadership, and business-oriented problem solving.'}
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
        <p className="text-white/35 text-xs font-light">
          © {year} {profile.shortName || profile.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
