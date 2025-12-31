
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | TwistRise LLC',
    description: 'Cookie Policy for TwistRise LLC.',
};

export default function Cookie() {
    return (
        <main className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '2rem' }}>Cookie Policy</h1>
                <p style={{ marginBottom: '2rem', color: '#64748B' }}>Last Updated: December 2024</p>

                <h3>1. What Are Cookies</h3>
                <p>Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

                <h3>2. How We Use Cookies</h3>
                <p>We use cookies to analyze traffic to our website and to understand visitors&apos; behavior. We use this information to maintain, protect, and improve our services.</p>
                <ul>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off in our systems.</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>Analytical Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                </ul>

                <h3>3. Managing Cookies</h3>
                <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.</p>
            </div>
        </main>
    );
}
