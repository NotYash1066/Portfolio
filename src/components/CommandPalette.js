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
        { name: 'Live Status Demo', path: '/demo' },
        { name: 'Philosophy', path: '/philosophy' },
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
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filtered.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filtered.length) % filtered.length);
            } else if (e.key === 'Enter') {
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
        <div style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999,
            display: 'flex', justifyContent: 'center', paddingTop: '5rem'
        }} onClick={() => setOpen(false)}>

            <div style={{
                width: '500px', maxWidth: '90%', background: '#111',
                border: '1px solid var(--border-color)', borderRadius: '4px',
                display: 'flex', flexDirection: 'column', height: 'fit-content', maxHeight: '400px'
            }} onClick={e => e.stopPropagation()}>

                <div style={{
                    padding: '1rem', borderBottom: '1px solid var(--border-color)',
                    display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                    <Search size={18} color="var(--text-secondary)" />
                    <input
                        autoFocus
                        placeholder="Search systems, logs, entries..."
                        style={{
                            background: 'transparent', border: 'none', color: 'white',
                            flex: 1, fontFamily: 'var(--font-mono)', fontSize: '1rem', outline: 'none'
                        }}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <span style={{ fontSize: '0.7rem', border: '1px solid #444', padding: '0.1rem 0.3rem', borderRadius: '4px', color: '#888' }}>ESC</span>
                </div>

                <div ref={listRef} style={{ overflowY: 'auto', padding: '0.5rem 0' }}>
                    {filtered.length === 0 ? (
                        <div style={{ padding: '1rem', color: '#666', textAlign: 'center' }}>No results found.</div>
                    ) : (
                        filtered.map((item, i) => (
                            <div key={i}
                                onClick={() => handleSelect(item.path)}
                                style={{
                                    padding: '0.75rem 1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderLeft: '2px solid transparent',
                                    background: i === selectedIndex ? '#222' : 'transparent',
                                    borderLeftColor: i === selectedIndex ? 'var(--text-primary)' : 'transparent'
                                }}
                                onMouseEnter={() => setSelectedIndex(i)}
                            >
                                <span>{item.name}</span>
                                <span style={{ fontSize: '0.7rem', color: '#666', fontFamily: 'monospace' }}>{item.path}</span>
                            </div>
                        ))
                    )}
                </div>

                <div style={{
                    padding: '0.5rem', borderTop: '1px solid var(--border-color)',
                    fontSize: '0.7rem', color: '#555', textAlign: 'right'
                }}>
                    Use arrows to navigate, Enter to select
                </div>
            </div>
        </div>
    );
}
