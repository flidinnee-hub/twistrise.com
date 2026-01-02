import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business Advisory | TwistRise LLC',
    description: 'Expert business advisory services to identify structural weaknesses and opportunities for stability.',
};

export default function BusinessAdvisory() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Business Advisory</h1>
                        <p>Factual analysis and strategic guidance for sustainable growth.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', cursor: 'default' }}>
                        <img src="/images/service_strategy.png" alt="Business Advisory" className="card-img" style={{ maxHeight: '400px' }} />
                        <h2 style={{ marginBottom: '1.5rem', marginTop: '1.5rem', fontSize: '2rem' }}>Comprehensive Business Analysis</h2>
                        <p>
                            At TwistRise LLC, our Business Advisory service is designed to assist management teams in identifying structural weaknesses and uncovering opportunities for long-term stability. We move beyond surface-level observations to provide a deep, factual analysis of your current business model.
                        </p>
                        <p>
                            Our approach involves:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Operational Audit:</strong> A thorough review of your existing workflows and resource allocation.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Financial Health Check:</strong> Analyzing cash flow structures and profitability margins.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Risk Assessment:</strong> Identifying potential market and internal risks before they become critical issues.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Strategic Planning:</strong> Developing a roadmap that aligns your operational capabilities with ready market opportunities.</li>
                        </ul>
                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <Link href="/contact" className="cta-button">Request a Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
