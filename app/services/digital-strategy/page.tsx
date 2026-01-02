import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Strategy | TwistRise LLC',
    description: 'Strategic planning for digital infrastructure and software integration.',
};

export default function DigitalStrategy() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Digital Strategy</h1>
                        <p>Aligning your technology stack with your business goals.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', cursor: 'default' }}>
                        <img src="/images/service_process.png" alt="Digital Strategy" className="card-img" style={{ maxHeight: '400px' }} />
                        <h2 style={{ marginBottom: '1.5rem', marginTop: '1.5rem', fontSize: '2rem' }}>Digital Infrastructure Planning</h2>
                        <p>
                            In the modern landscape, technology should be an enabler, not a bottleneck. Our Digital Strategy service focuses on the strategic planning of your digital infrastructure. We help you make informed decisions about software selection, integration strategies, and data management policies.
                        </p>
                        <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
                            Note: We focus on infrastructure and efficiency. We do not provide marketing execution or social media management services.
                        </p>
                        <p>
                            Key focus areas include:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Tech Stack Evaluation:</strong> Assessing your current tools for redundancy and compatibility.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Integration Roadmaps:</strong> Ensuring your different software systems communicate effectively.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Data Governance:</strong> Establishing clear policies for data handling, security, and accessibility.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Vendor Selection:</strong> Providing objective advice on choosing the right technology partners.</li>
                        </ul>
                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <Link href="/contact" className="cta-button">Discuss Your Tech Stack</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
