import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = ({ data }) => {
  console.log('Contact received:', data);

  // Fallback if no data
  const contact = data?.contact || {};
  const social = data?.social || {};

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email || 'ralffpoluakan@gmail.com',
      href: `mailto:${contact.email || 'ralffpoluakan@gmail.com'}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone || '+62 812 4198 8202',
      href: `tel:${contact.phone || '+6281241988202'}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contact.location || 'Manado, North Sulawesi, Indonesia',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: social.github || '#', label: 'GitHub' },
    { icon: Linkedin, href: social.linkedin || '#', label: 'LinkedIn' },
    { icon: Instagram, href: social.instagram || '#', label: 'Instagram' }
  ];

  console.log('Contact: Rendering with contact data:', contact);

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Get In <span className="text-white/50">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto animate-slide-in-right font-light leading-relaxed">
            Ready to collaborate? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-white mb-6">Let's Connect</h3>
              <p className="text-white/70 mb-8 font-light">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 glass rounded-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">{info.label}</p>
                    <p className="text-white font-light">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-light text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
