
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | TwistRise LLC',
    description: 'Disclaimer for TwistRise LLC. No guarantees of results.',
};

export default function Disclaimer() {
    return (
        <main className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '2rem' }}>Disclaimer</h1>
                <p style={{ marginBottom: '2rem', color: '#64748B' }}>Last Updated: December 2024</p>

                <h3>1. Professional Advice Disclaimer</h3>
                <p>The information provided by TwistRise LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) on twistrise.com (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

                <h3>2. No Guarantees</h3>
                <p>Our consulting services are advisory in nature. We do not guarantee any specific results or outcomes from the use of our services. Past performance is not indicative of future results. Any business decisions you make based on our advice are at your own risk.</p>

                <h3>3. No Professional Relationship</h3>
                <p>Your use of the Site does not create a consultant-client relationship between you and TwistRise LLC. Such a relationship is only established upon the signing of a written engagement letter or agreement.</p>
            </div>
        </main>
    );
}
