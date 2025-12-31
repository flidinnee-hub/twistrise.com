import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | TwistRise LLC',
    description: 'Contact TwistRise LLC for professional business consulting inquiries.',
};

export default function Contact() {
    return (
        <main>
            <section className="hero" style={{ paddingBottom: '3rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Contact Us</h1>
                        <p>Reach out to discuss how our advisory services can support your business goals.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

                        <div className="card">
                            <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
                            <p style={{ marginBottom: '2rem' }}>
                                We welcome inquiries from businesses seeking professional consulting services. Please use
                                the form or the direct contact details below. We aim to respond to all legitimate inquiries
                                within 1-2 business days.
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>Email</h4>
                                <p><a href="mailto:contact@twistrise.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>contact@twistrise.com</a></p>
                            </div>

                            <div>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-dark)' }}>Phone</h4>
                                <p style={{ fontWeight: 600 }}>+1 917 728 1897</p>
                            </div>
                        </div>

                        <div className="card">
                            <form action="#" method="POST">
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                                    <textarea id="message" name="message" rows={5} required></textarea>
                                </div>

                                <button type="submit" className="cta-button" style={{ border: 'none', cursor: 'pointer', fontSize: '1rem', width: '100%' }}>Send Message</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
