'use client';

import { useEffect, useRef, useState } from 'react';

function getThemeMode() {
    if (typeof window === 'undefined') return 'light';
    const explicitTheme = document.documentElement.dataset.theme;
    if (explicitTheme === 'dark' || explicitTheme === 'light') return explicitTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getThemeConfig(mode) {
    const isDark = mode === 'dark';

    return {
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
            darkMode: isDark,
            background: 'transparent',
            fontFamily: '"Spline Sans", sans-serif',
            fontSize: '17px',
            primaryColor: isDark ? '#172848' : '#ecf3ff',
            primaryTextColor: isDark ? '#e8efff' : '#10234a',
            primaryBorderColor: isDark ? '#7ca9ff' : '#2e5bc7',
            secondaryColor: isDark ? '#132341' : '#f4f8ff',
            tertiaryColor: isDark ? '#0e1b32' : '#f8fbff',
            lineColor: isDark ? '#9ab8f7' : '#2f4f97',
            textColor: isDark ? '#dce7ff' : '#16284f',
            actorBkg: isDark ? '#1a2d4f' : '#eef4ff',
            actorBorder: isDark ? '#88aeff' : '#2e5bc7',
            actorTextColor: isDark ? '#e6efff' : '#132a4f',
            signalColor: isDark ? '#aac5ff' : '#2f4f97',
            labelBoxBkgColor: isDark ? '#162744' : '#edf3ff',
            labelBoxBorderColor: isDark ? '#7ca9ff' : '#2f4f97',
            labelTextColor: isDark ? '#f0f5ff' : '#132a4f',
            noteBkgColor: isDark ? '#182a47' : '#edf3ff',
            noteBorderColor: isDark ? '#7ca9ff' : '#2f4f97',
            noteTextColor: isDark ? '#eaf1ff' : '#132a4f',
        },
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis',
            nodeSpacing: 70,
            rankSpacing: 80,
            padding: 24,
        },
        sequence: {
            useMaxWidth: true,
            wrap: true,
        },
        securityLevel: 'loose',
    };
}

export default function Mermaid({ chart, id }) {
    const ref = useRef(null);
    const [loading, setLoading] = useState(true);
    const [themeMode, setThemeMode] = useState('light');

    useEffect(() => {
        const root = document.documentElement;
        const updateTheme = () => setThemeMode(getThemeMode());
        updateTheme();

        const observer = new MutationObserver((mutations) => {
            const hasThemeChange = mutations.some(
                (mutation) => mutation.type === 'attributes' && mutation.attributeName === 'data-theme'
            );
            if (hasThemeChange) {
                updateTheme();
            }
        });

        observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let isCancelled = false;
        setLoading(true);

        const renderChart = async () => {
            if (ref.current) {
                try {
                    const mermaid = (await import('mermaid')).default;

                    if (isCancelled) return;

                    mermaid.initialize(getThemeConfig(themeMode));

                    ref.current.innerHTML = ''; // Clear previous
                    const { svg } = await mermaid.render(`mermaid-${id}-${Date.now()}`, chart);

                    if (!isCancelled && ref.current) {
                        ref.current.innerHTML = svg;

                        const svgElement = ref.current.querySelector('svg');
                        if (svgElement) {
                            svgElement.style.width = '100%';
                            svgElement.style.height = 'auto';
                        }

                        setLoading(false);
                    }
                } catch (err) {
                    console.error('Mermaid Render Error:', err);
                    if (!isCancelled && ref.current) {
                        ref.current.innerHTML = '<div style="color:var(--error); border:1px dashed var(--error); padding:1rem;">Failed to render diagram</div>';
                        setLoading(false);
                    }
                }
            }
        };

        // Small timeout to ensure DOM is ready during client transitions
        const timer = setTimeout(() => {
            renderChart();
        }, 100);

        return () => {
            isCancelled = true;
            clearTimeout(timer);
        };
    }, [chart, id, themeMode]);

    return (
        <div key={id} className="mermaid-frame">
            <div className="mermaid-frame__bar">
                <div className="mermaid-frame__title">SYSTEM DIAGRAM</div>
                <div className="mermaid-frame__leds">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div className="mermaid-container">
                {loading && <div className="mermaid-loading">[ Initializing Diagram... ]</div>}
                <div className="mermaid-diagram" ref={ref} style={{ display: loading ? 'none' : 'block' }} />
            </div>
        </div>
    );
}
