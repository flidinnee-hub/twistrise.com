import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | TwistRise LLC',
    description: 'Privacy Policy for TwistRise LLC.',
};

export default function Privacy() {
    return (
        <main className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="card" style={{
                    backgroundColor: '#ffffff !important',
                    borderRadius: '16px',
                    padding: '3rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    color: '#0f172a !important'
                }}>
                    <h1 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '2.5rem' }}>Privacy Policy</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748b !important', fontSize: '0.9rem' }}>Last Updated: December 2024</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>1. Introduction</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            TwistRise LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (twistrise.com) and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>2. Data We Collect</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7', marginBottom: '1rem' }}>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc !important', color: '#334155 !important' }}>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}><strong style={{ color: '#0f172a !important' }}>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}><strong style={{ color: '#0f172a !important' }}>Contact Data:</strong> includes email address and telephone number.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}><strong style={{ color: '#0f172a !important' }}>Usage Data:</strong> includes information about how you use our website and services.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>3. How We Use Your Data</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7', marginBottom: '1rem' }}>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc !important', color: '#334155 !important' }}>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}>To respond to your inquiries regarding our consulting services.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}>To manage our relationship with you.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}>To improve our website and services.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>4. Data Security</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>5. Your Legal Rights</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                        </p>
                    </section>

                    <section>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>6. Contact Us</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:contact@twistrise.com" style={{ color: '#2563eb', fontWeight: '500' }}>contact@twistrise.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
