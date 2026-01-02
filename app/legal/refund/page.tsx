import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund Policy | TwistRise LLC',
    description: 'Refund Policy for TwistRise LLC.',
};

export default function Refund() {
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
                    <h1 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '2.5rem' }}>Refund Policy</h1>
                    <p style={{ marginBottom: '2rem', color: '#64748b !important', fontSize: '0.9rem' }}>Last Updated: December 2025</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>1. General Policy</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            At TwistRise LLC, we strive to provide the highest quality consulting and advisory services. Due to the nature of our services, which involve the time and expertise of our consultants, refunds are generally not provided for services that have already been rendered.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>2. Cancellation</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            If you have scheduled a one-to-one consulting session, you may cancel or reschedule up to 24 hours before the scheduled time for a full refund or credit. Cancellations made within 24 hours of the scheduled session may be subject to a cancellation fee or forfeiture of the session fee.
                        </p>
                    </section>

                    <section>
                        <h3 style={{ marginBottom: '1rem', color: '#0f172a !important', fontSize: '1.25rem' }}>3. Dispute Resolution</h3>
                        <p style={{ color: '#334155 !important', lineHeight: '1.7' }}>
                            If you are dissatisfied with our services, please contact us immediately at <a href="mailto:contact@twistrise.com" style={{ color: '#2563eb', fontWeight: '500' }}>contact@twistrise.com</a>. We interpret all disputes in good faith and will work with you to find a reasonable resolution, which may include additional consultation time or a partial refund at our sole discretion.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
