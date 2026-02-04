import { MotionSection } from '@/components/MotionSection';
import TypewriterText from '@/components/TypewriterText';

export const metadata = {
    title: 'Philosophy | Yash Karthiya',
    description: 'My engineering mindset: Backend stability over frontend polish, defensive programming, and choosing the right tool for the job.',
};

export default function PhilosophyPage() {
    return (
        <div className="section-container">
            <MotionSection id="philosophy" data-rail="Overview">
                <h1><TypewriterText text="PHILOSOPHY" /></h1>
            </MotionSection>

            <MotionSection delay={0.1} className="philosophy-section" style={{ marginBottom: '4rem' }} id="backend-first" data-rail="Backend First">
                <h2><TypewriterText text="Backend First" /></h2>
                <p>
                    A pretty UI cannot save a broken system. I prioritize data integrity,
                    race-condition handling, and API contract stability over frontend polish.
                </p>
            </MotionSection>

            <MotionSection delay={0.15} className="philosophy-section" style={{ marginBottom: '4rem' }} id="debugging" data-rail="Debugging">
                <h2><TypewriterText text="Debugging Mindset" /></h2>
                <p>
                    "It works on my machine" is not an answer. I assume the network is unreliable,
                    the database will time out, and users will send malformed JSON.
                </p>
                <div className="panel" style={{ marginTop: '1rem', fontFamily: 'var(--font-body)' }}>
                    &gt; logging.error("Transaction failed: " + e.message) <br />
                    &gt; metrics.increment("payment_failure") <br />
                    &gt; alert_admin() // if failure_rate &gt; 5%
                </div>
            </MotionSection>

            <MotionSection delay={0.2} className="philosophy-section" id="redesign" data-rail="Redesign">
                <h2><TypewriterText text="What I'd Redesign" /></h2>
                <p>
                    Looking back at <strong>Skill-Swap</strong>: I used MongoDB for everything.
                    Today, I would use <strong>PostgreSQL</strong> for the user accounts to enforce stricter schema constraints,
                    and keep MongoDB only for the unstructured chat logs.
                </p>
            </MotionSection>
        </div>
    );
}
