import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/images/logo.png" alt="TwistRise Logo" style={{ height: '32px', width: 'auto' }} />
            <span>TwistRise LLC</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact" className="cta-button">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
