import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { USER_CONTENT } from '../content';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-black/50 flex items-center justify-center">
                            {/* Use profile image if available, else fallback to icon */}
                            <img
                                src={USER_CONTENT.profileImage}
                                alt={USER_CONTENT.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <User size={100} className="text-gray-600 hidden absolute" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Driven by <span className="text-primary">Innovation</span> & <span className="text-secondary">Performance</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {USER_CONTENT.about.description1}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {USER_CONTENT.about.description2}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
