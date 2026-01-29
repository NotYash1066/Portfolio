import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { USER_CONTENT } from '../content';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., mailto or API)
        window.location.href = `mailto:${USER_CONTENT.email}?subject=Contact from Portfolio - ${formState.name}&body=${formState.message}`;
    };

    return (
        <section id="contact" className="py-20 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            Feel free to reach out directly!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href={`mailto:${USER_CONTENT.email}`} className="font-medium">{USER_CONTENT.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-secondary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <a href={`tel:${USER_CONTENT.phone}`} className="font-medium">{USER_CONTENT.phone}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-green-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">{USER_CONTENT.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-surface border border-white/5 p-8 rounded-2xl shadow-lg">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="How can I help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-opacity flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
