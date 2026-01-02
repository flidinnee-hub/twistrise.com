import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Market Research | TwistRise LLC',
    description: 'Independent research into market conditions and competitor activity.',
};

export default function MarketResearch() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Market Research</h1>
                        <p>Data-driven insights to support your decision-making.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card" style={{ maxWidth: '800px', margin: '0 auto', cursor: 'default' }}>
                        <img src="/images/service_research.png" alt="Market Research" className="card-img" style={{ maxHeight: '400px' }} />
                        <h2 style={{ marginBottom: '1.5rem', marginTop: '1.5rem', fontSize: '2rem' }}>Competitive Intelligence & Trends</h2>
                        <p>
                            Making decisions in a vacuum is risky. Our Market Research service provides you with independent, objective research into market conditions, regulatory environments, and competitor activity. We don't just give you data; we provide reports designed to support your internal decision-making processes.
                        </p>
                        <p>
                            What we research:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Competitor Landscape:</strong> Understanding who your true competitors are and what they are offering.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Industry Trends:</strong> Identifying emerging shifts in your sector that could impact your business model.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Customer Sentiment:</strong> Analyzing available data to understand changing customer expectations.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Regulatory Environment:</strong> Keeping you informed of relevant compliance and legal shifts.</li>
                        </ul>
                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <Link href="/contact" className="cta-button">Get Market Insights</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
