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
            className="panel contact-form"
        >
            <div className="form-field">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                />
            </div>

            <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                />
            </div>

            <div className="form-field">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="form-input"
                />
            </div>

            <div className="form-field">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="form-input"
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
                <div className="form-status is-success">
                    Message received. I will respond shortly.
                </div>
            )}

            {status === 'error' && (
                <div className="form-status is-error">
                    Transmission failed. Please try again or email directly at yash.karthiya.1066@gmail.com.
                </div>
            )}
        </form>
    );
}
