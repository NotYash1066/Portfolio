'use client';

import { useMemo } from 'react';

export default function HeroSystemMap() {
    const nodes = useMemo(
        () => [
            { x: 8, y: 20 },
            { x: 28, y: 38 },
            { x: 52, y: 16 },
            { x: 72, y: 40 },
            { x: 88, y: 20 },
            { x: 40, y: 70 },
            { x: 64, y: 75 },
        ],
        []
    );

    return (
        <svg className="hero-map" viewBox="0 0 100 100" aria-hidden="true">
            <g className="hero-map__lines">
                <line x1="8" y1="20" x2="28" y2="38" />
                <line x1="28" y1="38" x2="52" y2="16" />
                <line x1="52" y1="16" x2="72" y2="40" />
                <line x1="72" y1="40" x2="88" y2="20" />
                <line x1="28" y1="38" x2="40" y2="70" />
                <line x1="40" y1="70" x2="64" y2="75" />
                <line x1="64" y1="75" x2="72" y2="40" />
            </g>
            <g className="hero-map__nodes">
                {nodes.map((node, i) => (
                    <circle key={i} cx={node.x} cy={node.y} r="2.4" />
                ))}
            </g>
        </svg>
    );
}
