import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';
import { USER_CONTENT } from '../content';

const TechStack = () => {
    // Map icons to categories
    const getIcon = (category) => {
        switch (category) {
            case "Languages": return <Code2 className="text-blue-400" size={32} />;
            case "Frameworks/Backend": return <Server className="text-green-400" size={32} />;
            case "Frontend & Mobile": return <Layout className="text-purple-400" size={32} />;
            case "Databases": return <Database className="text-yellow-400" size={32} />;
            default: return <Wrench className="text-red-400" size={32} />;
        }
    };

    return (
        <section id="tech" className="py-20 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {USER_CONTENT.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-surface border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    {getIcon(skill.category)}
                                </div>
                                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-black/40 text-gray-300 text-sm rounded-full border border-white/5 hover:border-white/20 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
