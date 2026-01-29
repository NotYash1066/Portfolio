export default function Home() {
    return (
        <div className="section-container">
            <h1>[01] Overview</h1>

            <p style={{ fontSize: '1.1rem', maxWidth: '800px', marginBottom: '2rem' }}>
                This site documents the engineering work of Yash Karthiya, a Computer Engineering undergraduate specializing in
                backend systems, distributed architectures, and applied AI pipelines.
            </p>

            <div className="border-box">
                <h3 style={{ marginTop: 0 }}>Core Competencies</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>- <strong>Backend Systems</strong>: Spring Boot, FastAPI, System Design</li>
                    <li>- <strong>Database Architecture</strong>: PostgreSQL (SQL), MongoDB (NoSQL)</li>
                    <li>- <strong>Applied AI</strong>: RAG Pipelines, Vector DBs, LLM Integration</li>
                    <li>- <strong>Infrastructure</strong>: AWS, Docker, Linux</li>
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
