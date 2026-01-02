'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SENDING');

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        // Construct Mailto Link
        const subject = `Inquiry from ${name} (${email})`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:contact@twistrise.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Simulate a brief delay for UX, then open email client
        setTimeout(() => {
            window.location.href = mailtoLink;
            setStatus('SUCCESS');
        }, 1000);
    };

    if (status === 'SUCCESS') {
        return (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Thank you!</h3>
                <p>We are opening your email client to send this message.</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                    If it didn't open, please email us directly at <strong>contact@twistrise.com</strong>.
                </p>
                <button
                    onClick={() => setStatus('IDLE')}
                    className="cta-button"
                    style={{ marginTop: '2rem', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}
                >
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                    <input type="text" id="name" name="name" required disabled={status === 'SENDING'} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                    <input type="email" id="email" name="email" required disabled={status === 'SENDING'} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                    <textarea id="message" name="message" rows={5} required disabled={status === 'SENDING'}></textarea>
                </div>

                <button
                    type="submit"
                    className="cta-button"
                    style={{ border: 'none', cursor: 'pointer', fontSize: '1rem', width: '100%', opacity: status === 'SENDING' ? 0.7 : 1 }}
                    disabled={status === 'SENDING'}
                >
                    {status === 'SENDING' ? 'Preparing...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
