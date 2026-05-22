import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = ({ data }) => {
  const contact = data?.contact || {};
  const social = data?.social || {};

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone?.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contact.location,
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: social.github, label: 'GitHub' },
    { icon: Linkedin, href: social.linkedin, label: 'LinkedIn' },
  ].filter((s) => s.href);

  return (
    <section id="contact" className="relative">
      <SectionHeading
        title="Get In"
        highlight="Touch"
        subtitle="Open to international internships, remote opportunities, and technology-business roles. Let's connect."
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 border border-white/10"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactInfo.map((info, index) => {
              const content = (
                <>
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
                    <info.icon size={20} className="text-white/90" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/45 uppercase tracking-wider mb-0.5">{info.label}</p>
                    <p className="text-white font-light text-sm md:text-base truncate">{info.value}</p>
                  </div>
                </>
              );

              const className =
                'flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all';

              if (info.href) {
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={className}
                  >
                    {content}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={className}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-6 border-t border-white/10">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <link.icon size={18} />
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${contact.email}?subject=Portfolio%20Inquiry`}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-colors"
            >
              <Mail size={18} />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
