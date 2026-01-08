import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye } from 'lucide-react';

const Certificates = ({ data }) => {
  console.log('Certificates received:', data);
  const [selectedCert, setSelectedCert] = useState(null);

  // Fallback if no data
  const certificates = data?.certificates || [];
  const displayCertificates = certificates.map((cert, index) => ({
    ...cert,
    title: cert.title // Use the title from db.json directly
  }));

  if (!certificates.length) {
    console.log('Certificates: No certificate data, showing fallback');
    return (
      <section id="certificates" className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
            Certifications that validate my expertise in modern web development technologies
          </p>
        </div>
      </section>
    );
  }

  console.log('Certificates: Rendering with certificates:', certificates);

  return (
    <section id="certificates" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Professional <span className="text-white/50">Certificates</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto animate-slide-in-left font-light leading-relaxed">
            Certifications that validate my expertise in modern web development technologies
            and professional skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {displayCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-3"
                    >
                      <Eye size={24} className="text-white" />
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-lg font-light text-white text-center group-hover:text-white/80 transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass rounded-2xl p-8">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                >
                  <X size={20} />
                </button>

                <div className="text-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full max-h-96 object-contain rounded-xl mb-6 mx-auto"
                  />
                  <h3 className="text-2xl font-light text-white">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
