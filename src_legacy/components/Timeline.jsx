import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { USER_CONTENT } from '../content';

const Timeline = () => {
    return (
        <section id="timeline" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Journey & Achievements</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {USER_CONTENT.timeline.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>

                                {/* Content Card */}
                                <div className="w-full md:w-[calc(50%-2rem)] ml-6 md:ml-0 bg-surface/50 border border-white/5 p-6 rounded-xl hover:bg-surface/80 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="flex items-center gap-2 text-primary font-medium text-sm">
                                            <Calendar size={14} /> {event.year}
                                        </span>
                                        <span className="flex items-center gap-1 text-gray-500 text-xs">
                                            <MapPin size={12} /> {event.location}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                                    <h4 className="text-secondary font-medium mb-3">{event.subtitle}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
