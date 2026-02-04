'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorTrail() {
    const dotRef = useRef(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const media = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
        const update = () => setEnabled(media.matches);
        update();
        media.addEventListener('change', update);
        return () => media.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        if (!enabled) return;

        let raf = null;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const animate = () => {
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY - currentY) * 0.12;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
            raf = requestAnimationFrame(animate);
        };

        const handleMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        window.addEventListener('mousemove', handleMove);
        raf = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [enabled]);

    if (!enabled) return null;

    return <div className="cursor-trail" ref={dotRef} aria-hidden="true" />;
}
