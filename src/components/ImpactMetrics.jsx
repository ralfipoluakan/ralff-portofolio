import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const ImpactMetrics = ({ data }) => {
  const metrics = data?.impactMetrics || [];
  if (!metrics.length) return null;

  return (
    <section id="impact" className="relative">
      <SectionHeading
        title="Professional"
        highlight="Impact"
        subtitle="Measurable outcomes from academic excellence, leadership, and project delivery."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 text-center border border-white/10 hover:border-white/20 transition-colors"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white mb-1">
              {metric.value}
              {metric.suffix && (
                <span className="text-sm md:text-base font-light text-white/50 ml-0.5">
                  {metric.suffix}
                </span>
              )}
            </p>
            <p className="text-xs md:text-sm text-white/55 font-light leading-snug">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactMetrics;
