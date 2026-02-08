'use client';

import { MoonStar, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEME_KEY = 'yk-theme';

function detectTheme() {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle({ compact = false, className = '' }) {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const storedTheme = localStorage.getItem(THEME_KEY);
        const resolvedTheme =
            storedTheme === 'dark' || storedTheme === 'light'
                ? storedTheme
                : root.dataset.theme || detectTheme();

        root.dataset.theme = resolvedTheme;
        setTheme(resolvedTheme);
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem(THEME_KEY, nextTheme);
    };

    const modeLabel = theme === 'dark' ? 'Dark' : 'Light';
    const classes = ['theme-toggle', compact ? 'is-compact' : '', className].filter(Boolean).join(' ');

    return (
        <button
            type="button"
            className={classes}
            onClick={toggleTheme}
            aria-label={mounted ? `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme` : 'Toggle theme'}
            aria-pressed={theme === 'dark'}
            title={`Theme: ${modeLabel}`}
        >
            <span className="theme-toggle__icon" aria-hidden="true">
                {theme === 'dark' ? <SunMedium size={compact ? 18 : 16} /> : <MoonStar size={compact ? 18 : 16} />}
            </span>
            {!compact && (
                <span className="theme-toggle__copy">
                    <span className="theme-toggle__label">Theme</span>
                    <span className="theme-toggle__value">{modeLabel}</span>
                </span>
            )}
        </button>
    );
}
