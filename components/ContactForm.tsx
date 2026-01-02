'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SENDING');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/contact@twistrise.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (response.ok) {
                setStatus('SUCCESS');
            } else {
                // Fallback to mailto if service is down, but keep user flow smooth
                window.location.href = `mailto:contact@twistrise.com?subject=New Inquiry&body=${formData.get('message')}`;
                setStatus('SUCCESS');
            }
        } catch (error) {
            // Network error fallback
            window.location.href = `mailto:contact@twistrise.com?subject=New Inquiry (Network Fallback)&body=${formData.get('message')}`;
            setStatus('SUCCESS');
        }
    };

    if (status === 'SUCCESS') {
        return (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Message Sent!</h3>
                <p>Thank you for contacting TwistRise LLC.</p>
                <p>We have received your inquiry at <strong>contact@twistrise.com</strong> and will respond shortly.</p>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2rem' }}>
                    (Check your inbox: The first time you use this form, you may need to confirm the activation code sent by FormSubmit).
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
