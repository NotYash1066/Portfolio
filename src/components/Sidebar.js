'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Sidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (path) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname.startsWith(path);
    };

    const navLinks = [
        { name: '01 Overview', path: '/' },
        { name: '02 Systems', path: '/systems' },
        { name: '03 Design Notes', path: '/design-notes' },
        { name: '04 Applied AI', path: '/ai' },
        { name: '05 Philosophy', path: '/philosophy' },
        { name: '06 Contact', path: '/contact' },
    ];

    const handleLinkClick = () => {
        setMobileOpen(false);
    };

    return (
        <>
            <div className="mobile-controls">
                <ThemeToggle compact className="theme-toggle--mobile" />
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    type="button"
                    aria-expanded={mobileOpen}
                    aria-controls="site-sidebar"
                >
                    {mobileOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            <aside id="site-sidebar" className={`sidebar ${mobileOpen ? 'open' : ''}`}>
                <div>
                    <Link href="/" className="brand" onClick={handleLinkClick}>
                        Yash Karthiya
                    </Link>
                    <div className="brand-sub">
                        Backend Systems & Applied AI
                    </div>
                    <div className="sidebar-meta">
                        <span>Ahmedabad, IN</span>
                        <span>Open to Backend Internships</span>
                    </div>
                    <div className="sidebar-badges">
                        <span className="project-tag">Systems Focused</span>
                        <span className="project-tag">RAG + Distributed</span>
                    </div>
                </div>

                <nav className="nav-section">
                    <span className="nav-header">Index</span>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={handleLinkClick}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="nav-section" style={{ marginTop: 'auto' }}>
                    <span className="nav-header">Links</span>
                    <a
                        href="/resume.pdf"
                        download="Yash_Karthiya_Resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                    >
                        Resume (PDF)
                    </a>
                    <a href="https://github.com/NotYash1066" target="_blank" rel="noopener noreferrer" className="nav-link">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/yash-karthiya-b03906336/" target="_blank" rel="noopener noreferrer" className="nav-link">
                        LinkedIn
                    </a>
                </div>

                <div className="sidebar-hint">
                    <kbd>Ctrl</kbd> + <kbd>K</kbd> to search
                </div>

                <ThemeToggle className="theme-toggle--sidebar" />
            </aside>

            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="mobile-overlay"
                />
            )}
        </>
    );
}
