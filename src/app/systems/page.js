import Link from 'next/link';
import { projects } from '@/data/projects';

export const metadata = {
    title: 'Systems Architecture | Yash Karthiya',
    description: 'Case studies of high-throughput backend systems, distributed architectures, and practical AI implementations.',
};

export default function SystemsPage() {
    return (
        <div className="section-container">
            <h1>SYSTEMS ARCHITECTURE</h1>
            <p style={{ marginBottom: '3rem' }}>
                A collection of engineering case studies focusing on backend architecture,
                system design, and practical AI implementation.
            </p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card mb-2" style={{ border: '1px solid var(--border-color)', padding: '1.5rem' }}>
                        <div className="flex-row" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{project.title}</h2>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ID: {project.id}</span>
                        </div>

                        <p className="text-sec" style={{ marginBottom: '1.5rem' }}>
                            {project.shortDescription}
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className="nav-header">Tech Stack</span>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.techStack.map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.1rem 0.4rem',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--bg-secondary)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link href={`/systems/${project.id}?id=${project.id}`}
                            style={{
                                display: 'inline-block',
                                border: '1px solid var(--text-primary)',
                                padding: '0.5rem 1rem',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase'
                            }}>
                            View System Architecture &gt;&gt;
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
