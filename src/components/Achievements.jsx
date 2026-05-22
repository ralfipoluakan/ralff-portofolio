import { motion } from 'framer-motion';
import { Trophy, Medal, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';

const badgeStyles = {
  gold: 'from-amber-500/20 to-yellow-600/10 border-amber-500/30',
  silver: 'from-slate-400/20 to-slate-600/10 border-slate-400/30',
  bronze: 'from-orange-600/20 to-amber-800/10 border-orange-500/30',
};

const badgeIcons = {
  gold: Trophy,
  silver: Medal,
  bronze: Rocket,
};

const Achievements = ({ data }) => {
  const achievements = data?.achievements || [];
  if (!achievements.length) return null;

  return (
    <section id="achievements" className="relative">
      <SectionHeading
        title="Competition &"
        highlight="Achievements"
        subtitle="International-level competition results demonstrating business analysis, strategic thinking, and innovation."
      />
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, index) => {
          const Icon = badgeIcons[item.badge] || Trophy;
          const style = badgeStyles[item.badge] || badgeStyles.bronze;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl p-6 md:p-8 bg-gradient-to-br ${style} border backdrop-blur-xl transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 border border-white/15">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-white mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm mb-1 font-light">{item.event}</p>
              <p className="text-white/40 text-xs mb-4">{item.period}</p>
              <p className="text-white/65 text-sm font-light leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
