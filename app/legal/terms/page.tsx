import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | TwistRise LLC',
    description: 'Terms of Service for TwistRise LLC.',
};

export default function Terms() {
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
                    <h1 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '2.5rem' }}>Terms of Service</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748b', fontSize: '0.9rem' }}>Last Updated: December 2024</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>1. Agreement to Terms</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and TwistRise LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of the twistrise.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &ldquo;Site&rdquo;).
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>2. Intellectual Property Rights</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>3. User Representations</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>4. Limitations of Liability</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>5. Governing Law</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            These Terms shall be governed by and defined following the laws of the United States. TwistRise LLC and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a', fontSize: '1.25rem' }}>6. Contact Us</h3>
                        <p style={{ color: '#334155', lineHeight: '1.7' }}>
                            To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:contact@twistrise.com" style={{ color: '#2563eb', fontWeight: '500' }}>contact@twistrise.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
