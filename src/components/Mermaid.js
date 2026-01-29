'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

export default function Mermaid({ chart, id }) {
    const ref = useRef(null);

    useEffect(() => {
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

        const renderChart = async () => {
            if (ref.current) {
                try {
                    ref.current.innerHTML = ''; // Clear previous
                    const { svg } = await mermaid.render(`mermaid-${id}-${Date.now()}`, chart);
                    ref.current.innerHTML = svg;
                } catch (err) {
                    console.error('Mermaid Render Error:', err);
                    ref.current.innerHTML = '<div style="color:red; border:1px solid red; padding:1rem;">Failed to render diagram</div>';
                }
            }
        };

        // Small timeout to ensure DOM is ready during client transitions
        const timer = setTimeout(() => {
            renderChart();
        }, 100);

        return () => clearTimeout(timer);
    }, [chart, id]);

    return (
        <div key={id} className="mermaid-container" style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            marginBottom: '1rem',
            overflowX: 'auto'
        }}>
            <div ref={ref} />
        </div>
    );
}
