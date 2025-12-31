
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund Policy | TwistRise LLC',
    description: 'Refund Policy for TwistRise LLC consulting services.',
};

export default function Refund() {
    return (
        <main className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ marginBottom: '2rem' }}>Refund Policy</h1>
                <p style={{ marginBottom: '2rem', color: '#64748B' }}>Last Updated: December 2024</p>

                <h3>1. General Policy</h3>
                <p>At TwistRise LLC, we strive to provide the highest quality consulting and advisory services. Due to the nature of our services, which involve the time and expertise of our consultants, refunds are generally not provided for services that have already been rendered.</p>

                <h3>2. Cancellation</h3>
                <p>If you have scheduled a one-to-one consulting session, you may cancel or reschedule up to 24 hours before the scheduled time for a full refund or credit. Cancellations made within 24 hours of the scheduled session may be subject to a cancellation fee or forfeiture of the session fee.</p>

                <h3>3. Dispute Resolution</h3>
                <p>If you are dissatisfied with our services, please contact us immediately at <a href="mailto:contact@twistrise.com" style={{ color: 'var(--accent)' }}>contact@twistrise.com</a>. We interpret all disputes in good faith and will work with you to find a reasonable resolution, which may include additional consultation time or a partial refund at our sole discretion.</p>
            </div>
        </main>
    );
}
