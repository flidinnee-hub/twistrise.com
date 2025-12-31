
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | TwistRise LLC',
    description: 'Privacy Policy for TwistRise LLC.',
};

export default function Privacy() {
    return (
        <main className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="card">
                    <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748B' }}>Last Updated: December 2024</p>

                    <h3>1. Introduction</h3>
                    <p>TwistRise LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (twistrise.com) and tell you about your privacy rights and how the law protects you.</p>

                    <h3>2. Data We Collect</h3>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                    <ul>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Contact Data:</strong> includes email address and telephone number.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                    </ul>

                    <h3>3. How We Use Your Data</h3>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul>
                        <li style={{ marginBottom: '0.5rem' }}>To respond to your inquiries regarding our consulting services.</li>
                        <li style={{ marginBottom: '0.5rem' }}>To manage our relationship with you.</li>
                        <li style={{ marginBottom: '0.5rem' }}>To improve our website and services.</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

                    <h3>5. Your Legal Rights</h3>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>

                    <h3>6. Contact Us</h3>
                    <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:contact@twistrise.com" style={{ color: 'var(--accent)' }}>contact@twistrise.com</a>.</p>
                </div>
            </div>
        </main>
    );
}
