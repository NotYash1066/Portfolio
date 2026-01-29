'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (path) => {
        if (path === '/' && pathname !== '/') return false;
        return pathname.startsWith(path);
    };

    const navLinks = [
        { name: '01_Overview', path: '/' },
        { name: '02_Systems', path: '/systems' },
        { name: '03_Design_Notes', path: '/design-notes' },
        { name: '04_Applied_AI', path: '/ai' },
        { name: '05_Live_Status', path: '/demo' },
        { name: '06_Philosophy', path: '/philosophy' },
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                    position: 'fixed',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 100,
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem',
                    display: 'none', // Hidden on desktop via CSS media query
                    color: 'var(--text-primary)',
                    cursor: 'pointer'
                }}
            >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Sidebar Aside */}
            <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
                <div className="nav-section">
                    <Link href="/" className="nav-link" style={{ fontWeight: 'bold' }}>YASH KARTHIYA</Link>
                    <div className="text-sec" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                        Backend Systems &<br />Applied AI
                    </div>
                </div>

                <nav className="nav-section">
                    <span className="nav-header">Index</span>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="nav-section" style={{ marginTop: 'auto' }}>
                    <span className="nav-header">Links</span>
                    <a href="https://github.com/NotYash1066" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/yash-karthiya-b03906336/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
                    <a href="mailto:yash.karthiya.1066@gmail.com" className="nav-link">Email</a>
                </div>

                <div style={{ marginTop: '2rem', fontSize: '0.7rem', color: '#444', borderTop: '1px solid #222', paddingTop: '1rem' }}>
                    <span style={{ border: '1px solid #333', borderRadius: '3px', padding: '0 2px' }}>Ctrl</span> + <span style={{ border: '1px solid #333', borderRadius: '3px', padding: '0 2px' }}>K</span> to search
                </div>
            </aside>

            {/* Overlay for mobile when menu is open */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 40,
                        backdropFilter: 'blur(2px)' // nice glass effect
                    }}
                    className="mobile-overlay"
                />
            )}
        </>
    );
}
