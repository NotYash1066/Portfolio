import DesignNoteList from '@/components/DesignNoteList';

import { MotionSection } from '@/components/MotionSection';
import TypewriterText from '@/components/TypewriterText';

export const metadata = {
    title: 'Design Notes | Yash Karthiya',
    description: 'Engineering logs, decision records, and technical essays on RAG, Distributed Systems, and Database Architecture.',
};

export default function DesignNotesPage() {
    const notes = [
        {
            id: 1,
            title: 'Designing RAG for Hundreds of Documents',
            summary: 'Strategies for efficient chunking and retrieval when dealing with diverse institutional data formats.',
            content: 'When building CollegeInfo-Agent, naïve chunking failed for tables. We moved to a semantic-aware splitter that respects document boundaries. By storing metadata alongside vectors, we improved retrieval accuracy by 40%. We also implemented a hybrid search (Keywork + Vector) using MongoDB Atlas Search to handle specific query terms better than pure semantic search.'
        },
        {
            id: 2,
            title: 'JWT Authentication: Key Mistakes',
            summary: 'Why storing tokens in localStorage is dangerous and how httpOnly cookies solve XSS vulnerabilities.',
            content: 'In Skill-Swap, I initially stored JWTs in localStorage. After researching XSS vectors, I migrated to httpOnly cookies. This prevents malicious scripts from reading the token. I also implemented a refresh token rotation strategy to handle session expiry gracefully without forcing the user to log in repeatedly.'
        },
        {
            id: 3,
            title: 'SQL vs NoSQL: A Decision Framework',
            summary: 'Why I chose PostgreSQL for the Shop System but MongoDB for Skill-Swap.',
            content: 'The Shop System required strict ACID guarantees for inventory management, making PostgreSQL the clear winner. We used transactions to ensure no stock was sold twice. Skill-Swap, however, needed flexible schemas for user profiles and diverse service listings, so MongoDB was a better fit for rapid iteration.'
        }
    ];

    return (
        <div className="section-container">
            <MotionSection id="notes" data-rail="Notes">
                <h1><TypewriterText text="DESIGN NOTES" /></h1>
                <p style={{ marginBottom: '3rem' }}>
                    Engineering logs, decision records, and technical essays. No fluff.
                </p>
            </MotionSection>

            <DesignNoteList notes={notes} />
        </div>
    );
}
