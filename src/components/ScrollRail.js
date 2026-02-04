'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRail() {
    const pathname = usePathname();
    const [items, setItems] = useState([]);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('[data-rail]'));
        const mapped = sections.map((section) => ({
            id: section.id,
            label: section.getAttribute('data-rail') || section.id,
        }));
        setItems(mapped);

        if (sections.length === 0) {
            setActiveId(null);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) {
                    setActiveId(visible[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: '0px 0px -60% 0px',
                threshold: [0.2, 0.4, 0.6, 0.8],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    const hasRail = useMemo(() => items.length > 1, [items.length]);

    if (!hasRail) return null;

    return (
        <div className="scroll-rail" aria-hidden="true">
            <div className="scroll-rail__title">SECTION INDEX</div>
            {items.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={`scroll-rail__item ${activeId === item.id ? 'is-active' : ''}`}>
                    <span className="scroll-rail__dot" />
                    <span className="scroll-rail__label">{item.label}</span>
                </a>
            ))}
        </div>
    );
}
