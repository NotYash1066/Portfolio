'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const listRef = useRef(null);
    const router = useRouter();

    const pages = [
        { name: 'Overview', path: '/' },
        { name: 'Systems Index', path: '/systems' },
        { name: 'Design Notes', path: '/design-notes' },
        { name: 'Applied AI', path: '/ai' },
        { name: 'Philosophy', path: '/philosophy' },
        { name: 'Contact Me', path: '/contact' },
        // Systems
        { name: 'System: CollegeInfo-Agent', path: '/systems/college-info-agent' },
        { name: 'System: Shop Management', path: '/systems/shop-management-system' },
        { name: 'System: Skill-Swap', path: '/systems/skill-swap' },
        { name: 'System: Safe-Plate', path: '/systems/safe-plate' },
    ];

    const filtered = pages.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

    // Toggle Open/Close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setOpen(prev => !prev);
            }
            if (!open) return;

            if (e.key === 'Escape') {
                setOpen(false);
                return;
            } else if (e.key === 'ArrowDown') {
                if (filtered.length === 0) return;
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filtered.length);
            } else if (e.key === 'ArrowUp') {
                if (filtered.length === 0) return;
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);
            } else if (e.key === 'Enter') {
                if (filtered.length === 0) return;
                e.preventDefault();
                if (filtered[selectedIndex]) {
                    handleSelect(filtered[selectedIndex].path);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, filtered, selectedIndex]);

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    // Scroll selected item into view - Moved here to respect Rules of Hooks
    useEffect(() => {
        if (open && listRef.current) {
            const selectedElement = listRef.current.children[selectedIndex];
            if (selectedElement) {
                selectedElement.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [selectedIndex, open]);

    const handleSelect = (path) => {
        router.push(path);
        setOpen(false);
        setQuery('');
    };

    if (!open) return null;

    return (
        <div className="command-overlay" onClick={() => setOpen(false)}>
            <div className="command-modal" onClick={e => e.stopPropagation()}>
                <div className="command-header">
                    <Search size={18} color="var(--text-secondary)" />
                    <input
                        autoFocus
                        placeholder="Search systems, logs, entries..."
                        className="command-input"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <span className="command-hint">ESC</span>
                </div>

                <div ref={listRef} className="command-list">
                    {filtered.length === 0 ? (
                        <div className="command-empty">No results found.</div>
                    ) : (
                        filtered.map((item, i) => (
                            <div
                                key={item.path}
                                onClick={() => handleSelect(item.path)}
                                className={`command-item ${i === selectedIndex ? 'is-active' : ''}`}
                                onMouseEnter={() => setSelectedIndex(i)}
                            >
                                <span>{item.name}</span>
                                <span className="command-path">{item.path}</span>
                            </div>
                        ))
                    )}
                </div>

                <div className="command-footer">
                    Use arrows to navigate, Enter to select
                </div>
            </div>
        </div>
    );
}
