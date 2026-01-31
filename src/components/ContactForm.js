'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    style={{
                        padding: '0.8rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    style={{
                        padding: '0.8rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    style={{
                        padding: '0.8rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    style={{
                        padding: '0.8rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                    }}
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                style={{
                    padding: '1rem',
                    background: status === 'success' ? 'var(--accent-color)' : 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: status === 'submitting' ? 'wait' : 'pointer',
                    textTransform: 'uppercase',
                    marginTop: '1rem'
                }}
            >
                {status === 'submitting' ? 'Transmitting...' : status === 'success' ? 'Message Sent' : 'Send Transmission'}
            </button>

            {status === 'success' && (
                <div style={{ marginTop: '1rem', color: 'var(--accent-color)', border: '1px solid var(--accent-color)', padding: '1rem' }}>
                    Message received. I will respond to your frequency shortly.
                </div>
            )}

            {status === 'error' && (
                <div style={{ marginTop: '1rem', color: 'var(--error)', border: '1px solid var(--error)', padding: '1rem' }}>
                    Transmission failed. Please try again or email directly at yash.karthiya.1066@gmail.com.
                </div>
            )}
        </form>
    );
}
