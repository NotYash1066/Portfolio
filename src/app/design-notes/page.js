export default function DesignNotesPage() {
    const notes = [
        {
            id: 1,
            date: '2026-05-12',
            title: 'Designing RAG for Hundreds of Documents',
            summary: 'Strategies for efficient chunking and retrieval when dealing with diverse institutional data formats.',
            content: 'When building CollegeInfo-Agent, naïve chunking failed for tables. We moved to a semantic-aware splitter...'
        },
        {
            id: 2,
            date: '2026-04-03',
            title: 'JWT Authentication: Key Mistakes',
            summary: 'Why storing tokens in localStorage is dangerous and how httpOnly cookies solve XSS vulnerabilities.',
            content: 'In Skill-Swap, I initially stored JWTs in localStorage. After researching XSS vectors, I migrated to httpOnly cookies...'
        },
        {
            id: 3,
            date: '2026-02-15',
            title: 'SQL vs NoSQL: A Decision Framework',
            summary: 'Why I chose PostgreSQL for the Shop System but MongoDB for Skill-Swap.',
            content: 'The Shop System required strict ACID guarantees for inventory. Skill-Swap needed flexible schemas for user profiles...'
        }
    ];

    return (
        <div className="section-container">
            <h1>[03] Design Notes</h1>
            <p style={{ marginBottom: '3rem' }}>
                Engineering logs, decision records, and technical essays. No fluff.
            </p>

            <div className="notes-list">
                {notes.map(note => (
                    <div key={note.id} style={{ marginBottom: '3rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '1.5rem' }}>
                        <div className="text-sec" style={{ fontSize: '0.8rem', fontFamily: 'monospace' }}>{note.date}</div>
                        <h2 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', border: 'none', fontSize: '1.3rem' }}>{note.title}</h2>
                        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{note.summary}</p>
                        <p className="text-sec" style={{ fontSize: '0.9rem' }}>{note.content} <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>[Read More...]</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
