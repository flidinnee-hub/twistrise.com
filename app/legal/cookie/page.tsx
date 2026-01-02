import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | TwistRise LLC',
    description: 'Cookie Policy for TwistRise LLC.',
};

export default function Cookie() {
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
                    <h1 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '2.5rem' }}>Cookie Policy</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748b !important', fontSize: '0.9rem' }}>Last Updated: December 2025</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>1. What Are Cookies</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>2. How We Use Cookies</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7', marginBottom: '1rem' }}>
                            We use cookies to analyze traffic to our website and to understand visitors&apos; behavior. We use this information to maintain, protect, and improve our services.
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc !important', color: '#334155 !important' }}>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}><strong style={{ color: '#0f172a !important' }}>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off in our systems.</li>
                            <li style={{ marginBottom: '0.5rem', color: '#334155 !important' }}><strong style={{ color: '#0f172a !important' }}>Analytical Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>3. Managing Cookies</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
