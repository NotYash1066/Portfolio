'use client';

import { useRef, useState } from 'react';
import SlideToSend from '@/components/SlideToSend';

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const formRef = useRef(null);

    const submitForm = async (formElement) => {
        setStatus('submitting');

        const formData = {
            name: formElement.name.value,
            email: formElement.email.value,
            subject: formElement.subject.value,
            message: formElement.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                formElement.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="panel"
            style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
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

            <SlideToSend
                disabled={status === 'submitting' || status === 'success'}
                message={status === 'success' ? 'Message Sent' : 'Slide to Send'}
                onSend={() => {
                    if (formRef.current && formRef.current.reportValidity()) {
                        submitForm(formRef.current);
                    }
                }}
            />

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
