import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User, Tag, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = data?.projects || [];

  if (!projects.length) {
    return null;
  }

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient animate-glow">Projects</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto animate-slide-in-right">
            Real-world applications built with modern technologies, focusing on scalability, user experience, and practical solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 text-xs text-foreground/80 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-xs text-foreground/80 rounded-md">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Meta */}
                <div className="flex items-center gap-4 text-sm text-foreground/60 flex-wrap">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{project.role}</span>
                  </div>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 overflow-hidden">
                {selectedProject.images && selectedProject.images.length > 1 ? (
                  <>
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${
                            idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-foreground/60 text-lg mb-6">
                  {selectedProject.subtitle}
                </p>

                {/* Project Meta */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <User size={18} />
                    <span className="font-medium">Role:</span>
                    <span>{selectedProject.role}</span>
                  </div>
                  {selectedProject.timeline && (
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Calendar size={18} />
                      <span className="font-medium">Timeline:</span>
                      <span>{selectedProject.timeline}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Tag size={18} />
                    <span className="font-medium">Type:</span>
                    <span>{selectedProject.type}</span>
                  </div>
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-foreground rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.keyFeatures.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-foreground/70"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;


