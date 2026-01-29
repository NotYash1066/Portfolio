'use client';

import { useState, useEffect } from 'react';

export default function DemoPage() {
    const [logs, setLogs] = useState([]);
    const [metrics, setMetrics] = useState({
        status: 'ONLINE',
        uptime: '99.98%',
        latency: '45ms',
        requests: 1240
    });

    useEffect(() => {
        // Simulate log generation
        const interval = setInterval(() => {
            const timestamp = new Date().toISOString();
            const endpoints = ['/api/v1/auth', '/api/v1/users', '/api/v1/inventory', '/api/v1/search'];
            const methods = ['GET', 'POST', 'PUT'];
            const statusCodes = [200, 200, 200, 201, 401, 500];

            const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
            const method = methods[Math.floor(Math.random() * methods.length)];
            const status = statusCodes[Math.floor(Math.random() * statusCodes.length)];

            const newLine = `[${timestamp}] ${method} ${endpoint} - ${status}`;

            setLogs(prev => [newLine, ...prev].slice(0, 10));

            setMetrics(prev => ({
                ...prev,
                requests: prev.requests + 1,
                latency: Math.floor(Math.random() * 50 + 20) + 'ms'
            }));

        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section-container">
            <h1>[05] Live System Status</h1>
            <p style={{ marginBottom: '2rem' }}>
                Real-time monitoring dashboard for backend services.
                (Simulated for demonstration purposes).
            </p>

            <div className="status-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div className="border-box" style={{ textAlign: 'center' }}>
                    <div className="text-sec" style={{ fontSize: '0.8rem' }}>SYSTEM STATUS</div>
                    <div style={{ color: 'var(--success)', fontWeight: 'bold', fontSize: '1.2rem' }}>{metrics.status}</div>
                </div>
                <div className="border-box" style={{ textAlign: 'center' }}>
                    <div className="text-sec" style={{ fontSize: '0.8rem' }}>UPTIME</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{metrics.uptime}</div>
                </div>
                <div className="border-box" style={{ textAlign: 'center' }}>
                    <div className="text-sec" style={{ fontSize: '0.8rem' }}>AVG LATENCY</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{metrics.latency}</div>
                </div>
                <div className="border-box" style={{ textAlign: 'center' }}>
                    <div className="text-sec" style={{ fontSize: '0.8rem' }}>TOTAL REQ</div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{metrics.requests}</div>
                </div>
            </div>

            <h3>Live Request Logs</h3>
            <div style={{
                background: '#111',
                border: '1px solid var(--border-color)',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                height: '200px',
                overflowY: 'hidden',
                color: '#ccc'
            }}>
                {logs.map((log, i) => (
                    <div key={i} style={{ marginBottom: '0.2rem', color: log.includes('500') ? 'var(--error)' : log.includes('401') ? 'var(--warning)' : 'inherit' }}>
                        {log}
                    </div>
                ))}
            </div>
        </div>
    );
}
