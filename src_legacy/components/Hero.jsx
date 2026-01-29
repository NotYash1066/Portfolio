import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { USER_CONTENT } from '../content';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl -z-10 animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-secondary font-medium tracking-wide uppercase mb-4">Portfolio</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        {USER_CONTENT.hero.title} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{USER_CONTENT.hero.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        {USER_CONTENT.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-primary hover:bg-indigo-600 text-white rounded-full font-medium transition-colors cursor-pointer flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <a
                            href={USER_CONTENT.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-surface border border-white/10 hover:border-white/30 text-white rounded-full font-medium transition-colors cursor-pointer"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <a href={USER_CONTENT.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={USER_CONTENT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${USER_CONTENT.email}`} className="hover:text-red-400 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
