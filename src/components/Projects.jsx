import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, User, Github, X } from 'lucide-react';
import SectionHeading from './SectionHeading';

const ProjectCardImage = ({ project }) => (
  <div
    className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient || 'from-slate-700/50 to-slate-900/80'}`}
  >
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        onError={(e) => {
          e.target.style.opacity = '0';
        }}
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
    <div className="absolute bottom-4 left-4 right-4">
      <p className="text-xs text-white/50 uppercase tracking-wider mb-1">{project.type}</p>
      <h3 className="text-xl font-medium text-white">{project.title}</h3>
    </div>
  </div>
);

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = (data?.projects || []).filter((p) => !p.featured);

  if (!projects.length && !data?.projects?.length) return null;

  const displayProjects = projects.length ? projects : data.projects;

  return (
    <section id="projects" className="relative">
      <SectionHeading
        title="Project"
        highlight="Portfolio"
        subtitle="Product-oriented showcase of full-stack applications spanning mobile, security, healthcare, e-commerce, and organizational systems."
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {displayProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 cursor-pointer transition-all duration-400"
            onClick={() => setSelectedProject(project)}
          >
            <ProjectCardImage project={project} />
            <div className="p-6">
              <p className="text-white/45 text-sm mb-3 font-light line-clamp-1">{project.subtitle}</p>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-white/8 text-white/70 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack?.length > 4 && (
                  <span className="px-2 py-0.5 text-[11px] rounded-md bg-white/8 text-white/50">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="flex items-center gap-1">
                  <User size={12} />
                  {project.role}
                </span>
                {project.timeline && (
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {project.timeline}
                  </span>
                )}
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/8 hover:bg-white/14 text-white/80 text-xs transition-colors"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white text-black hover:bg-white/90 text-xs font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-[200] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative h-48 bg-gradient-to-br ${selectedProject.gradient || ''}`}>
                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-light text-white mb-1">{selectedProject.title}</h2>
                <p className="text-white/50 mb-4">{selectedProject.subtitle}</p>
                <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack?.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-white/10 text-white/75">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-6">
                  {selectedProject.keyFeatures?.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/65">
                      <span className="w-1 h-1 rounded-full bg-violet-400 mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
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

export default Projects;
