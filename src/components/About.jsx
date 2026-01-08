import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, BarChart3, Building2, Layers } from 'lucide-react';

const About = () => {
  console.log('About component rendering');
  const coreFocusAreas = [
    {
      icon: Code,
      title: 'Full-Stack System Development',
      description: 'Building end-to-end web systems with clear separation between frontend and backend, focusing on maintainability, scalability, and real-world use cases.'
    },
    {
      icon: Shield,
      title: 'Role-Based & Workflow-Driven Applications',
      description: 'Designing applications with multi-role authentication, protected access, and operational workflows such as queue management, approval flows, and transaction lifecycles.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Dashboards & Reporting',
      description: 'Developing analytical dashboards and reporting systems that transform operational data into actionable insights for decision making.'
    },
    {
      icon: Building2,
      title: 'Real-World Business & Operational Systems',
      description: 'Creating applications that support real operational needs, including healthcare management systems, e-commerce platforms with payment integration, and organizational information systems.'
    },
    {
      icon: Layers,
      title: 'System Architecture & State Management',
      description: 'Applying structured architecture patterns, service layers, and scalable state management to ensure clean, reliable, and extensible applications.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            About <span className="text-white/50">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto animate-slide-in-left font-light leading-relaxed">
            I am a Computer Science and Information Systems student focused on building end-to-end, real-world web systems. I develop scalable and role-based applications across healthcare, e-commerce, and organizational platforms, combining solid system architecture with practical workflows. My experience in leadership and financial management helps me design solutions that align technology with real operational needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-light text-white mb-8 text-center tracking-tight">
            Core <span className="text-white/50">Focus Areas</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {coreFocusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
              >
                <area.icon size={32} className="text-white" />
              </motion.div>

              <h3 className="text-xl font-light text-white mb-3">
                {area.title}
              </h3>

              <p className="text-white/70 leading-relaxed text-sm font-light">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-4">
              My Journey
            </h3>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              My journey as a developer is shaped by building real-world, end-to-end web systems throughout my academic experience. I progressed from role-based organizational platforms to e-commerce and enterprise-level systems, including healthcare applications, supported by leadership and financial management experience that strengthened my understanding of workflows, accountability, and scalable system design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

