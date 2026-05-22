import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, User, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const FeaturedProject = ({ data }) => {
  const project = data?.projects?.find((p) => p.featured) || data?.projects?.[0];
  if (!project) return null;

  return (
    <section id="featured" className="relative">
      <SectionHeading
        title="Featured"
        highlight="Project"
        subtitle="Highlighting my most recent technology-driven solution with AI integration and real-world social impact."
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 group"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className={`relative h-64 lg:h-auto min-h-[280px] bg-gradient-to-br ${project.gradient || 'from-emerald-600/30 to-slate-900/80'}`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Sparkles size={14} className="text-emerald-400" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider">Flagship Project</span>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-light text-white mb-2">{project.title}</h3>
            <p className="text-white/50 text-lg mb-6 font-light">{project.subtitle}</p>
            <p className="text-white/75 leading-relaxed font-light mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg bg-white/8 border border-white/15 text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-white/55 mb-8">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {project.role}
              </span>
              {project.timeline && (
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {project.timeline}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
