import { MotionSection, MotionStagger } from '@/components/MotionSection';
import HeroSystemMap from '@/components/HeroSystemMap';
import TypewriterText from '@/components/TypewriterText';

const principles = [
    {
        index: '01',
        title: 'Reliability First',
        description: 'Systems are built to survive load spikes, partial failures, and ambiguous requirements.',
    },
    {
        index: '02',
        title: 'Grounded AI',
        description: 'Retrieval and deterministic checks before generation. Costs and hallucinations stay in check.',
    },
    {
        index: '03',
        title: 'Clear Trade-offs',
        description: 'Every decision is documented with constraints, risks, and validation notes.',
    },
];

const competencies = [
    { label: 'Backend Systems', detail: 'Spring Boot, FastAPI, System Design Patterns' },
    { label: 'Database Architecture', detail: 'PostgreSQL (ACID), MongoDB (Schema flexibility)' },
    { label: 'Applied AI', detail: 'Semantic Search, Vector Stores (ChromaDB), Agentic Workflows' },
    { label: 'Infrastructure', detail: 'Docker, AWS Deployment, CI/CD Pipelines' },
];

const operatingPrinciples = [
    'Architecture before implementation.',
    'Observability and failure modes are first-class.',
    'Documentation as a product, not an afterthought.',
];

export default function Home() {
    return (
        <div className="section-container kinetic-home">
            <MotionSection className="section-block hero kinetic-hero" id="overview" data-rail="Overview">
                <HeroSystemMap />
                <div className="hero-layout kinetic-grid">
                    <MotionStagger className="hero-intro kinetic-primary">
                        <span className="section-no" aria-hidden="true">01</span>
                        <span className="hero-eyebrow">Systems Engineering Portfolio</span>
                        <h1 className="hero-title">
                            <TypewriterText text="Backend Engineer • Systems Architect" />
                        </h1>
                        <p className="hero-sub">
                            I design high-throughput backend systems, distributed architectures, and grounded AI pipelines.
                            This is a technical portfolio focused on reliability, trade-offs, and real engineering decisions.
                        </p>
                        <div className="hero-cta">
                            <a href="/systems" className="cta-link">Explore Systems</a>
                            <a href="/ai" className="cta-link">Applied AI Notes</a>
                            <a href="/contact" className="cta-link">Contact</a>
                        </div>
                    </MotionStagger>

                    <MotionStagger className="atelier-stack kinetic-secondary" delay={0.1}>
                        {principles.map((principle) => (
                            <article key={principle.index} className="atelier-card kinetic-callout">
                                <div className="atelier-index">{principle.index}</div>
                                <h2 className="atelier-title">{principle.title}</h2>
                                <p className="text-sec">{principle.description}</p>
                            </article>
                        ))}
                    </MotionStagger>
                </div>
            </MotionSection>

            <MotionSection className="section-block kinetic-section" delay={0.1} id="summary" data-rail="Summary">
                <div className="kinetic-section-no" aria-hidden="true">02</div>
                <div className="kinetic-section-main">
                    <h2>Engineering Summary</h2>
                    <p className="text-sec">
                        This site documents the engineering work of <strong>Yash Karthiya</strong>. I build robust backend systems
                        that prioritize reliability and clearer abstractions. My recent work involves optimizing
                        <strong> Retrieval-Augmented Generation (RAG)</strong> flows for academic data and designing
                        event-driven architectures for real-time applications.
                    </p>
                </div>
                <div className="panel panel-ruled kinetic-panel">
                    <div className="panel-title">Core Competencies</div>
                    <ul className="mono-list">
                        {competencies.map((competency) => (
                            <li key={competency.label}>
                                <strong>{competency.label}</strong>: {competency.detail}
                            </li>
                        ))}
                    </ul>
                </div>
            </MotionSection>

            <MotionSection className="section-block kinetic-section kinetic-section--reverse" delay={0.15} id="purpose" data-rail="Purpose">
                <div className="kinetic-section-no" aria-hidden="true">03</div>
                <div className="kinetic-section-main">
                    <h2>Purpose</h2>
                    <p className="text-sec">
                        This is not a marketing portfolio. It is a technical documentation of systems I have built,
                        design decisions I have made, and the trade-offs encountered along the way.
                    </p>
                    <p className="text-sec">
                        Explore the <a href="/systems">Systems</a> section for detailed case studies.
                    </p>
                </div>
                <div className="panel panel-ruled kinetic-panel">
                    <div className="panel-title">Operating Principles</div>
                    <ul className="mono-list">
                        {operatingPrinciples.map((principle) => (
                            <li key={principle}>{principle}</li>
                        ))}
                    </ul>
                </div>
            </MotionSection>
        </div>
    );
}
