import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';

const assetUrl = (path) => encodeURI(path);

const isPdf = (path) => path?.toLowerCase().endsWith('.pdf');

const CertificatePreview = ({ cert, className = 'h-48' }) => {
  const src = assetUrl(cert.image);

  if (isPdf(cert.image)) {
    return (
      <div
        className={`w-full ${className} flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-900/40 to-slate-900/80 border border-white/10`}
      >
        <FileText size={40} className="text-white/70" />
        <span className="text-xs text-white/50 uppercase tracking-wider">PDF Certificate</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={cert.title}
      className={`w-full ${className} object-cover transition-transform duration-300 group-hover:scale-110`}
    />
  );
};

const Certificates = ({ data }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const certificates = data?.certificates || [];

  if (!certificates.length) return null;

  return (
    <section id="certificates" className="relative">
      <SectionHeading
        title="Professional"
        highlight="Certificates"
        subtitle="Certifications validating leadership, workshops, and international competition involvement."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (cert.id - 1) * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="glass rounded-2xl p-5 hover:shadow-2xl transition-all duration-300 h-full border border-white/10 hover:border-white/20">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <CertificatePreview cert={cert} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Eye size={22} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-light text-white text-center leading-snug">
                {cert.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full max-h-[92vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/15">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div className="text-center">
                  {isPdf(selectedCert.image) ? (
                    <iframe
                      src={assetUrl(selectedCert.image)}
                      title={selectedCert.title}
                      className="w-full h-[70vh] rounded-xl border border-white/10 bg-white mb-6"
                    />
                  ) : (
                    <img
                      src={assetUrl(selectedCert.image)}
                      alt={selectedCert.title}
                      className="w-full max-h-[70vh] object-contain rounded-xl mb-6 mx-auto"
                    />
                  )}
                  <h3 className="text-xl md:text-2xl font-light text-white">{selectedCert.title}</h3>
                  {isPdf(selectedCert.image) && (
                    <a
                      href={assetUrl(selectedCert.image)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-white/60 hover:text-white underline"
                    >
                      Open PDF in new tab
                    </a>
                  )}
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
