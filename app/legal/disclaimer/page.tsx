import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | TwistRise LLC',
    description: 'Disclaimer for TwistRise LLC.',
};

export default function Disclaimer() {
    return (
        <main className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="card" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '3rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#0f172a'
                }}>
                    <h1 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '2.5rem' }}>Disclaimer</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748b', fontSize: '0.9rem' }}>Last Updated: December 2024</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>1. Professional Advice Disclaimer</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            The information provided by TwistRise LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on twistrise.com (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>2. No Guarantees</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            Our consulting services are advisory in nature. We do not guarantee any specific results or outcomes from the use of our services. Past performance is not indicative of future results. Any business decisions you make based on our advice are at your own risk.
                        </p>
                    </section>

                    <section>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>3. No Professional Relationship</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            Your use of the Site does not create a consultant-client relationship between you and TwistRise LLC. Such a relationship is only established upon the signing of a written engagement letter or agreement.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
