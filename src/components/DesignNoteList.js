'use client';

import { useState } from 'react';

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
            {notes.map(note => (
                <div key={note.id} style={{ marginBottom: '3rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '1.5rem' }}>
                    <div className="text-sec" style={{ fontSize: '0.8rem', fontFamily: 'monospace' }}>{note.date}</div>
                    <h2 style={{ marginTop: '0.5rem', marginBottom: '0.5rem', border: 'none', fontSize: '1.3rem' }}>{note.title}</h2>
                    <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{note.summary}</p>

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
                </div>
            ))}
        </div>
    );
}
