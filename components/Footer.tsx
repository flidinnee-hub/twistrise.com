import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h4>TwistRise LLC</h4>
                        <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Professional Business Consulting</p>
                        <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginTop: '0.5rem' }}>United States</p>
                    </div>
                    <div className="footer-column">
                        <h4>Legals</h4>
                        <div className="footer-links">
                            <Link href="/legal/privacy">Privacy Policy</Link>
                            <Link href="/legal/terms">Terms of Service</Link>
                            <Link href="/legal/cookie">Cookie Policy</Link>
                            <Link href="/legal/refund">Refund Policy</Link>
                            <Link href="/legal/disclaimer">Disclaimer</Link>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <div className="footer-links">
                            <a href="mailto:contact@twistrise.com">contact@twistrise.com</a>
                            <span>+1 917 728 1897</span>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} TwistRise LLC. All rights reserved. United States.
                </div>
            </div>
        </footer>
    );
}
