import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { USER_CONTENT } from '../content';

const Projects = () => {
    // Generate a random gradient for project placeholders if no image is provided
    const getGradient = (index) => {
        const gradients = [
            "linear-gradient(to right bottom, #4f46e5, #9333ea)",
            "linear-gradient(to right bottom, #2563eb, #06b6d4)",
            "linear-gradient(to right bottom, #db2777, #f43f5e)",
            "linear-gradient(to right bottom, #059669, #10b981)"
        ];
        return gradients[index % gradients.length];
    };

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {USER_CONTENT.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 shadow-lg group"
                        >
                            {/* Image Placeholder or Actual Image */}
                            <div
                                className="h-48 w-full flex items-center justify-center relative overflow-hidden"
                                style={{ background: project.image ? `url(${project.image}) center/cover` : getGradient(index) }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                {!project.image && <Layers className="text-white opacity-50 absolute right-4 top-4" size={24} />}
                                <h3 className="text-2xl font-bold text-white z-10 drop-shadow-md px-4 text-center">{project.title}</h3>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-secondary border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 text-sm mb-6 min-h-[80px]">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                                        >
                                            <Github size={18} /> Code
                                        </a>
                                    )}
                                    {/* Add Demo link if available in data later */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
