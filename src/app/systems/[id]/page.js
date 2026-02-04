import { projects } from '@/data/projects';
import Link from 'next/link';
import Mermaid from '@/components/Mermaid';
import { MotionSection } from '@/components/MotionSection';
import TypewriterText from '@/components/TypewriterText';

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) {
        return {
            title: 'System Not Found',
            description: 'The requested system architecture document could not be found.',
        };
    }

    return {
        title: project.title,
        description: project.shortDescription,
        openGraph: {
            title: `${project.title} | System Architecture`,
            description: project.shortDescription,
            // images: project.image ? [project.image] : [], // If you have project images later
        },
    };
}

export default async function ProjectPage({ params }) {
    // In Next.js 15+, params is a Promise, but for 13/14 it's an object. 
    // To be safe in newer versions, we await it if it's a promise, or just use it.
    // Actually, let's just find the project directly.

    // Note: Standard way for generateStaticParams + component.
    const { id } = await params;
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <div>System not found.</div>;
    }

    return (
        <div className="section-container">
            <MotionSection id="overview" data-rail="Overview">
                <Link href="/systems" className="text-sec" style={{ fontSize: '0.9rem', marginBottom: '2rem', display: 'block' }}>
                    &lt; Back to Index
                </Link>

                <h1 style={{ border: 'none', marginBottom: '0.5rem' }}>
                    <TypewriterText text={project.title} />
                </h1>
                <div className="flex-row" style={{ marginBottom: '2rem' }}>
                    {project.techStack.map(tech => (
                        <span key={tech} style={{ fontSize: '0.8rem', color: 'var(--accent-color)' }}>[{tech}]</span>
                    ))}
                </div>
            </MotionSection>

            <MotionSection delay={0.1} className="case-study-section mb-2" id="context" data-rail="Context">
                <h3>01_Context & Problem</h3>
                <p className="text-sec" style={{ maxWidth: '700px' }}>{project.problemStatement}</p>
            </MotionSection>

            <MotionSection delay={0.15} className="case-study-section mb-2" id="architecture" data-rail="Architecture">
                <h3>02_Architecture & Design</h3>
                {project.mermaid && (
                    <Mermaid chart={project.mermaid} id={project.id} />
                )}
                <div style={{
                    border: '1px dashed var(--border-color)',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    whiteSpace: 'pre-wrap',
                    display: 'none' // Hidden in favor of diagram, but kept in code just in case
                }}>
                    {project.architecture.map((line, i) => (
                        <div key={i}>{`> ${line}`}</div>
                    ))}
                </div>
                <p className="text-sec">{project.solution}</p>
            </MotionSection>

            <MotionSection delay={0.2} className="case-study-section mb-2" id="decisions" data-rail="Decisions">
                <h3>03_Key Technical Decisions</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.technicalDecisions.map((decision, i) => (
                        <li key={i} style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--border-color)' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Decision:</strong> <span className="text-sec">{decision}</span>
                        </li>
                    ))}
                </ul>
            </MotionSection>

            <MotionSection delay={0.25} className="case-study-section mb-2" id="challenges" data-rail="Challenges">
                <h3>04_Challenges & Resolutions</h3>
                <div className="border-box">
                    {project.challenges.map((challenge, i) => (
                        <div key={i} style={{ marginBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--warning)' }}>! WARNING:</span> <span className="text-sec">{challenge}</span>
                        </div>
                    ))}
                </div>
            </MotionSection>

            <MotionSection delay={0.3} id="source" data-rail="Source">
                <div style={{ marginTop: '3rem' }}>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                        [View Source Code on GitHub]
                    </a>
                </div>
            </MotionSection>
        </div>
    );
}
