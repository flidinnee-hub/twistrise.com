import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | TwistRise LLC',
    description: 'Explore our professional consulting services including business advisory, process optimization, and market research.',
};

export default function Services() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Our Consulting Services</h1>
                        <p>Structured impact analysis and strategic guidance for sustainable operations.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid">
                        <div className="card" id="advisory">
                            <img src="/images/service_strategy.png" alt="Business Advisory" className="card-img" />
                            <div>
                                <h3>Business Advisory</h3>
                                <p>We provide general business consulting to assist management in identifying structural weaknesses and opportunities for stability. Our advisory process focuses on factual analysis of your current business model.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/service_process.png" alt="Digital Strategy" className="card-img" />
                            <div>
                                <h3>Digital Strategy</h3>
                                <p>Strategic planning for digital infrastructure. We advise on software selection, integration strategies, and data management policies. <em>Note: We do not provide marketing execution or social media management services.</em></p>
                            </div>
                        </div>
                        <div className="card" id="process">
                            <img src="/images/service_process.png" alt="Process Optimization" className="card-img" />
                            <div>
                                <h3>Process Optimization</h3>
                                <p>Detailed mapping of internal business processes to reduce redundancy and improve throughput. We deliver documented standard operating procedures and workflow recommendations.</p>
                            </div>
                        </div>
                        <div className="card" id="research">
                            <img src="/images/service_research.png" alt="Market Research" className="card-img" />
                            <div>
                                <h3>Market Research</h3>
                                <p>Independent research into market conditions, regulatory environments, and competitor activity. We provide objective reports to support your internal decision-making processes.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/images/office_ambience.png" alt="One-to-One Consulting" className="card-img" />
                            <div>
                                <h3>One-to-One Consulting</h3>
                                <p>Dedicated consulting sessions for executive leadership. These sessions provide a confidential environment to discuss strategic challenges and receive neutral, third-party perspective.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="hero-content" style={{ textAlign: 'center', maxWidth: '800px' }}>
                        <h2>Ready to discuss your requirements?</h2>
                        <p style={{ marginBottom: '2rem' }}>Contact us to schedule a preliminary assessment aimed at understanding your specific business context.</p>
                        <Link href="/contact" className="cta-button">Contact TwistRise LLC</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
