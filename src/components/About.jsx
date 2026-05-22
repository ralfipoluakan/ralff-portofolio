import { motion } from 'framer-motion';
import {
  Code2,
  Users,
  BarChart3,
  Lightbulb,
  Layers,
  Briefcase,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = ({ data }) => {
  const profile = data?.profile || {};
  const bio =
    profile.bio ||
    'Faculty of Computer Science student majoring in Information Systems with experience in leadership, project management, full-stack development, and organizational management.';

  const coreFocusAreas = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        'End-to-end web and mobile systems with role-based access, APIs, dashboards, and production-ready deployment.',
    },
    {
      icon: Users,
      title: 'Leadership & Project Management',
      description:
        'Co-founded UVICS, chaired international competitions, and coordinated cross-functional teams at scale.',
    },
    {
      icon: Briefcase,
      title: 'Business & Operational Analysis',
      description:
        'Aligning technology with operational needs through budgeting, stakeholder coordination, and strategic planning.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Systems',
      description:
        'Analytics dashboards, audit reporting, and risk visualization for informed decision-making.',
    },
    {
      icon: Lightbulb,
      title: 'Product & Problem Solving',
      description:
        'Technology-driven solutions from ideation to execution with adaptability and analytical thinking.',
    },
    {
      icon: Layers,
      title: 'UI/UX & System Design',
      description:
        'User-centered design, heuristic evaluation, and structured architecture for scalable applications.',
    },
  ];

  return (
    <section id="about" className="relative">
      <SectionHeading title="About" highlight="Me" subtitle={bio} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {coreFocusAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/80 to-violet-600/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <area.icon size={22} className="text-white" />
            </div>
            <h3 className="text-lg font-light text-white mb-2">{area.title}</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-10 glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-white/10 text-center"
      >
        <p className="text-white/55 text-sm uppercase tracking-widest mb-2">Education</p>
        <p className="text-white font-light text-lg">
          Bachelor&apos;s in Information Systems · Universitas Klabat
        </p>
        <p className="text-white/50 text-sm mt-1">GPA 3.83/4.00 · 119 credits completed · 2023 – Present</p>
      </motion.div>
    </section>
  );
};

export default About;
