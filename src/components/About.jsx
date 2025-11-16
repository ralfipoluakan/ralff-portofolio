import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, TrendingUp, Target } from 'lucide-react';

const About = () => {
  console.log('About component rendering');
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in modern web technologies including React, Node.js, and cloud platforms.'
    },
    {
      icon: Users,
      title: 'Leadership & Management',
      description: 'Proven track record in team leadership and organizational development.'
    },
    {
      icon: TrendingUp,
      title: 'Finance & Strategy',
      description: 'Strong background in financial analysis and strategic planning.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient animate-glow">Me</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto animate-slide-in-left">
            Passionate about bridging technology and finance to create innovative solutions
            that drive organizational success and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                <highlight.icon size={32} className="text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {highlight.title}
              </h3>

              <p className="text-foreground/70 leading-relaxed">
                {highlight.description}
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
            <h3 className="text-2xl font-bold text-foreground mb-4">
              My Journey
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              With a unique blend of technical expertise and financial acumen, I bring a holistic approach to problem-solving. My experience spans from developing cutting-edge web applications to leading high-performing teams and driving strategic initiatives that deliver measurable results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
