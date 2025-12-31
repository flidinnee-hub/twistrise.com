import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | TwistRise LLC',
    description: 'About TwistRise LLC - Our mission, ethical standards, and approach to business consulting.',
};

export default function About() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>About TwistRise LLC</h1>
                        <p>A professional advisory firm dedicated to integrity, clarity, and structural improvement.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '3rem' }}>
                        <div className="card" style={{ flexDirection: 'row', gap: '2rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
                                <p>
                                    At TwistRise LLC, our mission is to provide small and medium-sized businesses with the
                                    high-calibre strategic insight typically reserved for large enterprises. We believe that
                                    sound decision-making is the foundation of long-term business stability.
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <h2 style={{ marginBottom: '1.5rem' }}>Our Approach</h2>
                            <p>
                                We do not believe in &quot;hacks&quot; or shortcuts. Our consulting methodology is rooted in
                                fundamental business principles: financial prudence, operational efficiency, and risk
                                management. We work collaboratively with our clients to understand their unique challenges
                                and develop tailored, actionable roadmaps.
                            </p>
                        </div>

                        <div className="card">
                            <h2 style={{ marginBottom: '1.5rem' }}>Ethical Standards</h2>
                            <p>
                                We adhere to strict ethical guidelines. We prioritize client confidentiality and provide
                                objective advice free from conflicts of interest. TwistRise LLC is committed to full
                                compliance with all United States regulations and international best practices in business
                                consulting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
