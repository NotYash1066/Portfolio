export default function PhilosophyPage() {
    return (
        <div className="section-container">
            <h1>[06] How I Think</h1>

            <div className="philosophy-section" style={{ marginBottom: '4rem' }}>
                <h2>Backend First</h2>
                <p>
                    A pretty UI cannot save a broken system. I prioritize data integrity,
                    race-condition handling, and API contract stability over frontend polish.
                </p>
            </div>

            <div className="philosophy-section" style={{ marginBottom: '4rem' }}>
                <h2>Debugging Mindset</h2>
                <p>
                    "It works on my machine" is not an answer. I assume the network is unreliable,
                    the database will time out, and users will send malformed JSON.
                </p>
                <div style={{ background: 'var(--bg-secondary)', padding: '1rem', border: '1px solid var(--border-color)', marginTop: '1rem', fontFamily: 'monospace' }}>
                    &gt; logging.error("Transaction failed: " + e.message) <br />
                    &gt; metrics.increment("payment_failure") <br />
                    &gt; alert_admin() // if failure_rate &gt; 5%
                </div>
            </div>

            <div className="philosophy-section">
                <h2>What I'd Redesign</h2>
                <p>
                    Looking back at <strong>Skill-Swap</strong>: I used MongoDB for everything.
                    Today, I would use <strong>PostgreSQL</strong> for the user accounts to enforce stricter schema constraints,
                    and keep MongoDB only for the unstructured chat logs.
                </p>
            </div>
        </div>
    );
}
