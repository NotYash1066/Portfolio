'use client';

import { useState } from 'react';
import { MotionCard } from '@/components/MotionSection';

export default function DesignNoteList({ notes }) {
    const [expanded, setExpanded] = useState({});

    const toggleNote = (id) => {
        setExpanded(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="notes-list">
            {notes.map((note, index) => (
                <MotionCard key={note.id} className="panel" delay={index * 0.05} style={{ marginBottom: '2.5rem' }}>
                    {note.date ? (
                        <div className="project-tag" style={{ marginBottom: '0.8rem' }}>{note.date}</div>
                    ) : null}
                    <h2 style={{ marginTop: '0.2rem', marginBottom: '0.5rem', border: 'none', fontSize: '1.3rem' }}>{note.title}</h2>
                    <p style={{ marginBottom: '0.8rem', fontWeight: 'bold' }}>{note.summary}</p>

                    <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {expanded[note.id] ? (
                            <>
                                <p className="text-sec" style={{ marginBottom: '0.5rem' }}>{note.content}</p>
                                <span
                                    onClick={() => toggleNote(note.id)}
                                    style={{ textDecoration: 'underline', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '0.8rem' }}
                                >
                                    [ collapse ]
                                </span>
                            </>
                        ) : (
                            <p className="text-sec">
                                {note.content.substring(0, 100)}...{' '}
                                <span
                                    onClick={() => toggleNote(note.id)}
                                    style={{ textDecoration: 'underline', cursor: 'pointer', color: 'var(--text-primary)' }}
                                >
                                    [Read More...]
                                </span>
                            </p>
                        )}
                    </div>
                </MotionCard>
            ))}
        </div>
    );
}
