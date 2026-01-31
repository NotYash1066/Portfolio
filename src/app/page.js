export default function Home() {
    return (
        <div className="section-container">
            {/* SEO & Navigation Header */}
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-1px' }}>
                    BACKEND ENGINEER
                </h1>

                {/* Jump Links / Terminal Navigation */}
                <div style={{ display: 'flex', gap: '1rem', fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    <a href="/systems" className="hover-underline">[ cd /systems ]</a>
                    <a href="/ai" className="hover-underline">[ cd /ai ]</a>
                    <a href="/contact" className="hover-underline">[ cd /contact ]</a>
                </div>

                {/* System Status / Man Page Block */}
                <div style={{
                    borderLeft: '2px solid var(--accent-color)',
                    paddingLeft: '1.5rem',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    lineHeight: '1.8',
                    background: 'var(--bg-secondary)',
                    padding: '1.5rem',
                    marginBottom: '3rem'
                }}>
                    <div style={{ marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-secondary)' }}>ROLE:</span> Backend Engineering Intern</div>
                    <div style={{ marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-secondary)' }}>LOCATION:</span> Ahmedabad, IN</div>
                    <div style={{ marginBottom: '0.5rem' }}><span style={{ color: 'var(--text-secondary)' }}>STACK:</span> Java (Spring Boot), Python (FastAPI), PostgreSQL, MongoDB</div>
                    <div><span style={{ color: 'var(--text-secondary)' }}>FOCUS:</span> High-Throughput Systems, Distributed Architecture, RAG Pipelines</div>
                </div>
            </div>

            <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '2rem', lineHeight: '1.6' }}>
                This site documents the engineering work of <strong>Yash Karthiya</strong>. I build robust backend systems
                that prioritize reliability and clearer abstractions. My recent work involves optimizing
                <strong>Retrieval-Augmented Generation (RAG)</strong> flows for academic data and designing
                event-driven architectures for real-time applications.
            </p>

            <div className="border-box">
                <h3 style={{ marginTop: 0 }}>Core Competencies</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>- <strong>Backend Systems</strong>: Spring Boot, FastAPI, System Design Patterns</li>
                    <li style={{ marginBottom: '0.5rem' }}>- <strong>Database Architecture</strong>: PostgreSQL (ACID compliance), MongoDB (Schema flexibility)</li>
                    <li style={{ marginBottom: '0.5rem' }}>- <strong>Applied AI</strong>: Semantic Search, Vector Stores (ChromaDB), Agentic Workflows</li>
                    <li style={{ marginBottom: '0.5rem' }}>- <strong>Infrastructure</strong>: Docker Containerization, AWS Deployment, CI/CD Pipelines</li>
                </ul>
            </div>

            <h2>Purpose</h2>
            <p className="text-sec">
                This is not a marketing portfolio. It is a technical documentation of systems I have built,
                design decisions I have made, and the trade-offs encountered along the way.
            </p>

            <p className="text-sec">
                Explore the <a href="/systems" style={{ textDecoration: 'underline' }}>Systems</a> section for detailed case studies.
            </p>
        </div>
    );
}
