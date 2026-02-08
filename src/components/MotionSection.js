'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function MotionSection({ children, delay = 0, y = 24, className = '', once = true, style, ...props }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.section
            className={className}
            style={style}
            {...props}
            initial={reduceMotion ? false : { opacity: 0, y }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.25 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.section>
    );
}

export function MotionStagger({ children, className = '', delay = 0 }) {
    const reduceMotion = useReducedMotion();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: 0.12,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    };

    if (reduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div className={className} variants={container} initial="hidden" animate="show">
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <motion.div key={i} variants={item}>
                        {child}
                    </motion.div>
                ))
                : children}
        </motion.div>
    );
}

export function MotionCard({ children, className = '', delay = 0, style }) {
    const reduceMotion = useReducedMotion();
    const mergedStyle = { transformStyle: 'preserve-3d', ...(style || {}) };

    if (reduceMotion) {
        return <div className={className} style={style}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            style={mergedStyle}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
        >
            {children}
        </motion.div>
    );
}
