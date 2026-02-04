import { MotionSection, MotionStagger } from '@/components/MotionSection';
import CountUp from '@/components/CountUp';
import HeroSystemMap from '@/components/HeroSystemMap';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
    return (
        <div className="section-container">
            <MotionSection className="section-block hero" id="overview" data-rail="Overview">
                <HeroSystemMap />
                <MotionStagger>
                    <h1 className="hero-title">
                        <TypewriterText text="Backend Engineer • Systems Architect" />
                    </h1>
                    <p className="hero-sub">
                        I design high-throughput backend systems, distributed architectures, and grounded AI pipelines.
                        This is a technical portfolio focused on reliability, trade-offs, and real engineering decisions.
                    </p>
                    <div className="hero-actions">
                        <span className="hero-chip chip-accent">Available for Internships</span>
                        <span className="hero-chip">Ahmedabad, IN</span>
                        <span className="hero-chip">RAG • Distributed Systems</span>
                        <span className="hero-chip">Spring Boot • FastAPI</span>
                    </div>
                    <div className="hero-grid">
                        <div className="stat-card">
                            <div className="stat-label">Docs Indexed</div>
                            <div className="stat-value"><CountUp value={500} suffix="+" /></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Systems Built</div>
                            <div className="stat-value"><CountUp value={4} /></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">AI Principles</div>
                            <div className="stat-value"><CountUp value={3} /></div>
                        </div>
                    </div>
                </MotionStagger>
            </MotionSection>

            <MotionSection className="section-block split" delay={0.1} id="summary" data-rail="Summary">
                <div>
                    <h2>Engineering Summary</h2>
                    <p className="text-sec">
                        This site documents the engineering work of <strong>Yash Karthiya</strong>. I build robust backend systems
                        that prioritize reliability and clearer abstractions. My recent work involves optimizing
                        <strong> Retrieval-Augmented Generation (RAG)</strong> flows for academic data and designing
                        event-driven architectures for real-time applications.
                    </p>
                    <div className="hero-actions">
                        <a href="/systems" className="cta-link">Explore Systems</a>
                        <a href="/ai" className="cta-link">Applied AI Notes</a>
                        <a href="/contact" className="cta-link">Contact</a>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-title">Core Competencies</div>
                    <ul className="mono-list">
                        <li>- <strong>Backend Systems</strong>: Spring Boot, FastAPI, System Design Patterns</li>
                        <li>- <strong>Database Architecture</strong>: PostgreSQL (ACID compliance), MongoDB (Schema flexibility)</li>
                        <li>- <strong>Applied AI</strong>: Semantic Search, Vector Stores (ChromaDB), Agentic Workflows</li>
                        <li>- <strong>Infrastructure</strong>: Docker Containerization, AWS Deployment, CI/CD Pipelines</li>
                    </ul>
                </div>
            </MotionSection>

            <MotionSection className="section-block" delay={0.15} id="purpose" data-rail="Purpose">
                <h2>Purpose</h2>
                <p className="text-sec">
                    This is not a marketing portfolio. It is a technical documentation of systems I have built,
                    design decisions I have made, and the trade-offs encountered along the way.
                </p>
                <p className="text-sec">
                    Explore the <a href="/systems">Systems</a> section for detailed case studies.
                </p>
            </MotionSection>
        </div>
    );
}
