import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'One-to-One Consulting | TwistRise LLC',
    description: 'Dedicated consulting sessions for executive leadership.',
};

export default function Consulting() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>One-to-One Consulting</h1>
                        <p>Private, high-level advisory for executive decision-makers.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', cursor: 'default' }}>
                        <img src="/images/office_ambience.png" alt="One-to-One Consulting" className="card-img" style={{ maxHeight: '400px' }} />
                        <h2 style={{ marginBottom: '1.5rem', marginTop: '1.5rem', fontSize: '2rem' }}>Executive Leadership Support</h2>
                        <p>
                            Leadership can be isolating. Our One-to-One Consulting service offers dedicated sessions specifically for executive leadership. These sessions provide a confidential environment to discuss strategic challenges, validate ideas, and receive neutral, third-party perspectives.
                        </p>
                        <p>
                            Session benefits:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Neutral Perspective:</strong> An unbiased sounding board for your strategic ideas.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Confidentiality:</strong> A safe space to discuss sensitive internal challenges.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Focused Problem Solving:</strong> Dedicated time to deep-dive into specific operational or strategic blockers.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Accountability:</strong> Regular check-ins to ensure you are moving forward on your key initiatives.</li>
                        </ul>
                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <Link href="/contact" className="cta-button">Schedule a Session</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
