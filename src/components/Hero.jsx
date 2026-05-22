import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = ({ data }) => {
  const profile = data?.profile || {};
  const social = data?.social || {};
  const contact = data?.contact || {};

  const nameParts = profile.name?.split(' ') || ['Marcelo', 'Ralfi', 'Poluakan'];
  const firstName = nameParts.slice(0, 2).join(' ') || 'Marcelo Ralfi';
  const lastName = nameParts.slice(2).join(' ') || nameParts[nameParts.length - 1] || 'Poluakan';

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const ctas = [
    {
      label: 'Download Resume',
      href: profile.resumeUrl || '/CV_Marcelo_Ralfi_Poluakan.pdf',
      icon: Download,
      primary: true,
      download: true,
    },
    {
      label: 'GitHub',
      href: social.github,
      icon: Github,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: social.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: 'Contact',
      onClick: scrollToContact,
      icon: Mail,
    },
  ].filter((c) => c.href || c.onClick);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={profile.photo || '/profile-photo.jpg'}
          alt={profile.name}
          className="w-full h-full object-cover object-center"
          style={{ filter: 'blur(2px)', transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95" />
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      <div className="container-custom px-6 md:px-12 relative z-10 w-full py-24 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-emerald-300/90 text-xs font-medium tracking-widest uppercase">
              Open to International Opportunities
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-white/60 font-light mb-4 tracking-wide leading-relaxed max-w-2xl"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight"
          >
            <span className="text-white">{firstName}</span>
            <br />
            <span className="text-white/35">{lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl lg:text-2xl text-white/85 font-light max-w-3xl leading-relaxed mb-6"
          >
            {profile.headline}
          </motion.p>

          {profile.tags?.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/15 text-white/65 font-light"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            {ctas.map((cta, i) => {
              const Icon = cta.icon;
              const className = cta.primary
                ? 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 shadow-lg shadow-white/10 transition-all'
                : 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/20 text-white text-sm font-medium hover:bg-white/12 hover:border-white/30 backdrop-blur-sm transition-all';

              if (cta.onClick) {
                return (
                  <motion.button
                    key={cta.label}
                    type="button"
                    onClick={cta.onClick}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className={className}
                  >
                    <Icon size={16} />
                    {cta.label}
                  </motion.button>
                );
              }

              return (
                <motion.a
                  key={cta.label}
                  href={cta.href}
                  target={cta.external ? '_blank' : undefined}
                  rel={cta.external ? 'noopener noreferrer' : undefined}
                  download={cta.download || undefined}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className={className}
                >
                  <Icon size={16} />
                  {cta.label}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.a
            href={`mailto:${contact.email}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 inline-block text-sm text-white/45 hover:text-white/70 transition-colors font-light"
          >
            {contact.email}
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
