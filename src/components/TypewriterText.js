'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function TypewriterText({ text, className = '', speed = 28 }) {
    const reduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(reduceMotion ? text : '');

    useEffect(() => {
        if (reduceMotion) return;

        let i = 0;
        const tick = () => {
            i += 1;
            setDisplay(text.slice(0, i));
            if (i < text.length) {
                timer = window.setTimeout(tick, speed);
            }
        };

        let timer = window.setTimeout(tick, speed);
        return () => window.clearTimeout(timer);
    }, [text, speed, reduceMotion]);

    return (
        <span className={`typewriter ${className}`} aria-label={text}>
            {display}
            <span className="typewriter-caret" aria-hidden="true" />
        </span>
    );
}
