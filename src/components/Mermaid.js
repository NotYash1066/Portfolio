'use client';

import { useEffect, useRef, useState } from 'react';

export default function Mermaid({ chart, id }) {
    const ref = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false;
        setLoading(true);

        const renderChart = async () => {
            if (ref.current) {
                try {
                    const mermaid = (await import('mermaid')).default;

                    if (isCancelled) return;

                    mermaid.initialize({
                        startOnLoad: true,
                        theme: 'base',
                        themeVariables: {
                            darkMode: true,
                            background: '#111',
                            primaryColor: '#222',
                            primaryTextColor: '#fff',
                            primaryBorderColor: '#fff',
                            lineColor: '#aaa',
                            secondaryColor: '#333',
                            tertiaryColor: '#111'
                        },
                        securityLevel: 'loose',
                    });

                    ref.current.innerHTML = ''; // Clear previous
                    const { svg } = await mermaid.render(`mermaid-${id}-${Date.now()}`, chart);

                    if (!isCancelled && ref.current) {
                        ref.current.innerHTML = svg;
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
    }, [chart, id]);

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
                <div ref={ref} style={{ display: loading ? 'none' : 'block' }} />
            </div>
        </div>
    );
}
