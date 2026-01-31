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
        <div key={id} className="mermaid-container" style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            marginBottom: '1rem',
            overflowX: 'auto',
            minHeight: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {loading && <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>[ Initializing Diagram... ]</div>}
            <div ref={ref} style={{ display: loading ? 'none' : 'block' }} />
        </div>
    );
}
