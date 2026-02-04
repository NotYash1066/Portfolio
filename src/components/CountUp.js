'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function CountUp({ value, duration = 1200, suffix = '' }) {
    const reduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(reduceMotion ? value : 0);

    useEffect(() => {
        if (reduceMotion) return;

        let raf;
        const start = performance.now();
        const from = 0;
        const to = value;

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(from + (to - from) * eased);
            setDisplay(current);
            if (progress < 1) {
                raf = requestAnimationFrame(tick);
            }
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [value, duration, reduceMotion]);

    return (
        <span>
            {display}
            {suffix}
        </span>
    );
}
