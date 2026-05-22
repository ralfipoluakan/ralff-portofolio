import { motion } from 'framer-motion';

const SectionHeading = ({ title, highlight, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 md:mb-16 ${alignClass}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4">
        {title} {highlight && <span className="text-white/45">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-white/55 max-w-3xl font-light leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
