import Link from 'next/link';
import { projects } from '@/data/projects';
import { MotionSection, MotionCard } from '@/components/MotionSection';
import TypewriterText from '@/components/TypewriterText';

export const metadata = {
    title: 'Systems Architecture | Yash Karthiya',
    description: 'Case studies of high-throughput backend systems, distributed architectures, and practical AI implementations.',
};

export default function SystemsPage() {
    return (
        <div className="section-container">
            <MotionSection id="systems" data-rail="Systems" className="hero">
                <div className="hero-eyebrow">Case Study Index</div>
                <h1><TypewriterText text="Systems Architecture" /></h1>
                <p className="hero-sub" style={{ marginBottom: '0.5rem' }}>
                    A collection of engineering case studies focusing on backend architecture,
                    system design, and practical AI implementation.
                </p>
            </MotionSection>

            <div className="projects-grid" id="case-studies" data-rail="Case Studies">
                {projects.map((project, index) => (
                    <MotionCard key={project.id} className="project-card mb-2" delay={index * 0.05}>
                        <div className="flex-row" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{project.title}</h2>
                            <span className="project-tag">ID {project.id}</span>
                        </div>

                        <p className="text-sec" style={{ marginBottom: '1.5rem' }}>
                            {project.shortDescription}
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className="nav-header">Tech Stack</span>
                            <div className="project-meta">
                                {project.techStack.map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.1rem 0.4rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--surface-muted)',
                                        borderRadius: '999px'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link href={`/systems/${project.id}?id=${project.id}`}
                            className="cta-link">
                            View System Architecture &gt;&gt;
                        </Link>
                    </MotionCard>
                ))}
            </div>
        </div>
    );
}
