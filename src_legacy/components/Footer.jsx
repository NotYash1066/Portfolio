import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { USER_CONTENT } from '../content';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {USER_CONTENT.name}. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href={USER_CONTENT.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={USER_CONTENT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${USER_CONTENT.email}`} className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                    Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
                </div>
            </div>
        </footer>
    );
};

export default Footer;
